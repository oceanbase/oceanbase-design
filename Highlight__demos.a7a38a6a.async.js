"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[4941],{54427:function(y,l,t){t.r(l);var i=t(50959),c=t(87408),s=t(27648);l.default=function(){return(0,s.tZ)(c.Highlight,null,`public class HelloWorld {
     public static void main(String[] args) {
       System.out.println("Hello World!");
     }
   }`)}},99040:function(y,l,t){t.r(l);var i=t(50959),c=t(87408),s=t(27648);l.default=function(){return(0,s.tZ)(c.Highlight,{language:"java",theme:"dark"},`public class HelloWorld {
     public static void main(String[] args) {
       System.out.println("Hello World!");
     }
   }`)}},21815:function(y,l,t){t.r(l);var i=t(48305),c=t.n(i),s=t(50959),u=t(21839),g=t(87408),m=t(27648),f={bash:{source:`
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
     `.trim()}};l.default=function(){var d=s.useState(!0),C=c()(d,2),h=C[0],E=C[1],O=s.useState(!0),L=c()(O,2),x=L[0],k=L[1],T=s.useState(!0),R=c()(T,2),D=R[0],H=R[1],I=s.useState(!0),B=c()(I,2),M=B[0],Z=B[1],V=s.useState("json"),U=c()(V,2),j=U[0],b=U[1],S=s.useState(!1),rn=c()(S,2),X=rn[0],sn=rn[1],W=f[j];return(0,m.tZ)(u.T,{direction:"vertical",style:{width:"100%"}},(0,m.tZ)(u.T,null,(0,m.tZ)(u.Ph,{style:{width:150},value:j,options:Object.keys(f).map(function(_){return{label:_,value:_}}),onChange:function(ln){b(ln)}}),(0,m.tZ)(u.rs,{checked:M,onChange:function(){Z(!M)},checkedChildren:"split",unCheckedChildren:"split"}),(0,m.tZ)(u.rs,{checked:D,onChange:function(){H(!D)},checkedChildren:"light",unCheckedChildren:"light"}),(0,m.tZ)(u.rs,{checked:h,onChange:function(){E(!h)},checkedChildren:"source",unCheckedChildren:"source"}),(0,m.tZ)(u.rs,{checked:x,onChange:function(){k(!x)},checkedChildren:"target",unCheckedChildren:"target"}),(0,m.tZ)(u.rs,{checked:X,onChange:function(){sn(!X)},checkedChildren:"startRowIndex",unCheckedChildren:"startRowIndex"})),(0,m.tZ)(g.Highlight.Diff,{split:M,language:j,source:h?W.source:null,target:x?W.target:null,theme:D?"light":"dark",startRowIndex:X?[93,103]:void 0}))}},50924:function(y,l,t){t.r(l);var i=t(50959),c=t(87408),s=t(27648);l.default=function(){return(0,s.tZ)(c.Highlight,{innerHTML:!0,theme:"dark"},`<pre style="padding: 0; margin:0;"><code>
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
   </code></pre>`)}},42456:function(y,l,t){t.r(l);var i=t(50959),c=t(87408),s=t(27648);l.default=function(){return(0,s.tZ)(c.Highlight,{language:"json",onCopyChange:function(g){console.log("value",g)}},{name:"OceanBase Design",description:"The Design System of OceanBase",versions:["1.0.0","2.0.0","2.5.1"]})}},28922:function(y,l,t){t.r(l);var i=t(50959),c=t(87408),s=t(27648);l.default=function(){return(0,s.tZ)(c.Highlight,{lineNumber:!0},`public class HelloWorld {
     public static void main(String[] args) {
       System.out.println("Hello World!");
     }
   }`)}},96830:function(y,l,t){t.r(l),t.d(l,{default:function(){return L}});var i=t(48305),c=t.n(i),s=t(50959),u=t(21839),g=t(87408),m=[{language:"bash",text:"Bash",code:`#!/bin/bash

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

echo '"quoted"' | tr -d \\\\/" > text.txt

`},{language:"cpp",text:"Cpp",code:`#include <iostream>

int main(int argc, char *argv[]) {

  /* An annoying "Hello World" example */
  for (auto i = 0; i < 0xFFFF; i++)
    cout << "Hello, World!" << endl;

  char c = '\\n';
  unordered_map <string, vector<string> > m;
  m["key"] = "\\\\\\\\"; // this is an error

  return -2e3 + 12l;
}`},{language:"css",text:"Css",code:`@font-face {
  font-family: Chunkfive; src: url('Chunkfive.otf');
}

