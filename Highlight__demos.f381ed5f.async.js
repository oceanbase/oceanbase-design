"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[4941],{75734:function(g,e,n){n.r(e);var l=n(50959),t=n(97362),a=n(43765);e.default=function(){return(0,a.tZ)(t.Highlight,null,`public class HelloWorld {
     public static void main(String[] args) {
       System.out.println("Hello World!");
     }
   }`)}},12234:function(g,e,n){n.r(e);var l=n(50959),t=n(97362),a=n(43765);e.default=function(){return(0,a.tZ)(t.Highlight,{language:"java",theme:"dark"},`public class HelloWorld {
     public static void main(String[] args) {
       System.out.println("Hello World!");
     }
   }`)}},14918:function(g,e,n){n.r(e);var l=n(28152),t=n.n(l),a=n(50959),o=n(17123),h=n(97362),i=n(43765),p={bash:{source:`
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
     `.trim()}};e.default=function(){var r=a.useState(!0),f=t()(r,2),m=f[0],_=f[1],c=a.useState(!0),y=t()(c,2),A=y[0],C=y[1],P=a.useState(!0),D=t()(P,2),b=D[0],S=D[1],x=a.useState(!0),O=t()(x,2),v=O[0],T=O[1],M=a.useState("json"),R=t()(M,2),E=R[0],s=R[1],d=a.useState(!1),k=t()(d,2),B=k[0],w=k[1],I=p[E];return(0,i.tZ)(o.T,{direction:"vertical",style:{width:"100%"}},(0,i.tZ)(o.T,null,(0,i.tZ)(o.Ph,{style:{width:150},value:E,options:Object.keys(p).map(function(u){return{label:u,value:u}}),onChange:function(L){s(L)}}),(0,i.tZ)(o.rs,{checked:v,onChange:function(){T(!v)},checkedChildren:"split",unCheckedChildren:"split"}),(0,i.tZ)(o.rs,{checked:b,onChange:function(){S(!b)},checkedChildren:"light",unCheckedChildren:"light"}),(0,i.tZ)(o.rs,{checked:m,onChange:function(){_(!m)},checkedChildren:"source",unCheckedChildren:"source"}),(0,i.tZ)(o.rs,{checked:A,onChange:function(){C(!A)},checkedChildren:"target",unCheckedChildren:"target"}),(0,i.tZ)(o.rs,{checked:B,onChange:function(){w(!B)},checkedChildren:"startRowIndex",unCheckedChildren:"startRowIndex"})),(0,i.tZ)(h.Highlight.Diff,{split:v,language:E,source:m?I.source:null,target:A?I.target:null,theme:b?"light":"dark",startRowIndex:B?[93,103]:void 0}))}},56912:function(g,e,n){n.r(e);var l=n(50959),t=n(97362),a=n(43765);e.default=function(){return(0,a.tZ)(t.Highlight,{innerHTML:!0,theme:"dark"},`<pre style="padding: 0; margin:0;"><code>
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
   </code></pre>`)}},58867:function(g,e,n){n.r(e);var l=n(50959),t=n(97362),a=n(43765);e.default=function(){return(0,a.tZ)(t.Highlight,{language:"json",onCopyChange:function(h){console.log("value",h)}},{name:"OceanBase Design",description:"The Design System of OceanBase",versions:["1.0.0","2.0.0","2.5.1"]})}},93587:function(g,e,n){n.r(e);var l=n(50959),t=n(97362),a=n(43765);e.default=function(){return(0,a.tZ)(t.Highlight,{lineNumber:!0},`public class HelloWorld {
     public static void main(String[] args) {
       System.out.println("Hello World!");
     }
   }`)}},50351:function(g,e,n){n.r(e),n.d(e,{default:function(){return y}});var l=n(28152),t=n.n(l),a=n(50959),o=n(17123),h=n(97362),i=[{language:"bash",text:"Bash",code:`#!/bin/bash

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
- comment`}],p=i,r=n(43765),f="bash",m="light",_="false",c=o.Ph.Option,y=function(){var A=(0,a.useState)(m),C=t()(A,2),P=C[0],D=C[1],b=(0,a.useState)(f),S=t()(b,2),x=S[0],O=S[1],v=(0,a.useState)(_),T=t()(v,2),M=T[0],R=T[1],E=p.find(function(s){return s.language===x}).code||"";return(0,r.tZ)("div",null,(0,r.tZ)(o.T,null,"\u8BED\u8A00\u9009\u62E9:",(0,r.tZ)(o.Ph,{defaultValue:f,style:{width:120},onChange:function(d){return O(d)}},p.map(function(s){return(0,r.tZ)(c,{key:s.language,value:s.language},s.text)})),"\u4E3B\u9898\u9009\u62E9:",(0,r.tZ)(o.Ph,{defaultValue:m,style:{width:120},onChange:function(d){return D(d)}},(0,r.tZ)(c,{value:"light"},"\u767D\u8272\u4E3B\u9898"),(0,r.tZ)(c,{value:"dark"},"\u9ED1\u8272\u4E3B\u9898")),"\u5C55\u793A\u884C\u53F7:",(0,r.tZ)(o.Ph,{defaultValue:_,style:{width:120},onChange:function(d){return R(d)}},(0,r.tZ)(c,{value:"false"},"\u4E0D\u5C55\u793A"),(0,r.tZ)(c,{value:"true"},"\u5C55\u793A"))),(0,r.tZ)("div",{style:{height:400,width:"100%",overflowY:"scroll",marginBlockStart:"16px"}},(0,r.tZ)(h.Highlight,{language:x,theme:P,height:400,lineNumber:M!=_},E)))}}}]);
