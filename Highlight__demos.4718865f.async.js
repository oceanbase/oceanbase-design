"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[4941],{37245:function(c,t,n){n.r(t);var r=n(75271),a=n(26847),o=n(56517);t.default=function(){return(0,o.tZ)(a.ZP,null,`public class HelloWorld {
     public static void main(String[] args) {
       System.out.println("Hello World!");
     }
   }`)}},62650:function(c,t,n){n.r(t);var r=n(75271),a=n(26847),o=n(56517);t.default=function(){return(0,o.tZ)(a.ZP,{language:"java",theme:"dark"},`public class HelloWorld {
     public static void main(String[] args) {
       System.out.println("Hello World!");
     }
   }`)}},35649:function(c,t,n){n.r(t);var r=n(48305),a=n.n(r),o=n(75271),i=n(84110),E=n(42700),d=n(62403),O=n(26847),e=n(56517),h={bash:{source:`
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
     `.trim()}};t.default=function(){var P=o.useState(!0),g=a()(P,2),s=g[0],R=g[1],f=o.useState(!0),M=a()(f,2),m=M[0],A=M[1],p=o.useState(!0),C=a()(p,2),v=C[0],T=C[1],b=o.useState(!0),S=a()(b,2),D=S[0],B=S[1],u=o.useState("json"),l=a()(u,2),Z=l[0],U=l[1],y=o.useState(!1),W=a()(y,2),I=W[0],K=W[1],L=h[Z];return(0,e.tZ)(i.Z,{direction:"vertical",style:{width:"100%"}},(0,e.tZ)(i.Z,null,(0,e.tZ)(E.Z,{style:{width:150},value:Z,options:Object.keys(h).map(function(_){return{label:_,value:_}}),onChange:function($){U($)}}),(0,e.tZ)(d.Z,{checked:D,onChange:function(){B(!D)},checkedChildren:"split",unCheckedChildren:"split"}),(0,e.tZ)(d.Z,{checked:v,onChange:function(){T(!v)},checkedChildren:"light",unCheckedChildren:"light"}),(0,e.tZ)(d.Z,{checked:s,onChange:function(){R(!s)},checkedChildren:"source",unCheckedChildren:"source"}),(0,e.tZ)(d.Z,{checked:m,onChange:function(){A(!m)},checkedChildren:"target",unCheckedChildren:"target"}),(0,e.tZ)(d.Z,{checked:I,onChange:function(){K(!I)},checkedChildren:"startRowIndex",unCheckedChildren:"startRowIndex"})),(0,e.tZ)(O.ZP.Diff,{split:D,language:Z,source:s?L.source:null,target:m?L.target:null,theme:v?"light":"dark",startRowIndex:I?[93,103]:void 0}))}},63142:function(c,t,n){n.r(t);var r=n(75271),a=n(26847),o=n(56517);t.default=function(){return(0,o.tZ)(a.ZP,{innerHTML:!0,theme:"dark"},`<pre style="padding: 0; margin:0;"><code>
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
   </code></pre>`)}},73876:function(c,t,n){n.r(t);var r=n(75271),a=n(26847),o=n(56517);t.default=function(){return(0,o.tZ)(a.ZP,{language:"json",onCopyChange:function(E){console.log("value",E)}},{name:"OceanBase Design",description:"The Design System of OceanBase",versions:["1.0.0","2.0.0","2.5.1"]})}},94346:function(c,t,n){n.r(t);var r=n(75271),a=n(26847),o=n(56517);t.default=function(){return(0,o.tZ)(a.ZP,{lineNumber:!0},`public class HelloWorld {
     public static void main(String[] args) {
       System.out.println("Hello World!");
     }
   }`)}},98366:function(c,t,n){n.r(t);var r=n(48305),a=n.n(r),o=n(75271),i=n(42700),E=n(84110),d=n(26847),O=n(51305),e=n(56517),h="bash",P="light",g="false",s=i.Z.Option;t.default=function(){var R=(0,o.useState)(P),f=a()(R,2),M=f[0],m=f[1],A=(0,o.useState)(h),p=a()(A,2),C=p[0],v=p[1],T=(0,o.useState)(g),b=a()(T,2),S=b[0],D=b[1],B=O.default.find(function(u){return u.language===C}).code||"";return(0,e.tZ)("div",null,(0,e.tZ)(E.Z,null,"\u8BED\u8A00\u9009\u62E9:",(0,e.tZ)(i.Z,{defaultValue:h,style:{width:120},onChange:function(l){return v(l)}},O.default.map(function(u){return(0,e.tZ)(s,{key:u.language,value:u.language},u.text)})),"\u4E3B\u9898\u9009\u62E9:",(0,e.tZ)(i.Z,{defaultValue:P,style:{width:120},onChange:function(l){return m(l)}},(0,e.tZ)(s,{value:"light"},"\u767D\u8272\u4E3B\u9898"),(0,e.tZ)(s,{value:"dark"},"\u9ED1\u8272\u4E3B\u9898")),"\u5C55\u793A\u884C\u53F7:",(0,e.tZ)(i.Z,{defaultValue:g,style:{width:120},onChange:function(l){return D(l)}},(0,e.tZ)(s,{value:"false"},"\u4E0D\u5C55\u793A"),(0,e.tZ)(s,{value:"true"},"\u5C55\u793A"))),(0,e.tZ)("div",{style:{height:400,width:"100%",overflowY:"scroll",marginBlockStart:"16px"}},(0,e.tZ)(d.ZP,{language:C,theme:M,height:400,lineNumber:S!=g},B)))}}}]);
