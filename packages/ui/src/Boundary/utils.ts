export const getBrowserNameVersion = () => {
  const ua = navigator.userAgent.toLowerCase(); //获取用户端信息
  const info = {
    IE: /msie/.test(ua) && !/opera/.test(ua), //匹配IE浏览器
    Opera: /opera/.test(ua), //匹配Opera浏览器
    Safari: /version.*safari/.test(ua), //匹配Safari浏览器
    Chrome: /chrome/.test(ua), //匹配Chrome浏览器
    Firefox: /gecko/.test(ua) && !/webkit/.test(ua), //匹配Firefox浏览器
  };

  return Object.keys(info).filter(item => {
    return info[item];
  });
};
