"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[4941],{65920:function(g,e,n){n.r(e);var l=n(75271),t=n(57785),a=n(3214);e.default=function(){return(0,a.tZ)(t.Highlight,null,`public class HelloWorld {
     public static void main(String[] args) {
       System.out.println("Hello World!");
     }
   }`)}},38760:function(g,e,n){n.r(e);var l=n(75271),t=n(57785),a=n(3214);e.default=function(){return(0,a.tZ)(t.Highlight,{language:"java",theme:"dark"},`public class HelloWorld {
     public static void main(String[] args) {
       System.out.println("Hello World!");
     }
   }`)}},64401:function(g,e,n){n.r(e);var l=n(48305),t=n.n(l),a=n(75271),u=n(43503),E=n(57785),s=n(3214),o={bash:{source:`
 #!/bin/bash
 
 ###### CONFIG
 ACCEPTED_HOSTS="/root/.hag_accepted.conf"
 BE_VERBOSE=false
 
 if [ "$UID" -ne 0 ]
 then
   echo "Superuser rights required"
   exit 2
 fi
 
 genApacheConf(){
   echo -e "# Host \${HOME_DIR}$1/$2 :"
 }
 
 echo '"quoted"' | tr -d \\/" > text.txt
     `.trim(),target:`
 #!/bin/bash
 
 ###### CONFIG
 ACCEPTED_HOSTS="/root/.backup_accepted.conf"
 BE_VERBOSE=true
 
 if [ "$UID" -ne 0 ]
 then
   echo "Superuser rights required but not get"
   exit 2
 fi
 
 genApacheConf(){
   echo -e "# Host \${HOME_DIR}$1/$2 :"
 }
 
 echo '"quoted"' | tr -d \\/" > backup.txt
     `.trim()},json:{source:`
 {
   "name": "@oceanbase/design",
   "description": "The Design System of OceanBase",
   "version": "1.0.0",
   "unpkg": "dist/design.min.js",
   "dumiAssets": "assets.json",
   "homepage": "https://github.com/oceanbase/oceanbase-design",
   "scripts": {
     "start": "npm run dev",
     "build": "npm run build:lib && npm run build:umd && npm run build:less",
     "build:lib": "dumi build",
     "build:umd": "webpack-cli",
     "build:less": "node scripts/gen_less_entry",
     "test:ci": "dumi test --runInBand --detectOpenHandles"
   }
 }
     `.trim(),target:`
 {
   "name": "@oceanbase/design",
   "description": "The Design System of OceanBase",
   "version": "2.0.0",
   "main": "lib/index.js",
   "unpkg": "dist/design.min.js",
   "scripts": {
     "start": "npm run dev",
     "dev": "dumi dev",
     "build": "npm run build:lib && npm run build:umd && npm run build:less",
     "build:umd": "webpack-cli",
     "test": "dumi test",
     "test:up": "dumi test --runInBand --updateSnapshot"
   }
 }
     `.trim()},typescript:{source:`
 interface MyComponentProps {
   value: string;
   onChange: (value: string) => void;
 }
 
 const MyComponentProps = (props: MyComponentProps) => {
   const { value, onChange } = props;
   return (
     <input
       value={value}
       onChange={e => onChange(e.target.value)}
     />
   );
 };
     `.trim(),target:`
 interface MyComponentProps {
   value?: string;
   onChange?: (value: string) => void;
 }
 
 const MyComponentProps = ({ value, onChange }: MyComponentProps) => {
   return (
     <input
       value={value}
       onChange={e => {
         onChange?.(e.target.value);
       }}
     />
   );
 };
     `.trim()},javascript:{source:`
 function warning(...args) {
   console.error(...args);
 }
 
 warning(\`[WARN]:
 You are using full version of @oceanbase/design. Please config TreeShaking to remove additional content.
 \`);
     `.trim(),target:`
 function warning(...args) {
   console.error('[WARN]:', '\\n', ...args);
 }
 
 warning('You are using full version of @oceanbase/design. Please config TreeShaking to remove additional content.');
     `.trim()}};e.default=function(){var p=a.useState(!0),m=t()(p,2),d=m[0],c=m[1],S=a.useState(!0),C=t()(S,2),v=C[0],M=C[1],P=a.useState(!0),f=t()(P,2),h=f[0],b=f[1],R=a.useState(!0),D=t()(R,2),O=D[0],A=D[1],T=a.useState("json"),i=t()(T,2),r=i[0],L=i[1],U=a.useState(!1),I=t()(U,2),B=I[0],y=I[1],W=o[r];return(0,s.tZ)(u.Space,{direction:"vertical",style:{width:"100%"}},(0,s.tZ)(u.Space,null,(0,s.tZ)(u.Select,{style:{width:150},value:r,options:Object.keys(o).map(function(_){return{label:_,value:_}}),onChange:function(K){L(K)}}),(0,s.tZ)(u.Switch,{checked:O,onChange:function(){A(!O)},checkedChildren:"split",unCheckedChildren:"split"}),(0,s.tZ)(u.Switch,{checked:h,onChange:function(){b(!h)},checkedChildren:"light",unCheckedChildren:"light"}),(0,s.tZ)(u.Switch,{checked:d,onChange:function(){c(!d)},checkedChildren:"source",unCheckedChildren:"source"}),(0,s.tZ)(u.Switch,{checked:v,onChange:function(){M(!v)},checkedChildren:"target",unCheckedChildren:"target"}),(0,s.tZ)(u.Switch,{checked:B,onChange:function(){y(!B)},checkedChildren:"startRowIndex",unCheckedChildren:"startRowIndex"})),(0,s.tZ)(E.Highlight.Diff,{split:O,language:r,source:d?W.source:null,target:v?W.target:null,theme:h?"light":"dark",startRowIndex:B?[93,103]:void 0}))}},46773:function(g,e,n){n.r(e);var l=n(75271),t=n(57785),a=n(3214);e.default=function(){return(0,a.tZ)(t.Highlight,{innerHTML:!0,theme:"dark"},`<pre style="padding: 0; margin:0;"><code>
     public class HelloWorld {
       public static void main(String[] args) {
         System.out.println("Hello World!");
       }
     }
   </code></pre>
   <pre style="padding: 0; margin:0;"><code>
     public class HelloWorld2 {
       public static void main(String[] args) {
         System.out.println("Hello World!");
       }
     }
   </code></pre>`)}},45260:function(g,e,n){n.r(e);var l=n(75271),t=n(57785),a=n(3214);e.default=function(){return(0,a.tZ)(t.Highlight,{language:"json",onCopyChange:function(E){console.log("value",E)}},{name:"OceanBase Design",description:"The Design System of OceanBase",versions:["1.0.0","2.0.0","2.5.1"]})}},23888:function(g,e,n){n.r(e);var l=n(75271),t=n(57785),a=n(3214);e.default=function(){return(0,a.tZ)(t.Highlight,{lineNumber:!0},`public class HelloWorld {
     public static void main(String[] args) {
       System.out.println("Hello World!");
     }
   }`)}},92902:function(g,e,n){n.r(e);var l=n(48305),t=n.n(l),a=n(75271),u=n(43503),E=n(57785),s=n(52271),o=n(3214),p="bash",m="light",d="false",c=u.Select.Option;e.default=function(){var S=(0,a.useState)(m),C=t()(S,2),v=C[0],M=C[1],P=(0,a.useState)(p),f=t()(P,2),h=f[0],b=f[1],R=(0,a.useState)(d),D=t()(R,2),O=D[0],A=D[1],T=s.default.find(function(i){return i.language===h}).code||"";return(0,o.tZ)("div",null,(0,o.tZ)(u.Space,null,"\u8BED\u8A00\u9009\u62E9:",(0,o.tZ)(u.Select,{defaultValue:p,style:{width:120},onChange:function(r){return b(r)}},s.default.map(function(i){return(0,o.tZ)(c,{key:i.language,value:i.language},i.text)})),"\u4E3B\u9898\u9009\u62E9:",(0,o.tZ)(u.Select,{defaultValue:m,style:{width:120},onChange:function(r){return M(r)}},(0,o.tZ)(c,{value:"light"},"\u767D\u8272\u4E3B\u9898"),(0,o.tZ)(c,{value:"dark"},"\u9ED1\u8272\u4E3B\u9898")),"\u5C55\u793A\u884C\u53F7:",(0,o.tZ)(u.Select,{defaultValue:d,style:{width:120},onChange:function(r){return A(r)}},(0,o.tZ)(c,{value:"false"},"\u4E0D\u5C55\u793A"),(0,o.tZ)(c,{value:"true"},"\u5C55\u793A"))),(0,o.tZ)("div",{style:{height:400,width:"100%",overflowY:"scroll",marginBlockStart:"16px"}},(0,o.tZ)(E.Highlight,{language:h,theme:v,height:400,lineNumber:O!=d},T)))}}}]);
