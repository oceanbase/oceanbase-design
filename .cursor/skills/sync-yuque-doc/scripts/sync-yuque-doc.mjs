#!/usr/bin/env node
/**
 * Sync Yuque markdown body → docs/spec/*.zh-CN.md
 *
 * Usage:
 *   node sync-yuque-doc.mjs --config <config.json> --body <yuque-body.md>
 *   node sync-yuque-doc.mjs --config <config.json> --body <yuque-body.md> --url-map <map.json>
 *   node sync-yuque-doc.mjs --config <config.json> --body <yuque-body.md> --skip-upload
 *
 * @see .cursor/skills/sync-yuque-doc/SKILL.md
 */
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import https from 'node:https';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function parseArgs(argv) {
  const args = { skipUpload: false, dryRun: false };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--config') args.config = argv[++i];
    else if (a === '--body') args.body = argv[++i];
    else if (a === '--url-map') args.urlMap = argv[++i];
    else if (a === '--skip-upload') args.skipUpload = true;
    else if (a === '--dry-run') args.dryRun = true;
    else throw new Error(`Unknown arg: ${a}`);
  }
  if (!args.config || !args.body) {
    throw new Error('Required: --config <json> --body <yuque-body.md>');
  }
  return args;
}

function loadJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function fetchUrl(url, redirects = 0) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location) {
          if (redirects > 5) return reject(new Error('too many redirects'));
          return resolve(fetchUrl(res.headers.location, redirects + 1));
        }
        if (res.statusCode !== 200) return reject(new Error(`${url} → ${res.statusCode}`));
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () => resolve(Buffer.concat(chunks)));
      })
      .on('error', reject);
  });
}

function extractImageUrls(body) {
  const re = /https:\/\/intranetproxy\.alipay\.com\/[^)\s"]+/g;
  return [...new Set(body.match(re) || [])];
}

async function downloadImages(urls, outDir, skipSet) {
  fs.mkdirSync(outDir, { recursive: true });
  const downloaded = [];
  for (const url of urls) {
    const name = url.split('/').pop();
    if (skipSet.has(name)) continue;
    const out = path.join(outDir, name);
    if (fs.existsSync(out) && fs.statSync(out).size > 500) {
      downloaded.push(name);
      continue;
    }
    try {
      const buf = await fetchUrl(url);
      fs.writeFileSync(out, buf);
      downloaded.push(name);
      console.log(`download ok: ${name} (${buf.length})`);
    } catch (e) {
      console.warn(`download skip: ${name} (${e.message})`);
    }
  }
  return downloaded;
}

function runHuameiUpload(dir, spaceId) {
  const outFile = path.join(os.tmpdir(), `huamei-upload-${Date.now()}.json`);
  const cmd = `huamei asset upload "${dir}" --space-id ${spaceId} --json 2>/dev/null | tee "${outFile}"`;
  try {
    execSync(`source ~/.zshrc 2>/dev/null || true; ${cmd}`, {
      shell: '/bin/zsh',
      stdio: 'inherit',
    });
  } catch {
    execSync(cmd, { shell: '/bin/bash', stdio: 'inherit' });
  }
  const raw = fs.readFileSync(outFile, 'utf8');
  const end = raw.lastIndexOf('}');
  return JSON.parse(raw.slice(0, end + 1));
}

function parseUploadJson(data) {
  const map = {};
  for (const r of data.results || []) {
    if (r.fileName && r.asset?.assetUrl) map[r.fileName] = r.asset.assetUrl;
  }
  return map;
}

