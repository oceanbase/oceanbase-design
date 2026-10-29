"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[1247],{35859:function(a,n,_){_.r(n);var s=_(18169),u=_(59466),h=_(73823),l=_(62058),c=_(74041),d=_(68594),b=_(68677),g=_(19149),p=_(55931),E=_(87884),P=_(75861),v=_(10789),D=_(36946),O=_(91116),x=_(82490),M=_(46927),C=_(36402),k=_(27402),f=_(85597),y=_(43661),i=_(97389),r=_(22110),o=_(75271),t=_(26728),e=_(56517);function m(){return(0,e.tZ)(i.dY,null,(0,e.tZ)(o.Suspense,{fallback:(0,e.tZ)(r.Z,null)},(0,e.tZ)(o.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,t.texts[0].value),(0,e.tZ)("h2",{id:"theme-configuration"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#theme-configuration"},(0,e.tZ)("span",{className:"icon icon-link"})),"Theme Configuration"),(0,e.tZ)(d.Z,{lang:"tsx"},t.texts[1].value),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,t.texts[2].value,(0,e.tZ)("a",{href:"https://github.com/oceanbase/charts/blob/master/src/theme/index.ts#L29",target:"_blank"},t.texts[3].value),t.texts[4].value))))))}n.default=m},26728:function(a,n,_){_.r(n),_.d(n,{texts:function(){return s}});const s=[{value:"OceanBase Charts follows the AntV design specification and extends it with OceanBase product-style design patterns, including but not limited to global styles (color palette, radius, border) and visual customization of specific charts, to convey OceanBase's brand characteristics of technology, vitality, focus, and care.",paraId:0},{value:`import { ChartProvider, useTheme } from '@oceanbase/charts';

export default () {
  // Get theme config
  const themeConfig = useTheme();
  // Theme color
  console.log(themeConfig.defaultColor);
  // Line chart line width
  console.log(themeConfig.styleSheet.lineBorder);
  // Set theme
  return (
    <>
      <ChartProvider theme="light">
        {...}
      </ChartProvider>
      <ChartProvider theme="dark">
        {...}
      </ChartProvider>
      <ChartProvider theme={{ defaultColor: '#ff0000', subColor: '#00ff00' }}>
        {...}
      </ChartProvider>
    </>
  );
};
`,paraId:1,tocIndex:0},{value:"For full theme tokens, see ",paraId:2,tocIndex:0},{value:"https://github.com/oceanbase/charts/blob/master/src/theme/index.ts#L29",paraId:2,tocIndex:0},{value:" .",paraId:2,tocIndex:0}]}}]);
