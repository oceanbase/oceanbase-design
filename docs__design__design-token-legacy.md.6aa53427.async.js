"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[5715],{86277:function(l,t,_){_.r(t);var o=_(18169),c=_(59466),m=_(73823),p=_(62058),h=_(74041),a=_(68594),g=_(68677),x=_(19149),v=_(55931),k=_(87884),I=_(75861),b=_(10789),Z=_(36946),E=_(91116),D=_(82490),y=_(46927),P=_(36402),f=_(27402),O=_(85597),s=_(43661),i=_(97389),u=_(22110),d=_(75271),n=_(44124),e=_(56517);function r(){return(0,e.tZ)(i.dY,null,(0,e.tZ)(d.Suspense,{fallback:(0,e.tZ)(u.Z,null)},(0,e.tZ)(d.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,n.texts[0].value,(0,e.tZ)("a",{href:"https://ant.design/docs/react/customize-theme-cn",target:"_blank"},n.texts[1].value),n.texts[2].value),(0,e.tZ)("h2",{id:"using-design-token"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#using-design-token"},(0,e.tZ)("span",{className:"icon icon-link"})),"Using Design Token"),(0,e.tZ)("h3",{id:"in-react"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#in-react"},(0,e.tZ)("span",{className:"icon icon-link"})),"In React"),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,n.texts[3].value,(0,e.tZ)("code",null,n.texts[4].value),n.texts[5].value)),(0,e.tZ)(a.Z,{lang:"tsx"},n.texts[6].value),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,n.texts[7].value,(0,e.tZ)("code",null,n.texts[8].value),n.texts[9].value)),(0,e.tZ)(a.Z,{lang:"tsx"},n.texts[10].value),(0,e.tZ)("h3",{id:"outside-react"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#outside-react"},(0,e.tZ)("span",{className:"icon icon-link"})),"Outside React"),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,n.texts[11].value,(0,e.tZ)("code",null,n.texts[12].value),n.texts[13].value)),(0,e.tZ)(a.Z,{lang:"ts"},n.texts[14].value),(0,e.tZ)("h3",{id:"in-less"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#in-less"},(0,e.tZ)("span",{className:"icon icon-link"})),"In Less"),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,n.texts[15].value,(0,e.tZ)("code",null,n.texts[16].value),n.texts[17].value)),(0,e.tZ)(a.Z,{lang:"less"},n.texts[18].value),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,n.texts[19].value,(0,e.tZ)("code",null,n.texts[20].value),n.texts[21].value)),(0,e.tZ)(a.Z,{lang:"less"},n.texts[22].value),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,n.texts[23].value,(0,e.tZ)("a",{href:"https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-less",target:"_blank"},n.texts[24].value),n.texts[25].value)),(0,e.tZ)("p",null,(0,e.tZ)("img",{src:"https://mdn.alipayobjects.com/huamei_fhnyvh/afts/img/A*_37-QqtQGQUAAAAAAAAAAAAADmfOAQ/original",alt:""})),(0,e.tZ)("h2",{id:"design-token-list"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#design-token-list"},(0,e.tZ)("span",{className:"icon icon-link"})),"Design Token List"),(0,e.tZ)("h3",{id:"seedtoken"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#seedtoken"},(0,e.tZ)("span",{className:"icon icon-link"})),"SeedToken")),(0,e.tZ)(s.Z,{type:"seed"}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h3",{id:"maptoken"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#maptoken"},(0,e.tZ)("span",{className:"icon icon-link"})),"MapToken"),(0,e.tZ)("blockquote",null,(0,e.tZ)("p",null,n.texts[26].value))),(0,e.tZ)(s.Z,{type:"map"}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h3",{id:"aliastoken"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#aliastoken"},(0,e.tZ)("span",{className:"icon icon-link"})),"AliasToken"),(0,e.tZ)("blockquote",null,(0,e.tZ)("p",null,n.texts[27].value))),(0,e.tZ)(s.Z,{type:"alias"}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"more-usage"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#more-usage"},(0,e.tZ)("span",{className:"icon icon-link"})),"More Usage"),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,n.texts[28].value,(0,e.tZ)("a",{href:"https://ant.design/docs/react/customize-theme-cn",target:"_blank"},n.texts[29].value)))))))}t.default=r},44124:function(l,t,_){_.r(t),_.d(t,{texts:function(){return o}});const o=[{value:"OceanBase Design Token is maintained and updated by designers. Technically, it supports the same capabilities as ",paraId:0},{value:"antd",paraId:0},{value:".",paraId:0},{value:"For function components, use the ",paraId:1,tocIndex:1},{value:"useToken",paraId:1,tocIndex:1},{value:" hook to get Design Token:",paraId:1,tocIndex:1},{value:`import { Button, useToken } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => {
  const { token } = useToken();

  return <Button style={{ backgroundColor: token.colorPrimary }}>Button</Button>;
};

export default App;
`,paraId:2,tocIndex:1},{value:"For class components, use the ",paraId:3,tocIndex:1},{value:"token",paraId:3,tocIndex:1},{value:" object to get Design Token:",paraId:3,tocIndex:1},{value:`import { Button, ConfigProvider, token } from '@oceanbase/design';
import React from 'react';

class App extends React.Component {
  render() {
    return <Button style={{ backgroundColor: token.colorPrimary }}>Button</Button>;
  }
}

export default App;
`,paraId:4,tocIndex:1},{value:"In constant files, dva models, or other non-React environments, use the ",paraId:5,tocIndex:2},{value:"token",paraId:5,tocIndex:2},{value:" object to get Design Token.",paraId:5,tocIndex:2},{value:`import { token } from '@oceanbase/design';

export const taskStatusList = [
  {
    value: 'running',
    label: 'Running',
    color: token.colorPrimary,
  },
];
`,paraId:6,tocIndex:2},{value:"By importing the ",paraId:7,tocIndex:3},{value:"less",paraId:7,tocIndex:3},{value:" theme file from @oceanbase/design, you can use Design Token variables directly in Less:",paraId:7,tocIndex:3},{value:`@import '~@oceanbase/design/es/theme/index.less';

.button {
  color: @colorPrimary;
  border-radius: @borderRadius;
}
`,paraId:8,tocIndex:3},{value:"To use a specific theme's Less file, set the ",paraId:9,tocIndex:3},{value:"@theme",paraId:9,tocIndex:3},{value:" variable in your global styles:",paraId:9,tocIndex:3},{value:`@theme: default | dark | compact | aliyun;
`,paraId:10,tocIndex:3},{value:"Install the ",paraId:11,tocIndex:3},{value:"Less IntelliSense",paraId:11,tocIndex:3},{value:" extension in VSCode for variable hints and autocomplete.",paraId:11,tocIndex:3},{value:"Inherits all SeedToken properties",paraId:12,tocIndex:6},{value:"Inherits all SeedToken and MapToken properties",paraId:13,tocIndex:7},{value:"For more usage of the theme, see the antd documentation: ",paraId:14,tocIndex:8},{value:"https://ant.design/docs/react/customize-theme-cn",paraId:14,tocIndex:8}]}}]);