function retryFailedUploads(dir, spaceId, data, map) {
  const failed = new Set((data.errors || []).map((e) => e.fileName));
  for (const fileName of failed) {
    const filePath = path.join(dir, fileName);
    if (!fs.existsSync(filePath)) continue;
    let uploadPath = filePath;
    let mapKey = fileName;
    if (fileName.endsWith('.png')) {
      const jpegPath = path.join(os.tmpdir(), fileName.replace(/\.png$/i, '.jpeg'));
      try {
        execSync(`sips -s format jpeg "${filePath}" --out "${jpegPath}"`, { stdio: 'pipe' });
        uploadPath = jpegPath;
      } catch (e) {
        console.warn(`sips failed for ${fileName}: ${e.message}`);
      }
    }
    try {
      const raw = execSync(
        `huamei asset upload "${uploadPath}" --space-id ${spaceId} --json 2>/dev/null`,
        { encoding: 'utf8', shell: '/bin/zsh' },
      );
      const end = raw.lastIndexOf('}');
      const one = JSON.parse(raw.slice(0, end + 1));
      const url = one.results?.[0]?.asset?.assetUrl;
      if (url) {
        map[mapKey] = url;
        console.log(`retry ok: ${fileName}`);
      }
    } catch (e) {
      console.warn(`retry fail: ${fileName}`);
    }
  }
}

function transformBody(body, config, urlMap) {
  const skipSet = new Set(config.skipImages || []);

  let out = body.replace(/<!--[\s\S]*?-->/g, '');

  for (const pattern of config.stripBlocks || []) {
    out = out.replace(new RegExp(pattern, 'g'), '');
  }

  out = out.replace(/https:\/\/intranetproxy\.alipay\.com\/[^)\s"]+/g, (url) => {
    const file = url.split('/').pop();
    if (skipSet.has(file)) return '';
    const cdn = urlMap[file];
    if (!cdn) throw new Error(`Missing CDN URL for ${file}`);
    return cdn;
  });

  out = out.replace(/!\[\]\(\)/g, '');
  out = out.replace(/^# /gm, '## ');
  return out.trim();
}

function buildDocument(config, body) {
  const fm = (config.frontmatter?.['zh-CN'] || '').trim();
  const intro = config.siteIntro?.['zh-CN'] || '';
  const parts = [];
  if (fm) parts.push(fm);
  if (intro) parts.push(intro);
  parts.push(body);
  return `${parts.join('\n\n')}\n`;
}

async function main() {
  const args = parseArgs(process.argv);
  const configPath = path.isAbsolute(args.config)
    ? args.config
    : path.resolve(process.cwd(), args.config);
  const config = loadJson(configPath);
  const bodyPath = path.isAbsolute(args.body) ? args.body : path.resolve(process.cwd(), args.body);
  const body = fs.readFileSync(bodyPath, 'utf8');

  const skipSet = new Set(config.skipImages || []);
  const imageUrls = extractImageUrls(body).filter((u) => !skipSet.has(u.split('/').pop()));

  let urlMap = {};
  const defaultMapPath = path.join(os.tmpdir(), 'huamei-url-map.json');

  if (args.urlMap) {
    urlMap = loadJson(args.urlMap);
    console.log(`loaded url-map: ${Object.keys(urlMap).length} entries`);
  } else if (!args.skipUpload && imageUrls.length > 0) {
    const tmpDir = path.join(os.tmpdir(), `sync-yuque-doc-${config.slug || 'doc'}`);
    await downloadImages(imageUrls, tmpDir, skipSet);

    const spaceId = config.huameiSpaceId || 'S_nZdyOe';
    console.log(`uploading to Huamei space ${spaceId}...`);
    const uploadData = runHuameiUpload(tmpDir, spaceId);
    urlMap = parseUploadJson(uploadData);
    retryFailedUploads(tmpDir, spaceId, uploadData, urlMap);

    fs.writeFileSync(defaultMapPath, JSON.stringify(urlMap, null, 2));
    console.log(`wrote ${defaultMapPath} (${Object.keys(urlMap).length} urls)`);

    fs.rmSync(tmpDir, { recursive: true, force: true });
  } else if (fs.existsSync(defaultMapPath)) {
    urlMap = loadJson(defaultMapPath);
    console.log(`using existing ${defaultMapPath}`);
  }

  const transformed = transformBody(body, config, urlMap);
  const doc = buildDocument(config, transformed);

  const outRel = config.outputs?.['zh-CN'];
  if (!outRel) throw new Error('config.outputs["zh-CN"] is required');

  const outPath = path.resolve(process.cwd(), outRel);

  if (args.dryRun) {
    console.log(`dry-run: would write ${outPath} (${doc.length} chars)`);
    return;
  }

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, doc);
  console.log(`Wrote ${outPath}`);
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