body, .usertext {
  color: #F0F0F0; background: #600;
  font-family: Chunkfive, sans;
  --heading-1: 30px/32px Helvetica, sans-serif;
}

@import url(print.css);
@media print {
  a[href^=http]::after {
    content: attr(href)
  }
}`},{language:"dockerfile",text:"Dockerfile",code:`# Example instructions from https://docs.docker.com/reference/builder/
FROM ubuntu:14.04

MAINTAINER example@example.com

ENV foo /bar
WORKDIR \${foo}   # WORKDIR /bar
ADD . $foo       # ADD . /bar
COPY \\$foo /quux # COPY $foo /quux
ARG   VAR=FOO

RUN apt-get update && apt-get install -y software-properties-common\\
    zsh curl wget git htop\\
    unzip vim telnet
RUN ["/bin/bash", "-c", "echo hello \${USER}"]

CMD ["executable","param1","param2"]
CMD command param1 param2

EXPOSE 1337

ENV myName="John Doe" myDog=Rex\\ The\\ Dog \\
    myCat=fluffy

ENV myName John Doe
ENV myDog Rex The Dog
ENV myCat fluffy`},{language:"go",text:"Go",code:`package main

import "fmt"

func main() {
    ch := make(chan float64)
    ch <- 1.0e10    // magic number
    x, ok := <- ch
    defer fmt.Println(\`exitting now\\\`)
    go println(len("hello world!"))
    return
}`},{language:"groovy",text:"Groovy",code:`@CompileStatic
class Distribution implements Distributable {
    double number = 1234.234 / 567
    def otherNumber = 3 / 4
    boolean archivable = condition ?: true
    def ternary = a ? b : c
    String name = "Guillaume"
    Closure description = null
    List<DownloadPackage> packages = []
    String regex = ~/.*foo.*/
    String multi = '''
        multi line string
    ''' + """
        now with double quotes and \${gstring}
    """ + $/
        even with dollar slashy strings
    /$
}`},{language:"http",text:"Http",code:`POST /task?id=1 HTTP/1.1
Host: example.org
Content-Type: application/json; charset=utf-8
Content-Length: 137

{
  "status": "ok",
  "extended": true,
  "results": [
    {"value": 0, "type": "int64"},
    {"value": 1.0e+3, "type": "decimal"}
  ]
}`},{language:"java",text:"Java",code:`/**
 * @author John Smith <john.smith@example.com>
*/
package l2f.gameserver.model;

public abstract class L2Char extends L2Object {
  public static final Short ERROR = 0x0001;

  public void moveTo(int x, int y, int z) {
    _ai = null;
    log("Should not be called");
    if (1 > 5) { // wtf!?
      return;
    }
  }
}`},{language:"javascript",text:"Javascript",code:`function $initHighlight(block, cls) {
  try {
    if (cls.search(/\\bno\\-highlight\\b/) != -1)
      return process(block, true, 0x0F) +
             \` class="\${cls}"\`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }

  return (
    <div>
      <web-component>{block}</web-component>
    </div>
  )
}

export  $initHighlight;`},{language:"json",text:"Json",code:`[
  {
    "title": "apples",
    "count": [12000, 20000],
    "description": {"text": "...", "sensitive": false}
  },
  {
    "title": "oranges",
    "count": [17500, null],
    "description": {"text": "...", "sensitive": false}
  }
]`},{language:"jsx",text:"Jsx",code:`import React from 'react';
import { Button, Tag, Space } from '@oceanbase/design';
import { ProList } from '@oceanbase/ui';

const dataSource = [
  {
    name: 'OceanBase Design',
    image:
      'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: 'OceanBase Design',
    image:
      'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: 'OceanBase Database',
    image:
      'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: 'Oceanbase Design',
    image:
      'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
];

export default () => (
  <ProList
    toolBarRender={() => {
      return [
        <Button key="add" type="primary">
          \u65B0\u5EFA
        </Button>,
      ];
    }}
    onRow={(record) => {
      return {
        onMouseEnter: () => {
          console.log(record);
        },
        onClick: () => {
          console.log(record);
        },
      };
    }}
    rowKey="name"
    headerTitle="\u57FA\u7840\u5217\u8868"
    tooltip="\u57FA\u7840\u5217\u8868\u7684\u914D\u7F6E"
    dataSource={dataSource}
    showActions="hover"
    showExtra="hover"
    metas={{
      title: {
        dataIndex: 'name',
      },
      avatar: {
        dataIndex: 'image',
      },
      description: {
        dataIndex: 'desc',
      },
      subTitle: {
        render: () => {
          return (
            <Space size={0}>
              <Tag color="blue">OceanBase Design</Tag>
              <Tag color="#5BD8A6">Oceanbase Design</Tag>
            </Space>
          );
        },
      },
      actions: {
        render: (text, row) => [
          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="link">
            \u94FE\u8DEF
          </a>,
          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="warning">
            \u62A5\u8B66
          </a>,
          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="view">
            \u67E5\u770B
          </a>,
        ],
      },
    }}
  />
);`},{language:"markdown",text:"Markdown",code:`# hello world

you can write text [with links](http://example.com) inline or [link references][1].

* one _thing_ has *em*phasis
* two __things__ are **bold**

[1]: http://example.com

---

hello world
===========

<this_is inline="xml"></this_is>

> markdown is so cool

    so are code segments

1. one thing (yeah!)
2. two thing \`i can write code\`, and \`more\` wipee!`},{language:"nginx",text:"Nginx",code:`user  www www;
worker_processes  2;
pid /var/run/nginx.pid;
error_log  /var/log/nginx.error_log  debug | info | notice | warn | error | crit;

events {
    connections   2000;
    use kqueue | rtsig | epoll | /dev/poll | select | poll;
}

http {
    log_format main      '$remote_addr - $remote_user [$time_local] '
                         '"$request" $status $bytes_sent '
                         '"$http_referer" "$http_user_agent" '
                         '"$gzip_ratio"';

    send_timeout 3m;
    client_header_buffer_size 1k;

    gzip on;
    gzip_min_length 1100;

    #lingering_time 30;

    server {
        server_name   one.example.com  www.one.example.com;
        access_log   /var/log/nginx.access_log  main;

        rewrite (.*) /index.php?page=$1 break;

        location / {
            proxy_pass         http://127.0.0.1/;
            proxy_redirect     off;
            proxy_set_header   Host             $host;
            proxy_set_header   X-Real-IP        $remote_addr;
            charset            koi8-r;
        }

        location /api/ {
            fastcgi_pass 127.0.0.1:9000;
        }

        location ~* \\.(jpg|jpeg|gif)$ {
            root         /spool/www;
        }
    }
}`},{language:"python",text:"Python",code:`@requires_authorization
def somefunc(param1='', param2=0):
    r'''A docstring'''
    if param1 > param2: # interesting
        print 'Gre\\'ater'
    return (param2 - param1 + 1 + 0b10l) or None

class SomeClass:
    pass

>>> message = '''interpreter
... prompt'''`},{language:"ruby",text:"Ruby",code:`# The Greeter class
class Greeter
  def initialize(name)
    @name = name.capitalize
  end

  def salute
    puts "Hello #{@name}!"
  end
end

g = Greeter.new("world")
g.salute`},{language:"solidity",text:"Solidity",code:`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Primitives {
    bool public boo = true;

    uint8 public u8 = 1;
    uint public u256 = 456;
    uint public u = 123; // uint is an alias for uint256

    int8 public i8 = -1;
    int public i256 = 456;
    int public i = -123; // int is same as int256

    // minimum and maximum of int
    int public minInt = type(int).min;
    int public maxInt = type(int).max;

    address public addr = 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c;

    bytes1 a = 0xb5; //  [10110101]
    bytes1 b = 0x56; //  [01010110]

    // Default values
    // Unassigned variables have a default value
    bool public defaultBoo; // false
    uint public defaultUint; // 0
    int public defaultInt; // 0
    address public defaultAddr; // 0x0000000000000000000000000000000000000000
}`},{language:"sql",text:"Sql",code:`CREATE TABLE "topic" (
    "id" serial NOT NULL PRIMARY KEY,
    "forum_id" integer NOT NULL,
    "subject" varchar(255) NOT NULL
);
ALTER TABLE "topic"
ADD CONSTRAINT forum_id FOREIGN KEY ("forum_id")
REFERENCES "forum" ("id");

-- Initials
insert into "topic" ("forum_id", "subject")
values (2, 'D''artagnian');`},{language:"tsx",text:"Tsx",code:`import React from 'react';
import { Button, Tag, Space } from '@oceanbase/design';
import { ProList } from '@oceanbase/ui';

const dataSource = [
  {
    name: 'OceanBase Design',
    image:
      'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: 'OceanBase Database',
    image:
      'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: 'OceanBase Cloud',
    image:
      'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: 'Oceanbase Design',
    image:
      'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
];

export default () => (
  <ProList<any>
    toolBarRender={() => {
      return [
        <Button key="add" type="primary">
          \u65B0\u5EFA
        </Button>,
      ];
    }}
    onRow={(record: any) => {
      return {
        onMouseEnter: () => {
          console.log(record);
        },
        onClick: () => {
          console.log(record);
        },
      };
    }}
    rowKey="name"
    headerTitle="\u57FA\u7840\u5217\u8868"
    tooltip="\u57FA\u7840\u5217\u8868\u7684\u914D\u7F6E"
    dataSource={dataSource}
    showActions="hover"
    showExtra="hover"
    metas={{
      title: {
        dataIndex: 'name',
      },
      avatar: {
        dataIndex: 'image',
      },
      description: {
        dataIndex: 'desc',
      },
      subTitle: {
        render: () => {
          return (
            <Space size={0}>
              <Tag color="blue">OceanBase Design</Tag>
              <Tag color="#5BD8A6">Oceanbase Design</Tag>
            </Space>
          );
        },
      },
      actions: {
        render: (text, row) => [
          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="link">
            \u94FE\u8DEF
          </a>,
          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="warning">
            \u62A5\u8B66
          </a>,
          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="view">
            \u67E5\u770B
          </a>,
        ],
      },
    }}
  />
);`},{language:"typescript",text:"Typescript",code:`class MyClass {
  public static myValue: string;
  constructor(init: string) {
    this.myValue = init;
  }
}
import fs = require("fs");
module MyModule {
  export interface MyInterface extends Other {
    myProperty: any;
  }
}
declare magicNumber number;
myArray.forEach(() => { }); // fat arrow syntax`},{language:"xml",text:"Xml",code:`<!DOCTYPE html>
<title>Title</title>

<style>body {width: 500px;}</style>

<script type="application/javascript">
  function $init() {return true;}
<\/script>

<body>
  <p checked class="title" id='title'>Title</p>
  <!-- here goes the rest of the page -->
</body>`},{language:"yaml",text:"Yaml",code:`---
# comment
string_1: "Bar"
string_2: 'bar'
string_3: bar
inline_keys_ignored: sompath/name/file.jpg
keywords_in_yaml:
  - true
  - false
  - TRUE
  - FALSE
  - 21
  - 21.0
  - !!str 123
"quoted_key": &foobar
  bar: foo
  foo:
  "foo": bar

reference: *foobar

multiline_1: |
  Multiline
  String
multiline_2: >
  Multiline
  String
multiline_3: "
  Multiline string
  "

ansible_variables: "foo {{variable}}"

array_nested:
- a
- b: 1
  c: 2
- b
- comment`}],f=m,d=t(27648),C="bash",h="light",E="false",O=u.Ph.Option,L=function(){var x=(0,s.useState)(h),k=c()(x,2),T=k[0],R=k[1],D=(0,s.useState)(C),H=c()(D,2),I=H[0],B=H[1],M=(0,s.useState)(E),Z=c()(M,2),V=Z[0],U=Z[1],j=f.find(function(b){return b.language===I}).code||"";return(0,d.tZ)("div",null,(0,d.tZ)(u.T,null,"\u8BED\u8A00\u9009\u62E9:",(0,d.tZ)(u.Ph,{defaultValue:C,style:{width:120},onChange:function(S){return B(S)}},f.map(function(b){return(0,d.tZ)(O,{key:b.language,value:b.language},b.text)})),"\u4E3B\u9898\u9009\u62E9:",(0,d.tZ)(u.Ph,{defaultValue:h,style:{width:120},onChange:function(S){return R(S)}},(0,d.tZ)(O,{value:"light"},"\u767D\u8272\u4E3B\u9898"),(0,d.tZ)(O,{value:"dark"},"\u9ED1\u8272\u4E3B\u9898")),"\u5C55\u793A\u884C\u53F7:",(0,d.tZ)(u.Ph,{defaultValue:E,style:{width:120},onChange:function(S){return U(S)}},(0,d.tZ)(O,{value:"false"},"\u4E0D\u5C55\u793A"),(0,d.tZ)(O,{value:"true"},"\u5C55\u793A"))),(0,d.tZ)("div",{style:{height:400,width:"100%",overflowY:"scroll",marginBlockStart:"16px"}},(0,d.tZ)(g.Highlight,{language:I,theme:T,height:400,lineNumber:V!=E},j)))}},98559:function(y,l,t){var i=t(50959);function c(s,u,g){var m=g==null?void 0:g.immediate,f=(0,i.useRef)();f.current=s,(0,i.useEffect)(function(){var d;if(u!=null){m&&((d=f.current)===null||d===void 0||d.call(f));var C=setInterval(function(){var h;(h=f.current)===null||h===void 0||h.call(f)},u);return function(){clearInterval(C)}}},[u])}l.Z=c},90053:function(y,l,t){var i=t(50959),c=t(23725);function s(u,g){var m=(0,c.Z)(u);(0,i.useEffect)(function(){if(g!=null){var f=setTimeout(function(){m()},g);return function(){clearTimeout(f)}}},[g,m])}l.Z=s},18659:function(y,l,t){t.d(l,{Z:function(){return ln}});var i=t(50959),c=t(82187),s=t.n(c),u=t(71783),g=t(50361),m=t(10813),f=t(30141),d=t(284),C=t(18419);const h=n=>{let{children:r}=n;const{getPrefixCls:o}=i.useContext(f.E_),e=o("breadcrumb");return i.createElement("li",{className:`${e}-separator`,"aria-hidden":"true"},r===""?r:r||"/")};h.__ANT_BREADCRUMB_SEPARATOR=!0;var E=h,O=function(n,r){var o={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(o[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(n);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(n,e[a])&&(o[e[a]]=n[e[a]]);return o};function L(n,r){if(n.title===void 0||n.title===null)return null;const o=Object.keys(r).join("|");return typeof n.title=="object"?n.title:String(n.title).replace(new RegExp(`:(${o})`,"g"),(e,a)=>r[a]||e)}function x(n,r,o,e){if(o==null)return null;const{className:a,onClick:p}=r,v=O(r,["className","onClick"]),A=Object.assign(Object.assign({},(0,g.Z)(v,{data:!0,aria:!0})),{onClick:p});return e!==void 0?i.createElement("a",Object.assign({},A,{className:s()(`${n}-link`,a),href:e}),o):i.createElement("span",Object.assign({},A,{className:s()(`${n}-link`,a)}),o)}function k(n,r){return(e,a,p,v,A)=>{if(r)return r(e,a,p,v);const F=L(e,a);return x(n,e,F,A)}}var T=function(n,r){var o={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(o[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(n);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(n,e[a])&&(o[e[a]]=n[e[a]]);return o};const R=n=>{const{prefixCls:r,separator:o="/",children:e,menu:a,overlay:p,dropdownProps:v,href:A}=n,G=(Y=>{if(a||p){const Q=Object.assign({},v);if(a){const an=a||{},{items:J}=an,P=T(an,["items"]);Q.menu=Object.assign(Object.assign({},P),{items:J==null?void 0:J.map((K,$)=>{var{key:q,title:cn,label:nn,path:w}=K,un=T(K,["key","title","label","path"]);let en=nn!=null?nn:cn;return w&&(en=i.createElement("a",{href:`${A}${w}`},en)),Object.assign(Object.assign({},un),{key:q!=null?q:$,label:en})})})}else p&&(Q.overlay=p);return i.createElement(C.Z,Object.assign({placement:"bottom"},Q),i.createElement("span",{className:`${r}-overlay-link`},Y,i.createElement(d.Z,null)))}return Y})(e);return G!=null?i.createElement(i.Fragment,null,i.createElement("li",null,G),o&&i.createElement(E,null,o)):null},D=n=>{const{prefixCls:r,children:o,href:e}=n,a=T(n,["prefixCls","children","href"]),{getPrefixCls:p}=i.useContext(f.E_),v=p("breadcrumb",r);return i.createElement(R,Object.assign({},a,{prefixCls:v}),x(v,a,o,e))};D.__ANT_BREADCRUMB_ITEM=!0;var H=D,I=t(48597),B=t(9685),M=t(20224),Z=t(71554);const V=n=>{const{componentCls:r,iconCls:o,calc:e}=n;return{[r]:Object.assign(Object.assign({},(0,B.Wf)(n)),{color:n.itemColor,fontSize:n.fontSize,[o]:{fontSize:n.iconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},a:Object.assign({color:n.linkColor,transition:`color ${n.motionDurationMid}`,padding:`0 ${(0,I.unit)(n.paddingXXS)}`,borderRadius:n.borderRadiusSM,height:n.fontHeight,display:"inline-block",marginInline:e(n.marginXXS).mul(-1).equal(),"&:hover":{color:n.linkHoverColor,backgroundColor:n.colorBgTextHover}},(0,B.Qy)(n)),["li:last-child"]:{color:n.lastItemColor},[`${r}-separator`]:{marginInline:n.separatorMargin,color:n.separatorColor},[`${r}-link`]:{[`
          > ${o} + span,
          > ${o} + a
        `]:{marginInlineStart:n.marginXXS}},[`${r}-overlay-link`]:{borderRadius:n.borderRadiusSM,height:n.fontHeight,display:"inline-block",padding:`0 ${(0,I.unit)(n.paddingXXS)}`,marginInline:e(n.marginXXS).mul(-1).equal(),[`> ${o}`]:{marginInlineStart:n.marginXXS,fontSize:n.fontSizeIcon},"&:hover":{color:n.linkHoverColor,backgroundColor:n.colorBgTextHover,a:{color:n.linkHoverColor}},a:{"&:hover":{backgroundColor:"transparent"}}},[`&${n.componentCls}-rtl`]:{direction:"rtl"}})}},U=n=>({itemColor:n.colorTextDescription,lastItemColor:n.colorText,iconFontSize:n.fontSize,linkColor:n.colorTextDescription,linkHoverColor:n.colorText,separatorColor:n.colorTextDescription,separatorMargin:n.marginXS});var j=(0,M.I$)("Breadcrumb",n=>{const r=(0,Z.TS)(n,{});return V(r)},U),b=function(n,r){var o={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(o[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(n);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(n,e[a])&&(o[e[a]]=n[e[a]]);return o};function S(n){const{breadcrumbName:r,children:o}=n,e=b(n,["breadcrumbName","children"]),a=Object.assign({title:r},e);return o&&(a.menu={items:o.map(p=>{var{breadcrumbName:v}=p,A=b(p,["breadcrumbName"]);return Object.assign(Object.assign({},A),{title:v})})}),a}function rn(n,r){return(0,i.useMemo)(()=>n||(r?r.map(S):null),[n,r])}var X=function(n,r){var o={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(o[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(n);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(n,e[a])&&(o[e[a]]=n[e[a]]);return o};const sn=(n,r)=>{if(r===void 0)return r;let o=(r||"").replace(/^\//,"");return Object.keys(n).forEach(e=>{o=o.replace(`:${e}`,n[e])}),o},W=n=>{const{prefixCls:r,separator:o="/",style:e,className:a,rootClassName:p,routes:v,items:A,children:F,itemRender:G,params:Y={}}=n,Q=X(n,["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"]),{getPrefixCls:an,direction:J,breadcrumb:P}=i.useContext(f.E_);let K;const $=an("breadcrumb",r),[q,cn,nn]=j($),w=rn(A,v),un=k($,G);if(w&&w.length>0){const z=[],tn=A||v;K=w.map((N,on)=>{const{path:An,key:dn,type:_n,menu:pn,overlay:hn,onClick:yn,className:Cn,separator:En,dropdownProps:On}=N,mn=sn(Y,An);mn!==void 0&&z.push(mn);const bn=dn!=null?dn:on;if(_n==="separator")return i.createElement(E,{key:bn},En);const gn={},Sn=on===w.length-1;pn?gn.menu=pn:hn&&(gn.overlay=hn);let{href:fn}=N;return z.length&&mn!==void 0&&(fn=`#/${z.join("/")}`),i.createElement(R,Object.assign({key:bn},gn,(0,g.Z)(N,{data:!0,aria:!0}),{className:Cn,dropdownProps:On,href:fn,separator:Sn?"":o,onClick:yn,prefixCls:$}),un(N,Y,tn,z,fn))})}else if(F){const z=(0,u.Z)(F).length;K=(0,u.Z)(F).map((tn,N)=>{if(!tn)return tn;const on=N===z-1;return(0,m.Tm)(tn,{separator:on?"":o,key:N})})}const en=s()($,P==null?void 0:P.className,{[`${$}-rtl`]:J==="rtl"},a,p,cn,nn),vn=Object.assign(Object.assign({},P==null?void 0:P.style),e);return q(i.createElement("nav",Object.assign({className:en,style:vn},Q),i.createElement("ol",null,K)))};W.Item=H,W.Separator=E;var _=W,ln=_}}]);
