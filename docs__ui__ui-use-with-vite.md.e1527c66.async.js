"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[9079],{87240:function(i,t,_){_.r(t);var s=_(45423),u=_(54661),m=_(42532),c=_(58663),p=_(17323),a=_(28468),E=_(15049),v=_(87362),h=_(20520),g=_(19927),b=_(24912),D=_(17662),M=_(34950),P=_(97968),O=_(15641),x=_(97866),I=_(79888),C=_(38476),f=_(84242),d=_(11339),r=_(20747),o=_(75271),n=_(22282),e=_(20769);function l(){return(0,e.tZ)(d.dY,null,(0,e.tZ)(o.Suspense,{fallback:(0,e.tZ)(r.Z,null)},(0,e.tZ)(o.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("ul",null,(0,e.tZ)("li",null,n.texts[0].value,(0,e.tZ)("code",null,n.texts[1].value),n.texts[2].value)),(0,e.tZ)(a.Z,{lang:"ts"},n.texts[3].value),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,n.texts[4].value,(0,e.tZ)("code",null,n.texts[5].value),n.texts[6].value,(0,e.tZ)("code",null,n.texts[7].value),n.texts[8].value)),(0,e.tZ)(a.Z,{lang:"bash"},n.texts[9].value),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,n.texts[10].value,(0,e.tZ)("a",{href:"https://stackblitz.com/edit/vite-oceanbase-ui",target:"_blank"},n.texts[11].value),n.texts[12].value)),(0,e.tZ)("iframe",{src:"https://stackblitz.com/edit/vite-oceanbase-ui?embed=1&file=src%2FApp.tsx",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},title:"@oceanbase/ui reproduction template",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})))))}t.default=l},22282:function(i,t,_){_.r(t),_.d(t,{texts:function(){return s}});const s=[{value:"\u7531\u4E8E Vite \u662F ESM \u6784\u5EFA\u5DE5\u5177\uFF0C\u4E3A\u4E86\u548C ",paraId:0},{value:"@oceanbase/ui",paraId:0},{value:" \u642D\u914D\u4F7F\u7528\uFF0C\u9700\u8981\u4FEE\u6539 Vite \u914D\u7F6E\uFF1A",paraId:0},{value:`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // @oceanbase/ui \u4F9D\u8D56\u4E86 @antv/g6 3.x \u7248\u672C\uFF0C\u5176\u4E0D\u517C\u5BB9 ESM \u6784\u5EFA\uFF0C\u5C06\u5176\u6307\u5411 UMD \u4EA7\u7269
      // ref: https://github.com/antvis/G6/issues/2961#issuecomment-1041016015
      {
        find: /^@antv\\/g6/,
        replacement: path.resolve(__dirname, './node_modules/@antv/g6/dist/g6.min.js'),
      },
      // \u53BB\u6389 @oceanbase/ui \u90E8\u5206\u7EC4\u4EF6\u4E2D\u7684 ~ less \u8DEF\u5F84\u5F15\u5165\uFF0C\u4EE5\u517C\u5BB9 ESM \u6784\u5EFA
      // ref: https://github.com/vitejs/vite/issues/2185#issuecomment-784637827
      { find: /^~/, replacement: '' },
    ],
  },
});
`,paraId:1},{value:"\u540C\u65F6\u8FD8\u9700\u8981\u5B89\u88C5 ",paraId:2},{value:"less",paraId:2},{value:" \u4F9D\u8D56\uFF0C\u56E0\u4E3A ",paraId:2},{value:"@oceanbase/ui",paraId:2},{value:" \u90E8\u5206\u7EC4\u4EF6\u7684\u6837\u5F0F\u4F7F\u7528\u4E86 less:",paraId:2},{value:`$ npm install less --save-dev
`,paraId:3},{value:"\u5B8C\u6574\u914D\u7F6E\u548C\u53EF\u8FD0\u884C\u7684\u793A\u4F8B\uFF0C\u53EF\u4EE5\u53C2\u8003\u6211\u4EEC\u63D0\u4F9B\u7684 ",paraId:4},{value:"Vite + @oceanbase/ui \u9879\u76EE\u6A21\u677F",paraId:4},{value:"\u3002",paraId:4}]}}]);
