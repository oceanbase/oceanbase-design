"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[2746],{61817:function(o,t,_){_.r(t);var a=_(31497),r=_(21436),c=_(87373),m=_(51845),x=_(29846),s=_(96307),p=_(2444),E=_(91309),v=_(55931),I=_(87884),b=_(75861),g=_(10789),h=_(36946),D=_(91116),P=_(82490),O=_(46927),M=_(36402),C=_(27402),f=_(85597),T=_(43661),u=_(40191),i=_(22110),d=_(75271),n=_(19465),e=_(56517);function l(){return(0,e.tZ)(u.dY,null,(0,e.tZ)(d.Suspense,{fallback:(0,e.tZ)(i.Z,null)},(0,e.tZ)(d.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"turbopack-\u6784\u5EFA"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#turbopack-\u6784\u5EFA"},(0,e.tZ)("span",{className:"icon icon-link"})),"Turbopack \u6784\u5EFA"),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,n.texts[0].value,(0,e.tZ)("code",null,n.texts[1].value),n.texts[2].value,(0,e.tZ)("code",null,n.texts[3].value),n.texts[4].value,(0,e.tZ)("ul",null,(0,e.tZ)("li",null,n.texts[5].value,(0,e.tZ)("code",null,n.texts[6].value),n.texts[7].value,(0,e.tZ)("a",{href:"https://nextjs.org/docs/app/guides/upgrading/version-16#turbopack-by-default",target:"_blank"},n.texts[8].value),n.texts[9].value),(0,e.tZ)("li",null,n.texts[10].value,(0,e.tZ)("code",null,n.texts[11].value),n.texts[12].value)))),(0,e.tZ)(s.Z,{lang:"json"},n.texts[13].value),(0,e.tZ)("h2",{id:"webpack-\u6784\u5EFA"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#webpack-\u6784\u5EFA"},(0,e.tZ)("span",{className:"icon icon-link"})),"Webpack \u6784\u5EFA"),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,n.texts[14].value,(0,e.tZ)("code",null,n.texts[15].value),n.texts[16].value,(0,e.tZ)("code",null,n.texts[17].value),n.texts[18].value,(0,e.tZ)("code",null,n.texts[19].value),n.texts[20].value)),(0,e.tZ)(s.Z,{lang:"ts"},n.texts[21].value)))))}t.default=l},19465:function(o,t,_){_.r(t),_.d(t,{texts:function(){return a}});const a=[{value:"\u5982\u679C\u4F7F\u7528 ",paraId:0,tocIndex:0},{value:"turbopack",paraId:0,tocIndex:0},{value:" \u4F5C\u4E3A\u6784\u5EFA\u5DE5\u5177\uFF0C\u5219\u65E0\u9700\u989D\u5916\u914D\u7F6E\uFF0C\u5373\u53EF\u6B63\u5E38\u4F7F\u7528 ",paraId:0,tocIndex:0},{value:"@oceanbase/design",paraId:0,tocIndex:0},{value:`\u3002
`,paraId:0,tocIndex:0},{value:"Next.js 16: \u9ED8\u8BA4\u4F7F\u7528 ",paraId:1,tocIndex:0},{value:"turbopack",paraId:1,tocIndex:0},{value:"\uFF0C\u8BE6\u89C1 ",paraId:1,tocIndex:0},{value:"Next.js \u6587\u6863",paraId:1,tocIndex:0},{value:"\u3002",paraId:1,tocIndex:0},{value:"Next.js 15 \u53CA\u4EE5\u4E0B\u7248\u672C: \u9700\u8981\u624B\u52A8\u5F00\u542F ",paraId:1,tocIndex:0},{value:"turbopack",paraId:1,tocIndex:0},{value:"\u3002",paraId:1,tocIndex:0},{value:`// package.json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build"
  }
}
`,paraId:2,tocIndex:0},{value:"\u5982\u679C\u6CA1\u6709\u5F00\u542F ",paraId:3,tocIndex:1},{value:"turbopack",paraId:3,tocIndex:1},{value:" \u6784\u5EFA\uFF0C\u5219 Next.js \u4F1A\u4F7F\u7528 ",paraId:3,tocIndex:1},{value:"webpack",paraId:3,tocIndex:1},{value:" \u6784\u5EFA\u3002\u7531\u4E8E ",paraId:3,tocIndex:1},{value:"@oceanbase/design",paraId:3,tocIndex:1},{value:" \u5185\u7F6E\u4E86\u5B57\u4F53\u5305\uFF0C\u9700\u8981\u6309\u5982\u4E0B\u4FEE\u6539 Next.js \u914D\u7F6E\uFF0C\u4EE5\u6B63\u786E\u5904\u7406\u5B57\u4F53\u6587\u4EF6\uFF1A",paraId:3,tocIndex:1},{value:`// next.config.ts
const nextConfig = {
  webpack: config => {
    // Handle font files
    config.module.rules.push({
      test: /\\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    });
    return config;
  },
};

export default nextConfig;
`,paraId:4,tocIndex:1}]}}]);
