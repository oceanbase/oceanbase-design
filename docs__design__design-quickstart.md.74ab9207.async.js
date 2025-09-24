"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[2894],{82495:function(o,n,_){_.r(n);var t=_(68795),m=_(87402),l=_(17961),c=_(49064),E=_(91287),s=_(97598),p=_(49005),g=_(71135),h=_(54627),b=_(44638),x=_(69255),D=_(13852),P=_(73971),M=_(27579),O=_(92888),I=_(75372),v=_(37179),y=_(68970),C=_(58843),i=_(80110),r=_(40839),d=_(75271),a=_(30390),e=_(70024);function u(){return(0,e.tZ)(i.dY,null,(0,e.tZ)(d.Suspense,{fallback:(0,e.tZ)(r.Z,null)},(0,e.tZ)(d.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"\u4F7F\u7528-codesandbox-\u5FEB\u901F\u521B\u5EFA"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F7F\u7528-codesandbox-\u5FEB\u901F\u521B\u5EFA"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u4F7F\u7528 CodeSandbox \u5FEB\u901F\u521B\u5EFA"),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,a.texts[0].value,(0,e.tZ)("a",{href:"https://codesandbox.io/s/oceanbase-design-reproduction-template-k26fm5",target:"_blank"},a.texts[1].value),a.texts[2].value)),(0,e.tZ)("iframe",{src:"https://codesandbox.io/embed/oceanbase-design-reproduction-template-k26fm5?fontsize=14&hidenavigation=1&theme=dark",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},title:"@oceanbase/design reproduction template",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,e.tZ)("h2",{id:"\u5728\u9879\u76EE\u4E2D\u4F7F\u7528"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5728\u9879\u76EE\u4E2D\u4F7F\u7528"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u5728\u9879\u76EE\u4E2D\u4F7F\u7528"),(0,e.tZ)("h3",{id:"\u5B89\u88C5"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5B89\u88C5"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u5B89\u88C5"),(0,e.tZ)(s.Z,{lang:"bash"},a.texts[3].value),(0,e.tZ)("h3",{id:"\u793A\u4F8B"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u793A\u4F8B"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u793A\u4F8B"),(0,e.tZ)(s.Z,{lang:"jsx"},a.texts[4].value)))))}n.default=u},30390:function(o,n,_){_.r(n),_.d(n,{texts:function(){return t}});const t=[{value:"\u53EF\u4EE5\u4F7F\u7528\u6211\u4EEC\u63D0\u4F9B\u7684 ",paraId:0,tocIndex:0},{value:"CodeSandbox \u6A21\u677F",paraId:0,tocIndex:0},{value:" \u5FEB\u901F\u521B\u5EFA\u548C\u9884\u89C8\u3002",paraId:0,tocIndex:0},{value:`$ npm i @oceanbase/design --save
`,paraId:1,tocIndex:2},{value:`import { Table } from '@oceanbase/design';

const App = () => {
  const dataSource = [
    {
      key: '1',
      name: '\u80E1\u5F66\u658C',
      age: 32,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
    {
      key: '2',
      name: '\u80E1\u5F66\u7956',
      age: 42,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
    {
      key: '3',
      name: '\u80E1\u5F66\u658C',
      age: 32,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
    {
      key: '4',
      name: '\u80E1\u5F66\u7956',
      age: 42,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
    {
      key: '5',
      name: '\u80E1\u5F66\u658C',
      age: 32,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
    {
      key: '6',
      name: '\u80E1\u5F66\u7956',
      age: 42,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
    {
      key: '7',
      name: '\u80E1\u5F66\u658C',
      age: 32,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
    {
      key: '8',
      name: '\u80E1\u5F66\u7956',
      age: 42,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
    },
  ];

  const columns = [
    {
      title: '\u59D3\u540D',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '\u5E74\u9F84',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '\u4F4F\u5740',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return <Table columns={columns} dataSource={dataSource} />;
};
`,paraId:2,tocIndex:3}]}}]);
