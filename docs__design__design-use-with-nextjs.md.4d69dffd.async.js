"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[2746],{35505:function(d,t,_){_.r(t);var a=_(18169),c=_(59466),r=_(73823),m=_(62058),p=_(74041),s=_(68594),h=_(68677),b=_(19149),x=_(55931),v=_(87884),g=_(75861),I=_(10789),E=_(36946),k=_(91116),D=_(82490),P=_(46927),f=_(36402),O=_(27402),M=_(85597),y=_(43661),u=_(97389),l=_(22110),o=_(75271),n=_(19517),e=_(56517);function i(){return(0,e.tZ)(u.dY,null,(0,e.tZ)(o.Suspense,{fallback:(0,e.tZ)(l.Z,null)},(0,e.tZ)(o.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"turbopack-build"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#turbopack-build"},(0,e.tZ)("span",{className:"icon icon-link"})),"Turbopack Build"),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,n.texts[0].value,(0,e.tZ)("code",null,n.texts[1].value),n.texts[2].value,(0,e.tZ)("code",null,n.texts[3].value),n.texts[4].value,(0,e.tZ)("ul",null,(0,e.tZ)("li",null,n.texts[5].value,(0,e.tZ)("code",null,n.texts[6].value),n.texts[7].value,(0,e.tZ)("a",{href:"https://nextjs.org/docs/app/guides/upgrading/version-16#turbopack-by-default",target:"_blank"},n.texts[8].value),n.texts[9].value),(0,e.tZ)("li",null,n.texts[10].value,(0,e.tZ)("code",null,n.texts[11].value),n.texts[12].value)))),(0,e.tZ)(s.Z,{lang:"json"},n.texts[13].value),(0,e.tZ)("h2",{id:"webpack-build"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#webpack-build"},(0,e.tZ)("span",{className:"icon icon-link"})),"Webpack Build"),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,n.texts[14].value,(0,e.tZ)("code",null,n.texts[15].value),n.texts[16].value,(0,e.tZ)("code",null,n.texts[17].value),n.texts[18].value,(0,e.tZ)("code",null,n.texts[19].value),n.texts[20].value)),(0,e.tZ)(s.Z,{lang:"ts"},n.texts[21].value)))))}t.default=i},19517:function(d,t,_){_.r(t),_.d(t,{texts:function(){return a}});const a=[{value:"If you use ",paraId:0,tocIndex:0},{value:"turbopack",paraId:0,tocIndex:0},{value:" as the build tool, ",paraId:0,tocIndex:0},{value:"@oceanbase/design",paraId:0,tocIndex:0},{value:` works out of the box without extra config.
`,paraId:0,tocIndex:0},{value:"Next.js 16: Uses ",paraId:1,tocIndex:0},{value:"turbopack",paraId:1,tocIndex:0},{value:" by default. See ",paraId:1,tocIndex:0},{value:"Next.js docs",paraId:1,tocIndex:0},{value:".",paraId:1,tocIndex:0},{value:"Next.js 15 and below: Enable ",paraId:1,tocIndex:0},{value:"turbopack",paraId:1,tocIndex:0},{value:" manually.",paraId:1,tocIndex:0},{value:`// package.json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build"
  }
}
`,paraId:2,tocIndex:0},{value:"If ",paraId:3,tocIndex:1},{value:"turbopack",paraId:3,tocIndex:1},{value:" is not enabled, Next.js uses ",paraId:3,tocIndex:1},{value:"webpack",paraId:3,tocIndex:1},{value:". Because ",paraId:3,tocIndex:1},{value:"@oceanbase/design",paraId:3,tocIndex:1},{value:" bundles fonts, update your Next.js config to handle font files correctly:",paraId:3,tocIndex:1},{value:`// next.config.ts
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
