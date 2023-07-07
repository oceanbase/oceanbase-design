export function isZhCN(pathname: string) {
  return /-cn\/?$/.test(pathname);
}

export function getLocalizedPathname(
  path: string,
  zhCN?: boolean,
  search?: string,
  hash?: {
    zhCN?: string;
    enUS?: string;
  }
) {
  let pathname = path.startsWith('/') ? path : `/${path}`;

  if (hash) {
    const localHash = hash[zhCN ? 'zhCN' : 'enUS'];
    pathname += `#${localHash}`;
  }

  return { pathname, search };
}

export function ping(callback: (status: string) => void) {
  const url =
    'https://private-a' +
    'lipay' +
    'objects.alip' +
    'ay.com/alip' +
    'ay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png';
  const img = new Image();
  let done: boolean;
  const finish = (status: string) => {
    if (!done) {
      done = true;
      img.src = '';
      callback(status);
    }
  };
  img.onload = () => finish('responded');
  img.onerror = () => finish('error');
  img.src = url;
  return setTimeout(() => finish('timeout'), 1500);
}

export function isLocalStorageNameSupported() {
  const testKey = 'test';
  const storage = window.localStorage;
  try {
    storage.setItem(testKey, '1');
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
}
