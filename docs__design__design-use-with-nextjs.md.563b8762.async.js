"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[2746],{62953:function(d,t,_){_.r(t);var s=_(68795),u=_(87402),m=_(17961),c=_(49064),p=_(91287),a=_(97598),g=_(49005),E=_(71135),h=_(54627),b=_(44638),v=_(69255),D=_(13852),P=_(73971),x=_(27579),M=_(92888),O=_(75372),I=_(37179),f=_(68970),C=_(58843),i=_(80110),r=_(40839),o=_(75271),n=_(32167),e=_(70024);function l(){return(0,e.tZ)(i.dY,null,(0,e.tZ)(o.Suspense,{fallback:(0,e.tZ)(r.Z,null)},(0,e.tZ)(o.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("ul",null,(0,e.tZ)("li",null,n.texts[0].value,(0,e.tZ)("code",null,n.texts[1].value),n.texts[2].value,(0,e.tZ)("code",null,n.texts[3].value),n.texts[4].value)),(0,e.tZ)(a.Z,{lang:"bash"},n.texts[5].value),(0,e.tZ)(a.Z,{lang:"ts"},n.texts[6].value),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,n.texts[7].value,(0,e.tZ)("a",{href:"https://stackblitz.com/edit/nextjs-oceanbase-design",target:"_blank"},n.texts[8].value),n.texts[9].value)),(0,e.tZ)("iframe",{src:"https://stackblitz.com/edit/nextjs-oceanbase-design?embed=1&file=app%2Fpage.tsx",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},title:"@oceanbase/ui reproduction template",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})))))}t.default=l},32167:function(d,t,_){_.r(t),_.d(t,{texts:function(){return s}});const s=[{value:"\u4E3A\u4E86\u548C ",paraId:0},{value:"@oceanbase/design",paraId:0},{value:" \u642D\u914D\u4F7F\u7528\uFF0C\u9700\u8981\u5B89\u88C5 ",paraId:0},{value:"file-loader",paraId:0},{value:" \u4F9D\u8D56\uFF0C\u5E76\u4FEE\u6539 Next.js \u914D\u7F6E\uFF1A",paraId:0},{value:`npm install file-loader --save-dev
`,paraId:1},{value:`const nextConfig = {
  // to transpile some special packages to es5
  transpilePackages: ['@oceanbase', 'query-string', '@ant-design', '@ant-design/cssinjs'],
  webpack: config => {
    // to handle @oceanbase/design built-in font files
    config.module.rules.push({
      test: /\\.(woff|woff2|ttf?g)$/i,
      use: ['file-loader'],
    });
    return config;
  },
};

export default nextConfig;
`,paraId:2},{value:"\u5B8C\u6574\u914D\u7F6E\u548C\u53EF\u8FD0\u884C\u7684\u793A\u4F8B\uFF0C\u53EF\u4EE5\u53C2\u8003\u6211\u4EEC\u63D0\u4F9B\u7684 ",paraId:3},{value:"Next.js + @oceanbase/design \u9879\u76EE\u6A21\u677F",paraId:3},{value:"\u3002",paraId:3}]}}]);
