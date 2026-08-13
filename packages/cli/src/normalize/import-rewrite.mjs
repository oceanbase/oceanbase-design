/**
 * Rewrite antd imports to @oceanbase/design / @oceanbase/icons
 */
export function rewriteImports(source) {
  let out = source;
  out = out.replace(/from\s+['"]antd['"]/g, "from '@oceanbase/design'");
  out = out.replace(/from\s+['"]antd\/es\/([^'"]+)['"]/g, "from '@oceanbase/design/es/$1'");
  out = out.replace(/from\s+['"]@ant-design\/icons['"]/g, "from '@oceanbase/icons'");
  out = out.replace(
    /from\s+['"]@ant-design\/icons\/([^'"]+)['"]/g,
    "from '@oceanbase/icons/es/$1'",
  );
  return out;
}
