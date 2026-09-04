(self.webpackChunkroot=self.webpackChunkroot||[]).push([[2721],{7087:function(t,n,e){"use strict";e.r(n);var a=[{language:"bash",text:"Bash",code:`#!/bin/bash

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
      'https://mdn.alipayobjects.com/huamei_fhnyvh/afts/img/A*8zHZT7CORL0AAAAAQCAAAAgAemfOAQ/original',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: 'OceanBase Design',
    image:
      'https://mdn.alipayobjects.com/huamei_fhnyvh/afts/img/A*8zHZT7CORL0AAAAAQCAAAAgAemfOAQ/original',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: 'OceanBase Database',
    image:
      'https://mdn.alipayobjects.com/huamei_fhnyvh/afts/img/A*8zHZT7CORL0AAAAAQCAAAAgAemfOAQ/original',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: 'Oceanbase Design',
    image:
      'https://mdn.alipayobjects.com/huamei_fhnyvh/afts/img/A*8zHZT7CORL0AAAAAQCAAAAgAemfOAQ/original',
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
      'https://mdn.alipayobjects.com/huamei_fhnyvh/afts/img/A*8zHZT7CORL0AAAAAQCAAAAgAemfOAQ/original',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: 'OceanBase Database',
    image:
      'https://mdn.alipayobjects.com/huamei_fhnyvh/afts/img/A*8zHZT7CORL0AAAAAQCAAAAgAemfOAQ/original',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: 'OceanBase Cloud',
    image:
      'https://mdn.alipayobjects.com/huamei_fhnyvh/afts/img/A*8zHZT7CORL0AAAAAQCAAAAgAemfOAQ/original',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: 'Oceanbase Design',
    image:
      'https://mdn.alipayobjects.com/huamei_fhnyvh/afts/img/A*8zHZT7CORL0AAAAAQCAAAAgAemfOAQ/original',
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
- comment`}];n.default=a},54090:function(t,n,e){"use strict";var a=e(68585),r=e.n(a),X=e(26068),o=e.n(X),z=e(67825),h=e.n(z),Z=e(75271),H=e(63703),I=e(90595),d=e(94996),k=e(85101),v=e(96108),Y=e(36308),O=e(56517),sn=["data","line","xField","xAxis","yAxis","tooltip","legend","interactions","theme"],T=(0,Z.forwardRef)(function(y,tn){var b,U,s,p=y.data,m=y.line,i=y.xField,g=y.xAxis,R=y.yAxis,P=y.tooltip,M=y.legend,w=y.interactions,x=y.theme,N=h()(y,sn),C=(0,v.F)(x),l=(0,Z.useRef)(null),$=(0,d.sQ)(tn,l),nn=(0,k.Z)(P,(b=l.current)===null||b===void 0||(b=b.getChart())===null||b===void 0||(b=b.chart)===null||b===void 0?void 0:b.height),B=o()({data:g&&((g==null?void 0:g.type)==="time"||(g==null?void 0:g.type)==="timeCat")?p==null?void 0:p.sort(function(en,on){return(0,I.SU)(en,on,i||"")}):p,xField:i,line:o()(o()({},m),{},{style:o()({lineWidth:C.styleSheet.lineBorder},m==null?void 0:m.style)}),xAxis:g!==!1&&o()(o()({nice:(g==null?void 0:g.type)==="time"?!1:void 0},g),{},{grid:(g==null?void 0:g.grid)===null?null:o()(o()({},g==null?void 0:g.grid),{},{line:o()(o()({},g==null||(U=g.grid)===null||U===void 0?void 0:U.line),{},{style:o()({lineWidth:C.styleSheet.axisGridBorder,stroke:C.styleSheet.axisGridBorderColor,lineDash:[4,4]},g==null||(s=g.grid)===null||s===void 0||(s=s.line)===null||s===void 0?void 0:s.style)})})}),yAxis:R!==!1&&o()({nice:!0,tickCount:5},R),tooltip:nn,legend:M!==!1&&o()(o()({position:"bottom-left",offsetX:30},M),{},{marker:o()({symbol:"square"},M==null?void 0:M.marker)}),interactions:w||[{type:"brush-x"}],theme:C.theme},N);return(0,O.tZ)(H.Z,r()({},B,{ref:$}))});n.Z=(0,Y.D)(T)},1489:function(t,n,e){"use strict";var a=e(68585),r=e.n(a),X=e(82092),o=e.n(X),z=e(26068),h=e.n(z),Z=e(67825),H=e.n(Z),I=e(75271),d=e(87410),k=e(32699),v=e.n(k),Y=e(31939),O=e(96108),sn=e(36308),T=e(56517),y=["data","xField","meta","isStack","isGroup","isPercent","isRange","isProgress","warningPercent","dangerPercent","seriesField","label","barBackground","xAxis","yAxis","legend","theme"],tn=(0,I.forwardRef)(function(b,U){var s,p,m=b.data,i=b.xField,g=b.meta,R=b.isStack,P=b.isGroup,M=b.isPercent,w=b.isRange,x=b.isProgress,N=b.warningPercent,C=b.dangerPercent,l=b.seriesField,$=b.label,nn=b.barBackground,B=b.xAxis,en=b.yAxis,on=b.legend,un=b.theme,c=H()(b,y),f=(0,O.F)(un),E=R&&l&&(0,k.uniq)(m==null?void 0:m.filter(function(D){return D[l]}).map(function(D){return D[l]}))||[],A=E==null?void 0:E[(E==null?void 0:E.length)-1],rn=h()({data:m,xField:i,isStack:R,isGroup:P,isPercent:M,isRange:w,seriesField:l,meta:x?h()(h()({},g),{},o()({},i,h()({formatter:function(W){return"".concat((0,Y.y)(W),"%")}},g==null?void 0:g[i]))):g,label:$!==!1&&(R||P||w?$:h()({position:"right",offset:8,formatter:x?function(D){return"".concat((0,Y.y)(D[i]),"%")}:void 0},$)),barStyle:function(W){var j;return x&&(C&&W[i]>=C?j=f.semanticRed:N&&W[i]>=N&&(j=f.semanticYellow)),h()(h()({},j?{fill:j}:{}),{},{radius:w?2:!R||R&&l&&W[l]===A?[2,2,0,0]:[]})},xAxis:h()({max:x?1:void 0,nice:!0},B),barBackground:x?h()(h()({},nn),{},{style:h()({fill:f.barBackgroundColor},nn==null?void 0:nn.style)}):nn,yAxis:en!==!1&&h()(h()({},en),{},{grid:h()(h()({},en==null?void 0:en.grid),{},{line:h()(h()({},en==null||(s=en.grid)===null||s===void 0?void 0:s.line),{},{style:h()({lineWidth:f.styleSheet.axisGridBorder,stroke:f.styleSheet.axisGridBorderColor,lineDash:[4,4]},en==null||(p=en.grid)===null||p===void 0||(p=p.line)===null||p===void 0?void 0:p.style)})})}),legend:on!==!1&&h()(h()({position:"bottom-left",offsetX:30},on),{},{marker:h()({symbol:"circle"},on==null?void 0:on.marker)}),theme:f.theme},c);return(0,T.tZ)(d.Z,r()({},rn,{ref:U}))});n.Z=(0,sn.D)(tn)},34231:function(t,n,e){"use strict";var a=e(68585),r=e.n(a),X=e(26068),o=e.n(X),z=e(67825),h=e.n(z),Z=e(75271),H=e(60736),I=e(90595),d=e(32699),k=e.n(d),v=e(96108),Y=e(36308),O=e(56517),sn=["data","xField","isStack","isGroup","isRange","seriesField","label","xAxis","legend","theme"],T=(0,Z.forwardRef)(function(y,tn){var b,U,s=y.data,p=y.xField,m=y.isStack,i=y.isGroup,g=y.isRange,R=y.seriesField,P=y.label,M=y.xAxis,w=y.legend,x=y.theme,N=h()(y,sn),C=(0,v.F)(x),l=m&&R&&(0,d.uniq)(s==null?void 0:s.filter(function(B){return B[R]}).map(function(B){return B[R]}))||[],$=l==null?void 0:l[0],nn=o()({data:M&&((M==null?void 0:M.type)==="time"||(M==null?void 0:M.type)==="timeCat")?s==null?void 0:s.sort(function(B,en){return(0,I.SU)(B,en,p||"")}):s,xField:p,isStack:m,isGroup:i,isRange:g,seriesField:R,appendPadding:m||i||g?0:[16,0,0,0],dodgePadding:4,label:m||i||g?P:o()({position:"top",offset:8},P),columnStyle:function(en){return{radius:g?2:!m||m&&R&&en[R]===$?[2,2,0,0]:[]}},xAxis:M!==!1&&o()(o()({nice:(M==null?void 0:M.type)==="time"?!1:void 0},M),{},{grid:(M==null?void 0:M.grid)===null?null:o()(o()({},M==null?void 0:M.grid),{},{line:o()(o()({},M==null||(b=M.grid)===null||b===void 0?void 0:b.line),{},{style:o()({lineWidth:C.styleSheet.axisGridBorder,stroke:C.styleSheet.axisGridBorderColor,lineDash:[4,4]},M==null||(U=M.grid)===null||U===void 0||(U=U.line)===null||U===void 0?void 0:U.style)})})}),legend:w!==!1&&o()({position:"bottom-left",offsetX:30},w),theme:C.theme},N);return(0,O.tZ)(H.Z,r()({},nn,{ref:tn}))});n.Z=(0,Y.D)(T)},79233:function(t,n,e){"use strict";var a=e(68585),r=e.n(a),X=e(82092),o=e.n(X),z=e(26068),h=e.n(z),Z=e(67825),H=e.n(Z),I=e(75271),d=e(26891),k=e(90595),v=e(94996),Y=e(85101),O=e(96108),sn=e(36308),T=e(56517),y=["data","xField","yField","xAxis","yAxis","tooltip","legend","geometryOptions","theme"],tn=(0,I.forwardRef)(function(b,U){var s,p,m,i,g,R=b.data,P=b.xField,M=b.yField,w=b.xAxis,x=b.yAxis,N=b.tooltip,C=b.legend,l=b.geometryOptions,$=b.theme,nn=H()(b,y),B=(0,O.F)($),en=(0,I.useRef)(null),on=(0,v.sQ)(U,en),un=(0,Y.Z)(N,(s=en.current)===null||s===void 0||(s=s.getChart())===null||s===void 0||(s=s.chart)===null||s===void 0?void 0:s.height),c=M==null?void 0:M[0],f=M==null?void 0:M[1],E=h()({data:w&&((w==null?void 0:w.type)==="time"||(w==null?void 0:w.type)==="timeCat")?[(R==null||(p=R[0])===null||p===void 0?void 0:p.sort(function(A,rn){return(0,k.SU)(A,rn,P)}))||[],(R==null||(m=R[1])===null||m===void 0?void 0:m.sort(function(A,rn){return(0,k.SU)(A,rn,P)}))||[]]:R,xField:P,yField:M,appendPadding:[4,0,0,0],xAxis:w!==!1&&h()(h()({nice:(w==null?void 0:w.type)==="time"?!1:void 0},w),{},{grid:(w==null?void 0:w.grid)===null?null:h()(h()({},w==null?void 0:w.grid),{},{line:h()(h()({},w==null||(i=w.grid)===null||i===void 0?void 0:i.line),{},{style:h()({lineWidth:B.styleSheet.axisGridBorder,stroke:B.styleSheet.axisGridBorderColor,lineDash:[4,4]},w==null||(g=w.grid)===null||g===void 0||(g=g.line)===null||g===void 0?void 0:g.style)})})}),yAxis:x&&o()(o()({},c,(x==null?void 0:x[c])!==!1&&h()({nice:!0,tickCount:5,min:0},x==null?void 0:x[c])),f,(x==null?void 0:x[f])!==!1&&h()({nice:!0,tickCount:5,min:0},x==null?void 0:x[f])),tooltip:un,legend:C!==!1&&h()({position:"bottom-left",offsetX:30},C),geometryOptions:l==null?void 0:l.map(function(A,rn){var D={};if(A.geometry==="line")D={};else if(A.geometry==="column"){var W,j=A,L=j.seriesField,_=j.isStack,F=j.isRange,u=_&&L&&(R==null||(W=R[rn])===null||W===void 0?void 0:W.filter(function(K){return K[L]}).map(function(K){return K[L]}))||[],S=u==null?void 0:u[0];D={columnStyle:function(ln){return{radius:F?2:!_||_&&L&&ln[L]===S?[2,2,0,0]:[]}}}}return h()(h()({},D),A)}),theme:B.theme},nn);return(0,T.tZ)(d.Z,r()({},E,{ref:on}))});n.Z=(0,sn.D)(tn)},41928:function(t,n,e){"use strict";var a=e(68585),r=e.n(a),X=e(26068),o=e.n(X),z=e(67825),h=e.n(z),Z=e(75271),H=e(92253),I=e(31939),d=e(96108),k=e(36308),v=e(56517),Y=["percent","range","axis","indicator","statistic","theme"],O=(0,Z.forwardRef)(function(sn,T){var y,tn,b,U=sn.percent,s=sn.range,p=sn.axis,m=sn.indicator,i=sn.statistic,g=sn.theme,R=h()(sn,Y),P=(0,d.F)(g),M=o()({percent:U,startAngle:Math.PI*11/12,endAngle:Math.PI*1/12,range:o()({color:P.semanticGreen},s),axis:p!==!1&&o()(o()({},p),{},{label:o()({formatter:function(x){return Number(x)*100}},p==null?void 0:p.label),subTickLine:o()({count:3},p==null?void 0:p.subTickLine)}),indicator:m!==!1&&o()(o()({},m),{},{pointer:o()(o()({},m==null?void 0:m.pointer),{},{style:o()({stroke:"#D0D0D0"},m==null||(y=m.pointer)===null||y===void 0?void 0:y.style)}),pin:o()(o()({},m==null?void 0:m.pin),{},{style:o()({stroke:"#D0D0D0"},m==null||(tn=m.pin)===null||tn===void 0?void 0:tn.style)})}),statistic:o()(o()({},i),{},{content:(i==null?void 0:i.content)!==!1&&o()(o()({formatter:function(x){return"".concat((0,I.y)(x==null?void 0:x.percent),"%")}},i==null?void 0:i.content),{},{style:o()({fontSize:"36px",lineHeight:"36px"},i==null||(b=i.content)===null||b===void 0?void 0:b.style)})}),theme:P.theme},R);return(0,v.tZ)(H.Z,r()({},M,{ref:T}))});n.Z=(0,k.D)(O)},9913:function(t,n,e){"use strict";var a=e(68585),r=e.n(a),X=e(26068),o=e.n(X),z=e(67825),h=e.n(z),Z=e(75271),H=e(18390),I=e(96108),d=e(36308),k=e(56517),v=["binWidth","columnStyle","meta","xAxis","legend","theme"],Y=(0,Z.forwardRef)(function(O,sn){var T,y,tn=O.binWidth,b=O.columnStyle,U=O.meta,s=O.xAxis,p=O.legend,m=O.theme,i=h()(O,v),g=(0,I.F)(m),R=o()({binWidth:tn,columnStyle:o()({stroke:g.backgroundColor},b),meta:o()(o()({},U),{},{range:o()({tickInterval:tn},U==null?void 0:U.range)}),xAxis:s!==!1&&o()(o()({},s),{},{grid:(s==null?void 0:s.grid)===null?null:o()(o()({},s==null?void 0:s.grid),{},{line:o()(o()({},s==null||(T=s.grid)===null||T===void 0?void 0:T.line),{},{style:o()({lineWidth:g.styleSheet.axisGridBorder,stroke:g.styleSheet.axisGridBorderColor,lineDash:[4,4]},s==null||(y=s.grid)===null||y===void 0||(y=y.line)===null||y===void 0?void 0:y.style)})})}),legend:p!==!1&&o()(o()({position:"bottom-left",offsetX:30},p),{},{marker:o()({symbol:"circle"},p==null?void 0:p.marker)}),theme:g.theme},i);return(0,k.tZ)(H.Z,r()({},R,{ref:sn}))});n.Z=(0,d.D)(Y)},16887:function(t,n,e){"use strict";var a=e(68585),r=e.n(a),X=e(26068),o=e.n(X),z=e(67825),h=e.n(z),Z=e(75271),H=e(90595),I=e(20371),d=e(94996),k=e(85101),v=e(96108),Y=e(36308),O=e(32699),sn=e.n(O),T=e(56517),y=["data","stepType","xField","xAxis","yAxis","tooltip","legend","interactions","seriesField","area","theme"],tn=(0,Z.forwardRef)(function(b,U){var s,p,m,i=b.data,g=b.stepType,R=b.xField,P=b.xAxis,M=b.yAxis,w=b.tooltip,x=b.legend,N=b.interactions,C=b.seriesField,l=b.area,$=b.theme,nn=h()(b,y),B=(0,v.F)($),en=(0,Z.useRef)(null),on=(0,d.sQ)(U,en),un=(0,k.Z)(w,(s=en.current)===null||s===void 0||(s=s.getChart())===null||s===void 0||(s=s.chart)===null||s===void 0?void 0:s.height),c=(0,Z.useMemo)(function(){return Object.keys((0,O.groupBy)(i,C))},[i,C]),f=(0,Z.useCallback)(function(A){var rn=c.findIndex(function(j){return j===A[C]}),D=c.length>B.colors10.length?B.colors20:B.colors10,W=C?D[rn]:D[0];return{fill:"l(270) 0:#ffffff 0.5:".concat(W,"77 1:").concat(W),fillOpacity:.15}},[c,C,B.colors10,B.colors20]),E=o()({data:P&&((P==null?void 0:P.type)==="time"||(P==null?void 0:P.type)==="timeCat")?i==null?void 0:i.sort(function(A,rn){return(0,H.SU)(A,rn,R||"")}):i,stepType:g,xField:R,seriesField:C,xAxis:P!==!1&&o()(o()({nice:(P==null?void 0:P.type)==="time"?!1:void 0},P),{},{grid:(P==null?void 0:P.grid)===null?null:o()(o()({},P==null?void 0:P.grid),{},{line:o()(o()({},P==null||(p=P.grid)===null||p===void 0?void 0:p.line),{},{style:o()({lineWidth:B.styleSheet.axisGridBorder,stroke:B.styleSheet.axisGridBorderColor,lineDash:[4,4]},P==null||(m=P.grid)===null||m===void 0||(m=m.line)===null||m===void 0?void 0:m.style)})})}),yAxis:M!==!1&&o()({nice:!0,tickCount:5},M),tooltip:un,legend:x!==!1&&o()(o()({position:"bottom-left",offsetX:30},x),{},{marker:o()({symbol:"hyphen"},x==null?void 0:x.marker)}),interactions:N||[{type:"brush-x"}],theme:B.theme,area:l?o()(o()({},l),{},{style:function(rn){var D;return o()(o()({},l.gradientFill?f(rn):{}),typeof(l==null?void 0:l.style)=="function"?l==null?void 0:l.style(rn):(D=l==null?void 0:l.style)!==null&&D!==void 0?D:{})}}):void 0},nn);return(0,T.tZ)(I.Z,r()({},E,{ref:on}))});n.Z=(0,Y.D)(tn)},83602:function(t,n,e){"use strict";var a=e(68585),r=e.n(a),X=e(26068),o=e.n(X),z=e(67825),h=e.n(z),Z=e(75271),H=e(6507),I=e(31939),d=e(96108),k=e(36308),v=e(56517),Y=["height","width","shape","layout","title","percent","warningPercent","dangerPercent","decimal","liquidStyle","shapeStyle","outline","wave","statistic","theme","containerStyle","percentStyle","titleStyle"];function O(T,y,tn,b){var U=.618,s=b/2,p=tn/2*U,m=6;return[["M",T-p+m,y-s],["L",T+p-m,y-s],["a",m,m,0,0,1,m,m],["L",T+p,y+s-m],["a",m,m,0,0,1,-m,m],["L",T-p+m,y+s],["a",m,m,0,0,1,-m,-m],["L",T-p,y-s+m],["a",m,m,0,0,1,m,-m]]}var sn=(0,Z.forwardRef)(function(T,y){var tn=T.height,b=T.width,U=b===void 0?tn:b,s=T.shape,p=s===void 0?"circle":s,m=T.layout,i=m===void 0?"vertical":m,g=T.title,R=T.percent,P=T.warningPercent,M=T.dangerPercent,w=T.decimal,x=w===void 0?2:w,N=T.liquidStyle,C=T.shapeStyle,l=T.outline,$=T.wave,nn=T.statistic,B=T.theme,en=T.containerStyle,on=T.percentStyle,un=T.titleStyle,c=h()(T,Y),f=(0,d.F)(B),E;M&&R>=M?E=f.semanticRed:P&&R>=P&&(E=f.semanticYellow);var A=o()({height:tn,width:U,shape:p==="rect"?O:p,radius:1,percent:R,liquidStyle:o()({fill:E||f.semanticGreen,radius:10},N),shapeStyle:o()({fill:f.subColor,radius:10},C),outline:o()({border:0,distance:0},l),wave:o()({count:1},$),statistic:o()({title:!1,content:!1},nn),theme:f.theme},c);return i==="horizontal"?(0,v.tZ)("div",{style:o()({color:E,display:"flex"},en)},(0,v.tZ)(H.Z,r()({},A,{ref:y})),(0,v.tZ)("span",{style:{marginLeft:p==="rect"?12-U*3/16:12,display:"inline-flex",flexDirection:"column",justifyContent:"space-between",height:tn}},(0,v.tZ)("span",{style:o()({color:E||f.styleSheet.axisLabelFillColor,lineHeight:1},un)},g),(0,v.tZ)("span",{style:o()({display:"flex",alignItems:"end",lineHeight:1},on)},(0,v.tZ)("span",{style:{fontFamily:"Avenir-Heavy",fontSize:tn*.618,lineHeight:.618,marginRight:4}},(0,I.y)(R,x)),(0,v.tZ)("span",null,"%")))):(0,v.tZ)("div",{style:o()({color:E,textAlign:"center"},en)},(0,v.tZ)("div",{style:o()({marginBottom:4},on)},"".concat((0,I.y)(R,x),"%")),(0,v.tZ)(H.Z,r()({},A,{ref:y})),g&&(0,v.tZ)("div",{style:o()({color:E||f.styleSheet.axisLabelFillColor,marginTop:4},un)},g))});n.Z=(0,k.D)(sn)},57182:function(t,n,e){"use strict";var a=e(68585),r=e.n(a),X=e(26068),o=e.n(X),z=e(67825),h=e.n(z),Z=e(75271),H=e(75811),I=e(80565),d=e(32699),k=e.n(d),v=e(96108),Y=e(36308),O=e(56517),sn=["data","angleField","colorField","isDonut","isHalfDonut","innerRadius","pieStyle","label","legend","interactions","statistic","statisticTitle","theme"],T=function(U){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},p=s.fontSize,m=s.fontFamily,i=m===void 0?"sans-serif":m,g=s.fontWeight,R=s.fontStyle,P=s.fontVariant,M=document.createElement("canvas").getContext("2d");if(M){M.font=[R,g,P,"".concat(p,"px"),i].join(" ");var w=M==null?void 0:M.measureText((0,d.toString)(U)||"");return{width:w.width,height:w.actualBoundingBoxAscent+w.actualBoundingBoxDescent}}return{width:0,height:0}};function y(b,U,s){var p=T(U,s),m=p.width,i=p.height,g=b/2,R=1;b<m&&(R=Math.min(Math.sqrt(Math.abs(Math.pow(g,2)/(Math.pow(m/2,2)+Math.pow(i,2)))),1));var P="width:".concat(b,"px;");return'<div style="'.concat(P,";font-size:").concat(R,"em;line-height:").concat(R<1?1:"inherit",';">').concat(U,"</div>")}var tn=(0,Z.forwardRef)(function(b,U){var s,p,m,i,g=b.data,R=b.angleField,P=b.colorField,M=b.isDonut,w=b.isHalfDonut,x=b.innerRadius,N=x===void 0?M||w?.6:void 0:x,C=b.pieStyle,l=b.label,$=b.legend,nn=b.interactions,B=b.statistic,en=b.statisticTitle,on=en===void 0?"\u603B\u6570":en,un=b.theme,c=h()(b,sn),f=(0,v.F)(un),E=M||w||!!N,A=14,rn=32,D=o()(o()({data:g,angleField:R,colorField:P,innerRadius:N},w?{startAngle:Math.PI*11/12,endAngle:Math.PI*1/12}:{}),{},{label:l!==!1&&o()(o()({type:"inner",offset:E?"-50%":"-30%",autoRotate:!1},l),{},{style:o()({fontSize:14,textAlign:"center"},l==null?void 0:l.style)}),pieStyle:o()({lineWidth:E?2:1,stroke:f.backgroundColor},C),legend:$!==!1&&o()({flipPage:!1},$),interactions:nn||[{type:"element-active"}],statistic:o()(o()({},B),{},{title:(B==null?void 0:B.title)!==!1&&o()(o()(o()({offsetY:w?72:36},(B==null||(s=B.title)===null||s===void 0?void 0:s.content)===void 0?{customHtml:function(j,L,_,F){var u,S=j.getBoundingClientRect(),K=S.width,ln=S.height,q=Math.sqrt(Math.pow(K/2,2)+Math.pow(ln/2,2)),cn=_?_[P]:on,_n=(B==null?void 0:B.title)&&(B==null||(u=B.title)===null||u===void 0?void 0:u.formatter),vn=(0,d.isFunction)(_n)?_n(_,F):cn;return y(q,vn,{fontSize:A})}}:{}),B==null?void 0:B.title),{},{style:o()({fontSize:"".concat(A,"px"),fontFamily:"Avenir-Heavy",color:f.styleSheet.annotationTextFillColor},B==null||(p=B.title)===null||p===void 0?void 0:p.style)}),content:(B==null?void 0:B.content)!==!1&&o()(o()(o()({offsetY:w?18:-18},(B==null||(m=B.content)===null||m===void 0?void 0:m.content)===void 0?{customHtml:function(j,L,_,F){var u,S=j.getBoundingClientRect(),K=S.width,ln=_?"".concat(_[R]):"".concat((0,I.uf)(F==null?void 0:F.reduce(function(_n,vn){return _n+vn[R]},0))),q=(B==null?void 0:B.content)&&(B==null||(u=B.content)===null||u===void 0?void 0:u.formatter),cn=(0,d.isFunction)(q)?q(_,F):"".concat(ln);return y(K,cn,{fontSize:rn})}}:{}),B==null?void 0:B.content),{},{style:o()({fontSize:"".concat(rn,"px"),fontFamily:"PingFangSC",color:f.styleSheet.annotationTextFillColor},B==null||(i=B.content)===null||i===void 0?void 0:i.style)})}),theme:f.theme},c);return(0,O.tZ)(H.Z,r()({},D,{ref:U}))});n.Z=(0,Y.D)(tn)},18547:function(t,n,e){"use strict";e.d(n,{Z:function(){return m}});var a=e(68585),r=e.n(a),X=e(26068),o=e.n(X),z=e(67825),h=e.n(z),Z=e(75271),H=e(71024),I=e(82187),d=e.n(I),k=e(90595),v=e(32699),Y=e(96108),O=e(56517),sn=["size","color","value","valueStyle","unit","unitStyle","thresholds","className","theme"],T="ob-score",y=120,tn=160,b=200,U=1.2,s=500,p=function(g){var R,P=g.size,M=g.color,w=g.value,x=g.valueStyle,N=g.unit,C=g.unitStyle,l=g.thresholds,$=l===void 0?{}:l,nn=g.className,B=g.theme,en=h()(g,sn),on=(0,Y.F)(B),un=on.semanticGreen,c=on.defaultColor,f=on.semanticYellow,E=on.semanticRed,A="";M?A=M:w>=85?A=un:w<85&&w>=70?A=c:w<70&&w>=60?A=f:A=E;var rn=N===""?null:N||"\u5206",D=Object.keys($).map(function(u){return{value:(0,v.toNumber)(u),color:$[u]}}).sort(function(u,S){return(0,k.wj)(u,S,"value")});A=((R=D.find(function(u,S){var K;return!w||w>=u.value&&(!D[S+1]||w<((K=D[S+1])===null||K===void 0?void 0:K.value))}))===null||R===void 0?void 0:R.color)||A;var W={backgroundColor:A},j={color:A},L={width:0,height:0};if(P)switch(P){case"small":L={width:y,height:y};break;case"middle":L={width:tn,height:tn};break;case"large":L={width:b,height:b};break;default:L={width:P,height:P};break}else L={width:tn,height:tn};var _=(0,H.MX)((0,v.toString)(w),L.width*.33,L.height*.33,U,void 0,s),F=(0,H.MX)((0,v.toString)(N),L.width*.08,L.height*.08,U,void 0,s);return(0,O.tZ)("div",r()({className:d()("".concat(T,"-container"),nn),style:L},en),(0,O.tZ)("div",{className:"".concat(T,"-background-first"),style:W}),(0,O.tZ)("div",{className:"".concat(T,"-background-second"),style:W}),(0,O.tZ)("div",{className:"".concat(T,"-circle"),style:{backgroundColor:on.backgroundColor}},(0,O.tZ)("div",{className:"".concat(T,"-circle-content")},(0,O.tZ)("span",{className:"".concat(T,"-value"),style:o()(o()({fontSize:"".concat(_,"px")},j),x||{})},w||0),rn?(0,O.tZ)("span",{className:"".concat(T,"-unit"),style:o()(o()({fontSize:"".concat(F,"px"),marginLeft:L.width*.04},j),C||{})},rn):null)))},m=p},44162:function(t,n,e){"use strict";e.d(n,{Z:function(){return M}});var a=e(68585),r=e.n(a),X=e(82092),o=e.n(X),z=e(26068),h=e.n(z),Z=e(67825),H=e.n(Z),I=e(75271),d=e(20680),k=e(32699),v=e(82187),Y=e.n(v),O=e(18135),sn=e(90595),T=e(65545),y=e(96108),tn=e(71024),b=e(56517),U=["width","height","padding","title","value","prefix","suffix","layout","theme","colorMode","chartMode","chartData","chartConfig","textAlign","thresholds","className","style"],s="ob-stat",p=1.2,m=20,i=40,g=500;function R(w){return w<20?.9:w<26?.8:.6}var P=function(x){var N,C=x.width,l=x.height,$=x.padding,nn=$===void 0?8:$,B=x.title,en=x.value,on=x.prefix,un=x.suffix,c=x.layout,f=c===void 0?"vertical":c,E=x.theme,A=x.colorMode,rn=A===void 0?"background":A,D=x.chartMode,W=x.chartData,j=W===void 0?[]:W,L=x.chartConfig,_=x.textAlign,F=x.thresholds,u=F===void 0?{}:F,S=x.className,K=x.style,ln=H()(x,U),q=(0,y.F)(E),cn=(0,O.Z)(),_n=cn.ref,vn=cn.width,gn=vn===void 0?0:vn,J=cn.height,Q=J===void 0?0:J,an=Q<72,An=gn-nn*2,kn=Q-nn*2,xn=Object.keys(u).map(function($n){return{value:(0,k.toNumber)($n),color:u[$n]}}).sort(function($n,Zn){return(0,sn.wj)($n,Zn,"value")}),Pn=((N=xn.find(function($n,Zn){var oe;return!en||en>=$n.value&&(!xn[Zn+1]||en<((oe=xn[Zn+1])===null||oe===void 0?void 0:oe.value))}))===null||N===void 0?void 0:N.color)||q.defaultColor,hn=q.theme==="dark"?1:-.7,G=(0,d.Z)(Pn).darken(15*hn).spin(8).toRgbString(),V=(0,d.Z)(Pn).darken(5*hn).spin(-8).toRgbString(),On="linear-gradient(120deg, ".concat(G,", ").concat(V,")"),dn=D==="line"||D==="area",pn=on||un,Cn=.1,yn=1,Rn=1,fn=1,Tn=1,Bn=.5;an?dn?f==="horizontal"?(yn=.6,Rn=.4,fn=pn?.3-Cn:.3,Tn=.5,Bn=.5):(yn=1,Rn=.25,fn=pn?1-Cn:1,Tn=.5,Bn=.25):f==="horizontal"?(yn=.6,Rn=.5,fn=pn?.3-Cn:.3,Tn=1,Bn=0):(yn=1,Rn=.3,fn=pn?1-Cn:1,Tn=.7,Bn=0):dn?f==="horizontal"?(yn=.6,Rn=.4,fn=pn?.4-Cn:.4,Tn=.5,Bn=.5):(yn=1,Rn=.1,fn=pn?1-Cn:1,Tn=.4,Bn=.5):f==="horizontal"?(yn=.6,Rn=.5,fn=pn?.4-Cn:.4,Tn=1,Bn=0):(yn=1,Rn=.3,fn=pn?1-Cn:1,Tn=.7,Bn=0);var Nn=(0,tn.MX)(B||"",An*yn,kn*Rn,p,m),qn=(0,tn.MX)((0,k.toString)(en),An*fn,kn*Tn,p,i,g),Qn=qn*R(qn),En=(0,I.useRef)(),Yn=Q*Bn;(0,I.useEffect)(function(){setTimeout(function(){var $n,Zn=En==null||($n=En.current)===null||$n===void 0?void 0:$n.getChart();Zn&&Zn.changeSize(gn,Yn)},0)},[Yn]);var Kn=rn==="background"?"rgba(256, 256, 256, 0.65)":Pn,Hn=h()(h()({height:Yn,data:j,appendPadding:[0,-nn,0,-nn],tooltip:!1,color:Kn},L),{},{areaStyle:h()({fill:D==="area"?Kn:"transparent",fillOpacity:rn==="background"?.65:.15},L==null?void 0:L.areaStyle)});return(0,b.tZ)("div",r()({ref:_n,className:Y()(s,"".concat(s,"-").concat(f),"".concat(s,"-").concat(rn),o()(o()({className:S},"".concat(s,"-no-chart"),!dn),"".concat(s,"-center"),_==="center")),style:h()({width:C,height:l,padding:nn,background:rn==="background"?On:void 0},K)},ln),(0,b.tZ)("div",{className:"".concat(s,"-content")},(0,b.tZ)("div",{style:{lineHeight:p,fontSize:Nn},className:"".concat(s,"-title")},B),(0,b.tZ)("div",{style:{color:rn==="value"?Pn:void 0}},on&&(0,b.tZ)("span",{className:"".concat(s,"-prefix"),style:{lineHeight:p,fontSize:Qn,marginRight:4}},on),(0,b.tZ)("span",{className:"".concat(s,"-value"),style:{lineHeight:p,fontWeight:g,fontSize:qn}},en),un&&(0,b.tZ)("span",{className:"".concat(s,"-suffix"),style:{lineHeight:p,fontSize:Qn,marginLeft:4}},un))),Q>0&&dn&&(0,b.tZ)("div",{className:"".concat(s,"-chart")},(0,b.tZ)(T.Z,r()({},Hn,{ref:En}))))},M=P},85101:function(t,n,e){"use strict";var a=e(26068),r=e.n(a),X=e(67825),o=e.n(X),z=e(31759),h=e.n(z),Z=["scrollable","domStyles"];n.Z=function(H,I){if(h()(H)==="object"){var d=H||{},k=d.scrollable,v=d.domStyles,Y=o()(d,Z);return k?r()(r()({follow:!0,shared:!0,enterable:!0,offset:20},Y),{},{domStyles:r()(r()({},v),{},{"g2-tooltip":r()({maxHeight:"".concat(I,"px"),overflow:"auto"},v==null?void 0:v["g2-tooltip"])})}):H}return H===void 0?{}:H}},41054:function(t,n,e){"use strict";e.r(n),e.d(n,{Area:function(){return z.Z},AreaMap:function(){return a.ZW},Bar:function(){return h.Z},BidirectionalBar:function(){return a.hF},Box:function(){return a.xu},Bullet:function(){return a.gT},CanvasService:function(){return a.t$},ChartProvider:function(){return tn.Z},Chord:function(){return a.VC},ChoroplethMap:function(){return a.D9},CirclePacking:function(){return a.wp},Column:function(){return Z.Z},ConversionDagreGraph:function(){return a.Tw},DagreFundFlowGraph:function(){return a.hr},DagreGraph:function(){return a.SL},DecompositionTreeGraph:function(){return a.QR},DotMap:function(){return a.a4},DualAxes:function(){return d.Z},Edge:function(){return a.kS},EdgeService:function(){return a.Af},EditorPanels:function(){return a.t2},FUNNEL_CONVERSATION_FIELD:function(){return a.V1},Facet:function(){return a.r$},FileTreeGraph:function(){return a.SX},FlowAnalysisGraph:function(){return a.Wh},FlowMap:function(){return a.bR},Flowchart:function(){return a.Ft},FormItemWrapper:function(){return a.Gn},FormPanel:function(){return a.by},FormWrapper:function(){return a.n5},FundFlowGraph:function(){return a.aN},Funnel:function(){return a.oe},G2:function(){return a.G2},G6:function(){return a.G6},Gauge:function(){return k.Z},GeographicHeatmap:function(){return a.tx},Graph:function(){return a.kJ},GridMap:function(){return a.qL},GroupService:function(){return a.lT},Heatmap:function(){return a.Xd},HexbinMap:function(){return a.f3},Histogram:function(){return H.Z},IconStore:function(){return a.ko},IndentedTree:function(){return a.uk},IndentedTreeGraph:function(){return a.m0},Line:function(){return o.Z},Liquid:function(){return v.Z},MindMapGraph:function(){return a.Lt},Mix:function(){return a.V2},MultiView:function(){return a.wo},Node:function(){return a.NB},NodeService:function(){return a.sX},NsGraph:function(){return a.Ak},OrganizationGraph:function(){return a.WB},OrganizationTreeGraph:function(){return a.eu},OrganizationalGraph:function(){return a.nq},PathMap:function(){return a.L9},Pie:function(){return I.Z},Plot:function(){return a.XN},Progress:function(){return T.Z},Radar:function(){return a.Fk},RadialBar:function(){return a.Gm},RadialGraph:function(){return a.Xi},RadialTreeGraph:function(){return a.Hw},RingProgress:function(){return a.TZ},Rose:function(){return a.he},Sankey:function(){return a.bQ},Scatter:function(){return a.bp},Score:function(){return y.Z},Stat:function(){return X.Z},Stock:function(){return a.Wd},Sunburst:function(){return a.qu},TinyArea:function(){return O.Z},TinyColumn:function(){return sn.Z},TinyLine:function(){return Y.Z},ToolbarPanel:function(){return a.T0},TreeGraph:function(){return a.F},Treemap:function(){return a.WS},Venn:function(){return a.J},Violin:function(){return a.BS},Waterfall:function(){return a.p3},WordCloud:function(){return a.kB},WorkspacePanel:function(){return a.qs},XFlowAppProvider:function(){return a.pz},XFlowEdgeCommands:function(){return a.$b},XFlowGraphCommands:function(){return a.Gv},XFlowNodeCommands:function(){return a.cE},adaptors:function(){return a.Cc},createKeybindingConfig:function(){return a.zg},flow:function(){return a.ls},getCanvasPattern:function(){return a.rk},measureTextWidth:function(){return a.Ux},radialSectorLayout:function(){return a.Db},registerFontFace:function(){return a.ZP},registerIconFont:function(){return a.Hd},registerIconFonts:function(){return a.XL},registerImage:function(){return a.iL},registerImages:function(){return a.nr},unregisterFontFace:function(){return a.wW},unregisterIconFont:function(){return a.EW},unregisterImage:function(){return a.a_},usePanelContext:function(){return a.R9},useTheme:function(){return b.F},useXFlowApp:function(){return a.XZ},version:function(){return r.i8}});var a=e(31171),r={i8:"1.1.0"},X=e(44162),o=e(16887),z=e(54090),h=e(1489),Z=e(34231),H=e(9913),I=e(57182),d=e(79233),k=e(41928),v=e(83602),Y=e(59844),O=e(65545),sn=e(70850),T=e(62567),y=e(18547),tn=e(2028),b=e(96108)},71024:function(t,n,e){"use strict";e.d(n,{MX:function(){return Z}});var a,r=new Map,X=500,o="";function z(){return a||(a=document.createElement("canvas").getContext("2d")),a}function h(H,I){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:400,k="".concat(d," ").concat(I,"px 'Inter'"),v=H+k,Y=r.get(v);if(Y)return Y;var O=z();o!==k&&(O.font=o=k);var sn=O.measureText(H);return r.size===X&&r.clear(),r.set(v,sn),sn}function Z(H,I,d,k,v,Y){var O=h(H,14,Y),sn=I/(O.width+2)*14,T=d/k,y=Math.min(T,sn);return Math.max(Math.min(y,v!=null?v:y),12)}},36480:function(t,n,e){"use strict";e.r(n),e.d(n,{TASK_CENTER_STATUS:function(){return Y}});var a=e(82092),r=e.n(a),X=e(90228),o=e.n(X),z=e(87999),h=e.n(z),Z=e(27183),H=e(75271),I=e(90520),d=e(56517),k=Z.JO.NotificationApi,v=Z.JO.REFRESH_FREQUENCY;window.obuiMockModel={backgroundTaskManagerAPIs:{}};var Y=function(sn){return sn.WAITING="WAITING",sn.PROCESSING="PROCESSING",sn.SUCCESS="SUCCESS",sn.FAILED="FAILED",sn}({}),O=function(){var T=(0,H.useRef)(),y=function(g){var R;(R=T.current)===null||R===void 0||R.setPreset(g)},tn=function(g){var R;(R=T.current)===null||R===void 0||R.setQueue(g)},b=function(g){var R;(R=T.current)===null||R===void 0||R.pushQueue(g)},U=function(g){var R;(R=T.current)===null||R===void 0||R.popQueue(g)},s=function(){var g,R=(g=T.current)===null||g===void 0?void 0:g.fetchPreset();return R},p=function(){var g,R=(g=T.current)===null||g===void 0?void 0:g.fetchQueue();return R},m=function(g){var R;return(R=T.current)===null||R===void 0?void 0:R.fetchQueueNsById(g)};return window.obuiMockModel.backgroundTaskManagerAPIs={setNotificationPreset:y,setNotificationQueue:tn,pushNotificationQueue:b,popNotificationQueue:U,fetchPreset:s,fetchQueue:p,fetchQueueNsById:m},(0,H.useEffect)(function(){var i=function(){var g=h()(o()().mark(function R(P){var M;return o()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return M=P.id,x.abrupt("return",(0,I.getTaskById)({id:M}));case 2:case"end":return x.stop()}},R)}));return function(P){return g.apply(this,arguments)}}();y({download_task:{api:i,successCb:function(R,P){var M=R||{},w=M.status,x=M.fileName,N=M.fileUrl;if([Y.SUCCESS,Y.FAILED].includes(w)){U(P);var C=r()(r()({},Y.SUCCESS,k.success),Y.FAILED,k.error),l=r()(r()({},Y.SUCCESS,"The file has been generated and can be downloaded"),Y.FAILED,"File generation failed");return{type:C[w],config:{key:P,top:78,duration:null,message:l[w],description:w===Y.SUCCESS?(0,d.tZ)(H.Fragment,null,(0,d.tZ)("div",null,x),(0,d.tZ)("a",{href:N,target:"_blank",rel:"noreferrer"},"Download")):null}}}return null}}})},[]),(0,d.tZ)(Z.ZP,{ref:T,rollingFrequency:v.EXTREMELY,prefix:"obui_backgroundtaskmanager_demo"})};n.default=O},90520:function(t,n,e){"use strict";e.r(n),e.d(n,{getTaskById:function(){return h}});var a=e(90228),r=e.n(a),X=e(87999),o=e.n(X),z=0;function h(I){return Z.apply(this,arguments)}function Z(){return Z=o()(r()().mark(function I(d){var k;return r()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return k=d.id,Y.next=3,H(1e3);case 3:return z=z===3?0:z+1,Y.abrupt("return",{id:k,gmtCreate:"2022-12-01T12:32:47.000+00:00",passportId:"200000000008",bizType:"BILL_DETAIL",fileName:"bill-detail-2022-12.xlsx",fileUrl:"",status:z===3?"SUCCESS":"CONNECTING",fileExpireTime:"2022-12-04T12:32:47.000+00:00"});case 5:case"end":return Y.stop()}},I)})),Z.apply(this,arguments)}function H(I){return new Promise(function(d){setTimeout(d,I)})}},27183:function(t,n,e){"use strict";e.d(n,{JO:function(){return O},ZP:function(){return T}});var a=e(26068),r=e.n(a),X=e(48305),o=e.n(X),z=e(75271),h=e(76359),Z={LOW:3*60*1e3,MEDIUM:1*60*1e3,HIGH:.5*60*1e3,EXTREMELY:3*1e3},H=e(61946),I=e(35996),d=e(52587),k=e(56517),v=(0,z.forwardRef)(function(y,tn){var b=y.run,U=y.timeout,s=U===void 0?null:U,p=y.refreshImmediate,m=p===void 0?!0:p,i=y.rollingFrequency,g=i===void 0?Z.LOW:i,R=y.children,P=y.spinning,M=P===void 0?!1:P,w=(0,z.useState)(null),x=o()(w,2),N=x[0],C=x[1],l=(0,z.useState)(!1),$=o()(l,2),nn=$[0],B=$[1];(0,z.useEffect)(function(){return function(){return B(!0)}},[]),(0,H.Z)(function(){b()},N,{immediate:m});var en=(0,z.useCallback)(function(){C(g)},[C,g]),on=(0,z.useCallback)(function(){C(null)},[C]);return(0,z.useImperativeHandle)(tn,function(){return{startLoop:en,stopLoop:on}}),(0,I.Z)(function(){on()},s),(0,z.useEffect)(function(){return s!==0&&en(),function(){on()}},[en,on,s]),(0,k.tZ)(d.Z,{spinning:M&&nn},(0,k.tZ)(z.Fragment,null,R))}),Y=function(y){return y.success="success",y.error="error",y.info="info",y.warning="warning",y.open="open",y}({}),O={REFRESH_FREQUENCY:Z,NotificationApi:Y},sn={position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},T=(0,z.forwardRef)(function(y,tn){var b=y.rollingFrequency,U=b===void 0?Z.EXTREMELY:b,s=y.prefix,p=y.taskStatusTemplate,m=p===void 0?"{count} background tasks in progress":p,i=(0,z.useState)({}),g=o()(i,2),R=g[0],P=g[1],M=(0,z.useState)({}),w=o()(M,2),x=w[0],N=w[1],C=(0,z.useCallback)(function(A){P(r()(r()({},R),A))},[R,P]),l=(0,z.useCallback)(function(A){delete R[A],P(r()({},R))},[R,P]),$=(0,z.useMemo)(function(){return Object.entries(R)},[R]),nn=(0,z.useCallback)(function(A){$.length&&($==null||$.forEach(function(rn){var D=o()(rn,2),W=D[0],j=D[1],L=A!=null?A:x;if(!L[j]){console.warn("cannot find preset of namespace: ",j);return}var _=L[j],F=_.api,u=_.successCb,S=_.failedCb;F==null||F({id:W}).then(function(K){var ln=u(K,W)||{type:null,config:null},q=ln.type,cn=ln.config;q&&h.t6[q](cn)}).catch(function(K){if(S){var ln=S(K,W)||{type:null,config:null},q=ln.type,cn=ln.config;q&&h.t6[q](cn)}})}))},[$,x]),B=(0,z.useCallback)(function(A){var rn=r()(r()({},x),A);Object.keys(rn).length!==Object.keys(x).length&&(N(rn),nn(rn))},[x,N,nn]),en=(0,z.useCallback)(function(){return x},[x]),on=(0,z.useCallback)(function(){return R},[R]),un=(0,z.useCallback)(function(A){return R[A]},[R]),c=(0,z.useCallback)(function(A){h.t6.destroy(A)},[]);(0,z.useImperativeHandle)(tn,function(){return{pushQueue:C,popQueue:l,setQueue:P,pushPreset:B,setPreset:N,fetchPreset:en,fetchQueue:on,fetchQueueNsById:un,closeNotification:c}});var f=(0,z.useCallback)(function(){var A=window.localStorage.getItem(s)||"[]",rn=JSON.parse(A);return rn},[]);(0,z.useEffect)(function(){var A=f();Object.keys(A).length&&P(A)},[P,f]),(0,z.useEffect)(function(){var A=function(){window.localStorage.setItem(s,JSON.stringify(R))};return window.addEventListener("beforeunload",A),function(){window.localStorage.setItem(s,JSON.stringify(R)),window.removeEventListener("beforeunload",A)}},[R,x]);var E=$.length>0?m.replace("{count}",String($.length)):"";return(0,k.tZ)(z.Fragment,null,(0,k.tZ)("div",{role:"status","aria-live":"polite","aria-atomic":"true",style:sn},E),!!$.length&&(0,k.tZ)(v,{run:nn,rollingFrequency:U}))})},90080:function(t,n,e){"use strict";e.r(n);var a=e(68585),r=e.n(a),X=e(67825),o=e.n(X),z=e(75271),h=e(83645),Z=e(56517),H=["type"],I=(0,h.Z)({scriptUrl:"//at.alicdn.com/t/a/font_3786261_ifhixq9j5c.js"}),d=function(v){var Y=v.type,O=o()(v,H);return(0,Z.tZ)(I,r()({type:Y},O))};n.default=d},70866:function(t,n,e){"use strict";e.d(n,{Z:function(){return Pn}});var a=e(68585),r=e.n(a),X=e(82092),o=e.n(X),z=e(15558),h=e.n(z),Z=e(48305),H=e.n(Z),I=e(67825),d=e.n(I),k=e(46953),v=e(3923),Y=e(30627),O=e(48136),sn=e(65487),T=e(76409),y=e(79775),tn=e(7650),b=e(89677),U=e(85755),s=e(54650),p=e(45689),m=e(82187),i=e.n(m),g=e(32699),R=e(63415),P=e(75271),M=e(46880),w=e(20785),x=e(96455),N=e(60044),C=e(89314),l=e(19227),$=e(26640),nn=e(66880),B=e(12493),en=e(58229),on=e(89522),un=e(67453),c=e(72588),f=e(11333),E=e.n(f),A=e(72030),rn=e(2826),D=e(72721),W=e(70344),j=e(90984),L=e(51722),_=function(G){var V=G.componentCls;return o()(o()({},"".concat(V),o()(o()(o()(o()(o()(o()({position:"fixed",zIndex:10,width:"100%",height:48,padding:"10px 24px",lineHeight:"48px",backgroundColor:G.colorBgLayout,boxShadow:"inset 0 -1px 0 0 ".concat(G.colorBorderSecondary)},"".concat(V,"-content"),{display:"flex",alignItems:"center",justifyContent:"space-between",maxWidth:G.maxWidth,height:"100%",margin:"0 auto"}),"".concat(V,"-logo"),{height:24,cursor:"pointer"}),"".concat(V,"-icon"),{width:52,height:48,lineHeight:"48px",textAlign:"center",borderRight:"1px solid ".concat(G.colorBorderSecondary),borderBottom:"1px solid ".concat(G.colorBorderSecondary),cursor:"pointer",img:{height:32,marginTop:8}}),"".concat(V,"-title"),{flex:1,margin:"0 16px"}),"".concat(V,"-extra"),o()({display:"flex",alignItems:"center",justifyContent:"space-between"},"".concat(V,"-extra-item"),o()(o()({display:"inline-flex",fontSize:12,cursor:"pointer","&:not(:last-child)":{marginRight:24}},"".concat(V,"-extra-icon-wrapper"),{width:28,height:28,lineHeight:"28px",textAlign:"center",border:"0.88px solid #ced4e1",borderRadius:14}),"".concat(V,"-extra-user-wrapper"),o()({height:28,padding:"0 10px",lineHeight:"28px",border:"0.88px solid #ced4e1",borderRadius:14},"".concat(V,"-extra-user-icon"),{marginRight:6})))),"".concat(V,"-extra-with-label"),o()({},"".concat(V,"-extra-item"),{"&:not(:last-child)":{marginRight:"24px !important"}}))),"".concat(V,"-about-wrapper"),o()(o()(o()(o()({},"".concat(V,"-about"),{marginTop:12}),"".concat(V,"-logo"),{height:72}),"".concat(V,"-release-info"),o()({marginTop:20,marginBottom:50},"".concat(V,"-date"),{fontSize:12,color:G.colorTextTertiary})),"".concat(V,"-copyright"),{fontSize:12,color:G.colorTextTertiary}))},F=function(hn){var G=(0,L.A)("Header",function(V){return[_(V)]});return G(hn)},u=e(56517),S=["prefixCls","showLabel","title","extra","pathname","welcomePath","versionNoticePath","docsPath","pdfPath","iconUrl","logoUrl","simpleLogoUrl","username","userMenu","appData","locale","showHelp","showLocale","locales","langs"],K=function(G){var V=G.prefixCls,On=G.showLabel,dn=On===void 0?!0:On,pn=G.title,Cn=G.extra,yn=G.pathname,Rn=G.welcomePath,fn=G.versionNoticePath,Tn=G.docsPath,Bn=G.pdfPath,Nn=G.iconUrl,qn=G.logoUrl,Qn=G.simpleLogoUrl,En=G.username,Yn=G.userMenu,Kn=G.appData,Hn=Kn===void 0?{}:Kn,$n=G.locale,Zn=$n===void 0?{}:$n,oe=G.showHelp,Re=oe===void 0?!0:oe,ue=G.showLocale,pe=ue===void 0?!1:ue,Ln=G.locales,Sn=G.langs,In=d()(G,S),Mn=(0,P.useContext)(U.default.ConfigContext),bn=Mn.theme,Dn=Mn.getPrefixCls,mn=Dn("pro-basic-layout-header","".concat(V,"-header")),Un=F(mn),ne=Un.wrapSSR,re=(0,x.Z)(),ae=(0,P.useState)(!1),Wn=H()(ae,2),ie=Wn[0],he=Wn[1],ye=yn===Rn,fe=(0,u.tZ)(b.Z,{onClick:function(be){var ke=be.key;if(ke==="welcome")re==null||re(Rn);else if(ke==="versionNotice")(0,w.Rh)(fn);else if(ke==="viewDocs")(0,w.Rh)(Tn);else if(ke==="downloadDocs"){var me,Ce=document.createElement("a");Ce.setAttribute("href",Bn),Ce.setAttribute("download",(Bn==null||(me=Bn.split("/"))===null||me===void 0?void 0:me.pop())||"Docs.pdf"),Ce.click(),Ce.remove()}else ke==="about"&&he(!0)}},Rn&&(0,u.tZ)(b.Z.Item,{key:"welcome"},Zn.welcome),fn&&(0,u.tZ)(b.Z.Item,{key:"versionNotice"},Zn.versionNotice),Tn&&(0,u.tZ)(b.Z.Item,{key:"viewDocs"},Zn.viewDocs),Bn&&(0,u.tZ)(b.Z.Item,{key:"downloadDocs"},Zn.downloadDocs),(0,u.tZ)(b.Z.Item,{key:"about"},"".concat(Zn.about).concat(Hn.shortName?" ".concat(Hn.shortName):"")));return ne((0,u.tZ)("div",r()({},In,{className:i()(mn,o()({},"".concat(mn,"-welcome"),ye))}),(0,u.tZ)("div",{className:"".concat(mn,"-content")},(0,u.tZ)("img",{src:Qn,alt:"",onClick:function(){re==null||re("/")},className:"".concat(mn,"-logo")}),pn&&(0,u.tZ)("div",{className:"".concat(mn,"-title")},pn),dn?(0,u.tZ)("div",{className:"".concat(mn,"-extra ").concat(mn,"-extra-with-label")},Cn,Re&&(0,u.tZ)(en.Z,{overlay:fe},(0,u.tZ)(on.Z,{className:"".concat(mn,"-extra-item")},(0,u.tZ)(N.Z,null),(0,u.tZ)("span",{"data-testid":"help"},Zn.help))),pe&&(0,u.tZ)(j.Z,{locales:Ln||Sn,className:"".concat(mn,"-extra-item")}),Yn?(0,u.tZ)(en.Z,{overlay:Yn},(0,u.tZ)(un.ZP,{shape:"round",size:"small"},(0,u.tZ)(on.Z,{className:"".concat(mn,"-extra-item")},(0,u.tZ)(C.Z,null),(0,u.tZ)("span",null,En)))):(0,u.tZ)(P.Fragment,null,En?(0,u.tZ)(un.ZP,{shape:"round",size:"small"},(0,u.tZ)(on.Z,{className:"".concat(mn,"-extra-item")},(0,u.tZ)(C.Z,null),(0,u.tZ)("span",null,En))):null)):(0,u.tZ)("div",{className:"".concat(mn,"-extra")},(0,u.tZ)("span",{className:"".concat(mn,"-extra-item")},(0,u.tZ)(en.Z,{overlay:fe},(0,u.tZ)("span",{className:"".concat(mn,"-extra-icon-wrapper")},(0,u.tZ)(l.Z,null)))),Tn&&(0,u.tZ)(p.Z,{title:Zn.viewDocs},(0,u.tZ)("span",{className:"".concat(mn,"-extra-item"),onClick:function(){(0,w.Rh)(Tn)}},(0,u.tZ)("span",{className:"".concat(mn,"-extra-icon-wrapper")},(0,u.tZ)($.Z,null)))),pe&&(0,u.tZ)(j.Z,{showLabel:!0,locales:Ln||Sn,className:"".concat(mn,"-extra-item")}),Yn?(0,u.tZ)("span",{className:"".concat(mn,"-extra-item")},(0,u.tZ)(en.Z,{overlay:Yn},(0,u.tZ)("span",{className:"".concat(mn,"-extra-user-wrapper")},(0,u.tZ)(nn.Z,{className:"".concat(mn,"-extra-user-icon")}),(0,u.tZ)("span",{className:"".concat(mn,"-extra-username")},En)))):(0,u.tZ)("span",{className:"".concat(mn,"-extra-item")},(0,u.tZ)("span",{className:"".concat(mn,"-extra-user-wrapper")},(0,u.tZ)(nn.Z,{className:"".concat(mn,"-extra-user-icon")}),(0,u.tZ)("span",null,En))))),(0,u.tZ)(c.Z,{visible:ie,open:ie,destroyOnClose:!0,footer:!1,onCancel:function(){he(!1)}},(0,u.tZ)("div",{className:"".concat(mn,"-about-wrapper")},(0,u.tZ)("div",{className:"".concat(mn,"-about")},(0,u.tZ)("img",{src:qn,alt:"",className:"".concat(mn,"-logo")}),(0,u.tZ)("div",{className:"".concat(mn,"-release-info")},(0,u.tZ)("div",{className:"".concat(mn,"-version")},Zn.version,": ",Hn.version),Hn.releaseTime&&(0,u.tZ)("div",{className:"".concat(mn,"-date")},"".concat(Zn.releaseTime,": ").concat(Hn.releaseTime))),(0,u.tZ)("div",null,(0,u.tZ)("div",null,(0,u.tZ)("a",{href:A.I,target:"_blank",rel:"noopener noreferrer"},A.I)),(0,u.tZ)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},(0,u.tZ)("span",{className:"".concat(mn,"-copyright")},Zn.right," ",(0,u.tZ)(B.Z,null)," ",E()().year()," ",Zn.company),(0,u.tZ)("img",{src:bn!=null&&bn.isDark?W.Z:D.Z,alt:"",style:{height:12}}))))))))},ln=(0,M.Z)({componentName:"BasicLayout",defaultLocale:rn.Z})(K),q=e(26068),cn=e.n(q),_n=function(G){var V=G.antCls,On=G.iconCls,dn=G.componentCls,pn=G.proComponentsCls,Cn=G.colorBgLayout,yn=G.colorText,Rn=G.colorBorder,fn=G.colorPrimaryBorder,Tn=G.colorPrimary,Bn=G.motionDurationSlow,Nn="8192px",qn=[0,52,52*2,192,208],Qn={};return qn.forEach(function(En){Qn["".concat(dn).concat(dn,"-sider-").concat(En)]=o()({},"".concat(pn,"-footer-bar"),{width:En===0?"100%":"calc(100% - ".concat(En,"px - 32px)"),transition:"width ".concat(Bn)})}),cn()(cn()(o()(o()({"@keyframes activeGradientAnimation":{"0%":{backgroundRepeat:"no-repeat",backgroundSize:"0% 100%"},"100%":{backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"}},"@keyframes selectedGradientAnimation":{"0%":{backgroundRepeat:"no-repeat",backgroundSize:"0% 100%",borderRadius:0},"100%":{backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",borderRadius:G.borderRadiusLG}}},"".concat(dn,"-banner-wrapper"),{position:"fixed",top:0,zIndex:20,width:"100%"}),"".concat(dn,"-with-banner"),{marginTop:"38px"}),Qn),{},o()(o()(o()({},"".concat(dn),o()(o()({height:"100%",backgroundColor:Cn,transition:"all 0.1s"},"".concat(pn,"-page-container"),{minHeight:"calc(100vh - 48px)"}),"".concat(dn,"-content-layout"),o()(o()(o()(o()(o()({maxWidth:Nn,margin:"0 auto"},"".concat(dn,"-sider"),o()(o()({position:"fixed",zIndex:10,padding:"16px 0 16px 16px",backgroundColor:Cn,transition:"all 0.3s"},"".concat(dn,"-sider-border"),o()(o()(o()({position:"relative",top:"-16px",width:1,height:"100%",backgroundColor:"#e2e8f3",cursor:"pointer",opacity:0},"&::after",{position:"absolute",top:0,right:"-10px",bottom:0,left:"-10px",content:'""'}),"&:hover",o()({opacity:1,transition:"opacity 0.3s"},"".concat(dn,"-sider-collapse"),{opacity:1,transition:"opacity 0.3s"})),"".concat(dn,"-sider-collapse"),o()({position:"relative",top:"245px",right:10,zIndex:1,width:"20px",height:"42px",lineHeight:"42px",textAlign:"center",backgroundColor:"#fff",border:"1px solid ".concat(Rn),borderRadius:"10px",cursor:"pointer",opacity:0,font:"inherit",padding:0,margin:0,appearance:"none",WebkitAppearance:"none"},On,{fontSize:"px",display:"block",lineHeight:"42px"}))),"".concat(dn,"-sider-wrapper"),o()(o()(o()(o()(o()(o()({display:"flex",height:"calc(100vh - 48px)"},"".concat(V,"-menu"),o()(o()({backgroundColor:"transparent",borderRight:"none"},"".concat(V,"-menu-submenu, ").concat(V,"-menu-item"),o()({width:"100%",marginTop:0,marginRight:"auto",marginLeft:"auto",color:yn,backgroundColor:"transparent"},"".concat(V,"-menu-title-content ").concat(On),{width:"18px",height:"18px",fontSize:"18px",marginBottom:10})),"".concat(V,"-menu-submenu > ").concat(V,"-menu-submenu-title"),{width:"100%",marginBottom:"4px !important",marginInline:0,marginBlock:0})),"".concat(V,"-menu-inline"),o()(o()(o()(o()(o()(o()(o()(o()(o()({},"".concat(V,"-menu-item, ").concat(V,"-menu-submenu"),{"&:not(:last-child)":{marginBottom:"16px",transition:"marginBottom 0.2s"}}),"".concat(V,"-menu-submenu-open"),{"&:not(:last-childantCls)":{marginBottom:4}}),"".concat(V,"-menu-submenu"),o()({},"".concat(V,"-menu-item:not(:last-child)"),{marginBottom:4})),"".concat(V,"-menu-item, ").concat(V,"-menu-submenu > ").concat(V,"-menu-submenu-title"),o()({paddingLeft:"16px !important"},"".concat(V,"-menu-title-content"),{width:"108px"})),"".concat(V,"-menu-sub"),o()({},"".concat(V,"-menu-item"),{marginLeft:"16px",paddingLeft:"28px !important"})),"".concat(V,"-menu-item-active, ").concat(V,"-menu-submenu-active > ").concat(V,"-menu-submenu-title"),{color:"".concat(yn," !important"),fontWeight:G.fontWeightStrong,animation:"activeGradientAnimation 0.1s",backgroundImage:"linear-gradient(to right,#E9EDF6, ".concat(Cn,"),linear-gradient(90deg,#C6CDD9,").concat(Cn,")"),backgroundClip:"padding-box,border-box",backgroundOrigin:"padding-box,border-box",border:".5px solid transparent",borderRadius:"8px 0 0 8px",transition:"border-width .3s"}),"".concat(V,"-menu-item-selected"),{color:"".concat(Tn," !important"),fontWeight:G.fontWeightStrong,animation:"selectedGradientAnimation 0.5s",backgroundImage:"linear-gradient(to right,#E5EEFF,#F4F8FF),linear-gradient(90deg,".concat(fn,",").concat(Cn,")"),backgroundClip:"padding-box,border-box",backgroundOrigin:"padding-box,border-box",border:".5px solid transparent",borderRadius:"8px 0 0 8px",transition:"border-width .3s","&::after":{display:"none"}}),"".concat(V,"-menu-submenu-selected > ").concat(V,"-menu-submenu-title"),{color:"".concat(Tn," !important")}),"".concat(V,"-divider"),{margin:"0 0 16px 0"})),"".concat(V,"-menu-vertical"),o()(o()(o()(o()({overflowX:"hidden",overflowY:"auto",borderRight:"none"},"".concat(V,"-menu-item, ").concat(V,"-menu-submenu"),{"&:not(:last-child)":{marginBottom:4}}),"".concat(V,"-menu-item, ").concat(V,"-menu-submenu > ").concat(V,"-menu-submenu-title"),o()(o()({width:"52px",height:"52px",padding:0,lineHeight:"52px",textAlign:"center"},"".concat(V,"-menu-title-content"),{display:"inline-block",width:"40px",height:"40px",lineHeight:"40px",borderRadius:"8px"}),"".concat(V,"-menu-submenu-arrow"),{display:"none"})),"".concat(V,"-menu-item-active, ").concat(V,"-menu-submenu-active > ").concat(V,"-menu-submenu-title"),o()({},"".concat(V,"-menu-title-content"),{backgroundColor:"#e9edf6",border:"0.5px solid #c6cdd9"})),"".concat(V,"-menu-item-selected, ").concat(V,"-menu-submenu-selected > ").concat(V,"-menu-submenu-title"),o()({},"".concat(V,"-menu-title-content"),{backgroundColor:"#e5eeff",border:"0.5px solid ".concat(fn)}))),"".concat(dn,"-sub-sider"),o()({borderRight:"1px solid #e2e8f3"},"".concat(V,"-divider"),{margin:"0 0 4px 0"})),"".concat(dn,"-sub-sider, ").concat(dn,"-menu-collapsed"),o()({width:"52px"},"".concat(V,"-divider"),{margin:"0 0 4px 0"})),"".concat(dn,"-sider-content"),o()(o()({display:"flex",flex:1,flexDirection:"column",justifyContent:"space-between",height:"100%"},"".concat(dn,"-sider-header"),{paddingTop:"16px"}),"".concat(dn,"-menu-wrapper"),o()({display:"flex",flexDirection:"column",flexGrow:1,justifyContent:"space-between",overflowX:"hidden",overflowY:"auto"},"".concat(dn,"-menu"),{backgroundColor:"transparent",borderRight:"none",marginBottom:"32px"}))))),"".concat(dn,"-sider-collapsed"),{paddingLeft:0}),"".concat(dn,"-sider-has-sub-sider"),o()(o()(o()(o()({padding:0},"".concat(dn,"-sider-border"),o()({display:"none"},"".concat(dn,"-sider-collapse"),{display:"none"})),"".concat(V,"-menu-inline"),o()(o()({paddingTop:"16px"},"".concat(V,"-menu-item, ").concat(V,"-menu-submenu"),{"&:not(:last-child)":{marginBottom:"16px !important"}}),"".concat(V,"-divider"),{width:"60%",minWidth:"60%",margin:"-8px 0 8px 16px !important"})),"".concat(V,"-menu-vertical"),{paddingTop:"10px"}),"".concat(dn,"-sider-content"),{paddingLeft:"6px"})),"".concat(dn,"-content"),{backgroundColor:Cn,transition:"all 0.3s"}),"".concat(dn,"-content-main"),{display:"block",minHeight:"100%"}))),"@media (min-width: ".concat(Nn,")"),o()(o()({},"".concat(dn),o()({},"".concat(dn,"-content-layout"),o()({},"".concat(dn,"-sider"),{paddingLeft:0}))),"".concat(pn,"-footer-bar"),{right:"calc((100% - ".concat(Nn,") / 2 + 24px)"),width:"calc(".concat(Nn," - 192px - 24px - 24px)"),maxWidth:"calc(".concat(Nn," - 192px - 24px - 24px)")})),"".concat(V,"-menu-submenu-popup"),o()({},"".concat(V,"-menu"),o()(o()(o()(o()(o()(o()({paddingLeft:"6px !important",backgroundColor:"".concat(Cn," !important")},"".concat(V,"-menu-item"),{width:"100%",backgroundColor:"transparent",border:"none",marginInline:0,"&:not(:last-child):":{marginBottom:"8px !important"}}),"".concat(V,"-menu-submenu"),{width:"100%",backgroundColor:"transparent",border:"none",marginInline:0,"&:not(:last-child):":{marginBottom:"8px !important"}}),"".concat(V,"-menu-item-active"),{color:"colorText !important",fontWeight:G.fontWeightStrong,animation:"activeGradientAnimation 0.1s",backgroundImage:"linear-gradient(to right, #E9EDF6, ".concat(Cn,"), linear-gradient(90deg, #C6CDD9, ").concat(Cn,")"),backgroundClip:"padding-box,border-box",backgroundOrigin:"padding-box,border-box",border:".5px solid transparent",borderRadius:"8px 0 0 8px",transition:"border-width .3s"}),"".concat(V,"-menu-submenu-active > & ").concat(V,"-menu-submenu-title"),{color:"colorText !important",fontWeight:G.fontWeightStrong,animation:"activeGradientAnimation 0.1s",backgroundImage:"linear-gradient(to right, #E9EDF6, ".concat(Cn,"), linear-gradient(90deg, #C6CDD9, ").concat(Cn,")"),backgroundClip:"padding-box,border-box",backgroundOrigin:"padding-box,border-box",border:".5px solid transparent",borderRadius:"8px 0 0 8px",transition:"border-width .3s"}),"".concat(V,"-menu-item-selected"),{color:"".concat(Tn," !important"),fontWeight:G.fontWeightStrong,animation:"selectedGradientAnimation 0.1s",backgroundImage:"linear-gradient(to right,#E5EEFF,#F4F8FF),linear-gradient(90deg,".concat(fn,",").concat(Cn,")"),backgroundClip:"padding-box,border-box",backgroundOrigin:"padding-box,border-box",border:".5px solid transparent",borderRadius:"8px 0 0 8px",transition:"border-width .3s"}),"".concat(V,"-divider"),{width:"'60%'",minWidth:"60%",margin:"0 0 8px 16px !important"}))))},vn=function(hn){var G=(0,L.A)("BasicLayout",function(V){return[_n(V)]});return G(hn)},gn=["children","location","banner","iconUrl","logoUrl","simpleLogoUrl","topHeader","menus","defaultCollapsed","defaultSelectedKeys","defaultOpenKeys","sideHeader","subSideMenuProps","subSideMenus","className","prefixCls","locale"],J=tn.Z.Content,Q=tn.Z.Sider,an=b.Z.SubMenu,An=b.Z.Item,kn=b.Z.ItemGroup,xn=function(G){var V=G.children,On=G.location,dn=On===void 0?{}:On,pn=dn.pathname,Cn=G.banner,yn=G.iconUrl,Rn=G.logoUrl,fn=G.simpleLogoUrl,Tn=G.topHeader,Bn=G.menus,Nn=Bn===void 0?[]:Bn,qn=G.defaultCollapsed,Qn=qn===void 0?!1:qn,En=G.defaultSelectedKeys,Yn=En===void 0?[]:En,Kn=G.defaultOpenKeys,Hn=Kn===void 0?[]:Kn,$n=G.sideHeader,Zn=G.subSideMenuProps,oe=G.subSideMenus,Re=G.className,ue=G.prefixCls,pe=G.locale,Ln=d()(G,gn),Sn=sn.ZP.useToken(),In=Sn.token,Mn=(0,P.useContext)(U.default.ConfigContext),bn=Mn.getPrefixCls,Dn=bn("pro-basic-layout",ue),mn=vn(Dn),Un=mn.wrapSSR,ne=(0,x.Z)(),re=(0,P.useState)(Qn),ae=H()(re,2),Wn=ae[0],ie=ae[1],he=(0,P.useState)(Yn),ye=H()(he,2),fe=ye[0],le=ye[1],be=(0,P.useState)(Hn),ke=H()(be,2),me=ke[0],Ce=ke[1];(0,P.useEffect)(function(){var de=(0,w.Wh)(pn).map(function(Gn){return ve(Ue(Nn),Gn).pop()})||[],ee=de.filter(function(Gn){return Gn});if(ee.length>0){var zn=ee[ee.length-1];le([zn]);var wn=ce(Nn,zn);Ce((0,g.uniq)([].concat(h()(me),h()(wn))))}else le([])},[pn]);var Oe={selectedKeys:fe,openKeys:me,onSelect:function(ee){var zn=ee.selectedKeys;le(zn)},onOpenChange:function(ee){Ce(ee)}},ve=function(ee,zn){return ee.filter(function(wn){return(0,R.Bo)(wn).test(zn)})},ce=function de(ee,zn){var wn=[];return(ee||[]).forEach(function(Gn){var Se=Gn.children||[];if(Gn.type==="group")wn=[].concat(h()(wn),h()(de(Se,zn)));else{var De=Se.map(function(_e){return _e.link}).filter(Boolean);De.includes(zn)?wn=[].concat(h()(wn),[Gn.link]):wn=[].concat(h()(wn),h()(de(Se,zn)))}}),wn},Ue=function de(ee){var zn=[];return(ee||[]).forEach(function(wn){wn.type==="group"?zn=zn.concat(de(wn.children||[])):(wn.children&&(zn=zn.concat(de(wn.children))),zn.push(wn.link||""))}),zn},Ze=function(ee){return!!ee&&fe[0]===ee},ge=function(ee){var zn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,wn=zn?Zn.selectedKeys||Zn.defaultSelectedKeys:fe;return(wn.includes(ee.link)||(0,g.some)(ee.children||[],function(Gn){return wn.includes(Gn.link)}))&&ee.selectedIcon||ee.icon},Fe=function de(ee){return ee.reduce(function(zn,wn,Gn){var Se,De,_e=wn.accessible,Ie=_e===void 0?!0:_e;if(wn.type==="group"&&(Se=wn.children)!==null&&Se!==void 0&&Se.length&&Ie){var Te;zn.push((0,u.tZ)(kn,{key:(Te=wn.title)!==null&&Te!==void 0?Te:"group-".concat(Gn),title:wn.title},de(wn.children)))}else wn.children&&((0,y.cT)(wn.accessible)?!((De=wn.children)===null||De===void 0)&&De.some(function(Be){var te=Be.accessible,Jn=te===void 0?!0:te;return Jn}):wn.accessible)?zn.push((0,u.tZ)(an,{"data-testid":"menu.sub",key:wn.link,title:(0,u.tZ)("div",null,ge(wn),(0,u.tZ)(T.Z.Text,{ellipsis:{tooltip:{placement:"right"}},style:{lineHeight:"40px",maxWidth:80}},wn.title))},de(wn.children))):!wn.children&&Ie&&wn.link&&zn.push((0,u.tZ)(An,{"data-testid":"menu.item",key:wn.link,"aria-current":Ze(wn.link)?"page":void 0,onClick:function(){pn!==wn.link&&(ne==null||ne(wn.link))}},(0,u.tZ)("div",null,ge(wn),(0,u.tZ)(T.Z.Text,{ellipsis:{tooltip:{placement:"right"}},style:{lineHeight:"40px",maxWidth:116}},wn.title))));return wn.divider&&Ie&&zn.push((0,u.tZ)(s.Z,{style:{borderImage:"linear-gradient(90deg, ".concat(In.colorTextQuaternary," 0%, ").concat((0,O.uK)(In.colorTextQuaternary,0)," 100%) 1")}})),zn},[])},Ke=function(ee){var zn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return ee.reduce(function(wn,Gn,Se){var De,_e,Ie=Gn.accessible,Te=Ie===void 0?!0:Ie;if(Gn.type==="group"&&(De=Gn.children)!==null&&De!==void 0&&De.length&&Te){var Be;wn.push((0,u.tZ)(kn,{key:(Be=Gn.title)!==null&&Be!==void 0?Be:"group-".concat(Se),title:Gn.title},Fe(Gn.children)))}else Gn.children&&((0,y.cT)(Gn.accessible)?!((_e=Gn.children)===null||_e===void 0)&&_e.some(function(te){var Jn=te.accessible,Xn=Jn===void 0?!0:Jn;return Xn}):Gn.accessible)?wn.push((0,u.tZ)(an,{key:Gn.link,title:ge(Gn,zn)},Fe(Gn.children))):!Gn.children&&Te&&Gn.link&&wn.push((0,u.tZ)(An,{"data-testid":"menu.item",key:Gn.link,"aria-current":Ze(Gn.link)?"page":void 0,onClick:function(){pn!==Gn.link&&(ne==null||ne(Gn.link))}},(0,u.tZ)(p.Z,{placement:"right",title:Gn.title,getPopupContainer:function(){return document.body}},(0,u.tZ)("div",null,ge(Gn,zn)))));return Gn.divider&&Te&&wn.push((0,u.tZ)(s.Z,null)),wn},[])},Ae=0;return oe&&Nn?Ae=Wn?52*2:208:oe&&!Nn?Ae=52:!oe&&Nn?Ae=Wn?52:192:!oe&&!Nn&&(Ae=0),Un((0,u.tZ)(P.Fragment,null,Cn&&(0,u.tZ)("div",{className:"".concat(Dn,"-banner-wrapper")},Cn),(0,u.tZ)(tn.Z,r()({className:i()(Dn,o()(o()({},"".concat(Dn,"-with-banner"),Cn),"".concat(Dn,"-sider-").concat(Ae),!0),Re)},Ln),(0,u.tZ)(P.Fragment,null,(0,u.tZ)(ln,r()({prefixCls:Dn,pathname:pn,iconUrl:yn,logoUrl:Rn,simpleLogoUrl:fn},Tn)),(0,u.tZ)("div",null,(0,u.tZ)(tn.Z,{className:"".concat(Dn,"-content-layout"),style:{marginTop:48}},(oe||Nn)&&(0,u.tZ)(Q,{theme:"light",width:Ae,className:i()("".concat(Dn,"-sider"),o()(o()({},"".concat(Dn,"-sider-collapsed"),Wn),"".concat(Dn,"-sider-has-sub-sider"),oe)),role:"navigation","aria-label":pe==null?void 0:pe.sideNavigation},(0,u.tZ)("div",{className:"".concat(Dn,"-sider-wrapper")},oe&&(0,u.tZ)("div",{className:"".concat(Dn,"-sub-sider")},(0,u.tZ)(b.Z,r()({},Zn,{mode:"vertical",className:"".concat(Dn,"-menu-vertical")}),Ke(oe,!0))),($n||Nn)&&(0,u.tZ)("div",{style:{display:"flex",width:"100%"}},(0,u.tZ)("div",{className:"".concat(Dn,"-sider-content")},$n&&(0,u.tZ)("div",{className:"".concat(Dn,"-sider-header")},$n),(0,u.tZ)("div",{className:"".concat(Dn,"-menu-wrapper")},Wn?(0,u.tZ)("div",{className:"".concat(Dn,"-menu-collapsed")},(0,u.tZ)(b.Z,r()({},Oe,{mode:"vertical",className:"".concat(Dn,"-menu-vertical")}),Ke(Nn,!1))):(0,u.tZ)(b.Z,r()({},Oe,{mode:"inline",expandIcon:function(ee){var zn=ee.isOpen;return(0,u.tZ)(k.Z,{rotate:zn?90:0,style:{fontSize:12}})},className:"".concat(Dn,"-menu")}),Fe(Nn)))),(0,u.tZ)("div",{className:"".concat(Dn,"-sider-border")},(0,u.tZ)("button",{type:"button",className:"".concat(Dn,"-sider-collapse"),"aria-expanded":!Wn,"aria-label":Wn?pe==null?void 0:pe.expandSider:pe==null?void 0:pe.collapseSider,onClick:function(){ie(!Wn),Ce([])}},(0,u.tZ)("span",{"aria-hidden":!0},Wn?(0,u.tZ)(v.Z,null):(0,u.tZ)(Y.Z,null))))))),(0,u.tZ)(J,{className:i()("".concat(Dn,"-content"),"".concat(Dn,"-content-").concat(Ae)),style:{marginLeft:Ae}},(0,u.tZ)("main",{className:"".concat(Dn,"-content-main")},V))))))))},Pn=(0,M.Z)({componentName:"BasicLayout",defaultLocale:rn.Z})(xn)},498:function(t,n,e){"use strict";e.d(n,{Z:function(){return p}});var a=e(82092),r=e.n(a),X=e(26068),o=e.n(X),z=e(48305),h=e.n(z),Z=e(49115),H=e(68825),I=e(85755),d=e(89522),k=e(82187),v=e.n(k),Y=e(32699),O=e(75271),sn=e(46880),T=e(51722),y=function(i){var g=i.componentCls,R=i.colorBgBase,P=i.boxShadowSecondary,M=i.fontWeightStrong;return r()({},"".concat(g),r()(r()(r()(r()({position:"fixed",zIndex:99999,display:"flex",flexDirection:"column",width:"100%",color:"rgba(0, 0, 0, 1)",backgroundColor:R,boxShadow:P},"".concat(g,"-header"),r()(r()(r()({display:"flex",alignItems:"center",justifyContent:"space-between",height:64,margin:"0 24px"},"".concat(g,"-title"),{fontWeight:M}),"".concat(g,"-cancel, ").concat(g,"-display-btn"),{color:i.colorPrimary,cursor:"pointer",border:"none",background:"transparent",padding:0,font:"inherit",textAlign:"inherit"}),"".concat(g,"-display-text"),{marginRight:4})),"".concat(g,"-content"),{maxHeight:328,padding:"0 24px 24px",overflow:"auto"}),"".concat(g,"-content-active"),{maxHeight:328,transition:"max-height 0.25s"}),"".concat(g,"-content-hidden"),{maxHeight:0,padding:0,transition:"max-height 0.25s"}))},tn=function(m){var i=(0,T.A)("BatchOperationBar",function(g){return[y(g)]});return i(m)},b=e(56610),U=e(56517),s=function(i){var g,R,P=(0,O.useContext)(I.default.ConfigContext),M=P.getPrefixCls,w=M("batch-operation-bar"),x=tn(w),N=x.wrapSSR,C=i==null?void 0:i.locale,l=i.title,$=i.open,nn=$===void 0?!1:$,B=i.width,en=i.alertOptionRender,on=i.selectedRows,un=on===void 0?[]:on,c=i.content,f=i.alertRender,E=i.className,A=E===void 0?"":E,rn=i.cancelText,D=rn===void 0?C==null?void 0:C.cancelText:rn,W=i.openText,j=W===void 0?C==null?void 0:C.openText:W,L=i.openIcon,_=L===void 0?(0,U.tZ)(Z.Z,null):L,F=i.hiddenText,u=F===void 0?C==null?void 0:C.hiddenText:F,S=i.hiddenIcon,K=S===void 0?(0,U.tZ)(H.Z,null):S,ln=i.showCancelBtn,q=ln===void 0?!0:ln,cn=i.showOpenBtn,_n=cn===void 0?!0:cn,vn=i.position,gn=vn===void 0?["bottom","right"]:vn,J=i.barStyle,Q=J===void 0?{}:J,an=(0,O.useState)(un),An=h()(an,2),kn=An[0],xn=An[1],Pn=(0,O.useState)(!!nn),hn=h()(Pn,2),G=hn[0],V=hn[1],On=(0,O.useMemo)(function(){var yn={};if((B||B===0)&&(yn.width=B),!(0,Y.isEmpty)(gn)){if(!Array.isArray(gn))throw new Error("The type passed in by position should be [Vertical, Horizontal]");yn[gn==null?void 0:gn[0]]=0,yn[gn==null?void 0:gn[1]]=0}return o()(o()({},yn),Q)},[B,gn]),dn=function(Rn){if((0,Y.isEmpty)(Rn)){xn([]);return}var fn=(0,Y.cloneDeep)(kn);(0,Y.pullAllWith)(fn,Rn,Y.isEqual),xn(fn)},pn=function(Rn){xn(Rn)},Cn=function(){return _n?(0,U.tZ)("button",{type:"button",className:v()(r()(r()(r()({},"".concat(w,"-open-btn"),G),"".concat(w,"-close-btn"),!G),"".concat(w,"-display-btn"),!0)),"aria-expanded":G,"aria-label":String(G?u:j),onClick:function(){return V(!G)}},(0,U.tZ)("span",{className:v()(r()({},"".concat(w,"-display-text"),!0))},G?u:j),(0,U.tZ)("span",{"aria-hidden":!0},G?K:_)):null};return(0,O.useEffect)(function(){(0,Y.isEmpty)(un)||!un?xn([]):xn(un)},[un]),N((0,U.tZ)("div",{className:v()(r()(r()({},A,!!A),w,!0)),style:On,role:"toolbar","aria-label":typeof(C==null?void 0:C.toolbarLabel)=="string"?C.toolbarLabel:void 0},(0,U.tZ)("div",{className:"".concat(w,"-header")},(0,U.tZ)(d.Z,null,f?f==null?void 0:f(kn):(0,U.tZ)(d.Z,null,l&&(0,U.tZ)("span",{className:"".concat(w,"-title")},l),(0,U.tZ)("span",{"aria-live":"polite","aria-atomic":"true"},C==null||(g=C.alertText)===null||g===void 0||(R=g.replace)===null||R===void 0?void 0:R.call(g,/\$\{\}/,String((kn==null?void 0:kn.length)||0)))),!!q&&(0,U.tZ)("button",{type:"button",className:v()(r()({},"".concat(w,"-cancel"),!0)),onClick:function(){return dn()}},D),Cn()),!!en&&(0,U.tZ)("div",null,en==null?void 0:en({selectedRows:kn,setSelectedRows:pn,cleanSelectedRows:dn}))),(0,U.tZ)("div",{className:v()(r()(r()(r()({},"".concat(w,"-content"),!0),"".concat(w,"-content-active"),!!G),"".concat(w,"-content-hidden"),!G))},typeof c=="function"?c==null?void 0:c({selectedRows:kn,setSelectedRows:pn,cleanSelectedRows:dn}):c)))},p=(0,sn.Z)({componentName:"BatchOperationBar",defaultLocale:b.Z})(s)},10539:function(t,n,e){"use strict";e.d(n,{Z:function(){return i}});var a=e(68585),r=e.n(a),X=e(82092),o=e.n(X),z=e(67825),h=e.n(z),Z=e(75271),H=e(77669),I=e(46241),d=e(23320),k=e(56182),v=e(97489),Y=e(1572),O=e(50728),sn=e(19466),T=e(82187),y=e.n(T),tn=e(51722),b=function(R){var P=R.componentCls;return o()({},"".concat(P,"-item"),o()(o()(o()(o()({display:"inline-flex",alignItems:"center"},"".concat(P,"-prefix"),{marginRight:8}),"".concat(P,"-suffix"),{marginLeft:8}),"".concat(P,"-help"),{cursor:"help"}),"".concat(P,"-color"),{color:"red"}))},U=function(g){var R=(0,tn.A)("ContentWithIcon",function(P){return[b(P)]});return R(g)},s=e(56517),p=["content","tooltip","prefixIcon","suffixIcon","className","children","iconType","color","tooltipWithLink","popOver","textHidden","size","infoColor","exclamationColor"],m=function(R){var P=R.content,M=R.tooltip,w=R.prefixIcon,x=w===void 0?null:w,N=R.suffixIcon,C=R.className,l=R.children,$=R.iconType,nn=R.color,B=R.tooltipWithLink,en=B===void 0?!1:B,on=R.popOver,un=R.textHidden,c=un===void 0?!0:un,f=R.size,E=f===void 0?14:f,A=R.infoColor,rn=R.exclamationColor,D=rn===void 0?"#FAAD14":rn,W=h()(R,p),j=(0,Z.useContext)(H.ZP.ConfigContext),L=j.getPrefixCls,_=L("content-with-icon"),F=U(_),u=F.wrapSSR,S=function(){if($==="question")return(0,s.tZ)(v.Z,{style:{color:nn==="default"?"#132039":nn,fontSize:E},className:"".concat(_,"-help")});if($==="info")return A?(0,s.tZ)(Y.Z,{style:{color:A,fontSize:E},className:"".concat(_,"-help")}):(0,s.tZ)(O.Z,{style:{color:"3333333",fontSize:E},className:"".concat(_,"-help")});if($==="exclamation")return(0,s.tZ)(sn.Z,{style:{color:D,fontSize:E},className:"".concat(_,"-help")})};N=N!==null&&$?S():N;var K=function(q){return q?!c&&$==="info"?(0,s.tZ)(I.Z,{size:4},q,(0,s.tZ)("span",{style:{color:"#5C6B8A"}},"\u6587\u672C\u793A\u610F\u4E0D\u8D85\u8FC7\u4E8C\u5341\u5B57\u6587\u672C\u793A\u610F\u4E0D\u8D85\u8FC7\u4E8C\u5341\u5B57")):en?(0,s.tZ)(d.Z,on,(0,Z.isValidElement)(q)?q:S()):(0,s.tZ)(k.Z,M,(0,Z.isValidElement)(q)?q:S()):null};return u((0,s.tZ)("span",r()({className:y()(o()(o()({},"".concat(_,"-item"),!0),C,!!C))},W),(0,s.tZ)(I.Z,{size:4},K(x===!0?S():x),(0,s.tZ)("span",{"data-testid":"content",style:{color:nn==="default"?"#5C6B8A":nn,fontSize:E}},P!=null?P:l),K(N))))},i=m},96262:function(t,n,e){"use strict";e.d(n,{Z:function(){return U}});var a=e(68585),r=e.n(a),X=e(67825),o=e.n(X),z=e(97489),h=e(85755),Z=e(45689),H=e(89522),I=e(82187),d=e.n(I),k=e(75271),v=e(82092),Y=e.n(v),O=e(51722),sn=function(p){var m=p.componentCls;return Y()({},"".concat(m,"-item"),Y()(Y()(Y()({display:"inline-flex",alignItems:"center"},"".concat(m,"-prefix"),{marginRight:p.marginXS}),"".concat(m,"-suffix"),{marginLeft:p.marginXS}),"".concat(m,"-help"),{cursor:"help",color:p.colorIcon}))},T=function(s){var p=(0,O.A)("ContentWithQuestion",function(m){return[sn(m)]});return p(s)},y=e(56517),tn=["content","tooltip","prefixIcon","suffixIcon","prefixCls","className","children"],b=function(p){var m=p.content,i=p.tooltip,g=p.prefixIcon,R=g===void 0?null:g,P=p.suffixIcon,M=P===void 0?!0:P,w=p.prefixCls,x=p.className,N=p.children,C=o()(p,tn),l=(0,k.useContext)(h.default.ConfigContext),$=l.getPrefixCls,nn=$("content-with-question",w),B=T(nn),en=B.wrapSSR,on=function(c){return c?(0,y.tZ)(Z.Z,i,(0,k.isValidElement)(c)?c:(0,y.tZ)(z.Z,{className:"".concat(nn,"-help")})):null};return en((0,y.tZ)("span",r()({className:d()("".concat(nn,"-item"),x)},C),(0,y.tZ)(H.Z,null,on(R),(0,y.tZ)("span",{"data-testid":"content"},m!=null?m:N),on(M))))},U=b},47471:function(t,n,e){"use strict";e.d(n,{Z:function(){return rn}});var a=e(68585),r=e.n(a),X=e(26068),o=e.n(X),z=e(48305),h=e.n(z),Z=e(15409),H=e(97760),I=e(55446),d=e(87887),k=e(67619),v=e(75271),Y=e(85755),O=e(30967),sn=e(46880),T=e(67825),y=e.n(T),tn=e(15558),b=e.n(tn),U=e(32699),s=e(56517),p=function(W){var j=(0,v.useMemo)(function(){return Object.entries(W).reduce(function(F,u){var S=h()(u,2),K=S[0],ln=S[1],q=K;return!(0,U.isFunction)(ln)||!K.startsWith("on")?F:(K==="onDoubleClick"&&(q="onDblClick"),[].concat(b()(F),[[q.slice(2).toLowerCase(),ln]]))},[])},[W]),L=(0,v.useCallback)(function(){j.forEach(function(F){var u=h()(F,2),S=u[0],K=u[1];document.addEventListener(S,K)})},[j]),_=(0,v.useCallback)(function(){j.forEach(function(F){var u=h()(F,2),S=u[0],K=u[1];document.removeEventListener(S,K)})},[j]);return(0,v.useEffect)(function(){return L(),function(){_()}},[L,_]),(0,s.tZ)("div",{id:"event-proxy"})},m=["children","style","dock","prefixCls","onStart","onMove","onEnd"],i=function(W){var j=W.children,L=W.style,_=W.dock,F=W.prefixCls,u=W.onStart,S=W.onMove,K=W.onEnd,ln=y()(W,m),q=(0,v.useRef)(!1),cn=(0,v.useRef)(null),_n=(0,v.useRef)(0),vn=(0,v.useRef)(0),gn=(0,v.useCallback)(function(an){var An;q.current=!0,_n.current=an.clientX,vn.current=an.clientY,u&&u(an);var kn=_==null||(An=_.style)===null||An===void 0?void 0:An.cursor;if(kn){cn.current=document.body.getAttribute("style")||"";var xn="cursor:".concat(kn," !important; ").concat(cn.current);document.body.setAttribute("style",xn)}},[u,_]),J=(0,v.useCallback)(function(an){if(q.current){if(_!=null&&_.adjust){var An=an.clientX,kn=an.clientY,xn=An-_n.current,Pn=kn-vn.current;an.moveTop=Pn*(_.adjust[0]||0),an.moveBottom=Pn*(_.adjust[1]||0),an.moveLeft=xn*(_.adjust[2]||0),an.moveRight=xn*(_.adjust[3]||0)}S&&S(an)}},[S,_]),Q=(0,v.useCallback)(function(an){q.current&&(q.current=!1,K&&K(an),cn.current!==null&&document.body.setAttribute("style",cn.current),cn.current=null)},[K]);return(0,s.tZ)("div",r()({className:"".concat(F,"-anchor"),style:o()(o()({},L),_==null?void 0:_.style),onPointerDown:gn},ln),(0,s.tZ)(p,{onPointerMove:J,onPointerUp:Q}),j)},g=function(D){return{top:{adjust:[1,-1,0,0],style:{top:-D/2,height:D,left:0,right:0,cursor:"ns-resize"}},bottom:{adjust:[0,1,0,0],style:{bottom:-D/2,height:D,left:0,right:0,cursor:"ns-resize"}},left:{adjust:[0,0,1,-1],style:{left:-D/2,width:D,top:0,bottom:0,cursor:"ew-resize"}},right:{adjust:[0,0,0,1],style:{right:-D/2,width:D,top:0,bottom:0,cursor:"ew-resize"}},topLeft:{adjust:[1,-1,1,-1],style:{top:-D/2,left:-D/2,width:D,height:D,cursor:"nwse-resize"}},topRight:{adjust:[1,-1,0,1],style:{top:-D/2,right:-D/2,width:D,height:D,cursor:"nesw-resize"}},bottomLeft:{adjust:[0,1,1,-1],style:{bottom:-D/2,left:-D/2,width:D,height:D,cursor:"nesw-resize"}},bottomRight:{adjust:[0,1,0,1],style:{bottom:-D/2,right:-D/2,width:D,height:D,cursor:"nwse-resize"}}}}(8),R=e(60585),P=e(82092),M=e.n(P),w=e(51722),x=function(W){var j=W.componentCls,L=W.boxShadowSecondary,_=52,F=40,u=1,S="#dde4ed",K="#38465c";return M()(M()({},"".concat(j,"-container-embed"),{border:"1px solid ".concat(S," !important"),borderRadius:"".concat(u,"px !important"),boxShadow:"none !important"}),"".concat(j,"-container"),M()(M()(M()(M()({position:"fixed",zIndex:999,boxSizing:"content-box",color:"#eee",backgroundColor:"rgba(65, 74, 77, 1)",borderRadius:W.borderRadiusLG,boxShadow:L,transition:"visibility 0.2s ease-in-out, opacity 0.2s linear"},"".concat(j,"-header"),M()(M()(M()({display:"flex",alignItems:"center",justifyContent:"space-between",height:_,padding:"0 25px",lineHeight:_,backgroundColor:"#fff",borderRadius:u,cursor:"grab",userSelect:"none"},"".concat(j,"-title"),{display:"inline-block",width:"60%",overflow:"hidden",color:K,whiteSpace:"nowrap",textOverflow:"ellipsis",wordBreak:"keep-all"}),"&:active",{cursor:"grabbing"}),"".concat(j,"-controls"),M()({display:"flex",alignItems:"center",height:"100%",textAlign:"center"},"".concat(j,"-item"),M()(M()({display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:24,minHeight:24,width:24,marginLeft:16,color:K,fontSize:15,lineHeight:1,textAlign:"center",cursor:"pointer",transitionDuration:"0.3s",border:"none",background:"transparent",padding:0,font:"inherit",verticalAlign:"middle"},"".concat(j,"-item-link"),{paddingTop:2,color:K}),"".concat(j,"-item-link-text"),{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0})))),"".concat(j,"-main"),M()(M()({position:"relative",height:"calc(100% - ".concat(_,"px)"),padding:"0 8px 8px 8px",overflow:"hidden",backgroundColor:"#fff",borderTop:"1px solid ".concat(S)},"".concat(j,"-mask"),{position:"absolute",top:0,left:0,zIndex:9,width:"100%",height:"100%"}),"iframe",{width:"100%",height:"100%",border:"none"})),"".concat(j,"-anchor"),{position:"absolute",zIndex:9,userSelect:"none"}),"&:focus",{outline:"transparent"}))},N=function(D){var W=(0,w.A)("Dialog",function(j){return[x(j)]});return W(D)},C=.1,l=.1,$=36,nn=320,B=[320,256],en=520,on=600,un=24,c=1,f=null,E=function(){return f||(f=document.createElement("div"),document.body.appendChild(f)),f},A=function(W){var j=W.className,L=W.visible,_=W.children,F=W.min,u=F===void 0?B:F,S=W.max,K=W.width,ln=W.height,q=W.left,cn=W.top,_n=W.title,vn=W.onClose,gn=W.clientWidth,J=W.clientHeight,Q=W.resizable,an=Q===void 0?!0:Q,An=W.draggable,kn=An===void 0?!0:An,xn=W.enableMaximization,Pn=xn===void 0?!0:xn,hn=W.locale,G=W.extLink,V=W.setRootWidth,On=W.isEmbed,dn=On===void 0?!1:On,pn=v.useId(),Cn=(0,v.useRef)(null),yn=(0,v.useContext)(Y.default.ConfigContext),Rn=yn.getPrefixCls,fn=Rn("dialog"),Tn=N(fn),Bn=Tn.wrapSSR,Nn=(0,v.useRef)(null),qn=(0,v.useRef)(0),Qn=(0,v.useRef)(0),En=(0,v.useRef)(!1),Yn=(0,v.useRef)({}),Kn=(0,v.useState)(!0),Hn=h()(Kn,2),$n=Hn[0],Zn=Hn[1],oe=(0,v.useState)(K!=null?K:en),Re=h()(oe,2),ue=Re[0],pe=Re[1],Ln=(0,v.useState)(ln!=null?ln:on),Sn=h()(Ln,2),In=Sn[0],Mn=Sn[1],bn=(0,v.useState)(q!=null?q:gn-(K!=null?K:en)-un),Dn=h()(bn,2),mn=Dn[0],Un=Dn[1],ne=(0,v.useState)(cn!=null?cn:J-(ln!=null?ln:on)-un),re=h()(ne,2),ae=re[0],Wn=re[1],ie=(0,v.useState)(0),he=h()(ie,2),ye=he[0],fe=he[1],le=(0,v.useState)(0),be=h()(le,2),ke=be[0],me=be[1],Ce=(0,v.useState)(dn),Oe=h()(Ce,2),ve=Oe[0],ce=Oe[1],Ue=(0,v.useState)(!1),Ze=h()(Ue,2),ge=Ze[0],Fe=Ze[1],Ke=(0,v.useState)({}),Ae=h()(Ke,2),de=Ae[0],ee=Ae[1],zn=(0,v.useMemo)(function(){return S||[gn,J]},[S,gn,J]),wn=(0,v.useMemo)(function(){return u},[u]),Gn=(0,v.useCallback)(function(){return{width:K!=null?K:en,height:ln!=null?ln:on,left:q!=null?q:gn-(K!=null?K:en)-un,top:cn!=null?cn:J-(ln!=null?ln:on)-un}},[K,ln,q,cn,gn,J]),Se=(0,v.useCallback)(function(jn){var Fn=jn?jn+c:0,xe=(gn-Fn)/gn;V==null||V("".concat(xe*100,"%"))},[gn,V]),De=(0,v.useCallback)(function(jn){return o()({left:C,top:l,width:en/gn,height:on/J,minimize:!1,maximization:!1},jn)},[gn,J]),_e=function(Fn,xe){var Vn={},we={widthShouldChange:!0,heightShouldChange:!0};return wn&&Fn<wn[0]&&(Vn.width=wn[0],we.widthShouldChange=!1),wn&&xe<wn[1]&&(Vn.height=wn[1],we.heightShouldChange=!1),zn&&Fn>zn[0]&&(Vn.width=zn[0],we.widthShouldChange=!1),zn&&xe>zn[1]&&(Vn.height=zn[1],we.heightShouldChange=!1),we};(0,v.useEffect)(function(){var jn=document.createElement("div");return Nn.current=jn,E().appendChild(jn),function(){Nn.current&&E().contains(Nn.current)&&E().removeChild(Nn.current)}},[]),(0,v.useEffect)(function(){if(!L){Se(0);return}var jn=Gn();pe(jn.width),Mn(jn.height),Un(jn.left),Wn(jn.top),Se(jn.width)},[L,gn,J,Gn,Se]),(0,v.useEffect)(function(){if(L){var jn=requestAnimationFrame(function(){if(!ge){var Fn;(Fn=Cn.current)===null||Fn===void 0||Fn.focus({preventScroll:!0})}});return function(){return cancelAnimationFrame(jn)}}},[L,ge]),(0,v.useEffect)(function(){if(L){var jn=function(xe){if(xe.key==="Escape"){var Vn=Cn.current,we=xe.target;Vn&&we&&!Vn.contains(we)||vn==null||vn()}};return document.addEventListener("keydown",jn),function(){return document.removeEventListener("keydown",jn)}}},[L,vn]),(0,v.useEffect)(function(){dn?(Fe(!1),ce(!0)):(Fe(!1),ce(!1),ln&&Mn(ln),K&&pe(K),cn!==void 0&&Wn(cn),q!==void 0&&Un(q))},[dn,ln,K,cn,q]);var Ie=function(Fn){kn&&(ve||(Zn(!0),mn===void 0&&Un(C),ae===void 0&&Wn(l),qn.current=Fn.clientX,Qn.current=Fn.clientY,En.current=!0))},Te=function(Fn){!kn||!En.current||(Fn.preventDefault(),fe(Fn.clientX-qn.current),me(Fn.clientY-Qn.current))},Be=function(){kn&&(En.current=!1,!(ye===0&&ke===0)&&(Zn(!1),Un(function(Fn){return(Fn!=null?Fn:0)+ye}),Wn(function(Fn){return(Fn!=null?Fn:0)+ke}),fe(0),me(0)))},te=function(){Zn(!1)},Jn=function(){ge||!an||(Yn.current=De({width:ue,height:In,left:mn,top:ae,minimize:ge,maximization:ve}),Zn(!0))},Xn=function(Fn){if(Fn.preventDefault(),!(ge||!an)){var xe=Yn.current.width+Fn.moveRight,Vn=Yn.current.height+Fn.moveBottom,we=_e(xe,Vn);we.widthShouldChange&&Se(xe),we.widthShouldChange&&(Un(Yn.current.left+Fn.moveLeft),pe(xe)),we.heightShouldChange&&(Wn(Yn.current.top+Fn.moveTop),Mn(Vn))}},se=function(){!$n||!an||Zn(!1)},Ne=function(){ce(!1),Fe(function(Fn){return!Fn})},Pe=function(){var Fn=an&&Pn&&!dn;Fn&&(ce(function(xe){return!xe}),Fe(!1))},Ee=function(Fn){Fn.stopPropagation(),vn==null||vn()},je=(0,v.useCallback)(function(){return{visibility:L?"visible":"hidden",opacity:L?1:0}},[L]),Le=(0,v.useCallback)(function(jn){var Fn=De(jn),xe=Fn.minimize,Vn={};return["left","width","top","height"].forEach(function(we){Vn[we]=Fn[we]}),zn&&Vn.width>zn[0]&&(Vn.width=zn[0]),zn&&Vn.height>zn[1]&&(Vn.height=zn[1]),wn&&Vn.width<wn[0]&&(Vn.width=wn[0]),wn&&Vn.height<wn[1]&&(Vn.height=wn[1]),Vn.width=xe?nn:Vn.width,Vn.height=xe?$:Vn.height,Vn.left+Vn.width>gn&&(Vn.left=gn-Vn.width),Vn.left<0&&(Vn.left=0),Vn.top<0&&(Vn.top=0),Vn.top+Vn.height>J&&(Vn.top=J-Vn.height),Vn},[zn,wn,gn,J,De]);(0,v.useEffect)(function(){if(L){var jn=Le({width:ue,height:In,left:mn,top:ae,minimize:ge});jn.left!==mn&&Un(jn.left),jn.top!==ae&&Wn(jn.top)}},[ue,In,mn,ae,ge,L,Le]);var ze=(0,v.useMemo)(function(){var jn="translate(".concat(ye,"px, ").concat(ke,"px)"),Fn=je();if(ve&&!dn)return o()(o()({},Fn),{},{top:0,bottom:0,right:0,width:K||en,height:"auto",borderRadius:0});if(ge){var xe=de,Vn=xe.height,we=Le({width:ue,height:In,left:mn,top:ae,minimize:ge});return o()(o()(o()({},Fn),we),{},{width:nn,height:Vn||$,transform:jn})}else{var Je=Le({width:ue,height:In,left:mn,top:ae});return o()(o()(o()({},Fn),Je),{},{transform:jn})}},[ve,dn,ge,ye,ke,K,de,ue,In,mn,ae,Le,je]),$e=function(){if(!(G!=null&&G.link))return null;var Fn=G.text||(hn==null?void 0:hn.openHelpCenter);return(0,s.tZ)("span",{className:"".concat(fn,"-item")},(0,s.tZ)("a",{className:"".concat(fn,"-item-link"),href:G.link,target:"_blank",rel:"noopener noreferrer"},(0,s.tZ)("span",{className:"".concat(fn,"-item-link-text")},Fn),(0,s.tZ)("svg",{className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16","aria-hidden":!0},(0,s.tZ)("path",{d:"M880.0256 912.0256H144.0256a31.9488 31.9488 0 0 1-32.0512-32V144.0256c0-17.7152 14.336-32.0512 32.0512-32.0512h359.936c4.4544 0 8.0384 3.584 8.0384 8.0384v56.0128c0 4.352-3.584 7.9872-7.9872 7.9872h-320v655.9744h655.9744v-320c0-4.4032 3.584-7.9872 8.0384-7.9872h55.9616c4.4032 0 8.0384 3.584 8.0384 7.9872v359.9872c0 17.7152-14.336 32-32 32zM770.8672 199.1168l-52.224-52.224a8.0384 8.0384 0 0 1 4.7104-13.568l179.4048-20.992c5.12-0.6144 9.5232 3.6864 8.9088 8.9088l-20.992 179.4048a8.0384 8.0384 0 0 1-13.6192 4.6592L824.6784 252.928l-256.2048 256.2048c-3.072 3.072-8.192 3.072-11.264 0l-42.4448-42.3936a8.0384 8.0384 0 0 1 0-11.264l256.1024-256.3584z"}))))},Ge=function(){return dn?(0,s.tZ)("span",{className:"".concat(fn,"-controls")},$e(),(0,s.tZ)("button",{type:"button",className:"".concat(fn,"-item"),"aria-label":hn==null?void 0:hn.closeDialog,onClick:Ee},(0,s.tZ)("span",{"aria-hidden":!0},(0,s.tZ)(Z.Z,null)))):(0,s.tZ)("span",{className:"".concat(fn,"-controls")},$e(),(0,s.tZ)("button",{type:"button",className:"".concat(fn,"-item"),"aria-label":ge?hn==null?void 0:hn.restoreWindow:hn==null?void 0:hn.minimize,onClick:Ne},(0,s.tZ)("span",{"aria-hidden":!0},ge?(0,s.tZ)(H.Z,null):(0,s.tZ)(I.Z,null))),Pn&&(0,s.tZ)("button",{type:"button",className:"".concat(fn,"-item"),"aria-label":ve?hn==null?void 0:hn.exitFullscreen:hn==null?void 0:hn.maximize,onClick:Pe},(0,s.tZ)("span",{"aria-hidden":!0},ve?(0,s.tZ)(d.Z,null):(0,s.tZ)(k.Z,null))),(0,s.tZ)("button",{type:"button",className:"".concat(fn,"-item"),"aria-label":hn==null?void 0:hn.closeDialog,onClick:Ee},(0,s.tZ)("span",{"aria-hidden":!0},(0,s.tZ)(Z.Z,null))))},Ve=function(){var Fn=o()(o()(o()({},de),ge?{boxShadow:"0 2px 20px 0 rgba(4, 1, 30, 0.07)"}:{}),dn?{cursor:"initial"}:{});return(0,s.tZ)("header",{className:"".concat(fn,"-header"),style:Fn,onPointerDown:Ie,onDoubleClick:Pe},(0,s.tZ)("span",{className:"".concat(fn,"-title"),id:pn},_n||(hn==null?void 0:hn.helpDocument)),Ge())},Qe=function(){return $n?(0,s.tZ)("div",{className:"".concat(fn,"-mask")}):null},We=function(){return(0,s.tZ)("main",{className:"".concat(fn,"-main"),style:ge?{visibility:"hidden"}:{}},Qe(),_)},He=function(){return(0,s.tZ)(v.Fragment,null,(0,s.tZ)(i,{prefixCls:fn,dock:g.left,onStart:Jn,onMove:Xn,onEnd:se}))},Ye=function(){return(0,s.tZ)(v.Fragment,null,(0,s.tZ)(i,{prefixCls:fn,dock:g.top,onStart:Jn,onMove:Xn,onEnd:se}),(0,s.tZ)(i,{prefixCls:fn,dock:g.right,onStart:Jn,onMove:Xn,onEnd:se}),(0,s.tZ)(i,{prefixCls:fn,dock:g.bottom,onStart:Jn,onMove:Xn,onEnd:se}),(0,s.tZ)(i,{prefixCls:fn,dock:g.left,onStart:Jn,onMove:Xn,onEnd:se}),(0,s.tZ)(i,{prefixCls:fn,dock:g.topLeft,onStart:Jn,onMove:Xn,onEnd:se}),(0,s.tZ)(i,{prefixCls:fn,dock:g.topRight,onStart:Jn,onMove:Xn,onEnd:se}),(0,s.tZ)(i,{prefixCls:fn,dock:g.bottomLeft,onStart:Jn,onMove:Xn,onEnd:se}),(0,s.tZ)(i,{prefixCls:fn,dock:g.bottomRight,onStart:Jn,onMove:Xn,onEnd:se}))},Me=function(){var Fn=ze;return Bn((0,s.tZ)("div",r()({ref:Cn,className:"".concat(fn,"-container ").concat(j||""," ").concat(dn?"".concat(fn,"-container-embed"):""),style:Fn,role:"dialog","aria-modal":"true","aria-labelledby":pn},ge?{}:{tabIndex:-1}),Ve(),We(),dn?He():Ye(),(0,s.tZ)(p,{onPointerMove:Te,onPointerUp:Be}),(0,s.tZ)(p,{onPointerUp:te})))};return!L&&!dn?(0,s.tZ)(v.Fragment,null):(0,O.createPortal)(Me(),E())},rn=(0,sn.Z)({componentName:"Dialog",defaultLocale:R.Z})(A)},79466:function(t,n,e){"use strict";var a=e(26068),r=e.n(a),X=e(48305),o=e.n(X),z=e(32699),h=e.n(z),Z=e(75271),H=e(47471),I=e(46880),d=e(94836),k=e(56517),v=.4,Y=.5,O=.3,sn=1280,T=0,y=function(b){var U=b.fallbackUrl,s=b.docUrls,p=b.visible,m=b.setRootWidth,i=b.setVisible,g=b.title,R=b.defautTop,P=R===void 0?T:R,M=b.className,w=b.normalModeWidth,x=w===void 0?sn:w,N=b.embedConfig,C=N===void 0?{}:N,l=b.normalConfig,$=l===void 0?{}:l,nn=b.locale,B=(0,Z.useState)(0),en=o()(B,2),on=en[0],un=en[1],c=(0,Z.useState)(0),f=o()(c,2),E=f[0],A=f[1],rn=(0,Z.useState)(null),D=o()(rn,2),W=D[0],j=D[1];(0,Z.useEffect)(function(){typeof window!="undefined"&&(un(window.document.body.clientHeight),A(window.document.body.clientWidth),j({pathname:window.location.pathname}))},[]);var L=(0,Z.useMemo)(function(){var u,S,K=(u=W==null?void 0:W.pathname)!==null&&u!==void 0?u:"",ln=Object.entries(s).find(function(q){return K.indexOf(q[0])>-1});return(S=ln==null?void 0:ln[1])!==null&&S!==void 0?S:U},[W,s,U]),_=(0,z.debounce)(function(){typeof window!="undefined"&&(A(window.document.body.clientWidth),un(window.document.body.clientHeight))},300);(0,Z.useEffect)(function(){if(typeof window!="undefined")return window.addEventListener("resize",_),function(){window.removeEventListener("resize",_)}},[]);var F=(0,Z.useMemo)(function(){var u=on-P,S={className:M,visible:p,title:g,onClose:function(){return i(!1)},clientWidth:E,clientHeight:on,draggable:!0,extLink:{link:L}};return E>=x?S=r()(r()(r()({},S),{},{setRootWidth:m,max:[Y*E,u],min:[O*E,u],width:v*E,height:u,top:P,left:(1-v)*E},C),{},{isEmbed:!0}):S=r()(r()(r()({},S),{},{max:[E,u],width:v*E,height:u,enableMaximization:!1,top:on-P},$),{},{isEmbed:!1}),S},[P,M,C,$,x,L,g,E,on,p,m,i]);return(0,k.tZ)("div",null,(0,k.tZ)(H.Z,F,(0,k.tZ)("iframe",{src:L,title:g||(nn==null?void 0:nn.docIframeTitle)})))};n.Z=(0,I.Z)({componentName:"DocDialog",defaultLocale:d.Z})(y)},53206:function(t,n,e){"use strict";var a=e(68585),r=e.n(a),X=e(67825),o=e.n(X),z=e(75271),h=e(23560),Z=e(85755),H=e(46880),I=e(29416),d=e(14136),k=e(56517),v=["portalDom","prefixCls","toolbarAriaLabel","locale"],Y=["theme"],O=function(T){var y=T.portalDom,tn=y===void 0?!1:y,b=T.prefixCls,U=T.toolbarAriaLabel,s=T.locale,p=o()(T,v),m=p,i=m.theme,g=o()(m,Y),R=(0,z.useContext)(Z.default.ConfigContext),P=R.getPrefixCls,M=P("pro-footer-bar",b),w=(0,I.Z)(M),x=w.wrapSSR,N=U!=null?U:s==null?void 0:s.toolbarLabel;return x((0,k.tZ)("div",{role:"toolbar","aria-label":N},(0,k.tZ)(h.S,r()({portalDom:tn,prefixCls:b},g))))};n.Z=(0,H.Z)({componentName:"FooterToolbar",defaultLocale:d.Z})(O)},29416:function(t,n,e){"use strict";e.d(n,{T:function(){return o}});var a=e(82092),r=e.n(a),X=e(51722),o=function(h){var Z=h.componentCls,H=h.colorBgBase;return r()({},"div".concat(Z),{flexDirection:"row-reverse",lineHeight:"initial",alignItems:"center",justifyContent:"flex-end",gap:h.padding,paddingBlock:h.padding,paddingInline:h.paddingXL,width:"100%",backgroundColor:H,boxShadow:"0px -1px 2px 0px #1320391A",borderBlockStart:"none"})};n.Z=function(z){var h=(0,X.A)("FooterToolbar",function(Z){return[o(Z)]});return h(z)}},30908:function(t,n,e){"use strict";e.r(n),e.d(n,{SimpleTable:function(){return h}});var a=e(75271),r=e(51864),X=e(54650),o=e(76621),z=e(56517),h=function(){var H=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}],I=[{title:"Name",dataIndex:"name",key:"name",render:function(k){return(0,z.tZ)("a",null,k)}},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Tags",key:"tags",dataIndex:"tags",render:function(k){return(0,z.tZ)("span",null,k.map(function(v){var Y=v.length>5?"geekblue":"green";return v==="loser"&&(Y="volcano"),(0,z.tZ)(r.Z,{color:Y,key:v},v.toUpperCase())}))}},{title:"Action",key:"action",render:function(k,v){return(0,z.tZ)("span",null,(0,z.tZ)("a",null,"Invite ",v.name),(0,z.tZ)(X.Z,{type:"vertical"}),(0,z.tZ)("a",null,"Delete"))}}];return(0,z.tZ)(o.Z,{rowSelection:{onChange:function(){}},columns:I,dataSource:H,pagination:!1})}},59607:function(t,n,e){"use strict";e.d(n,{Z:function(){return b}});var a=e(82092),r=e.n(a),X=e(48305),o=e.n(X),z=e(87887),h=e(67619),Z=e(85755),H=e(82187),I=e.n(H),d=e(75271),k=e(59624),v=e(46880),Y=e(51722),O=function(s){var p=s.componentCls,m=s.fontWeightStrong,i=s.colorText,g=s.colorBgContainer,R=s.prefixCls;return r()(r()({},p,r()(r()({boxSizing:"border-box",margin:0,padding:0,color:i,fontSize:14,lineHeight:1.5714285714285714,listStyle:"none"},"&.".concat(R,"-fullscreen"),{position:"fixed",zIndex:900,background:g,insetBlockStart:0,insetInlineEnd:0,insetBlockEnd:0,insetInlineStart:0}),"& ".concat(p,"-header"),r()(r()(r()(r()(r()({display:"flex",alignItems:"center",height:64},"& ".concat(p,"-header-left"),{display:"flex",flex:1,alignItems:"center",paddingBlock:20,paddingInline:24}),"& ".concat(p,"-header-icon-btn"),{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:24,minHeight:24,padding:0,margin:0,border:"none",background:"transparent",color:i,cursor:"pointer",verticalAlign:"middle"}),"& ".concat(p,"-header-icon"),{display:"inline-flex",fontSize:16,lineHeight:1}),"& ".concat(p,"-header-title"),{fontWeight:m,fontSize:16,lineHeight:24,marginInlineStart:24}),"& ".concat(p,"-header-extra"),{flex:2,lineHeight:64,textAlign:"end",paddingInlineEnd:24}))),"".concat(p,"-body-overflow-hidden"),{overflow:"hidden"})},sn=function(U){var s=(0,Y.A)("FullscreenBox",function(p){return[O(p)]});return s(U)},T=e(64207),y=e(56517),tn=d.forwardRef(function(U,s){var p=U.style,m=U.header,i=U.className,g=U.defaultMode,R=U.children,P=U.onChange,M=U.locale,w=(0,d.useContext)(Z.default.ConfigContext),x=w.getPrefixCls,N=x("fullscreen-box"),C=sn(N),l=C.wrapSSR,$=(0,d.useState)(!1),nn=o()($,2),B=nn[0],en=nn[1],on=(0,d.useRef)(null),un=g||"viewport",c=function(S){P&&P(S)},f=function(){var S=k.Z.isFullscreen;en(function(){return S}),c(S)};(0,d.useEffect)(function(){return k.Z.on("change",f),function(){k.Z.off("change",f)}},[]);var E=function(){A(!B)},A=function(S){if(!on.current)return Promise.reject(new Error("Container element is not ready."));var K;if(un==="browser"){var ln=k.Z;return S?K=ln.request(on.current):K=ln.exit(),K.then(function(){return ln.isFullscreen})}return en(S),c(S),Promise.resolve(S)};(0,d.useImperativeHandle)(s,function(){return{changeFullscreen:function(S){A(S)}}});var rn=B?M==null?void 0:M.exitFullscreen:M==null?void 0:M.enterFullscreen,D=B?(0,y.tZ)(z.Z,null):(0,y.tZ)(h.Z,null);(0,d.useEffect)(function(){return B?document.body.classList.add("".concat(N,"-body-overflow-hidden")):document.body.classList.remove("".concat(N,"-body-overflow-hidden")),function(){document.body.classList.remove("".concat(N,"-body-overflow-hidden"))}},[B,N]);var W=m&&(m.title||m.extra),j=typeof m=="string",L;if(m===!1)L=null;else if(d.isValidElement(m))L=m;else{var _=j?m:W&&m.title,F=W&&m.extra;L=(0,y.tZ)("div",{className:"".concat(N,"-header"),"data-testid":"header"},(0,y.tZ)("div",{className:"".concat(N,"-header-left")},(0,y.tZ)("button",{type:"button",className:"".concat(N,"-header-icon-btn"),"aria-label":rn,"aria-pressed":B,onClick:E},(0,y.tZ)("span",{className:"".concat(N,"-header-icon"),"aria-hidden":!0},D)),_&&(0,y.tZ)("span",{className:"".concat(N,"-header-title")},_)),W&&F&&(0,y.tZ)("div",{className:"".concat(N,"-header-extra")},F))}return l((0,y.tZ)("div",{ref:on,style:p,className:I()(N,i,r()({},"".concat(N,"-fullscreen"),B)),"aria-live":"polite"},L,R))}),b=(0,v.Z)({componentName:"FullscreenBox",defaultLocale:T.Z})(tn)},1532:function(t,n,e){"use strict";e.d(n,{jA:function(){return Yn},ZP:function(){return pe},QU:function(){return En}});var a=e(31759),r=e.n(a),X=e(68585),o=e.n(X),z=e(26068),h=e.n(z),Z=e(48305),H=e.n(Z),I=e(68570),d=e(75271),k=e(21823),v=k.Z,Y=e(60680),O=e(89633),sn=e(85755),T=e(65487),y=e(76359),tn=e(82187),b=e.n(tn),U=e(58226),s=e.n(U),p=e(46880),m=e(82092),i=e.n(m),g=e(51722),R=function(Sn){var In,Mn,bn=Sn.componentCls,Dn=Sn.borderRadius,mn=Sn.fontWeightStrong,Un=Sn.colorBgLayout;return i()({},"".concat(bn),(Mn={boxSizing:"border-box",margin:0,padding:0,color:"rgba(0, 0, 0, 0.88)",fontSize:Sn.fontSize,lineHeight:1.5714285714285714,listStyle:"none",borderRadius:Dn},i()(i()(i()(i()(i()(i()(i()(i()(i()(i()(Mn,"&:not(:hover) ".concat(bn,"-copy"),{visibility:"hidden",opacity:0}),"@keyframes copy-button-trans",{"0%":{opacity:.8,marginBlockStart:0},"10%":{opacity:.8,marginBlockStart:-16},"90%":{opacity:.8,marginBlockStart:-16},"100%":{opacity:.8,marginBlockStart:0}}),"".concat(bn,"-json-view"),{padding:0,".react-json-view":{padding:"0.5em",overflow:"auto",".icon-container svg":{transform:"translateY(5px)"}}}),"&.".concat(bn,"-light"),(In={".react-json-view":{background:Un}},i()(i()(i()(i()(i()(i()(i()(i()(i()(i()(In,"".concat(bn,"-light-index"),{borderInlineEnd:"1px solid rgba(0, 0, 0, 0.05)"}),"display","block"),"padding","0.5em"),"overflowX","auto"),"color","#383a42"),"background",Un),".hljs-comment, .hljs-quote",{color:"#a0a1a7",fontStyle:"italic"}),".hljs-doctag, .hljs-keyword, .hljs-formula",{color:"#a626a4"}),".hljs-section, .hljs-name, .hljs-selector-tag, .hljs-deletion, .hljs-subst",{color:"#e45649"}),".hljs-literal",{color:"#0184bb"}),i()(i()(i()(i()(i()(i()(i()(In,".hljs-string, .hljs-regexp, .hljs-addition, .hljs-attribute, .hljs-meta-string",{color:"#50a14f"}),".hljs-built_in, .hljs-class, .hljs-title",{color:"#c18401"}),".hljs-attr, .hljs-variable, .hljs-template-variable, .hljs-type, .hljs-selector-class, .hljs-selector-attr, .hljs-selector-pseudo, .hljs-number",{color:"#986801"}),".hljs-symbol, .hljs-bullet, .hljs-link, .hljs-meta, .hljs-selector-id, .hljs-title",{color:"#4078f2"}),".hljs-emphasis",{fontStyle:"italic"}),".hljs-strong",{fontWeight:mn}),".hljs-link",{textDecoration:"underline"}))),"".concat(bn,"-index"),{boxSizing:"border-box",width:40,minWidth:40,color:"#aaa",textAlign:"end",background:"rgba(255, 255, 255, 0.03)",userSelect:"none",paddingBlock:2,paddingInline:8}),"".concat(bn,"-content"),{paddingBlock:2,paddingInline:8}),"".concat(bn,"-copy"),{position:"absolute",display:"flex",flexDirection:"column",width:16,height:16,padding:0,overflow:"hidden",border:0,outline:"none",cursor:"pointer",opacity:.6,transition:"opacity 0.2s",insetBlockStart:16,insetInlineEnd:16,"&:hover":{opacity:.8}}),"&:not(:hover) &.".concat(bn,"-copy"),{visibility:"hidden",opacity:0}),"".concat(bn,"-copy-icon"),{width:16,height:16,fontSize:16,"&.scoll":{animation:"copy-button-trans 2s",animationPlayState:"running"}}),"".concat(bn,"-dark"),i()(i()(i()(i()(i()(i()(i()(i()(i()(i()({display:"block",padding:"0.5em",overflowX:"auto",color:"#c0c5ce",background:"#2b303b",borderRadius:Dn},"&.".concat(bn,"-index"),{borderInlineEnd:"1px solid rgba(255, 255, 255, 0.05)"}),".hljs-comment, .hljs-quote",{color:"#65737e"}),".hljs-variable, .hljs-template-variable, .hljs-tag, .hljs-name, .hljs-selector-id, .hljs-selector-class, .hljs-regexp, .hljs-deletion",{color:"#bf616a"}),".hljs-number, .hljs-built_in, .hljs-builtin-name, .hljs-literal, .hljs-type, .hljs-params, .hljs-meta, .hljs-link",{color:"#d08770"}),".hljs-attribute",{color:"#ebcb8b"}),".hljs-string, .hljs-symbol, .hljs-bullet, .hljs-addition",{color:"#a3be8c"}),".hljs-title, .hljs-section",{color:"#8fa1b3"}),".hljs-keyword, .hljs-selector-tag",{color:"#b48ead"}),".hljs-emphasis",{fontStyle:"italic"}),".hljs-strong",{fontWeight:mn})),i()(Mn,"&.".concat(bn,"-diff"),i()(i()(i()(i()(i()(i()(i()({overflowY:"auto",table:{width:"100%",fontFamily:"'SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace'",borderCollapse:"collapse",borderSpacing:0,td:{verticalAlign:"top"}}},"".concat(bn,"-diff-index, ").concat(bn,"-diff-mark, ").concat(bn,"-diff-code"),{paddingBlock:2,paddingInline:8}),"".concat(bn,"-diff-index, ").concat(bn,"-diff-mark"),{userSelect:"none"}),"".concat(bn,"-diff-index"),{width:40,minWidth:40,textAlign:"end",fontVariantNumeric:"tabular-nums"}),"".concat(bn,"-diff-mark"),{width:10,minWidth:10,textAlign:"center"}),"".concat(bn,"-diff-code"),{whiteSpace:"pre-wrap",wordBreak:"break-word"}),"&.".concat(bn,"-light"),i()(i()(i()(i()(i()({},"".concat(bn,"-diff-index, ").concat(bn,"-diff-mark"),{color:"#aaa"}),"".concat(bn,"-diff-index"),{background:"rgba(0, 0, 0, 0.01)",borderInlineEnd:"1px solid rgba(0, 0, 0, 0.05)",borderInlineStart:"1px solid rgba(0, 0, 0, 0.1)","&:first-child":{borderInlineStart:"none"}}),"".concat(bn,"-diff-cell-add"),{background:"#e7f1e2"}),"".concat(bn,"-diff-cell-remove"),{background:"#f6e3e4"}),"".concat(bn,"-diff-cell-empty"),{background:"rgba(0, 0, 0, 0.03)"})),"&.".concat(bn,"-dark"),i()(i()(i()(i()(i()({},"".concat(bn,"-diff-index, ").concat(bn,"-diff-mark"),{color:"#aaa"}),"".concat(bn,"-diff-index"),{background:"rgba(255, 255, 255, 0.01)",borderInlineEnd:"1px solid rgba(255, 255, 255, 0.05)",borderInlineStart:"1px solid rgba(255, 255, 255, 0.1)","&:first-child":{borderInlineStart:"none"}}),"".concat(bn,"-diff-cell-add"),{background:"#305c29"}),"".concat(bn,"-diff-cell-remove"),{background:"#6d2431"}),"".concat(bn,"-diff-cell-empty"),{background:"rgba(255, 255, 255, 0.03)"})))))},P=function(Ln){var Sn=(0,g.A)("Highlight",function(In){return[R(In)]});return Sn(Ln)},M=e(15558),w=e.n(M),x=e(5638),N=e(15588),C=function(Sn){var In=d.useRef();function Mn(bn,Dn){return Object.keys(bn).forEach(function(mn){r()(bn[mn])==="object"&&bn[mn].handle?Dn.addEventListener(mn,bn[mn].handle,bn[mn].options):Dn.addEventListener(mn,bn[mn])}),function(){Object.keys(bn).forEach(function(mn){r()(bn[mn])==="object"&&bn[mn].handle?Dn.removeEventListener(mn,bn[mn].handle,bn[mn].options):Dn.removeEventListener(mn,bn[mn])})}}return(0,d.useEffect)(function(){if(Sn.current)return Mn({keydown:function(Dn){var mn=window.getSelection();if((Dn.ctrlKey||Dn.metaKey)&&Dn.code==="KeyA"&&In.current&&Sn.current){var Un=document.createRange();Un.selectNodeContents(Sn.current),mn.removeAllRanges(),mn.addRange(Un),Dn.preventDefault()}},focus:function(){In.current=!0},blur:function(){In.current=!1}},Sn.current)},[Sn.current,Sn]),null},l=e(56517);function $(Ln){var Sn,In=Ln.diffPrefixCls,Mn=Ln.data,bn=Ln.emptyText,Dn=Ln.width,mn=Ln.lock,Un=Ln.rowOffset,ne=Un===void 0?0:Un,re=Ln.onMouseDown,ae=Ln.hashId,Wn="".concat(In,"-cell-empty"),ie="".concat(In,"-cell-add"),he="".concat(In,"-cell-remove"),ye=(Mn==null?void 0:Mn.type)==="add",fe=(Mn==null?void 0:Mn.type)==="remove",le=i()(i()(i()({},Wn,!Mn),ie,ye),he,fe),be=Mn==null?void 0:Mn.index;return be!==void 0&&(be+=ne),(0,l.tZ)(d.Fragment,null,(0,l.tZ)("td",{className:b()("".concat(In,"-index"),le,ae)},be),(0,l.tZ)("td",{className:b()("".concat(In,"-mark"),le,ae)},ye&&"+",fe&&"-"),(0,l.tZ)("td",{onMouseDown:re,style:{width:Dn,userSelect:mn?"none":void 0},className:b()("".concat(In,"-code"),le,ae),dangerouslySetInnerHTML:{__html:(Sn=Mn==null?void 0:Mn.value)!==null&&Sn!==void 0?Sn:bn||""}}))}var nn=1e4,B='<span class="hljs-comment">// \u6CA1\u6709\u6570\u636E</span>';function en(Ln,Sn){var In=Ln?I.Z.highlight(Ln,Sn):I.Z.highlightAuto(Sn),Mn=In.value;return Mn.split(/\r?\n/)}var on=function(Sn){var In=Sn.style,Mn=Sn.className,bn=Sn.prefixCls,Dn=Sn.source,mn=Sn.target,Un=Sn.language,ne=Sn.split,re=ne===void 0?!0:ne,ae=Sn.theme,Wn=Sn.height,ie=Sn.startRowIndex,he=ie===void 0?1:ie,ye=(0,d.useContext)(sn.default.ConfigContext),fe=ye.getPrefixCls,le=bn||fe("highlight"),be="".concat(le,"-diff"),ke=d.useState(null),me=H()(ke,2),Ce=me[0],Oe=me[1],ve=Array.isArray(he)?he:[he,he],ce=H()(ve,2),Ue=ce[0],Ze=Ue===void 0?1:Ue,ge=ce[1],Fe=ge===void 0?1:ge,Ke=Ze>1?Ze-1:0,Ae=Fe>1?Fe-1:0;(0,d.useEffect)(function(){Un?I.Z.registerLanguage(Un,En[Un]):Object.keys(En).forEach(function(te){I.Z.registerLanguage(te,En[te])})},[Un]);var de=d.useState(null),ee=H()(de,2),zn=ee[0],wn=ee[1];function Gn(te){if(te!==zn){var Jn,Xn,se,Ne,Pe,Ee,je,Le;(Jn=(Xn=window).getSelection)===null||Jn===void 0||(se=(Ne=Jn.call(Xn)).removeAllRanges)===null||se===void 0||se.call(Ne),(Pe=(Ee=window).getSelection)===null||Pe===void 0||(je=(Le=Pe.call(Ee)).empty)===null||je===void 0||je.call(Le)}wn(te)}var Se=function(){Gn("source")},De=function(){Gn("target")};(0,d.useEffect)(function(){if(!Dn&&!mn){Oe(null);return}var te=en(Un,Dn||""),Jn=en(Un,mn||""),Xn=(0,x.Mp)(Dn||"",mn||""),se={source:te,target:Jn,diff:Xn};Oe(se)},[Dn,mn,Un]);var _e=(0,d.useMemo)(function(){if(!Ce)return null;var te=0,Jn=0,Xn=[],se=[];return Ce.diff.forEach(function(Ne){var Pe=Ne.count,Ee=Ne.added,je=Ne.removed;Ee?Xn.push.apply(Xn,w()(new Array(Pe).fill(null))):(Xn.push.apply(Xn,w()(Ce.source.slice(te,te+Pe).map(function(Le,ze){return{value:Le,index:te+ze+1,type:je?"remove":"keep"}}))),te+=Pe),je?se.push.apply(se,w()(new Array(Pe).fill(null))):(se.push.apply(se,w()(Ce.target.slice(Jn,Jn+Pe).map(function(Le,ze){return{value:Le,index:Jn+ze+1,type:Ee?"add":"keep"}}))),Jn+=Pe)}),{sourceRows:Xn,targetRows:se}},[Ce,re]),Ie=(0,d.useMemo)(function(){if(!_e)return null;function te(We,He,Ye){for(var Me=We;Me<He.length-1;Me+=1){var jn,Fn;if(((jn=He[Me])===null||jn===void 0?void 0:jn.type)==="remove"&&!Ye[Me]&&!He[Me+1]&&((Fn=Ye[Me+1])===null||Fn===void 0?void 0:Fn.type)==="add"){for(var xe=Me,Vn=Me-1;Vn>=0;Vn-=1){var we;if(((we=He[Vn])===null||we===void 0?void 0:we.type)!=="remove"){xe=Vn+1;break}}for(var Je=Me,Xe=Me+1;Xe<=Ye.length;Xe+=1){var qe;if(((qe=Ye[Xe])===null||qe===void 0?void 0:qe.type)!=="add"){Je=Xe-1;break}}return{index:Me+1,removeCount:Me-xe+1,addCount:Je-Me}}}return null}for(var Jn=_e.sourceRows,Xn=_e.targetRows,se=0,Ne=0;Ne<nn;Ne+=1){var Pe=te(se,Jn,Xn);if(Pe===null)break;var Ee=Pe.index,je=Pe.addCount,Le=Pe.removeCount,ze=Math.min(je,Le);Jn=[].concat(w()(Jn.slice(0,Ee)),w()(Jn.slice(Ee+ze))),Xn=[].concat(w()(Xn.slice(0,Ee-ze)),w()(Xn.slice(Ee))),se=Ee-ze}(0,N.default)(Ne<nn,"Diff check too many times. Please help to fire issue of DiffView. Thanks.");for(var $e=Xn.length,Ge=0;Ge<$e;Ge+=1)if(!Xn[Ge])for(var Ve=Ge+1;Ve<$e;Ve+=1){var Qe=Xn[Ve];if(Qe){Qe.type==="add"&&(Xn[Ge]=Qe,Xn[Ve]=null);break}}return{rows:Jn.map(function(We,He){return{source:We,target:Xn[He]}}),sourceEmpty:Jn.every(function(We){return!We}),targetEmpty:Xn.every(function(We){return!We})}},[_e]),Te;Ce?re?Te=Ie.rows.map(function(te,Jn){var Xn=te.source,se=te.target;return(0,l.tZ)("tr",{key:Jn},(0,l.tZ)($,{width:"50%",diffPrefixCls:be,data:Xn,emptyText:Jn===0&&Ie.sourceEmpty&&B,onMouseDown:Se,lock:zn!=="source",rowOffset:Ke}),(0,l.tZ)($,{width:"50%",diffPrefixCls:be,data:se,emptyText:Jn===0&&Ie.targetEmpty&&B,onMouseDown:De,lock:zn!=="target",rowOffset:Ae}))}):Te=_e.sourceRows.map(function(te,Jn){return(0,l.tZ)("tr",{key:Jn},(0,l.tZ)($,{width:"100%",diffPrefixCls:be,data:te!=null?te:_e.targetRows[Jn],rowOffset:Ae}))}):Te=(0,l.tZ)("tr",null,(0,l.tZ)($,{width:"100%",diffPrefixCls:be,data:{index:1,value:B,type:"keep"}}));var Be=d.useRef();return C(Be),(0,l.tZ)("div",{style:h()({height:Wn},In),ref:Be,tabIndex:-1,className:b()(le,be,"".concat(le,"-").concat(ae==="dark"?"dark":"light"),i()({},"".concat(be,"-split"),re),Mn)},(0,l.tZ)("table",null,(0,l.tZ)("tbody",null,Te)))},un=on;function c(Ln){var Sn,In=Ln.prefixCls,Mn=Ln.theme,bn=Ln.data,Dn=Ln.emptyText,mn=Ln.width,Un=Ln.lock,ne=Ln.lineNumber,re=ne===void 0?!1:ne,ae=Ln.onMouseDown,Wn=Ln.hashId,ie=bn==null?void 0:bn.index;return(0,l.tZ)(d.Fragment,null,re?(0,l.tZ)("td",{className:b()("".concat(In,"-").concat(Mn,"-index"),"".concat(In,"-index"),Wn)},ie):null,(0,l.tZ)("td",{onMouseDown:ae,style:{width:mn,userSelect:Un?"none":void 0},className:b()("".concat(In,"-content"),Wn),dangerouslySetInnerHTML:{__html:(Sn=bn==null?void 0:bn.value)!==null&&Sn!==void 0?Sn:Dn||""}}))}var f=e(51583),E=e.n(f),A=function(Ln){var Sn=Ln.json,In=Ln.theme,Mn=Ln.style,bn=Ln.className,Dn=Ln.height,mn=Ln.onCopyChange,Un=mn===void 0?function(){}:mn,ne=Ln.copyable,re=ne===void 0?!0:ne,ae=(0,d.useContext)(sn.default.ConfigContext),Wn=ae.getPrefixCls,ie=Wn("highlight"),he=In===Yn,ye=(0,d.useRef)();return C(ye),(0,l.tZ)("div",{style:Mn,ref:ye,tabIndex:-1,className:b()(ie,"".concat(ie,"-json-view"),i()({},"".concat(ie,"-light"),!he),bn)},(0,l.tZ)(E(),{enableClipboard:re&&Un,src:Sn,theme:he?"ocean":void 0,displayDataTypes:!1,style:{height:Dn},name:!1}))},rn=e(46145),D=rn.Z,W=e(47467),j=W.Z,L=e(87694),_=L.Z,F=e(41625),u=F.Z,S=e(17824),K=S.Z,ln=e(44138),q=ln.Z,cn=e(40429),_n=cn.Z,vn=e(751),gn=vn.Z,J=e(51073),Q=J.Z,an=e(28168),An=an.Z,kn=e(86764),xn=kn.Z,Pn=e(58025),hn=Pn.Z,G=e(58574),V=G.Z,On=e(27445),dn=e.n(On),pn=dn(),Cn=e(63775),yn=Cn.Z,Rn=e(29103),fn=Rn.Z,Tn=e(5724),Bn=Tn.Z,Nn=e(62515),qn=Nn.Z,Qn=e(14631),En={javascript:v,typescript:fn,css:_,groovy:q,java:gn,python:hn,bash:D,json:Q,cpp:j,http:_n,markdown:An,nginx:xn,ruby:V,sql:yn,xml:Bn,dockerfile:u,go:K,yaml:qn,solidity:pn,tsx:fn,jsx:v},Yn="dark",Kn="light",Hn=function(){for(var Sn=arguments.length,In=new Array(Sn),Mn=0;Mn<Sn;Mn++)In[Mn]=arguments[Mn];return In},$n=Hn(Yn,Kn),Zn=Object.keys(En),oe=function(Sn,In){var Mn=Sn?I.Z.highlight(Sn,In||""):I.Z.highlightAuto(In);return Mn},Re=function(Sn){var In=Sn.children,Mn=Sn.style,bn=Sn.height,Dn=Sn.className,mn=Sn.innerHTML,Un=Sn.lineNumber,ne=Un===void 0?!1:Un,re=Sn.copyable,ae=re===void 0?!0:re,Wn=Sn.theme,ie=Wn===void 0?Kn:Wn,he=Sn.onCopyChange,ye=he===void 0?function(){}:he,fe=Sn.language,le=Sn.locale,be=(0,d.useContext)(sn.default.ConfigContext),ke=be.getPrefixCls,me=ke("highlight"),Ce=P(me),Oe=Ce.wrapSSR,ve=ie===Yn?"".concat(me,"-dark"):"".concat(me,"-light"),ce=d.createRef(),Ue=d.useState(),Ze=H()(Ue,2),ge=Ze[0],Fe=Ze[1],Ke=T.ZP.useToken(),Ae=Ke.token;(0,d.useEffect)(function(){fe&&En[fe]?I.Z.registerLanguage(fe,En[fe]):Object.keys(En).forEach(function(wn){I.Z.registerLanguage(wn,En[wn])})},[fe]);var de=function(){if(In){var Gn=oe(fe,In),Se=Gn.value,De=Se.split(/\r?\n/),_e=De.map(function(Ie,Te){return{value:Ie,index:Te+1}});Fe(_e.map(function(Ie,Te){return(0,l.tZ)("tr",{key:Te},(0,l.tZ)(c,{lineNumber:ne,width:"100%",data:Ie,theme:ie,prefixCls:me}))}))}};(0,d.useEffect)(function(){de()},[In,mn,ie,fe,ne]),C(ce);var ee={ref:ce,className:"".concat(Dn),style:Mn,tabIndex:"-1"};if(mn)return ee.dangerouslySetInnerHTML={__html:In},(0,l.tZ)("div",ee);var zn=function(){var Gn=(0,d.useState)(),Se=H()(Gn,2),De=Se[0],_e=Se[1];(0,d.useEffect)(function(){return function(){window.clearTimeout(De)}});var Ie=(0,d.useState)(!1),Te=H()(Ie,2),Be=Te[0],te=Te[1];return(0,l.tZ)(d.Fragment,null,(0,l.tZ)(s(),{text:In&&In.length?In:"",onCopy:function(Xn){ye(Xn),te(!0),y.yw.success(le.copied);var se=window.setTimeout(function(){te(!1)},2e3);_e(se)}},(0,l.tZ)("button",{type:"button",disabled:Be,className:b()("".concat(me,"-copy")),"aria-label":le==null?void 0:le.copyCode,"aria-pressed":Be,style:{background:"".concat(ie===Yn?"#2b303b":Ae.colorBgLayout)}},(0,l.tZ)(Y.Z,{className:b()("".concat(me,"-copy-icon"),{scoll:Be}),style:{color:"".concat(ie===Yn?Ae.colorBgLayout:"#2b303b")},"aria-hidden":!0}),(0,l.tZ)(O.Z,{className:b()("".concat(me,"-copy-icon")),style:{color:"rgb(63,177,99)"},"aria-hidden":!0}))))};return Oe((0,l.tZ)("pre",o()({},ee,{role:"region","aria-label":le==null?void 0:le.copyCodeRegion,style:h()(h()({},Mn),{},{position:"relative"}),className:b()("".concat(me),Dn,ve)}),ae&&(0,l.tZ)(zn,null),(0,l.tZ)("table",{style:{height:bn},className:b()("".concat(ie===Yn?"".concat(me,"-dark"):"".concat(me,"-light")))},(0,l.tZ)("tbody",null,ge))))},ue=function(Sn){var In=Sn.language,Mn=Sn.children;return In==="json"&&Mn&&r()(Mn)==="object"&&!d.isValidElement(Mn)?(0,l.tZ)(A,o()({},Sn,{json:Mn})):(0,l.tZ)(Re,Sn)};ue.Diff=un;var pe=(0,p.Z)({componentName:"Highlight",defaultLocale:Qn.Z})(ue)},50875:function(t,n,e){"use strict";e.d(n,{Z:function(){return I}});var a=e(68585),r=e.n(a),X=e(67825),o=e.n(X),z=e(75271),h=e(56517),Z=["type","className"],H=function(k){var v=k.type,Y=k.className,O=o()(k,Z);return(0,h.tZ)("i",r()({className:"iconfont ".concat(v," ").concat(Y)},O))},I=H},14658:function(t,n,e){"use strict";var a=e(68585),r=e.n(a),X=e(67825),o=e.n(X),z=e(75271),h=e(14261),Z=e(85755),H=e(46880),I=e(95050),d=e(96179),k=e(56517),v=["prefixCls","filterAriaLabel","locale"],Y=["theme"];function O(sn){var T=sn.prefixCls,y=sn.filterAriaLabel,tn=sn.locale,b=o()(sn,v),U=b,s=U.theme,p=o()(U,Y),m=(0,z.useContext)(Z.default.ConfigContext),i=m.getPrefixCls,g=i("pro-form-light-filter",T),R=(0,I.Z)(g),P=R.wrapSSR,M=y!=null?y:tn==null?void 0:tn.filterLabel;return P((0,k.tZ)("div",{role:"group","aria-label":M},(0,k.tZ)(h.M,r()({prefixCls:T},p))))}n.Z=(0,H.Z)({componentName:"LightFilter",defaultLocale:d.Z})(O)},95050:function(t,n,e){"use strict";var a=e(82092),r=e.n(a),X=e(51722),o=function(h){var Z=h.componentCls,H=h.proComponentsCls;return r()(r()(r()({},"".concat(Z),r()({},"".concat(H,"-core-field-label"),{"&-active, &:hover":{backgroundColor:h.controlItemBgActive}})),"".concat(Z,"-middle"),r()({},"".concat(H,"-core-field-label"),{paddingInline:h.paddingSM,borderRadius:h.borderRadius})),"".concat(Z).concat(Z,"-small"),r()({},"".concat(H,"-core-field-label"),{paddingInline:h.paddingXS,borderRadius:h.borderRadiusSM}))};n.Z=function(z){var h=(0,X.A)("LightFilter",function(Z){return[o(Z)]});return h(z)}},90984:function(t,n,e){"use strict";var a=e(68585),r=e.n(a),X=e(67825),o=e.n(X),z=e(30392),h=e(79775),Z=e(65487),H=e(89677),I=e(58229),d=e(89522),k=e(75271),v=e(72030),Y=e(20785),O=e(56517),sn=["locales","showLabel","className"],T=function(tn){var b=tn.locales,U=tn.showLabel,s=tn.className,p=o()(tn,sn),m=Z.ZP.useToken(),i=m.token,g=(0,O.tZ)(H.Z,{onClick:function(P){var M=P.key;(0,Y.i_)(M)}},v.s.filter(function(R){return!b||b.includes(R.value)}).map(function(R){return(0,O.tZ)(H.Z.Item,{key:R.value},R.label)}));return(0,O.tZ)(I.Z,r()({overlay:g},p),U?(0,O.tZ)("span",{style:{display:"inline-block",width:28,height:28,fontSize:12,fontWeight:i.fontWeightStrong,lineHeight:"28px",textAlign:"center",border:"0.88px solid #ced4e1",borderRadius:14}},(0,h.aL)(v.s,(0,Y.Kd)()).minLabel):(0,O.tZ)(d.Z,{className:s},(0,O.tZ)(z.Z,null),(0,h.aL)(v.s,(0,Y.Kd)()).shortLabel))};n.Z=T},27894:function(t,n,e){"use strict";e.d(n,{Z:function(){return vn}});var a=e(68585),r=e.n(a),X=e(82092),o=e.n(X),z=e(48305),h=e.n(z),Z=e(85723),H=e(85755),I=e(97870),d=e(54650),k=e(76409),v=e(67453),Y=e(76359),O=e(82187),sn=e.n(O),T=e(75271),y=e(46880),tn=e(67825),b=e.n(tn),U=e(23912),s=e(45114),p=e(36038),m=e(32699),i=e(90228),g=e.n(i),R=e(87999),P=e.n(R),M=e(26068),w=e.n(M),x=e(26939),N=e(64209),C=e(56450),l=e(56517),$=["isUserExists","locale","loading","passwordRule","errorMessage"],nn=C.$x,B=function(J){var Q=J.isUserExists,an=J.locale,An=J.loading,kn=J.passwordRule,xn=J.errorMessage,Pn=b()(J,$),hn=(0,T.useContext)(H.default.ConfigContext),G=hn.getPrefixCls,V=hn.locale,On=G("login"),dn=U.Z.useForm(),pn=h()(dn,1),Cn=pn[0],yn=V==null?void 0:V.Password,Rn=(0,T.useMemo)(function(){return w()(w()({},N.Z),yn)},[yn]),fn=(0,T.useMemo)(function(){return w()(w()({},Rn),{},{emptyMessage:an.passwordMessage})},[Rn,an.passwordMessage]),Tn=(0,T.useCallback)(function(){var qn=P()(g()().mark(function Qn(En,Yn){var Kn;return g()().wrap(function($n){for(;;)switch($n.prev=$n.next){case 0:if(!(!Yn||!(0,m.isFunction)(Q))){$n.next=2;break}return $n.abrupt("return");case 2:return $n.next=4,Q(Yn);case 4:if(Kn=$n.sent,!Kn){$n.next=7;break}throw new Error(an.userExistMessage);case 7:case"end":return $n.stop()}},Qn)}));return function(Qn,En){return qn.apply(this,arguments)}}(),[Q,an.userExistMessage]),Bn=(0,T.useCallback)(function(qn,Qn){return kn?!Qn||!kn.pattern.test(Qn)?Promise.reject(new Error(kn.message)):Promise.resolve():(0,C.JU)(fn)(qn,Qn)},[fn,kn]),Nn=(0,T.useCallback)(function(qn,Qn){var En=Cn.getFieldValue("password");return(0,m.toString)(Qn)!==(0,m.toString)(En)?Promise.reject(new Error(Rn.confirmMismatchMessage)):Promise.resolve()},[Cn,Rn.confirmMismatchMessage]);return(0,l.tZ)(U.Z,r()({layout:"vertical",requiredMark:!1,className:"".concat(On,"-form"),form:Cn},Pn,{"data-testid":"login.register"}),xn&&(0,l.tZ)(s.Z,{type:"error",showIcon:!0,className:"".concat(On,"-alert"),message:xn}),(0,l.tZ)(U.Z.Item,{name:"username",label:an.usernameLabel,extra:an.usernameHelp,validateFirst:!0,rules:[{required:!0,whitespace:!0,message:an.usernameMessage},{min:4,max:48,message:an.usernameLengthMessage},{pattern:/^[a-zA-Z0-9_.+@#$%]+$/,message:an.usernameFormatMessage},{validator:Tn}]},(0,l.tZ)(p.Z,{size:"large",autoComplete:"new-account",autoFocus:!0})),(0,l.tZ)(U.Z.Item,{name:"password",label:an.passwordLabel,dependencies:["confirmPassword"],validateFirst:!0,rules:[{required:!0,message:an.passwordMessage},{validator:Bn}]},(0,l.tZ)(x.Z,{size:"large",visibilityToggle:!0})),(0,l.tZ)(U.Z.Item,{name:"confirmPassword",label:an.confirmPwdLabel,dependencies:["password"],validateFirst:!0,rules:[{required:!0,message:an.confirmPwdMessage},{validator:Nn}]},(0,l.tZ)(p.Z.Password,{size:"large",visibilityToggle:!0,autoComplete:"new-password"})),(0,l.tZ)(v.ZP,{htmlType:"submit",size:"large",loading:An,type:"primary",block:!0,className:"".concat(On,"-submit-btn")},an.registerBtn))},en=B,on=["locale","loading","passwordRule","errorMessage","goBack"],un=function(J){var Q=J.locale,an=J.loading,An=J.passwordRule,kn=J.errorMessage,xn=J.goBack,Pn=b()(J,on),hn=(0,T.useContext)(H.default.ConfigContext),G=hn.getPrefixCls,V=G("login"),On=U.Z.useForm(),dn=h()(On,1),pn=dn[0],Cn=(0,T.useCallback)(function(Rn,fn,Tn){if(!pn){Tn();return}var Bn=pn.getFieldValue("password");if((0,m.toString)(fn)!==(0,m.toString)(Bn)){Tn(Q.samePasswordMessage);return}Tn()},[pn]),yn=An||{pattern:nn,message:Q.passwordHelp};return(0,l.tZ)(U.Z,r()({layout:"vertical",requiredMark:!1,className:"".concat(V,"-form"),form:pn},Pn,{"data-testid":"login.register"}),kn&&(0,l.tZ)(s.Z,{type:"error",showIcon:!0,className:"".concat(V,"-alert"),message:kn}),(0,l.tZ)(U.Z.Item,{name:"password",label:Q.passwordLabel,dependencies:["confirmPassword"],help:yn.message,validateFirst:!0,rules:[{required:!0,message:Q.passwordMessage},yn]},(0,l.tZ)(p.Z.Password,{size:"large",visibilityToggle:!0,autoComplete:"new-password"})),(0,l.tZ)(U.Z.Item,{name:"confirmPassword",label:Q.confirmPwdLabel,dependencies:["password"],validateFirst:!0,rules:[{required:!0,message:Q.confirmPwdMessage},{validator:Cn}]},(0,l.tZ)(p.Z.Password,{size:"large",visibilityToggle:!0,autoComplete:"new-password"})),(0,l.tZ)(v.ZP,{htmlType:"submit",size:"large",loading:an,type:"primary",block:!0,className:"".concat(V,"-submit-btn")},Q.activeSubmitBtn),(0,l.tZ)("div",{className:"".concat(V,"-switch-btn")},(0,l.tZ)(v.ZP,{type:"link",onClick:xn},Q.activeBackBtn)))},c=un,f=e(20498),E=e(89314),A=e(99991),rn=e(24020),D=e(37565),W=e(89522),j=e(65487),L=["loading","locale","errorMessage","showAuthCode","showOtherLoginButton","authCodeImg","otherLoginProps","onAuthCodeImgChange","componentProps","passwordOptional"],_=function(J){var Q=J.loading,an=J.locale,An=J.errorMessage,kn=J.showAuthCode,xn=J.showOtherLoginButton,Pn=J.authCodeImg,hn=J.otherLoginProps,G=J.onAuthCodeImgChange,V=J.componentProps,On=J.passwordOptional,dn=On===void 0?!1:On,pn=b()(J,L),Cn=(0,T.useContext)(H.default.ConfigContext),yn=Cn.getPrefixCls,Rn=yn("login"),fn=j.ZP.useToken(),Tn=fn.token,Bn=(0,T.useState)(""),Nn=h()(Bn,2),qn=Nn[0],Qn=Nn[1];return(0,l.tZ)(U.Z,r()({layout:"vertical",hideRequiredMark:!0,className:"".concat(Rn,"-form"),style:{paddingLeft:kn?96:0}},pn,{"data-testid":"login.form"}),An&&(0,l.tZ)(s.Z,{type:"error",showIcon:!0,className:"".concat(Rn,"-alert"),message:An}),(0,l.tZ)(U.Z.Item,{name:"username",rules:[{required:!0,message:an.usernameMessage}]},(0,l.tZ)(p.Z,r()({size:"large",prefix:(0,l.tZ)(E.Z,{style:{color:Tn.colorIcon}}),placeholder:an.usernamePlaceholder,onFocus:function(){Qn("username")},onBlur:function(){Qn("")},className:sn()(o()({},"".concat(Rn,"-form-focus-input"),qn==="username"))},(V==null?void 0:V.username)||{}))),(0,l.tZ)(U.Z.Item,{name:"password",rules:dn?[]:[{required:!0,message:an.passwordMessage}]},(0,l.tZ)(p.Z.Password,r()({size:"large",visibilityToggle:!0,autoComplete:"current-password",prefix:(0,l.tZ)(A.Z,{style:{color:Tn.colorIcon}}),placeholder:an.passwordPlaceholder,onFocus:function(){Qn("password")},onBlur:function(){Qn("")},className:qn==="password"?"".concat(Rn,"-form-focus-input"):""},(V==null?void 0:V.password)||{}))),kn&&(0,l.tZ)(W.Z,{className:"".concat(Rn,"-auth-code")},(0,l.tZ)(U.Z.Item,{name:"authCode",rules:[{required:!0,message:"\u9A8C\u8BC1\u7801\u4E0D\u80FD\u4E3A\u7A7A"}]},(0,l.tZ)(p.Z,r()({size:"large",prefix:(0,l.tZ)(rn.Z,{style:{color:Tn.colorIcon}}),placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",onFocus:function(){Qn("authCode")},onBlur:function(){Qn("")},className:sn()(o()({},"".concat(Rn,"-form-focus-input"),qn==="authCode"))},(V==null?void 0:V.authCode)||{}))),(0,l.tZ)("div",{className:sn()("".concat(Rn,"-code-btn"))},(0,l.tZ)("img",{src:Pn,alt:"",width:"96",height:"38"}),(0,l.tZ)("div",{className:"".concat(Rn,"-code-mask"),onClick:G},(0,l.tZ)(D.Z,null)))),(0,l.tZ)(U.Z.Item,null,(0,l.tZ)(v.ZP,{htmlType:"submit",size:"large",loading:Q,type:"primary",block:!0,className:"".concat(Rn,"-submit-btn")},an.loginText)),xn&&(0,l.tZ)(U.Z.Item,null,(0,l.tZ)(v.ZP,{htmlType:"button",size:"large",loading:hn.loading,type:"primary",block:!0,onClick:hn.onFinish,className:"".concat(Rn,"-submit-btn")},an.otherLoginText)))},F=_,u=e(72721),S=e(70344),K=e(90984),ln=e(51722),q=function(J){var Q=J.componentCls,an=J.antCls,An=J.iconCls,kn=J.colorTextTertiary,xn=J.colorPrimary,Pn=J.colorBorder,hn=J.borderRadius;return o()(o()(o()({},"".concat(Q,"-container"),o()(o()(o()({display:"flex",justifyContent:"space-between",minWidth:960,height:"100vh",minHeight:600,overflow:"auto"},"".concat(Q,"-bg"),o()({width:"40%",height:"100%",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},"".concat(Q,"-info"),o()({margin:"185px 48px 0 48px",color:"#fff",fontWeight:J.fontWeightStrong,fontSize:56,fontFamily:"PingFangSC"},"".concat(Q,"-start"),{marginTop:22,color:"#f4f4f4",fontWeight:J.fontWeightStrong,fontSize:32,letterSpacing:0}))),"".concat(Q,"-card"),o()(o()(o()({display:"flex",flex:1,alignItems:"center",justifyContent:"center",height:"100%",minHeight:600,backgroundColor:"#fff"},"".concat(Q,"-locale"),{position:"absolute",top:24,right:24,color:kn,fontFamily:"PingFangSC-Regular",cursor:"pointer"}),"".concat(Q,"-board"),{position:"absolute",top:48}),"".concat(Q,"-content"),o()(o()(o()(o()(o()(o()(o()(o()(o()({marginTop:-60,width:404},"".concat(Q,"-logo"),{display:"block",height:68,margin:"0 auto",marginBottom:40}),"".concat(Q,"-activate-logo, ").concat(Q,"-reigster-logo"),{display:"block",height:68,margin:"0 auto"}),"".concat(Q,"-register, ").concat(Q,"-activate"),o()({},"".concat(an,"-form-item-with-help"),{marginBottom:24})),"".concat(Q,"-form"),o()(o()(o()(o()(o()({width:"100%","input::placeholder":{fontSize:J.fontSize}},"".concat(an,"-form-item"),{marginBottom:24,paddingBottom:0}),"".concat(an,"-input-affix-wrapper"),o()(o()(o()({},"".concat(an,"-input:not(").concat(an,"-input-disabled)"),{boxShadow:"inset 0 0 0 1000px white !important"}),"".concat(an,"-input:-internal-autofill-selected"),{boxShadow:"inset 0 0 0 1000px white !important"}),"".concat(an,"-input:focus:-internal-autofill-selected"),{boxShadow:"inset 0 0 0 1000px white !important"})),"".concat(an,"-input-affix-wrapper ").concat(an,"-input:not(:first-child)"),{paddingLeft:8}),"".concat(an,"-input-affix-wrapper-focused"),{borderColor:xn}),"".concat(Q,"-form-focus-input"),o()({},"".concat(an,"-input-prefix"),o()({},"".concat(An),{color:xn})))),"".concat(Q,"-auth-code"),o()(o()(o()({display:"flex",alignItems:"start",width:"100%",marginBottom:24,paddingBottom:0},"> ".concat(an,"-space-item:first-child"),{flex:1}),"".concat(an,"-form-item"),{marginBottom:0}),"".concat(Q,"-code-btn"),o()(o()({position:"relative",height:38,border:"1px solid ".concat(Pn),borderRadius:hn,cursor:"pointer",img:{height:38,borderRadius:hn}},"".concat(Q,"-code-mask"),{position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",height:38,color:"#fff",background:"rgba(0, 0, 0, 0.5)",borderRadius:hn,cursor:"pointer",opacity:0,transition:"opacity 0.3s",inset:0}),"&.".concat(Q,"-error, &:hover"),o()({},"".concat(Q,"-code-mask"),{opacity:1})))),"".concat(Q,"-submit-btn"),{}),"".concat(Q,"-switch-btn"),{marginTop:24,textAlign:"center",cursor:"pointer"}),"".concat(Q,"-watermark-wrapper"),o()({position:"absolute",bottom:40,width:404,textAlign:"center"},"".concat(Q,"-watermark"),{height:16})),"".concat(Q,"-alert"),{marginBottom:24,borderRadius:hn}))),"@media (max-height: 650px)",o()({},"".concat(Q,"-watermark-wrapper"),{position:"absolute",top:600}))),"".concat(Q,"-container-with-board"),o()({},"".concat(Q,"-card"),o()({},"".concat(Q,"-content"),{marginTop:0}))),"".concat(Q,"-container-mobile"),o()(o()(o()({flexDirection:"column",minWidth:"auto"},"".concat(Q,"-banner"),{height:"25%"}),"".concat(Q,"-bg"),{width:"100%"}),"".concat(Q,"-card"),o()(o()(o()({alignItems:"start",width:"100%",height:"75%",marginTop:-48,padding:"0 32px",borderRadius:"16px 16px 0 0",position:"relative"},"".concat(Q,"-board"),{top:8,left:24}),"".concat(Q,"-locale"),{top:8}),"".concat(Q,"-content"),o()(o()({width:"100%",marginTop:40},"".concat(Q,"-logo"),{height:48,marginBottom:24}),"".concat(Q,"-watermark-wrapper"),{width:"100%",position:"static",marginTop:96}))))},cn=function(gn){var J=(0,ln.A)("Login",function(Q){return[q(Q)]});return J(gn)},_n=function(J){var Q=J.logo,an=J.bgImage,An=J.title,kn=J.description,xn=J.board,Pn=J.alertProps,hn=J.showLocale,G=J.locale,V=J.locales,On=J.loginProps,dn=J.otherLoginProps,pn=J.registerProps,Cn=J.activateFormProps,yn=J.enableRegister,Rn=J.showAuthCode,fn=J.showOtherLoginButton,Tn=J.authCodeImg,Bn=J.onAuthCodeImgChange,Nn=J.isMobile,qn=J.style,Qn=qn===void 0?{}:qn,En=(0,T.useContext)(H.default.ConfigContext),Yn=En.getPrefixCls,Kn=En.theme,Hn=Yn("login"),$n=cn(Hn),Zn=$n.wrapSSR,oe=(0,Z.Z)(J,{defaultValue:!1,valuePropName:"showRegister",trigger:"onShowRegisterChange"}),Re=h()(oe,2),ue=Re[0],pe=Re[1],Ln=(0,Z.Z)(J,{defaultValue:!1,valuePropName:"showActivate",trigger:"onShowActivateChange"}),Sn=h()(Ln,2),In=Sn[0],Mn=Sn[1],bn=(On==null?void 0:On.loading)||(pn==null?void 0:pn.loading)||(dn==null?void 0:dn.loading),Dn=(0,T.useCallback)(function(){bn&&Y.yw.warning(G.isLoadingWarn),pe(!ue)},[ue,bn]),mn=(0,T.useCallback)(function(){bn&&Y.yw.warning(G.isLoadingWarn),Mn(!In)},[In,bn]),Un=!ue;return Zn((0,l.tZ)(I.Z,null,(0,l.tZ)("div",{className:sn()("".concat(Hn,"-container"),o()(o()({},"".concat(Hn,"-container-with-board"),xn),"".concat(Hn,"-container-mobile"),Nn)),style:Qn},(0,l.tZ)("div",{className:"".concat(Hn,"-bg"),style:{backgroundImage:"url(".concat(an,")")}},(0,l.tZ)("div",{className:"".concat(Hn,"-info")},An&&(0,l.tZ)("div",{className:"".concat(Hn,"-welcome")},An),kn&&(0,l.tZ)("div",{className:"".concat(Hn,"-start")},kn))),(0,l.tZ)("div",{className:"".concat(Hn,"-card")},hn&&(0,l.tZ)(K.Z,{locales:V,className:"".concat(Hn,"-locale")}),xn&&(0,l.tZ)("div",{className:"".concat(Hn,"-board")},xn),(0,l.tZ)("div",{className:"".concat(Hn,"-content")},In?(0,l.tZ)(T.Fragment,null,(0,l.tZ)("img",{src:Q,alt:"",className:"".concat(Hn,"-activate-logo")}),(0,l.tZ)(d.Z,{style:{marginTop:14,marginBottom:20}}),(0,l.tZ)(k.Z.Title,{level:3},G.activeTitle),(0,l.tZ)(k.Z.Paragraph,null,G.activeTitleDescrition),(0,l.tZ)(c,r()({},Cn,{locale:G,errorMessage:Pn==null?void 0:Pn.message,goBack:mn}))):(0,l.tZ)(T.Fragment,null,ue?(0,l.tZ)(T.Fragment,null,(0,l.tZ)("img",{src:Q,alt:"",className:"".concat(Hn,"-reigster-logo")}),(0,l.tZ)(d.Z,{style:{marginTop:14,marginBottom:20}}),(0,l.tZ)(k.Z.Title,{level:3},G.registerTitle),(0,l.tZ)(en,r()({},pn,{locale:G,errorMessage:Pn==null?void 0:Pn.message}))):(0,l.tZ)(T.Fragment,null,(0,l.tZ)("img",{src:Q,alt:"",className:"".concat(Hn,"-logo")}),(0,l.tZ)(F,r()({},On,{otherLoginProps:dn,locale:G,errorMessage:Pn==null?void 0:Pn.message,showAuthCode:Rn,showOtherLoginButton:fn,authCodeImg:Tn,onAuthCodeImgChange:Bn})))),!!yn&&(0,l.tZ)("div",{className:"".concat(Hn,"-switch-btn")},(0,l.tZ)(v.ZP,{type:"link",onClick:Dn,"data-testid":"login.register.btn"},ue?G.switchLoginLabel:G.switchRegisterLabel)),Un?(0,l.tZ)("div",{className:"".concat(Hn,"-watermark-wrapper"),style:{paddingLeft:Rn?96:0}},(0,l.tZ)("img",{src:Kn!=null&&Kn.isDark?S.Z:u.Z,alt:"",className:"".concat(Hn,"-watermark")})):null)))))},vn=(0,y.Z)({componentName:"Login",defaultLocale:f.Z})(_n)},94942:function(t,n,e){"use strict";e.d(n,{Z:function(){return tn}});var a=e(48305),r=e.n(a),X=e(85755),o=e(89677),z=e(32699),h=e(63415),Z=e(75271),H=e(46880),I=e(96455),d=e(82092),k=e.n(d),v=e(51722),Y=function(U){var s=U.componentCls,p=U.antCls;return k()({},"".concat(s,"-container"),{marginTop:21,backgroundColor:"transparent",userSelect:"none",ul:k()(k()({backgroundColor:"transparent",li:k()({paddingRight:"0 !important"},"".concat(p,"-menu-title-content"),{padding:"0 20px",borderRadius:10,transition:"0.6s","&:hover":{backgroundColor:"#e4e8f5"}})},"".concat(p,"-menu-item:not(").concat(p,"-menu-item-selected):hover"),{backgroundColor:"transparent !important"}),"".concat(p,"-menu-item-selected"),k()(k()({backgroundColor:"transparent !important"},"".concat(p,"-menu-title-content"),{backgroundColor:"#d7e2fc",a:{color:"transparent",fontFamily:"SourceSansPro-Semibold, SourceSansPro-Regular",background:"linear-gradient(-45deg, #002bff 0%, #0080ff 100%)",backgroundClip:"text"}}),"&::after",{display:"none"}))})},O=function(b){var U=(0,v.A)("NavMenu",function(s){return[Y(s)]});return U(b)},sn=e(72075),T=e(56517),y=function(U){var s=U.menuList,p=U.className,m=U.style,i=U.navigationAriaLabel,g=U.locale,R=(0,Z.useContext)(X.default.ConfigContext),P=R.getPrefixCls,M=P("menu"),w=O(M),x=w.wrapSSR,N=(0,Z.useState)(["0"]),C=r()(N,2),l=C[0],$=C[1],nn=(0,Z.useState)([]),B=r()(nn,2),en=B[0],on=B[1],un=(0,Z.useState)(null),c=r()(un,2),f=c[0],E=c[1];(0,Z.useEffect)(function(){typeof window!="undefined"&&E({pathname:window.location.pathname})},[]);var A=(0,I.Z)(),rn=(0,Z.useCallback)(function(j){var L,_=(L=f==null?void 0:f.pathname)!==null&&L!==void 0?L:"";try{for(var F=0;F<j.length;F++){var u=j[F],S=u.link,K=u.openNewTab,ln=u.href,q=u.key,cn=u.children,_n=(0,z.isArray)(S)?S:[S],vn=_n.some(function(gn){return(0,h.Bo)(gn.replace(/^https?:\/\//,"")).test(_)});if(vn){if(K||ln)return!1;$([q]),on(j);return}cn!=null&&cn.length&&rn(cn)}}catch(gn){console.log("error",gn)}},[f]);(0,Z.useEffect)(function(){rn(s)},[s,rn]);var D=(0,Z.useCallback)(function(j){var L=j.selectedKeys;en.some(function(_){return _.key===L[0]&&_.openNewTab})||$(L)},[$,en]),W=(0,Z.useCallback)(function(j){var L=(0,z.isArray)(j)?j:[j];A==null||A(L[0])},[A]);return x((0,T.tZ)("div",{className:"".concat(M,"-container ").concat(p||""),style:m,role:"navigation","aria-label":i!=null?i:g==null?void 0:g.navigationLabel},(0,T.tZ)(o.Z,{style:{height:"100%",borderRight:0},defaultSelectedKeys:["0"],selectedKeys:l,onSelect:D,mode:"inline",theme:"light"},en.map(function(j){var L;return(0,T.tZ)(o.Z.Item,{key:j.key,disabled:(L=j.disabled)!==null&&L!==void 0?L:!1},j.openNewTab?(0,T.tZ)("a",{id:j.id,href:j.link,target:"_blank",rel:"noreferrer"},j.title):(0,T.tZ)("a",{id:j.id,onClick:function(){return W(j.link)}},j.title))}))))},tn=(0,H.Z)({componentName:"NavMenu",defaultLocale:sn.Z})(y)},80719:function(t,n,e){"use strict";e.r(n);var a=e(48305),r=e.n(a),X=e(75271),o=e(76359),z=e(67453),h=e(72588),Z=e(58229),H=e(89522),I=e(22355),d=e(33098),k=e(76621),v=e(16605),Y=e(887),O=e(56517);n.default=function(){var sn=(0,X.useState)(!1),T=r()(sn,2),y=T[0],tn=T[1],b=function(){var m=new Promise(function(i){setTimeout(function(){i()},1e3)});return tn(!0),m.then(function(){tn(!1),o.yw.success("Refreshed successfully")}),m},U=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"New York No. 1 Lake Park"},{key:"3",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"4",name:"Jim Green",age:42,address:"New York No. 1 Lake Park"},{key:"5",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"6",name:"Jim Green",age:42,address:"New York No. 1 Lake Park"},{key:"7",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"8",name:"Jim Green",age:42,address:"New York No. 1 Lake Park"},{key:"9",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"10",name:"Jim Green",age:42,address:"New York No. 1 Lake Park"}],s=[{title:"Name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"}];return(0,O.tZ)(v.Z,{ghost:!0,loading:y,header:{title:"Page Title",subTitle:"Subtitle",onBack:function(){},document:"https://www.oceanbase.com",reload:{spin:y,onClick:function(){b()}},breadcrumb:{items:[{href:"",title:"Level 1 Page"},{href:"",title:"Level 2 Page"},{title:"Current Page"}]},extra:[(0,O.tZ)(z.ZP,{key:"1",onClick:function(){h.Z.confirm({title:"Are you sure you want to run this task?",onOk:function(){return b().then(function(){h.Z.success({title:"Task submitted successfully!"})})}})}},"Secondary"),(0,O.tZ)(z.ZP,{key:"2",type:"primary"},"Primary"),(0,O.tZ)(Z.Z,{menu:{items:[{label:"Dropdown Menu",key:"1"},{label:"Dropdown Menu 2",key:"2"},{label:"Dropdown Menu 3",key:"3"}]}},(0,O.tZ)(z.ZP,{key:"3",icon:(0,O.tZ)(Y.Z,null)}))]},footer:[(0,O.tZ)(z.ZP,{type:"primary"},"Submit"),(0,O.tZ)(z.ZP,null,"Reset")],footerToolBarProps:{extra:"Some extra message"}},(0,O.tZ)(H.Z,{size:16,direction:"vertical"},(0,O.tZ)(I.Z,null,(0,O.tZ)(d.Z,null,(0,O.tZ)(d.Z.Item,{label:"Creator"},"Lili Qu"),(0,O.tZ)(d.Z.Item,{label:"Phone"},"1810000000"),(0,O.tZ)(d.Z.Item,{label:"Address"},"New York No. 1 Lake Park"),(0,O.tZ)(d.Z.Item,{label:"Related Form"},(0,O.tZ)("a",null,"421421")),(0,O.tZ)(d.Z.Item,{label:"Created At"},"2017-01-10"),(0,O.tZ)(d.Z.Item,{label:"Remarks"},"Sample remarks"))),(0,O.tZ)(I.Z,{tabList:[{tab:"Basic Info",key:"base"},{tab:"Details",key:"info"}]},(0,O.tZ)(k.Z,{columns:s,dataSource:U}))))}},78395:function(t,n,e){"use strict";e.r(n);var a=e(75271),r=e(22355),X=e(33857),o=e(67453),z=e(16605),h=e(56517);n.default=function(){return(0,h.tZ)(z.Z,{header:{title:"Dashboard"}},(0,h.tZ)(r.Z,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"calc(100vh - 72px - 24px)"}},(0,h.tZ)(X.Z,{image:X.Z.PRESENTED_IMAGE_COLORED,title:"Create your first cluster"},(0,h.tZ)(o.ZP,{type:"primary"},"Create Now"))))}},16605:function(t,n,e){"use strict";e.d(n,{Z:function(){return un}});var a=e(82092),r=e.n(a),X=e(26068),o=e.n(X),z=e(68585),h=e.n(z),Z=e(48305),H=e.n(Z),I=e(67825),d=e.n(I),k=e(51800),v=e(17078),Y=e(37565),O=e(56514),sn=e(82187),T=e.n(sn),y=e(32699),tn=e(75271),b=e(85755),U=e(65487),s=e(67453),p=e(89522),m=e(45689),i=e(54650),g=e(59037),R=e(46880),P=e(37348),M=e(96455),w=e(56517),x=function(c){var f=c.route,E=c.params,A=c.routes,rn=c.paths,D=A.indexOf(f),W=D===A.length-1,j=f.title||f.breadcrumbName,L=f.href||A.slice(0,D+1).map(function(F){return F.path}).join("/"),_=(0,M.Z)();return W?(0,w.tZ)("span",null,j):(0,w.tZ)("a",{onClick:function(){_==null||_(L)}},j)},N=e(84347),C=e(51722),l=e(29416),$=function(f){var E,A=f.antCls,rn=f.proComponentsCls,D=f.componentCls,W=f.colorBgLayout,j=f.fontSizeHeading2,L=f.padding,_=f.paddingLG;return o()(r()(r()(r()(r()({},"".concat(D),r()(r()(r()({minHeight:"100vh",backgroundColor:W},"".concat(rn,"-grid-content"),{minHeight:"auto"}),"".concat(A,"-page-header").concat(D,"-warp-page-header, ").concat(A,"-page-header").concat(D,"-wrap-page-header"),(E={paddingInlineStart:"".concat(f.paddingXL,"px"),paddingInlineEnd:"".concat(f.paddingXL,"px"),paddingBlockStart:"".concat(_,"px"),paddingBlockEnd:"".concat(L,"px")},r()(r()(r()(r()(r()(r()(r()(r()(r()(r()(E,"".concat(A,"-page-header-breadcrumb"),{paddingBlockStart:0}),"".concat(A,"-page-header-heading"),{paddingBlockStart:0}),"".concat(A,"-page-header-heading-title"),{fontSize:j,fontWeight:f.fontWeightStrong,marginInlineEnd:f.marginXS}),"".concat(A,"-page-header-heading-sub-title"),{fontSize:f.fontSize}),"".concat(A,"-page-header-heading-reload"),{cursor:"pointer",fontSize:f.fontSizeLG,marginTop:f.marginXXS}),"".concat(A,"-page-header-heading-document-divider"),{marginInline:0,height:f.size}),"".concat(A,"-page-header-heading-document-icon"),{display:"inline-block",color:f.colorIcon,fontSize:f.fontSizeLG,cursor:"pointer","&:hover":{color:f.colorLinkHover},"&:active":{color:f.colorLinkActive}}),"".concat(A,"-page-header-heading-document-default-icon"),{marginBottom:-3}),"".concat(A,"-page-header-heading-left"),{marginBlock:0}),"".concat(A,"-page-header-heading-extra"),{marginBlock:0}),r()(E,"".concat(A,"-page-header-footer"),r()({marginBlockStart:0},"".concat(A,"-tabs-top > ").concat(A,"-tabs-nav::before"),{borderBottom:"1px solid ".concat(f.colorBorderSecondary)})))),"".concat(D,"-children-container"),r()(r()({paddingInline:f.paddingXL,paddingBlockStart:0,paddingBlockEnd:L},"& > ".concat(A,"-tabs-top:not(").concat(A,"-tabs-card):first-child"),{marginTop:-L}),"& > ".concat(A,"-tabs-top > ").concat(A,"-tabs-nav::before"),{borderBottom:"1px solid ".concat(f.colorBorderSecondary)}))),"".concat(D,"-no-page-header"),r()({},"".concat(D,"-children-container"),{paddingBlockStart:_})),"".concat(D,"-with-footer "),{paddingBottom:64}),"".concat(D,":not(").concat(D,"-max-width)"),r()(r()({},"".concat(D,"-warp-page-header,").concat(D,"-wrap-page-header"),r()({},"".concat(A,"-page-header-footer"),r()({},"".concat(A,"-tabs-top > ").concat(A,"-tabs-nav::before"),{left:-f.paddingXL,right:-f.paddingXL}))),"".concat(D,"-children-container"),r()({},"& > ".concat(A,"-tabs-top > ").concat(A,"-tabs-nav::before"),{left:-f.paddingXL,right:-f.paddingXL}))),(0,l.T)(o()(o()({},f),{},{componentCls:"".concat(rn,"-footer-bar")})))},nn=function(c){var f=(0,C.A)("PageContainer",function(E){return[$(E)]});return f(c)},B=["prefixCls","className","title","subTitle","onBack","backIcon","breadcrumb","extra","header","content","extraContent","tabList","tabBarExtraContent","footerToolBarProps","locale","loading"],en=function(f){var E=f.className,A=(0,k.uB)();return(0,w.tZ)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:E},(0,w.tZ)("g",{clipPath:"url(#".concat(A,")")},(0,w.tZ)("path",{d:"M7.99992 4.66667C7.99992 3.95942 7.71897 3.28115 7.21887 2.78105C6.71877 2.28095 6.0405 2 5.33325 2H1.33325V12H5.99992C6.53035 12 7.03906 12.2107 7.41413 12.5858C7.78921 12.9609 7.99992 13.4696 7.99992 14M7.99992 4.66667V14M7.99992 4.66667C7.99992 3.95942 8.28087 3.28115 8.78097 2.78105C9.28106 2.28095 9.95934 2 10.6666 2H14.6666V12H9.99992C9.46949 12 8.96078 12.2107 8.5857 12.5858C8.21063 12.9609 7.99992 13.4696 7.99992 14",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})),(0,w.tZ)("defs",null,(0,w.tZ)("clipPath",{id:A},(0,w.tZ)("rect",{width:"16",height:"16",fill:"white"}))))},on=function(f){var E,A=f.prefixCls,rn=f.className,D=f.title,W=f.subTitle,j=f.onBack,L=f.backIcon,_=f.breadcrumb,F=f.extra,u=f.header,S=f.content,K=f.extraContent,ln=f.tabList,q=f.tabBarExtraContent,cn=f.footerToolBarProps,_n=f.locale,vn=f.loading,gn=d()(f,B),J=(0,tn.useContext)(b.default.ConfigContext),Q=J.getPrefixCls,an=Q(),An=Q("pro-page-container",A),kn=nn(An),xn=kn.wrapSSR,Pn=U.ZP.useToken(),hn=Pn.token,G=(0,tn.useState)(null),V=H()(G,2),On=V[0],dn=V[1];(0,tn.useEffect)(function(){typeof window!="undefined"&&window.document&&dn(window.document.querySelector(".".concat(An)))},[An]);var pn=(0,g.Z)(On),Cn=pn==null?void 0:pn.width,yn=(E=gn.style)===null||E===void 0?void 0:E.maxWidth,Rn=typeof yn=="number"?yn:yn!=null&&yn.includes("px")?parseInt(yn):void 0,fn=Cn&&Cn>=Rn,Tn=u||{},Bn=Tn.reload,Nn=Tn.title,qn=Nn===void 0?D:Nn,Qn=Tn.subTitle,En=Qn===void 0?W:Qn,Yn=Tn.onBack,Kn=Yn===void 0?j:Yn,Hn=Tn.backIcon,$n=Hn===void 0?L||(0,w.tZ)(s.ZP,{style:{fontSize:hn.fontSizeLG},icon:(0,w.tZ)(v.Z,null)}):Hn,Zn=Tn.document,oe=Tn.breadcrumb,Re=oe===void 0?_:oe,ue=Tn.extra,pe=ue===void 0?F:ue,Ln=(0,y.isObject)(Bn)&&!tn.isValidElement(Bn)?Bn:{},Sn=T()("".concat(an,"-page-header-heading-reload"),Ln.className),In=typeof Zn=="string"?Zn:void 0,Mn=typeof Zn=="function"?Zn:void 0,bn=(Bn||En||Zn)&&(0,w.tZ)(p.Z,null,Bn&&(0,w.tZ)(m.Z,{title:_n.reload},(0,y.isObject)(Bn)&&tn.isValidElement(Bn)?Bn:(0,w.tZ)(Y.Z,h()({},Ln,{className:Sn}))),En,Zn&&(0,w.tZ)(p.Z,null,(0,w.tZ)(i.Z,{type:"vertical",className:"".concat(an,"-page-header-heading-document-divider")}),(0,w.tZ)(m.Z,{title:_n.viewDocument},(0,w.tZ)("a",{href:In,target:"_blank",rel:"noopener noreferrer",onClick:Mn,className:"".concat(an,"-page-header-heading-document-icon")},In||Mn?(0,w.tZ)(en,{className:"".concat(an,"-page-header-heading-document-default-icon")}):Zn)))),Dn=(u||qn||bn||Kn||Re||pe)&&o()(o()({},u),{},{title:qn,subTitle:bn,onBack:Kn,backIcon:$n,breadcrumb:Re&&o()({itemRender:function(re,ae,Wn,ie){return(0,w.tZ)(x,{route:re,params:ae,routes:Wn,paths:ie})}},Re),extra:pe}),mn=["title","subTitle","onBack","breadcrumb","extra","tags","avatar"].every(function(ne){return!(Dn!=null&&Dn[ne])})&&!S&&!K&&!ln&&!q,Un=T()(r()(r()({},"".concat(An,"-no-page-header"),mn),"".concat(An,"-max-width"),fn),rn);return xn((0,w.tZ)(O._z,h()({prefixCls:A,className:Un,title:qn,header:Dn,content:S,extraContent:K,tabList:ln,tabBarExtraContent:q,loading:vn===!0?(0,w.tZ)(N.Z,{matchWrapperHeight:!1}):vn,footerToolBarProps:o()({portalDom:!1},cn)},gn)))},un=(0,R.Z)({componentName:"PageContainer",defaultLocale:P.Z})(on)},84347:function(t,n,e){"use strict";var a=e(68585),r=e.n(a),X=e(26068),o=e.n(X),z=e(67825),h=e.n(z),Z=e(75271),H=e(52587),I=e(56517),d=["prefixCls","style","matchWrapperHeight"],k=function(Y){var O=Y.prefixCls,sn=Y.style,T=Y.matchWrapperHeight,y=T===void 0?!1:T,tn=h()(Y,d),b=(0,I.tZ)(H.Z,r()({size:"large",gray:!1,style:o()({position:"absolute",left:"calc(50% - 36px)",top:"calc(50% - 27px)"},sn)},tn));return y?(0,I.tZ)("div",{style:{height:"100%",position:"relative"}},b):b};n.Z=k},26939:function(t,n,e){"use strict";e.d(n,{Z:function(){return M}});var a=e(68585),r=e.n(a),X=e(48305),o=e.n(X),z=e(67825),h=e.n(z),Z=e(23912),H=e(65487),I=e(36038),d=e(23320),k=e(67453),v=e(32502),Y=e.n(v),O=e(75271),sn=e(46880),T=e(56450),y=e(64209),tn=e(76409),b=e(89522),U=e(60680),s=e(89633),p=e(56517),m=function(x){var N=x.value,C=x.locale,l=H.ZP.useToken(),$=l.token;return(0,p.tZ)("span",{style:{color:$.colorTextDescription}},C.pleaseRememberYourPassword,(0,p.tZ)(tn.Z.Text,{copyable:{text:N,icon:[(0,p.tZ)(b.Z,{key:"copy",size:$.marginXXS},(0,p.tZ)(U.Z,{"aria-hidden":!0}),(0,p.tZ)("a",null,C.copyPassword)),(0,p.tZ)(b.Z,{key:"copy-success",size:$.marginXXS},(0,p.tZ)(s.Z,{"aria-hidden":!0}),(0,p.tZ)("a",null,C.copyPassword))],tooltips:[C.copyPassword,C.copySuccessfully]},style:{marginLeft:$.marginXXS}}))},i=["value","locale","rules","onChange","generatePassword","generatePasswordRegex","onFocus","onBlur","autoComplete","readOnly"],g,R=(g=Z.Z.Item.useStatus.Context)!==null&&g!==void 0?g:O.createContext({}),P=function(x){var N,C,l=x.value,$=x.locale,nn=x.rules,B=x.onChange,en=x.generatePassword,on=x.generatePasswordRegex,un=x.onFocus,c=x.onBlur,f=x.autoComplete,E=x.readOnly,A=h()(x,i),rn=H.ZP.useToken(),D=rn.token,W=f!=null?f:"new-password",j=W==="current-password",L=(0,O.useState)(!1),_=o()(L,2),F=_[0],u=_[1],S=(0,O.useState)(!1),K=o()(S,2),ln=K[0],q=K[1],cn=(0,O.useState)(l),_n=o()(cn,2),vn=_n[0],gn=_n[1],J=(0,O.useId)(),Q=Z.Z.useFormItemChildFeedback(),an=O.useContext(R),An=!!(an!=null&&an.isFormItemInput),kn=An&&((N=an==null||(C=an.errors)===null||C===void 0?void 0:C.length)!==null&&N!==void 0?N:0)>0;(0,O.useEffect)(function(){gn(l)},[l]);var xn=$,Pn=nn||(0,T.fI)(xn),hn=(0,O.useCallback)(function(fn){var Tn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(j){var Bn=!fn;return{passed:!Bn,failedRuleCount:Bn?1:0,riskLevel:Bn?"none":"success",fieldError:Bn&&Tn?xn.emptyMessage:void 0,ruleStatuses:[],fieldErrors:[]}}return nn?(0,T.QB)(fn,nn,xn,{touched:Tn}):(0,T.xw)(fn,xn,{touched:Tn})},[xn,j,nn]),G=!!vn||F,V=hn(vn,G||ln),On=ln&&!kn?V.fieldError:void 0,dn=!j&&vn&&V.passed&&!On&&!kn&&ln,pn=(0,O.useMemo)(function(){return kn?null:On?{help:On,validateStatus:"error"}:dn?{help:(0,p.tZ)(m,{value:vn,locale:xn})}:null},[kn,On,dn,vn,xn]);(0,O.useEffect)(function(){Q&&Q.setFeedback(pn)},[Q,pn]),(0,O.useEffect)(function(){if(Q)return function(){return Q.setFeedback(null)}},[Q]);var Cn=!Q&&(On||dn),yn=function fn(){var Tn=new(Y())(on).gen();return on.test(Tn)?Tn:fn()},Rn=(0,p.tZ)(I.Z.Password,r()({},A,{value:l,autoComplete:W,readOnly:E,"aria-haspopup":j?void 0:"dialog","aria-describedby":j?void 0:J,onChange:function(Tn){var Bn,Nn=Tn==null||(Bn=Tn.target)===null||Bn===void 0?void 0:Bn.value;gn(Nn),B==null||B(Nn)},onFocus:function(Tn){u(!0),un==null||un(Tn)},onBlur:function(Tn){q(!0),u(!1),c==null||c(Tn)},placeholder:on?xn.generatePlaceholder:xn.placeholder}));return(0,p.tZ)("div",{style:{width:"100%"}},(0,p.tZ)("div",{style:{display:"flex"}},j?Rn:(0,p.tZ)(d.Z,{open:F,onOpenChange:function(Tn){Tn||u(!1)},trigger:[],placement:"rightTop",popupAlign:{offset:[16,0]},content:(0,p.tZ)(T.ZP,{isTouched:G,value:vn,isValidating:!1,rules:Pn,ruleStatuses:V.ruleStatuses,riskLevel:V.riskLevel,rulesRegionId:J,rulesAriaLabel:xn.passwordStrengthRules}),overlayStyle:{maxWidth:400},overlayInnerStyle:{padding:"".concat(D.padding/2,"px ").concat(D.padding,"px ").concat(D.padding,"px ").concat(D.padding,"px")}},Rn),on&&(0,p.tZ)(k.ZP,{onClick:function(){q(!0);var Tn=en instanceof Function?en():yn();gn(Tn),B==null||B(Tn)},style:{marginLeft:8}},xn.randomlyGenerate)),Cn&&(0,p.tZ)("div",{style:{marginTop:D.marginXXS,fontSize:D.fontSizeSM,lineHeight:D.lineHeightSM}},dn?(0,p.tZ)(m,{value:vn,locale:xn}):(0,p.tZ)("div",{role:"alert",style:{color:D.colorError}},On)))},M=(0,sn.Z)({componentName:"Password",defaultLocale:y.Z})(P)},33573:function(t,n,e){"use strict";var a=e(68585),r=e.n(a),X=e(26068),o=e.n(X),z=e(31759),h=e.n(z),Z=e(82092),H=e.n(Z),I=e(67825),d=e.n(I),k=e(75271),v=e(31374),Y=e(85755),O=e(65487),sn=e(85779),T=e(77477),y=e(46953),tn=e(82187),b=e.n(tn),U=e(97545),s=e(56517),p=["loading","bordered","ghost","title","tabs","headerBordered","bodyStyle","prefixCls","className","style"],m=function(g){var R=g.loading,P=g.bordered,M=g.ghost,w=g.title,x=g.tabs,N=g.headerBordered,C=g.bodyStyle,l=g.prefixCls,$=g.className,nn=g.style,B=d()(g,p),en=(0,k.useContext)(Y.default.ConfigContext),on=en.getPrefixCls,un=en.iconPrefixCls,c=en.card,f=on("pro-card",l),E=(0,U.Z)(f),A=E.wrapSSR,rn=O.ZP.useToken(),D=rn.token,W=(0,T.Et)(C==null?void 0:C.padding)||M,j=b()(H()(H()(H()(H()({},"".concat(f,"-has-title"),!!w),"".concat(f,"-no-body-horizontal-padding"),W),"".concat(f,"-no-divider"),!N),"".concat(f,"-contain-tabs"),!!x),c==null?void 0:c.className,$);return A((0,s.tZ)(v.Z,r()({loading:R===!0?(0,s.tZ)(sn.Z,{active:!0,title:!1,paragraph:{rows:4}}):R,prefixCls:l,bordered:P!=null?P:c!=null&&c.variant?(c==null?void 0:c.variant)==="outlined":void 0,ghost:M,title:w,tabs:h()(x)==="object"?o()({size:"large"},x):x,headerBordered:N!=null?N:c==null?void 0:c.divided,bodyStyle:C,className:j,style:o()(o()({},c==null?void 0:c.style),nn),collapsibleIconRender:function(_){var F=_.collapsed;return(0,s.tZ)(y.Z,{className:"".concat(un," ").concat(un,"-right ").concat(f,"-collapsible-icon"),style:{transition:"transform 0.2s",transform:F?void 0:"rotate(90deg)",color:D.colorTextSecondary}})}},B)))};m.isProCard=v.Z.isProCard,m.Divider=v.Z.Divider,m.TabPane=v.Z.TabPane,m.Group=v.Z.Group,n.Z=m},97545:function(t,n,e){"use strict";e.d(n,{l:function(){return H}});var a=e(26068),r=e.n(a),X=e(82092),o=e.n(X),z=e(22355),h=e(11862),Z=e(51722),H=function(d,k){var v,Y,O=d.componentCls,sn=d.antCls,T=d.prefixCls,y=k||O,tn="".concat(sn,"-table"),b="".concat(sn,"-tabs"),U="".concat(T,"-tabs");return Y={},o()(o()(o()(o()(o()(o()(o()(o()(o()(o()(Y,"div".concat(y),{borderRadius:d.borderRadiusLG}),"".concat(y).concat(y,"-no-divider"),o()({},"".concat(y,"-header"),{paddingBlockStart:d.paddingLG})),"".concat(y).concat(y,"-size-small").concat(y,"-no-divider"),o()({},"".concat(y,"-header"),{paddingBlockStart:d.paddingSM})),"".concat(y).concat(y,"-border"),{border:"".concat(d.lineWidth,"px solid ").concat(d.colorBorderSecondary)}),"".concat(y,":not(").concat(y,"-border):not(").concat(y,"-ghost)"),{boxShadow:"0 1px 2px 0 rgba(0, 0, 0, 0.03),0 1px 6px -1px rgba(0, 0, 0, 0.02),0 2px 4px 0 rgba(0, 0, 0, 0.02)"}),"".concat(y,":not(").concat(y,"-size-small):not(").concat(y,"-ghost)"),o()(o()({},"".concat(y,"-body"),{paddingBlock:d.paddingLG}),"&".concat(y,"-has-title").concat(y,"-no-divider"),o()({},"".concat(y,"-body"),{paddingBlockStart:d.padding}))),"".concat(y).concat(y,"-size-small").concat(y,"-ghost"),o()(o()({},"".concat(y,"-header"),{paddingInline:0}),"".concat(y,"-body"),{paddingBlock:0,paddingInline:0})),"&".concat(y,"-has-title").concat(y,"-no-divider:not(").concat(y,"-contain-tabs)"),o()({},"".concat(y,"-body"),o()({},"& > ".concat(tn,"-wrapper ").concat(tn,":not(").concat(tn,"-bordered):first-child"),{marginTop:-((v=d.Table)===null||v===void 0?void 0:v.cellPaddingBlock)}))),"".concat(y).concat(y,"-no-body-horizontal-padding:not(").concat(y,"-contain-tabs)"),r()(o()({},"".concat(y,"-header"),{paddingBlockEnd:d.padding}),z.Z.genTableStyle(d.paddingLG,d))),"".concat(y).concat(y,"-no-body-horizontal-padding").concat(y,"-size-small:not(").concat(y,"-contain-tabs)"),r()(o()({},"".concat(y,"-header"),{paddingBlockEnd:d.paddingXS}),z.Z.genTableStyle(d.paddingSM,d))),o()(Y,"".concat(y),o()({},"".concat(y,"-tabs"),r()(o()({},"".concat(b,"-top, ").concat(b,"-bottom"),o()({},">".concat(b,"-nav ").concat(b,"-nav-list"),{marginBlockStart:0,paddingInlineStart:d.marginLG})),h.Z.genTabsStyle(r()(r()({},d),{},{componentCls:b,prefixCls:U})))))};n.Z=function(I){var d=(0,Z.A)("ProCard",function(k){return[H(k)]});return d(I)}},41890:function(t,n,e){"use strict";e.d(n,{Z:function(){return un}});var a=e(68585),r=e.n(a),X=e(26068),o=e.n(X),z=e(82092),h=e.n(z),Z=e(48305),H=e.n(Z),I=e(67825),d=e.n(I),k=e(75271),v=e(40493),Y=e(85755),O=e(76621),sn=e(33857),T=e(82187),y=e.n(T),tn=e(32699),b=e(95050),U=e(22355),s=e(51722),p=e(97545),m=function(f){var E=f.antCls,A=f.componentCls,rn=f.proComponentsCls,D="".concat(rn,"-card");return o()(h()({},"".concat(A),h()(h()(h()(h()({},"".concat(rn,"-query-filter-actions"),h()({},"".concat(E,"-space").concat(E,"-space-horizontal").concat(E,"-space-align-center"),{flexDirection:"row-reverse"})),"& > ".concat(D,", ").concat(D).concat(A,"-search-light-filter"),{boxShadow:"none !important"}),"".concat(D,":not(").concat(D,"-no-divider)"),h()({},"".concat(D,"-body"),h()({},"".concat(A,"-list-toolbar-container"),{borderBottom:"".concat(f.lineWidth,"px solid ").concat(f.colorBorderSecondary)}))),"".concat(D).concat(D,"-no-padding"),o()(h()({},"".concat(D,"-body"),h()({paddingInline:0},"".concat(A,"-list-toolbar-container"),h()({paddingInline:f.paddingLG},"".concat(A,"-list-toolbar-title"),{fontWeight:f.fontWeightStrong}))),U.Z.genTableStyle(f.paddingLG,o()(o()({},f),{},{componentCls:D}))))),(0,p.l)(f,D))},i=function(c){var f=(0,s.A)("ProTable",function(E){return[m(E)]});return f(c)},g=e(31759),R=e.n(g),P=["tooltip","tip","children"];function M(c){var f;return(f=c.tooltip)!==null&&f!==void 0?f:c.tip}function w(c){if(c==null||c==="")return!1;if(k.isValidElement(c)||Array.isArray(c))return!0;if(R()(c)==="object"&&c!==null){var f=c,E=f.title,A=f.icon;return A?!0:E!=null&&E!==""}return!0}function x(c){return c!=null&&c.length?c.some(function(f){var E;return w(M(f))?!0:(E=f.children)!==null&&E!==void 0&&E.length?x(f.children):!1}):!1}function N(c){return c!=null&&c.length?c.map(function(f){var E=f.tooltip,A=f.tip,rn=f.children,D=d()(f,P);return o()(o()({},D),{},{children:rn&&N(rn)})}):c}function C(c,f,E){if(f!=null&&f.length){if(c.key!=null){var A=f.find(function(D){return D.key===c.key});if(A)return A}if(c.dataIndex!=null){var rn=f.find(function(D){var W,j;return D.dataIndex===c.dataIndex||((W=D.dataIndex)===null||W===void 0?void 0:W.toString())===((j=c.dataIndex)===null||j===void 0?void 0:j.toString())});if(rn)return rn}return f[E]}}function l(c,f){return c!=null&&c.length?c.map(function(E,A){var rn,D=C(E,f,A),W=D?M(D):void 0;return o()(o()(o()({},E),W!==void 0?{tooltip:W}:{}),{},{children:(rn=E.children)!==null&&rn!==void 0&&rn.length?l(E.children,D==null?void 0:D.children):E.children})}):c}var $=e(56517);function nn(c){var f=c.columns,E=c.mergeTooltip,A=c.innerBordered,rn=c.tableCls,D=c.pagination,W=c.restLocale,j=c.emptyTextNode,L=c.userTableViewRender;return function(_,F){var u=(0,$.tZ)(O.Z,r()({},_,{columns:E?l(_.columns,f):_.columns,innerBordered:A,className:y()(rn,_.className),pagination:D,locale:o()(o()({},W),{},{emptyText:j})}));return L?L(_,u):u}}var B=["form","headerTitle","options","optionsRender","toolbar","toolBarRender","size","bordered","innerBordered","outerBordered","cardBordered","expandable","rowSelection","pagination","footer","locale","cardProps","prefixCls","tableClassName","className","tableViewRender","columns"],en=["emptyText"];function on(c){var f=c.form,E=c.headerTitle,A=c.options,rn=c.optionsRender,D=c.toolbar,W=c.toolBarRender,j=c.size,L=c.bordered,_=c.innerBordered,F=c.outerBordered,u=c.cardBordered,S=c.expandable,K=c.rowSelection,ln=c.pagination,q=c.footer,cn=c.locale,_n=c.cardProps,vn=c.prefixCls,gn=c.tableClassName,J=c.className,Q=c.tableViewRender,an=c.columns,An=d()(c,B),kn=(0,k.useContext)(Y.default.ConfigContext),xn=kn.getPrefixCls,Pn=kn.card,hn=xn("table",vn),G=O.Z.useStyle(hn),V=H()(G,1),On=V[0],dn=O.Z.useDefaultPagination(ln),pn=y()(h()(h()(h()(h()({},"".concat(hn,"-expandable"),!(0,tn.isEmpty)(S)),"".concat(hn,"-selectable"),!!K),"".concat(hn,"-has-footer"),!!q),"".concat(hn,"-inner-bordered"),_),gn),Cn=xn("pro-form-light-filter",vn),yn=(0,b.Z)(Cn),Rn=yn.wrapSSR,fn=xn("pro-table",vn),Tn=i(fn),Bn=Tn.wrapSSR,Nn=y()(J),qn=cn||{},Qn=qn.emptyText,En=Qn===void 0?(0,$.tZ)(sn.Z,{image:sn.Z.PRESENTED_IMAGE_SIMPLE}):Qn,Yn=d()(qn,en),Kn=(0,tn.merge)({},Pn,typeof _n=="boolean"?{}:_n),Hn=xn("pro-card",vn),$n=(0,$.tZ)("div",{className:"".concat(hn,"-empty-wrapper")},typeof En=="function"?En():En),Zn=(0,k.useMemo)(function(){return x(an)},[an]),oe=(0,k.useMemo)(function(){return Zn?N(an):an},[an,Zn]),Re=(0,k.useMemo)(function(){if(!(!Zn&&!Q))return nn({columns:an,mergeTooltip:Zn,innerBordered:_,tableCls:pn,pagination:dn,restLocale:Yn,emptyTextNode:$n,userTableViewRender:Q})},[an,Zn,Q,_,pn,dn,Yn,$n]);return On(Rn(Bn((0,$.tZ)(v.Z,r()({defaultSize:"large",size:j,bordered:L||_,cardBordered:F?!0:u!=null?u:Pn!=null&&Pn.variant?(Pn==null?void 0:Pn.variant)==="outlined":void 0,form:o()({requiredMark:!1},f),headerTitle:E,options:A,optionsRender:rn,toolbar:D,toolBarRender:W,cardProps:o()(o()({},Kn),{},{className:y()(h()(h()(h()(h()({},"".concat(Hn,"-has-title"),!!E||A||A===void 0||rn||D||W),"".concat(Hn,"-no-divider"),!(Kn!=null&&Kn.headerBordered)&&!(Kn!=null&&Kn.divided)),"".concat(Hn,"-no-padding"),!0),"".concat(Hn,"-contain-tabs"),!!(Kn!=null&&Kn.tabs)),Kn==null?void 0:Kn.className),bodyStyle:o()({paddingTop:0,paddingBottom:0},Kn==null?void 0:Kn.bodyStyle)}),expandable:S?o()({columnWidth:!j||j==="large"?40:32},S):void 0,rowSelection:K,pagination:dn,footer:q,locale:o()(o()({},Yn),{},{emptyText:$n}),tableViewRender:Re,prefixCls:vn,tableClassName:pn,className:Nn,columns:oe},An)))))}on.Summary=v.Z.Summary;var un=on},99800:function(t,n,e){"use strict";e.d(n,{Z:function(){return j}});var a=e(68585),r=e.n(a),X=e(82092),o=e.n(X),z=e(48305),h=e.n(z),Z=e(15409),H=e(85755),I=e(48613),d=e(45689),k=e(82187),v=e.n(k),Y=e(75271),O=e(46880),sn=e(51722),T=function(_){var F=_.componentCls,u=_.boxShadowSecondary,S=_.colorTextQuaternary,K=_.colorTextSecondary;return o()({},"".concat(F,"-container"),o()(o()(o()(o()(o()(o()(o()({position:"fixed",zIndex:0,fontSize:14,cursor:"pointer",insetInlineEnd:24,insetBlockEnd:24},"&.".concat(F,"-container-dragged"),{cursor:"grab"}),"&.".concat(F,"-container-disabled"),{cursor:"not-allowed"}),"&.".concat(F,"-container-hide"),{transition:"all 0.3s"}),"@media screen and (max-width: 768px)",{display:"none"}),"&.".concat(F,"-container-hide-not-dragged:hover"),{insetInlineEnd:"0 !important"}),"".concat(F,"-hide"),o()(o()({position:"absolute",zIndex:0,display:"flex",alignItems:"center",justifyContent:"center",width:20,height:20,background:"rgba(0, 0, 0, 0.15)",borderRadius:20,transform:"scale(0)",cursor:"pointer",opacity:0,transition:"all 0.18s ease-out 0.18s",insetBlockStart:0,insetInlineEnd:-22,border:"none",padding:0,font:"inherit",appearance:"none",WebkitAppearance:"none","&:hover":{background:"rgba(0, 0, 0, 0.35)"}},"".concat(F,"-hide-icon"),{width:6,height:2,background:"#fff",borderRadius:4}),"&.".concat(F,"-hide-hovered"),{transform:"scale(1)",opacity:1})),"".concat(F,"-button"),o()(o()(o()(o()(o()(o()(o()({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",width:56,height:56,backgroundColor:"#fff",borderRadius:"50%",boxShadow:u,cursor:"pointer",transition:"background-color 0.2s ease 0.1s, opacity 0.2s ease 0s, transform 0.2s ease 0.1s",userSelect:"none","&:focus-visible":{outline:"2px solid ".concat(_.colorPrimary),outlineOffset:2}},"&".concat(F,"-button-primary"),{backgroundColor:"".concat(_.colorPrimary," !important")}),"&".concat(F,"-button-small"),{width:40,height:40}),"&".concat(F,"-button-disabled"),{backgroundColor:"".concat(S," !important"),cursor:"not-allowed"}),"&:hover",{opacity:1}),"".concat(F,"-button-loading"),o()(o()({position:"absolute",width:56,height:56,color:_.colorPrimary,fontSize:56,insetBlockStart:0,insetInlineEnd:0},"&".concat(F,"-button-loading-primary"),{color:"#fff"}),"&".concat(F,"-button-loading-small"),{width:40,height:40,fontSize:40,lineHeight:40})),"".concat(F,"-button-close"),o()(o()(o()({position:"absolute",width:24,height:24,color:K,fontSize:24,transform:"translate(-50%, -50%) scale(0.4) rotate(-45deg)",opacity:0,transition:"all 0.3s linear",userSelect:"none",insetBlockStart:"50%",insetInlineStart:"50%"},"&.".concat(F,"-button-close-primary"),{color:"#fff"}),"&.".concat(F,"-button-close-show"),{transform:"translate(-50%, -50%)",opacity:1}),"&.".concat(F,"-button-close-small"),{width:16,height:16,fontSize:16,lineHeight:16})),"".concat(F,"-button-icon"),o()(o()(o()(o()({position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",width:24,height:24,color:K,fontSize:24,lineHeight:24,transform:"translate(-50%, -50%)",opacity:1,transition:"all 0.3s linear",userSelect:"none",insetBlockStart:"50%",insetInlineStart:"50%","> *":{fontSize:"inherit",color:"inherit"},img:{width:"100%",height:"100%",objectFit:"contain"}},"&.".concat(F,"-button-icon-open"),{transform:"translate(-50%, -50%) scale(0.4) rotate(45deg)",opacity:0}),"&.".concat(F,"-button-icon-disabled"),{color:S}),"&".concat(F,"-button-icon-primary"),{color:"#fff !important","> *":{color:"#fff !important"}}),"&".concat(F,"-button-icon-small"),{width:16,height:16,fontSize:16,lineHeight:16}))))},y=function(L){var _=(0,sn.A)("SideTip",function(F){return[T(F)]});return _(L)},tn=e(26068),b=e.n(tn),U=e(25298),s=e.n(U),p=e(17069),m=e.n(p),i=e(62657),g=e.n(i),R=e(21742),P=e.n(R),M=e(83136),w=e.n(M),x=function(_){if(window.pageXOffset!=null)return{x:window.pageXOffset,y:window.pageYOffset};if(_)return{x:_.scrollLeft,y:_.scrollTop};var F=window,u=F.document;return u.compatMode==="CSS1Compat"?{x:u.documentElement.scrollLeft,y:u.documentElement.scrollTop}:{x:u.body.scrollLeft,y:u.body.scrollTop}},N=function(_){return _?_.clientHeight:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},C=function(_){return _?_.clientWidth:window.innerWidth?window.innerWidth:document.body.clientWidth},l,$=function(_){var F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document.body;if(window.innerWidth>F.offsetWidth){if(_||l===void 0){var u=document.createElement("div");u.style.width="100%",u.style.height="200px";var S=document.createElement("div"),K=S.style;K.position="absolute",K.top="0",K.left="0",K.pointerEvents="none",K.visibility="hidden",K.width="200px",K.height="150px",K.overflow="hidden",S.appendChild(u),F.appendChild(S);var ln=u.offsetWidth;S.style.overflow="scroll";var q=u.offsetWidth;ln===q&&(q=S.clientWidth),F.removeChild(S),l=ln-q}return l}return 0},nn=function(_){var F=_&&window.getComputedStyle(_);return F&&F.position==="fixed"},B=e(56517),en=32,on=32,un=function(L){P()(F,L);var _=w()(F);function F(u){var S;s()(this,F),S=_.call(this,u),o()(g()(S),"nodeRef",void 0),o()(g()(S),"intervalStart",void 0),o()(g()(S),"deltaX",void 0),o()(g()(S),"deltaY",void 0),o()(g()(S),"defaultScrollBarSize",void 0),o()(g()(S),"overlapDetection",function(){for(var q=S.nodeRef.current,cn=q.getBoundingClientRect(),_n=cn.left,vn=cn.top,gn=cn.right,J=cn.bottom,Q=cn.width,an=cn.height,An=[document.elementFromPoint(_n,vn),document.elementFromPoint(gn,J),document.elementFromPoint(_n+Q/2,vn+an/2)],kn=0,xn=An;kn<xn.length;kn++){var Pn=xn[kn];if(Pn!==q&&nn(Pn)){S.props.onOverlap&&S.props.onOverlap();break}}}),o()(g()(S),"getContainerDom",function(){var q=S.props.getPopupContainer,cn=q?q():void 0;return cn}),o()(g()(S),"handleResize",function(){var q=S.getContainerDom();S.defaultScrollBarSize=$();var cn=S.nodeRef.current,_n=cn.getBoundingClientRect(),vn=_n.width,gn=_n.height,J=window.getComputedStyle(cn),Q=J.right,an=J.bottom,An=Number(Q.replace("px","")),kn=Number(an.replace("px","")),xn=C(q),Pn=N(q),hn=xn-An-vn,G=Pn-kn-gn;hn<0&&(An+=hn),G<0&&(kn+=G),S.setState({bottom:kn,right:An})}),o()(g()(S),"handleMouseDown",function(q){if(q.button===0){var cn=S.getContainerDom();S.intervalStart=new Date().getTime();var _n=x(cn),vn=S.nodeRef.current,gn=q.clientX+_n.x,J=q.clientY+_n.y,Q=vn.offsetLeft,an=vn.offsetTop;S.deltaX=gn-Q,S.deltaY=J-an,S.props.onDragStart&&S.props.onDragStart(),S.setState({dragged:!0}),q.stopPropagation?q.stopPropagation():q.cancelBubble=!0,q.preventDefault?q.preventDefault():q.returnValue=!1}}),o()(g()(S),"handleMouseMove",function(q){var cn=S.state.dragged,_n=S.props.hide;if(!(q.button!==0||!cn||_n)){var vn=q.clientX,gn=q.clientY,J=g()(S),Q=J.deltaX,an=J.deltaY,An=S.nodeRef.current,kn=S.getContainerDom(),xn=x(kn),Pn=C(kn),hn=N(kn),G=An.getBoundingClientRect(),V=G.width,On=G.height,dn=vn+xn.x-Q,pn=gn+xn.y-an,Cn=Pn-dn-V,yn=hn-pn-On;Cn>Pn-V&&(Cn=Pn-V),yn>hn-On&&(yn=hn-On),Cn<0&&(Cn=0),yn<0&&(yn=0),S.setState({dragged:!0,right:Cn-S.defaultScrollBarSize,bottom:yn},function(){S.props.onDrag&&S.props.onDrag({right:Cn,bottom:yn})})}}),o()(g()(S),"handleMouseUp",function(q){var cn=S.state.dragged;if(cn){var _n,vn,gn=new Date().getTime()-S.intervalStart;if(gn<200&&!((_n=q.target)!==null&&_n!==void 0&&(vn=_n.closest)!==null&&vn!==void 0&&vn.call(_n,"#ui-mini-hide"))){S.props.onClick(q),S.setState({dragged:!1});return}S.setState({dragged:!1},function(){S.props.onDragEnd&&S.props.onDragEnd()})}});var K=u.position,ln=K===void 0?{}:K;return S.intervalStart=0,S.nodeRef=Y.createRef(),S.deltaX=0,S.deltaY=0,S.defaultScrollBarSize=$(),S.state={dragged:!1,width:0,bottom:ln.bottom?ln.bottom:on,right:ln.right?ln.right:en},S}return m()(F,[{key:"componentDidMount",value:function(){var S=this.props.draggable,K=S===void 0?!0:S;window.addEventListener("resize",this.handleResize,!1),K&&window.addEventListener("mousemove",this.handleMouseMove,!1),window.addEventListener("mouseup",this.handleMouseUp,!1),window.addEventListener("load",this.overlapDetection,!1);var ln=this.nodeRef.current.getBoundingClientRect(),q=ln.width;this.setState({width:q})}},{key:"componentWillUnmount",value:function(){var S=this.props.draggable,K=S===void 0?!0:S;window.removeEventListener("load",this.overlapDetection,!1),K&&window.removeEventListener("mousemove",this.handleMouseMove,!1),window.removeEventListener("mouseup",this.handleMouseUp,!1),window.removeEventListener("resize",this.handleResize,!1)}},{key:"componentDidUpdate",value:function(S){var K=S.hide,ln=this.props.hide;K&&!ln&&this.setState({right:en})}},{key:"render",value:function(){var S=this.props,K=S.children,ln=S.hide,q=S.style,cn=q===void 0?{}:q,_n=S.prefix,vn=S.className,gn=S.id,J=S.onMouseEnter,Q=S.onMouseLeave,an=this.state,An=an.dragged,kn=an.width,xn=an.bottom,Pn=an.right,hn=b()({bottom:xn,right:Pn},cn),G="".concat(_n,"-container"),V=v()(G,vn,o()(o()(o()({},"".concat(G,"-dragged"),An),"".concat(G,"-hide"),ln),"".concat(G,"-hide-not-dragged"),ln&&!An));return(0,B.tZ)("div",{id:gn,ref:this.nodeRef,onMouseDown:this.handleMouseDown,onMouseEnter:J,onMouseLeave:Q,style:ln?b()(b()({},hn),{},{right:-kn/1.5}):hn,className:V},K)}}]),F}(Y.Component),c=un,f=e(32106),E=function(){return(0,B.tZ)("svg",{version:"1.1",id:"dc-spinner",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"1em",height:"1em",stroke:"currentColor",viewBox:"3 3 34 34",preserveAspectRatio:"xMinYMin meet"},(0,B.tZ)("path",{strokeWidth:"1",strokeMiterlimit:"10",d:"M5.203,20 c0-8.159,6.638-14.797,14.797-14.797V5C11.729,5,5,11.729,5,20s6.729,15,15,15v-0.203C11.841,34.797,5.203,28.159,5.203,20z",transform:"rotate(278.217 20 20)"},(0,B.tZ)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 20 20",to:"360 20 20",calcMode:"spline",keySplines:"0.2, 0.2, 0.2, 0.2",keyTimes:"0;1",dur:"1.2s",repeatCount:"indefinite"})))},A=function(_){return(0,B.tZ)(f.Z,r()({component:E},_))},rn=A,D=e(58781),W=function(_){var F=(0,Y.createRef)(),u=(0,Y.useContext)(H.default.ConfigContext),S=u.getPrefixCls,K=S("sidetip"),ln=y(K),q=ln.wrapSSR,cn=_.defaultHide,_n=_.onClick,vn=_.open,gn=_.loading,J=_.children,Q=_.icon,an=_.type,An=_.size,kn=_.style,xn=_.visible,Pn=_.className,hn=_.badge,G=_.tooltip,V=_.position,On=_.onDragStart,dn=_.onDragEnd,pn=_.onDrag,Cn=_.buttonClassName,yn=_.buttonStyle,Rn=_.id,fn=_.hideable,Tn=fn===void 0?!0:fn,Bn=_.disabled,Nn=Bn===void 0?!1:Bn,qn=_.draggable,Qn=qn===void 0?!0:qn,En=_.getPopupContainer,Yn=_.locale,Kn=(0,Y.useCallback)(function(ve){return["".concat(K,"-hide"),ve].join("-")},[K]),Hn=(0,Y.useState)(Tn?!!cn:!1),$n=h()(Hn,2),Zn=$n[0],oe=$n[1],Re=(0,Y.useState)(!1),ue=h()(Re,2),pe=ue[0],Ln=ue[1];(0,Y.useEffect)(function(){typeof window=="undefined"||!Tn||cn===void 0&&oe(window.localStorage.getItem(Kn(Rn))==="true")},[Tn,cn,Rn,Kn]),(0,Y.useEffect)(function(){typeof window!="undefined"&&(Zn?window.localStorage.setItem(Kn(Rn),"true"):window.localStorage.removeItem(Kn(Rn)))},[Zn,Rn,Kn]);var Sn=function(){oe(!0)},In=function(ce){if(Zn)oe(!1);else{if(Nn)return;_n&&_n(ce)}},Mn=function(ce){Ln(!0),_.onMouseEnter&&_.onMouseEnter(ce)},bn=function(ce){Ln(!1),_.onMouseLeave&&_.onMouseLeave(ce)},Dn=function(ce){return ce==="primary"?"primary":""},mn=function(ce){return ce==="small"?"small":""},Un=Dn(an),ne=mn(An),re=typeof(G==null?void 0:G.title)=="string"&&G.title.trim()?G.title:Yn==null?void 0:Yn.toggleLabel,ae=function(ce){Nn||ce.key!=="Enter"&&ce.key!==" "||(ce.preventDefault(),In(ce))},Wn="".concat(K,"-button"),ie=v()("".concat(Wn,"-icon"),(vn||xn)&&"".concat(Wn,"-icon-open"),Nn&&"".concat(Wn,"-icon-disabled"),Un&&"".concat(Wn,"-icon-").concat(Un),ne&&"".concat(Wn,"-icon-").concat(ne)),he=Q?(0,B.tZ)("span",{className:ie},Y.isValidElement(Q)?Q:typeof Q=="string"&&Q?(0,B.tZ)("img",{src:Q,alt:"",width:"100%",height:"100%"}):null):null,ye=v()("".concat(Wn,"-close"),o()(o()(o()({},"".concat(Wn,"-close-show"),vn||xn),"".concat(Wn,"-close-").concat(Un),Un),"".concat(Wn,"-close-").concat(ne),ne)),fe=v()(Wn,Cn,o()(o()(o()({},"".concat(Wn,"-disabled"),Nn),"".concat(Wn,"-").concat(Un),Un),"".concat(Wn,"-").concat(ne),ne)),le=v()("".concat(Wn,"-loading"),o()(o()({},"".concat(Wn,"-loading-").concat(Un),Un),"".concat(Wn,"-loading-").concat(ne),ne)),be=(0,B.tZ)("div",{className:fe,ref:F,style:yn,role:"button",tabIndex:Nn?-1:0,"aria-disabled":Nn||void 0,"aria-expanded":!!(vn||xn),"aria-haspopup":"dialog","aria-label":re,onKeyDown:ae},gn&&(0,B.tZ)(rn,{className:le}),(0,B.tZ)(Y.Fragment,null,he,(0,B.tZ)("span",{"aria-hidden":!0},(0,B.tZ)(Z.Z,{className:ye})))),ke=hn?(0,B.tZ)(I.Z,r()({offset:[-6,6]},hn),be):be,me=v()("".concat(K,"-hide"),o()({},"".concat(K,"-hide-hovered"),pe)),Ce=(0,B.tZ)("button",{type:"button",id:"ui-mini-hide",onClick:Sn,className:me,"aria-label":Yn==null?void 0:Yn.hideFloatingButton},(0,B.tZ)("span",{className:"".concat(K,"-hide-icon"),"aria-hidden":!0})),Oe=v()(Pn,o()({},"".concat(K,"-container-disabled"),Nn));return q((0,B.tZ)(c,{id:Rn,open:vn||xn,hide:Zn,onClick:In,onOverlap:Sn,onMouseEnter:Mn,onMouseLeave:bn,style:kn,position:V,prefix:K,onDragStart:On,onDragEnd:dn,onDrag:pn,getPopupContainer:En,className:Oe,draggable:Qn},G&&G.title?(0,B.tZ)(d.Z,r()({},G,{getPopupContainer:function(){return F.current}}),ke):ke,Tn&&Ce,J))},j=(0,O.Z)({componentName:"SideTip",defaultLocale:D.Z})(W)},64567:function(t,n,e){"use strict";e.d(n,{Z:function(){return on}});var a=e(15558),r=e.n(a),X=e(48305),o=e.n(X),z=e(67825),h=e.n(z),Z=e(82187),H=e.n(Z),I=e(85755),d=e(75271),k=(0,d.createContext)({}),v=k,Y=e(68585),O=e.n(Y),sn=e(82092),T=e.n(sn),y=e(31759),tn=e.n(y),b=e(2471),U=e(32699),s=e(26068),p=e.n(s),m=e(51722),i=function(c,f){return{paddingTop:"".concat(c,"px"),paddingBottom:"".concat(c,"px"),fontSize:f}},g=function(c,f,E){return{borderColor:c,backgroundColor:f,color:E}},R=function(c,f){return{position:"absolute",top:"1px",right:"1px",borderTop:"12px solid ".concat(c),borderLeft:"12px solid transparent",borderTopRightRadius:f.borderRadiusSM}},P=function(c,f){return{width:c,height:f}},M=function(c){var f,E=c.componentCls;return f={},T()(T()(T()(T()(T()(T()(T()(T()(T()(T()(f,"".concat(E,"-title"),{fontSize:c.fontSize,color:c.colorText,margin:"".concat(c.marginXXS,"px 0")}),"".concat(E,"-wrapper"),T()(T()(T()({position:"relative",display:"inline-block",fontSize:c.fontSize,color:c.colorText,background:c.colorWhite,border:"".concat(c.lineWidth,"px ").concat(c.lineType," ").concat(c.colorBorder),borderRadius:c.borderRadius,marginRight:c.marginXS,padding:"".concat(c.paddingXXS,"px ").concat(c.paddingContentHorizontal,"px"),cursor:"pointer",transition:"all ".concat(c.motionDurationMid," ").concat(c.motionEaseInOut)},"".concat(E,"-input"),{width:0,height:0,opacity:0,pointerEvents:"none"}),"&:last-child",{margin:0}),"&:has(".concat(E,"-cover)"),p()({padding:0},P("76px","40px")))),"".concat(E,"-cover"),{display:"inline-block",width:"100%",height:"100%",img:{height:"calc(100% - 2px)",width:"calc(100% - 2px)",borderRadius:c.borderRadius,marginLeft:"1px",marginTop:"1px"}}),"".concat(E,"-large").concat(E,"-img"),p()(p()({},P("228px","120px")),{},{marginRight:"16px"})),"".concat(E,"-small").concat(E,"-img"),P("76px","32px")),"".concat(E,"-large"),i(c.paddingContentVerticalSM,c.fontSize)),"".concat(E,"-small"),p()(p()({},i(0,c.fontSize)),{},{paddingLeft:"".concat(c.paddingSM,"px"),paddingRight:"".concat(c.paddingSM,"px")})),"".concat(E,"-wrapper:not(").concat(E,"-disabled):hover"),{borderColor:c.colorPrimaryText,color:c.colorPrimaryText}),"".concat(E,"-checked"),g(c.blue,c.colorPrimaryBg,c.colorPrimaryText)),"".concat(E,"-wrapper:not(").concat(E,"-disabled):active"),{boxShadow:"0px 0px 3px ".concat(c.colorPrimary),borderColor:"".concat(c.colorPrimary)}),T()(T()(T()(T()(T()(f,"".concat(E,"-checked:not(").concat(E,"-disabled)"),{"&:hover":p()(p()({},g(c.colorInfoBorder,"#EBF1FF",c.colorInfoTextHover)),{},T()({},"".concat(E,"-inner"),{borderTopColor:"".concat(c.colorPrimaryTextHover," !important")}))}),"".concat(E,"-disabled:not(").concat(E,"-checked)"),p()(p()({},g(c.colorBorder,c.colorFillContent,c.colorTextDisabled)),{},{cursor:"not-allowed"})),"".concat(E,"-disabled").concat(E,"-checked"),p()({cursor:"not-allowed"},g(c.colorBorder,c.colorFill,c.colorTextDisabled))),"".concat(E,"-checked").concat(E,"-disabled.multiple"),T()({},"".concat(E,"-inner"),R(c.colorTextDisabled,c))),"".concat(E,"-checked:not(").concat(E,"-disabled).multiple"),T()({},"".concat(E,"-inner"),R(c.colorPrimary,c)))},w=function(un){var c=(0,m.A)("TagSelect",function(f){return[M(f)]});return c(un)},x=e(56517),N=["children","handleChange","onChange","cover"],C=function(c){var f=c.children,E=c.handleChange,A=c.onChange,rn=c.cover,D=h()(c,N),W=(0,d.useState)(D.defaultChecked),j=o()(W,2),L=j[0],_=j[1],F=tn()(rn),u=(0,d.useContext)(I.default.ConfigContext),S=u.getPrefixCls,K=S("tag-select"),ln=w(K),q=ln.wrapSSR,cn=ln.hashId,_n=d.useContext(v),vn=H()("".concat(K,"-wrapper"),T()(T()(T()(T()(T()(T()({},"".concat(K,"-checked"),L),"multiple",_n.multiple),"".concat(K,"-").concat(_n.size),_n.size),"".concat(K,"-disabled"),_n.disabled||D.disabled),"".concat(K,"-img"),F==="string"),"".concat(K,"-custom"),F!=="string"),cn);(0,d.useEffect)(function(){(0,U.isBoolean)(D.checked)&&_(D.checked)},[D.checked]),(0,d.useEffect)(function(){var J;return(J=_n.registerValue)===null||J===void 0?void 0:J.call(_n,D.value)},[D.value]),(0,d.useEffect)(function(){var J;(J=_n.value)!==null&&J!==void 0&&J.includes(D.value)||D.checked||D.defaultChecked?_(!0):_(!1)},[_n.value,D.value]);var gn=function(){var Q;return F==="string"?(0,x.tZ)("div",{className:"".concat(K,"-cover")},(0,x.tZ)("img",{src:rn,alt:(Q=D.title)!==null&&Q!==void 0?Q:""})):rn};return q((0,x.tZ)("label",{className:vn,style:D.style},(0,x.tZ)(b.Z,O()({},D,{checked:L,prefixCls:K,onChange:function(Q){!("checked"in D)&&!Object.keys(_n).length&&_(Q.target.checked),A&&A(Q),_n.handleValueChange&&_n.handleValueChange(Q.target.value)}})),rn?gn():(0,x.tZ)("span",null,f)))},l=C,$=["title","multiple","defaultValue","size","options","children","className"];function nn(un){var c=un;return un===void 0?c=[]:Array.isArray(un)||(c=[un]),c}var B=function(c){var f=c.title,E=c.multiple,A=c.defaultValue,rn=c.size,D=rn===void 0?"middle":rn,W=c.options,j=W===void 0?[]:W,L=c.children,_=c.className,F=h()(c,$),u=(0,d.useContext)(I.default.ConfigContext),S=u.getPrefixCls,K=S("tag-select"),ln=w(K),q=ln.wrapSSR,cn=ln.hashId,_n=(0,d.useState)(nn(A||F.value)),vn=o()(_n,2),gn=vn[0],J=vn[1],Q=d.useState([]),an=o()(Q,2),An=an[0],kn=an[1],xn=function(Cn){kn(function(yn){return[].concat(r()(yn),[Cn])})};(0,d.useEffect)(function(){"value"in F&&J(nn(F.value))},[F.value]);var Pn=function(Cn){var yn,Rn=gn.filter(function(Nn){return An.includes(Nn)}),fn=r()(Rn),Tn=fn.indexOf(Cn),Bn=Tn===-1?Cn:void 0;E&&(Tn===-1?fn.push(Cn):fn.splice(Tn,1)),"value"in F||J(E?fn:[Bn]),(yn=F.onChange)===null||yn===void 0||yn.call(F,E?fn:Bn)},hn={multiple:E,size:D,value:gn,disabled:F.disabled,onChange:F.onChange,registerValue:xn,handleValueChange:Pn},G=(0,d.useMemo)(function(){return j.map(function(pn){return typeof pn=="string"||typeof pn=="number"?{label:pn,value:pn}:pn})},[j]),V=j.length?G.map(function(pn){return(0,x.tZ)(l,{key:pn.value.toString(),disabled:"disabled"in pn?pn.disabled:F.disabled,value:pn.value,onChange:pn.onChange,style:pn.style,checked:gn==null?void 0:gn.includes(pn.value)},pn.label)}):L,On=H()("".concat(K,"-container"),cn,_),dn=(0,d.useId)();return q((0,x.tZ)(v.Provider,{value:hn},(0,x.tZ)("div",{className:On,role:"group","aria-labelledby":f?dn:void 0},f&&(0,x.tZ)("div",{className:"".concat(K,"-title"),id:dn},f),V)))},en=B,on={Group:en,Item:l}},16463:function(t,n,e){"use strict";e.d(n,{Z:function(){return R}});var a=e(48305),r=e.n(a),X=e(67618),o=e(23912),z=e(36038),h=e(54650),Z=e(92532),H=e(33857),I=e(75271),d=e(26068),k=e.n(d),v=e(15558),Y=e.n(v),O=e(57724),sn=e.n(O),T=e(32699),y=function(M){return"".concat(M.join("$$"))},tn=function(M){var w=M.split("$$"),x=sn()(w),N=x.slice(0);return{values:N}},b=function(M){return!(M!=null&&M.children)},U=function P(M,w){if(M)return M.map(function(x){var N,C,l,$=[];w&&($=Y()(tn(w).values));var nn=y([].concat(Y()($),[(N=(C=x.value)!==null&&C!==void 0?C:x.originTitle)!==null&&N!==void 0?N:x.title])),B=k()(k()({},x),{},{key:nn,originTitle:(l=x.originTitle)!==null&&l!==void 0?l:x.title,children:P(x.children,nn)});return B})},s=function(M){return(0,T.omit)(M,"key")},p=function P(M,w){var x=M.map(function(N){var C,l=k()({},N);return w(N)||(C=N.children)!==null&&C!==void 0&&C.length&&(l.children=P(N.children,w)),l});return x.filter(function(N){var C;return(N==null||(C=N.children)===null||C===void 0?void 0:C.length)||w(N)})},m=function(M,w){for(var x=tn(M),N=x.values,C,l=0,$=function(){var B=N[l];if(!C)C=w.find(function(on){return on.value===B});else{var en;C=(en=C.children)===null||en===void 0?void 0:en.find(function(on){return on.value===B})}};l<N.length;l+=1)$();return C},i=function P(M){var w=M.map(function(x){var N;return(x==null||(N=x.children)===null||N===void 0?void 0:N.length)>0?P(x==null?void 0:x.children):x});return w.flat()},g=e(56517),R=(0,I.forwardRef)(function(P,M){var w=P.treeData,x=w===void 0?[]:w,N=P.width,C=P.checkable,l=C===void 0?!0:C,$=P.titleRender,nn=P.onChange,B=P.followLeaf,en=B===void 0?!0:B,on=P.height,un=P.defaultExpandAll,c=P.loadData,f=P.searchStyle,E=f===void 0?{}:f,A=(0,I.useMemo)(function(){return U(x)},[x]),rn=(0,I.useState)(A),D=r()(rn,2),W=D[0],j=D[1],L=(0,I.useRef)(null),_=(0,I.useState)(on),F=r()(_,2),u=F[0],S=F[1],K=(0,I.useState)([]),ln=r()(K,2),q=ln[0],cn=ln[1],_n=(0,I.useState)(""),vn=r()(_n,2),gn=vn[0],J=vn[1],Q=o.Z.useForm(),an=r()(Q,1),An=an[0];(0,I.useEffect)(function(){if(on===void 0&&L!==null&&L!==void 0&&L.current){var dn,pn=L==null||(dn=L.current)===null||dn===void 0?void 0:dn.clientHeight;S(pn)}},[]),(0,I.useEffect)(function(){(!W||W.length===0)&&j(A),hn({searchKey:gn})},[A]);var kn=function(){An.resetFields(),cn([])},xn=function(){var pn=i(A);cn(pn.map(function(Cn){return Cn.key})),nn(pn)},Pn=function(){var pn=i(A),Cn=pn.filter(function(yn){return!q.includes(yn.key)});cn(Cn.map(function(yn){return yn.key})),nn(pn.filter(function(yn){return!q.includes(yn.key)}))};(0,I.useImperativeHandle)(M,function(){return{reset:kn,checkAll:xn,invertSelect:Pn}});var hn=function(pn){var Cn=pn.searchKey;J(Cn);var yn=p(A,function(Rn){var fn=typeof Rn.title=="string";return(fn?Rn.title:Rn.value).includes(Cn)});j(yn)},G=function(pn){var Cn=pn.map(function(yn){return m(yn,A)});en&&(Cn=Cn.filter(function(yn){return!(yn!=null&&yn.children)})),cn(Cn.map(function(yn){return yn.key})),nn(Cn.map(s))},V=u?u-(32+12*2+1):0,On={padding:"0 12px"};return(0,g.tZ)("div",{ref:L,style:{width:N,height:on!=null?on:"100%"}},(0,g.tZ)(o.Z,{form:An,onValuesChange:hn,style:Object.assign(On,E)},(0,g.tZ)(o.Z.Item,{noStyle:!0,name:"searchKey"},(0,g.tZ)(z.Z,{"data-testid":"search",prefix:(0,g.tZ)(X.Z,null)}))),(0,g.tZ)(h.Z,{style:{margin:"12px 0"}}),W.length!==0?(0,g.tZ)(Z.default,{height:V,showIcon:!0,checkable:l,blockNode:!0,selectable:!1,checkedKeys:q,onCheck:G,titleRender:$,defaultExpandAll:un,treeData:An.getFieldValue("searchKey")?W:A,loadData:c}):(0,g.tZ)(H.Z,{image:H.Z.PRESENTED_IMAGE_SIMPLE}))})},13031:function(t,n,e){"use strict";e.d(n,{Z:function(){return w}});var a=e(82092),r=e.n(a),X=e(68585),o=e.n(X),z=e(67825),h=e.n(z),Z=e(17114),H=e(85755),I=e(20891),d=e(40056),k=e(22355),v=e(67453),Y=e(82187),O=e.n(Y),sn=e(75271),T=e(46880),y=e(20785),tn=e(51722),b=function(N){var C=N.componentCls,l=N.antCls,$=N.colorBgContainer,nn=N.colorText,B=N.colorTextSecondary,en=N.colorTextTertiary,on=N.colorTextQuaternary,un=N.colorPrimary;return r()(r()(r()({},"".concat(C,"-container"),r()(r()(r()({height:"100%",paddingBottom:"0 !important",backgroundColor:$,".tech-page-container-content":{padding:"0 !important"}},"".concat(C,"-page-header"),r()(r()({height:272,paddingTop:72,paddingLeft:100,color:$,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",p:{textAlign:"justify"},img:{width:80}},"".concat(C,"-title"),{fontSize:32,fontFamily:"SFProText-Medium"}),"".concat(C,"-description"),{marginTop:16,marginBottom:32,fontFamily:"SFProText-Regular",opacity:.85})),"".concat(C,"-introduce"),r()(r()({margin:"0 32px",marginTop:-48,marginBottom:40},"".concat(l,"-card-body"),{padding:"48px 68px",boxShadow:"0 1px 40px 2px rgba(28, 116, 230, 0.1)"}),"".concat(C,"-item"),{display:"flex",img:{marginRight:12},".title":{color:nn,fontSize:16,fontFamily:"PingFangSC-Medium"},".description":{marginTop:4,color:B,fontFamily:"SFProText-Regular"}})),"".concat(C,"-content"),r()(r()({padding:"0 32px",paddingBottom:90},"".concat(C,"-left"),r()(r()({padding:"0 36px",borderRight:"1px solid #e8e8e8"},"".concat(C,"-item"),r()(r()(r()({display:"flex",padding:"24px 24px"},"".concat(C,"-order-wrapper"),r()({},"".concat(C,"-order"),{width:24,height:24,marginRight:12,color:on,textAlign:"center",border:"1px solid ".concat(on),borderRadius:24})),"".concat(C,"-title"),{marginTop:0,color:nn,fontSize:16}),"".concat(C,"-description"),{marginTop:8,color:en})),"".concat(C,"-btn-wrapper"),{marginRight:24,marginLeft:60})),"".concat(C,"-right"),r()(r()(r()({padding:"24px 64px"},"".concat(C,"-title"),{marginBottom:16,color:nn,fontSize:16,fontFamily:"PingFangSC-Medium"}),"".concat(l,"-btn"),{marginRight:12,marginBottom:12,background:"rgba(24, 144, 255, 0.06)",border:"none"}),"".concat(C,"-more"),{background:"rgba(0, 0, 0, 0.04)"})))),"".concat(C,"-step"),r()(r()(r()({display:"flex",marginBottom:30,padding:"20px 30px 20px 0",background:$,border:"1px solid rgba(0, 0, 0, 0.06)",borderRadius:2,"&:hover":{boxShadow:"0 4px 16px 0",cursor:"pointer"},"&:nth-child(even)":{marginRight:0}},"".concat(C,"-step-left"),{padding:"0 20px"}),"".concat(C,"-step-right"),r()(r()({},"".concat(C,"-step-title"),{color:nn,fontSize:16,lineHeight:24}),"".concat(C,"-step-description"),{color:en})),"".concat(C,"-step-operations"),{color:un,fontSize:14,lineHeight:22})),".borderRight",{borderRight:"1px solid #e8e8e8"})},U=function(x){var N=(0,tn.A)("Welcome",function(C){return[b(C)]});return N(x)},s=e(39797),p=function(N){var C=N.componentCls,l=N.colorText,$=N.colorTextTertiary,nn=N.colorPrimary;return r()({},"".concat(C),r()(r()(r()({display:"flex",marginBottom:30,padding:"20px 30px 20px 0",background:N.colorBgContainer,border:"1px solid rgba(0, 0, 0, 0.06)",borderRadius:2,"&:hover":{boxShadow:"0 4px 16px 0",cursor:"pointer"},"&:nth-child(even)":{marginRight:0}},"".concat(C,"-left"),{padding:"0 20px"}),"".concat(C,"-right"),r()(r()({},"".concat(C,"-title"),{color:l,fontSize:16,lineHeight:24}),"".concat(C,"-description"),{color:$})),"".concat(C,"-operations"),{color:nn,fontSize:14,lineHeight:22}))},m=function(x){var N=(0,tn.A)("WelcomeStep",function(C){return[p(C)]});return N(x)},i=e(56517),g=function(N){var C=N.title,l=N.description,$=N.operations,nn=N.imgUrl,B=N.locale,en=(0,sn.useContext)(H.default.ConfigContext),on=en.getPrefixCls,un=on("welcome-step"),c=m(un),f=c.wrapSSR;return f((0,i.tZ)(I.Z,{span:11,key:C,className:un},(0,i.tZ)("div",{className:"".concat(un,"-left")},(0,i.tZ)("img",{src:nn,alt:"",width:"60"})),(0,i.tZ)("div",{className:"".concat(un,"-right")},(0,i.tZ)("h3",{className:"".concat(un,"-title")},C),(0,i.tZ)("p",{className:"".concat(un,"-description")},l),$&&(0,i.tZ)("div",{className:"".concat(un,"-operations")},$==null?void 0:$.map(function(E,A){return(0,i.tZ)("span",{key:A,onClick:E.onClick,className:"".concat(un,"-operation")},E.text||B.defaultOperation)})))))},R=(0,T.Z)({componentName:"WelcomeStep",defaultLocale:s.Z})(g),P=["title","description","bgImage","introduces","buttonText","buttonProps","steps","stepType","helps","locale","className"],M=function(N){var C=N.title,l=N.description,$=N.bgImage,nn=N.introduces,B=nn===void 0?[]:nn,en=N.buttonText,on=N.buttonProps,un=N.steps,c=un===void 0?[]:un,f=N.stepType,E=f===void 0?"default":f,A=N.helps,rn=A===void 0?[]:A,D=N.locale,W=N.className,j=h()(N,P),L=(0,sn.useContext)(H.default.ConfigContext),_=L.getPrefixCls,F=_("welcome"),u=U(F),S=u.wrapSSR,K=E==="default",ln=function(cn,_n){var vn=function(){return(0,i.tZ)(I.Z,{span:12,"data-testid":"steps",key:cn.title,className:"".concat(F,"-item")},(0,i.tZ)("div",{className:"".concat(F,"-order-wrapper")},(0,i.tZ)("div",{className:"".concat(F,"-order")},_n+1)),(0,i.tZ)("span",null,(0,i.tZ)("h3",{className:"".concat(F,"-title")},cn.title),(0,i.tZ)("p",{className:"".concat(F,"-description")},cn.description)))},gn={title:cn.title,description:cn.description,index:_n+1,imgUrl:cn.imgUrl,operations:cn.operations,locale:D},J=K?(0,i.tZ)(vn,{key:cn.title}):(0,i.tZ)(R,o()({"data-testid":"steps",key:cn.title},gn));return J};return S((0,i.tZ)("div",o()({className:"".concat(F,"-container ").concat(W||"")},j),(0,i.tZ)(d.Z,{className:"".concat(F,"-page-header"),style:{backgroundImage:'url("'.concat($,'")')}},(0,i.tZ)(I.Z,{span:24,className:"".concat(F,"-title")},(0,i.tZ)("div",null,C)),(0,i.tZ)(I.Z,{span:16,className:"".concat(F,"-description")},(0,i.tZ)("p",null,l))),(0,i.tZ)(k.Z,{bordered:!1,className:"".concat(F,"-introduce")},(0,i.tZ)(d.Z,{gutter:78},B.map(function(q){return(0,i.tZ)(I.Z,{span:8,key:q.image,className:"".concat(F,"-item"),"data-testid":"introduces"},(0,i.tZ)("img",{src:q.image,alt:"",height:80}),(0,i.tZ)("span",null,(0,i.tZ)("h3",{className:"".concat(F,"-title")},q.title),(0,i.tZ)("p",{className:"".concat(F,"-description")},q.description)))}))),(0,i.tZ)(d.Z,{className:"".concat(F,"-content")},(0,i.tZ)(I.Z,{span:14,className:K?"".concat(F,"-left"):"borderRight"},(0,i.tZ)(d.Z,{justify:"space-around"},c.map(function(q,cn){return ln(q,cn)}),K&&(0,i.tZ)(I.Z,{span:24},(0,i.tZ)("div",{className:"".concat(F,"-btn-wrapper")},(0,i.tZ)(v.ZP,o()({size:"large",type:"primary",icon:(0,i.tZ)(Z.Z,null),block:!0},on),en))))),(0,i.tZ)(I.Z,{span:10,className:"".concat(F,"-right")},(0,i.tZ)("h3",{className:"".concat(F,"-title")},D.helpTitle),rn.map(function(q){return(0,i.tZ)(v.ZP,{key:q.title,shape:"round",onClick:function(){(0,y.Rh)(q.link)},className:O()(r()({},"".concat(F,"-more"),!!q.isMore)),"data-testid":"helps"},q.title)})))))},w=(0,T.Z)({componentName:"Welcome",defaultLocale:s.Z})(M)},20785:function(t,n,e){"use strict";e.d(n,{Kd:function(){return a},Rh:function(){return X},Wh:function(){return o},i_:function(){return r}});function a(){return typeof window=="undefined"?"en-US":window.localStorage.getItem("umi_locale")||navigator.language}function r(Z){typeof window!="undefined"&&(window.localStorage.setItem("umi_locale",Z),window.location.reload())}function X(Z){var H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(typeof window!="undefined")if(H){var I=window.open("about:blank");I?I.location.href=Z:window.location.href=Z}else window.location.href=Z}function o(Z){var H=(Z==null?void 0:Z.split("/").filter(function(I){return I}))||[];return H.map(function(I,d){return"/".concat(H.slice(0,d+1).join("/"))})}function z(){return a()==="en-US"}var h=function(H){return"ob-".concat(H)}},96455:function(t,n,e){"use strict";var a=e(75271),r=e(85755);n.Z=function(){var X=(0,a.useContext)(r.default.ExtendedConfigContext),o=X.navigate;return o}},72030:function(t,n,e){"use strict";e.d(n,{I:function(){return a},s:function(){return r}});var a="https://www.oceanbase.com",r=[{value:"en-US",label:"English",shortLabel:"English",minLabel:"EN"},{value:"zh-CN",label:"\u7B80\u4F53\u4E2D\u6587",shortLabel:"\u4E2D\u6587",minLabel:"\u4E2D"},{value:"zh-TW",label:"\u7E41\u4F53\u4E2D\u6587",shortLabel:"\u7E41\u4F53",minLabel:"\u7E41"},{value:"ja-JP",label:"\u65E5\u672C\u8A9E",shortLabel:"\u65E5\u672C\u8A9E",minLabel:"\u65E5"}]},59208:function(t,n,e){"use strict";e.r(n),e.d(n,{Action:function(){return H.Z},BackgroundTaskManager:function(){return nn.ZP},BackgroundTaskManagerConstants:function(){return nn.JO},BaseProList:function(){return a.MJU},BasicLayout:function(){return I.Z},BatchOperationBar:function(){return d.Z},BetaSchemaForm:function(){return a.laP},Boundary:function(){return k.Z},CellEditorTable:function(){return a._oS},CheckCard:function(){return a.tPD},ConfigConsumer:function(){return a.CaO},ContentWithIcon:function(){return Y.Z},ContentWithQuestion:function(){return v.Z},DateRanger:function(){return x.Z},DefaultFooter:function(){return a.qcb},DefaultHeader:function(){return a.yRE},DescriptionsSkeleton:function(){return a.Yk6},Dialog:function(){return O.Z},DocDialog:function(){return sn.Z},DragSortTable:function(){return a.HN4},DrawerForm:function(){return a.aN},DropdownFooter:function(){return a.kEB},EditableProTable:function(){return a.nxD},ErrorBoundary:function(){return a.SVk},FieldCode:function(){return a.XeI},FieldContext:function(){return a.zbb},FieldDatePicker:function(){return a.dYe},FieldIndexColumn:function(){return a.A_s},FieldLabel:function(){return a.Qyk},FieldMoney:function(){return a.ztr},FieldPercent:function(){return a.ZS8},FieldProgress:function(){return a.xlE},FieldRangePicker:function(){return a.m0p},FieldRender:function(){return a.nfU},FieldSelect:function(){return a.WyV},FieldStatus:function(){return a.RWS},FieldText:function(){return a.yEL},FieldTimePicker:function(){return a.KxD},FilterDropdown:function(){return a.ML5},FooterToolbar:function(){return i.Z},FormControlRender:function(){return a.i$e},FormItemProvide:function(){return a.naR},FormItemRender:function(){return a.wc3},FormListContext:function(){return a.JPO},FullscreenBox:function(){return T.Z},GridContent:function(){return a.fT$},GridContext:function(){return a._px},Group:function(){return a.ZAu},Highlight:function(){return y.ZP},IconFont:function(){return tn.Z},IndexColumn:function(){return a.AaD},InlineErrorFormItem:function(){return a.UAB},IntlConsumer:function(){return a.Eh},LOCALE_LIST:function(){return X.s},LabelIconTip:function(){return a.Gx5},LightFilter:function(){return P.Z},ListPageSkeleton:function(){return a.dXP},ListSkeleton:function(){return a.cgP},ListSkeletonItem:function(){return a.nqk},ListToolBar:function(){return a.OGe},ListToolbarSkeleton:function(){return a.TLs},Login:function(){return b.Z},LoginForm:function(){return a.U0H},LoginFormPage:function(){return a.BcB},Lottie:function(){return U.Z},ModalForm:function(){return a.Yr8},NavMenu:function(){return s.Z},OB_SITE_LINK:function(){return X.I},PageContainer:function(){return p.Z},PageHeader:function(){return a.mr1},PageHeaderSkeleton:function(){return a.SMV},PageLoading:function(){return m.Z},Password:function(){return M.Z},ProBreadcrumb:function(){return a.H_l},ProCard:function(){return R.Z},ProConfigProvider:function(){return a._Y6},ProDescriptions:function(){return a.vYc},ProField:function(){return a.JuD},ProForm:function(){return a.A96},ProFormCaptcha:function(){return a.BXt},ProFormCascader:function(){return a.Ves},ProFormCheckbox:function(){return a.V2E},ProFormColorPicker:function(){return a.JjN},ProFormContext:function(){return a.JpA},ProFormDateMonthRangePicker:function(){return a.Iq3},ProFormDatePicker:function(){return a.Tc$},ProFormDateQuarterRangePicker:function(){return a.VUR},ProFormDateRangePicker:function(){return a.ms2},ProFormDateTimePicker:function(){return a.Gal},ProFormDateTimeRangePicker:function(){return a.F0D},ProFormDateWeekRangePicker:function(){return a.aSo},ProFormDateYearRangePicker:function(){return a.T_n},ProFormDependency:function(){return a.ien},ProFormDigit:function(){return a.k_F},ProFormDigitRange:function(){return a.e9D},ProFormField:function(){return a.s74},ProFormFieldSet:function(){return a.VHx},ProFormGroup:function(){return a.UWz},ProFormItem:function(){return a.BZ6},ProFormItemRender:function(){return a.mDB},ProFormList:function(){return a.ux1},ProFormMoney:function(){return a.HgL},ProFormRadio:function(){return a.$Oj},ProFormRate:function(){return a.f4L},ProFormSegmented:function(){return a.ZZU},ProFormSelect:function(){return a._IT},ProFormSlider:function(){return a.HhN},ProFormSwitch:function(){return a.lGk},ProFormText:function(){return a.VaQ},ProFormTextArea:function(){return a.$JJ},ProFormTimePicker:function(){return a.hAO},ProFormTreeSelect:function(){return a.FQK},ProFormUploadButton:function(){return a.rCM},ProFormUploadDragger:function(){return a.mp1},ProHelp:function(){return a.w9i},ProHelpContentPanel:function(){return a.EhU},ProHelpDrawer:function(){return a.DjO},ProHelpModal:function(){return a.Uw2},ProHelpPanel:function(){return a.TzP},ProHelpPopover:function(){return a.asv},ProHelpProvide:function(){return a._mZ},ProHelpSelect:function(){return a.HXn},ProLayout:function(){return a.fGx},ProList:function(){return a.RsR},ProPageHeader:function(){return a.yyf},ProProvider:function(){return a.L_},ProSkeleton:function(){return a.uk0},ProTable:function(){return g.Z},QueryFilter:function(){return a.tix},Ranger:function(){return w.Z},RenderContentPanel:function(){return a.cfv},RouteContext:function(){return a.Xnw},RowEditorTable:function(){return a.$$9},Search:function(){return a.olm},SelectKeyProvide:function(){return a.CDn},SettingDrawer:function(){return a.WBy},SideTip:function(){return N.Z},Statistic:function(){return a.$k_},StatisticCard:function(){return a.Iiw},StepsForm:function(){return a.L05},Submitter:function(){return a.y6},TableDropdown:function(){return a.zIY},TableItemSkeleton:function(){return a.DJY},TableSkeleton:function(){return a.hM6},TableStatus:function(){return a.c3x},TagSelect:function(){return $.Z},TopNavHeader:function(){return a.sRs},TreeSearch:function(){return C.Z},WaterMark:function(){return a.DVr},Welcome:function(){return l.Z},arEGIntl:function(){return a.OfF},caESIntl:function(){return a.WTJ},compareVersions:function(){return a.n4},compatibleBorder:function(){return a.JWN},conversionMomentValue:function(){return a.lpv},conversionSubmitValue:function(){return a.lZL},convertMoment:function(){return a.IFM},coverToNewToken:function(){return a.uk8},createIntl:function(){return a.dp7},csCZIntl:function(){return a.PN_},dateArrayFormatter:function(){return a.c1W},dateFormatterMap:function(){return a.ClJ},deDEIntl:function(){return a.es7},defaultRenderText:function(){return a._Cd},editableRowByKey:function(){return a.cx8},enGBIntl:function(){return a.JG1},enUSIntl:function(){return a.d8e},esESIntl:function(){return a.OvC},faIRIntl:function(){return a.wwz},findIntlKeyByAntdLocaleKey:function(){return a.Vyn},frFRIntl:function(){return a.JCI},genCopyable:function(){return a.X8c},getFieldPropsOrFormItemProps:function(){return a.wfM},getMenuData:function(){return a.vnJ},getPageTitle:function(){return a.pz1},heILIntl:function(){return a.BpW},hrHRIntl:function(){return a.p0d},idIDIntl:function(){return a.RN7},intlMap:function(){return a.Gof},intlMapKeys:function(){return a.Jmn},isBrowser:function(){return a.jUY},isDeepEqualReact:function(){return a.AdR},isDropdownValueType:function(){return a.BUJ},isImg:function(){return a.ev0},isNeedOpenHash:function(){return a.nuf},isNil:function(){return a.kKJ},isUrl:function(){return a.CBv},itITIntl:function(){return a.tHu},jaJPIntl:function(){return a.QF6},koKRIntl:function(){return a.KU4},lighten:function(){return a.$ny},menuOverlayCompatible:function(){return a.Q7O},merge:function(){return a.TSy},mnMNIntl:function(){return a.xJb},msMYIntl:function(){return a.$S1},nanoid:function(){return a.x0q},nlNLIntl:function(){return a.klt},objectToMap:function(){return a.R6F},omitBoolean:function(){return a.vF$},omitUndefined:function(){return a.Yc8},omitUndefinedAndEmptyArr:function(){return a.eQM},openVisibleCompatible:function(){return a.XkI},operationUnit:function(){return a.Nd5},parseValueToDay:function(){return a.iVP},pickControlProps:function(){return a.ceC},pickControlPropsWithId:function(){return a.VGz},pickProFormItemProps:function(){return a.vwT},pickProProps:function(){return a.j8U},plPLIntl:function(){return a.mE9},proFieldParsingText:function(){return a.MPj},proFieldParsingValueEnumToArray:function(){return a.NAp},proTheme:function(){return a.OwB},ptBRIntl:function(){return a.ahq},recordKeyToString:function(){return a.sNk},resetComponent:function(){return a.WfF},roROIntl:function(){return a.BgG},ruRUIntl:function(){return a.TWT},runFunction:function(){return a.hmX},setAlpha:function(){return a.uKp},skSKIntl:function(){return a.TwM},srRSIntl:function(){return a.EjP},stringify:function(){return a.PzD},svSEIntl:function(){return a.A5p},thTHIntl:function(){return a.hnr},trTRIntl:function(){return a.$l4},transformKeySubmitValue:function(){return a.Myu},ukUAIntl:function(){return a.Qvt},useBreakpoint:function(){return a.Gcp},useControlModel:function(){return a.Xig},useDebounceFn:function(){return a.DIZ},useDebounceValue:function(){return a.njO},useDeepCompareEffect:function(){return a.KW3},useDeepCompareEffectDebounce:function(){return a.AuA},useDeepCompareMemo:function(){return a.NYS},useDocumentTitle:function(){return a.jrk},useEditableArray:function(){return a.CBW},useEditableMap:function(){return a.jLt},useFetchData:function(){return a.$5J},useIntl:function(){return a.YBM},useLatest:function(){return a.dU$},useMountMergeState:function(){return a.i9m},usePrevious:function(){return a.D9i},useReactiveRef:function(){return a.yBk},useRefCallback:function(){return a.CcN},useRefFunction:function(){return a.Jg7},useStyle:function(){return a.XjD},useToken:function(){return a.dQu},uzUZIntl:function(){return a.e1r},version:function(){return r.i8},viVNIntl:function(){return a.xYj},zhCNIntl:function(){return a.Hid},zhTWIntl:function(){return a.V$3}});var a=e(54503),r=e(34481),X=e(72030),o=e(98403),z=e.n(o),h={};for(var Z in o)["default","version","Action","BasicLayout","BatchOperationBar","Boundary","ContentWithQuestion","ContentWithIcon","Dialog","DocDialog","FullscreenBox","Highlight","IconFont","Login","Lottie","NavMenu","PageContainer","PageLoading","FooterToolbar","ProTable","ProCard","LightFilter","Password","Ranger","DateRanger","SideTip","TreeSearch","Welcome","TagSelect","BackgroundTaskManagerConstants","BackgroundTaskManager","BaseProList","BetaSchemaForm","CellEditorTable","CheckCard","ConfigConsumer","DefaultFooter","DefaultHeader","DescriptionsSkeleton","DragSortTable","DrawerForm","DropdownFooter","EditableProTable","ErrorBoundary","FieldCode","FieldContext","FieldDatePicker","FieldIndexColumn","FieldLabel","FieldMoney","FieldPercent","FieldProgress","FieldRangePicker","FieldRender","FieldSelect","FieldStatus","FieldText","FieldTimePicker","FilterDropdown","FormControlRender","FormItemProvide","FormItemRender","FormListContext","GridContent","GridContext","Group","IndexColumn","InlineErrorFormItem","IntlConsumer","LabelIconTip","ListPageSkeleton","ListSkeleton","ListSkeletonItem","ListToolBar","ListToolbarSkeleton","LoginForm","LoginFormPage","ModalForm","PageHeader","PageHeaderSkeleton","ProBreadcrumb","ProConfigProvider","ProDescriptions","ProField","ProForm","ProFormCaptcha","ProFormCascader","ProFormCheckbox","ProFormColorPicker","ProFormContext","ProFormDateMonthRangePicker","ProFormDatePicker","ProFormDateQuarterRangePicker","ProFormDateRangePicker","ProFormDateTimePicker","ProFormDateTimeRangePicker","ProFormDateWeekRangePicker","ProFormDateYearRangePicker","ProFormDependency","ProFormDigit","ProFormDigitRange","ProFormField","ProFormFieldSet","ProFormGroup","ProFormItem","ProFormItemRender","ProFormList","ProFormMoney","ProFormRadio","ProFormRate","ProFormSegmented","ProFormSelect","ProFormSlider","ProFormSwitch","ProFormText","ProFormTextArea","ProFormTimePicker","ProFormTreeSelect","ProFormUploadButton","ProFormUploadDragger","ProHelp","ProHelpContentPanel","ProHelpDrawer","ProHelpModal","ProHelpPanel","ProHelpPopover","ProHelpProvide","ProHelpSelect","ProLayout","ProList","ProPageHeader","ProProvider","ProSkeleton","QueryFilter","RenderContentPanel","RouteContext","RowEditorTable","Search","SelectKeyProvide","SettingDrawer","Statistic","StatisticCard","StepsForm","Submitter","TableDropdown","TableItemSkeleton","TableSkeleton","TableStatus","TopNavHeader","WaterMark","arEGIntl","caESIntl","compareVersions","compatibleBorder","conversionMomentValue","conversionSubmitValue","convertMoment","coverToNewToken","createIntl","csCZIntl","dateArrayFormatter","dateFormatterMap","deDEIntl","defaultRenderText","editableRowByKey","enGBIntl","enUSIntl","esESIntl","faIRIntl","findIntlKeyByAntdLocaleKey","frFRIntl","genCopyable","getFieldPropsOrFormItemProps","getMenuData","getPageTitle","heILIntl","hrHRIntl","idIDIntl","intlMap","intlMapKeys","isBrowser","isDeepEqualReact","isDropdownValueType","isImg","isNeedOpenHash","isNil","isUrl","itITIntl","jaJPIntl","koKRIntl","lighten","menuOverlayCompatible","merge","mnMNIntl","msMYIntl","nanoid","nlNLIntl","objectToMap","omitBoolean","omitUndefined","omitUndefinedAndEmptyArr","openVisibleCompatible","operationUnit","parseValueToDay","pickControlProps","pickControlPropsWithId","pickProFormItemProps","pickProProps","plPLIntl","proFieldParsingText","proFieldParsingValueEnumToArray","proTheme","ptBRIntl","recordKeyToString","resetComponent","roROIntl","ruRUIntl","runFunction","setAlpha","skSKIntl","srRSIntl","stringify","svSEIntl","thTHIntl","trTRIntl","transformKeySubmitValue","ukUAIntl","useBreakpoint","useControlModel","useDebounceFn","useDebounceValue","useDeepCompareEffect","useDeepCompareEffectDebounce","useDeepCompareMemo","useDocumentTitle","useEditableArray","useEditableMap","useFetchData","useIntl","useLatest","useMountMergeState","usePrevious","useReactiveRef","useRefCallback","useRefFunction","useStyle","useToken","uzUZIntl","viVNIntl","zhCNIntl","zhTWIntl","LOCALE_LIST","OB_SITE_LINK"].indexOf(Z)<0&&(h[Z]=function(B){return o[B]}.bind(0,Z));e.d(n,h);var H=e(71445),I=e(70866),d=e(498),k=e(57699),v=e(96262),Y=e(10539),O=e(47471),sn=e(79466),T=e(59607),y=e(1532),tn=e(50875),b=e(27894),U=e(15215),s=e(94942),p=e(16605),m=e(84347),i=e(53206),g=e(41890),R=e(33573),P=e(14658),M=e(26939),w=e(39627),x=e(73985),N=e(99800),C=e(16463),l=e(13031),$=e(64567),nn=e(27183)},98403:function(){},31641:function(t,n,e){"use strict";e.d(n,{n:function(){return r},z:function(){return a}});var a="YYYY-MM-DD HH:mm:ss",r={page:{totalElements:0,totalPages:0,number:0,size:0},contents:[]}},80565:function(t,n,e){"use strict";e.d(n,{HT:function(){return U},Vx:function(){return sn},Xh:function(){return Y},av:function(){return O},iu:function(){return k},lV:function(){return v},mG:function(){return I},mr:function(){return b},nb:function(){return d},ob:function(){return H},sw:function(){return T},uf:function(){return tn},yI:function(){return y}});var a=e(32699),r=e.n(a),X=e(55513),o=e(11333),z=e.n(o),h=e(31641),Z=e(79775);function H(s){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,m=(0,a.toNumber)(s);return(0,X.G)(m,{base:p})}function I(s){return(0,Z.cT)(s)?"":tn((0,a.toNumber)(s)/1e3)}function d(s){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,m=p===2?1024:1e3;return Math.round((0,a.toNumber)(s)/m*100)/100}function k(s){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,m=p===2?1024:1e3;return Math.round((0,a.toNumber)(s)/m/m*100)/100}function v(s){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,m=p===2?1024:1e3;return Math.round((0,a.toNumber)(s)/m/m/m*100)/100}function Y(s){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,m=p===2?1024:1e3;return Math.round((0,a.toNumber)(s)/m/m/m/m*100)/100}function O(s){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,m=p===2?1024:1e3;return Math.round((0,a.toNumber)(s)/m/m/m/m/m*100)/100}function sn(s){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;return p===2?(0,a.toNumber)(s)*1024*1024*1024:(0,a.toNumber)(s)*1e3*1e3*1e3}function T(s){return s==="true"?!0:s==="false"?!1:!!s}function y(s){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;return(0,a.isNil)(s)?"":"".concat(Math.round((0,a.toNumber)(s)*Math.pow(10,p+2))/Math.pow(10,p),"%")}function tn(s){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;return(0,a.isNil)(s)?s:Math.round((0,a.toNumber)(s)*Math.pow(10,p))/Math.pow(10,p)}function b(s){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:h.z;if(!s)return"-";var m=(0,a.toNumber)(s);if((0,a.isNaN)(m))return z()(s).format(p);var i=s&&s.toString()&&s.toString().length;return i===16?z()(Math.round(m/1e3)).format(p):i===10?z()(Math.round(m*1e3)).format(p):m?z()(m).format(p):""}var U=function(p){var m=p==null?void 0:p.toString();return m!=null&&m.includes(".")?m==null?void 0:m.replace(/(\d)(?=(\d{3})+\.)/g,"$1,"):m==null?void 0:m.replace(/\B(?=(\d{3})+(?!\d))/g,",")}},47516:function(t,n,e){"use strict";e.r(n),e.d(n,{GB2byte:function(){return r.Vx},byte2GB:function(){return r.lV},byte2KB:function(){return r.nb},byte2MB:function(){return r.iu},byte2PB:function(){return r.av},byte2TB:function(){return r.Xh},directTo:function(){return X.Rh},downloadFile:function(){return X.Sv},findBy:function(){return X.zP},findByValue:function(){return X.aL},formatNumber:function(){return r.uf},formatTime:function(){return r.mr},humanSize:function(){return r.ob},isNullValue:function(){return X.cT},joinComponent:function(){return N},jsonParse:function(){return o},protect:function(){return z},separateNumber:function(){return r.HT},sortByEnum:function(){return Z.Wl},sortByMoment:function(){return Z.SU},sortByNumber:function(){return Z.wj},sortByString:function(){return Z.J2},stringProtect:function(){return h},toArray:function(){return X.qo},toBoolean:function(){return r.sw},toPercent:function(){return r.yI},us2ms:function(){return r.mG},useLocalStorageState:function(){return w.Z},useQuery:function(){return R},useScrollToPosition:function(){return M},useTableData:function(){return U},version:function(){return a.i8}});var a={i8:"1.0.0"},r=e(80565),X=e(79775);function o(C,l){try{return JSON.parse(C)}catch($){return l}}var z=function(l,$){return(0,X.cT)(l)?$:l},h=function(l){var $=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"-";return z(l,$)},Z=e(90595),H=e(82092),I=e.n(H),d=e(26068),k=e.n(d),v=e(67825),Y=e.n(v),O=e(32699),sn=e(76957),T=e(31641),y=["pagePropName","sizePropName"],tn={ascend:"asc",descend:"desc"},b=function(){var l=new Promise(function($){$({tableProps:{dataSource:[],loading:!1,pagination:{total:0,current:1,pageSize:10}},refresh:O.noop,search:{changeType:O.noop,submit:O.noop,reset:O.noop}})});return l.then(function($){return $}),l};function U(C){var l=C.fn,$=l===void 0?O.noop:l,nn=C.params,B=nn===void 0?{}:nn,en=C.condition,on=en===void 0?[]:en,un=C.refreshDeps,c=un===void 0?[]:un,f=C.options,E=f===void 0?{}:f,A=E,rn=A.pagePropName,D=rn===void 0?"page":rn,W=A.sizePropName,j=W===void 0?"size":W,L=Y()(A,y),_=k()({formatResult:function(K){var ln=K||{},q=ln.data,cn=q||T.n,_n=cn.page,vn=_n===void 0?{}:_n,gn=vn.totalElements,J=gn===void 0?0:gn,Q=cn.contents,an=Q===void 0?[]:Q;return{total:J,list:an}},refreshDeps:c},L),F=(0,O.some)(on,function(S){return(0,X.cT)(S)})?b:function(S){var K=S.current,ln=S.pageSize,q=S.sorter,cn=q===void 0?{}:q,_n=S.filters,vn=_n===void 0?{}:_n,gn={};Object.keys(vn).forEach(function(Q){gn[Q]=vn[Q]&&vn[Q].join(",")});var J=(0,O.omitBy)(k()(k()(I()(I()(I()({},D,K),j,ln),"sort",cn.order?"".concat(cn.field,",").concat(tn[cn.order]):null),gn),B),function(Q){return(0,O.isNil)(Q)||Q===""});return $(J)},u=(0,sn.Z)(F,_);return u&&(u.tableProps.pagination.showSizeChanger=!0,u.tableProps.pagination.showTotal=function(S){return"\u5171 ".concat(S," \u6761")}),u}var s=e(48305),p=e.n(s),m=e(75271),i=e(16348),g=function(l,$){var nn=null;if(!(0,X.cT)(l))switch($.type){case"string":nn=l==null?void 0:l.toString();break;case"number":nn=(0,O.toNumber)(l);break;case"boolean":nn=(0,r.sw)(l);break;case"json":nn=o(l,{});break;default:nn=l;break}return nn},R=function(l,$){var nn,B,en=(0,m.useRef)((nn=i.Z.parse((B=location)===null||B===void 0?void 0:B.search))!==null&&nn!==void 0?nn:{}),on=(0,m.useRef)($.reduce(function(D,W){var j=typeof W=="string"?W:W.key,L=typeof W=="string"?void 0:W.defaultValue,_=en.current[j];if((0,X.cT)(_)&&!(0,X.cT)(L)&&typeof W!="string"){var F,u,S;_=(F=(u=W.search2Query)===null||u===void 0?void 0:u.call(W,W.defaultValue))!==null&&F!==void 0?F:(S=W.defaultValue)===null||S===void 0?void 0:S.toString()}return k()(k()({},D),{},I()({},j,_))},{})),un=(0,m.useRef)($.reduce(function(D,W){var j=typeof W=="string"?W:W.key;return k()(k()({},D),{},I()({},j,typeof W!="string"&&typeof W.query2Search=="function"?W.query2Search(on.current[W.key]):g(on.current[j],W)))},{})),c=(0,m.useState)(un.current),f=p()(c,2),E=f[0],A=f[1];(0,m.useEffect)(function(){l.push({pathname:l.location.pathname,query:k()(k()({},l.query),on)})},[]),(0,m.useEffect)(function(){var D=$.reduce(function(W,j){var L,_=typeof j=="string"?j:j.key;return k()(k()({},W),{},I()({},_,typeof j!="string"&&typeof j.search2Query=="function"?j.search2Query(E[j.key]):(L=E[_])===null||L===void 0?void 0:L.toString()))},{});l.push({pathname:l.location.pathname,query:D})},[E]);var rn=function(W){A(k()(k()({},E),W))};return{values:E,setValues:rn}};function P(C,l){if(!C)return l;var $;return typeof C=="string"?$=document.querySelector(C):typeof C=="function"?$=C():"current"in C?$=C.current:$=C,$}var M=function(l,$){var nn=function(){sessionStorage.setItem("toPosition","ok")},B=$||{},en=B.mode,on=en===void 0?"sessionStorage":en,un=B.ready,c="".concat(location.pathname,"-scrollTop"),f="".concat(location.pathname,"-scrollLeft"),E=(0,m.useCallback)(function(j){var L;if(j===document){if(!document.scrollingElement)return{};L={left:document.scrollingElement.scrollLeft,top:document.scrollingElement.scrollTop}}else L={left:j.scrollLeft,top:j.scrollTop};return L},[]),A=(0,O.debounce)(function(j){var L=E(j);if(on==="sessionStorage")sessionStorage.setItem(c,(0,O.toString)(L==null?void 0:L.top)),sessionStorage.setItem(f,(0,O.toString)(L==null?void 0:L.left));else{var _=i.Z.parse(location.search);_.scrollTop=(0,O.toString)(L==null?void 0:L.top),_.scrollLeft=(0,O.toString)(L==null?void 0:L.left);var F=i.Z.stringify(_);window.history.pushState({},"","".concat(location.origin).concat(location.pathname,"?").concat(F))}},100),rn=function(){if(sessionStorage.removeItem("toPosition"),on==="sessionStorage")sessionStorage.removeItem(c),sessionStorage.removeItem(f);else{var L=i.Z.parse(location.search),_=i.Z.stringify((0,O.omit)(L,["scrollTop","scrollLeft"]));window.history.replaceState({},"","".concat(location.origin).concat(location.pathname,"?").concat(_))}},D=function(L){return L===document?document.scrollingElement:L},W=function(){var L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"top",_=P(l,document),F=sessionStorage.getItem("toPosition");if(!(!_||F!=="ok")){var u=i.Z.parse(location.search),S=on==="query"?u.scrollTop:sessionStorage.getItem(c),K=on==="query"?u.scrollLeft:sessionStorage.getItem(f),ln=D(_);L==="top"&&S&&ln&&(ln.scrollTop=(0,O.toNumber)(S)),L==="left"&&K&&ln&&(ln.scrollLeft=(0,O.toNumber)(K)),rn()}};return(0,m.useEffect)(function(){un&&W()},[un]),(0,m.useEffect)(function(){var j=P(l,document);if(j){var L=function(F){F.target&&A(F.target)};return j.addEventListener("scroll",L),function(){j.removeEventListener("scroll",L)}}},[l]),{scrollToPosition:nn}},w=e(61613),x=e(56517);function N(){var C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0,$=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"\u3001";return C.map(function(nn,B){var en=l(nn);return B===C.length-1?en:(0,x.tZ)("span",{key:B},en,$)})}},90595:function(t,n,e){"use strict";e.d(n,{J2:function(){return h},SU:function(){return Z},Wl:function(){return H},wj:function(){return z}});var a=e(11333),r=e.n(a),X=e(32699),o=e.n(X);function z(I,d,k){return(0,X.toNumber)(I[k]||0)-(0,X.toNumber)(d[k]||0)}function h(I,d,k){return I[k]>d[k]?1:I[k]<d[k]?-1:0}function Z(I,d,k){return r()(I[k]||0).valueOf()-r()(d[k]||0).valueOf()}function H(I,d,k){var v=arguments.length>3&&arguments[3]!==void 0?arguments[3]:[];return k?v.indexOf(I[k])-v.indexOf(d[k]):v.indexOf(I)-v.indexOf(d)}},85573:function(t,n,e){"use strict";e.r(n)},44866:function(t,n,e){"use strict";e.r(n)},82125:function(t,n,e){"use strict";e.r(n)},37754:function(t,n,e){"use strict";e.r(n)},72721:function(t,n,e){"use strict";var a=e(75271),r=Object.defineProperty,X=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,h=(I,d,k)=>d in I?r(I,d,{enumerable:!0,configurable:!0,writable:!0,value:k}):I[d]=k,Z=(I,d)=>{for(var k in d||(d={}))o.call(d,k)&&h(I,k,d[k]);if(X)for(var k of X(d))z.call(d,k)&&h(I,k,d[k]);return I};const H=I=>React.createElement("svg",Z({width:282,height:46,fill:"none",xmlns:"http://www.w3.org/2000/svg"},I),React.createElement("g",{clipPath:"url(#oceanbase_logo_svg__a)"},React.createElement("path",{d:"M72.01 7.84c-8.24 0-14.94 6.7-14.94 14.94 0 8.24 6.71 14.94 14.94 14.94s14.95-6.7 14.95-14.94c0-8.24-6.71-14.94-14.95-14.94Zm0 25.45c-5.73 0-10.22-4.62-10.22-10.52 0-5.9 4.49-10.51 10.22-10.51s10.23 4.52 10.23 10.51-4.4 10.52-10.23 10.52ZM100.08 19.44c2.7 0 5.12 1.67 6.17 4.26l.04.1h4.5l-.05-.21c-1.26-4.95-5.65-8.41-10.68-8.41-6.09 0-11.04 5.05-11.04 11.26s4.95 11.26 11.04 11.26c5.02 0 9.41-3.46 10.68-8.41l.05-.21h-4.5l-.04.1c-1.06 2.59-3.48 4.26-6.17 4.26-3.7 0-6.71-3.15-6.71-7.01s3.01-7.02 6.71-7.02v.03ZM123.83 15.19c-6.08 0-11.03 5.05-11.03 11.26s4.95 11.26 11.03 11.26c4.44 0 8.54-2.73 10.19-6.8l.09-.22h-4.8l-.05.07c-1.15 1.64-3.27 2.71-5.41 2.71-3.15 0-5.84-2.24-6.54-5.46l-.03-.13h17.21v-.15c.06-.42.09-.85.09-1.28 0-.79-.08-1.59-.23-2.38-1.05-5.23-5.36-8.88-10.52-8.88Zm-6.32 8.98.05-.15c.97-2.73 3.51-4.57 6.29-4.57 2.78 0 5.13 1.79 6.04 4.57l.05.15h-12.43ZM154.31 18.17l-.19-.16c-1.93-1.59-4.25-2.44-6.72-2.44-5.92 0-10.73 4.97-10.73 11.08s4.81 11.07 10.73 11.07c2.47 0 4.8-.85 6.72-2.44l.19-.16v2.37h4.39V16.51h-4.39v1.67-.01Zm-6.67 15.38c-3.64 0-6.6-3.1-6.6-6.89 0-3.79 2.96-6.91 6.6-6.91 3.64 0 6.59 3.1 6.59 6.91s-2.96 6.89-6.59 6.89ZM230.83 18.17l-.19-.16c-1.92-1.59-4.25-2.44-6.73-2.44-5.91 0-10.73 4.97-10.73 11.08s4.82 11.07 10.73 11.07c2.48 0 4.8-.85 6.73-2.44l.19-.16v2.18h4.39V16.5h-4.39v1.67Zm-6.67 15.38c-3.64 0-6.59-3.1-6.59-6.89 0-3.79 2.96-6.91 6.59-6.91s6.6 3.1 6.6 6.91-2.96 6.89-6.6 6.89ZM281.08 24.07c-1.05-5.23-5.36-8.88-10.51-8.88-6.09 0-11.03 5.05-11.03 11.26s4.95 11.26 11.03 11.26c4.44 0 8.53-2.73 10.18-6.8l.09-.22h-4.8l-.05.07c-1.15 1.64-3.27 2.71-5.4 2.71-3.16 0-5.85-2.24-6.54-5.46l-.03-.14h17.21l.02-.15c.04-.42.07-.85.07-1.28 0-.79-.08-1.59-.23-2.38l-.01.01Zm-16.84.1.05-.15c.98-2.74 3.51-4.58 6.3-4.58s5.13 1.8 6.03 4.58l.05.15h-12.43ZM177.9 16.46c-3.43-1.45-7.91-.58-10.64 2.08l-.2.19V16.5h-4.57v20.98h4.57V26.64c0-4.27 3.14-6.57 6.1-6.57 1.38 0 2.65.49 3.57 1.39 1.03 1.01 1.58 2.48 1.58 4.26v11.77h4.57V25.08c0-4.2-1.77-7.26-4.99-8.62h.01ZM207.21 22.39l-.12-.06.08-.11a8.185 8.185 0 0 0 1.82-5.14c0-4.5-3.66-8.17-8.16-8.17h-13.97v28.57h16.05c3.57 0 6.73-2.17 7.86-5.4a8.117 8.117 0 0 0-3.57-9.7l.01.01Zm-7.33-1.09h-8.08v-8.34h8.08c2.3 0 4.17 1.87 4.17 4.17s-1.87 4.17-4.17 4.17Zm-8.07 3.95h10.4c2.26 0 4.09 1.83 4.09 4.09s-1.83 4.1-4.09 4.1h-10.4v-8.19ZM253.62 25.76c-.56-.21-1.25-.43-2.13-.66-.78-.21-1.6-.4-2.3-.56l-.49-.12c-.23-.05-.45-.11-.66-.16-.59-.14-1.27-.31-1.82-.46-1.92-.53-2.89-1.02-2.89-2.21 0-1.34 1.76-2.42 3.93-2.42 2.7 0 4.53.86 5.43 2.56l.07.14 4.35-1.94-.09-.16c-1.63-2.97-5.1-4.61-9.76-4.61-5.35 0-8.38 3.21-8.51 6.23-.19 4.27 3.94 5.45 5.7 5.96l.06.02c.65.19 1.42.38 2.17.56l.23.06c.3.07.62.15.95.22l.38.09c.96.21 1.95.43 2.66.67 1.68.56 2.28 1.13 2.28 2.19 0 1.71-2.41 2.61-4.79 2.61-4.64 0-6.06-2.65-6.39-3.47l-.06-.16-4.26 1.97.06.15c.72 1.65 3.2 5.48 10.55 5.48 9.38 0 9.65-5.97 9.65-6.65 0-3.3-3.03-4.82-4.33-5.32l.01-.01Z",fill:"#000"}),React.createElement("path",{d:"M23.77.48v9.49c0 .26-.14.51-.36.65A63.79 63.79 0 0 1 .89 19.26a.76.76 0 0 1-.89-.75v-9.1c0-.36.26-.68.62-.75A70.91 70.91 0 0 0 23.06.07c.32-.19.72.04.72.41h-.01Z",fill:"url(#oceanbase_logo_svg__b)"}),React.createElement("path",{d:"M47.55 27.5v9.1c0 .36-.26.68-.62.75a70.671 70.671 0 0 0-22.44 8.59.476.476 0 0 1-.72-.41v-9.49c0-.26.13-.51.36-.65a63.79 63.79 0 0 1 22.52-8.64c.47-.08.9.28.9.75Z",fill:"url(#oceanbase_logo_svg__c)"}),React.createElement("path",{d:"M47.55 8.67v12.72c0 .37-.27.69-.64.75C26.97 25.38 20.59 37.74.77 38.09c-.43 0-.77-.34-.77-.76V24.61c0-.37.27-.69.64-.75 19.94-3.24 26.32-15.6 46.14-15.95.43 0 .77.34.77.76Z",fill:"url(#oceanbase_logo_svg__d)"})),React.createElement("defs",null,React.createElement("linearGradient",{id:"oceanbase_logo_svg__b",x1:.43,y1:19.3,x2:39,y2:-13.06,gradientUnits:"userSpaceOnUse"},React.createElement("stop",{stopColor:"#0096FE"}),React.createElement("stop",{offset:.11,stopColor:"#0896FE"}),React.createElement("stop",{offset:.27,stopColor:"#2197FE"}),React.createElement("stop",{offset:.48,stopColor:"#4999FE"}),React.createElement("stop",{offset:.72,stopColor:"#809BFE"}),React.createElement("stop",{offset:.99,stopColor:"#C49FFE"})),React.createElement("linearGradient",{id:"oceanbase_logo_svg__c",x1:24.07,y1:46.04,x2:47.11,y2:26.7,gradientUnits:"userSpaceOnUse"},React.createElement("stop",{stopColor:"#0096FE"}),React.createElement("stop",{offset:.11,stopColor:"#0896FE"}),React.createElement("stop",{offset:.27,stopColor:"#2197FE"}),React.createElement("stop",{offset:.49,stopColor:"#4999FE"}),React.createElement("stop",{offset:.73,stopColor:"#809BFE"}),React.createElement("stop",{offset:1,stopColor:"#C49FFE"})),React.createElement("linearGradient",{id:"oceanbase_logo_svg__d",x1:2.63,y1:40.74,x2:44.92,y2:5.26,gradientUnits:"userSpaceOnUse"},React.createElement("stop",{stopColor:"#0096FE"}),React.createElement("stop",{offset:.11,stopColor:"#0896FE"}),React.createElement("stop",{offset:.27,stopColor:"#2197FE"}),React.createElement("stop",{offset:.49,stopColor:"#4999FE"}),React.createElement("stop",{offset:.73,stopColor:"#809BFE"}),React.createElement("stop",{offset:1,stopColor:"#C49FFE"})),React.createElement("clipPath",{id:"oceanbase_logo_svg__a"},React.createElement("path",{fill:"#fff",d:"M0 0h281.31v46H0z"}))));n.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgyIiBoZWlnaHQ9IjQ2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGNsaXAtcGF0aD0idXJsKCNhKSI+PHBhdGggZD0iTTcyLjAxIDcuODRjLTguMjQgMC0xNC45NCA2LjctMTQuOTQgMTQuOTQgMCA4LjI0IDYuNzEgMTQuOTQgMTQuOTQgMTQuOTRzMTQuOTUtNi43IDE0Ljk1LTE0Ljk0YzAtOC4yNC02LjcxLTE0Ljk0LTE0Ljk1LTE0Ljk0Wm0wIDI1LjQ1Yy01LjczIDAtMTAuMjItNC42Mi0xMC4yMi0xMC41MiAwLTUuOSA0LjQ5LTEwLjUxIDEwLjIyLTEwLjUxczEwLjIzIDQuNTIgMTAuMjMgMTAuNTEtNC40IDEwLjUyLTEwLjIzIDEwLjUyWk0xMDAuMDggMTkuNDRjMi43IDAgNS4xMiAxLjY3IDYuMTcgNC4yNmwuMDQuMWg0LjVsLS4wNS0uMjFjLTEuMjYtNC45NS01LjY1LTguNDEtMTAuNjgtOC40MS02LjA5IDAtMTEuMDQgNS4wNS0xMS4wNCAxMS4yNnM0Ljk1IDExLjI2IDExLjA0IDExLjI2YzUuMDIgMCA5LjQxLTMuNDYgMTAuNjgtOC40MWwuMDUtLjIxaC00LjVsLS4wNC4xYy0xLjA2IDIuNTktMy40OCA0LjI2LTYuMTcgNC4yNi0zLjcgMC02LjcxLTMuMTUtNi43MS03LjAxczMuMDEtNy4wMiA2LjcxLTcuMDJ2LjAzWk0xMjMuODMgMTUuMTljLTYuMDggMC0xMS4wMyA1LjA1LTExLjAzIDExLjI2czQuOTUgMTEuMjYgMTEuMDMgMTEuMjZjNC40NCAwIDguNTQtMi43MyAxMC4xOS02LjhsLjA5LS4yMmgtNC44bC0uMDUuMDdjLTEuMTUgMS42NC0zLjI3IDIuNzEtNS40MSAyLjcxLTMuMTUgMC01Ljg0LTIuMjQtNi41NC01LjQ2bC0uMDMtLjEzaDE3LjIxdi0uMTVjLjA2LS40Mi4wOS0uODUuMDktMS4yOCAwLS43OS0uMDgtMS41OS0uMjMtMi4zOC0xLjA1LTUuMjMtNS4zNi04Ljg4LTEwLjUyLTguODhabS02LjMyIDguOTguMDUtLjE1Yy45Ny0yLjczIDMuNTEtNC41NyA2LjI5LTQuNTcgMi43OCAwIDUuMTMgMS43OSA2LjA0IDQuNTdsLjA1LjE1aC0xMi40M1pNMTU0LjMxIDE4LjE3bC0uMTktLjE2Yy0xLjkzLTEuNTktNC4yNS0yLjQ0LTYuNzItMi40NC01LjkyIDAtMTAuNzMgNC45Ny0xMC43MyAxMS4wOHM0LjgxIDExLjA3IDEwLjczIDExLjA3YzIuNDcgMCA0LjgtLjg1IDYuNzItMi40NGwuMTktLjE2djIuMzdoNC4zOVYxNi41MWgtNC4zOXYxLjY3LS4wMVptLTYuNjcgMTUuMzhjLTMuNjQgMC02LjYtMy4xLTYuNi02Ljg5IDAtMy43OSAyLjk2LTYuOTEgNi42LTYuOTEgMy42NCAwIDYuNTkgMy4xIDYuNTkgNi45MXMtMi45NiA2Ljg5LTYuNTkgNi44OVpNMjMwLjgzIDE4LjE3bC0uMTktLjE2Yy0xLjkyLTEuNTktNC4yNS0yLjQ0LTYuNzMtMi40NC01LjkxIDAtMTAuNzMgNC45Ny0xMC43MyAxMS4wOHM0LjgyIDExLjA3IDEwLjczIDExLjA3YzIuNDggMCA0LjgtLjg1IDYuNzMtMi40NGwuMTktLjE2djIuMThoNC4zOVYxNi41aC00LjM5djEuNjdabS02LjY3IDE1LjM4Yy0zLjY0IDAtNi41OS0zLjEtNi41OS02Ljg5IDAtMy43OSAyLjk2LTYuOTEgNi41OS02LjkxczYuNiAzLjEgNi42IDYuOTEtMi45NiA2Ljg5LTYuNiA2Ljg5Wk0yODEuMDggMjQuMDdjLTEuMDUtNS4yMy01LjM2LTguODgtMTAuNTEtOC44OC02LjA5IDAtMTEuMDMgNS4wNS0xMS4wMyAxMS4yNnM0Ljk1IDExLjI2IDExLjAzIDExLjI2YzQuNDQgMCA4LjUzLTIuNzMgMTAuMTgtNi44bC4wOS0uMjJoLTQuOGwtLjA1LjA3Yy0xLjE1IDEuNjQtMy4yNyAyLjcxLTUuNCAyLjcxLTMuMTYgMC01Ljg1LTIuMjQtNi41NC01LjQ2bC0uMDMtLjE0aDE3LjIxbC4wMi0uMTVjLjA0LS40Mi4wNy0uODUuMDctMS4yOCAwLS43OS0uMDgtMS41OS0uMjMtMi4zOGwtLjAxLjAxWm0tMTYuODQuMS4wNS0uMTVjLjk4LTIuNzQgMy41MS00LjU4IDYuMy00LjU4czUuMTMgMS44IDYuMDMgNC41OGwuMDUuMTVoLTEyLjQzWk0xNzcuOSAxNi40NmMtMy40My0xLjQ1LTcuOTEtLjU4LTEwLjY0IDIuMDhsLS4yLjE5VjE2LjVoLTQuNTd2MjAuOThoNC41N1YyNi42NGMwLTQuMjcgMy4xNC02LjU3IDYuMS02LjU3IDEuMzggMCAyLjY1LjQ5IDMuNTcgMS4zOSAxLjAzIDEuMDEgMS41OCAyLjQ4IDEuNTggNC4yNnYxMS43N2g0LjU3VjI1LjA4YzAtNC4yLTEuNzctNy4yNi00Ljk5LTguNjJoLjAxWk0yMDcuMjEgMjIuMzlsLS4xMi0uMDYuMDgtLjExYTguMTg1IDguMTg1IDAgMCAwIDEuODItNS4xNGMwLTQuNS0zLjY2LTguMTctOC4xNi04LjE3aC0xMy45N3YyOC41N2gxNi4wNWMzLjU3IDAgNi43My0yLjE3IDcuODYtNS40YTguMTE3IDguMTE3IDAgMCAwLTMuNTctOS43bC4wMS4wMVptLTcuMzMtMS4wOWgtOC4wOHYtOC4zNGg4LjA4YzIuMyAwIDQuMTcgMS44NyA0LjE3IDQuMTdzLTEuODcgNC4xNy00LjE3IDQuMTdabS04LjA3IDMuOTVoMTAuNGMyLjI2IDAgNC4wOSAxLjgzIDQuMDkgNC4wOXMtMS44MyA0LjEtNC4wOSA0LjFoLTEwLjR2LTguMTlaTTI1My42MiAyNS43NmMtLjU2LS4yMS0xLjI1LS40My0yLjEzLS42Ni0uNzgtLjIxLTEuNi0uNC0yLjMtLjU2bC0uNDktLjEyYy0uMjMtLjA1LS40NS0uMTEtLjY2LS4xNi0uNTktLjE0LTEuMjctLjMxLTEuODItLjQ2LTEuOTItLjUzLTIuODktMS4wMi0yLjg5LTIuMjEgMC0xLjM0IDEuNzYtMi40MiAzLjkzLTIuNDIgMi43IDAgNC41My44NiA1LjQzIDIuNTZsLjA3LjE0IDQuMzUtMS45NC0uMDktLjE2Yy0xLjYzLTIuOTctNS4xLTQuNjEtOS43Ni00LjYxLTUuMzUgMC04LjM4IDMuMjEtOC41MSA2LjIzLS4xOSA0LjI3IDMuOTQgNS40NSA1LjcgNS45NmwuMDYuMDJjLjY1LjE5IDEuNDIuMzggMi4xNy41NmwuMjMuMDZjLjMuMDcuNjIuMTUuOTUuMjJsLjM4LjA5Yy45Ni4yMSAxLjk1LjQzIDIuNjYuNjcgMS42OC41NiAyLjI4IDEuMTMgMi4yOCAyLjE5IDAgMS43MS0yLjQxIDIuNjEtNC43OSAyLjYxLTQuNjQgMC02LjA2LTIuNjUtNi4zOS0zLjQ3bC0uMDYtLjE2LTQuMjYgMS45Ny4wNi4xNWMuNzIgMS42NSAzLjIgNS40OCAxMC41NSA1LjQ4IDkuMzggMCA5LjY1LTUuOTcgOS42NS02LjY1IDAtMy4zLTMuMDMtNC44Mi00LjMzLTUuMzJsLjAxLS4wMVoiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMjMuNzcuNDh2OS40OWMwIC4yNi0uMTQuNTEtLjM2LjY1QTYzLjc5IDYzLjc5IDAgMCAxIC44OSAxOS4yNmEuNzYuNzYgMCAwIDEtLjg5LS43NXYtOS4xYzAtLjM2LjI2LS42OC42Mi0uNzVBNzAuOTEgNzAuOTEgMCAwIDAgMjMuMDYuMDdjLjMyLS4xOS43Mi4wNC43Mi40MWgtLjAxWiIgZmlsbD0idXJsKCNiKSIvPjxwYXRoIGQ9Ik00Ny41NSAyNy41djkuMWMwIC4zNi0uMjYuNjgtLjYyLjc1YTcwLjY3MSA3MC42NzEgMCAwIDAtMjIuNDQgOC41OS40NzYuNDc2IDAgMCAxLS43Mi0uNDF2LTkuNDljMC0uMjYuMTMtLjUxLjM2LS42NWE2My43OSA2My43OSAwIDAgMSAyMi41Mi04LjY0Yy40Ny0uMDguOS4yOC45Ljc1WiIgZmlsbD0idXJsKCNjKSIvPjxwYXRoIGQ9Ik00Ny41NSA4LjY3djEyLjcyYzAgLjM3LS4yNy42OS0uNjQuNzVDMjYuOTcgMjUuMzggMjAuNTkgMzcuNzQuNzcgMzguMDljLS40MyAwLS43Ny0uMzQtLjc3LS43NlYyNC42MWMwLS4zNy4yNy0uNjkuNjQtLjc1IDE5Ljk0LTMuMjQgMjYuMzItMTUuNiA0Ni4xNC0xNS45NS40MyAwIC43Ny4zNC43Ny43NloiIGZpbGw9InVybCgjZCkiLz48L2c+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iLjQzIiB5MT0iMTkuMyIgeDI9IjM5IiB5Mj0iLTEzLjA2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzAwOTZGRSIvPjxzdG9wIG9mZnNldD0iLjExIiBzdG9wLWNvbG9yPSIjMDg5NkZFIi8+PHN0b3Agb2Zmc2V0PSIuMjciIHN0b3AtY29sb3I9IiMyMTk3RkUiLz48c3RvcCBvZmZzZXQ9Ii40OCIgc3RvcC1jb2xvcj0iIzQ5OTlGRSIvPjxzdG9wIG9mZnNldD0iLjcyIiBzdG9wLWNvbG9yPSIjODA5QkZFIi8+PHN0b3Agb2Zmc2V0PSIuOTkiIHN0b3AtY29sb3I9IiNDNDlGRkUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYyIgeDE9IjI0LjA3IiB5MT0iNDYuMDQiIHgyPSI0Ny4xMSIgeTI9IjI2LjciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjMDA5NkZFIi8+PHN0b3Agb2Zmc2V0PSIuMTEiIHN0b3AtY29sb3I9IiMwODk2RkUiLz48c3RvcCBvZmZzZXQ9Ii4yNyIgc3RvcC1jb2xvcj0iIzIxOTdGRSIvPjxzdG9wIG9mZnNldD0iLjQ5IiBzdG9wLWNvbG9yPSIjNDk5OUZFIi8+PHN0b3Agb2Zmc2V0PSIuNzMiIHN0b3AtY29sb3I9IiM4MDlCRkUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNDNDlGRkUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZCIgeDE9IjIuNjMiIHkxPSI0MC43NCIgeDI9IjQ0LjkyIiB5Mj0iNS4yNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiMwMDk2RkUiLz48c3RvcCBvZmZzZXQ9Ii4xMSIgc3RvcC1jb2xvcj0iIzA4OTZGRSIvPjxzdG9wIG9mZnNldD0iLjI3IiBzdG9wLWNvbG9yPSIjMjE5N0ZFIi8+PHN0b3Agb2Zmc2V0PSIuNDkiIHN0b3AtY29sb3I9IiM0OTk5RkUiLz48c3RvcCBvZmZzZXQ9Ii43MyIgc3RvcC1jb2xvcj0iIzgwOUJGRSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0M0OUZGRSIvPjwvbGluZWFyR3JhZGllbnQ+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI4MS4zMXY0NkgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg=="},70344:function(t,n,e){"use strict";var a=e(75271),r=Object.defineProperty,X=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,h=(I,d,k)=>d in I?r(I,d,{enumerable:!0,configurable:!0,writable:!0,value:k}):I[d]=k,Z=(I,d)=>{for(var k in d||(d={}))o.call(d,k)&&h(I,k,d[k]);if(X)for(var k of X(d))z.call(d,k)&&h(I,k,d[k]);return I};const H=I=>React.createElement("svg",Z({width:282,height:46,fill:"none",xmlns:"http://www.w3.org/2000/svg"},I),React.createElement("g",{clipPath:"url(#oceanbase_logo_dark_svg__a)"},React.createElement("path",{d:"M72.01 7.84c-8.24 0-14.94 6.7-14.94 14.94 0 8.24 6.71 14.94 14.94 14.94s14.95-6.7 14.95-14.94c0-8.24-6.71-14.94-14.95-14.94Zm0 25.45c-5.73 0-10.22-4.62-10.22-10.52 0-5.9 4.49-10.51 10.22-10.51s10.23 4.52 10.23 10.51-4.4 10.52-10.23 10.52ZM100.08 19.44c2.7 0 5.12 1.67 6.17 4.26l.04.1h4.5l-.05-.21c-1.26-4.95-5.65-8.41-10.68-8.41-6.09 0-11.04 5.05-11.04 11.26s4.95 11.26 11.04 11.26c5.02 0 9.41-3.46 10.68-8.41l.05-.21h-4.5l-.04.1c-1.06 2.59-3.48 4.26-6.17 4.26-3.7 0-6.71-3.15-6.71-7.01s3.01-7.02 6.71-7.02v.03ZM123.83 15.19c-6.08 0-11.03 5.05-11.03 11.26s4.95 11.26 11.03 11.26c4.44 0 8.54-2.73 10.19-6.8l.09-.22h-4.8l-.05.07c-1.15 1.64-3.27 2.71-5.41 2.71-3.15 0-5.84-2.24-6.54-5.46l-.03-.13h17.21v-.15c.06-.42.09-.85.09-1.28 0-.79-.08-1.59-.23-2.38-1.05-5.23-5.36-8.88-10.52-8.88Zm-6.32 8.98.05-.15c.97-2.73 3.51-4.57 6.29-4.57 2.78 0 5.13 1.79 6.04 4.57l.05.15h-12.43ZM154.31 18.17l-.19-.16c-1.93-1.59-4.25-2.44-6.72-2.44-5.92 0-10.73 4.97-10.73 11.08s4.81 11.07 10.73 11.07c2.47 0 4.8-.85 6.72-2.44l.19-.16v2.37h4.39V16.51h-4.39v1.67-.01Zm-6.67 15.38c-3.64 0-6.6-3.1-6.6-6.89 0-3.79 2.96-6.91 6.6-6.91 3.64 0 6.59 3.1 6.59 6.91s-2.96 6.89-6.59 6.89ZM230.83 18.17l-.19-.16c-1.92-1.59-4.25-2.44-6.73-2.44-5.91 0-10.73 4.97-10.73 11.08s4.82 11.07 10.73 11.07c2.48 0 4.8-.85 6.73-2.44l.19-.16v2.18h4.39V16.5h-4.39v1.67Zm-6.67 15.38c-3.64 0-6.59-3.1-6.59-6.89 0-3.79 2.96-6.91 6.59-6.91s6.6 3.1 6.6 6.91-2.96 6.89-6.6 6.89ZM281.08 24.07c-1.05-5.23-5.36-8.88-10.51-8.88-6.09 0-11.03 5.05-11.03 11.26s4.95 11.26 11.03 11.26c4.44 0 8.53-2.73 10.18-6.8l.09-.22h-4.8l-.05.07c-1.15 1.64-3.27 2.71-5.4 2.71-3.16 0-5.85-2.24-6.54-5.46l-.03-.14h17.21l.02-.15c.04-.42.07-.85.07-1.28 0-.79-.08-1.59-.23-2.38l-.01.01Zm-16.84.1.05-.15c.98-2.74 3.51-4.58 6.3-4.58s5.13 1.8 6.03 4.58l.05.15h-12.43ZM177.9 16.46c-3.43-1.45-7.91-.58-10.64 2.08l-.2.19V16.5h-4.57v20.98h4.57V26.64c0-4.27 3.14-6.57 6.1-6.57 1.38 0 2.65.49 3.57 1.39 1.03 1.01 1.58 2.48 1.58 4.26v11.77h4.57V25.08c0-4.2-1.77-7.26-4.99-8.62h.01ZM207.21 22.39l-.12-.06.08-.11a8.185 8.185 0 0 0 1.82-5.14c0-4.5-3.66-8.17-8.16-8.17h-13.97v28.57h16.05c3.57 0 6.73-2.17 7.86-5.4a8.117 8.117 0 0 0-3.57-9.7l.01.01Zm-7.33-1.09h-8.08v-8.34h8.08c2.3 0 4.17 1.87 4.17 4.17s-1.87 4.17-4.17 4.17Zm-8.07 3.95h10.4c2.26 0 4.09 1.83 4.09 4.09s-1.83 4.1-4.09 4.1h-10.4v-8.19ZM253.62 25.76c-.56-.21-1.25-.43-2.13-.66-.78-.21-1.6-.4-2.3-.56l-.49-.12c-.23-.05-.45-.11-.66-.16-.59-.14-1.27-.31-1.82-.46-1.92-.53-2.89-1.02-2.89-2.21 0-1.34 1.76-2.42 3.93-2.42 2.7 0 4.53.86 5.43 2.56l.07.14 4.35-1.94-.09-.16c-1.63-2.97-5.1-4.61-9.76-4.61-5.35 0-8.38 3.21-8.51 6.23-.19 4.27 3.94 5.45 5.7 5.96l.06.02c.65.19 1.42.38 2.17.56l.23.06c.3.07.62.15.95.22l.38.09c.96.21 1.95.43 2.66.67 1.68.56 2.28 1.13 2.28 2.19 0 1.71-2.41 2.61-4.79 2.61-4.64 0-6.06-2.65-6.39-3.47l-.06-.16-4.26 1.97.06.15c.72 1.65 3.2 5.48 10.55 5.48 9.38 0 9.65-5.97 9.65-6.65 0-3.3-3.03-4.82-4.33-5.32l.01-.01Z",fill:"#fff"}),React.createElement("path",{d:"M23.77.48v9.49c0 .26-.14.51-.36.65A63.79 63.79 0 0 1 .89 19.26a.76.76 0 0 1-.89-.75v-9.1c0-.36.26-.68.62-.75A70.91 70.91 0 0 0 23.06.07c.32-.19.72.04.72.41h-.01Z",fill:"url(#oceanbase_logo_dark_svg__b)"}),React.createElement("path",{d:"M47.55 27.5v9.1c0 .36-.26.68-.62.75a70.671 70.671 0 0 0-22.44 8.59.476.476 0 0 1-.72-.41v-9.49c0-.26.13-.51.36-.65a63.79 63.79 0 0 1 22.52-8.64c.47-.08.9.28.9.75Z",fill:"url(#oceanbase_logo_dark_svg__c)"}),React.createElement("path",{d:"M47.55 8.67v12.72c0 .37-.27.69-.64.75C26.97 25.38 20.59 37.74.77 38.09c-.43 0-.77-.34-.77-.76V24.61c0-.37.27-.69.64-.75 19.94-3.24 26.32-15.6 46.14-15.95.43 0 .77.34.77.76Z",fill:"url(#oceanbase_logo_dark_svg__d)"})),React.createElement("defs",null,React.createElement("linearGradient",{id:"oceanbase_logo_dark_svg__b",x1:.43,y1:19.3,x2:39,y2:-13.06,gradientUnits:"userSpaceOnUse"},React.createElement("stop",{stopColor:"#0096FE"}),React.createElement("stop",{offset:.11,stopColor:"#0896FE"}),React.createElement("stop",{offset:.27,stopColor:"#2197FE"}),React.createElement("stop",{offset:.48,stopColor:"#4999FE"}),React.createElement("stop",{offset:.72,stopColor:"#809BFE"}),React.createElement("stop",{offset:.99,stopColor:"#C49FFE"})),React.createElement("linearGradient",{id:"oceanbase_logo_dark_svg__c",x1:24.07,y1:46.04,x2:47.11,y2:26.7,gradientUnits:"userSpaceOnUse"},React.createElement("stop",{stopColor:"#0096FE"}),React.createElement("stop",{offset:.11,stopColor:"#0896FE"}),React.createElement("stop",{offset:.27,stopColor:"#2197FE"}),React.createElement("stop",{offset:.49,stopColor:"#4999FE"}),React.createElement("stop",{offset:.73,stopColor:"#809BFE"}),React.createElement("stop",{offset:1,stopColor:"#C49FFE"})),React.createElement("linearGradient",{id:"oceanbase_logo_dark_svg__d",x1:2.63,y1:40.74,x2:44.92,y2:5.26,gradientUnits:"userSpaceOnUse"},React.createElement("stop",{stopColor:"#0096FE"}),React.createElement("stop",{offset:.11,stopColor:"#0896FE"}),React.createElement("stop",{offset:.27,stopColor:"#2197FE"}),React.createElement("stop",{offset:.49,stopColor:"#4999FE"}),React.createElement("stop",{offset:.73,stopColor:"#809BFE"}),React.createElement("stop",{offset:1,stopColor:"#C49FFE"})),React.createElement("clipPath",{id:"oceanbase_logo_dark_svg__a"},React.createElement("path",{fill:"#fff",d:"M0 0h281.31v46H0z"}))));n.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgyIiBoZWlnaHQ9IjQ2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGNsaXAtcGF0aD0idXJsKCNhKSI+PHBhdGggZD0iTTcyLjAxIDcuODRjLTguMjQgMC0xNC45NCA2LjctMTQuOTQgMTQuOTQgMCA4LjI0IDYuNzEgMTQuOTQgMTQuOTQgMTQuOTRzMTQuOTUtNi43IDE0Ljk1LTE0Ljk0YzAtOC4yNC02LjcxLTE0Ljk0LTE0Ljk1LTE0Ljk0Wm0wIDI1LjQ1Yy01LjczIDAtMTAuMjItNC42Mi0xMC4yMi0xMC41MiAwLTUuOSA0LjQ5LTEwLjUxIDEwLjIyLTEwLjUxczEwLjIzIDQuNTIgMTAuMjMgMTAuNTEtNC40IDEwLjUyLTEwLjIzIDEwLjUyWk0xMDAuMDggMTkuNDRjMi43IDAgNS4xMiAxLjY3IDYuMTcgNC4yNmwuMDQuMWg0LjVsLS4wNS0uMjFjLTEuMjYtNC45NS01LjY1LTguNDEtMTAuNjgtOC40MS02LjA5IDAtMTEuMDQgNS4wNS0xMS4wNCAxMS4yNnM0Ljk1IDExLjI2IDExLjA0IDExLjI2YzUuMDIgMCA5LjQxLTMuNDYgMTAuNjgtOC40MWwuMDUtLjIxaC00LjVsLS4wNC4xYy0xLjA2IDIuNTktMy40OCA0LjI2LTYuMTcgNC4yNi0zLjcgMC02LjcxLTMuMTUtNi43MS03LjAxczMuMDEtNy4wMiA2LjcxLTcuMDJ2LjAzWk0xMjMuODMgMTUuMTljLTYuMDggMC0xMS4wMyA1LjA1LTExLjAzIDExLjI2czQuOTUgMTEuMjYgMTEuMDMgMTEuMjZjNC40NCAwIDguNTQtMi43MyAxMC4xOS02LjhsLjA5LS4yMmgtNC44bC0uMDUuMDdjLTEuMTUgMS42NC0zLjI3IDIuNzEtNS40MSAyLjcxLTMuMTUgMC01Ljg0LTIuMjQtNi41NC01LjQ2bC0uMDMtLjEzaDE3LjIxdi0uMTVjLjA2LS40Mi4wOS0uODUuMDktMS4yOCAwLS43OS0uMDgtMS41OS0uMjMtMi4zOC0xLjA1LTUuMjMtNS4zNi04Ljg4LTEwLjUyLTguODhabS02LjMyIDguOTguMDUtLjE1Yy45Ny0yLjczIDMuNTEtNC41NyA2LjI5LTQuNTcgMi43OCAwIDUuMTMgMS43OSA2LjA0IDQuNTdsLjA1LjE1aC0xMi40M1pNMTU0LjMxIDE4LjE3bC0uMTktLjE2Yy0xLjkzLTEuNTktNC4yNS0yLjQ0LTYuNzItMi40NC01LjkyIDAtMTAuNzMgNC45Ny0xMC43MyAxMS4wOHM0LjgxIDExLjA3IDEwLjczIDExLjA3YzIuNDcgMCA0LjgtLjg1IDYuNzItMi40NGwuMTktLjE2djIuMzdoNC4zOVYxNi41MWgtNC4zOXYxLjY3LS4wMVptLTYuNjcgMTUuMzhjLTMuNjQgMC02LjYtMy4xLTYuNi02Ljg5IDAtMy43OSAyLjk2LTYuOTEgNi42LTYuOTEgMy42NCAwIDYuNTkgMy4xIDYuNTkgNi45MXMtMi45NiA2Ljg5LTYuNTkgNi44OVpNMjMwLjgzIDE4LjE3bC0uMTktLjE2Yy0xLjkyLTEuNTktNC4yNS0yLjQ0LTYuNzMtMi40NC01LjkxIDAtMTAuNzMgNC45Ny0xMC43MyAxMS4wOHM0LjgyIDExLjA3IDEwLjczIDExLjA3YzIuNDggMCA0LjgtLjg1IDYuNzMtMi40NGwuMTktLjE2djIuMThoNC4zOVYxNi41aC00LjM5djEuNjdabS02LjY3IDE1LjM4Yy0zLjY0IDAtNi41OS0zLjEtNi41OS02Ljg5IDAtMy43OSAyLjk2LTYuOTEgNi41OS02LjkxczYuNiAzLjEgNi42IDYuOTEtMi45NiA2Ljg5LTYuNiA2Ljg5Wk0yODEuMDggMjQuMDdjLTEuMDUtNS4yMy01LjM2LTguODgtMTAuNTEtOC44OC02LjA5IDAtMTEuMDMgNS4wNS0xMS4wMyAxMS4yNnM0Ljk1IDExLjI2IDExLjAzIDExLjI2YzQuNDQgMCA4LjUzLTIuNzMgMTAuMTgtNi44bC4wOS0uMjJoLTQuOGwtLjA1LjA3Yy0xLjE1IDEuNjQtMy4yNyAyLjcxLTUuNCAyLjcxLTMuMTYgMC01Ljg1LTIuMjQtNi41NC01LjQ2bC0uMDMtLjE0aDE3LjIxbC4wMi0uMTVjLjA0LS40Mi4wNy0uODUuMDctMS4yOCAwLS43OS0uMDgtMS41OS0uMjMtMi4zOGwtLjAxLjAxWm0tMTYuODQuMS4wNS0uMTVjLjk4LTIuNzQgMy41MS00LjU4IDYuMy00LjU4czUuMTMgMS44IDYuMDMgNC41OGwuMDUuMTVoLTEyLjQzWk0xNzcuOSAxNi40NmMtMy40My0xLjQ1LTcuOTEtLjU4LTEwLjY0IDIuMDhsLS4yLjE5VjE2LjVoLTQuNTd2MjAuOThoNC41N1YyNi42NGMwLTQuMjcgMy4xNC02LjU3IDYuMS02LjU3IDEuMzggMCAyLjY1LjQ5IDMuNTcgMS4zOSAxLjAzIDEuMDEgMS41OCAyLjQ4IDEuNTggNC4yNnYxMS43N2g0LjU3VjI1LjA4YzAtNC4yLTEuNzctNy4yNi00Ljk5LTguNjJoLjAxWk0yMDcuMjEgMjIuMzlsLS4xMi0uMDYuMDgtLjExYTguMTg1IDguMTg1IDAgMCAwIDEuODItNS4xNGMwLTQuNS0zLjY2LTguMTctOC4xNi04LjE3aC0xMy45N3YyOC41N2gxNi4wNWMzLjU3IDAgNi43My0yLjE3IDcuODYtNS40YTguMTE3IDguMTE3IDAgMCAwLTMuNTctOS43bC4wMS4wMVptLTcuMzMtMS4wOWgtOC4wOHYtOC4zNGg4LjA4YzIuMyAwIDQuMTcgMS44NyA0LjE3IDQuMTdzLTEuODcgNC4xNy00LjE3IDQuMTdabS04LjA3IDMuOTVoMTAuNGMyLjI2IDAgNC4wOSAxLjgzIDQuMDkgNC4wOXMtMS44MyA0LjEtNC4wOSA0LjFoLTEwLjR2LTguMTlaTTI1My42MiAyNS43NmMtLjU2LS4yMS0xLjI1LS40My0yLjEzLS42Ni0uNzgtLjIxLTEuNi0uNC0yLjMtLjU2bC0uNDktLjEyYy0uMjMtLjA1LS40NS0uMTEtLjY2LS4xNi0uNTktLjE0LTEuMjctLjMxLTEuODItLjQ2LTEuOTItLjUzLTIuODktMS4wMi0yLjg5LTIuMjEgMC0xLjM0IDEuNzYtMi40MiAzLjkzLTIuNDIgMi43IDAgNC41My44NiA1LjQzIDIuNTZsLjA3LjE0IDQuMzUtMS45NC0uMDktLjE2Yy0xLjYzLTIuOTctNS4xLTQuNjEtOS43Ni00LjYxLTUuMzUgMC04LjM4IDMuMjEtOC41MSA2LjIzLS4xOSA0LjI3IDMuOTQgNS40NSA1LjcgNS45NmwuMDYuMDJjLjY1LjE5IDEuNDIuMzggMi4xNy41NmwuMjMuMDZjLjMuMDcuNjIuMTUuOTUuMjJsLjM4LjA5Yy45Ni4yMSAxLjk1LjQzIDIuNjYuNjcgMS42OC41NiAyLjI4IDEuMTMgMi4yOCAyLjE5IDAgMS43MS0yLjQxIDIuNjEtNC43OSAyLjYxLTQuNjQgMC02LjA2LTIuNjUtNi4zOS0zLjQ3bC0uMDYtLjE2LTQuMjYgMS45Ny4wNi4xNWMuNzIgMS42NSAzLjIgNS40OCAxMC41NSA1LjQ4IDkuMzggMCA5LjY1LTUuOTcgOS42NS02LjY1IDAtMy4zLTMuMDMtNC44Mi00LjMzLTUuMzJsLjAxLS4wMVoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMjMuNzcuNDh2OS40OWMwIC4yNi0uMTQuNTEtLjM2LjY1QTYzLjc5IDYzLjc5IDAgMCAxIC44OSAxOS4yNmEuNzYuNzYgMCAwIDEtLjg5LS43NXYtOS4xYzAtLjM2LjI2LS42OC42Mi0uNzVBNzAuOTEgNzAuOTEgMCAwIDAgMjMuMDYuMDdjLjMyLS4xOS43Mi4wNC43Mi40MWgtLjAxWiIgZmlsbD0idXJsKCNiKSIvPjxwYXRoIGQ9Ik00Ny41NSAyNy41djkuMWMwIC4zNi0uMjYuNjgtLjYyLjc1YTcwLjY3MSA3MC42NzEgMCAwIDAtMjIuNDQgOC41OS40NzYuNDc2IDAgMCAxLS43Mi0uNDF2LTkuNDljMC0uMjYuMTMtLjUxLjM2LS42NWE2My43OSA2My43OSAwIDAgMSAyMi41Mi04LjY0Yy40Ny0uMDguOS4yOC45Ljc1WiIgZmlsbD0idXJsKCNjKSIvPjxwYXRoIGQ9Ik00Ny41NSA4LjY3djEyLjcyYzAgLjM3LS4yNy42OS0uNjQuNzVDMjYuOTcgMjUuMzggMjAuNTkgMzcuNzQuNzcgMzguMDljLS40MyAwLS43Ny0uMzQtLjc3LS43NlYyNC42MWMwLS4zNy4yNy0uNjkuNjQtLjc1IDE5Ljk0LTMuMjQgMjYuMzItMTUuNiA0Ni4xNC0xNS45NS40MyAwIC43Ny4zNC43Ny43NloiIGZpbGw9InVybCgjZCkiLz48L2c+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iLjQzIiB5MT0iMTkuMyIgeDI9IjM5IiB5Mj0iLTEzLjA2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzAwOTZGRSIvPjxzdG9wIG9mZnNldD0iLjExIiBzdG9wLWNvbG9yPSIjMDg5NkZFIi8+PHN0b3Agb2Zmc2V0PSIuMjciIHN0b3AtY29sb3I9IiMyMTk3RkUiLz48c3RvcCBvZmZzZXQ9Ii40OCIgc3RvcC1jb2xvcj0iIzQ5OTlGRSIvPjxzdG9wIG9mZnNldD0iLjcyIiBzdG9wLWNvbG9yPSIjODA5QkZFIi8+PHN0b3Agb2Zmc2V0PSIuOTkiIHN0b3AtY29sb3I9IiNDNDlGRkUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYyIgeDE9IjI0LjA3IiB5MT0iNDYuMDQiIHgyPSI0Ny4xMSIgeTI9IjI2LjciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjMDA5NkZFIi8+PHN0b3Agb2Zmc2V0PSIuMTEiIHN0b3AtY29sb3I9IiMwODk2RkUiLz48c3RvcCBvZmZzZXQ9Ii4yNyIgc3RvcC1jb2xvcj0iIzIxOTdGRSIvPjxzdG9wIG9mZnNldD0iLjQ5IiBzdG9wLWNvbG9yPSIjNDk5OUZFIi8+PHN0b3Agb2Zmc2V0PSIuNzMiIHN0b3AtY29sb3I9IiM4MDlCRkUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNDNDlGRkUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZCIgeDE9IjIuNjMiIHkxPSI0MC43NCIgeDI9IjQ0LjkyIiB5Mj0iNS4yNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiMwMDk2RkUiLz48c3RvcCBvZmZzZXQ9Ii4xMSIgc3RvcC1jb2xvcj0iIzA4OTZGRSIvPjxzdG9wIG9mZnNldD0iLjI3IiBzdG9wLWNvbG9yPSIjMjE5N0ZFIi8+PHN0b3Agb2Zmc2V0PSIuNDkiIHN0b3AtY29sb3I9IiM0OTk5RkUiLz48c3RvcCBvZmZzZXQ9Ii43MyIgc3RvcC1jb2xvcj0iIzgwOUJGRSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0M0OUZGRSIvPjwvbGluZWFyR3JhZGllbnQ+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI4MS4zMXY0NkgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg=="},6992:function(t,n){"use strict";n.Z=`import React, { useState, useEffect } from 'react';
import { Area } from '@oceanbase/charts';

export default () => {
  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };
  useEffect(() => {
    asyncFetch();
  }, []);
  const config = {
    data,
    xField: 'timePeriod',
    yField: 'value',
    xAxis: {
      tickCount: 7,
    },
  };
  return <Area {...config} />;
};
`},52653:function(t,n){"use strict";n.Z=`import React, { useState, useEffect } from 'react';
import { Area } from '@oceanbase/charts';

export default () => {
  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/67ef5751-b228-417c-810a-962f978af3e7.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };
  useEffect(() => {
    asyncFetch();
  }, []);
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'country',
    isPercent: true,
    xAxis: {
      range: [0, 1],
    },
  };
  return <Area {...config} />;
};
`},24660:function(t,n){"use strict";n.Z=`import React, { useState, useEffect } from 'react';
import { Area } from '@oceanbase/charts';

export default () => {
  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/b21e7336-0b3e-486c-9070-612ede49284e.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };
  useEffect(() => {
    asyncFetch();
  }, []);
  const config = {
    data,
    xField: 'date',
    yField: 'value',
    seriesField: 'country',
    xAxis: {
      tickCount: 7,
    },
  };
  return <Area {...config} />;
};
`},91564:function(t,n){"use strict";n.Z=`import React, { useState, useEffect } from 'react';
import { Area } from '@oceanbase/charts';

export default () => {
  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/b21e7336-0b3e-486c-9070-612ede49284e.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };
  useEffect(() => {
    asyncFetch();
  }, []);
  const config = {
    data,
    autoFit: false,
    height: 160,
    width: 400,
    xField: 'date',
    yField: 'value',
    seriesField: 'country',
    xAxis: {
      tickCount: 7,
    },
    tooltip: {
      scrollable: true,
    },
  };
  return <Area {...config} />;
};
`},32153:function(t,n){"use strict";n.Z=`import React from 'react';
import { Bar } from '@oceanbase/charts';
import type { BarConfig } from '@oceanbase/charts';

export default () => {
  const data = [
    {
      year: '1951',
      value: 38,
    },
    {
      year: '1952',
      value: 52,
    },
    {
      year: '1956',
      value: 61,
    },
    {
      year: '1957',
      value: 138,
    },
    {
      year: '1958',
      value: 48,
    },
  ];
  const config: BarConfig = {
    data,
    xField: 'value',
    yField: 'year',
    legend: {
      position: 'top-left',
    },
  };

  return <Bar {...config} />;
};
`},10083:function(t,n){"use strict";n.Z=`import React from 'react';
import { Bar } from '@oceanbase/charts';
import type { BarConfig } from '@oceanbase/charts';

export default () => {
  const data = [
    {
      label: 'Mon.',
      type: 'series1',
      value: 2800,
    },
    {
      label: 'Mon.',
      type: 'series2',
      value: 2260,
    },
    {
      label: 'Tues.',
      type: 'series1',
      value: 1800,
    },
    {
      label: 'Tues.',
      type: 'series2',
      value: 1300,
    },
    {
      label: 'Wed.',
      type: 'series1',
      value: 950,
    },
    {
      label: 'Wed.',
      type: 'series2',
      value: 900,
    },
    {
      label: 'Thur.',
      type: 'series1',
      value: 500,
    },
    {
      label: 'Thur.',
      type: 'series2',
      value: 390,
    },
    {
      label: 'Fri.',
      type: 'series1',
      value: 170,
    },
    {
      label: 'Fri.',
      type: 'series2',
      value: 100,
    },
  ];
  const config: BarConfig = {
    data,
    isGroup: true,
    xField: 'value',
    yField: 'label',
    seriesField: 'type',
  };

  return <Bar {...config} />;
};
`},12528:function(t,n){"use strict";n.Z=`import React from 'react';
import { Bar } from '@oceanbase/charts';
import type { BarConfig } from '@oceanbase/charts';

export default () => {
  const data = [
    {
      country: 'Asia',
      year: '1750',
      value: 502,
    },
    {
      country: 'Asia',
      year: '1800',
      value: 635,
    },
    {
      country: 'Asia',
      year: '1850',
      value: 809,
    },
    {
      country: 'Asia',
      year: '1900',
      value: 947,
    },
    {
      country: 'Asia',
      year: '1950',
      value: 1402,
    },
    {
      country: 'Asia',
      year: '1999',
      value: 3634,
    },
    {
      country: 'Asia',
      year: '2050',
      value: 5268,
    },
    {
      country: 'Africa',
      year: '1750',
      value: 106,
    },
    {
      country: 'Africa',
      year: '1800',
      value: 107,
    },
    {
      country: 'Africa',
      year: '1850',
      value: 111,
    },
    {
      country: 'Africa',
      year: '1900',
      value: 133,
    },
    {
      country: 'Africa',
      year: '1950',
      value: 221,
    },
    {
      country: 'Africa',
      year: '1999',
      value: 767,
    },
    {
      country: 'Africa',
      year: '2050',
      value: 1766,
    },
    {
      country: 'Europe',
      year: '1750',
      value: 163,
    },
    {
      country: 'Europe',
      year: '1800',
      value: 203,
    },
    {
      country: 'Europe',
      year: '1850',
      value: 276,
    },
    {
      country: 'Europe',
      year: '1900',
      value: 408,
    },
    {
      country: 'Europe',
      year: '1950',
      value: 547,
    },
    {
      country: 'Europe',
      year: '1999',
      value: 729,
    },
    {
      country: 'Europe',
      year: '2050',
      value: 628,
    },
  ];
  const config: BarConfig = {
    data,
    xField: 'value',
    yField: 'year',
    seriesField: 'country',
    isPercent: true,
    isStack: true,
  };
  return <Bar data={data} {...config} />;
};
`},1593:function(t,n){"use strict";n.Z=`import React from 'react';
import { Bar } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  const data = [
    {
      type: 'Sprint',
      value: 0.95,
    },
    {
      type: 'Marathon',
      value: 0.72,
    },
    {
      type: 'Soccer',
      value: 0.64,
    },
    {
      type: 'Basketball',
      value: 0.32,
    },
    {
      type: 'Tennis',
      value: 0.21,
    },
  ];
  const config1 = {
    isProgress: true,
    xField: 'value',
    yField: 'type',
    meta: {
      value: {
        alias: 'Match Progress',
      },
    },
  };
  const config2 = {
    ...config1,
    warningPercent: 0.7,
    dangerPercent: 0.8,
  };
  return (
    <Row gutter={200}>
      <Col span={12}>
        <Bar height={200} data={data} {...config1} />
      </Col>
      <Col span={12}>
        <Bar height={200} data={data} {...config2} />
      </Col>
    </Row>
  );
};
`},51454:function(t,n){"use strict";n.Z=`import React from 'react';
import { Bar } from '@oceanbase/charts';
import type { BarConfig } from '@oceanbase/charts';

export default () => {
  const data = [
    {
      type: 'Category A',
      values: [76, 100],
    },
    {
      type: 'Category B',
      values: [56, 108],
    },
    {
      type: 'Category C',
      values: [38, 129],
    },
    {
      type: 'Category D',
      values: [58, 155],
    },
    {
      type: 'Category E',
      values: [45, 120],
    },
    {
      type: 'Category F',
      values: [23, 99],
    },
    {
      type: 'Category G',
      values: [18, 56],
    },
    {
      type: 'Category H',
      values: [18, 34],
    },
  ];
  const config: BarConfig = {
    data,
    xField: 'values',
    yField: 'type',
    isRange: true,
  };
  return <Bar {...config} />;
};
`},71780:function(t,n){"use strict";n.Z=`import React from 'react';
import { Bar } from '@oceanbase/charts';
import type { BarConfig } from '@oceanbase/charts';

export default () => {
  const data = [
    {
      year: '1991',
      value: 3,
      type: 'Lon',
    },
    {
      year: '1992',
      value: 4,
      type: 'Lon',
    },
    {
      year: '1993',
      value: 3.5,
      type: 'Lon',
    },
    {
      year: '1994',
      value: 5,
      type: 'Lon',
    },
    {
      year: '1995',
      value: 4.9,
      type: 'Lon',
    },
    {
      year: '1991',
      value: 3,
      type: 'Bor',
    },
    {
      year: '1992',
      value: 4,
      type: 'Bor',
    },
    {
      year: '1993',
      value: 3.5,
      type: 'Bor',
    },
    {
      year: '1994',
      value: 5,
      type: 'Bor',
    },
    {
      year: '1995',
      value: 4.9,
      type: 'Bor',
    },
    {
      year: '1991',
      value: 4.5,
      type: 'Jon',
    },
    {
      year: '1992',
      value: 5,
      type: 'Jon',
    },
    {
      year: '1993',
      value: 3,
      type: 'Jon',
    },
    {
      year: '1994',
      value: 4.9,
      type: 'Jon',
    },
    {
      year: '1995',
      value: 4,
      type: 'Jon',
    },
  ];
  const config: BarConfig = {
    data,
    isStack: true,
    xField: 'value',
    yField: 'year',
    seriesField: 'type',
  };
  return <Bar {...config} />;
};
`},95592:function(t,n){"use strict";n.Z=`import React from 'react';
import { Column } from '@oceanbase/charts';
import type { ColumnConfig } from '@oceanbase/charts';

export default () => {
  const data = [
    {
      type: 'Furniture',
      sales: 38,
    },
    {
      type: 'Groceries',
      sales: 52,
    },
    {
      type: 'Fresh',
      sales: 61,
    },
    {
      type: 'Beauty',
      sales: 145,
    },
    {
      type: 'Baby',
      sales: 48,
    },
    {
      type: 'Food',
      sales: 38,
    },
    {
      type: 'Beverages',
      sales: 38,
    },
    {
      type: 'Cleaning',
      sales: 38,
    },
  ];
  const config: ColumnConfig = {
    data,
    xField: 'type',
    yField: 'sales',
    label: {
      // Position of data labels can be set manually
      position: 'top',
    },
  };
  return <Column {...config} />;
};
`},85047:function(t,n){"use strict";n.Z=`import React from 'react';
import { Column } from '@oceanbase/charts';
import type { ColumnConfig } from '@oceanbase/charts';

export default () => {
  const data = [
    {
      label: 'Mon.',
      type: 'series1',
      value: 2800,
    },
    {
      label: 'Mon.',
      type: 'series2',
      value: 2260,
    },
    {
      label: 'Tues.',
      type: 'series1',
      value: 1800,
    },
    {
      label: 'Tues.',
      type: 'series2',
      value: 1300,
    },
    {
      label: 'Wed.',
      type: 'series1',
      value: 950,
    },
    {
      label: 'Wed.',
      type: 'series2',
      value: 900,
    },
    {
      label: 'Thur.',
      type: 'series1',
      value: 500,
    },
    {
      label: 'Thur.',
      type: 'series2',
      value: 390,
    },
    {
      label: 'Fri.',
      type: 'series1',
      value: 170,
    },
    {
      label: 'Fri.',
      type: 'series2',
      value: 100,
    },
  ];
  const config: ColumnConfig = {
    data,
    isGroup: true,
    xField: 'label',
    yField: 'value',
    seriesField: 'type',
  };
  return <Column {...config} />;
};
`},84659:function(t,n){"use strict";n.Z=`import React from 'react';
import { Column } from '@oceanbase/charts';
import type { ColumnConfig } from '@oceanbase/charts';

export default () => {
  const data = [
    {
      country: 'Asia',
      year: '1750',
      value: 502,
    },
    {
      country: 'Asia',
      year: '1800',
      value: 635,
    },
    {
      country: 'Asia',
      year: '1850',
      value: 809,
    },
    {
      country: 'Asia',
      year: '1900',
      value: 947,
    },
    {
      country: 'Asia',
      year: '1950',
      value: 1402,
    },
    {
      country: 'Asia',
      year: '1999',
      value: 3634,
    },
    {
      country: 'Asia',
      year: '2050',
      value: 5268,
    },
    {
      country: 'Africa',
      year: '1750',
      value: 106,
    },
    {
      country: 'Africa',
      year: '1800',
      value: 107,
    },
    {
      country: 'Africa',
      year: '1850',
      value: 111,
    },
    {
      country: 'Africa',
      year: '1900',
      value: 133,
    },
    {
      country: 'Africa',
      year: '1950',
      value: 221,
    },
    {
      country: 'Africa',
      year: '1999',
      value: 767,
    },
    {
      country: 'Africa',
      year: '2050',
      value: 1766,
    },
    {
      country: 'Europe',
      year: '1750',
      value: 163,
    },
    {
      country: 'Europe',
      year: '1800',
      value: 203,
    },
    {
      country: 'Europe',
      year: '1850',
      value: 276,
    },
    {
      country: 'Europe',
      year: '1900',
      value: 408,
    },
    {
      country: 'Europe',
      year: '1950',
      value: 547,
    },
    {
      country: 'Europe',
      year: '1999',
      value: 729,
    },
    {
      country: 'Europe',
      year: '2050',
      value: 628,
    },
  ];
  const config: ColumnConfig = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'country',
    isPercent: true,
    isStack: true,
  };

  return <Column {...config} />;
};
`},86533:function(t,n){"use strict";n.Z=`import React from 'react';
import { Column } from '@oceanbase/charts';
import type { ColumnConfig } from '@oceanbase/charts';

export default () => {
  const data = [
    {
      type: 'Category A',
      values: [76, 100],
    },
    {
      type: 'Category B',
      values: [56, 108],
    },
    {
      type: 'Category C',
      values: [38, 129],
    },
    {
      type: 'Category D',
      values: [58, 155],
    },
    {
      type: 'Category E',
      values: [45, 120],
    },
    {
      type: 'Category F',
      values: [23, 99],
    },
    {
      type: 'Category G',
      values: [18, 56],
    },
    {
      type: 'Category H',
      values: [18, 34],
    },
  ];
  const config: ColumnConfig = {
    data,
    xField: 'type',
    yField: 'values',
    isRange: true,
  };

  return <Column {...config} />;
};
`},29012:function(t,n){"use strict";n.Z=`import React from 'react';
import { Column } from '@oceanbase/charts';
import type { ColumnConfig } from '@oceanbase/charts';

export default () => {
  const data = [
    {
      year: '1991',
      value: 3,
      type: 'Lon',
    },
    {
      year: '1992',
      value: 4,
      type: 'Lon',
    },
    {
      year: '1993',
      value: 3.5,
      type: 'Lon',
    },
    {
      year: '1994',
      value: 5,
      type: 'Lon',
    },
    {
      year: '1995',
      value: 4.9,
      type: 'Lon',
    },
    {
      year: '1996',
      value: 4.7,
      type: 'Lon',
    },
    {
      year: '1997',
      value: 6.1,
      type: 'Lon',
    },
    {
      year: '1998',
      value: 3.8,
      type: 'Lon',
    },
    {
      year: '1991',
      value: 3,
      type: 'Bor',
    },
    {
      year: '1992',
      value: 4,
      type: 'Bor',
    },
    {
      year: '1993',
      value: 3.5,
      type: 'Bor',
    },
    {
      year: '1994',
      value: 5,
      type: 'Bor',
    },
    {
      year: '1995',
      value: 4.9,
      type: 'Bor',
    },
    {
      year: '1996',
      value: 4.7,
      type: 'Bor',
    },
    {
      year: '1997',
      value: 6.1,
      type: 'Bor',
    },
    {
      year: '1998',
      value: 3.8,
      type: 'Bor',
    },
    {
      year: '1991',
      value: 4.5,
      type: 'Jon',
    },
    {
      year: '1992',
      value: 5,
      type: 'Jon',
    },
    {
      year: '1993',
      value: 3,
      type: 'Jon',
    },
    {
      year: '1994',
      value: 4.9,
      type: 'Jon',
    },
    {
      year: '1995',
      value: 4,
      type: 'Jon',
    },
    {
      year: '1996',
      value: 4.7,
      type: 'Jon',
    },
    {
      year: '1997',
      value: 6.1,
      type: 'Jon',
    },
    {
      year: '1998',
      value: 3.8,
      type: 'Jon',
    },
  ];
  const config: ColumnConfig = {
    data,
    isStack: true,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
  };

  return <Column {...config} />;
};
`},26671:function(t,n){"use strict";n.Z=`import React from 'react';
import { DualAxes } from '@oceanbase/charts';

export default () => {
  const data = [
    {
      time: '2019-03',
      value: 350,
      count: 800,
    },
    {
      time: '2019-04',
      value: 900,
      count: 600,
    },
    {
      time: '2019-05',
      value: 300,
      count: 400,
    },
    {
      time: '2019-06',
      value: 450,
      count: 380,
    },
    {
      time: '2019-07',
      value: 470,
      count: 220,
    },
  ];
  const config = {
    data: [data, data],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [
      {
        geometry: 'column',
      },
      {
        geometry: 'line',
      },
    ],
  };
  return <DualAxes {...config} />;
};
`},85742:function(t,n){"use strict";n.Z=`import React from 'react';
import { DualAxes } from '@oceanbase/charts';

export default () => {
  const uvData = [
    {
      time: '2019-03',
      value: 35,
    },
    {
      time: '2019-04',
      value: 90,
    },
    {
      time: '2019-05',
      value: 30,
    },
    {
      time: '2019-06',
      value: 45,
    },
    {
      time: '2019-07',
      value: 47,
    },
  ];
  const transformData = [
    {
      time: '2019-03',
      count: 800,
      name: 'a',
    },
    {
      time: '2019-04',
      count: 600,
      name: 'a',
    },
    {
      time: '2019-05',
      count: 400,
      name: 'a',
    },
    {
      time: '2019-06',
      count: 380,
      name: 'a',
    },
    {
      time: '2019-07',
      count: 220,
      name: 'a',
    },
    {
      time: '2019-03',
      count: 750,
      name: 'b',
    },
    {
      time: '2019-04',
      count: 650,
      name: 'b',
    },
    {
      time: '2019-05',
      count: 450,
      name: 'b',
    },
    {
      time: '2019-06',
      count: 400,
      name: 'b',
    },
    {
      time: '2019-07',
      count: 320,
      name: 'b',
    },
    {
      time: '2019-03',
      count: 900,
      name: 'c',
    },
    {
      time: '2019-04',
      count: 600,
      name: 'c',
    },
    {
      time: '2019-05',
      count: 450,
      name: 'c',
    },
    {
      time: '2019-06',
      count: 300,
      name: 'c',
    },
    {
      time: '2019-07',
      count: 200,
      name: 'c',
    },
  ];
  const config = {
    data: [uvData, transformData],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [
      {
        geometry: 'column',
      },
      {
        geometry: 'line',
        seriesField: 'name',
      },
    ],
  };
  return <DualAxes {...config} />;
};
`},53740:function(t,n){"use strict";n.Z=`import React from 'react';
import { DualAxes } from '@oceanbase/charts';

export default () => {
  const data = [
    {
      year: '1991',
      value: 3,
      count: 10,
    },
    {
      year: '1992',
      value: 4,
      count: 4,
    },
    {
      year: '1993',
      value: 3.5,
      count: 5,
    },
    {
      year: '1994',
      value: 5,
      count: 5,
    },
    {
      year: '1995',
      value: 4.9,
      count: 4.9,
    },
    {
      year: '1996',
      value: 6,
      count: 35,
    },
    {
      year: '1997',
      value: 7,
      count: 7,
    },
    {
      year: '1998',
      value: 9,
      count: 1,
    },
    {
      year: '1999',
      value: 13,
      count: 20,
    },
  ];
  const config = {
    data: [data, data],
    xField: 'year',
    yField: ['value', 'count'],
    geometryOptions: [
      {
        geometry: 'line',
      },
      {
        geometry: 'line',
      },
    ],
  };
  return <DualAxes {...config} />;
};
`},80154:function(t,n){"use strict";n.Z=`import React from 'react';
import { DualAxes } from '@oceanbase/charts';

export default () => {
  const uvBillData = [
    {
      time: '2019-03',
      value: 350,
      type: 'uv',
    },
    {
      time: '2019-04',
      value: 900,
      type: 'uv',
    },
    {
      time: '2019-05',
      value: 300,
      type: 'uv',
    },
    {
      time: '2019-06',
      value: 450,
      type: 'uv',
    },
    {
      time: '2019-07',
      value: 470,
      type: 'uv',
    },
    {
      time: '2019-03',
      value: 220,
      type: 'bill',
    },
    {
      time: '2019-04',
      value: 300,
      type: 'bill',
    },
    {
      time: '2019-05',
      value: 250,
      type: 'bill',
    },
    {
      time: '2019-06',
      value: 220,
      type: 'bill',
    },
    {
      time: '2019-07',
      value: 362,
      type: 'bill',
    },
  ];
  const transformData = [
    {
      time: '2019-03',
      count: 800,
      name: 'a',
    },
    {
      time: '2019-04',
      count: 600,
      name: 'a',
    },
    {
      time: '2019-05',
      count: 400,
      name: 'a',
    },
    {
      time: '2019-06',
      count: 380,
      name: 'a',
    },
    {
      time: '2019-07',
      count: 220,
      name: 'a',
    },
    {
      time: '2019-03',
      count: 750,
      name: 'b',
    },
    {
      time: '2019-04',
      count: 650,
      name: 'b',
    },
    {
      time: '2019-05',
      count: 450,
      name: 'b',
    },
    {
      time: '2019-06',
      count: 400,
      name: 'b',
    },
    {
      time: '2019-07',
      count: 320,
      name: 'b',
    },
    {
      time: '2019-03',
      count: 900,
      name: 'c',
    },
    {
      time: '2019-04',
      count: 600,
      name: 'c',
    },
    {
      time: '2019-05',
      count: 450,
      name: 'c',
    },
    {
      time: '2019-06',
      count: 300,
      name: 'c',
    },
    {
      time: '2019-07',
      count: 200,
      name: 'c',
    },
  ];
  const config = {
    data: [uvBillData, transformData],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [
      {
        geometry: 'line',
        seriesField: 'type',
        lineStyle: {
          lineDash: [5, 5],
        },
        smooth: true,
      },
      {
        geometry: 'line',
        seriesField: 'name',
        point: {},
      },
    ],
  };
  return <DualAxes {...config} />;
};
`},72797:function(t,n){"use strict";n.Z=`import React from 'react';
import { DualAxes } from '@oceanbase/charts';

export default () => {
  const uvBillData = [
    {
      time: '2019-03',
      value: 350,
      type: 'uv',
    },
    {
      time: '2019-04',
      value: 900,
      type: 'uv',
    },
    {
      time: '2019-05',
      value: 300,
      type: 'uv',
    },
    {
      time: '2019-06',
      value: 450,
      type: 'uv',
    },
    {
      time: '2019-07',
      value: 470,
      type: 'uv',
    },
    {
      time: '2019-03',
      value: 220,
      type: 'bill',
    },
    {
      time: '2019-04',
      value: 300,
      type: 'bill',
    },
    {
      time: '2019-05',
      value: 250,
      type: 'bill',
    },
    {
      time: '2019-06',
      value: 220,
      type: 'bill',
    },
    {
      time: '2019-07',
      value: 362,
      type: 'bill',
    },
  ];
  const transformData = [
    {
      time: '2019-03',
      count: 800,
      name: 'a',
    },
    {
      time: '2019-04',
      count: 600,
      name: 'a',
    },
    {
      time: '2019-05',
      count: 400,
      name: 'a',
    },
    {
      time: '2019-06',
      count: 380,
      name: 'a',
    },
    {
      time: '2019-07',
      count: 220,
      name: 'a',
    },
    {
      time: '2019-03',
      count: 750,
      name: 'b',
    },
    {
      time: '2019-04',
      count: 650,
      name: 'b',
    },
    {
      time: '2019-05',
      count: 450,
      name: 'b',
    },
    {
      time: '2019-06',
      count: 400,
      name: 'b',
    },
    {
      time: '2019-07',
      count: 320,
      name: 'b',
    },
    {
      time: '2019-03',
      count: 900,
      name: 'c',
    },
    {
      time: '2019-04',
      count: 600,
      name: 'c',
    },
    {
      time: '2019-05',
      count: 450,
      name: 'c',
    },
    {
      time: '2019-06',
      count: 300,
      name: 'c',
    },
    {
      time: '2019-07',
      count: 200,
      name: 'c',
    },
  ];
  const config = {
    data: [uvBillData, transformData],
    autoFit: false,
    height: 140,
    width: 400,
    xField: 'time',
    yField: ['value', 'count'],
    tooltip: {
      scrollable: true,
    },
    geometryOptions: [
      {
        geometry: 'line',
        seriesField: 'type',
        lineStyle: {
          lineDash: [5, 5],
        },
        smooth: true,
      },
      {
        geometry: 'line',
        seriesField: 'name',
        point: {},
      },
    ],
  };
  return <DualAxes {...config} />;
};
`},24209:function(t,n){"use strict";n.Z=`import React from 'react';
import { Gauge } from '@oceanbase/charts';

export default () => {
  const config = {
    percent: 0.75,
  };
  return <Gauge {...config} />;
};
`},77774:function(t,n){"use strict";n.Z=`import React from 'react';
import { Gauge, useTheme } from '@oceanbase/charts';

export default () => {
  const themeConfig = useTheme();
  const config = {
    percent: 0.75,
    range: {
      ticks: [0, 1 / 3, 2 / 3, 1],
      color: [themeConfig.semanticGreen, themeConfig.semanticYellow, themeConfig.semanticRed],
    },
  };
  return <Gauge {...config} />;
};
`},60270:function(t,n){"use strict";n.Z=`import React from 'react';
import { Gauge, useTheme } from '@oceanbase/charts';

export default () => {
  const themeConfig = useTheme();
  const config = {
    percent: 0.75,
    type: 'meter',
    innerRadius: 0.75,
    range: {
      ticks: [0, 1 / 3, 2 / 3, 1],
      color: [themeConfig.semanticGreen, themeConfig.semanticYellow, themeConfig.semanticRed],
    },
  };
  return <Gauge {...config} />;
};
`},35954:function(t,n){"use strict";n.Z=`import React from 'react';
import { Gauge } from '@oceanbase/charts';
import type { GaugeConfig } from '@oceanbase/charts';

export default () => {
  const config: GaugeConfig = {
    percent: 0.75,
    indicator: false,
    innerRadius: 0.75,
  };
  return <Gauge {...config} />;
};
`},50907:function(t,n){"use strict";n.Z=`import React, { useState, useEffect } from 'react';
import { Histogram } from '@oceanbase/charts';

export default () => {
  const [data, setData] = useState([]);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/RoliHq%2453S/histogram.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };

  useEffect(() => {
    asyncFetch();
  }, []);

  const config = {
    data,
    binField: 'value',
    binWidth: 2,
  };

  return <Histogram {...config} />;
};
`},86944:function(t,n){"use strict";n.Z=`import React, { useState, useEffect } from 'react';
import { Histogram } from '@oceanbase/charts';

export default () => {
  const [data, setData] = useState([]);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/diamond.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };

  useEffect(() => {
    asyncFetch();
  }, []);

  const config = {
    data,
    binField: 'depth',
    binWidth: 2,
    stackField: 'cut',
  };

  return <Histogram {...config} />;
};
`},5188:function(t,n){"use strict";n.Z=`import React, { useState, useEffect } from 'react';
import { Line } from '@oceanbase/charts';

export default () => {
  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };
  useEffect(() => {
    asyncFetch();
  }, []);
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    xAxis: {
      type: 'time',
    },
    yAxis: {
      label: {
        // Format values with thousands separators
        formatter: v => \`\${v}\`.replace(/\\d{1,3}(?=(\\d{3})+$)/g, s => \`\${s},\`),
      },
    },
    style: {
      height: '50vh',
    },
  };
  return <Line {...config} />;
};
`},96085:function(t,n){"use strict";n.Z=`import React, { useState, useEffect } from 'react';
import { Line } from '@oceanbase/charts';

export default () => {
  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };
  useEffect(() => {
    asyncFetch();
  }, []);
  const config = {
    data,
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      type: 'timeCat',
    },
  };
  return <Line {...config} />;
};
`},47299:function(t,n){"use strict";n.Z=`import React, { useState, useEffect } from 'react';
import { Line } from '@oceanbase/charts';

export default () => {
  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };
  useEffect(() => {
    asyncFetch();
  }, []);
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    xAxis: {
      type: 'time',
    },
    yAxis: {
      label: {
        // Format values with thousands separators
        formatter: v => \`\${v}\`.replace(/\\d{1,3}(?=(\\d{3})+$)/g, s => \`\${s},\`),
      },
    },
    area: {
      gradientFill: true,
    },
  };
  return <Line {...config} />;
};
`},13926:function(t,n){"use strict";n.Z=`import React, { useState, useEffect } from 'react';
import { Line } from '@oceanbase/charts';

export default () => {
  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };
  useEffect(() => {
    asyncFetch();
  }, []);
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    xAxis: {
      type: 'time',
    },
    yAxis: {
      label: {
        // Format values with thousands separators
        formatter: v => \`\${v}\`.replace(/\\d{1,3}(?=(\\d{3})+$)/g, s => \`\${s},\`),
      },
    },
  };
  return <Line {...config} />;
};
`},27522:function(t,n){"use strict";n.Z=`import React from 'react';
import { Line } from '@oceanbase/charts';

export default () => {
  const data = [
    {
      year: '1991',
      value: 3,
    },
    {
      year: '1992',
      value: 4,
    },
    {
      year: '1993',
      value: 3.5,
    },
    {
      year: '1994',
      value: 5,
    },
    {
      year: '1995',
      value: 4.9,
    },
    {
      year: '1996',
      value: 6,
    },
    {
      year: '1997',
      value: 7,
    },
    {
      year: '1998',
      value: 9,
    },
    {
      year: '1999',
      value: 13,
    },
  ];
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    stepType: 'vh',
  };
  return <Line {...config} />;
};
`},21932:function(t,n){"use strict";n.Z=`import React, { useState, useEffect } from 'react';
import { Line } from '@oceanbase/charts';

export default () => {
  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/b21e7336-0b3e-486c-9070-612ede49284e.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };
  useEffect(() => {
    asyncFetch();
  }, []);
  const config = {
    data,
    autoFit: false,
    height: 160,
    width: 400,
    xField: 'date',
    yField: 'value',
    seriesField: 'country',
    tooltip: {
      scrollable: true,
    },
  };
  return <Line {...config} />;
};
`},68629:function(t,n){"use strict";n.Z=`import React from 'react';
import { Liquid } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  return (
    <Row gutter={24}>
      <Col span={8}>
        <Liquid height={200} title="CPU" percent={0.9} warningPercent={0.6} dangerPercent={0.9} />
      </Col>
      <Col span={8}>
        <Liquid
          height={200}
          title="Memory"
          percent={0.6}
          warningPercent={0.6}
          dangerPercent={0.9}
        />
      </Col>
      <Col span={8}>
        <Liquid height={200} title="Disk" percent={0.3} warningPercent={0.6} dangerPercent={0.9} />
      </Col>
    </Row>
  );
};
`},31480:function(t,n){"use strict";n.Z=`import React from 'react';
import { Liquid } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  return (
    <Row gutter={[24, 100]}>
      <Col span={8}>
        <Liquid height={100} layout="horizontal" title="CPU" percent={0.6754} />
      </Col>
      <Col span={8}>
        <Liquid
          height={100}
          layout="horizontal"
          title="Memory"
          percent={0.6754}
          // Keep 1 significant decimal place
          decimal={1}
        />
      </Col>
      <Col span={8}>
        <Liquid
          height={100}
          layout="horizontal"
          title="Disk"
          percent={0.6754}
          // Keep 0 significant decimal places
          decimal={0}
        />
      </Col>
      <Col span={8}>
        <Liquid height={100} shape="rect" layout="horizontal" title="CPU" percent={0.001234} />
      </Col>
      <Col span={8}>
        <Liquid height={100} shape="rect" layout="horizontal" title="Memory" percent={0.0001234} />
      </Col>
      <Col span={8}>
        <Liquid height={100} shape="rect" layout="horizontal" title="Disk" percent={0.00001234} />
      </Col>
    </Row>
  );
};
`},69730:function(t,n){"use strict";n.Z=`import React from 'react';
import { Liquid } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  return (
    <Row gutter={[24, 100]}>
      <Col span={8}>
        <Liquid
          height={100}
          layout="horizontal"
          title="CPU"
          percent={0.9}
          warningPercent={0.6}
          dangerPercent={0.9}
        />
      </Col>
      <Col span={8}>
        <Liquid
          height={100}
          layout="horizontal"
          title="Memory"
          percent={0.6}
          warningPercent={0.6}
          dangerPercent={0.9}
        />
      </Col>
      <Col span={8}>
        <Liquid
          height={100}
          layout="horizontal"
          title="Disk"
          percent={0.3}
          warningPercent={0.6}
          dangerPercent={0.9}
        />
      </Col>
      <Col span={8}>
        <Liquid
          height={100}
          shape="rect"
          layout="horizontal"
          title="CPU"
          percent={0.9}
          warningPercent={0.6}
          dangerPercent={0.9}
        />
      </Col>
      <Col span={8}>
        <Liquid
          height={100}
          shape="rect"
          layout="horizontal"
          title="Memory"
          percent={0.6}
          warningPercent={0.6}
          dangerPercent={0.9}
        />
      </Col>
      <Col span={8}>
        <Liquid
          height={100}
          shape="rect"
          layout="horizontal"
          title="Disk"
          percent={0.3}
          warningPercent={0.6}
          dangerPercent={0.9}
        />
      </Col>
    </Row>
  );
};
`},97180:function(t,n){"use strict";n.Z=`import React from 'react';
import { Liquid } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  return (
    <Row gutter={24}>
      <Col span={8}>
        <Liquid
          height={200}
          shape="rect"
          title="CPU"
          percent={0.9}
          warningPercent={0.6}
          dangerPercent={0.9}
        />
      </Col>
      <Col span={8}>
        <Liquid
          height={200}
          shape="rect"
          title="Memory"
          percent={0.6}
          warningPercent={0.6}
          dangerPercent={0.9}
        />
      </Col>
      <Col span={8}>
        <Liquid
          height={200}
          shape="rect"
          title="Disk"
          percent={0.3}
          warningPercent={0.6}
          dangerPercent={0.9}
        />
      </Col>
    </Row>
  );
};
`},6772:function(t,n){"use strict";n.Z=`import React from 'react';
import { Pie } from '@oceanbase/charts';
import type { PieConfig } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  const data = [
    {
      type: 'Category A',
      value: 1.3,
    },
    {
      type: 'Category B',
      value: 3.38,
    },
    {
      type: 'Category C',
      value: 4.56,
    },
    {
      type: 'Category D',
      value: 5.7,
    },
    {
      type: 'Category E',
      value: 6.22,
    },
  ];
  const config1: PieConfig = {
    data,
    angleField: 'value',
    colorField: 'type',
    isDonut: true,
  };
  const config2: PieConfig = {
    ...config1,
    legend: {
      position: 'bottom',
    },
  };
  return (
    <Row gutter={200}>
      <Col span={12}>
        <Pie height={300} {...config1} />
      </Col>
      <Col span={12}>
        <Pie height={300} {...config2} />
      </Col>
    </Row>
  );
};
`},61538:function(t,n){"use strict";n.Z=`import React from 'react';
import { Pie } from '@oceanbase/charts';
import type { PieConfig } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  const data = [
    {
      type: 'Category A',
      value: 32,
    },
    {
      type: 'Category B',
      value: 25,
    },
    {
      type: 'Category C',
      value: 18,
    },
    {
      type: 'Category D',
      value: 15,
    },
    {
      type: 'Category E',
      value: 20,
    },
    {
      type: 'Other',
      value: 5,
    },
  ];
  const config1: PieConfig = {
    data,
    angleField: 'value',
    colorField: 'type',
    isDonut: true,
  };
  const config2: PieConfig = {
    ...config1,
    legend: {
      position: 'bottom',
    },
  };
  return (
    <Row gutter={200}>
      <Col span={12}>
        <Pie height={300} {...config1} />
      </Col>
      <Col span={12}>
        <Pie height={300} {...config2} />
      </Col>
    </Row>
  );
};
`},23715:function(t,n){"use strict";n.Z=`import React from 'react';
import { Pie } from '@oceanbase/charts';
import type { PieConfig } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  const data = [
    {
      type: 'Category A',
      value: 32,
    },
    {
      type: 'Category B',
      value: 25,
    },
    {
      type: 'Category C',
      value: 18,
    },
    {
      type: 'Category D',
      value: 15,
    },
    {
      type: 'Category E',
      value: 20,
    },
    {
      type: 'Other',
      value: 5,
    },
  ];
  const config1: PieConfig = {
    data,
    angleField: 'value',
    colorField: 'type',
    isHalfDonut: true,
    legend: {
      position: 'bottom',
    },
  };
  const config2: PieConfig = {
    ...config1,
    legend: {
      position: 'right',
    },
  };
  return (
    <Row gutter={200}>
      <Col span={12}>
        <Pie height={300} {...config1} />
      </Col>
      <Col span={12}>
        <Pie height={300} {...config2} />
      </Col>
    </Row>
  );
};
`},44010:function(t,n){"use strict";n.Z=`import React from 'react';
import { Pie } from '@oceanbase/charts';
import type { PieConfig } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  const data = [
    {
      type: 'Category A',
      value: 32,
    },
    {
      type: 'Category B',
      value: 25,
    },
    {
      type: 'Category C',
      value: 18,
    },
    {
      type: 'Category D',
      value: 15,
    },
    {
      type: 'Category E',
      value: 20,
    },
    {
      type: 'Other',
      value: 5,
    },
  ];
  const config1: PieConfig = {
    data,
    angleField: 'value',
    colorField: 'type',
  };
  const config2: PieConfig = {
    ...config1,
    legend: {
      position: 'bottom',
    },
    label: {
      content: datum => \`\${(datum.percent * 100).toFixed(0)}%\`,
    },
  };
  return (
    <Row gutter={200}>
      <Col span={12}>
        <Pie height={300} {...config1} />
      </Col>
      <Col span={12}>
        <Pie height={300} {...config2} />
      </Col>
    </Row>
  );
};
`},24567:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Pie } from '@oceanbase/charts';

const Demo: React.FC = () => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState([
    {
      type: 'Category A',
      value: 27,
    },
    {
      type: 'Category B',
      value: 25,
    },
    {
      type: 'Category C',
      value: 18,
    },
    {
      type: 'Category D',
      value: 15,
    },
    {
      type: 'Category E',
      value: 10,
    },
    {
      type: 'Other',
      value: 5,
    },
  ]);

  const config = {
    data,
    angleField: 'value',
    colorField: 'type',
    onReady: plot => {
      console.log(plot);
    },
  };

  return (
    <div>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        style={{
          marginLeft: 8,
        }}
      >
        External state changes will not re-render
      </button>
      <button
        onClick={() => {
          setData([
            {
              type: 'Category D',
              value: 15,
            },
            {
              type: 'Category E',
              value: 10,
            },
            {
              type: 'Other',
              value: Math.random() * 100,
            },
          ]);
        }}
        style={{
          marginLeft: 8,
        }}
      >
        Data changes trigger re-render
      </button>
      <Pie {...config} />
    </div>
  );
};

export default Demo;
`},96843:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Score } from '@oceanbase/charts';
import { Col, Row, Form, Radio } from '@oceanbase/design';

export default () => {
  const [size, setSize] = useState('middle');

  return (
    <div>
      <Form style={{ marginBottom: '30px' }}>
        <Form.Item label="Size" required={true}>
          <Radio.Group value={size} onChange={e => setSize(e.target.value)}>
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="middle">Default</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value={300}>300px</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <Row>
        <Col span={6}>
          <Score size={size} value={50} />
        </Col>
        <Col span={6}>
          <Score size={size} value={60} />
        </Col>
        <Col span={6}>
          <Score size={size} value={70} />
        </Col>
        <Col span={6}>
          <Score size={size} value={85} />
        </Col>
      </Row>
    </div>
  );
};
`},80401:function(t,n){"use strict";n.Z=`import React from 'react';
import { Score } from '@oceanbase/charts';

export default () => {
  return <Score value={100} color="#A084E8" unit="" valueStyle={{ color: '#D0BFFF' }} />;
};
`},65391:function(t,n){"use strict";n.Z=`import React from 'react';
import { Score } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';
import { range } from 'lodash';

export default () => {
  const thresholds = {
    0: 'rgb(242, 73, 92)',
    20: 'rgb(250, 222, 42)',
    40: 'rgb(255, 152, 48)',
    60: 'rgb(184, 119, 217)',
    80: 'rgb(87, 148, 242)',
    100: 'rgb(115, 191, 105)',
  };
  return (
    <Row gutter={[8, 8]}>
      {range(0, 6).map(index => (
        <Col span={8} key={index}>
          <Score value={index * 20} thresholds={thresholds} />
        </Col>
      ))}
    </Row>
  );
};
`},81579:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Stat } from '@oceanbase/charts';
import type { StatConfig } from '@oceanbase/charts';
import { Col, Row, Form, Radio } from '@oceanbase/design';
import { range } from 'lodash';

export default () => {
  const [height, setHeight] = useState(100);
  const [span, setSpan] = useState(8);
  const [layout, setLayout] = useState<StatConfig['layout']>('vertical');
  const [colorMode, setColorMode] = useState<StatConfig['colorMode']>('background');
  const [chartMode, setChartMode] = useState<StatConfig['chartMode']>('area');
  const [textAlign, setTextAlign] = useState<StatConfig['textAlign']>('auto');
  const [extra, setExtra] = useState('suffix');
  const config: StatConfig = {
    height,
    ...(extra
      ? {
          [extra]: extra === 'prefix' ? '$' : 'USD',
        }
      : {}),
    layout,
    colorMode,
    chartMode,
    chartData: [
      264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539,
      243, 226, 192,
    ],
    textAlign,
    thresholds: {
      100: 'rgb(87, 148, 242)',
      200: 'rgb(115, 191, 105)',
      300: 'rgb(184, 119, 217)',
      400: 'rgb(250, 222, 42)',
      500: 'rgb(255, 152, 48)',
      600: 'rgb(242, 73, 92)',
    },
  };
  return (
    <div>
      <Form
        layout="horizontal"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{ span: 18 }}
        requiredMark={false}
      >
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item label="Height">
              <Radio.Group value={height} onChange={e => setHeight(e.target.value)}>
                <Radio.Button value={200}>200</Radio.Button>
                <Radio.Button value={150}>150</Radio.Button>
                <Radio.Button value={100}>100</Radio.Button>
                <Radio.Button value={50}>50</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Columns">
              <Radio.Group value={span} onChange={e => setSpan(e.target.value)}>
                <Radio.Button value={4}>6</Radio.Button>
                <Radio.Button value={6}>4</Radio.Button>
                <Radio.Button value={8}>3</Radio.Button>
                <Radio.Button value={12}>2</Radio.Button>
                <Radio.Button value={24}>1</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Layout">
              <Radio.Group value={layout} onChange={e => setLayout(e.target.value)}>
                <Radio.Button value="vertical">Vertical</Radio.Button>
                <Radio.Button value="horizontal">Horizontal</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Color Mode">
              <Radio.Group value={colorMode} onChange={e => setColorMode(e.target.value)}>
                <Radio.Button value="none">None</Radio.Button>
                <Radio.Button value="value">Value</Radio.Button>
                <Radio.Button value="background">Background</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Chart Mode">
              <Radio.Group value={chartMode} onChange={e => setChartMode(e.target.value)}>
                <Radio.Button value="none">None</Radio.Button>
                <Radio.Button value="line">Line</Radio.Button>
                <Radio.Button value="area">Area</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Text Align">
              <Radio.Group value={textAlign} onChange={e => setTextAlign(e.target.value)}>
                <Radio.Button value="auto">Auto</Radio.Button>
                <Radio.Button value="center">Center</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Extra">
              <Radio.Group value={extra} onChange={e => setExtra(e.target.value)}>
                <Radio.Button value={undefined}>None</Radio.Button>
                <Radio.Button value="prefix">Prefix</Radio.Button>
                <Radio.Button value="suffix">Suffix</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Row gutter={[8, 8]}>
        {range(1, 7).map(index => (
          <Col span={span} key={index}>
            <Stat title={\`Cluster\${index + 1}\`} value={index * 100} {...config} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
`},58:function(t,n){"use strict";n.Z=`import React from 'react';
import { TinyArea, useTheme } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  const themeConfig = useTheme();
  const data = [
    264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539,
    243, 226, 192,
  ];
  const config1 = {
    data,
  };
  const config2 = {
    ...config1,
    color: themeConfig.semanticRed,
    point: {},
    areaStyle: {
      fill: themeConfig.semanticRedGradient,
    },
  };
  return (
    <Row gutter={200}>
      <Col span={12}>
        <TinyArea {...config1} />
      </Col>
      <Col span={12}>
        <TinyArea {...config2} />
      </Col>
    </Row>
  );
};
`},7989:function(t,n){"use strict";n.Z=`import React from 'react';
import { TinyColumn } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  const data = [274, 337, 81, 497, 666, 219, 269];
  return (
    <Row gutter={200}>
      <Col span={12}>
        <TinyColumn data={data} />
      </Col>
      <Col span={12}>
        <TinyColumn data={data} label={{}} />
      </Col>
    </Row>
  );
};
`},95360:function(t,n){"use strict";n.Z=`import React from 'react';
import { TinyLine, useTheme } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  const themeConfig = useTheme();
  const data = [
    264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539,
    243, 226, 192,
  ];
  const config1 = {
    data,
  };
  const config2 = {
    ...config1,
    color: themeConfig.semanticGreen,
    point: {},
  };
  return (
    <Row gutter={200}>
      <Col span={12}>
        <TinyLine {...config1} />
      </Col>
      <Col span={12}>
        <TinyLine {...config2} />
      </Col>
    </Row>
  );
};
`},57554:function(t,n){"use strict";n.Z=`import React from 'react';
import { Progress } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  const titleStyle = { width: 90 };
  const percentStyle = {
    width: 80,
  };
  const progressStyle = { radius: 6 };
  const maxColumnWidth = 6;
  return (
    <Row gutter={[100, 50]}>
      <Col span={12}>
        <Progress title="CPU" percent={0.3} />
        <Progress title="Memory" percent={0.7} />
        <Progress title="Disk" percent={0.9} />
      </Col>
      <Col span={12}>
        <Progress title="CPU" percent={0.3} />
        <Progress title="Memory" percent={0.7} warningPercent={0.7} />
        <Progress title="Disk" percent={0.9} dangerPercent={0.9} />
      </Col>
      <Col span={12}>
        <Progress title="CPU" percent={0.3} progressStyle={progressStyle} />
        <Progress title="Memory" percent={0.7} progressStyle={progressStyle} />
        <Progress title="Disk" percent={0.9} progressStyle={progressStyle} />
      </Col>
      <Col span={12}>
        <Progress title={<div style={titleStyle}>CPU</div>} percent={0.3} />
        <Progress title={<div style={titleStyle}>Memory Memory</div>} percent={0.7} />
        <Progress title={<div style={titleStyle}>Disk Disk Disk</div>} percent={0.9} />
      </Col>
      <Col span={12}>
        <Progress
          title="CPU"
          percent={0.3}
          formatter={percent => \`Percentage: \${percent * 100}%\`}
        />
        <Progress
          title="Memory"
          percent={0.7}
          formatter={percent => \`Percentage: \${percent * 100}%\`}
        />
        <Progress
          title="Disk"
          percent={0.9}
          formatter={percent => \`Percentage: \${percent * 100}%\`}
        />
      </Col>
      <Col span={12}>
        <Progress title="CPU" percent={0.3} maxColumnWidth={maxColumnWidth} />
        <Progress title="Memory" percent={0.7} maxColumnWidth={maxColumnWidth} />
        <Progress title="Disk" percent={0.9} maxColumnWidth={maxColumnWidth} />
      </Col>
      <Col span={12}>
        <Progress title="CPU" percent={0.001234} percentStyle={percentStyle} />
        <Progress title="Memory" percent={0.0001234} percentStyle={percentStyle} />
        <Progress title="Disk" percent={0.00001234} percentStyle={percentStyle} />
      </Col>
      <Col span={12}>
        <Progress title="CPU" percent={0.001234} percentStyle={percentStyle} />
        <Progress title="Memory" percent={0.0001234} percentStyle={percentStyle} />
        <Progress title="Disk" percent={0.00001234} percentStyle={percentStyle} />
      </Col>
    </Row>
  );
};
`},63384:function(t,n){"use strict";n.Z=`import { Alert, Button, Space } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Alert
      message="Informational Notes"
      type="info"
      showIcon
      closable
      action={<Button size="small">Btn</Button>}
    />
    <Alert
      message="Success Tips"
      type="success"
      showIcon
      closable
      action={<Button size="small">Btn</Button>}
    />
    <Alert
      message="Warning"
      type="warning"
      showIcon
      closable
      action={<Button size="small">Btn</Button>}
    />
    <Alert
      message="Error"
      type="error"
      showIcon
      closable
      action={<Button size="small">Btn</Button>}
    />
    <Alert
      message="Informational Notes"
      description="Additional description and information about copywriting."
      type="info"
      showIcon
      closable
      action={<Button>Btn</Button>}
    />
    <Alert
      message="Success Tips"
      description="Detailed description and advice about successful copywriting."
      type="success"
      showIcon
      closable
      action={<Button>Btn</Button>}
    />
    <Alert
      message="Warning"
      description="This is a warning notice about copywriting."
      type="warning"
      showIcon
      closable
      action={<Button>Btn</Button>}
    />
    <Alert
      message="Error"
      description="This is an error message about copywriting."
      type="error"
      showIcon
      closable
      action={<Button danger>Btn</Button>}
    />
  </Space>
);

export default App;
`},86270:function(t,n){"use strict";n.Z=`import { Alert, Space } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Alert message="Warning text" banner />
    <Alert
      message="Very long warning text warning text text text text text text text"
      banner
      closable
    />
    <Alert showIcon={false} message="Warning text without icon" banner />
    <Alert type="error" message="Error text" banner />
  </Space>
);

export default App;
`},45461:function(t,n){"use strict";n.Z=`import { Alert, Space } from '@oceanbase/design';
import React from 'react';

const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  console.log(e, 'I was closed.');
};

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Alert message="Informational Notes" type="info" showIcon closable onClose={onClose} />
    <Alert message="Success Tips" type="success" showIcon closable onClose={onClose} />
    <Alert message="Warning" type="warning" showIcon closable onClose={onClose} />
    <Alert message="Error" type="error" showIcon closable onClose={onClose} />
    <Alert
      message="Informational Notes"
      description="Additional description and information about copywriting."
      type="info"
      showIcon
      closable
      onClose={onClose}
    />
    <Alert
      message="Success Tips"
      description="Detailed description and advice about successful copywriting."
      type="success"
      showIcon
      closable
      onClose={onClose}
    />
    <Alert
      message="Warning"
      description="This is a warning notice about copywriting."
      type="warning"
      showIcon
      closable
      onClose={onClose}
    />
    <Alert
      message="Error"
      description="This is an error message about copywriting."
      type="error"
      showIcon
      closable
      onClose={onClose}
    />
    <Alert message="Informational Notes" type="info" showIcon mini closable onClose={onClose} />
    <Alert message="Success Tips" type="success" showIcon mini closable onClose={onClose} />
    <Alert message="Warning" type="warning" showIcon mini closable onClose={onClose} />
    <Alert message="Error" type="error" showIcon mini closable onClose={onClose} />
  </Space>
);

export default App;
`},81961:function(t,n){"use strict";n.Z=`import { Alert, Space } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Alert
      message="Informational Notes"
      description="Additional description and information about copywriting."
      type="info"
      showIcon
    />
    <Alert
      message="Success Tips"
      description="Detailed description and advice about successful copywriting."
      type="success"
      showIcon
    />
    <Alert
      message="Warning"
      description="This is a warning notice about copywriting."
      type="warning"
      showIcon
    />
    <Alert
      message="Error"
      description="This is an error message about copywriting."
      type="error"
      showIcon
    />
  </Space>
);

export default App;
`},85353:function(t,n){"use strict";n.Z=`import { Alert, Button } from '@oceanbase/design';
import React, { useState } from 'react';

const { ErrorBoundary } = Alert;

const ThrowError: React.FC = () => {
  const [error, setError] = useState<Error>();
  const onClick = () => {
    setError(new Error('An Uncaught Error'));
  };

  if (error) {
    throw error;
  }
  return (
    <Button danger onClick={onClick}>
      Click me to throw a error
    </Button>
  );
};

const App: React.FC = () => (
  <ErrorBoundary>
    <ThrowError />
  </ErrorBoundary>
);

export default App;
`},45263:function(t,n){"use strict";n.Z=`import { Alert, Form, Radio, Space } from '@oceanbase/design';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [ghost, setGhost] = useState(true);
  return (
    <div>
      <Form
        layout="inline"
        style={{
          marginBottom: 24,
        }}
      >
        <Form.Item label="ghost" required={true}>
          <Radio.Group
            value={ghost}
            onChange={e => {
              setGhost(e.target.value);
            }}
          >
            <Radio.Button value={true}>true</Radio.Button>
            <Radio.Button value={false}>false</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Alert message="Informational Notes" type="info" showIcon ghost={ghost} />
        <Alert message="Success Tips" type="success" showIcon ghost={ghost} />
        <Alert message="Warning" type="warning" showIcon ghost={ghost} />
        <Alert message="Error" type="error" showIcon ghost={ghost} />
        <Alert
          message="Informational Notes"
          description="Additional description and information about copywriting."
          type="info"
          showIcon
          ghost={ghost}
        />
        <Alert
          message="Success Tips"
          description="Detailed description and advice about successful copywriting."
          type="success"
          showIcon
          ghost={ghost}
        />
        <Alert
          message="Warning"
          description="This is a warning notice about copywriting."
          type="warning"
          showIcon
          ghost={ghost}
        />
        <Alert
          message="Error"
          description="This is an error message about copywriting."
          type="error"
          showIcon
          ghost={ghost}
        />
      </Space>
    </div>
  );
};

export default App;
`},72427:function(t,n){"use strict";n.Z=`import { Alert, Button, Space } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Alert
      message={
        <div>
          Informational Notes. <a>Link</a>
        </div>
      }
      type="info"
      showIcon
    />
    <Alert
      message={
        <div>
          Success Tips. <a>Link</a>
        </div>
      }
      type="success"
      showIcon
    />
    <Alert
      message={
        <div>
          Warning. <a>Link</a>
        </div>
      }
      type="warning"
      showIcon
    />
    <Alert
      message={
        <div>
          Error. <a>Link</a>
        </div>
      }
      type="error"
      showIcon
    />
    <Alert
      message="Informational Notes."
      description={
        <div>
          Additional description and information about copywriting. <a>Link</a>
        </div>
      }
      type="info"
      showIcon
    />
    <Alert
      message="Success Tips."
      description={
        <div>
          Detailed description and advice about successful copywriting. <a>Link</a>
        </div>
      }
      type="success"
      showIcon
    />
    <Alert
      message="Warning."
      description={
        <div>
          This is a warning notice about copywriting. <a>Link</a>
        </div>
      }
      type="warning"
      showIcon
    />
    <Alert
      message="Error."
      description={
        <div>
          This is an error message about copywriting. <a>Link</a>
        </div>
      }
      type="error"
      showIcon
    />
    <Alert
      message={
        <div>
          Informational Notes. <a>Link</a>
        </div>
      }
      type="info"
      showIcon
      mini
    />
    <Alert
      message={
        <div>
          Success Tips. <a>Link</a>
        </div>
      }
      type="success"
      showIcon
      mini
    />
    <Alert
      message={
        <div>
          Warning. <a>Link</a>
        </div>
      }
      type="warning"
      showIcon
      mini
    />
    <Alert
      message={
        <div>
          Error. <a>Link</a>
        </div>
      }
      type="error"
      showIcon
      mini
    />
  </Space>
);

export default App;
`},20580:function(t,n){"use strict";n.Z=`import { Alert } from '@oceanbase/design';
import React from 'react';
import Marquee from 'react-fast-marquee';

const App: React.FC = () => (
  <Alert
    banner
    message={
      <Marquee pauseOnHover gradient={false}>
        I can be a React component, multiple React components, or just some text.
      </Marquee>
    }
  />
);

export default App;
`},37407:function(t,n){"use strict";n.Z=`import { Alert, Space } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Alert message="Info Text" type="info" showIcon mini closable />
    <Alert message="Success Text" type="success" showIcon mini closable />
    <Alert message="Warning Text" type="warning" showIcon mini closable />
    <Alert message="Error Text" type="error" showIcon mini closable />
  </Space>
);

export default App;
`},12315:function(t,n){"use strict";n.Z=`import React from 'react';
import { Alert, Button, Space } from '@oceanbase/design';

const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  console.log(e, 'I was closed.');
};

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Alert
      message="Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips."
      type="success"
      showIcon
    />
    <Alert
      message="Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips."
      type="success"
      showIcon
      closable
      onClose={onClose}
      action={<Button size="small">Btn</Button>}
    />
    <Alert
      message="Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips."
      description="Detailed description and advice about successful copywriting. Detailed description and advice about successful copywriting. Detailed description and advice about successful copywriting. Detailed description and advice about successful copywriting. Detailed description and advice about successful copywriting."
      type="success"
      showIcon
    />
    <Alert
      message="Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips. Success Tips."
      description="Detailed description and advice about successful copywriting. Detailed description and advice about successful copywriting. Detailed description and advice about successful copywriting. Detailed description and advice about successful copywriting. Detailed description and advice about successful copywriting."
      type="success"
      showIcon
      closable
      action={<Button>Btn</Button>}
    />
  </Space>
);

export default App;
`},20198:function(t,n){"use strict";n.Z=`import { Alert, Space } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Alert message="Info Text" type="info" />
    <Alert message="Success Text" type="success" />
    <Alert message="Warning Text" type="warning" />
    <Alert message="Error Text" type="error" />
  </Space>
);

export default App;
`},15856:function(t,n){"use strict";n.Z=`import React from 'react';
import { Anchor, Col, Row } from '@oceanbase/design';

const App: React.FC = () => (
  <Row>
    <Col span={16}>
      <div id="part-1" style={{ height: '100vh', background: 'rgba(255,0,0,0.02)' }} />
      <div id="part-2" style={{ height: '100vh', background: 'rgba(0,255,0,0.02)' }} />
      <div id="part-3" style={{ height: '100vh', background: 'rgba(0,0,255,0.02)' }} />
    </Col>
    <Col span={8}>
      <Anchor
        items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: 'Part 1',
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: 'Part 2',
          },
          {
            key: 'part-3',
            href: '#part-3',
            title: 'Part 3',
          },
        ]}
      />
    </Col>
  </Row>
);

export default App;
`},17643:function(t,n){"use strict";n.Z=`import React from 'react';
import { Anchor } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <div style={{ padding: '20px' }}>
      <Anchor
        direction="horizontal"
        items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: 'Part 1',
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: 'Part 2',
          },
          {
            key: 'part-3',
            href: '#part-3',
            title: 'Part 3',
          },
        ]}
      />
    </div>
    <div>
      <div
        id="part-1"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: 'rgba(0,255,0,0.02)',
        }}
      />
      <div
        id="part-2"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: 'rgba(0,0,255,0.02)',
        }}
      />
      <div
        id="part-3"
        style={{ width: '100vw', height: '100vh', textAlign: 'center', background: '#FFFBE9' }}
      />
    </div>
  </>
);

export default App;
`},35668:function(t,n){"use strict";n.Z=`import React from 'react';
import { AutoComplete } from '@oceanbase/design';
import type { AutoCompleteProps } from '@oceanbase/design';

const App: React.FC = () => {
  const [options, setOptions] = React.useState<AutoCompleteProps['options']>([]);
  const handleSearch = (value: string) => {
    setOptions(() => {
      if (!value || value.includes('@')) {
        return [];
      }
      return ['gmail.com', '163.com', 'qq.com'].map(domain => ({
        label: \`\${value}@\${domain}\`,
        value: \`\${value}@\${domain}\`,
      }));
    });
  };
  return (
    <AutoComplete
      style={{ width: 200 }}
      onSearch={handleSearch}
      placeholder="input here"
      options={options}
    />
  );
};

export default App;
`},75761:function(t,n){"use strict";n.Z=`import React from 'react';
import { AutoComplete } from '@oceanbase/design';

const options = [
  { value: 'Burns Bay Road' },
  { value: 'Downing Street' },
  { value: 'Wall Street' },
];

const App: React.FC = () => (
  <AutoComplete
    style={{ width: 200 }}
    options={options}
    placeholder="try to type \`b\`"
    filterOption={(inputValue, option) =>
      option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
);

export default App;
`},89337:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Badge, Space, Switch, theme } from '@oceanbase/design';
import { ClockCircleOutlined } from '@oceanbase/icons';

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [show, setShow] = useState(true);

  return (
    <Space>
      <Switch checked={show} onChange={() => setShow(!show)} />
      <Badge count={show ? 11 : 0} showZero color={token.colorWarning} />
      <Badge count={show ? 25 : 0} />
      <Badge count={show ? <ClockCircleOutlined style={{ color: token.colorError }} /> : 0} />
      <Badge count={show ? 109 : 0} style={{ backgroundColor: token.colorSuccess }} />
    </Space>
  );
};

export default App;
`},4429:function(t,n){"use strict";n.Z=`import React from 'react';
import { Avatar, Badge, Space, theme } from '@oceanbase/design';
import { ClockCircleOutlined } from '@oceanbase/icons';

const App: React.FC = () => {
  const { token } = theme.useToken();
  return (
    <Space size="middle">
      <Badge count={5}>
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge count={0} showZero>
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge count={<ClockCircleOutlined style={{ color: token.colorError }} />}>
        <Avatar shape="square" size="large" />
      </Badge>
    </Space>
  );
};

export default App;
`},45710:function(t,n){"use strict";n.Z=`import React from 'react';
import { Badge, Space } from '@oceanbase/design';
import { NotificationOutlined } from '@oceanbase/icons';

const App: React.FC = () => (
  <Space>
    <Badge dot>
      <NotificationOutlined style={{ fontSize: 16 }} />
    </Badge>
    <Badge dot>
      <a href="#">Link something</a>
    </Badge>
  </Space>
);

export default App;
`},22278:function(t,n){"use strict";n.Z=`import React from 'react';
import { Badge, Space } from '@oceanbase/design';
import {
  LoadingOutlined,
  AppleOutlined,
  WindowsOutlined,
  ChromeOutlined,
  TaobaoOutlined,
} from '@oceanbase/icons';

const App: React.FC = () => (
  <Space direction="vertical">
    <Badge icon={<ChromeOutlined />} status="success" text="Success" />
    <Badge icon={<AppleOutlined />} status="error" text="Error" />
    <Badge icon={<WindowsOutlined />} status="default" text="Default" />
    <Badge icon={<LoadingOutlined />} status="processing" text="Processing" />
    <Badge icon={<TaobaoOutlined />} status="warning" text="Warning" />
  </Space>
);

export default App;
`},36263:function(t,n){"use strict";n.Z=`import React from 'react';
import { Badge, Space } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Space>
      <Badge icon={true} status="success" />
      <Badge icon={true} status="error" />
      <Badge icon={true} status="default" />
      <Badge icon={true} status="processing" />
      <Badge icon={true} status="processing" progressProps={{ percent: 50 }} />
      <Badge icon={true} status="warning" />
    </Space>
    <br />
    <br />
    <Space direction="vertical">
      <Badge icon={true} status="success" text="Success" />
      <Badge icon={true} status="error" text="Error" />
      <Badge icon={true} status="default" text="Default" />
      <Badge icon={true} status="processing" text="Processing" />
      <Badge
        icon={true}
        status="processing"
        text="Processing with progress"
        progressProps={{ percent: 50 }}
      />
      <Badge icon={true} status="warning" text="Warning" />
    </Space>
  </>
);

export default App;
`},43854:function(t,n){"use strict";n.Z=`import React from 'react';
import { Badge, Button, Space, Tooltip } from '@oceanbase/design';

const App: React.FC = () => (
  <Space size={16}>
    <Button type="primary">
      <Badge status="success" text="Success" />
    </Button>
    <Button danger={true}>
      <Badge status="success" text="Success" icon={true} />
    </Button>
    <Tooltip
      open={true}
      title={<Badge status="success" text="Success" />}
      overlayStyle={{ fontSize: 12 }}
    >
      <span>Tooltip</span>
    </Tooltip>
  </Space>
);

export default App;
`},24960:function(t,n){"use strict";n.Z=`import React from 'react';
import { Badge, Space } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Space>
      <Badge status="success" />
      <Badge status="error" />
      <Badge status="default" />
      <Badge status="processing" />
      <Badge status="warning" />
    </Space>
    <br />
    <br />
    <Space direction="vertical">
      <Badge status="success" text="Success" />
      <Badge status="error" text="Error" />
      <Badge status="default" text="Default" />
      <Badge status="processing" text="Processing" />
      <Badge status="warning" text="Warning" />
    </Space>
  </>
);

export default App;
`},8964:function(t,n){"use strict";n.Z=`import React from 'react';
import { Breadcrumb } from '@oceanbase/design';

const App: React.FC = () => (
  <Breadcrumb
    items={[
      {
        href: '',
        title: 'User',
      },
      {
        href: '',
        title: 'User List',
      },
      {
        title: 'User Detail',
      },
    ]}
  />
);

export default App;
`},13485:function(t,n){"use strict";n.Z=`import React from 'react';
import { Breadcrumb } from '@oceanbase/design';
import { UserOutlined } from '@oceanbase/icons';

const App: React.FC = () => (
  <Breadcrumb
    items={[
      {
        href: '',
        title: (
          <>
            <UserOutlined />
            <span>User</span>
          </>
        ),
      },
      {
        href: '',
        title: 'User List',
      },
      {
        title: 'User Detail',
      },
    ]}
  />
);

export default App;
`},20116:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Breadcrumb } from '@oceanbase/design';

const App: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState('1');
  const menuItems = [
    {
      key: '1',
      label: 'Jackson',
    },
    {
      key: '2',
      label: 'John',
    },
    {
      key: '3',
      label: 'Lucy',
    },
  ];
  return (
    <Breadcrumb
      items={[
        {
          href: '',
          title: 'User',
        },
        {
          title: 'User List',
        },
        {
          title: menuItems.find(item => item.key === selectedKey).label,
          menu: {
            items: menuItems,
            selectedKeys: [selectedKey],
            onClick: ({ key }) => {
              setSelectedKey(key);
            },
          },
        },
      ]}
    />
  );
};

export default App;
`},91295:function(t,n){"use strict";n.Z=`import { Button, Space } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <Space wrap>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Space>
);

export default App;
`},58893:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, ConfigProvider, Divider, Flex, Space } from '@oceanbase/design';
import { DownOutlined, PlusOutlined } from '@oceanbase/icons';

const App: React.FC = () => {
  return (
    <ConfigProvider componentSize="small">
      <Flex vertical gap="small">
        <Flex gap="small" wrap>
          <Button color="default" variant="solid">
            Solid
          </Button>
          <Button color="default" variant="outlined">
            Outlined
          </Button>
          <Button color="default" variant="dashed">
            Dashed
          </Button>
          <Button color="default" variant="filled">
            Filled
          </Button>
          <Button color="default" variant="text">
            Text
          </Button>
          <Button color="default" variant="link">
            Link
          </Button>
        </Flex>
        <Flex gap="small" wrap>
          <Button color="primary" variant="solid">
            Solid
          </Button>
          <Button color="primary" variant="outlined">
            Outlined
          </Button>
          <Button color="primary" variant="dashed">
            Dashed
          </Button>
          <Button color="primary" variant="filled">
            Filled
          </Button>
          <Button color="primary" variant="text">
            Text
          </Button>
          <Button color="primary" variant="link">
            Link
          </Button>
        </Flex>
        <Flex gap="small" wrap>
          <Button color="danger" variant="solid">
            Solid
          </Button>
          <Button color="danger" variant="outlined">
            Outlined
          </Button>
          <Button color="danger" variant="dashed">
            Dashed
          </Button>
          <Button color="danger" variant="filled">
            Filled
          </Button>
          <Button color="danger" variant="text">
            Text
          </Button>
          <Button color="danger" variant="link">
            Link
          </Button>
        </Flex>
        <Flex gap="small" wrap>
          <Button color="pink" variant="solid">
            Solid
          </Button>
          <Button color="pink" variant="outlined">
            Outlined
          </Button>
          <Button color="pink" variant="dashed">
            Dashed
          </Button>
          <Button color="pink" variant="filled">
            Filled
          </Button>
          <Button color="pink" variant="text">
            Text
          </Button>
          <Button color="pink" variant="link">
            Link
          </Button>
        </Flex>
        <Flex gap="small" wrap>
          <Button color="purple" variant="solid">
            Solid
          </Button>
          <Button color="purple" variant="outlined">
            Outlined
          </Button>
          <Button color="purple" variant="dashed">
            Dashed
          </Button>
          <Button color="purple" variant="filled">
            Filled
          </Button>
          <Button color="purple" variant="text">
            Text
          </Button>
          <Button color="purple" variant="link">
            Link
          </Button>
        </Flex>
        <Flex gap="small" wrap>
          <Button color="cyan" variant="solid">
            Solid
          </Button>
          <Button color="cyan" variant="outlined">
            Outlined
          </Button>
          <Button color="cyan" variant="dashed">
            Dashed
          </Button>
          <Button color="cyan" variant="filled">
            Filled
          </Button>
          <Button color="cyan" variant="text">
            Text
          </Button>
          <Button color="cyan" variant="link">
            Link
          </Button>
        </Flex>
      </Flex>
      <Divider orientation="left" plain>
        Example: Outlined and Primary Button
      </Divider>
      <Space size="small" wrap>
        <Button color="primary" variant="outlined">
          Outlined
        </Button>
        <Button color="primary" variant="outlined" icon={<PlusOutlined />}>
          Outlined
        </Button>
        <Button color="primary" variant="outlined" icon={<DownOutlined />} iconPosition="end">
          Outlined
        </Button>
        <Button color="primary" variant="outlined" icon={<PlusOutlined />} />
      </Space>
    </ConfigProvider>
  );
};

export default App;
`},90052:function(t,n){"use strict";n.Z=`import { Button, Space } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <Space wrap>
    <Button type="primary" danger>
      Primary
    </Button>
    <Button danger>Default</Button>
    <Button type="dashed" danger>
      Dashed
    </Button>
    <Button type="text" danger>
      Text
    </Button>
    <Button type="link" danger>
      Link
    </Button>
  </Space>
);

export default App;
`},13716:function(t,n){"use strict";n.Z=`import { Button, Space } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical">
    <Space>
      <Button type="primary">Primary</Button>
      <Button type="primary" disabled>
        Primary(disabled)
      </Button>
    </Space>
    <Space>
      <Button>Default</Button>
      <Button disabled>Default(disabled)</Button>
    </Space>
    <Space>
      <Button type="dashed">Dashed</Button>
      <Button type="dashed" disabled>
        Dashed(disabled)
      </Button>
    </Space>
    <Space>
      <Button type="text">Text</Button>
      <Button type="text" disabled>
        Text(disabled)
      </Button>
    </Space>
    <Space>
      <Button type="link">Link</Button>
      <Button type="link" disabled>
        Link(disabled)
      </Button>
    </Space>
    <Space>
      <Button type="primary" href="https://design.oceanbase.com">
        Href Primary
      </Button>
      <Button type="primary" href="https://design.oceanbase.com" disabled>
        Href Primary(disabled)
      </Button>
    </Space>
    <Space>
      <Button type="primary" danger>
        Danger Default
      </Button>
      <Button type="primary" danger disabled>
        Danger Default(disabled)
      </Button>
    </Space>
    <Space>
      <Button danger>Danger Default</Button>
      <Button danger disabled>
        Danger Default(disabled)
      </Button>
    </Space>
  </Space>
);

export default App;
`},17726:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Dropdown, Space, message } from '@oceanbase/design';
import type { MenuProps } from '@oceanbase/design';
import { DownOutlined } from '@oceanbase/icons';

const items = [
  {
    key: '1',
    label: '1st item',
  },
  {
    key: '2',
    label: '2nd item',
  },
  {
    key: '3',
    label: '3rd item',
  },
];

const handleMenuClick: MenuProps['onClick'] = e => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const App: React.FC = () => (
  <Space wrap>
    <Dropdown menu={menuProps}>
      <Button>
        <Space>
          Button
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
    <Dropdown menu={menuProps}>
      <Button type="primary">
        <Space>
          Button
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  </Space>
);

export default App;
`},75126:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { EllipsisOutlined, PlusOutlined } from '@oceanbase/icons';
import { Button, Divider, Radio, Space } from '@oceanbase/design';

const App: React.FC = () => {
  const [position, setPosition] = useState<'start' | 'end'>('end');

  return (
    <>
      <Space>
        <Radio.Group value={position} onChange={e => setPosition(e.target.value)}>
          <Radio.Button value="start">start</Radio.Button>
          <Radio.Button value="end">end</Radio.Button>
        </Radio.Group>
      </Space>
      <Divider orientation="left" plain>
        Preview
      </Divider>
      <Space wrap>
        <Button type="primary" icon={<PlusOutlined />} iconPosition={position}>
          Primary
        </Button>
        <Button icon={<PlusOutlined />} iconPosition={position}>
          Default
        </Button>
        <Button type="dashed" icon={<PlusOutlined />} iconPosition={position}>
          Dashed
        </Button>
        <Button icon={<PlusOutlined />} iconPosition={position} />
        <Button icon={<EllipsisOutlined />} iconPosition={position} />
      </Space>
    </>
  );
};

export default App;
`},93707:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Button, Form, Space, Switch } from '@oceanbase/design';
import { CheckOutlined, CloseOutlined, PoweroffOutlined } from '@oceanbase/icons';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  return (
    <Space size={16} direction="vertical">
      <Form layout="inline">
        <Form.Item label="loading" required={true}>
          <Switch
            checked={loading}
            onChange={value => {
              setLoading(value);
            }}
          />
        </Form.Item>
      </Form>
      <Space>
        <Button type="primary" loading={loading}>
          Loading
        </Button>
        <Button loading={loading}>Loading</Button>
        <Button loading={loading} />
      </Space>
      <Space>
        <Button type="primary" danger loading={loading}>
          Loading
        </Button>
        <Button danger ghost loading={loading}>
          Loading
        </Button>
        <Button type="link" loading={loading}>
          Link
        </Button>
      </Space>
    </Space>
  );
};

export default App;
`},33691:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { DownloadOutlined } from '@oceanbase/icons';
import { Button, Divider, Flex, Radio } from '@oceanbase/design';
import type { ConfigProviderProps } from 'antd';

type SizeType = ConfigProviderProps['componentSize'];

const App: React.FC = () => {
  const [size, setSize] = useState<SizeType>('middle');
  return (
    <>
      <Radio.Group value={size} onChange={e => setSize(e.target.value)}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="middle">Default</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <Divider orientation="left" plain>
        Preview
      </Divider>
      <Flex gap="small" align="flex-start" vertical>
        <Flex gap="small" wrap>
          <Button type="primary" size={size}>
            Primary
          </Button>
          <Button size={size}>Default</Button>
          <Button type="dashed" size={size}>
            Dashed
          </Button>
        </Flex>
        <Button type="link" size={size}>
          Link
        </Button>
        <Flex gap="small" wrap>
          <Button type="primary" icon={<DownloadOutlined />} size={size} />
          <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
          <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
          <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
            Download
          </Button>
          <Button type="primary" icon={<DownloadOutlined />} size={size}>
            Download
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default App;
`},43672:function(t,n){"use strict";n.Z=`import React from 'react';
import { Card } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Card title="Default size card" extra={<a>More</a>} style={{ width: 300 }}>
      <div>Card content</div>
      <div>Card content</div>
      <div>Card content</div>
    </Card>
    <br />
    <Card size="small" title="Small size card" extra={<a>More</a>} style={{ width: 300 }}>
      <div>Card content</div>
      <div>Card content</div>
      <div>Card content</div>
    </Card>
  </>
);

export default App;
`},45920:function(t,n){"use strict";n.Z=`import React from 'react';
import { Card, theme } from '@oceanbase/design';

const App: React.FC = () => {
  const { token } = theme.useToken();
  return (
    <div
      style={{
        backgroundColor: token.colorFillQuaternary,
        padding: 24,
        margin: -24,
      }}
    >
      <Card title="Card Title" bordered={false} style={{ width: 300 }}>
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </Card>
      <br />
      <Card title="Card Title" divided={false} bordered={false} style={{ width: 300 }}>
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </Card>
    </div>
  );
};

export default App;
`},91219:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Card, Button, Space } from '@oceanbase/design';
import { CaretRightOutlined } from '@oceanbase/icons';

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
      <Card
        title="Collapsible Card"
        collapsible
        defaultCollapsed={false}
        extra={<a>More</a>}
        style={{ width: 400 }}
      >
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </Card>
      <Space>
        <Button
          icon={<CaretRightOutlined rotate={collapsed ? 0 : 90} />}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? 'Expand' : 'Collapse'}
        </Button>
      </Space>
      <Card
        title="Collapsible Card (Controlled)"
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        extra={<a>More</a>}
        style={{ width: 400 }}
      >
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </Card>
    </Space>
  );
};

export default App;
`},28999:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Button, Card, Modal, Spin } from '@oceanbase/design';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          Modal.confirm({
            title: 'This is first Modal.confirm',
            onOk: () => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                Modal.confirm({
                  title: 'This is second Modal.confirm',
                });
              }, 2000);
            },
          });
        }}
      >
        Click
      </Button>
      <div style={{ marginTop: 16 }}>
        {loading ? (
          <Spin />
        ) : (
          <Card title="Card title" style={{ width: 300 }}>
            <div>Card content</div>
            <div>Card content</div>
            <div>Card content</div>
          </Card>
        )}
      </div>
    </>
  );
};

export default App;
`},32217:function(t,n){"use strict";n.Z=`import React from 'react';
import { Card, message } from '@oceanbase/design';
import { BookOutlined } from '@oceanbase/icons';

const App: React.FC = () => (
  <>
    <Card
      title="Card Title"
      document="https://www.oceanbase.com"
      style={{ width: 300, marginBottom: 16 }}
    >
      <div>Card content</div>
      <div>Card content</div>
      <div>Card content</div>
    </Card>
    <Card
      title="Card Title"
      document={() => {
        message.info('Click document');
      }}
      style={{ width: 300, marginBottom: 16 }}
    >
      <div>Card content</div>
      <div>Card content</div>
      <div>Card content</div>
    </Card>
    <Card
      title="Card Title"
      document={
        <BookOutlined
          onClick={() => {
            message.info('Click document');
          }}
        />
      }
      style={{ width: 300 }}
    >
      <div>Card content</div>
      <div>Card content</div>
      <div>Card content</div>
    </Card>
  </>
);

export default App;
`},33091:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Card, Form, Radio, Space, Switch } from '@oceanbase/design';
import type { CardSize } from '@oceanbase/design/es/card';

const App: React.FC = () => {
  const [size, setSize] = useState<CardSize>('default');
  const [title, setTitle] = useState(true);
  const [divided, setDivided] = useState(true);
  return (
    <>
      <Form layout="inline" requiredMark={false} style={{ marginBottom: 24 }}>
        <Form.Item label="size">
          <Radio.Group
            value={size}
            onChange={e => {
              setSize(e.target.value);
            }}
          >
            <Radio.Button value="default">default</Radio.Button>
            <Radio.Button value="small">small</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="title">
          <Switch
            size="small"
            checked={title}
            onChange={e => {
              setTitle(e);
            }}
          />
        </Form.Item>
        {title && (
          <Form.Item label="divided">
            <Switch
              size="small"
              checked={divided}
              onChange={e => {
                setDivided(e);
              }}
            />
          </Form.Item>
        )}
      </Form>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Card
          title={title && 'Card title'}
          size={size}
          divided={divided}
          gray={true}
          bordered={false}
          style={{ width: 300 }}
        >
          <div>Card content</div>
          <div>Card content</div>
          <div>Card content</div>
        </Card>
        <Card
          title={title && 'Card title'}
          size={size}
          divided={divided}
          collapsible={true}
          gray={true}
          bordered={false}
          style={{ width: 300 }}
        >
          <div>Card content</div>
          <div>Card content</div>
          <div>Card content</div>
        </Card>
      </Space>
    </>
  );
};

export default App;
`},16466:function(t,n){"use strict";n.Z=`import React from 'react';
import { Card } from '@oceanbase/design';

const gridStyle: React.CSSProperties = {
  width: '25%',
  textAlign: 'center',
};

const App: React.FC = () => (
  <Card title="Card Title">
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle}>
      Content
    </Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
  </Card>
);

export default App;
`},11184:function(t,n){"use strict";n.Z=`import React from 'react';
import { Card } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Card title="Card title">
      <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
        Inner Card content
      </Card>
    </Card>
    <br />
    <Card title="Card title">
      <Card title="Inner Card title" divided={false}>
        Inner Card content
      </Card>
    </Card>
    <br />
    <Card
      title="Card title"
      bodyStyle={{
        padding: 0,
      }}
    >
      <Card title="Inner Card title" bordered={false} divided={false}>
        Inner Card content
      </Card>
    </Card>
    <br />
    <Card title="Card title" divided={false}>
      <Card
        title="Inner Card title"
        tabList={[
          { key: '1', label: 'Tab 1' },
          { key: '2', label: 'Tab 2' },
        ]}
      >
        Inner Card content
      </Card>
    </Card>
  </>
);

export default App;
`},66328:function(t,n){"use strict";n.Z=`import React from 'react';
import { Card } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Card title="Card Title" divided={false} extra={<a>More</a>} style={{ width: 300 }}>
      <div>Card content</div>
      <div>Card content</div>
      <div>Card content</div>
    </Card>
    <br />
    <Card
      title="Card Title"
      size="small"
      divided={false}
      extra={<a>More</a>}
      style={{ width: 300 }}
    >
      <div>Card content</div>
      <div>Card content</div>
      <div>Card content</div>
    </Card>
  </>
);

export default App;
`},33328:function(t,n){"use strict";n.Z=`import React from 'react';
import { Card } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Card title="Card Title" subTitle="SubTitle" style={{ width: 300 }}>
      <div>Card content</div>
      <div>Card content</div>
      <div>Card content</div>
    </Card>
    <br />
    <Card title="Card Title" subTitle="SubTitle" divided={false} style={{ width: 300 }}>
      <div>Card content</div>
      <div>Card content</div>
      <div>Card content</div>
    </Card>
  </>
);

export default App;
`},64586:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Card, Form, Radio, Switch } from '@oceanbase/design';
import type { CardSize } from '@oceanbase/design/es/card';

const tabList = [
  {
    key: 'tab1',
    tab: 'tab1',
  },
  {
    key: 'tab2',
    tab: 'tab2',
  },
];

const contentList: Record<string, React.ReactNode> = {
  tab1: <p>content1</p>,
  tab2: <p>content2</p>,
};

const tabListNoTitle = [
  {
    key: 'article',
    tab: 'article',
    tag: 22,
  },
  {
    key: 'app',
    tab: 'app',
    tag: 99,
  },
  {
    key: 'project',
    tab: 'project',
    tag: 0,
  },
];

const contentListNoTitle: Record<string, React.ReactNode> = {
  article: <p>article content</p>,
  app: <p>app content</p>,
  project: <p>project content</p>,
};

const App: React.FC = () => {
  const [size, setSize] = useState<CardSize>('default');
  const [divided, setDivided] = useState(true);
  const [activeTabKey1, setActiveTabKey1] = useState<string>('tab1');
  const [activeTabKey2, setActiveTabKey2] = useState<string>('app');

  const onTab1Change = (key: string) => {
    setActiveTabKey1(key);
  };
  const onTab2Change = (key: string) => {
    setActiveTabKey2(key);
  };

  return (
    <>
      <Form layout="inline" requiredMark={false} style={{ marginBottom: 24 }}>
        <Form.Item label="size">
          <Radio.Group
            value={size}
            onChange={e => {
              setSize(e.target.value);
            }}
          >
            <Radio.Button value="default">default</Radio.Button>
            <Radio.Button value="small">small</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="divided">
          <Switch
            size="small"
            checked={divided}
            onChange={value => {
              setDivided(value);
            }}
          />
        </Form.Item>
      </Form>
      <Card
        size={size}
        divided={divided}
        title="Card title"
        extra={<a>More</a>}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={onTab1Change}
      >
        {contentList[activeTabKey1]}
      </Card>
      <br />
      <Card
        size={size}
        divided={divided}
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey2}
        tabBarExtraContent={<a>More</a>}
        onTabChange={onTab2Change}
      >
        {contentListNoTitle[activeTabKey2]}
      </Card>
    </>
  );
};

export default App;
`},19877:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Card, Form, Input } from '@oceanbase/design';

export default () => {
  const [form] = Form.useForm();
  const { validateFields } = form;

  const handleSubmit = () => {
    validateFields().then(values => {
      const { name, age } = values;
      alert(\`name: \${name}; age: \${age}\`);
    });
  };

  return (
    <Card>
      <Form layout="vertical" form={form} preserve={false}>
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: 'Name is required',
            },
          ]}
        >
          <Input placeholder="name" />
        </Form.Item>
        <Form.Item
          name="age"
          label="Age"
          rules={[
            {
              required: true,
              message: 'Age is required',
            },
          ]}
        >
          <Input placeholder="age" />
        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }}>
          <Button type="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
`},68454:function(t,n){"use strict";n.Z=`import React from 'react';
import { Cascader } from '@oceanbase/design';

interface Option {
  value: string | number;
  label: string;
  children?: Option[];
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const onChange = (value: (string | number)[]) => {
  console.log(value);
};

const App: React.FC = () => (
  <Cascader options={options} onChange={onChange} placeholder="Please select" />
);

export default App;
`},53070:function(t,n){"use strict";n.Z=`import React from 'react';
import { Cascader, Space } from '@oceanbase/design';
import type { CascaderProps } from '@oceanbase/design';

interface Option {
  value: string | number;
  label: string;
  children?: Option[];
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const App: React.FC = () => {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Space direction="vertical" size="small">
        <div>Custom offset (offset: [20, 10])</div>
        <Cascader
          options={options}
          placeholder="Please select (custom offset)"
          builtinPlacements={{
            bottomLeft: {
              points: ['tl', 'bl'],
              offset: [20, 10], // [x, y] offset: x shifts right 20px, y shifts down 10px
              overflow: {
                adjustX: true,
                adjustY: true,
                shiftY: true,
              },
              htmlRegion: 'visible',
              dynamicInset: true,
            },
          }}
          placement="bottomLeft"
          style={{ width: 300 }}
        />
      </Space>
      <Space direction="vertical" size="small">
        <div>Custom offset at top position (offset: [20, -10])</div>
        <Cascader
          options={options}
          placeholder="Please select (top with custom offset)"
          builtinPlacements={{
            topLeft: {
              points: ['bl', 'tl'],
              offset: [20, -10], // y shifts up 10px
              overflow: {
                adjustX: true,
                adjustY: true,
                shiftY: true,
              },
              htmlRegion: 'visible',
              dynamicInset: true,
            },
          }}
          placement="topLeft"
          style={{ width: 300 }}
        />
      </Space>
    </Space>
  );
};

export default App;
`},35172:function(t,n){"use strict";n.Z=`import React from 'react';
import { Cascader } from '@oceanbase/design';
import type { MultipleCascaderProps } from '@oceanbase/design/es/cascader';

interface Option {
  value: string | number;
  label: string;
  children?: Option[];
  disableCheckbox?: boolean;
}

const options: Option[] = [
  {
    label: 'Light',
    value: 'light',
    children: new Array(20)
      .fill(null)
      .map((_, index) => ({ label: \`Number \${index}\`, value: index })),
  },
  {
    label: 'Bamboo',
    value: 'bamboo',
    children: [
      {
        label: 'Little',
        value: 'little',
        children: [
          {
            label: 'Toy Fish',
            value: 'fish',
            disableCheckbox: true,
          },
          {
            label: 'Toy Cards',
            value: 'cards',
          },
          {
            label: 'Toy Bird',
            value: 'bird',
          },
        ],
      },
    ],
  },
];

const onChange: MultipleCascaderProps<Option>['onChange'] = value => {
  console.log(value);
};

const App: React.FC = () => (
  <Cascader
    style={{ width: '100%' }}
    options={options}
    onChange={onChange}
    multiple
    maxTagCount="responsive"
    defaultValue={[
      ['light', 0],
      ['light', 1],
    ]}
  />
);

export default App;
`},35159:function(t,n){"use strict";n.Z=`import React from 'react';
import { Checkbox } from '@oceanbase/design';

const App: React.FC = () => (
  <Checkbox
    onChange={e => {
      console.log(\`checked: \${e.target.checked}\`);
    }}
  >
    Checkbox
  </Checkbox>
);

export default App;
`},96249:function(t,n){"use strict";n.Z=`import React from 'react';
import { Checkbox } from '@oceanbase/design';
import type { CheckboxGroupProps } from '@oceanbase/design/es/checkbox';

const onChange: CheckboxGroupProps['onChange'] = checkedValues => {
  console.log('checked = ', checkedValues);
};

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];

const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

const App: React.FC = () => (
  <>
    <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
    <Checkbox.Group
      options={optionsWithDisabled}
      disabled
      defaultValue={['Apple']}
      onChange={onChange}
    />
  </>
);

export default App;
`},13879:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Checkbox, Space } from '@oceanbase/design';
import type { CheckboxGroupProps } from '@oceanbase/design/es/checkbox';

const App: React.FC = () => {
  const [value, setValue] = useState(['long']);

  const onChange: CheckboxGroupProps['onChange'] = value => {
    console.log('checkbox checked', value);
    setValue(value);
  };

  return (
    <Checkbox.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Checkbox value="long">
          This is long long long long long long long long long long long long long long long long
          long long long long long long long long text
        </Checkbox>
        <Checkbox value="short">This is short text</Checkbox>
      </Space>
    </Checkbox.Group>
  );
};

export default App;
`},25089:function(t,n){"use strict";n.Z=`import React from 'react';
import type { CollapseProps } from '@oceanbase/design';
import { Collapse } from '@oceanbase/design';

const text =
  'This is long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long panel content.';

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];

const App: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return <Collapse accordion items={items} onChange={onChange} />;
};

export default App;
`},34064:function(t,n){"use strict";n.Z=`import React from 'react';
import type { CollapseProps } from '@oceanbase/design';
import { Collapse } from '@oceanbase/design';
import { SettingOutlined } from '@oceanbase/icons';

const text =
  'This is long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long panel content.';

const genExtra = () => (
  <SettingOutlined
    onClick={e => {
      // If you don't want click extra trigger collapse, you can prevent this:
      e.stopPropagation();
    }}
  />
);

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
    extra: genExtra(),
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
    extra: genExtra(),
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
    extra: genExtra(),
  },
];

const App: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />;
};

export default App;
`},65250:function(t,n){"use strict";n.Z=`import React from 'react';
import type { CollapseProps } from '@oceanbase/design';
import { Collapse } from '@oceanbase/design';

const text =
  'This is long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long panel content.';

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];

const App: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return <Collapse bordered={false} items={items} onChange={onChange} />;
};

export default App;
`},59423:function(t,n){"use strict";n.Z=`import type { CSSProperties } from 'react';
import React from 'react';
import { RightOutlined } from '@oceanbase/icons';
import type { CollapseProps } from '@oceanbase/design';
import { Collapse, theme } from '@oceanbase/design';

const text =
  'This is long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long panel content.';

const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = panelStyle => [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
    style: panelStyle,
  },
];

const App: React.FC = () => {
  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: 16,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: \`1px solid \${token.colorBorderSecondary}\`,
  };

  return (
    <Collapse
      bordered={false}
      expandIcon={({ isActive }) => <RightOutlined rotate={isActive ? 90 : 0} />}
      style={{ background: token.colorBgContainer }}
      items={getItems(panelStyle)}
    />
  );
};

export default App;
`},17441:function(t,n){"use strict";n.Z=`import React from 'react';
import type { CollapseProps } from '@oceanbase/design';
import { Collapse } from '@oceanbase/design';

const text =
  'This is long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long panel content.';

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];

const App: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return <Collapse expandIconPosition="end" items={items} onChange={onChange} />;
};

export default App;
`},97081:function(t,n){"use strict";n.Z=`import React from 'react';
import type { CollapseProps } from '@oceanbase/design';
import { Collapse } from '@oceanbase/design';

const text =
  'This is long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long panel content.';

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];

const App: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return <Collapse ghost items={items} onChange={onChange} />;
};

export default App;
`},76669:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Card, ConfigProvider, Form, Space, Switch } from '@oceanbase/design';

const App: React.FC = () => {
  const [divided, setDivided] = useState(true);

  return (
    <>
      <Form layout="inline" style={{ marginBottom: 16 }}>
        <Form.Item label="Card divided" required={true}>
          <Switch
            size="small"
            value={divided}
            onChange={value => {
              setDivided(value);
            }}
          />
        </Form.Item>
      </Form>
      <ConfigProvider card={{ divided }}>
        <Space size={[0, 16]} direction="vertical">
          <Card title="Card title" style={{ width: 300 }}>
            <div>Card content</div>
            <div>Card content</div>
            <div>Card content</div>
          </Card>
          <Card
            tabList={[
              {
                key: '1',
                label: 'Tab 1',
              },
              {
                key: '2',
                label: 'Tab 2',
              },
              {
                key: '3',
                label: 'Tab 3',
              },
            ]}
            style={{ width: 300 }}
          >
            <div>Card content</div>
            <div>Card content</div>
            <div>Card content</div>
          </Card>
        </Space>
      </ConfigProvider>
    </>
  );
};

export default App;
`},96578:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { ConfigProvider, Button, Space, Card, Input, Switch } from '@oceanbase/design';

const CssVarDemo: React.FC = () => {
  const [cssVarEnabled, setCssVarEnabled] = useState(false);
  const [hashed, setHashed] = useState(true);

  return (
    <div>
      <Card
        title="CSS Variable Mode Configuration"
        style={{ marginBottom: 24 }}
        extra={
          <Space>
            <span>Enable CSS Variables:</span>
            <Switch checked={cssVarEnabled} onChange={setCssVarEnabled} />
            <span>Enable Hash:</span>
            <Switch checked={hashed} onChange={setHashed} disabled={!cssVarEnabled} />
          </Space>
        }
      >
        <p>
          CSS variable mode allows you to switch themes dynamically using CSS custom properties
          without re-rendering components.
        </p>
        <p>
          After enabling, you can see generated CSS variables in browser DevTools, for example:
          <code>--ant-color-primary</code>, <code>--ant-color-success</code>, etc.
        </p>
      </Card>

      <ConfigProvider
        theme={{
          cssVar: cssVarEnabled,
          hashed,
          token: {
            colorPrimary: '#0d6cf2',
          },
        }}
      >
        <Card title="Component Examples">
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Space>
              <Button type="primary">Primary Button</Button>
              <Button type="default">Default Button</Button>
              <Button type="dashed">Dashed Button</Button>
              <Button danger>Danger Button</Button>
            </Space>

            <Input placeholder="Input with CSS variables" />

            <Space>
              <Button type="primary" size="small">
                Small
              </Button>
              <Button type="primary" size="middle">
                Middle
              </Button>
              <Button type="primary" size="large">
                Large
              </Button>
            </Space>
          </Space>
        </Card>
      </ConfigProvider>

      {cssVarEnabled && (
        <Card title="Usage Tips" style={{ marginTop: 24 }}>
          <ul>
            <li>
              In browser DevTools, inspect elements to see generated CSS variables, for example:
              <code>--ant-color-primary</code>
            </li>
            <li>
              You can dynamically change the theme by modifying CSS variables without re-rendering
              components
            </li>
            <li>
              In React 16/17, manually specify the <code>key</code> prop to ensure theme isolation
            </li>
            <li>
              When using a single version only, set <code>hashed: false</code> to reduce stylesheet
              size
            </li>
          </ul>
        </Card>
      )}
    </div>
  );
};

export default CssVarDemo;
`},58288:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { ConfigProvider, Radio, Space, Typography, theme } from '@oceanbase/design';
import { compactTheme, defaultTheme } from '@oceanbase/design';
import zhCN from '@oceanbase/design/locale/zh-CN';
import enUS from '@oceanbase/design/locale/en-US';

const { Text } = Typography;

type TypographyPreset = 'auto' | 'default' | 'compact';

const TokenPreview = () => {
  const { token } = theme.useToken();
  return (
    <Typography.Paragraph type="secondary" style={{ marginBottom: 0 }}>
      fontSize: {token.fontSize}px \xB7 fontFamily: {token.fontFamily.split(',')[0]}
    </Typography.Paragraph>
  );
};

export default () => {
  const [locale, setLocale] = useState(zhCN);
  const [preset, setPreset] = useState<TypographyPreset>('auto');

  const themeConfig =
    preset === 'default' ? defaultTheme : preset === 'compact' ? compactTheme : undefined;

  return (
    <ConfigProvider locale={locale} theme={themeConfig}>
      <Space direction="vertical" size={16} style={{ width: '100%', paddingTop: 16 }}>
        <Space wrap>
          <Radio.Group
            value={locale === zhCN ? 'zh' : 'en'}
            onChange={e => setLocale(e.target.value === 'zh' ? zhCN : enUS)}
          >
            <Radio.Button value="zh">\u4E2D\u6587</Radio.Button>
            <Radio.Button value="en">English</Radio.Button>
          </Radio.Group>
          <Radio.Group value={preset} onChange={e => setPreset(e.target.value)}>
            <Radio.Button value="auto">\u968F locale \u81EA\u52A8</Radio.Button>
            <Radio.Button value="default">defaultTheme</Radio.Button>
            <Radio.Button value="compact">compactTheme</Radio.Button>
          </Radio.Group>
        </Space>
        <TokenPreview />
        <Text>\u6B63\u6587\u793A\u4F8B OceanBase Design / \u5965\u661F\u8D1D\u65AF\u8BBE\u8BA1\u7CFB\u7EDF</Text>
      </Space>
    </ConfigProvider>
  );
};
`},3629:function(t,n){"use strict";n.Z=`import {
  Button,
  Card,
  ConfigProvider,
  DatePicker,
  Divider,
  Input,
  Radio,
  Select,
  Space,
  Table,
  Tabs,
} from '@oceanbase/design';
import type { SizeType } from '@oceanbase/design/es/config-provider';
import React, { useState } from 'react';

const { TabPane } = Tabs;

const App: React.FC = () => {
  const [componentSize, setComponentSize] = useState<SizeType>('middle');

  return (
    <>
      <Radio.Group
        value={componentSize}
        onChange={e => {
          setComponentSize(e.target.value);
        }}
      >
        <Radio.Button value="small">Small</Radio.Button>
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="large">Large</Radio.Button>
      </Radio.Group>
      <Divider />
      <ConfigProvider componentSize={componentSize}>
        <Space size={[0, 16]} style={{ width: '100%' }} direction="vertical">
          <Input />
          <Tabs defaultActiveKey="1">
            <TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
          <Input.Search allowClear />
          <Input.TextArea allowClear />
          <Select defaultValue="demo" options={[{ value: 'demo', label: 'demo' }]} />
          <DatePicker />
          <DatePicker.RangePicker />
          <Button>Button</Button>
          <Card title="Card">
            <Table
              columns={[
                { title: 'Name', dataIndex: 'name' },
                { title: 'Age', dataIndex: 'age' },
              ]}
              dataSource={[
                { key: '1', name: 'John Brown', age: 32 },
                { key: '2', name: 'Jim Green', age: 42 },
                { key: '3', name: 'Joe Black', age: 32 },
              ]}
            />
          </Card>
        </Space>
      </ConfigProvider>
    </>
  );
};

export default App;
`},48292:function(t,n){"use strict";n.Z=`import React from 'react';
import { Alert, ConfigProvider, Space, Spin } from '@oceanbase/design';
import { LoadingOutlined } from '@oceanbase/icons';

const App: React.FC = () => {
  return (
    <ConfigProvider
      spin={{
        indicator: <LoadingOutlined style={{ fontSize: 24 }} spin />,
      }}
    >
      <Space size="middle" direction="vertical">
        <Spin />
        <Spin tip="Loading">
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </Spin>
      </Space>
    </ConfigProvider>
  );
};

export default App;
`},54895:function(t,n){"use strict";n.Z=`import { Button, ConfigProvider, Form, InputNumber, token } from '@oceanbase/design';
import React from 'react';
import { SketchPicker } from 'react-color';

type ThemeData = {
  borderRadius: number;
  colorPrimary: string;
};

const defaultData: ThemeData = {
  borderRadius: token.borderRadius,
  colorPrimary: token.colorPrimary,
};

export default () => {
  const [form] = Form.useForm();

  const [data, setData] = React.useState<ThemeData>(defaultData);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: data.colorPrimary,
          borderRadius: data.borderRadius,
        },
      }}
    >
      <Form
        form={form}
        onValuesChange={(changedValues, allValues) => {
          const colorObj = changedValues?.colorPrimary
            ? { colorPrimary: allValues?.colorPrimary?.hex }
            : {};
          setData({
            ...allValues,
            ...colorObj,
          });
        }}
        name="theme"
        initialValues={defaultData}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
      >
        <Form.Item valuePropName="color" name="colorPrimary" label="Primary Color" required={true}>
          <SketchPicker />
        </Form.Item>
        <Form.Item name="borderRadius" label="Border Radius" required={true}>
          <InputNumber />
        </Form.Item>
        <Form.Item name="submit" wrapperCol={{ offset: 4, span: 20 }}>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};
`},61161:function(t,n){"use strict";n.Z=`import React from 'react';
import { DatePicker, Space } from '@oceanbase/design';
import type { DatePickerProps } from '@oceanbase/design';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <DatePicker onChange={onChange} />
    <DatePicker onChange={onChange} showTime />
    <DatePicker onChange={onChange} picker="week" />
    <DatePicker onChange={onChange} picker="month" />
    <DatePicker onChange={onChange} picker="quarter" />
    <DatePicker onChange={onChange} picker="year" />
  </Space>
);

export default App;
`},44243:function(t,n){"use strict";n.Z=`import React from 'react';
import { DatePicker, Space } from '@oceanbase/design';
import type { DatePickerProps } from '@oceanbase/design';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const weekFormat = 'MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];

const customFormat: DatePickerProps['format'] = value =>
  \`custom format: \${value.format(dateFormat)}\`;

const customWeekStartEndFormat: DatePickerProps['format'] = value =>
  \`\${dayjs(value).startOf('week').format(weekFormat)} ~ \${dayjs(value)
    .endOf('week')
    .format(weekFormat)}\`;

const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
    <DatePicker defaultValue={dayjs('01/01/2015', dateFormatList[0])} format={dateFormatList} />
    <DatePicker defaultValue={dayjs('2015/01', monthFormat)} format={monthFormat} picker="month" />
    <DatePicker defaultValue={dayjs()} format={customWeekStartEndFormat} picker="week" />
    <RangePicker
      defaultValue={[dayjs('2015/01/01', dateFormat), dayjs('2015/01/01', dateFormat)]}
      format={dateFormat}
    />
    <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={customFormat} />
  </Space>
);

export default App;
`},74205:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { ConfigProvider, DatePicker, Radio, Space, Switch } from '@oceanbase/design';
import type { DatePickerProps } from '@oceanbase/design';
import enUS from '@oceanbase/design/locale/en-US';
import zhCN from '@oceanbase/design/locale/zh-CN';
import dayjs from 'dayjs';

const App: React.FC = () => {
  const [locale, setLocale] = useState('en-US');
  const [timezone, setTimezone] = useState(false);

  const onChange: DatePickerProps['onChange'] = (_, dateStr) => {
    console.log('onChange:', dateStr);
  };

  const timezoneFormat = (format: string) => {
    return timezone ? \`\${format} (UTC+8)\` : format;
  };

  const enUSLocale: typeof enUS = {
    ...enUS,
    DatePicker: {
      ...enUS.DatePicker!,
      lang: {
        ...enUS.DatePicker?.lang,
        fieldDateFormat: timezoneFormat('MM/DD/YYYY'),
        fieldDateTimeFormat: timezoneFormat('MM/DD/YYYY HH:mm:ss'),
      },
    },
  };

  const zhCNLocale: typeof zhCN = {
    ...zhCN,
    DatePicker: {
      ...zhCN.DatePicker!,
      lang: {
        ...zhCN.DatePicker?.lang,
        fieldDateFormat: timezoneFormat('YYYY-MM-DD'),
        fieldDateTimeFormat: timezoneFormat('YYYY-MM-DD HH:mm:ss'),
      },
    },
  };

  return (
    <Space direction="vertical" size={12}>
      <Space>
        locale:
        <Radio.Group
          value={locale}
          onChange={e => {
            setLocale(e.target.value);
          }}
        >
          <Radio value="en-US">en-US</Radio>
          <Radio value="zh-CN">zh-CN</Radio>
        </Radio.Group>
      </Space>
      <Space>
        timezone:
        <Switch
          size="small"
          value={timezone}
          onChange={value => {
            setTimezone(value);
          }}
        />
      </Space>
      <ConfigProvider locale={locale === 'en-US' ? enUSLocale : zhCNLocale}>
        <Space direction="vertical">
          <DatePicker defaultValue={dayjs('2024-01-01')} onChange={onChange} />
          <DatePicker defaultValue={dayjs('2024-01-01')} onChange={onChange} showTime />
        </Space>
      </ConfigProvider>
    </Space>
  );
};

export default App;
`},63799:function(t,n){"use strict";n.Z=`import React from 'react';
import { DatePicker, Space } from '@oceanbase/design';

const { RangePicker } = DatePicker;

const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <RangePicker />
    <RangePicker showTime />
    <RangePicker picker="week" />
    <RangePicker picker="month" />
    <RangePicker picker="quarter" />
    <RangePicker picker="year" />
  </Space>
);

export default App;
`},63823:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Descriptions } from '@oceanbase/design';

const App: React.FC = () => (
  <Descriptions
    title="User Info"
    extra={
      <Button size="small" type="primary">
        Edit
      </Button>
    }
  >
    <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
    <Descriptions.Item label="Remark">empty</Descriptions.Item>
    <Descriptions.Item label="Address">
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
  </Descriptions>
);

export default App;
`},91711:function(t,n){"use strict";n.Z=`import React from 'react';
import { Badge, Descriptions } from '@oceanbase/design';

export default () => (
  <Descriptions title="User Info" bordered>
    <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
    <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
    <Descriptions.Item label="Renewal">YES</Descriptions.Item>
    <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
    <Descriptions.Item label="Usage Time" span={2}>
      2019-04-24 18:00:00
    </Descriptions.Item>
    <Descriptions.Item label="Status" span={3}>
      <Badge status="processing" text="Running" />
    </Descriptions.Item>
    <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
    <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
    <Descriptions.Item label="Receipts">$60.00</Descriptions.Item>
    <Descriptions.Item label="Config Info">
      Data disk type: OceanBase
      <br />
      Database version: 3.4
      <br />
      Package: dds.oceanbase.mid
      <br />
      Storage space: 10 GB
      <br />
      Replication factor: 3
      <br />
      Region: East China 1
      <br />
    </Descriptions.Item>
  </Descriptions>
);
`},43706:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Button, Descriptions, Space } from '@oceanbase/design';
import { CaretRightOutlined } from '@oceanbase/icons';

const items = [
  { key: '1', label: 'UserName', children: 'Zhou Maomao' },
  { key: '2', label: 'Telephone', children: '1810000000' },
  { key: '3', label: 'Live', children: 'Hangzhou, Zhejiang' },
  { key: '4', label: 'Remark', children: 'empty' },
  {
    key: '5',
    label: 'Address',
    children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
  },
  { key: '6', label: 'Company', children: 'Ant Group' },
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
      <Descriptions title="User Info" collapsible defaultCollapsed={false} items={items} />
      <Space>
        <Button
          icon={<CaretRightOutlined rotate={collapsed ? 0 : 90} />}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? 'Expand' : 'Collapse'}
        </Button>
      </Space>
      <Descriptions
        title="User Info (Controlled)"
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        items={items}
      />
    </Space>
  );
};

export default App;
`},35080:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Descriptions, Form, Radio } from '@oceanbase/design';
import type { DescriptionsProps } from '@oceanbase/design';

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'UserName',
    children: 'Zhou Maomao',
  },
  {
    key: '2',
    label: 'Telephone',
    children: '1810000000',
  },
  {
    key: '3',
    label: 'Live',
    children: 'Hangzhou, Zhejiang',
  },
  {
    key: '4',
    label: 'Address',
    span: 2,
    children: 'Xihu District, Hangzhou, Zhejiang, China',
  },
  {
    key: '5',
    label: 'Remark',
    children: 'empty',
  },
];

const App: React.FC = () => {
  const [size, setSize] = useState<'default' | 'middle' | 'small'>('default');
  return (
    <>
      <Form layout="inline">
        <Form.Item label="size" required={true}>
          <Radio.Group
            value={size}
            onChange={e => {
              setSize(e.target.value);
            }}
          >
            <Radio.Button value="default">default</Radio.Button>
            <Radio.Button value="middle">middle</Radio.Button>
            <Radio.Button value="small">small</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <br />
      <Descriptions size={size} title="Title" items={items} colon={false} contentAlign="left" />
    </>
  );
};

export default App;
`},85055:function(t,n){"use strict";n.Z=`import React from 'react';
import { Descriptions, Tooltip } from '@oceanbase/design';

export default () => (
  <Descriptions title="User Info">
    <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
    <Descriptions.Item
      label="Telephone"
      contentProps={{
        editable: true,
      }}
    >
      1810000000
    </Descriptions.Item>
    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
    <Descriptions.Item label="Address">
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
    <Descriptions.Item label="Remark">
      <Tooltip placement="topLeft" title="Custom Tooltip">
        <a>This is long long long long long long long long long long long Link</a>
      </Tooltip>
    </Descriptions.Item>
    <Descriptions.Item
      label="Description"
      contentProps={{
        copyable: true,
        editable: true,
      }}
    >
      This is a description. This is a description. This is a description
    </Descriptions.Item>
    <Descriptions.Item
      span={3}
      label="No ellipsis"
      contentProps={{
        ellipsis: false,
      }}
    >
      This is no ellipsis. This is no ellipsis. This is no ellipsis. This is no ellipsis. This is no
      ellipsis. This is no ellipsis. This is no ellipsis. This is no ellipsis. This is no ellipsis.
      This is no ellipsis. This is no ellipsis. This is no ellipsis. This is no ellipsis. This is no
      ellipsis. This is no ellipsis.
    </Descriptions.Item>
  </Descriptions>
);
`},33517:function(t,n){"use strict";n.Z=`import React from 'react';
import { Badge, Descriptions, Typography } from '@oceanbase/design';

export default () => (
  <Descriptions title="User Info">
    <Descriptions.Item label="UserName">
      <Typography.Text ellipsis={{ tooltip: true }} copyable editable>
        Zhou Maomao
      </Typography.Text>
    </Descriptions.Item>
    <Descriptions.Item label="Telephone">
      <Badge status="success" text="1810000000" />
    </Descriptions.Item>
    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
    <Descriptions.Item label="Address">
      <Typography.Text ellipsis={{ tooltip: true }} copyable editable>
        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
      </Typography.Text>
    </Descriptions.Item>
  </Descriptions>
);
`},4352:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Descriptions, Form, Popover, Radio } from '@oceanbase/design';
import type { DescriptionsProps } from '@oceanbase/design';

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'UserName',
    children: 'Zhou Maomao',
  },
  {
    key: '2',
    label: 'Telephone',
    children: '1810000000',
  },
  {
    key: '3',
    label: 'Live',
    children: 'Hangzhou, Zhejiang',
  },
  {
    key: '4',
    label: 'Address',
    span: 2,
    children: 'Xihu District, Hangzhou, Zhejiang, China',
  },
  {
    key: '5',
    label: 'Remark',
    children: 'empty',
  },
];

const App: React.FC = () => {
  return (
    <Popover
      content={
        <Descriptions size="small" title="Title" items={items} colon={false} contentAlign="left" />
      }
    >
      <Button type="primary">Hover me</Button>
    </Popover>
  );
};

export default App;
`},13263:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Descriptions, Form, Radio } from '@oceanbase/design';
import type { DescriptionsProps } from '@oceanbase/design';

const borderedItems: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Product',
    children: 'Cloud Database',
  },
  {
    key: '2',
    label: 'Billing',
    children: 'Prepaid',
  },
  {
    key: '3',
    label: 'Time',
    children: '18:00:00',
  },
  {
    key: '4',
    label: 'Amount',
    children: '$80.00',
  },
  {
    key: '5',
    label: 'Discount',
    children: '$20.00',
  },
  {
    key: '6',
    label: 'Official',
    children: '$60.00',
  },
  {
    key: '7',
    label: 'Config Info',
    children: (
      <>
        Data disk type: OceanBase
        <br />
        Database version: 3.4
        <br />
        Package: dds.oceanbase.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
        <br />
      </>
    ),
  },
];

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Product',
    children: 'Cloud Database',
  },
  {
    key: '2',
    label: 'Billing',
    children: 'Prepaid',
  },
  {
    key: '3',
    label: 'Time',
    children: '18:00:00',
  },
  {
    key: '4',
    label: 'Amount',
    children: '$80.00',
  },
  {
    key: '5',
    label: 'Discount',
    children: '$20.00',
  },
  {
    key: '6',
    label: 'Official',
    children: '$60.00',
  },
];

const App: React.FC = () => {
  const [layout, setLayout] = useState<'horizontal' | 'vertical'>('horizontal');
  const [size, setSize] = useState<'default' | 'middle' | 'small'>('default');

  return (
    <div>
      <Form layout="inline">
        <Form.Item label="layout" required={true}>
          <Radio.Group
            value={layout}
            onChange={e => {
              setLayout(e.target.value);
            }}
          >
            <Radio.Button value="horizontal">horizontal</Radio.Button>
            <Radio.Button value="vertical">vertical</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="size" required={true}>
          <Radio.Group
            value={size}
            onChange={e => {
              setSize(e.target.value);
            }}
          >
            <Radio.Button value="default">default</Radio.Button>
            <Radio.Button value="middle">middle</Radio.Button>
            <Radio.Button value="small">small</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <br />
      {layout === 'horizontal' ? (
        <>
          <Descriptions title="Custom Size" size={size} items={items} />
          <br />
          <Descriptions bordered title="Custom Size" size={size} items={borderedItems} />
        </>
      ) : (
        <>
          <Descriptions title="Custom Size" size={size} items={items} layout="vertical" />
          <br />
          <Descriptions
            title="Custom Size"
            size={size}
            items={items}
            layout="vertical"
            column={1}
          />
        </>
      )}
    </div>
  );
};

export default App;
`},5055:function(t,n){"use strict";n.Z=`import React from 'react';
import { Badge, Descriptions } from '@oceanbase/design';

export default () => (
  <Descriptions title="User Info" layout="vertical" bordered>
    <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
    <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
    <Descriptions.Item label="Renewal">YES</Descriptions.Item>
    <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
    <Descriptions.Item label="Usage Time" span={2}>
      2019-04-24 18:00:00
    </Descriptions.Item>
    <Descriptions.Item label="Status" span={3}>
      <Badge status="processing" text="Running" />
    </Descriptions.Item>
    <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
    <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
    <Descriptions.Item label="Receipts">$60.00</Descriptions.Item>
    <Descriptions.Item label="Config Info">
      Data disk type: OceanBase
      <br />
      Database version: 3.4
      <br />
      Package: dds.oceanbase.mid
      <br />
      Storage space: 10 GB
      <br />
      Replication factor: 3
      <br />
      Region: East China 1
      <br />
    </Descriptions.Item>
  </Descriptions>
);
`},45177:function(t,n){"use strict";n.Z=`import React from 'react';
import { Descriptions, Divider } from '@oceanbase/design';
import type { DescriptionsProps } from '@oceanbase/design';

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'UserName',
    children: 'Zhou Maomao',
  },
  {
    key: '2',
    label: 'Telephone',
    children: '1810000000',
  },
  {
    key: '3',
    label: 'Live',
    children: 'Hangzhou, Zhejiang',
  },
  {
    key: '4',
    label: 'Address',
    span: 2,
    children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
  },
  {
    key: '5',
    label: 'Remark',
    children: 'empty',
  },
];

const App: React.FC = () => <Descriptions title="User Info" layout="vertical" items={items} />;

export default App;
`},62337:function(t,n){"use strict";n.Z=`import React from 'react';
import { Divider } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
  </>
);

export default App;
`},9534:function(t,n){"use strict";n.Z=`import React from 'react';
import { Divider } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    Text
    <Divider type="vertical" />
    <a href="#">Link</a>
    <Divider type="vertical" />
    <a href="#">Link</a>
  </>
);

export default App;
`},73050:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Drawer, Button } from '@oceanbase/design';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Drawer
      </Button>
      <Drawer
        open={open}
        title="Title"
        onCancel={() => {
          setOpen(false);
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
`},20515:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Drawer, Button } from '@oceanbase/design';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Drawer
      </Button>
      <Drawer
        open={open}
        title="Title"
        confirmLoading={true}
        onOk={() => {
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
`},38709:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Drawer, Button, Space } from '@oceanbase/design';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Drawer
      </Button>
      <Drawer
        open={open}
        title="Title"
        onCancel={() => {
          setOpen(false);
        }}
        footer={
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Space>
              <Button
                type="primary"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Ok
              </Button>
              <Button
                onClick={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </Button>
            </Space>
            <div>Some info message</div>
          </div>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
`},60309:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Drawer, Button, Descriptions } from '@oceanbase/design';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Drawer
      </Button>
      <Drawer
        open={open}
        title="Title"
        onCancel={() => {
          setOpen(false);
        }}
      >
        <Descriptions column={1}>
          <Descriptions.Item label="Name">John</Descriptions.Item>
          <Descriptions.Item label="Age">18</Descriptions.Item>
          <Descriptions.Item label="Address">Hangzhou, Zhejiang Province</Descriptions.Item>
        </Descriptions>
      </Drawer>
    </>
  );
};
`},49097:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Drawer, Button, message } from '@oceanbase/design';
import { BookOutlined } from '@oceanbase/icons';

export default () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setOpen1(true);
        }}
        style={{ marginRight: 8 }}
      >
        Document with URL
      </Button>
      <Button
        type="primary"
        onClick={() => {
          setOpen2(true);
        }}
        style={{ marginRight: 8 }}
      >
        Document with Function
      </Button>
      <Button
        type="primary"
        onClick={() => {
          setOpen3(true);
        }}
      >
        Document with Custom Icon
      </Button>
      <Drawer
        title="Drawer Title"
        document="https://www.oceanbase.com"
        open={open1}
        onCancel={() => {
          setOpen1(false);
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <Drawer
        title="Drawer Title"
        document={() => {
          message.info('Click document');
        }}
        open={open2}
        onCancel={() => {
          setOpen2(false);
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <Drawer
        title="Drawer Title"
        document={
          <BookOutlined
            onClick={() => {
              message.info('Click document');
            }}
          />
        }
        open={open3}
        onCancel={() => {
          setOpen3(false);
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
`},68173:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Drawer, Button, Space } from '@oceanbase/design';

export default () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            setOpen1(true);
          }}
        >
          Enable Drawer footer by onOk
        </Button>
        <Button
          onClick={() => {
            setOpen2(true);
          }}
        >
          Enable Drawer footer by footer
        </Button>
      </Space>
      <Drawer
        open={open1}
        title="Title"
        onOk={() => {
          setOpen1(false);
        }}
        onCancel={() => {
          setOpen1(false);
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <Drawer
        open={open2}
        title="Title"
        onOk={() => {
          setOpen2(false);
        }}
        onCancel={() => {
          setOpen2(false);
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
`},38412:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Drawer, Button, Space } from '@oceanbase/design';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Drawer
      </Button>
      <Drawer
        open={open}
        title="Title"
        onCancel={() => {
          setOpen(false);
        }}
        onOk={() => {
          setOpen(false);
        }}
        footerExtra={<div>This is footer extra</div>}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
`},70994:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Drawer, Button, Form, Input } from '@oceanbase/design';

export default () => {
  const [form] = Form.useForm();
  const { validateFields } = form;

  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    validateFields().then(values => {
      const { name, age } = values;
      alert(\`name: \${name}; age: \${age}\`);
    });
  };

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Drawer
      </Button>
      <Drawer
        open={open}
        title="Title"
        onOk={() => {
          handleSubmit();
        }}
        onCancel={() => {
          setOpen(false);
        }}
      >
        <Form layout="vertical" form={form} preserve={false}>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: 'Name is required',
              },
            ]}
          >
            <Input placeholder="name" />
          </Form.Item>
          <Form.Item
            name="age"
            label="Age"
            rules={[
              {
                required: true,
                message: 'Age is required',
              },
            ]}
          >
            <Input placeholder="age" />
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};
`},59744:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Drawer, Button } from '@oceanbase/design';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Drawer
      </Button>
      <Drawer
        loading={true}
        open={open}
        title="Title"
        onCancel={() => {
          setOpen(false);
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
`},90084:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Button, Descriptions, Drawer, Form, Input, Space } from '@oceanbase/design';
import { range } from 'lodash';
import { DownOutlined, UpOutlined } from '@oceanbase/icons';

export default () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  const [form] = Form.useForm();
  const { validateFields } = form;

  const handleSubmit = () => {
    validateFields().then(values => {
      const { name, age } = values;
      alert(\`name: \${name}; age: \${age}\`);
    });
  };

  return (
    <>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            setOpen1(true);
          }}
        >
          Open Drawer with footer
        </Button>
        <Button
          onClick={() => {
            setOpen2(true);
          }}
        >
          Open Drawer with dynamic content
        </Button>
        <Button
          onClick={() => {
            setOpen3(true);
          }}
        >
          Open Drawer without footer
        </Button>
      </Space>
      <Drawer
        open={open1}
        title="Title"
        onOk={() => {
          handleSubmit();
        }}
        onCancel={() => {
          setOpen1(false);
        }}
      >
        <Form layout="vertical" form={form} preserve={false}>
          {range(1, 20).map(item => (
            <Form.Item
              key={item}
              name={\`item \${item}\`}
              label="Name"
              rules={[
                {
                  required: true,
                  message: \`item \${item} is required\`,
                },
              ]}
            >
              <Input placeholder={\`item \${item}\`} />
            </Form.Item>
          ))}
        </Form>
      </Drawer>
      <Drawer
        open={open2}
        title="Title"
        onOk={() => {
          handleSubmit();
        }}
        onCancel={() => {
          setOpen2(false);
        }}
      >
        <Form layout="vertical" form={form} preserve={false}>
          {range(1, 5).map(item => (
            <Form.Item
              key={item}
              name={\`item \${item}\`}
              label="Name"
              rules={[
                {
                  required: true,
                  message: \`item \${item} is required\`,
                },
              ]}
            >
              <Input placeholder={\`item \${item}\`} />
            </Form.Item>
          ))}
          <Button
            onClick={() => {
              setCollapsed(!collapsed);
            }}
            icon={collapsed ? <DownOutlined /> : <UpOutlined />}
          >
            {collapsed ? 'Expand' : 'Collapse'}
          </Button>
          {collapsed
            ? null
            : range(5, 20).map(item => (
                <Form.Item
                  key={item}
                  name={\`item \${item}\`}
                  label="Name"
                  rules={[
                    {
                      required: true,
                      message: \`item \${item} is required\`,
                    },
                  ]}
                  style={item === 5 ? { marginTop: 24 } : {}}
                >
                  <Input placeholder={\`item \${item}\`} />
                </Form.Item>
              ))}
        </Form>
      </Drawer>
      <Drawer
        open={open3}
        title="Title"
        onCancel={() => {
          setOpen3(false);
        }}
      >
        <Descriptions layout="vertical" column={1}>
          {range(1, 20).map(item => (
            <Descriptions.Item key={item} label={\`item \${item}\`}>
              {\`Some message of item \${item}\`}
            </Descriptions.Item>
          ))}
        </Descriptions>
      </Drawer>
    </>
  );
};
`},65455:function(t,n){"use strict";n.Z=`import React from 'react';
import { Dropdown, Space } from '@oceanbase/design';
import type { MenuProps } from '@oceanbase/design';
import { DownOutlined, SmileOutlined } from '@oceanbase/icons';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        disabled menu item
      </a>
    ),
    disabled: true,
  },
  {
    key: '5',
    label: 'danger menu item',
    danger: true,
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        menu item with divider
      </a>
    ),
  },
  {
    type: 'divider',
  },
  {
    key: '4',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        menu item with icon
      </a>
    ),
    icon: <SmileOutlined />,
  },
  {
    key: '6',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        menu item with extra
      </a>
    ),
    extra: '\u2318S',
  },
];

const App: React.FC = () => (
  <Dropdown menu={{ items }}>
    <a onClick={e => e.preventDefault()}>
      <Space>
        Hover me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default App;
`},61190:function(t,n){"use strict";n.Z=`import React from 'react';
import { Dropdown, message, Space, Tooltip } from '@oceanbase/design';
import type { MenuProps } from '@oceanbase/design';
import { UserOutlined } from '@oceanbase/icons';

const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  message.info('Click on left button.');
  console.log('click left button', e);
};

const handleMenuClick: MenuProps['onClick'] = e => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const items: MenuProps['items'] = [
  {
    label: '1st menu item',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: '2nd menu item',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: '3rd menu item',
    key: '3',
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: '4rd menu item',
    key: '4',
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const App: React.FC = () => (
  <Space wrap>
    <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>
      Dropdown
    </Dropdown.Button>
    <Dropdown.Button menu={menuProps} icon={<UserOutlined />}>
      Dropdown
    </Dropdown.Button>
    <Dropdown.Button menu={menuProps} onClick={handleButtonClick} disabled>
      Disabled
    </Dropdown.Button>
    <Dropdown.Button
      menu={menuProps}
      buttonsRender={([leftButton, rightButton]) => [
        <Tooltip title="tooltip" key="leftButton">
          {leftButton}
        </Tooltip>,
        React.cloneElement(rightButton as React.ReactElement<any, string>, { loading: true }),
      ]}
    >
      With Tooltip
    </Dropdown.Button>
    <Dropdown.Button menu={menuProps} onClick={handleButtonClick} type="primary">
      Dropdown
    </Dropdown.Button>
    <Dropdown.Button menu={menuProps} onClick={handleButtonClick} danger>
      Danger
    </Dropdown.Button>
  </Space>
);

export default App;
`},45086:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Dropdown, message, Space, Tooltip } from '@oceanbase/design';
import type { MenuProps } from '@oceanbase/design';
import { DownOutlined, EllipsisOutlined, UserOutlined } from '@oceanbase/icons';

const handleMenuClick: MenuProps['onClick'] = e => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const items: MenuProps['items'] = [
  {
    label: '1st menu item',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: '2nd menu item',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: '3rd menu item',
    key: '3',
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: '4rd menu item',
    key: '4',
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const App: React.FC = () => (
  <Space wrap>
    <Dropdown menu={menuProps}>
      <Button icon={<EllipsisOutlined />}></Button>
    </Dropdown>
    <Dropdown menu={menuProps}>
      <Button>
        <Space>
          Button
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
    <Dropdown menu={menuProps}>
      <Button type="primary">
        <Space>
          Button
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  </Space>
);

export default App;
`},66062:function(t,n){"use strict";n.Z=`import React from 'react';
import type { MenuProps } from '@oceanbase/design';
import { Dropdown, Space, Typography } from '@oceanbase/design';
import { DownOutlined } from '@oceanbase/icons';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Item 1',
  },
  {
    key: '2',
    label: 'Item 2',
  },
  {
    key: '3',
    label: 'Item 3',
  },
];

const App: React.FC = () => (
  <Dropdown
    menu={{
      items,
      selectable: true,
      defaultSelectedKeys: ['3'],
    }}
  >
    <Typography.Link>
      <Space>
        Selectable
        <DownOutlined />
      </Space>
    </Typography.Link>
  </Dropdown>
);

export default App;
`},43401:function(t,n){"use strict";n.Z=`import React from 'react';
import { Empty } from '@oceanbase/design';

export default () => {
  return <Empty />;
};
`},60553:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Button, Empty, Form, Space, Switch } from '@oceanbase/design';

export default () => {
  const [title, setTitle] = useState(true);
  const [description, setDescription] = useState(true);
  const [children, setChildren] = useState(true);

  return (
    <>
      <Form
        layout="inline"
        style={{
          marginBottom: 48,
        }}
      >
        <Form.Item label="title" required={true}>
          <Switch
            size="small"
            value={title}
            onChange={value => {
              setTitle(value);
            }}
          />
        </Form.Item>
        <Form.Item label="description" required={true}>
          <Switch
            size="small"
            value={description}
            onChange={value => {
              setDescription(value);
            }}
          />
        </Form.Item>
        <Form.Item label="children" required={true}>
          <Switch
            size="small"
            value={children}
            onChange={value => {
              setChildren(value);
            }}
          />
        </Form.Item>
      </Form>
      <Empty
        image={Empty.PRESENTED_IMAGE_COLORED}
        title={title && 'Create Your Cluster'}
        description={description ? 'There is no cluster, welcome to create one!' : ''}
      >
        {children && (
          <Space>
            <Button type="primary">Primary</Button>
            <Button>Second</Button>
          </Space>
        )}
      </Empty>
    </>
  );
};
`},52509:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Empty } from '@oceanbase/design';

export default () => {
  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_COLORED}
      title="Create Your Cluster"
      description="There is no cluster, welcome to create one!"
    >
      <Button type="primary">Create</Button>
    </Empty>
  );
};
`},55041:function(t,n){"use strict";n.Z=`import React from 'react';
import { Cascader, List, Select, Space, Table, Transfer, TreeSelect } from '@oceanbase/design';

const style: React.CSSProperties = { width: 200 };

const App: React.FC = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <h4>Select</h4>
      <Select style={style} />
      <h4>TreeSelect</h4>
      <TreeSelect style={style} treeData={[]} />
      <h4>Cascader</h4>
      <Cascader style={style} options={[]} showSearch />
      <h4>Transfer</h4>
      <Transfer />
      <h4>Table</h4>
      <Table
        style={{ marginTop: 8 }}
        columns={[
          { title: 'Name', dataIndex: 'name', key: 'name' },
          { title: 'Age', dataIndex: 'age', key: 'age' },
        ]}
      />
      <h4>List</h4>
      <List />
    </Space>
  );
};

export default App;
`},91713:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Empty } from '@oceanbase/design';

export default () => {
  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_DATABASE}
      title="Create Your First Resource"
      description="Nothing here yet. Create one to get started."
    >
      <Button type="primary">Create</Button>
    </Empty>
  );
};
`},41053:function(t,n){"use strict";n.Z=`import React from 'react';
import { Empty, Button } from '@oceanbase/design';

export default () => {
  return (
    <Empty
      layout="horizontal"
      image={Empty.PRESENTED_IMAGE_GUIDE}
      title="Welcome to OB Smart Diagnosis"
      description={
        <>
          <div>\u2022 OB Smart Diagnosis is a control panel for database issue diagnosis</div>
          <div>\u2022 Visualize detailed database data graphically</div>
          <div>
            \u2022 Helps customers quickly assess database health and provides recommendations for
            resolving issues
          </div>
        </>
      }
    >
      <Button type="primary">Start Smart Diagnosis</Button>
    </Empty>
  );
};
`},1666:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Empty } from '@oceanbase/design';

export default () => {
  return (
    <Empty
      image="https://mdn.alipayobjects.com/huamei_fhnyvh/afts/img/A*8Q4gRbl_qmMAAAAAAAAAAAAADmfOAQ/original"
      title="Create Your Cluster"
      description="There is no cluster, welcome to create one!"
    >
      <Button type="primary">Create</Button>
    </Empty>
  );
};
`},64261:function(t,n){"use strict";n.Z=`import React from 'react';
import { Empty, Button } from '@oceanbase/design';

export default () => {
  const description = 'This is a long long long long long long description.';
  const steps = [
    {
      title: 'First',
      description,
    },
    {
      title: 'Second',
      description,
    },
    {
      title: 'Third',
      description,
    },
    {
      title: 'Fourth',
      description,
    },
  ];

  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_COLORED}
      title="Create Your Cluster"
      description="There is no cluster, welcome to create one! There is no cluster, welcome to create one! There is no cluster, welcome to create one! There is no cluster, welcome to create one! There is no cluster, welcome to create one! There is no cluster, welcome to create one!"
      steps={steps}
    >
      <Button type="primary">Create Cluster</Button>
    </Empty>
  );
};
`},29074:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Button, Card, Empty, Slider, Space } from '@oceanbase/design';

export default () => {
  const [width, setWidth] = useState(720);

  return (
    <Space direction="vertical" size={24} style={{ width: '100%' }}>
      <div>
        <div style={{ marginBottom: 8 }}>Container width: {width}px</div>
        <Slider min={320} max={800} value={width} onChange={setWidth} />
      </div>
      <Card bodyStyle={{ padding: 24 }}>
        <div style={{ width, margin: '0 auto' }}>
          <Empty
            layout="horizontal"
            image={Empty.PRESENTED_IMAGE_GUIDE}
            title="Welcome to OB Smart Diagnosis"
            description="OB Smart Diagnosis is a control panel for database issue diagnosis. It graphically presents detailed database data and helps clients quickly assess operational status."
          >
            <Button type="primary">Open Intelligent Diagnosis</Button>
          </Empty>
        </div>
      </Card>
    </Space>
  );
};
`},65042:function(t,n){"use strict";n.Z=`import React from 'react';
import { Empty, Button } from '@oceanbase/design';

export default () => {
  const description = 'This is a long long long long long long description.';
  const steps = [
    {
      title: 'First',
      description,
    },
    {
      title: 'Second',
      description,
    },
    {
      title: 'Third',
      description,
    },
    {
      title: 'Fourth',
      description,
    },
  ];

  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_COLORED}
      title="Create Your Cluster"
      description="There is no cluster, welcome to create one!"
      steps={steps}
    >
      <Button type="primary">Create Cluster</Button>
    </Empty>
  );
};
`},84302:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Empty, Tabs } from '@oceanbase/design';

export default () => {
  const renderEmpty = () => {
    return (
      <Empty
        image={Empty.PRESENTED_IMAGE_COLORED}
        title="Create Your Cluster"
        description="There is no cluster, welcome to create one!"
      >
        <Button type="primary">Create</Button>
      </Empty>
    );
  };
  return (
    <Tabs>
      <Tabs.TabPane key="1" tab="Tab 1">
        {renderEmpty()}
      </Tabs.TabPane>
      <Tabs.TabPane key="2" tab="Tab 2">
        {renderEmpty()}
      </Tabs.TabPane>
      <Tabs.TabPane key="3" tab="Tab 3">
        {renderEmpty()}
      </Tabs.TabPane>
    </Tabs>
  );
};
`},35946:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Card, Empty } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';

export default () => {
  return (
    <PageContainer
      ghost={true}
      header={{
        title: 'Page Title',
      }}
    >
      <Card
        bordered={false}
        bodyStyle={{
          height: 'calc(100vh - 96px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Empty
          image={Empty.PRESENTED_IMAGE_COLORED}
          title="Create Your Cluster"
          description="There is no cluster, welcome to create one!"
        >
          <Button type="primary">Create</Button>
        </Empty>
      </Card>
    </PageContainer>
  );
};
`},94934:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Filter, Slider, Space, theme, Typography } from '@oceanbase/design';

const { Text } = Typography;

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [status, setStatus] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [priority, setPriority] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [containerWidth, setContainerWidth] = useState(300);

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <div>
          <Slider
            min={100}
            max={700}
            value={containerWidth}
            onChange={setContainerWidth}
            marks={{
              100: '100px',
              300: '300px',
              500: '500px',
              700: '700px',
            }}
          />
        </div>
        <Text type="secondary">
          In the example below, the &quot;Search&quot; and &quot;Dark mode&quot; filters have the{' '}
          <code>alwaysCollapse</code> prop set. Regardless of container width, they are always
          collapsed into the &quot;Filter&quot; button.
        </Text>
      </div>

      <div
        style={{
          width: containerWidth,
          border: \`1px dashed \${token.colorBorder}\`,
          padding: 16,
          borderRadius: 8,
        }}
      >
        <Filter.ResponsiveGroup
          onApply={() => console.log('Apply clicked')}
          onClearAll={() => {
            setStatus('');
            setType('');
            setPriority([]);
            setSearch('');
          }}
        >
          <Filter.Select
            label="Status"
            value={status}
            onChange={setStatus}
            options={[
              { value: 'running', label: 'Running' },
              { value: 'stopped', label: 'Stopped' },
            ]}
          />
          <Filter.Select
            label="Type"
            value={type}
            onChange={setType}
            options={[
              { value: 'type1', label: 'Type 1' },
              { value: 'type2', label: 'Type 2' },
            ]}
          />
          <Filter.Checkbox
            label="Priority"
            value={priority}
            onChange={setPriority}
            count
            options={[
              { value: 'high', label: 'High' },
              { value: 'medium', label: 'Medium' },
              { value: 'low', label: 'Low' },
            ]}
          />
          {/* Always collapsed filter */}
          <Filter.Input label="Search" value={search} onChange={setSearch} alwaysCollapse />
          {/* Always collapsed filter */}
          <Filter.Switch label="Dark mode" value={darkMode} onChange={setDarkMode} alwaysCollapse />
        </Filter.ResponsiveGroup>
      </div>

      <Text type="secondary">
        Tip: Even when the container is wide enough to show all filters, filters with alwaysCollapse
        set to true remain collapsed in the &quot;Filter&quot; button.
      </Text>
    </Space>
  );
};

export default App;
`},33309:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Filter, Space } from '@oceanbase/design';

const options = [
  {
    value: 'frontend',
    label: 'Frontend',
    children: [
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue' },
      { value: 'angular', label: 'Angular' },
    ],
  },
  {
    value: 'backend',
    label: 'Backend',
    children: [
      { value: 'java', label: 'Java' },
      { value: 'python', label: 'Python' },
      { value: 'go', label: 'Go' },
    ],
  },
  {
    value: 'database',
    label: 'Database',
    children: [
      { value: 'mysql', label: 'MySQL' },
      { value: 'postgresql', label: 'PostgreSQL' },
      { value: 'oceanbase', label: 'OceanBase' },
    ],
  },
];

const flatOptions = [
  {
    value: 'frontend',
    label: 'Frontend',
    children: [
      {
        value: 'react',
        label: 'React',
        children: [
          { value: 'react16', label: 'React 16' },
          { value: 'react17', label: 'React 17' },
          { value: 'react18', label: 'React 18' },
        ],
      },
      {
        value: 'vue',
        label: 'Vue',
        children: [
          { value: 'vue2', label: 'Vue 2' },
          { value: 'vue3', label: 'Vue 3' },
        ],
      },
      {
        value: 'angular',
        label: 'Angular',
        children: [
          { value: 'angular16', label: 'Angular 16' },
          { value: 'angular17', label: 'Angular 17' },
          { value: 'angular18', label: 'Angular 18' },
        ],
      },
    ],
  },
  {
    value: 'backend',
    label: 'Backend',
    children: [
      {
        value: 'java',
        label: 'Java',
        children: [
          { value: 'java8', label: 'Java 8' },
          { value: 'java11', label: 'Java 11' },
          { value: 'java17', label: 'Java 17' },
        ],
      },
      {
        value: 'python',
        label: 'Python',
        children: [
          { value: 'python3', label: 'Python 3' },
          { value: 'python2', label: 'Python 2' },
          { value: 'python3.10', label: 'Python 3.10' },
        ],
      },
      { value: 'go', label: 'Go' },
    ],
  },
];

const App: React.FC = () => {
  const [singleValue, setSingleValue] = useState<string[][]>([]);
  const [multipleValue, setMultipleValue] = useState<string[][]>([]);
  const [flatSingleValue, setFlatSingleValue] = useState<string[]>([]);
  const [flatMultipleValue, setFlatMultipleValue] = useState<string[][]>([]);

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Space wrap>
        <Filter.Cascader
          label="Single cascader"
          value={singleValue}
          onChange={setSingleValue}
          options={options}
        />
        <Filter.Cascader
          label="Multiple cascader"
          multiple
          value={multipleValue}
          onChange={setMultipleValue}
          options={options}
        />
        <Filter.Cascader label="With count" multiple count options={options} />
        <Filter.Cascader
          label="Show total"
          multiple
          count={{ showTotal: true }}
          options={options}
        />
      </Space>

      <Space wrap>
        <Filter.Cascader
          label="Single with search"
          showSearch
          value={singleValue}
          onChange={setSingleValue}
          options={options}
        />
        <Filter.Cascader
          label="Multiple with search"
          showSearch
          multiple
          value={multipleValue}
          onChange={setMultipleValue}
          options={options}
        />
      </Space>

      <Space wrap>
        <Filter.Cascader
          label="Flat single"
          value={flatSingleValue}
          onChange={setFlatSingleValue}
          options={flatOptions}
          flat
        />
        <Filter.Cascader
          label="Flat multiple"
          multiple
          value={flatMultipleValue}
          onChange={value => {
            console.log('value at line 150:', value);
            setFlatMultipleValue(value);
          }}
          options={flatOptions}
          flat
        />
      </Space>
    </Space>
  );
};

export default App;
`},31782:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Filter, Space, theme } from '@oceanbase/design';

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [values, setValues] = useState<string[]>([]);
  const [statusValues, setStatusValues] = useState<string[]>([]);

  // Status options (with color property, enables status mode automatically)
  const statusOptions = [
    {
      label: 'success',
      value: 'success',
      color: token.colorSuccess,
    },
    {
      label: 'failure',
      value: 'failure',
      color: token.colorError,
    },
    {
      label: 'processing',
      value: 'processing',
      color: token.colorPrimary,
    },
    {
      label: 'warning',
      value: 'warning',
      color: token.colorWarning,
    },
  ];

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Space wrap>
        <Filter.Checkbox
          label="Tags"
          value={values}
          onChange={setValues}
          options={[
            { value: 'tag1', label: 'Tag 1' },
            { value: 'tag2', label: 'Tag 2' },
            { value: 'tag3', label: 'Tag 3' },
            { value: 'tag4', label: 'Tag 4' },
          ]}
        />
        <Filter.Checkbox
          label="With count"
          count
          options={[
            { value: 'item1', label: 'Option 1' },
            { value: 'item2', label: 'Option 2' },
            { value: 'item3', label: 'Option 3' },
          ]}
        />
        <Filter.Checkbox
          label="Show total"
          count={{ showTotal: true }}
          options={[
            { value: 'a', label: 'A' },
            { value: 'b', label: 'B' },
            { value: 'c', label: 'C' },
            { value: 'd', label: 'D' },
          ]}
        />
      </Space>

      <Space wrap>
        <Filter.Checkbox
          label="Status mode"
          value={statusValues}
          onChange={setStatusValues}
          options={statusOptions}
        />
        <Filter.Checkbox
          label="Status mode with count"
          value={statusValues}
          onChange={setStatusValues}
          count
          options={statusOptions}
        />
        <Filter.Checkbox
          label="Status mode show total"
          value={statusValues}
          onChange={setStatusValues}
          count={{ showTotal: true }}
          options={statusOptions}
        />
      </Space>

      <Space wrap>
        <Filter.Checkbox
          label="Show search"
          showSearch
          options={[
            { value: 'tag1', label: 'Tag 1' },
            { value: 'tag2', label: 'Tag 2' },
            { value: 'tag3', label: 'Tag 3' },
            { value: 'tag4', label: 'Tag 4' },
            { value: 'tag5', label: 'Tag 5' },
            { value: 'tag6', label: 'Tag 6' },
            { value: 'tag7', label: 'Tag 7' },
            { value: 'tag8', label: 'Tag 8' },
          ]}
        />
        <Filter.Checkbox
          label="Status search"
          showSearch
          value={statusValues}
          onChange={setStatusValues}
          count
          options={statusOptions}
        />
      </Space>
    </Space>
  );
};

export default App;
`},52819:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Button, Filter, Form, Input, Slider, Space, Typography, theme } from '@oceanbase/design';
import { SearchOutlined } from '@oceanbase/icons';

const { Text } = Typography;

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [containerWidth, setContainerWidth] = useState(300);
  const [form] = Form.useForm();

  const categoryOptions = [
    {
      value: 'frontend',
      label: 'Frontend',
      children: [
        { value: 'react', label: 'React' },
        { value: 'vue', label: 'Vue' },
        { value: 'angular', label: 'Angular' },
      ],
    },
    {
      value: 'backend',
      label: 'Backend',
      children: [
        { value: 'java', label: 'Java' },
        { value: 'python', label: 'Python' },
        { value: 'go', label: 'Go' },
      ],
    },
  ];

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Text>Adjust container width to see responsive collapse:</Text>
        <Slider
          min={100}
          max={700}
          value={containerWidth}
          onChange={setContainerWidth}
          marks={{
            100: '100px',
            300: '300px',
            500: '500px',
            700: '700px',
          }}
        />
      </div>

      <div
        style={{
          width: containerWidth,
          border: \`1px dashed \${token.colorBorder}\`,
          padding: 16,
          borderRadius: 8,
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 8,
        }}
      >
        <Form layout="inline" form={form} style={{ gap: 8, width: '100%', flexWrap: 'nowrap' }}>
          <Filter.ResponsiveGroup
            onApply={() => console.log(form.getFieldsValue())}
            gap={8}
            onClearAll={() => {
              form.resetFields();
            }}
          >
            <Form.Item name="input" noStyle>
              <Input style={{ width: 100 }} />
            </Form.Item>
            <Form.Item name="status" noStyle>
              <Filter.Checkbox
                label="Status"
                options={[
                  { value: 'running', label: 'Running' },
                  { value: 'stopped', label: 'Stopped' },
                  { value: 'pending', label: 'Pending' },
                ]}
              />
            </Form.Item>
            <Form.Item name="type" noStyle>
              <Filter.Select
                label="Type"
                options={[
                  { value: 'type1', label: 'Type 1' },
                  { value: 'type2', label: 'Type 2' },
                  { value: 'type3', label: 'Type 3' },
                ]}
              />
            </Form.Item>

            <Form.Item name="search" noStyle>
              <Filter.Slot label="Search" formatValue={val => val}>
                <Input prefix={<SearchOutlined />} placeholder="Search..." allowClear />
              </Filter.Slot>
            </Form.Item>

            <Form.Item name="priority" noStyle>
              <Filter.Checkbox
                label="Priority"
                count
                options={[
                  { value: 'high', label: 'High' },
                  { value: 'medium', label: 'Medium' },
                  { value: 'low', label: 'Low' },
                ]}
              />
            </Form.Item>
            <Form.Item name="category" noStyle>
              <Filter.Cascader label="Category" multiple count options={categoryOptions} />
            </Form.Item>
            <Button>Action</Button>
          </Filter.ResponsiveGroup>
        </Form>
      </div>

      <Text type="secondary">
        Complex scenario, typically used for page-level Extra handling multiple use cases
      </Text>
    </Space>
  );
};

export default App;
`},99502:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Filter, Space, Tag } from '@oceanbase/design';

const App: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const options = [
    { value: 'success', label: 'Success' },
    { value: 'warning', label: 'Warning' },
    { value: 'error', label: 'Error' },
  ];

  const colorMap: Record<string, string> = {
    success: 'green',
    warning: 'orange',
    error: 'red',
  };

  return (
    <Space wrap>
      <Filter.Select
        label="Custom render"
        value={value}
        onChange={setValue}
        options={options}
        optionRender={option => (
          <Space>
            <Tag color={colorMap[option.value]}>{option.label}</Tag>
            <span style={{ color: '#8592ad' }}>({option.value})</span>
          </Space>
        )}
      />
    </Space>
  );
};

export default App;
`},88219:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Button, Filter, Space, Tag, Tooltip } from '@oceanbase/design';
import { PlusOutlined, QuestionCircleOutlined } from '@oceanbase/icons';

const App: React.FC = () => {
  const [status, setStatus] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [priority, setPriority] = useState<string[]>([]);

  return (
    <Space wrap>
      {/* Filter with tooltip icon */}
      <Filter.Select
        label="Status"
        value={status}
        onChange={setStatus}
        extra={
          <Tooltip title="Select the task status">
            <QuestionCircleOutlined style={{ color: '#8592ad', cursor: 'help' }} />
          </Tooltip>
        }
        options={[
          { value: 'running', label: 'Running' },
          { value: 'stopped', label: 'Stopped' },
          { value: 'pending', label: 'Pending' },
        ]}
      />

      {/* Filter with tag */}
      <Filter.Select
        label="Type"
        value={type}
        onChange={setType}
        extra={
          <Tag color="blue" style={{ margin: 0 }}>
            Important
          </Tag>
        }
        options={[
          { value: 'type1', label: 'Type 1' },
          { value: 'type2', label: 'Type 2' },
        ]}
      />

      {/* Filter with extra action */}
      <Filter.Checkbox
        label="Extra action"
        value={priority}
        onChange={setPriority}
        extra={
          <Button type="link" icon={<PlusOutlined />} size="small">
            Add
          </Button>
        }
        options={[
          { value: 'high', label: 'High' },
          { value: 'medium', label: 'Medium' },
          { value: 'low', label: 'Low' },
        ]}
      />
    </Space>
  );
};

export default App;
`},40411:function(t,n){"use strict";n.Z=`import React from 'react';
import { Filter, Flex, Form, Space, Typography } from '@oceanbase/design';
import { HeaderTableOutlined } from '@oceanbase/icons';

const { Text } = Typography;

const App: React.FC = () => {
  const [form] = Form.useForm();

  const handleApply = async () => {
    const values = await form.validateFields();
    console.log('Form values:', values);
  };

  const handleClearAll = () => {
    form.resetFields();
  };

  const categoryOptions = [
    {
      value: 'frontend',
      label: 'Frontend',
      children: [
        { value: 'react', label: 'React' },
        { value: 'vue', label: 'Vue' },
      ],
    },
    {
      value: 'backend',
      label: 'Backend',
      children: [
        { value: 'java', label: 'Java' },
        { value: 'python', label: 'Python' },
      ],
    },
  ];

  return (
    <Flex gap={16} vertical>
      <div>
        <Text>
          Wrap filter components with <code>Form.Item</code>. Click Apply to log all form values to
          the console.
        </Text>
      </div>
      <Space direction="vertical" size="large" style={{ width: '240px' }}>
        <Form form={form} layout="inline">
          <Filter.ResponsiveGroup onApply={handleApply} onClearAll={handleClearAll}>
            <Form.Item name="status" noStyle>
              <Filter.Select
                icon={<HeaderTableOutlined />}
                label="Status"
                options={[
                  { value: 'running', label: 'Running' },
                  { value: 'stopped', label: 'Stopped' },
                  { value: 'pending', label: 'Pending' },
                ]}
              />
            </Form.Item>

            <Form.Item name="type" noStyle>
              <Filter.Select
                label="Type"
                options={[
                  { value: 'type1', label: 'Type 1' },
                  { value: 'type2', label: 'Type 2' },
                ]}
              />
            </Form.Item>

            <Form.Item name="priority" noStyle>
              <Filter.Checkbox
                label="Priority"
                count
                options={[
                  { value: 'high', label: 'High' },
                  { value: 'medium', label: 'Medium' },
                  { value: 'low', label: 'Low' },
                ]}
              />
            </Form.Item>

            <Form.Item name="category" noStyle>
              <Filter.Cascader label="Category" multiple count options={categoryOptions} />
            </Form.Item>

            <Form.Item name="date" noStyle>
              <Filter.Range label="Date range" />
            </Form.Item>

            <Form.Item name="darkMode" valuePropName="checked" noStyle>
              <Filter.Switch label="Dark mode" />
            </Form.Item>

            <Form.Item name="search" noStyle>
              <Filter.Input label="Search" />
            </Form.Item>
          </Filter.ResponsiveGroup>
        </Form>

        <Text type="secondary">
          Tip: Open the browser console (F12) and click Apply to see the logged form values.
        </Text>
      </Space>
    </Flex>
  );
};

export default App;
`},28232:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Filter, Space } from '@oceanbase/design';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [inputValue2, setInputValue2] = useState<string>('');

  return (
    <Space wrap>
      <Filter.Input label="Input filter" value={inputValue} onChange={setInputValue} />
      <Filter.Input
        label="With placeholder"
        value={inputValue2}
        onChange={setInputValue2}
        inputProps={{
          placeholder: 'Please enter keyword',
        }}
      />
      <Filter.Input label="Disabled" disabled value="" />
      <Filter.Input
        label="Custom Input props"
        value={inputValue}
        onChange={setInputValue}
        inputProps={{
          placeholder: 'Please enter',
          allowClear: true,
        }}
        switchProps={{
          size: 'small',
        }}
      />
    </Space>
  );
};

export default App;
`},30619:function(t,n){"use strict";n.Z=`import React from 'react';
import { Filter, Space } from '@oceanbase/design';
import dayjs from 'dayjs';

const App: React.FC = () => {
  return (
    <Space wrap>
      <Filter.Range label="Date range filter" />
      <Filter.Range
        label="Custom date range filter"
        options={[
          { label: 'Last 1 Week', value: [dayjs().subtract(1, 'week'), dayjs()] },
          { label: 'Last 1 Month', value: [dayjs().subtract(1, 'month'), dayjs()] },
          { label: 'Last 1 Year', value: [dayjs().subtract(1, 'year'), dayjs()] },
        ]}
      />
    </Space>
  );
};

export default App;
`},6503:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Filter, Slider, Space, Typography, theme } from '@oceanbase/design';

const { Text } = Typography;

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [containerWidth, setContainerWidth] = useState(300);
  const [status, setStatus] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [priority, setPriority] = useState<string[]>([]);
  const [category, setCategory] = useState<string[][]>([]);

  const categoryOptions = [
    {
      value: 'frontend',
      label: 'Frontend',
      children: [
        { value: 'react', label: 'React' },
        { value: 'vue', label: 'Vue' },
        { value: 'angular', label: 'Angular' },
      ],
    },
    {
      value: 'backend',
      label: 'Backend',
      children: [
        { value: 'java', label: 'Java' },
        { value: 'python', label: 'Python' },
        { value: 'go', label: 'Go' },
      ],
    },
  ];

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Text>Adjust container width to see responsive collapse:</Text>
        <Slider
          min={100}
          max={700}
          value={containerWidth}
          onChange={setContainerWidth}
          marks={{
            100: '100px',
            300: '300px',
            500: '500px',
            700: '700px',
          }}
        />
      </div>

      <div
        style={{
          width: containerWidth,
          border: \`1px dashed \${token.colorBorder}\`,
          padding: 16,
          borderRadius: 8,
          overflow: 'hidden',
        }}
      >
        <Filter.ResponsiveGroup
          onApply={() => console.log('Apply clicked')}
          gap={8}
          onClearAll={() => {
            setStatus('');
            setType('');
            setPriority([]);
            setCategory([]);
          }}
        >
          <Filter.Select
            label="Status"
            value={status}
            onChange={setStatus}
            options={[
              { value: 'running', label: 'Running' },
              { value: 'stopped', label: 'Stopped' },
              { value: 'pending', label: 'Pending' },
            ]}
          />
          <Filter.Select
            label="Type"
            value={type}
            onChange={setType}
            options={[
              { value: 'type1', label: 'Type 1' },
              { value: 'type2', label: 'Type 2' },
              { value: 'type3', label: 'Type 3' },
            ]}
          />
          <Filter.Checkbox
            label="Priority"
            value={priority}
            onChange={setPriority}
            count
            options={[
              { value: 'high', label: 'High' },
              { value: 'medium', label: 'Medium' },
              { value: 'low', label: 'Low' },
            ]}
          />
          <Filter.Cascader
            label="Category"
            value={category}
            onChange={setCategory}
            multiple
            count
            options={categoryOptions}
          />
          <Filter.Select
            label="Source"
            options={[
              { value: 'internal', label: 'Internal' },
              { value: 'external', label: 'External' },
            ]}
          />
        </Filter.ResponsiveGroup>
      </div>

      <Text type="secondary">
        When the container is too narrow to show all filters, the remaining filters are
        automatically collapsed into the &quot;Filter&quot; button.
      </Text>
    </Space>
  );
};

export default App;
`},86786:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Filter, Space, Flex, theme, Typography } from '@oceanbase/design';
import { HeaderTableOutlined } from '@oceanbase/icons';

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [selectValue, setSelectValue] = useState<string>('');

  return (
    <Flex vertical gap={16}>
      <div>
        <Space wrap>
          <Filter.Select
            label="Status"
            value={selectValue}
            onChange={setSelectValue}
            options={[
              { value: 'running', label: 'Running' },
              { value: 'stopped', label: 'Stopped' },
              { value: 'pending', label: 'Pending' },
            ]}
          />
          <Filter.Select
            label="Type"
            options={[
              { value: 'type1', label: 'Type 1' },
              { value: 'type2', label: 'Type 2' },
              { value: 'disabled', label: 'Disabled Option', disabled: true },
            ]}
          />
          <Filter.Select
            label="Disabled"
            disabled
            options={[{ value: 'option1', label: 'Option 1' }]}
          />
          <Filter.Select
            label="Loading"
            loading
            options={[{ value: 'option1', label: 'Option 1' }]}
          />
        </Space>
      </div>
      <div>
        <Space wrap>
          <Filter.Select
            label="Bordered"
            bordered
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
            ]}
          />
          <Filter.Select
            label="Borderless"
            bordered={false}
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
            ]}
          />
        </Space>
      </div>
      <div>
        <Space wrap>
          <Filter.Select
            label="With Icon"
            icon={<HeaderTableOutlined />}
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'disabled', label: 'Disabled Option', disabled: true },
            ]}
          />
          <Filter.Select
            label="footer"
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
            ]}
            footer={<Typography.Link>Learn more</Typography.Link>}
          />
          <Filter.Select
            label="Hide suffix icon"
            showSuffixIcon={false}
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
            ]}
          />
        </Space>
      </div>
      <div>
        <Space wrap>
          <Filter.Select
            label="Auto ellipsis"
            options={[
              {
                value: 'type1',
                label: 'This is a very long option used to test auto ellipsis',
              },
              {
                value: 'type2',
                label: 'This is a very long option used to test auto ellipsis',
              },
            ]}
          />
        </Space>
      </div>
      <div>
        <Space wrap>
          <Filter.Select
            label="Show search"
            showSearch
            options={[
              { value: 'running', label: 'Running' },
              { value: 'stopped', label: 'Stopped' },
              { value: 'pending', label: 'Pending' },
              { value: 'completed', label: 'Completed' },
              { value: 'failed', label: 'Failed' },
              { value: 'cancelled', label: 'Cancelled' },
              { value: 'processing', label: 'Processing' },
              { value: 'waiting', label: 'Waiting' },
            ]}
          />
        </Space>
      </div>
    </Flex>
  );
};

export default App;
`},57369:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import {
  Filter,
  Flex,
  Input,
  Rate,
  Slider,
  Space,
  Tag,
  Typography,
  theme,
} from '@oceanbase/design';
import { SearchOutlined, TagOutlined } from '@oceanbase/icons';

const { CheckableTag } = Tag;
const { Text } = Typography;

const allTags = ['Bug', 'Feature', 'Enhancement', 'Documentation'];

const TagPicker: React.FC<{
  value?: string[];
  onChange?: (value: string[]) => void;
}> = ({ value = [], onChange }) => {
  const handleChange = (tag: string, checked: boolean) => {
    const next = checked ? [...value, tag] : value.filter(t => t !== tag);
    onChange?.(next);
  };

  return (
    <Flex wrap="wrap" gap={8}>
      {allTags.map(tag => (
        <CheckableTag
          key={tag}
          checked={value.includes(tag)}
          onChange={checked => handleChange(tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
    </Flex>
  );
};

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [tags, setTags] = useState<string[]>([]);
  const [rating, setRating] = useState<number | undefined>();
  const [keyword, setKeyword] = useState<string>('');
  const [containerWidth, setContainerWidth] = useState(500);

  return (
    <Flex vertical gap={24}>
      {/* dropdownRender mode: custom content in FilterButton + Popover */}
      <Space wrap>
        <Filter.Slot
          label="Tags"
          icon={<TagOutlined />}
          value={tags}
          onChange={setTags}
          formatValue={val => val?.join(', ')}
          dropdownRender={<TagPicker />}
        />
        <Filter.Slot
          label="Rating"
          value={rating}
          onChange={setRating}
          formatValue={val => \`\${val} stars and above\`}
          dropdownRender={<Rate />}
        />
        <Filter.Slot label="Disabled" disabled dropdownRender={<div>Custom content</div>} />
        <Filter.Slot label="Loading" loading dropdownRender={<div>Custom content</div>} />
      </Space>

      {/* children render mode + responsive collapse */}
      <div>
        <Text>
          Render custom content via <code>children</code>. Adjust width to see collapse behavior:
        </Text>
        <Slider
          min={100}
          max={700}
          value={containerWidth}
          onChange={setContainerWidth}
          marks={{ 100: '100px', 300: '300px', 500: '500px', 700: '700px' }}
        />
      </div>
      <div
        style={{
          width: containerWidth,
          border: \`1px dashed \${token.colorBorder}\`,
          padding: 16,
          borderRadius: 8,
          overflow: 'hidden',
        }}
      >
        <Filter.ResponsiveGroup gap={8} showActions={false}>
          <Filter.Slot
            label="Search"
            value={keyword}
            onChange={setKeyword}
            formatValue={val => val}
          >
            <Input
              prefix={<SearchOutlined />}
              placeholder="Search..."
              allowClear
              style={{ width: 160 }}
            />
          </Filter.Slot>
          <Filter.Select
            label="Status"
            options={[
              { value: 'open', label: 'Open' },
              { value: 'closed', label: 'Closed' },
            ]}
          />
          <Filter.Slot
            label="Tags"
            icon={<TagOutlined />}
            value={tags}
            onChange={setTags}
            formatValue={val => val?.join(', ')}
            dropdownRender={<TagPicker />}
          />
          <Filter.Select
            label="Priority"
            options={[
              { value: 'high', label: 'High' },
              { value: 'medium', label: 'Medium' },
              { value: 'low', label: 'Low' },
            ]}
          />
        </Filter.ResponsiveGroup>
      </div>
    </Flex>
  );
};

export default App;
`},86156:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Filter, Space } from '@oceanbase/design';

const App: React.FC = () => {
  const [switchValue, setSwitchValue] = useState<boolean>(false);
  const [switchValue2, setSwitchValue2] = useState<boolean>(true);

  return (
    <Space wrap>
      <Filter.Switch label="Switch filter" value={switchValue} onChange={setSwitchValue} />
      <Filter.Switch label="Enabled" value={switchValue2} onChange={setSwitchValue2} />
      <Filter.Switch label="Disabled" disabled value={false} />
      <Filter.Switch
        label="Custom Switch props"
        value={switchValue}
        onChange={setSwitchValue}
        switchProps={{
          size: 'small',
        }}
      />
    </Space>
  );
};

export default App;
`},9376:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Filter, Space, Typography } from '@oceanbase/design';

const { Text } = Typography;

const App: React.FC = () => {
  const [status, setStatus] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [priority, setPriority] = useState<string[]>([]);

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Text strong>Normal mode (no collapse):</Text>
        <Filter.Wrap>
          <Filter.Select
            label="Status"
            value={status}
            onChange={setStatus}
            options={[
              { value: 'running', label: 'Running' },
              { value: 'stopped', label: 'Stopped' },
            ]}
          />
          <Filter.Select
            label="Type"
            value={type}
            onChange={setType}
            options={[
              { value: 'type1', label: 'Type 1' },
              { value: 'type2', label: 'Type 2' },
            ]}
          />
        </Filter.Wrap>
      </div>

      <div>
        <Text strong>Collapse mode:</Text>
        <Filter.Wrap collapsed label="Filter conditions">
          <Filter.Select
            label="Status"
            value={status}
            onChange={setStatus}
            options={[
              { value: 'running', label: 'Running' },
              { value: 'stopped', label: 'Stopped' },
            ]}
          />
          <Filter.Select
            label="Type"
            value={type}
            onChange={setType}
            options={[
              { value: 'type1', label: 'Type 1' },
              { value: 'type2', label: 'Type 2' },
            ]}
          />
          <Filter.Checkbox
            label="Priority"
            value={priority}
            onChange={setPriority}
            options={[
              { value: 'high', label: 'High' },
              { value: 'medium', label: 'Medium' },
              { value: 'low', label: 'Low' },
            ]}
          />
        </Filter.Wrap>
      </div>

      <div>
        <Text strong>With extra content:</Text>
        <Filter.Wrap
          collapsed
          label="Filter conditions"
          extra={<Text type="secondary">2 filters total</Text>}
        >
          <Filter.Select
            label="Status"
            options={[
              { value: 'running', label: 'Running' },
              { value: 'stopped', label: 'Stopped' },
            ]}
          />
          <Filter.Select
            label="Type"
            options={[
              { value: 'type1', label: 'Type 1' },
              { value: 'type2', label: 'Type 2' },
            ]}
          />
        </Filter.Wrap>
      </div>
    </Space>
  );
};

export default App;
`},56093:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Form, Input, message } from '@oceanbase/design';

const onFinish = (values: any) => {
  message.success('Success');
  console.log(values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log(errorInfo);
};

const App: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 6 }}
    wrapperCol={{ span: 10 }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item label="Address" name="address">
      <Input />
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 6, span: 10 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default App;
`},83323:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Form, Input, Select, Space } from '@oceanbase/design';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const App: React.FC = () => {
  const [form] = Form.useForm();

  const onGenderChange = (value: string) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: 'Hi, man!' });
        break;
      case 'female':
        form.setFieldsValue({ note: 'Hi, lady!' });
        break;
      case 'other':
        form.setFieldsValue({ note: 'Hi there!' });
        break;
      default:
    }
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({ note: 'Hello world!', gender: 'male' });
  };

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item name="note" label="Note" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
        <Select
          allowClear
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          options={[
            { label: 'male', value: 'male' },
            { label: 'female', value: 'female' },
            { label: 'other', value: 'other' },
          ]}
        />
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
          <Button type="link" htmlType="button" onClick={onFill}>
            Fill form
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default App;
`},6776:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Dropdown, Form, Input, Space, message } from '@oceanbase/design';
import { DownOutlined } from '@oceanbase/icons';

const onFinish = (values: any) => {
  message.success('Success');
  console.log(values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log(errorInfo);
};

const App: React.FC = () => (
  <Form
    name="basic"
    layout="vertical"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    style={{ maxWidth: 400 }}
  >
    <Form.Item
      label="Username"
      name="username"
      action={<a>Action</a>}
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Address"
      name="address"
      action={
        <Dropdown
          menu={{
            items: [
              {
                key: '1',
                label: 'Menu 1',
              },
              {
                key: '2',
                label: 'Menu 2',
              },
            ],
          }}
        >
          <Button
            size="small"
            style={{
              // same with label height to avoid overflow
              height: 20,
            }}
          >
            <Space>
              Button
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      }
    >
      <Input />
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default App;
`},34533:function(t,n){"use strict";n.Z=`import { Button, Checkbox, Form, Input, message } from '@oceanbase/design';
import React from 'react';

const onFinish = (values: any) => {
  message.success('Success');
  console.log(values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log(errorInfo);
};

const App: React.FC = () => {
  return (
    <Form name="basic" layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item
        label="Username"
        description="This is username description."
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        description="This is password description."
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password autoComplete="new-password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
`},10538:function(t,n){"use strict";n.Z=`import { Button, Checkbox, Form, Input, message } from '@oceanbase/design';
import React from 'react';

const onFinish = (values: any) => {
  message.success('Success');
  console.log(values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log(errorInfo);
};

const App: React.FC = () => {
  return (
    <Form name="basic" layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item
        label="Username"
        extra="This is username extra."
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        extra="This is password extra."
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password autoComplete="new-password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
`},68404:function(t,n){"use strict";n.Z=`import { Button, Checkbox, Form, Input, message } from '@oceanbase/design';
import React from 'react';

const onFinish = (values: any) => {
  message.success('Success');
  console.log(values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log(errorInfo);
};

const App: React.FC = () => {
  const formItemLayout1 = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 10,
    },
  };
  const formItemLayout2 = {
    wrapperCol: {
      offset: 6,
      span: 10,
    },
  };
  return (
    <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed} {...formItemLayout1}>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
        tooltip={{
          title: 'This is username',
        }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        tooltip={{
          title: 'This is password',
        }}
      >
        <Input.Password autoComplete="new-password" />
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked" {...formItemLayout2}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item {...formItemLayout2}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
`},59489:function(t,n){"use strict";n.Z=`import { Button, ConfigProvider, Form, Input, message } from '@oceanbase/design';
import React from 'react';

const onFinish = (values: any) => {
  message.success('Success');
  console.log(values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log(errorInfo);
};

const App: React.FC = () => (
  <ConfigProvider
    form={{
      requiredMark: true,
    }}
  >
    <Form
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 10 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      hideRequiredMark={true}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Address" name="address">
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 6, span: 10 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </ConfigProvider>
);

export default App;
`},53226:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Button, Form, Input, Radio } from '@oceanbase/design';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  return (
    <Form
      layout={formLayout}
      form={form}
      initialValues={{ layout: formLayout }}
      onValuesChange={onFormLayoutChange}
      style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
    >
      <Form.Item label="Form Layout" name="layout" required={true}>
        <Radio.Group value={formLayout}>
          <Radio.Button value="horizontal">Horizontal</Radio.Button>
          <Radio.Button value="vertical">Vertical</Radio.Button>
          <Radio.Button value="inline">Inline</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Field A" required={true}>
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Field B" required={true}>
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default App;
`},10378:function(t,n){"use strict";n.Z=`import React from 'react';
import { Form, Input } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Form
      name="layout-multiple-horizontal"
      layout="horizontal"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
    >
      <Form.Item label="horizontal" name="horizontal" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        layout="vertical"
        label="vertical"
        name="vertical"
        rules={[{ required: true }]}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <Input />
      </Form.Item>
    </Form>
    <br />
    <Form
      name="layout-multiple-vertical"
      layout="vertical"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
    >
      <Form.Item label="vertical" name="vertical" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        layout="horizontal"
        label="horizontal"
        name="horizontal"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
    </Form>
  </>
);

export default App;
`},96263:function(t,n){"use strict";n.Z=`import React from 'react';
import { ConfigProvider } from '@oceanbase/design';
import { ProForm, ProFormText } from '@oceanbase/ui';

const App: React.FC = () => (
  <ConfigProvider>
    <ProForm name="basic" labelCol={{ span: 6 }} wrapperCol={{ span: 10 }}>
      <ProFormText
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Name is required',
          },
        ]}
      />
      <ProFormText label="Address" name="address" />
    </ProForm>
  </ConfigProvider>
);

export default App;
`},91900:function(t,n){"use strict";n.Z=`import { Button, ConfigProvider, Form, Input, message } from '@oceanbase/design';
import React from 'react';

const onFinish = (values: any) => {
  message.success('Success');
  console.log(values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log(errorInfo);
};

const App: React.FC = () => (
  <ConfigProvider
    form={{
      // global config
      requiredMark: true,
    }}
  >
    <Form
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 10 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      // local config
      // requiredMark={true}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Address" name="address">
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 6, span: 10 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </ConfigProvider>
);

export default App;
`},70595:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Form, Input, Radio, Space, Typography } from '@oceanbase/design';
import type { FormValidateMode } from '@oceanbase/design';

const modes: FormValidateMode[] = ['onSubmit', 'onBlur', 'onChange', 'onTouched', 'all'];

const modeDescriptions: Record<FormValidateMode, string> = {
  onSubmit: 'Submit before showing errors; live update after failed submit (default).',
  onBlur: 'Validate on blur.',
  onChange: 'Validate on every change (antd legacy default).',
  onTouched: 'Validate on first blur, then on every change.',
  all: 'Validate on blur and change.',
};

export default () => {
  const [mode, setMode] = React.useState<FormValidateMode>('onSubmit');

  return (
    <Space direction="vertical" size="large" style={{ width: '100%', maxWidth: 480 }}>
      <Radio.Group
        value={mode}
        onChange={e => setMode(e.target.value)}
        optionType="button"
        buttonStyle="solid"
        options={modes.map(value => ({ label: value, value }))}
      />
      <Typography.Text type="secondary">{modeDescriptions[mode]}</Typography.Text>
      <Form
        key={mode}
        validateMode={mode}
        layout="vertical"
        onFinish={values => {
          console.log('Submitted:', values);
        }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, min: 5, message: 'At least 5 characters' }]}
        >
          <Input placeholder="Try typing, blurring, and submitting" />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </Space>
  );
};
`},56412:function(t,n){"use strict";n.Z=`import React from 'react';
import { Col, Row } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Row>
      <Col span={24}>col</Col>
    </Row>
    <Row>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
    <Row>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>
  </>
);

export default App;
`},92047:function(t,n){"use strict";n.Z=`import React from 'react';
import { Col, Divider, Row } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Divider orientation="left">sub-element align left</Divider>
    <Row justify="start">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>

    <Divider orientation="left">sub-element align center</Divider>
    <Row justify="center">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>

    <Divider orientation="left">sub-element align right</Divider>
    <Row justify="end">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>

    <Divider orientation="left">sub-element monospaced arrangement</Divider>
    <Row justify="space-between">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>

    <Divider orientation="left">sub-element align full</Divider>
    <Row justify="space-around">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>

    <Divider orientation="left">sub-element align evenly</Divider>
    <Row justify="space-evenly">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>
  </>
);

export default App;
`},5332:function(t,n){"use strict";n.Z=`import React from 'react';
import { Col, Divider, Row } from '@oceanbase/design';

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

const App: React.FC = () => (
  <>
    <Divider orientation="left">Horizontal</Divider>
    <Row gutter={16}>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
    <Divider orientation="left">Responsive</Divider>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
    <Divider orientation="left">Vertical</Divider>
    <Row gutter={[16, 24]}>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
  </>
);

export default App;
`},21559:function(t,n){"use strict";n.Z=`import React from 'react';
import { Col, Row } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8} offset={8}>
        col-8
      </Col>
    </Row>
    <Row>
      <Col span={6} offset={6}>
        col-6 col-offset-6
      </Col>
      <Col span={6} offset={6}>
        col-6 col-offset-6
      </Col>
    </Row>
    <Row>
      <Col span={12} offset={6}>
        col-12 col-offset-6
      </Col>
    </Row>
  </>
);

export default App;
`},27680:function(t,n){"use strict";n.Z=`import React from 'react';
import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from '@oceanbase/icons';
import { Space } from '@oceanbase/design';

const App: React.FC = () => (
  <Space>
    <HomeOutlined />
    <SettingFilled />
    <SmileOutlined />
    <SyncOutlined spin />
    <SmileOutlined rotate={180} />
    <LoadingOutlined />
  </Space>
);

export default App;
`},3334:function(t,n){"use strict";n.Z=`import React from 'react';
import {
  DatabaseRadiusOutlined,
  HourglassHalfOutlined,
  OceanbaseFilled,
  DouyinFilled,
  OceanbaseColored,
  ObClusterColored,
} from '@oceanbase/icons';
import { Divider, Space } from '@oceanbase/design';

const App: React.FC = () => (
  <Space>
    <DatabaseRadiusOutlined />
    <HourglassHalfOutlined spin />
    <OceanbaseFilled />
    <DouyinFilled style={{ color: 'hotpink' }} />
    <OceanbaseColored />
    <ObClusterColored style={{ fontSize: 24 }} />
  </Space>
);

export default App;
`},49086:function(t,n){"use strict";n.Z=`import React from 'react';
import { Cascader, InputNumber, Select, Space } from '@oceanbase/design';
import { SettingOutlined } from '@oceanbase/icons';

const { Option } = Select;

const selectBefore = (
  <Select defaultValue="add">
    <Option value="add">+</Option>
    <Option value="minus">-</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue="USD">
    <Option value="USD">$</Option>
    <Option value="EUR">\u20AC</Option>
    <Option value="GBP">\xA3</Option>
    <Option value="CNY">\xA5</Option>
  </Select>
);

const App: React.FC = () => (
  <Space direction="vertical">
    <InputNumber addonBefore="+" addonAfter="$" defaultValue={100} />
    <InputNumber addonBefore={selectBefore} addonAfter={selectAfter} defaultValue={100} />
    <InputNumber addonAfter={<SettingOutlined />} defaultValue={100} />
    <InputNumber
      addonBefore={
        <Cascader placeholder="cascader" style={{ width: 100 }} dropdownMatchSelectWidth={false} />
      }
      defaultValue={100}
    />
  </Space>
);

export default App;
`},60116:function(t,n){"use strict";n.Z=`import React from 'react';
import { InputNumber } from '@oceanbase/design';

const onChange = (value: number) => {
  console.log('changed', value);
};

const App: React.FC = () => <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />;

export default App;
`},9241:function(t,n){"use strict";n.Z=`import React from 'react';
import { InputNumber, Space } from '@oceanbase/design';

const onChange = (value: number | string) => {
  console.log('changed', value);
};

const App: React.FC = () => (
  <Space>
    <InputNumber
      defaultValue={1000}
      formatter={value => \`$ \${value}\`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')}
      parser={value => value!.replace(/\\$\\s?|(,*)/g, '')}
      onChange={onChange}
    />
    <InputNumber
      defaultValue={100}
      min={0}
      max={100}
      formatter={value => \`\${value}%\`}
      parser={value => value!.replace('%', '')}
      onChange={onChange}
    />
  </Space>
);

export default App;
`},89573:function(t,n){"use strict";n.Z=`import React from 'react';
import { InputNumber, Space } from '@oceanbase/design';
import { ClockCircleOutlined } from '@oceanbase/icons';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <InputNumber status="error" style={{ width: '100%' }} />
    <InputNumber status="warning" style={{ width: '100%' }} />
    <InputNumber status="error" style={{ width: '100%' }} prefix={<ClockCircleOutlined />} />
    <InputNumber status="warning" style={{ width: '100%' }} prefix={<ClockCircleOutlined />} />
  </Space>
);

export default App;
`},19328:function(t,n){"use strict";n.Z=`import React from 'react';
import { Input, Space } from '@oceanbase/design';

const { TextArea } = Input;

const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  console.log(e);
};

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Input defaultValue="Input with clear icon" allowClear onChange={onChange} />
    <TextArea defaultValue="TextArea with clear icon" allowClear onChange={onChange} />
  </Space>
);

export default App;
`},83119:function(t,n){"use strict";n.Z=`import React from 'react';
import { Input, Space } from '@oceanbase/design';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Input />
    <Input.Search />
    <Input.Password />
    <Input.TextArea />
  </Space>
);

export default App;
`},80141:function(t,n){"use strict";n.Z=`import React from 'react';
import { Divider, Input, Space } from '@oceanbase/design';

const App: React.FC = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <div>Input.Password</div>
      <Input.Password />
      <div>Input.Password autoComplete=&quot;new-password&quot;</div>
      <Input.Password autoComplete="new-password" />
      <div>Input.Password autoComplete=&quot;current-password&quot;</div>
      <Input.Password autoComplete="current-password" />
    </Space>
  );
};

export default App;
`},45955:function(t,n){"use strict";n.Z=`import React from 'react';
import { Input, Space, Tooltip } from '@oceanbase/design';
import { InfoCircleOutlined, UserOutlined, LockOutlined } from '@oceanbase/icons';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Input
      placeholder="Enter your username"
      prefix={<UserOutlined />}
      suffix={
        <Tooltip title="Extra information">
          <InfoCircleOutlined />
        </Tooltip>
      }
    />
    <Input prefix="\uFFE5" suffix="RMB" />
    <Input prefix="\uFFE5" suffix="RMB" disabled />
    <Input.Password suffix={<LockOutlined />} placeholder="input password support suffix" />
  </Space>
);

export default App;
`},7921:function(t,n){"use strict";n.Z=`import React from 'react';
import { AudioOutlined } from '@oceanbase/icons';
import { Input, Space, theme } from '@oceanbase/design';
import type { SearchProps } from '@oceanbase/design/es/input';

const { Search } = Input;

const App: React.FC = () => {
  const { token } = theme.useToken();
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: token.colorInfo,
      }}
    />
  );
  const onSearch: SearchProps['onSearch'] = value => {
    console.log(value);
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Search allowClear onSearch={onSearch} />
      <Search allowClear addonBefore="https://" onSearch={onSearch} />
      <Search allowClear enterButton onSearch={onSearch} />
      <Search allowClear enterButton="Search" onSearch={onSearch} />
      <Search suffix={suffix} enterButton="Search" onSearch={onSearch} />
    </Space>
  );
};

export default App;
`},92443:function(t,n){"use strict";n.Z=`import React from 'react';
import { Input, Space } from '@oceanbase/design';

const { TextArea } = Input;

const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  console.log('Change:', e.target.value);
};

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Input showCount maxLength={20} onChange={onChange} />
    <TextArea showCount maxLength={100} onChange={onChange} />
  </Space>
);

export default App;
`},80861:function(t,n){"use strict";n.Z=`import React from 'react';
import { Avatar, List } from '@oceanbase/design';

const dataSource = [];
for (let i = 1; i < 100; i++) {
  dataSource.push({
    title: 'This is title',
    content: \`This is long long long long long long long long text\`,
  });
}

const App: React.FC = () => (
  <List
    itemLayout="horizontal"
    dataSource={dataSource}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={\`https://xsgames.co/randomusers/avatar.php?g=pixel&key=\${index}\`} />}
          title={<a href="https://design.oceanbase.com">{item.title}</a>}
          description={item.content}
        />
      </List.Item>
    )}
    pagination={{
      pageSize: 5,
    }}
  />
);

export default App;
`},99524:function(t,n){"use strict";n.Z=`import React from 'react';
import { List } from '@oceanbase/design';

const dataSource = [];
for (let i = 1; i <= 5; i++) {
  dataSource.push({
    content: \`This is long long long long long long long long text\`,
  });
}

const App: React.FC = () => (
  <List
    bordered={true}
    header={<div>Header</div>}
    footer={<div>Footer</div>}
    dataSource={dataSource}
    renderItem={item => <List.Item>{item.content}</List.Item>}
  />
);

export default App;
`},18672:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@oceanbase/icons';
import type { MenuProps } from '@oceanbase/design';
import { Menu } from '@oceanbase/design';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          { label: 'Option 1', key: 'setting:1' },
          { label: 'Option 2', key: 'setting:2' },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          { label: 'Option 3', key: 'setting:3' },
          { label: 'Option 4', key: 'setting:4' },
        ],
      },
    ],
  },
  {
    key: 'alipay',
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
  },
];

const App: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default App;
`},59947:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@oceanbase/icons';
import type { MenuProps } from '@oceanbase/design';
import { Button, Menu } from '@oceanbase/design';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: '1', icon: <PieChartOutlined />, label: 'Option 1' },
  { key: '2', icon: <DesktopOutlined />, label: 'Option 2' },
  { key: '3', icon: <ContainerOutlined />, label: 'Option 3' },
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: <MailOutlined />,
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      { key: '7', label: 'Option 7' },
      { key: '8', label: 'Option 8' },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '11', label: 'Option 11' },
          { key: '12', label: 'Option 12' },
        ],
      },
    ],
  },
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ width: 256 }}>
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default App;
`},21186:function(t,n){"use strict";n.Z=`import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@oceanbase/icons';
import type { MenuProps } from '@oceanbase/design';
import { Menu } from '@oceanbase/design';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: <MailOutlined />,
    children: [
      {
        key: 'g1',
        label: 'Item 1',
        type: 'group',
        children: [
          { key: '1', label: 'Option 1' },
          { key: '2', label: 'Option 2' },
        ],
      },
      {
        key: 'g2',
        label: 'Item 2',
        type: 'group',
        children: [
          { key: '3', label: 'Option 3' },
          { key: '4', label: 'Option 4' },
        ],
      },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '7', label: 'Option 7' },
          { key: '8', label: 'Option 8' },
        ],
      },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'sub4',
    label: 'Navigation Three',
    icon: <SettingOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      { key: '11', label: 'Option 11' },
      { key: '12', label: 'Option 12' },
    ],
  },
  {
    key: 'grp',
    label: 'Group',
    type: 'group',
    children: [
      { key: '13', label: 'Option 13' },
      { key: '14', label: 'Option 14' },
    ],
  },
];

const App: React.FC = () => {
  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};

export default App;
`},737:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@oceanbase/icons';
import type { MenuProps, MenuTheme } from '@oceanbase/design';
import { Menu, Switch } from '@oceanbase/design';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: <MailOutlined />,
    children: [
      { key: '1', label: 'Option 1' },
      { key: '2', label: 'Option 2' },
      { key: '3', label: 'Option 3' },
      { key: '4', label: 'Option 4' },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '7', label: 'Option 7' },
          { key: '8', label: 'Option 8' },
        ],
      },
    ],
  },
  {
    key: 'sub4',
    label: 'Navigation Three',
    icon: <SettingOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      { key: '11', label: 'Option 11' },
      { key: '12', label: 'Option 12' },
    ],
  },
];

const App: React.FC = () => {
  const [theme, setTheme] = useState<MenuTheme>('dark');
  const [current, setCurrent] = useState('1');

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <>
      <Switch
        checked={theme === 'dark'}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <br />
      <br />
      <Menu
        theme={theme}
        onClick={onClick}
        style={{ width: 256 }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </>
  );
};

export default App;
`},42794:function(t,n){"use strict";n.Z=`import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@oceanbase/icons';
import type { MenuProps } from '@oceanbase/design';
import { Menu } from '@oceanbase/design';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'sub1',
    icon: <MailOutlined />,
    label: 'Navigation One',
    children: [
      {
        key: '1-1',
        label: 'Item 1',
        type: 'group',
        children: [
          { key: '1', label: 'Option 1' },
          { key: '2', label: 'Option 2' },
        ],
      },
      {
        key: '1-2',
        label: 'Item 2',
        type: 'group',
        children: [
          { key: '3', label: 'Option 3' },
          { key: '4', label: 'Option 4' },
        ],
      },
    ],
  },
  {
    key: 'sub2',
    icon: <AppstoreOutlined />,
    label: 'Navigation Two',
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '7', label: 'Option 7' },
          { key: '8', label: 'Option 8' },
        ],
      },
    ],
  },
  {
    key: 'sub4',
    label: 'Navigation Three',
    icon: <SettingOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      { key: '11', label: 'Option 11' },
      { key: '12', label: 'Option 12' },
    ],
  },
];

const onClick: MenuProps['onClick'] = e => {
  console.log('click', e);
};

const App: React.FC = () => (
  <Menu onClick={onClick} style={{ width: 256 }} mode="vertical" items={items} />
);

export default App;
`},48910:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Space, message } from '@oceanbase/design';

export default () => {
  return (
    <Space wrap>
      <Button onClick={() => message.info('This is a info message')}>Info</Button>
      <Button onClick={() => message.success('This is a success message')}>Success</Button>
      <Button onClick={() => message.error('This is an error message')}>Error</Button>
      <Button onClick={() => message.warning('This is a warning message')}>Warning</Button>
      <Button onClick={() => message.loading('This is a loading message')}>Loading</Button>
    </Space>
  );
};
`},30390:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Button, Modal } from '@oceanbase/design';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={open}
        onOk={() => {
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
`},24572:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Button, Modal, message } from '@oceanbase/design';
import { BookOutlined } from '@oceanbase/icons';

export default () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setOpen1(true);
        }}
        style={{ marginRight: 8 }}
      >
        Document with URL
      </Button>
      <Button
        type="primary"
        onClick={() => {
          setOpen2(true);
        }}
        style={{ marginRight: 8 }}
      >
        Document with Function
      </Button>
      <Button
        type="primary"
        onClick={() => {
          setOpen3(true);
        }}
      >
        Document with Custom Icon
      </Button>
      <Modal
        title="Modal Title"
        document="https://www.oceanbase.com"
        open={open1}
        onOk={() => {
          setOpen1(false);
        }}
        onCancel={() => {
          setOpen1(false);
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <Modal
        title="Modal Title"
        document={() => {
          message.info('Click document');
        }}
        open={open2}
        onOk={() => {
          setOpen2(false);
        }}
        onCancel={() => {
          setOpen2(false);
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <Modal
        title="Modal Title"
        document={
          <BookOutlined
            onClick={() => {
              message.info('Click document');
            }}
          />
        }
        open={open3}
        onOk={() => {
          setOpen3(false);
        }}
        onCancel={() => {
          setOpen3(false);
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
`},21603:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Button, Modal } from '@oceanbase/design';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={open}
        extra={<a>extra</a>}
        onOk={() => {
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
`},20194:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Button, Form, Input, Modal } from '@oceanbase/design';

export default () => {
  const [form] = Form.useForm();
  const { validateFields } = form;

  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    validateFields().then(values => {
      const { name, age } = values;
      alert(\`name: \${name}; age: \${age}\`);
    });
  };

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Modal
      </Button>
      <Modal
        open={open}
        title="Title"
        onOk={() => {
          handleSubmit();
        }}
        onCancel={() => {
          setOpen(false);
        }}
      >
        <Form layout="vertical" form={form} preserve={false}>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: 'Name is required',
              },
            ]}
          >
            <Input placeholder="name" />
          </Form.Item>
          <Form.Item
            name="age"
            label="Age"
            rules={[
              {
                required: true,
                message: 'Age is required',
              },
            ]}
          >
            <Input placeholder="age" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
`},28060:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Button, Modal } from '@oceanbase/design';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={open}
        onOk={() => {
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        footer={false}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
`},7143:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Button, Modal } from '@oceanbase/design';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Modal
      </Button>
      <Modal
        open={open}
        onOk={() => {
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
`},61678:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Alert, Button, Modal, Space } from '@oceanbase/design';
import { useTimeout } from 'ahooks';

export default () => {
  const [successOpen, setSuccessOpen] = useState(false);
  const [failOpen, setFailOpen] = useState(false);
  const [done, setDone] = useState(false);

  useTimeout(
    () => {
      setDone(true);
    },
    (successOpen && !done) || (failOpen && !done) ? 3000 : undefined
  );

  return (
    <>
      <Space direction="vertical" size="middle">
        <Button
          type="primary"
          onClick={() => {
            setSuccessOpen(true);
          }}
        >
          Open Progress Modal from loading to success
        </Button>
        <Button
          onClick={() => {
            setFailOpen(true);
          }}
        >
          Open Progress Modal from loading to fail
        </Button>
      </Space>
      <Modal.Progress
        title={done ? '\u{1F389} Success to create cluster!' : 'Cluster is creating...'}
        open={successOpen}
        loading={done ? false : true}
        progress={
          done
            ? {
                percent: 100,
              }
            : {}
        }
        description={
          done
            ? 'Congratulations! please enjoy your OceanBase journey.'
            : 'Cluster is creating, please waiting for 3 seconds.'
        }
        onOk={() => {
          setSuccessOpen(false);
          setDone(false);
        }}
        onCancel={() => {
          setSuccessOpen(false);
          setDone(false);
        }}
      />
      <Modal.Progress
        title={done ? '\u{1F62D} Fail to create cluster!' : 'Cluster is creating...'}
        open={failOpen}
        loading={done ? false : true}
        progress={
          done
            ? {
                percent: 100,
                status: 'exception',
              }
            : {}
        }
        description={
          done ? (
            <Alert
              type="error"
              showIcon={true}
              message="Please fix errors or try agin later"
              description="This is error message. This is error message. This is error message. This is error message."
            />
          ) : (
            'Cluster is creating, please waiting for 3 seconds.'
          )
        }
        onOk={() => {
          setFailOpen(false);
          setDone(false);
        }}
        onCancel={() => {
          setFailOpen(false);
          setDone(false);
        }}
      />
    </>
  );
};
`},84147:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Alert, Button, Modal, Space } from '@oceanbase/design';
import { useInterval } from 'ahooks';

export default () => {
  const [successOpen, setSuccessOpen] = useState(false);
  const [failOpen, setFailOpen] = useState(false);
  const [percent, setPercent] = useState(0);

  const success = percent === 100;
  const fail = percent === 60;

  useInterval(
    () => {
      setPercent(percent + 20);
    },
    (successOpen && !success) || (failOpen && !fail) ? 1000 : undefined
  );

  return (
    <>
      <Space direction="vertical" size="middle">
        <Button
          type="primary"
          onClick={() => {
            setSuccessOpen(true);
          }}
        >
          Open Progress Modal from percent to success
        </Button>
        <Button
          onClick={() => {
            setFailOpen(true);
          }}
        >
          Open Progress Modal from percent to fail
        </Button>
      </Space>
      <Modal.Progress
        title={success ? '\u{1F389} Success to create cluster!' : 'Cluster is creating...'}
        open={successOpen}
        progress={{
          percent,
        }}
        description={
          success
            ? 'Congratulations! please enjoy your OceanBase journey.'
            : 'Cluster is creating, please waiting for a few seconds.'
        }
        onOk={() => {
          setSuccessOpen(false);
          setPercent(0);
        }}
        onCancel={() => {
          setSuccessOpen(false);
          setPercent(0);
        }}
      />
      <Modal.Progress
        title={fail ? '\u{1F62D} Fail to create cluster!' : 'Cluster is creating...'}
        open={failOpen}
        progress={{
          percent,
          status: fail ? 'exception' : 'normal',
        }}
        description={
          fail ? (
            <Alert
              type="error"
              showIcon={true}
              message="Please fix errors or try agin later"
              description="This is error message. This is error message. This is error message. This is error message."
            />
          ) : (
            'Cluster is creating, please waiting for a few seconds.'
          )
        }
        onOk={() => {
          setFailOpen(false);
          setPercent(0);
        }}
        onCancel={() => {
          setFailOpen(false);
          setPercent(0);
        }}
      />
    </>
  );
};
`},63940:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Button, Modal, theme } from '@oceanbase/design';

export default () => {
  const [open, setOpen] = useState(false);
  const { token } = theme.useToken();

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open over height Modal
      </Button>
      <Modal
        title="Over height Modal"
        open={open}
        onOk={() => {
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        bodyStyle={{
          maxHeight: 400,
          overflow: 'auto',
        }}
      >
        <div
          style={{
            height: 800,
            background: token.colorFillQuaternary,
            borderRadius: token.borderRadiusMD,
            padding: 12,
          }}
        >
          scroll-y is enabled by default when over height.
        </div>
      </Modal>
    </>
  );
};
`},8865:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Modal, Space } from '@oceanbase/design';

export default () => (
  <Space>
    <Button
      onClick={() => {
        Modal.confirm({
          title: 'This is a confirm modal',
          content: (
            <div>
              <p>some messages...some messages...</p>
              <p>some messages...some messages...</p>
            </div>
          ),
          onOk() {},
        });
      }}
    >
      Confirm
    </Button>
    <Button
      onClick={() => {
        Modal.info({
          title: 'This is a info message',
          content: (
            <div>
              <p>some messages...some messages...</p>
              <p>some messages...some messages...</p>
            </div>
          ),
          onOk() {},
        });
      }}
    >
      Info
    </Button>
    <Button
      onClick={() => {
        Modal.success({
          title: 'This is a success message',
          content: (
            <div>
              <p>some messages...some messages...</p>
              <p>some messages...some messages...</p>
            </div>
          ),
        });
      }}
    >
      Success
    </Button>
    <Button
      onClick={() => {
        Modal.error({
          title: 'This is an error message',
          content: 'some messages...some messages...',
        });
      }}
    >
      Error
    </Button>
    <Button
      onClick={() => {
        Modal.warning({
          title: 'This is a warning message',
          content: 'some messages...some messages...',
        });
      }}
    >
      Warning
    </Button>
  </Space>
);
`},35760:function(t,n){"use strict";n.Z=`import React from 'react';
import { ExportOutlined } from '@oceanbase/icons';
import { Button, Space, Typography, notification } from '@oceanbase/design';

export default () => {
  return (
    <Space wrap>
      <Button
        onClick={() => {
          notification.info({
            message: (
              <>
                Export is ready.{' '}
                <a
                  href="#"
                  onClick={event => {
                    event.preventDefault();
                  }}
                >
                  Download
                </a>
                {', '}
                <a href="https://design.oceanbase.com" target="_blank" rel="noreferrer">
                  View details
                </a>
              </>
            ),
          });
        }}
      >
        Links in title
      </Button>
      <Button
        onClick={() => {
          notification.error({
            message: 'Backup failed',
            description: (
              <>
                The backup job stopped because the target bucket is unavailable. Check the bucket
                policy or{' '}
                <Typography.Link
                  onClick={event => {
                    event.preventDefault();
                  }}
                >
                  open troubleshooting guide
                </Typography.Link>
                .
              </>
            ),
          });
        }}
      >
        Links in description
      </Button>
      <Button
        onClick={() => {
          notification.success({
            message: 'Report exported',
            description: (
              <>
                Your file is ready.{' '}
                <Typography.Link href="https://design.oceanbase.com">
                  Open file <ExportOutlined />
                </Typography.Link>
              </>
            ),
          });
        }}
      >
        Typography.Link
      </Button>
    </Space>
  );
};
`},66580:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Space, notification } from '@oceanbase/design';

export default () => {
  return (
    <Space wrap>
      <Button
        onClick={() => {
          notification.success({
            message: 'Instance created successfully',
          });
        }}
      >
        Title only (5s)
      </Button>
      <Button
        onClick={() => {
          notification.success({
            message: 'Instance created successfully',
            description:
              'The instance is starting. You can continue working while it becomes available.',
          });
        }}
      >
        Title + description (10s)
      </Button>
      <Button
        onClick={() => {
          notification.error({
            message: 'Unable to save changes',
            description:
              'Error notifications do not auto close. Hover to pause the countdown on auto-closing types.',
          });
        }}
      >
        Error (no auto close)
      </Button>
    </Space>
  );
};
`},69717:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Space, notification } from '@oceanbase/design';

export default () => {
  return (
    <Space wrap>
      <Button
        onClick={() => {
          notification.info({
            message: 'Background sync completed',
            description:
              '3 records were updated while you were on another page. Refresh the list to see the latest data.',
          });
        }}
      >
        Info
      </Button>
      <Button
        onClick={() => {
          notification.success({
            message: 'Instance created successfully',
          });
        }}
      >
        Success
      </Button>
      <Button
        onClick={() => {
          notification.warning({
            message: 'Quota is almost full',
            description:
              'You have used 90% of the storage quota. Clean up unused backups or upgrade your plan.',
          });
        }}
      >
        Warning
      </Button>
      <Button
        onClick={() => {
          notification.error({
            message: 'Unable to save changes',
            description:
              'The request failed due to a network timeout. Your draft is still saved locally.',
          });
        }}
      >
        Error
      </Button>
      <Button
        onClick={() => {
          notification.loading({
            message: 'Exporting report',
            description: 'Estimated time remaining: about 2 minutes.',
          });
        }}
      >
        Loading
      </Button>
    </Space>
  );
};
`},5757:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Space, notification } from '@oceanbase/design';

const DEDUPE_KEY = 'network-unstable';

export default () => {
  return (
    <Space wrap>
      <Button
        onClick={() => {
          Array.from({ length: 3 }).forEach((_, index) => {
            notification.warning({
              message: 'Network unstable',
              description: \`Poll attempt \${index + 1}: only the first warning with the same dedupeKey is shown.\`,
              dedupeKey: DEDUPE_KEY,
            });
          });
        }}
      >
        Dedupe by dedupeKey
      </Button>
      <Button
        onClick={() => {
          notification.warning({
            message: 'Network unstable',
            description: 'Shown independently because the type is different.',
            dedupeKey: DEDUPE_KEY,
          });
          notification.error({
            message: 'Request failed',
            description: 'Same dedupeKey on another type is not suppressed.',
            dedupeKey: DEDUPE_KEY,
          });
        }}
      >
        Dedupe per type
      </Button>
    </Space>
  );
};
`},78080:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Space, Typography, notification } from '@oceanbase/design';

const errorDetails = [
  {
    label: 'Request ID',
    value: '3CB0AC64-BD04-4863-82AA-A5BFC356391D',
  },
  {
    label: 'Error Code',
    value: 'ROLE_NOT_AUTHORIZE',
  },
  {
    label: 'Time',
    value: '2026-05-09 10:15:38',
  },
];

export default () => {
  return (
    <Space wrap>
      <Button
        onClick={() => {
          notification.error({
            message: 'Unable to save changes',
            description: (
              <>
                Do not worry, your draft is saved. The request failed due to a permission error.
                Contact your administrator or{' '}
                <Typography.Link
                  onClick={event => {
                    event.preventDefault();
                  }}
                >
                  retry
                </Typography.Link>
                .
              </>
            ),
            errorDetails,
          });
        }}
      >
        Error with details
      </Button>
      <Button
        onClick={() => {
          notification.warning({
            message: 'Partial sync failed',
            description:
              'Some resources were skipped because they are no longer accessible. Review the details below.',
            errorDetails: [
              {
                label: 'Skipped resources',
                value: 'cluster-a, cluster-b',
              },
              {
                label: 'Reason',
                value: 'Insufficient read permission',
              },
            ],
          });
        }}
      >
        Warning with details
      </Button>
    </Space>
  );
};
`},5429:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, notification } from '@oceanbase/design';

export default () => {
  const [api, contextHolder] = notification.useNotification();

  return (
    <>
      {contextHolder}
      <Button
        onClick={() => {
          api.success({
            message: 'Task submitted',
            description: 'Use notification.useNotification() when you need ConfigProvider context.',
          });
        }}
      >
        Open with hooks
      </Button>
    </>
  );
};
`},7251:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Space, notification } from '@oceanbase/design';

const longParagraph =
  'This is a very long description used to verify the max height behavior. ' +
  'When the content grows beyond the limit, the content area should scroll internally ' +
  'while the close button and the auto-close progress bar stay fixed at the card edge. ';

const longDescription = (
  <>
    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
      <p key={i} style={{ margin: 0 }}>
        {longParagraph}
      </p>
    ))}
  </>
);

const manyErrorDetails = Array.from({ length: 12 }, (_, i) => ({
  label: \`Detail item \${i + 1}\`,
  value: \`value-\${i + 1}-with-a-very-long-value-to-fill-up-the-available-height\`,
}));

export default () => {
  return (
    <Space wrap>
      <Button
        onClick={() => {
          notification.info({
            message: 'Long description',
            description: longDescription,
          });
        }}
      >
        Long description
      </Button>
      <Button
        onClick={() => {
          notification.error({
            message: 'Long error details',
            description: 'Expand the details below to verify internal scrolling.',
            errorDetails: manyErrorDetails,
          });
        }}
      >
        Long error details
      </Button>
    </Space>
  );
};
`},1181:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Space, notification } from '@oceanbase/design';

export default () => {
  return (
    <Space wrap>
      <Button
        onClick={() => {
          notification.info({
            message: 'Bottom left (default)',
            description: 'OBUI 2.0 recommends bottom-left placement with a 24px offset.',
          });
        }}
      >
        Bottom left
      </Button>
      <Button
        onClick={() => {
          notification.info({
            message: 'Top right',
            description: 'Pass placement: "topRight" for top-right placement.',
            placement: 'topRight',
          });
        }}
      >
        Top right
      </Button>
    </Space>
  );
};
`},45744:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, notification } from '@oceanbase/design';

export default () => {
  return (
    <Button
      onClick={() => {
        ['Backup started', 'Index rebuilt', 'Cache refreshed', 'Audit log exported'].forEach(
          (title, index) => {
            notification.info({
              key: \`stack-\${index}\`,
              message: title,
              description: 'Hover the stack to expand. Up to 3 notifications are visible at once.',
            });
          }
        );
      }}
    >
      Show stacked notifications
    </Button>
  );
};
`},85907:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, notification } from '@oceanbase/design';

const UPDATE_KEY = 'report-export';

export default () => {
  return (
    <Button
      onClick={() => {
        notification.loading({
          key: UPDATE_KEY,
          message: 'Exporting report',
          description: 'Progress: 20%',
        });

        setTimeout(() => {
          notification.loading({
            key: UPDATE_KEY,
            message: 'Exporting report',
            description: 'Progress: 60%',
          });
        }, 1000);

        setTimeout(() => {
          notification.success({
            key: UPDATE_KEY,
            message: 'Report exported',
            description: 'The file is ready to download.',
          });
        }, 2000);
      }}
    >
      Update by key
    </Button>
  );
};
`},89301:function(t,n){"use strict";n.Z=`import React from 'react';
import { Pagination } from '@oceanbase/design';

const App: React.FC = () => <Pagination defaultCurrent={1} total={50} />;

export default App;
`},78128:function(t,n){"use strict";n.Z=`import React from 'react';
import type { PaginationProps } from '@oceanbase/design';
import { Pagination } from '@oceanbase/design';

const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
  console.log(current, pageSize);
};

const App: React.FC = () => (
  <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} />
);

export default App;
`},34785:function(t,n){"use strict";n.Z=`import React from 'react';
import type { PaginationProps } from '@oceanbase/design';
import { Pagination } from '@oceanbase/design';

const showTotal: PaginationProps['showTotal'] = total => \`Total \${total} items\`;

const App: React.FC = () => (
  <>
    <Pagination size="small" total={50} />
    <br />
    <Pagination size="small" total={50} showTotal={showTotal} />
  </>
);

export default App;
`},83171:function(t,n){"use strict";n.Z=`import React from 'react';
import { Pagination } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Pagination
      total={85}
      showTotal={total => \`Total \${total} items\`}
      defaultPageSize={20}
      defaultCurrent={1}
    />
    <br />
    <Pagination
      total={85}
      showTotal={(total, range) => \`\${range[0]}-\${range[1]} of \${total} items\`}
      defaultPageSize={20}
      defaultCurrent={1}
    />
  </>
);

export default App;
`},39720:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, message, Popconfirm } from '@oceanbase/design';

const App: React.FC = () => (
  <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    onConfirm={e => {
      console.log(e);
      message.success('Click on Yes');
    }}
    onCancel={e => {
      console.log(e);
      message.info('Click on No');
    }}
  >
    <Button danger>Delete</Button>
  </Popconfirm>
);

export default App;
`},83592:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, message, Popconfirm } from '@oceanbase/design';

const App: React.FC = () => (
  <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    onConfirm={() => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(null);
          message.success('The task is deleted');
        }, 3000);
      });
    }}
  >
    <Button danger>Delete</Button>
  </Popconfirm>
);

export default App;
`},60893:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Popover } from '@oceanbase/design';

const App: React.FC = () => (
  <Popover
    content={
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    }
    title="Title"
  >
    <Button type="primary">Hover me</Button>
  </Popover>
);

export default App;
`},25159:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Button, Popover, Space, Switch } from '@oceanbase/design';

const App: React.FC = () => {
  const [limit, setLimit] = useState(false);
  return (
    <Space size={16} direction="vertical">
      <Space>
        max-width and max-height:
        <Switch
          value={limit}
          size="small"
          onChange={value => {
            setLimit(value);
          }}
        />
      </Space>
      <Popover
        title="Title"
        content="This is long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long  long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long  long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long  long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long content."
        overlayInnerStyle={limit ? { maxWidth: 300, maxHeight: 250, overflow: 'auto' } : {}}
      >
        <Button type="primary">Hover me</Button>
      </Popover>
    </Space>
  );
};

export default App;
`},12331:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Popover, Space } from 'antd';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const App: React.FC = () => (
  <Space wrap>
    <Popover content={content} title="Title" trigger="hover">
      <Button>hover</Button>
    </Popover>
    <Popover content={content} title="Title" trigger="focus">
      <Button>focus</Button>
    </Popover>
    <Popover content={content} title="Title" trigger="click">
      <Button>click</Button>
    </Popover>
    <Popover content={content} title="Title" trigger="contextMenu">
      <Button>contextMenu</Button>
    </Popover>
  </Space>
);

export default App;
`},67151:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Popover, Table } from '@oceanbase/design';
import { ColumnProps } from '@oceanbase/design/es/table';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const App: React.FC = () => {
  const dataSource = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 40,
      address: 'London Park',
    },
    {
      key: '3',
      name: 'Jim Green',
      age: 50,
      address: 'London Park',
    },
    {
      key: '4',
      name: 'Jim Green',
      age: 60,
      address: 'London Park',
    },
    {
      key: '5',
      name: 'Jim Green',
      age: 70,
      address: 'London Park',
    },
  ];

  const columns: ColumnProps<DataType>[] = [
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
      sorter: true,
    },
    { title: 'Column 1', dataIndex: 'address', key: '1' },
    { title: 'Column 2', dataIndex: 'address', key: '2' },
    { title: 'Column 3', dataIndex: 'address', key: '3' },
    { title: 'Column 4', dataIndex: 'address', key: '4' },
    { title: 'Column 5', dataIndex: 'address', key: '5' },
    { title: 'Column 6', dataIndex: 'address', key: '6' },
    { title: 'Column 7', dataIndex: 'address', key: '7' },
    { title: 'Column 8', dataIndex: 'address', key: '8' },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      render: () => <a>action</a>,
    },
  ];
  return (
    <Popover
      content={
        <Table
          size="middle"
          columns={columns}
          dataSource={dataSource}
          scroll={{ x: 'max-content' }}
          pagination={{
            size: 'small',
            pageSize: 5,
            showSizeChanger: false,
          }}
        />
      }
      overlayInnerStyle={{ maxWidth: 600 }}
    >
      <Button type="primary">Hover me</Button>
    </Popover>
  );
};

export default App;
`},4815:function(t,n){"use strict";n.Z=`import React from 'react';
import { Flex, Progress } from '@oceanbase/design';

const App: React.FC = () => (
  <Flex align="center" gap="small">
    <Progress
      type="circle"
      trailColor="#e6f4ff"
      percent={60}
      strokeWidth={20}
      size={14}
      format={number => \`In progress, \${number}% complete\`}
    />
    <span>Code release</span>
  </Flex>
);

export default App;
`},958:function(t,n){"use strict";n.Z=`import React from 'react';
import { Flex, Progress, theme } from '@oceanbase/design';

const App: React.FC = () => {
  const { token } = theme.useToken();
  return (
    <Flex wrap gap="middle" style={{ marginTop: 16 }}>
      <Progress
        type="dashboard"
        steps={8}
        percent={50}
        trailColor={token.colorFillSecondary}
        strokeWidth={20}
      />
      <Progress
        type="circle"
        percent={100}
        trailColor={token.colorFillSecondary}
        steps={{ count: 5, gap: 7 }}
        strokeWidth={20}
      />
    </Flex>
  );
};

export default App;
`},5026:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Flex, Radio, Space, Progress } from '@oceanbase/design';
import type { ProgressSize } from '@oceanbase/design/es/progress';

const App: React.FC = () => {
  const [size, setSize] = useState<ProgressSize>('default');
  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        Size:
        <Radio.Group
          value={size}
          onChange={e => {
            setSize(e.target.value);
          }}
        >
          <Radio value="default">default</Radio>
          <Radio value="small">small</Radio>
        </Radio.Group>
      </Space>
      <Flex gap="small">
        <Progress size={size} type="circle" percent={75} />
        <Progress size={size} type="circle" percent={70} status="exception" />
        <Progress size={size} type="circle" percent={100} />
      </Flex>
    </>
  );
};

export default App;
`},71817:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Flex, Radio, Progress, Space } from '@oceanbase/design';
import type { ProgressSize } from '@oceanbase/design/es/progress';

const App: React.FC = () => {
  const [size, setSize] = useState<ProgressSize>('default');
  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        Size:
        <Radio.Group
          value={size}
          onChange={e => {
            setSize(e.target.value);
          }}
        >
          <Radio value="default">default</Radio>
          <Radio value="small">small</Radio>
        </Radio.Group>
      </Space>
      <Flex gap="small" vertical>
        <Progress size={size} percent={30} />
        <Progress size={size} percent={50} status="active" />
        <Progress size={size} percent={70} status="exception" />
        <Progress size={size} percent={100} />
      </Flex>
    </>
  );
};

export default App;
`},6657:function(t,n){"use strict";n.Z=`import React from 'react';
import { Flex, Progress, theme } from '@oceanbase/design';

const App: React.FC = () => {
  const { token } = theme.useToken();
  return (
    <Flex gap="small" vertical>
      <Progress percent={30} steps={3} />
      <Progress percent={50} steps={5} />
      <Progress percent={100} steps={5} size="small" strokeColor={token.colorSuccess} />
      <Progress
        percent={60}
        steps={5}
        strokeColor={[token.colorSuccess, token.colorSuccess, token.colorError]}
      />
    </Flex>
  );
};

export default App;
`},53606:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Radio, Space } from '@oceanbase/design';
import type { RadioChangeEvent } from '@oceanbase/design';

const App: React.FC = () => {
  const [value, setValue] = useState('long');

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Radio value="long">
          This is long long long long long long long long long long long long long long long long
          long long long long long long long long text
        </Radio>
        <Radio value="short">This is short text</Radio>
      </Space>
    </Radio.Group>
  );
};

export default App;
`},75335:function(t,n){"use strict";n.Z=`import React from 'react';
import { PlusOutlined, DeleteOutlined, EditOutlined, DownloadOutlined } from '@oceanbase/icons';
import { Radio, Space, Divider } from '@oceanbase/design';
import type { RadioChangeEvent } from '@oceanbase/design';

const App: React.FC = () => {
  const onChange = (e: RadioChangeEvent) => {
    console.log(\`radio checked:\${e.target.value}\`);
  };

  return (
    <Space direction="vertical" size="middle">
      <Radio.Group onChange={onChange} defaultValue="a">
        <Radio.Button value="a" icon={<PlusOutlined />}>
          Add
        </Radio.Button>
        <Radio.Button value="b" icon={<EditOutlined />}>
          Edit
        </Radio.Button>
        <Radio.Button value="c" icon={<DeleteOutlined />}>
          Delete
        </Radio.Button>
        <Radio.Button value="d" icon={<DownloadOutlined />}>
          Download
        </Radio.Button>
      </Radio.Group>
      <Radio.Group onChange={onChange} defaultValue="a">
        <Radio.Button value="a" icon={<PlusOutlined />}>
          Add
        </Radio.Button>
        <Radio.Button value="b" icon={<EditOutlined />} disabled>
          Edit
        </Radio.Button>
        <Radio.Button value="c" icon={<DeleteOutlined />}>
          Delete
        </Radio.Button>
      </Radio.Group>
      <Radio.Group onChange={onChange} defaultValue="a">
        <Radio.Button value="a" icon={<PlusOutlined />} />
        <Radio.Button value="b" icon={<EditOutlined />} />
        <Radio.Button value="c" icon={<DeleteOutlined />} />
        <Radio.Button value="d" icon={<DownloadOutlined />} />
      </Radio.Group>
    </Space>
  );
};

export default App;
`},88017:function(t,n){"use strict";n.Z=`import React from 'react';
import { Radio, Space } from '@oceanbase/design';
import type { RadioChangeEvent } from '@oceanbase/design';

const App: React.FC = () => {
  const onChange = (e: RadioChangeEvent) => {
    console.log(\`radio checked:\${e.target.value}\`);
  };

  return (
    <Space direction="vertical" size="middle">
      <Radio.Group onChange={onChange} defaultValue="a">
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b">Shanghai</Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>
      <Radio.Group onChange={onChange} defaultValue="a">
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b" disabled>
          Shanghai
        </Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>
      <Radio.Group disabled onChange={onChange} defaultValue="a">
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b">Shanghai</Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>
    </Space>
  );
};

export default App;
`},55315:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Radio, Space } from '@oceanbase/design';
import type { RadioChangeEvent } from '@oceanbase/design';

const App: React.FC = () => {
  const [value, setValue] = useState('A');

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Space direction="vertical">
      <Radio.Group onChange={onChange} value={value}>
        <Radio value="A">A</Radio>
        <Radio value="B">B</Radio>
        <Radio value="C">C</Radio>
        <Radio value="D">D</Radio>
      </Radio.Group>
      <Radio.Group onChange={onChange} value={value} disabled={true}>
        <Radio value="A">A</Radio>
        <Radio value="B">B</Radio>
        <Radio value="C">C</Radio>
        <Radio value="D">D</Radio>
      </Radio.Group>
    </Space>
  );
};

export default App;
`},19012:function(t,n){"use strict";n.Z=`import React from 'react';
import { Result, Button } from '@oceanbase/design';

export default () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={<Button type="primary">Back Home</Button>}
    />
  );
};
`},54923:function(t,n){"use strict";n.Z=`import React from 'react';
import { Result, Button } from '@oceanbase/design';

export default () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary">Back Home</Button>}
    />
  );
};
`},33552:function(t,n){"use strict";n.Z=`import React from 'react';
import { Result, Button } from '@oceanbase/design';

export default () => {
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={<Button type="primary">Back Home</Button>}
    />
  );
};
`},6718:function(t,n){"use strict";n.Z=`import React from 'react';
import { Result, Button, Typography, theme } from '@oceanbase/design';

export default () => {
  const { token } = theme.useToken();
  return (
    <Result
      status="error"
      title="Submission Failed"
      subTitle="Please check and modify the following information before resubmitting."
      extra={[
        <Button type="primary" key="console">
          Go Console
        </Button>,
        <Button key="buy">Buy Again</Button>,
      ]}
    >
      <Typography.Title level={5}>
        The content you submitted has the following error:
      </Typography.Title>
      <div
        style={{
          color: token.colorTextTertiary,
        }}
      >
        <div>
          {
            'Error1: Failed to load Stripe-js at HTMLScriptElement. sanonymous> (727.93344492.async.is:1:7397)'
          }
        </div>
        <div>
          {
            'Error2: Failed to load Stripe-js at HTMLScriptElement. sanonymous> (727.93344492.async.is:1:7397)'
          }
        </div>
        <div>
          {
            'Error3: Failed to load Stripe-js at HTMLScriptElement. sanonymous> (727.93344492.async.is:1:7397)'
          }
        </div>
        <div>
          {
            'Error4: Failed to load Stripe-js at HTMLScriptElement. sanonymous> (727.93344492.async.is:1:7397)'
          }
        </div>
      </div>
    </Result>
  );
};
`},8725:function(t,n){"use strict";n.Z=`import React from 'react';
import { Result, Button, theme } from '@oceanbase/design';
import { CheckCircleFilled } from '@oceanbase/icons';

export default () => {
  const { token } = theme.useToken();
  return (
    <Result
      icon={<CheckCircleFilled style={{ color: token.colorSuccess }} />}
      title="Great, we have done all the operations!"
      subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={[
        <Button type="primary" key="console">
          Go Console
        </Button>,
        <Button key="buy">Buy Again</Button>,
      ]}
    />
  );
};
`},60382:function(t,n){"use strict";n.Z=`import React from 'react';
import { Result, Button } from '@oceanbase/design';

export default () => {
  return (
    <Result
      status="normal"
      title="Operation completed"
      subTitle="Everything is running as expected."
      extra={<Button type="primary">Back</Button>}
    />
  );
};
`},21274:function(t,n){"use strict";n.Z=`import React from 'react';
import { Result, Button, Typography, theme } from '@oceanbase/design';

export default () => {
  const { token } = theme.useToken();
  return (
    <Result
      status="success"
      title="Successfully Purchased Cloud Server ECS!"
      subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait. Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait. Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait. Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait. Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait. Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait. Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait. Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait. Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait. Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={[
        <Button type="primary" key="console">
          Go Console
        </Button>,
        <Button key="buy">Buy Again</Button>,
      ]}
    >
      <Typography.Title level={5}>
        The content you submitted has the following error:
      </Typography.Title>
      <div
        style={{
          color: token.colorTextTertiary,
        }}
      >
        <div>
          {
            'Error1: Failed to load Stripe-js at HTMLScriptElement. sanonymous> (727.93344492.async.is:1:7397)'
          }
        </div>
        <div>
          {
            'Error2: Failed to load Stripe-js at HTMLScriptElement. sanonymous> (727.93344492.async.is:1:7397)'
          }
        </div>
        <div>
          {
            'Error3: Failed to load Stripe-js at HTMLScriptElement. sanonymous> (727.93344492.async.is:1:7397)'
          }
        </div>
        <div>
          {
            'Error4: Failed to load Stripe-js at HTMLScriptElement. sanonymous> (727.93344492.async.is:1:7397)'
          }
        </div>
      </div>
    </Result>
  );
};
`},32848:function(t,n){"use strict";n.Z=`import React from 'react';
import { Result, Space } from '@oceanbase/design';

const items = [
  {
    icon: <Result.PRESENTED_IMAGE_NOT_FOUND />,
    title: 'Resource not found',
    subTitle: 'The requested resource does not exist or has been removed.',
  },
  {
    icon: <Result.PRESENTED_IMAGE_NETWORK_ERROR />,
    title: 'Network error',
    subTitle: 'Please check your network connection and try again.',
  },
  {
    icon: <Result.PRESENTED_IMAGE_VERSION_UPDATE />,
    title: 'Version update',
    subTitle: 'A new version is available. Refresh to continue.',
  },
] as const;

export default () => (
  <Space direction="vertical" size={48} style={{ width: '100%' }}>
    {items.map(item => (
      <Result key={item.title} icon={item.icon} title={item.title} subTitle={item.subTitle} />
    ))}
  </Space>
);
`},24893:function(t,n){"use strict";n.Z=`import React from 'react';
import { Result, Button } from '@oceanbase/design';

export default () => {
  return (
    <Result
      status="processing"
      title="Your operation is being processed"
      subTitle="Please wait patiently while we complete your request."
      extra={[
        <Button type="primary" key="console">
          Go Console
        </Button>,
        <Button key="buy">Buy Again</Button>,
      ]}
    />
  );
};
`},21235:function(t,n){"use strict";n.Z=`import React from 'react';
import { Result, Button } from '@oceanbase/design';

export default () => {
  return (
    <Result
      status="success"
      title="Successfully Purchased Cloud Server ECS!"
      subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={[
        <Button type="primary" key="console">
          Go Console
        </Button>,
        <Button key="buy">Buy Again</Button>,
      ]}
    />
  );
};
`},26263:function(t,n){"use strict";n.Z=`import React from 'react';
import { Result, Button } from '@oceanbase/design';

export default () => {
  return (
    <Result
      status="warning"
      title="There are some problems with your operation."
      subTitle="It is recommended to restart to restore the object state."
      extra={[
        <Button type="primary" key="console">
          Go Console
        </Button>,
        <Button key="buy">Buy Again</Button>,
      ]}
    />
  );
};
`},88662:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Card, Result } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';

export default () => {
  return (
    <PageContainer
      ghost={true}
      header={{
        title: 'Page Title',
      }}
    >
      <Card
        bordered={false}
        bodyStyle={{
          height: 'calc(100vh - 96px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Result
          status="success"
          title="Successfully Purchased Cloud Server ECS!"
          subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
          extra={[
            <Button type="primary" key="console">
              Go Console
            </Button>,
            <Button key="buy">Buy Again</Button>,
          ]}
        />
      </Card>
    </PageContainer>
  );
};
`},22348:function(t,n){"use strict";n.Z=`import React from 'react';
import { Segmented } from '@oceanbase/design';

export default () => {
  return (
    <Segmented
      block
      options={[
        123,
        {
          value: 456,
          label: 456,
          // badge content
          badge: 11,
        },
        {
          value: 789,
          label: 789,
          // same as \`badge: 25\`
          badge: {
            count: 25,
          },
        },
        {
          value: 999,
          label: 999,
          // custom badge
          badge: {
            count: 0,
            showZero: true,
          },
        },
        // mock very long text
        {
          value: 'longtext1',
          label:
            'longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext',
          ellipsis: {
            tooltip: true,
          },
          badge: {
            count: 199,
          },
        },
        {
          value: 'longtext2',
          label:
            'longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext',
          ellipsis: {
            tooltip: {
              title: 'custom tooltip title',
              placement: 'topLeft',
            },
          },
        },
      ]}
    />
  );
};
`},33050:function(t,n){"use strict";n.Z=`import React from 'react';
import { Segmented } from '@oceanbase/design';

export default () => {
  return <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />;
};
`},41303:function(t,n){"use strict";n.Z=`import React from 'react';
import { Segmented } from '@oceanbase/design';

export default () => {
  return <Segmented block options={[123, 456, 789]} />;
};
`},32174:function(t,n){"use strict";n.Z=`import React from 'react';
import { Segmented, Space } from '@oceanbase/design';

export default () => {
  return (
    <Space direction="vertical">
      <Segmented options={['Daily', 'Weekly', 'Monthly']} disabled />
      <Segmented
        options={[
          'Daily',
          { label: 'Weekly', value: 'Weekly', disabled: true },
          'Monthly',
          { label: 'Quarterly', value: 'Quarterly', disabled: true },
          'Yearly',
        ]}
      />
    </Space>
  );
};
`},72694:function(t,n){"use strict";n.Z=`import React from 'react';
import { Segmented } from '@oceanbase/design';
import { BarsOutlined } from '@oceanbase/icons';

export default () => {
  return (
    <Segmented
      block
      options={[
        123,
        456,
        {
          value: 'longtext1',
          label:
            'longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext',
          icon: <BarsOutlined />,
        },
        {
          value: 'longtext2',
          label:
            'longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext-longtext',
          // custom ellipsis
          ellipsis: {
            tooltip: {
              title: 'custom tooltip title',
              placement: 'topLeft',
            },
          },
        },
      ]}
    />
  );
};
`},14992:function(t,n){"use strict";n.Z=`import React from 'react';
import { Segmented } from '@oceanbase/design';
import { AppstoreOutlined, BarsOutlined } from '@oceanbase/icons';

const Demo: React.FC = () => (
  <Segmented
    options={[
      { label: 'List', value: 'List', icon: <BarsOutlined /> },
      { label: 'Kanban', value: 'Kanban', icon: <AppstoreOutlined /> },
    ]}
  />
);

export default Demo;
`},38689:function(t,n){"use strict";n.Z=`import React from 'react';
import { Segmented, Space } from '@oceanbase/design';

const App: React.FC = () => (
  <Space direction="vertical">
    <Segmented size="large" options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
    <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
    <Segmented size="small" options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
  </Space>
);

export default App;
`},9778:function(t,n){"use strict";n.Z=`import React from 'react';
import { Select, Space } from '@oceanbase/design';

const handleChange = (value: string) => {
  console.log(\`selected \${value}\`);
};

const App: React.FC = () => (
  <Space wrap>
    <Select
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
      ]}
    />
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      disabled
      options={[{ value: 'lucy', label: 'Lucy' }]}
    />
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      loading
      options={[{ value: 'lucy', label: 'Lucy' }]}
    />
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      allowClear
      options={[{ value: 'lucy', label: 'Lucy' }]}
    />
  </Space>
);

export default App;
`},38878:function(t,n){"use strict";n.Z=`import { Select, Tag } from '@oceanbase/design';
import React from 'react';

const options = ['gold', 'green', 'red', 'cyan'];

const tagRender = props => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag color={value} onMouseDown={onPreventMouseDown} closable={closable} onClose={onClose}>
      {label}
    </Tag>
  );
};

const App: React.FC = () => (
  <>
    <Select
      mode="multiple"
      tagRender={tagRender}
      defaultValue={['gold', 'cyan']}
      style={{ width: '100%' }}
      options={options.map(item => ({ label: item, value: item }))}
    />
  </>
);

export default App;
`},2874:function(t,n){"use strict";n.Z=`import React from 'react';
import { Select, Space } from '@oceanbase/design';
import type { SelectProps } from '@oceanbase/design';

const options: SelectProps['options'] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}

const handleChange = (value: string[]) => {
  console.log(\`selected \${value}\`);
};

const App: React.FC = () => (
  <Space style={{ width: '100%' }} direction="vertical">
    <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      defaultValue={['a10', 'c12']}
      onChange={handleChange}
      options={options}
    />
    <Select
      mode="multiple"
      disabled
      style={{ width: '100%' }}
      defaultValue={['a10', 'c12']}
      onChange={handleChange}
      options={options}
    />
  </Space>
);

export default App;
`},99015:function(t,n){"use strict";n.Z=`import React, { useMemo, useRef, useState } from 'react';
import { Select, Spin } from '@oceanbase/design';
import type { SelectProps } from '@oceanbase/design';
import debounce from 'lodash/debounce';

export interface DebounceSelectProps<ValueType = any>
  extends Omit<SelectProps<ValueType | ValueType[]>, 'options' | 'children'> {
  fetchOptions: (search: string) => Promise<ValueType[]>;
  debounceTimeout?: number;
}

function DebounceSelect<
  ValueType extends { key?: string; label: React.ReactNode; value: string | number } = any,
>({ fetchOptions, debounceTimeout = 800, ...props }: DebounceSelectProps<ValueType>) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState<ValueType[]>([]);
  const fetchRef = useRef(0);

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value: string) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);

      fetchOptions(value).then(newOptions => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }

        setOptions(newOptions);
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);

  return (
    <Select
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      options={options}
    />
  );
}

// Usage of DebounceSelect
interface UserValue {
  label: string;
  value: string;
}

async function fetchUserList(username: string): Promise<UserValue[]> {
  console.log('fetching user', username);

  return fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(body =>
      body.results.map(
        (user: { name: { first: string; last: string }; login: { username: string } }) => ({
          label: \`\${user.name.first} \${user.name.last}\`,
          value: user.login.username,
        })
      )
    );
}

const App: React.FC = () => {
  const [value, setValue] = useState<UserValue[]>([]);

  return (
    <DebounceSelect
      mode="multiple"
      value={value}
      placeholder="Select users"
      fetchOptions={fetchUserList}
      onChange={newValue => {
        setValue(newValue as UserValue[]);
      }}
      style={{ width: '100%' }}
    />
  );
};

export default App;
`},86762:function(t,n){"use strict";n.Z=`import { Select } from '@oceanbase/design';
import React from 'react';
import type { SelectProps } from '@oceanbase/design';

const options: SelectProps['options'] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}

const handleChange = (value: string) => {
  console.log(\`selected \${value}\`);
};

const App: React.FC = () => (
  <Select
    mode="tags"
    style={{ width: '100%' }}
    placeholder="Tags Mode"
    onChange={handleChange}
    options={options}
  />
);

export default App;`},71770:function(t,n){"use strict";n.Z=`import React from 'react';
import { Flex, Select } from '@oceanbase/design';

const App: React.FC = () => (
  <Flex gap={12} vertical>
    <Flex gap={8}>
      <Select
        placeholder="Outlined"
        style={{ flex: 1 }}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
        ]}
      />
      <Select
        mode="multiple"
        defaultValue={['lucy']}
        placeholder="Outlined"
        style={{ flex: 1 }}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
        ]}
      />
    </Flex>
    <Flex gap={8}>
      <Select
        placeholder="Filled"
        variant="filled"
        style={{ flex: 1 }}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
        ]}
      />
      <Select
        mode="multiple"
        defaultValue={['lucy']}
        placeholder="Filled"
        variant="filled"
        style={{ flex: 1 }}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
        ]}
      />
    </Flex>
    <Flex gap={8}>
      <Select
        placeholder="Borderless"
        variant="borderless"
        style={{ flex: 1 }}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
        ]}
      />
      <Select
        mode="multiple"
        defaultValue={['lucy']}
        placeholder="Borderless"
        variant="borderless"
        style={{ flex: 1 }}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
        ]}
      />
    </Flex>
  </Flex>
);

export default App;
`},58735:function(t,n){"use strict";n.Z=`import React from 'react';
import { Skeleton } from '@oceanbase/design';

const App: React.FC = () => <Skeleton />;

export default App;
`},72441:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Slider, Switch } from '@oceanbase/design';

const App: React.FC = () => {
  const [disabled, setDisabled] = useState(false);

  const onChange = (checked: boolean) => {
    setDisabled(checked);
  };

  return (
    <>
      <Slider defaultValue={30} disabled={disabled} />
      <br />
      <Slider range defaultValue={[20, 50]} disabled={disabled} />
      <br />
      Disabled: <Switch size="small" checked={disabled} onChange={onChange} />
    </>
  );
};

export default App;
`},66433:function(t,n){"use strict";n.Z=`import React from 'react';
import { Slider } from '@oceanbase/design';
import type { SliderSingleProps } from '@oceanbase/design';

const marks: SliderSingleProps['marks'] = {
  0: '0\xB0C',
  20: '20\xB0C',
  40: '40\xB0C',
  60: '60\xB0C',
  80: '80\xB0C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100\xB0C</strong>,
  },
};

const App: React.FC = () => (
  <>
    <Slider marks={marks} defaultValue={37} />
    <br />
    <Slider range marks={marks} defaultValue={[26, 37]} />
  </>
);

export default App;
`},29402:function(t,n){"use strict";n.Z=`import React from 'react';
import { Slider } from '@oceanbase/design';
import type { SliderSingleProps } from '@oceanbase/design';

const marks: SliderSingleProps['marks'] = {
  0: '0\xB0C',
};

const App: React.FC = () => <Slider min={0} max={0} marks={marks} />;

export default App;
`},11376:function(t,n){"use strict";n.Z=`import React from 'react';
import { Slider, Space } from '@oceanbase/design';
import type { SliderSingleProps } from '@oceanbase/design';

const marks: SliderSingleProps['marks'] = {
  0: '0\xB0C',
  20: '20\xB0C',
  40: '40\xB0C',
  60: '60\xB0C',
  80: '80\xB0C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100\xB0C</strong>,
  },
};

const App: React.FC = () => (
  <Space size={70}>
    <Slider vertical defaultValue={30} style={{ height: 300 }} />
    <Slider vertical range step={10} defaultValue={[20, 50]} style={{ height: 300 }} />
    <Slider vertical range marks={marks} defaultValue={[13, 68]} style={{ height: 300 }} />
  </Space>
);

export default App;
`},26578:function(t,n){"use strict";n.Z=`import { Button, Popconfirm, Space } from '@oceanbase/design';
import React from 'react';
const App: React.FC = () => (
  <Space>
    Space
    <Button type="primary">Button</Button>
    <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
      <Button>Confirm</Button>
    </Popconfirm>
  </Space>
);

export default App;
`},1043:function(t,n){"use strict";n.Z=`import { Space, Card } from '@oceanbase/design';
import React from 'react';
const App: React.FC = () => (
  <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
    <Card title="Card" size="small">
      <div>Card content</div>
      <div>Card content</div>
    </Card>
    <Card title="Card" size="small">
      <div>Card content</div>
      <div>Card content</div>
    </Card>
    <Card title="Card" size="small">
      <div>Card content</div>
      <div>Card content</div>
    </Card>
  </Space>
);

export default App;
`},77821:function(t,n){"use strict";n.Z=`import { Space, Button } from '@oceanbase/design';
import React from 'react';
const App: React.FC = () => (
  <Space size={[8, 16]} wrap>
    {new Array(20).fill(null).map((_, index) => (
      <Button key={index}>Button</Button>
    ))}
  </Space>
);

export default App;
`},21187:function(t,n){"use strict";n.Z=`import React from 'react';
import { Spin } from '@oceanbase/design';

const App: React.FC = () => <Spin />;

export default App;
`},34286:function(t,n){"use strict";n.Z=`import React from 'react';
import { Space, Spin } from '@oceanbase/design';

const App: React.FC = () => (
  <Space size="middle">
    <Spin gray={false} size="small" />
    <Spin gray={false} />
    <Spin gray={false} size="large" />
  </Space>
);

export default App;
`},79325:function(t,n){"use strict";n.Z=`import React from 'react';
import { Alert, Space, Spin } from '@oceanbase/design';
import { LoadingOutlined } from '@oceanbase/icons';

const indicator = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const App: React.FC = () => (
  <Space size="middle" direction="vertical">
    <Spin indicator={indicator} />
    <Spin indicator={indicator} tip="Loading">
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    </Spin>
  </Space>
);

export default App;
`},87458:function(t,n){"use strict";n.Z=`import React from 'react';
import { Spin, theme } from '@oceanbase/design';

const App: React.FC = () => {
  const { token } = theme.useToken();

  return (
    <div
      style={{
        margin: '20px 0',
        marginBottom: 20,
        padding: '30px 50px',
        textAlign: 'center',
        background: token.colorBgLayout,
        borderRadius: 4,
      }}
    >
      <Spin />
    </div>
  );
};

export default App;
`},36244:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Alert, Spin, Switch } from '@oceanbase/design';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const toggle = (checked: boolean) => {
    setLoading(checked);
  };

  return (
    <div>
      <Spin spinning={loading}>
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
      </Spin>
      <div style={{ marginTop: 16 }}>
        Loading state\uFF1A
        <Switch checked={loading} onChange={toggle} />
      </div>
    </div>
  );
};

export default App;
`},23150:function(t,n){"use strict";n.Z=`import React from 'react';
import { Space, Spin } from '@oceanbase/design';

const App: React.FC = () => (
  <Space size="middle">
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </Space>
);

export default App;
`},33024:function(t,n){"use strict";n.Z=`import React from 'react';
import { Alert, Space, Spin, theme } from '@oceanbase/design';

const App: React.FC = () => {
  const { token } = theme.useToken();
  const containerStyle = {
    padding: 50,
    background: token.colorBgLayout,
    borderRadius: 4,
    width: 120,
    height: 120,
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Space>
        <Spin tip="Loading" size="small">
          <div style={containerStyle} />
        </Spin>
        <Spin tip="Loading">
          <div style={containerStyle} />
        </Spin>
        <Spin tip="Loading" size="large">
          <div style={containerStyle} />
        </Spin>
      </Space>

      <Spin tip="Loading...">
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
      </Spin>
    </Space>
  );
};

export default App;
`},43187:function(t,n){"use strict";n.Z=`import React from 'react';
import { Divider, Steps } from '@oceanbase/design';

const description = 'This is a description.';
const App: React.FC = () => (
  <>
    <Steps
      current={1}
      items={[
        {
          title: 'Finished',
          description,
        },
        {
          title: 'In Progress',
          description,
          subTitle: 'Left 00:00:08',
        },
        {
          title: 'Waiting',
          description,
        },
      ]}
    />
    <Divider />
    <Steps
      size="small"
      current={1}
      items={[
        {
          title: 'Finished',
        },
        {
          title: 'In Progress',
        },
        {
          title: 'Waiting',
        },
      ]}
    />
  </>
);

export default App;
`},72110:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Divider, Steps } from '@oceanbase/design';

const App: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };
  const description = 'This is a description.';

  return (
    <>
      <Steps
        current={current}
        onChange={onChange}
        items={[
          {
            title: 'Step 1',
            description,
          },
          {
            title: 'Step 2',
            description,
          },
          {
            title: 'Step 3',
            description,
          },
        ]}
      />
      <Divider />
      <Steps
        current={current}
        onChange={onChange}
        direction="vertical"
        items={[
          {
            title: 'Step 1',
            description,
          },
          {
            title: 'Step 2',
            description,
          },
          {
            title: 'Step 3',
            description,
          },
        ]}
      />
    </>
  );
};

export default App;
`},63822:function(t,n){"use strict";n.Z=`import React from 'react';
import type { StepsProps } from '@oceanbase/design';
import { Avatar, List, Steps } from '@oceanbase/design';

const dataSource = [];
for (let i = 1; i <= 4; i++) {
  dataSource.push({
    title: 'This is title',
    content: \`This is long long long long long long long long text\`,
  });
}

const items = [
  {
    title: 'Step 1',
    description: 'This is a Step 1.',
  },
  {
    title: 'Step 2',
    description: 'This is a Step 2.',
  },
  {
    title: 'Step 3',
    description: 'This is a Step 3.',
  },
];

const App: React.FC = () => (
  <div>
    <List
      itemLayout="horizontal"
      dataSource={dataSource}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar src={\`https://xsgames.co/randomusers/avatar.php?g=pixel&key=\${index}\`} />
            }
            title={<a>{item.title}</a>}
            description={item.content}
          />
          <Steps
            style={{ marginTop: 8 }}
            type="inline"
            current={item.current}
            status={item.status as StepsProps['status']}
            items={items}
          />
        </List.Item>
      )}
    />
  </div>
);

export default App;
`},55080:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Divider, Steps } from '@oceanbase/design';

const App: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };

  return (
    <>
      <Steps
        type="navigation"
        current={current}
        onChange={onChange}
        className="site-navigation-steps"
        items={[
          {
            status: 'finish',
            title: 'Step 1',
          },
          {
            status: 'process',
            title: 'Step 2',
          },
          {
            status: 'wait',
            title: 'Step 3',
          },
          {
            status: 'wait',
            title: 'Step 4',
          },
        ]}
      />
      <Divider />
      <Steps
        size="small"
        type="navigation"
        current={current}
        onChange={onChange}
        className="site-navigation-steps"
        items={[
          {
            status: 'finish',
            title: 'Step 1',
          },
          {
            status: 'process',
            title: 'Step 2',
          },
          {
            status: 'wait',
            title: 'Step 3',
          },
          {
            status: 'wait',
            title: 'Step 4',
          },
        ]}
      />
    </>
  );
};

export default App;
`},67639:function(t,n){"use strict";n.Z=`import React from 'react';
import { Divider, Steps } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Steps
      progressDot
      current={1}
      items={[
        {
          title: 'Finished',
          description: 'This is a description.',
        },
        {
          title: 'In Progress',
          description: 'This is a description.',
        },
        {
          title: 'Waiting',
          description: 'This is a description.',
        },
      ]}
    />
    <Divider />
    <Steps
      progressDot
      current={1}
      direction="vertical"
      items={[
        {
          title: 'Finished',
          description: 'This is a description. This is a description.',
        },
        {
          title: 'Finished',
          description: 'This is a description. This is a description.',
        },
        {
          title: 'In Progress',
          description: 'This is a description. This is a description.',
        },
        {
          title: 'Waiting',
          description: 'This is a description.',
        },
        {
          title: 'Waiting',
          description: 'This is a description.',
        },
      ]}
    />
  </>
);

export default App;
`},79839:function(t,n){"use strict";n.Z=`import React from 'react';
import { Divider, Steps } from '@oceanbase/design';

const description = 'This is a description.';
const App: React.FC = () => (
  <>
    <Steps
      direction="vertical"
      current={1}
      items={[
        {
          title: 'Finished',
          description,
        },
        {
          title: 'In Progress',
          description,
        },
        {
          title: 'Waiting',
          description,
        },
      ]}
    />
    <Divider />
    <Steps
      size="small"
      direction="vertical"
      current={1}
      items={[
        {
          title: 'Finished',
          description,
        },
        {
          title: 'In Progress',
          description,
        },
        {
          title: 'Waiting',
          description,
        },
      ]}
    />
  </>
);

export default App;
`},29071:function(t,n){"use strict";n.Z=`import React from 'react';
import { Switch } from '@oceanbase/design';

const onChange = (checked: boolean) => {
  console.log(\`switch to \${checked}\`);
};

const App: React.FC = () => <Switch defaultChecked onChange={onChange} />;

export default App;
`},87850:function(t,n){"use strict";n.Z=`import React from 'react';
import { Switch } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Switch defaultChecked disabled={true} />
    <br />
    <Switch disabled={true} size="small" />
  </>
);

export default App;
`},62445:function(t,n){"use strict";n.Z=`import React from 'react';
import { Switch } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Switch defaultChecked loading={true} />
    <br />
    <Switch loading={true} size="small" />
  </>
);

export default App;
`},23790:function(t,n){"use strict";n.Z=`import React from 'react';
import { Switch } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Switch />
    <br />
    <Switch size="small" />
  </>
);

export default App;
`},54329:function(t,n){"use strict";n.Z=`import React from 'react';
import { CheckOutlined, CloseOutlined } from '@oceanbase/icons';
import { Space, Switch } from '@oceanbase/design';

const App: React.FC = () => (
  <Space direction="vertical">
    <Switch checkedChildren="On" unCheckedChildren="Off" defaultChecked />
    <Switch checkedChildren="1" unCheckedChildren="0" />
    <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
    />
  </Space>
);

export default App;
`},73134:function(t,n){"use strict";n.Z=`import React from 'react';
import { Table } from '@oceanbase/design';

const App: React.FC = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const dataSource = [];
  for (let i = 1; i < 100; i++) {
    dataSource.push({
      key: i,
      name: 'John Brown' + i,
      age: 32,
      address: \`New York No. \${i} Lake Park\`,
    });
  }

  return <Table columns={columns} dataSource={dataSource} />;
};

export default App;
`},82921:function(t,n){"use strict";n.Z=`import React from 'react';
import { Table } from '@oceanbase/design';
import type { ColumnsType } from '@oceanbase/design/es/table';

interface DataType {
  key: string;
  name: string;
  money: string;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Cash Assets',
    className: 'column-money',
    dataIndex: 'money',
    align: 'right',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    money: '\uFFE5300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '\uFFE51,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '\uFFE5120,000.00',
    address: 'Sydney No. 1 Lake Park',
  },
];

const App: React.FC = () => <Table columns={columns} dataSource={data} bordered />;

export default App;
`},24843:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Space, Table } from '@oceanbase/design';
import { EllipsisOutlined } from '@oceanbase/icons';

const App: React.FC = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (text: string, record: any) => {
        return (
          <Space>
            <Button size="middle">Edit</Button>
            <Button shape="circle">Edit</Button>
            <Button shape="round">Edit</Button>
            <Button icon={<EllipsisOutlined />}></Button>
            <Button shape="circle" icon={<EllipsisOutlined />}></Button>
            <Button shape="round" icon={<EllipsisOutlined />}></Button>
          </Space>
        );
      },
    },
  ];

  const dataSource = [];
  for (let i = 1; i < 100; i++) {
    dataSource.push({
      key: i,
      name: 'John Brown' + i,
      age: 32,
      address: \`New York No. \${i} Lake Park\`,
    });
  }

  return <Table columns={columns} dataSource={dataSource} />;
};

export default App;
`},81230:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Card, Form, Radio, Switch, Table, theme } from '@oceanbase/design';
import type { RadioChangeEvent } from '@oceanbase/design';
import type { ColumnsType } from '@oceanbase/design/es/table';

const App: React.FC = () => {
  const { token } = theme.useToken();

  // card
  const [hasBorder, setHasBorder] = useState(true);
  const [hasTitle, setHasTitle] = useState(true);
  const [hasTabs, setHasTabs] = useState(false);
  const [hasDivider, setHasDivider] = useState(true);
  const [hasPadding, setHasPadding] = useState(false);

  // table
  const [bordered, setBordered] = useState(false);
  const [innerBordered, setInnerBordered] = useState(false);
  const [pagination, setPagination] = useState(true);
  const [expandable, setExpandable] = useState(true);
  const [selectable, setSelectable] = useState(true);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [hasData, setHasData] = useState(true);
  const [yScroll, setYScroll] = useState(false);
  const [xScroll, setXScroll] = useState<string | undefined>(undefined);
  const [rowspan, setRowspan] = useState(false);

  const columns: ColumnsType<Record<string, any>> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  // Use 4 rows when rowspan is enabled, matching demo/rowspan.tsx for pairwise merge
  const rowCount = hasData ? (rowspan ? 4 : 5) : 0;
  const dataSource: Record<string, any>[] = [];
  for (let i = 1; i <= rowCount; i++) {
    dataSource.push({
      key: i,
      name: 'John Brown' + i,
      age: 32,
      address: \`New York No. \${i} Lake Park\`,
    });
  }

  // Scroll config aligned with dynamic-settings demo
  const scroll: { x?: number | string; y?: number | string } = {};
  if (yScroll) {
    scroll.y = 240;
  }
  if (xScroll) {
    scroll.x = '1000px';
  }

  const tableColumns = columns.map(item => ({ ...item }));
  if (xScroll === 'fixed') {
    tableColumns[0].fixed = 'left';
    tableColumns[tableColumns.length - 1].fixed = 'right';
  }
  // Rowspan on the first column; onCell rules match demo/rowspan.tsx
  if (rowspan) {
    const rowspanOnCell: NonNullable<ColumnsType<Record<string, any>>[number]['onCell']> = (
      _,
      index
    ) => ({
      rowSpan: index! % 2 === 0 ? 2 : 0,
    });
    const firstCol = tableColumns[0];
    if (firstCol) {
      firstCol.onCell = rowspanOnCell;
    }
  }

  return (
    <div
      style={
        hasBorder
          ? {}
          : {
              backgroundColor: token.colorBgLayout,
              padding: 24,
              margin: -24,
            }
      }
    >
      <Form layout="inline">
        <Form.Item label="Card bordered" required={true}>
          <Switch
            size="small"
            value={hasBorder}
            onChange={value => {
              setHasBorder(value);
            }}
          />
        </Form.Item>
        <Form.Item label="Card title" required={true}>
          <Switch
            size="small"
            value={hasTitle}
            onChange={value => {
              setHasTitle(value);
            }}
          />
        </Form.Item>
        <Form.Item label="Card tabs" required={true}>
          <Switch
            size="small"
            value={hasTabs}
            onChange={value => {
              setHasTabs(value);
            }}
          />
        </Form.Item>
        <Form.Item label="Card divided" required={true}>
          <Switch
            size="small"
            value={hasDivider}
            onChange={value => {
              setHasDivider(value);
            }}
          />
        </Form.Item>
        <Form.Item label="Card body padding" required={true}>
          <Switch
            size="small"
            value={hasPadding}
            onChange={value => {
              setHasPadding(value);
            }}
          />
        </Form.Item>
      </Form>
      <Form layout="inline" style={{ marginBottom: 16 }}>
        <Form.Item label="Table bordered" required={true}>
          <Switch
            size="small"
            value={bordered}
            onChange={value => {
              setBordered(value);
            }}
          />
        </Form.Item>
        <Form.Item label="Table inner bordered" required={true}>
          <Switch
            size="small"
            value={innerBordered}
            onChange={value => {
              setInnerBordered(value);
            }}
          />
        </Form.Item>
        <Form.Item label="Table pagination" required={true}>
          <Switch
            size="small"
            value={pagination}
            onChange={value => {
              setPagination(value);
            }}
          />
        </Form.Item>
        <Form.Item label="Table expandable" required={true}>
          <Switch
            size="small"
            value={expandable}
            onChange={value => {
              setExpandable(value);
            }}
          />
        </Form.Item>
        <Form.Item label="Table selectable" required={true}>
          <Switch
            size="small"
            value={selectable}
            onChange={value => {
              setSelectable(value);
            }}
          />
        </Form.Item>
        <Form.Item label="Table has data" required={true}>
          <Switch
            size="small"
            value={hasData}
            onChange={value => {
              setHasData(value);
            }}
          />
        </Form.Item>
        <Form.Item label="Table rowspan" required={true}>
          <Switch size="small" checked={rowspan} onChange={setRowspan} />
        </Form.Item>
        <Form.Item label="Fixed Header" required={true}>
          <Switch size="small" checked={!!yScroll} onChange={setYScroll} />
        </Form.Item>
        <Form.Item label="Table Scroll" required={true}>
          <Radio.Group
            size="small"
            value={xScroll}
            onChange={(e: RadioChangeEvent) => setXScroll(e.target.value)}
          >
            <Radio.Button value={undefined}>Unset</Radio.Button>
            <Radio.Button value="scroll">Scroll</Radio.Button>
            <Radio.Button value="fixed">Fixed Columns</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <Card
        bordered={hasBorder}
        divided={hasDivider}
        title={hasTitle ? 'Title' : ''}
        tabList={
          hasTabs
            ? [
                {
                  key: '1',
                  tab: 'tab1',
                },
                {
                  key: '2',
                  tab: 'tab2',
                },
                {
                  key: '3',
                  tab: 'tab3',
                },
              ]
            : undefined
        }
        bodyStyle={
          hasPadding
            ? {}
            : {
                padding: 0,
              }
        }
      >
        <Table
          bordered={bordered}
          innerBordered={innerBordered}
          columns={tableColumns}
          dataSource={hasData ? dataSource : []}
          rowKey={record => record.key}
          scroll={scroll}
          expandable={
            expandable
              ? {
                  expandedRowRender: () => <div>This is expanded content</div>,
                }
              : undefined
          }
          rowSelection={
            selectable
              ? {
                  selectedRowKeys: selectedRowKeys,
                  onChange: (keys: React.Key[]) => {
                    setSelectedRowKeys(keys);
                  },
                }
              : undefined
          }
          pagination={
            pagination
              ? {
                  pageSize: 5,
                }
              : false
          }
        />
      </Card>
    </div>
  );
};

export default App;
`},8906:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Card, Form, Switch, Table } from '@oceanbase/design';
import type { ColumnsType } from '@oceanbase/design/es/table';

interface DataType {
  key: string;
  name: string;
  age: number;
  tel: string;
  phone: number;
  address: string;
}

const sharedOnCell = (_: DataType, index: number) => {
  if (index === 1) {
    return { colSpan: 0 };
  }

  return {};
};

const columns: ColumnsType<DataType> = [
  {
    title: 'RowHead',
    dataIndex: 'key',
    rowScope: 'row',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
    onCell: (_, index) => ({
      colSpan: index === 1 ? 5 : 1,
    }),
  },
  {
    title: 'Age',
    dataIndex: 'age',
    onCell: sharedOnCell,
  },
  {
    title: 'Home phone',
    colSpan: 2,
    dataIndex: 'tel',
    onCell: (_, index) => {
      if (index === 3) {
        return { rowSpan: 2 };
      }
      // These two are merged into above cell
      if (index === 4) {
        return { rowSpan: 0 };
      }
      if (index === 1) {
        return { colSpan: 0 };
      }

      return {};
    },
  },
  {
    title: 'Phone',
    colSpan: 0,
    dataIndex: 'phone',
    onCell: sharedOnCell,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    onCell: sharedOnCell,
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '5',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park',
  },
];

const App: React.FC = () => {
  const [pagination, setPagination] = useState(false);

  return (
    <>
      <Form layout="inline" style={{ marginBottom: 16 }}>
        <Form.Item label="Pagination">
          <Switch size="small" checked={pagination} onChange={setPagination} />
        </Form.Item>
      </Form>
      <Card bordered bodyStyle={{ padding: 0 }}>
        <Table
          columns={columns}
          dataSource={data}
          bordered
          pagination={pagination ? { pageSize: 3 } : false}
        />
      </Card>
    </>
  );
};

export default App;
`},50735:function(t,n){"use strict";n.Z=`import React from 'react';
import { Table } from '@oceanbase/design';
import type { TableColumnsType } from '@oceanbase/design';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  amount: number;
  address: string;
}

const dataSource: DataType[] = [
  { key: '1', name: 'Mike', age: 32, amount: 1200, address: '10 Downing Street' },
  { key: '2', name: 'John', age: 42, amount: 2400, address: '20 Oxford Street' },
  { key: '3', name: 'Jane', age: 28, amount: 800, address: '30 Baker Street' },
];

const columns: TableColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    tooltip: 'User display name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
    tooltip: { title: 'Age in years', type: 'info' },
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    sorter: (a, b) => a.amount - b.amount,
    filters: [
      { text: '>= 1000', value: 'high' },
      { text: '< 1000', value: 'low' },
    ],
    onFilter: (value, record) => (value === 'high' ? record.amount >= 1000 : record.amount < 1000),
    tooltip: 'Amount before tax',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    tooltip: (
      <div>
        Address help, <b>ReactNode</b> is supported
      </div>
    ),
  },
];

const App: React.FC = () => <Table columns={columns} dataSource={dataSource} pagination={false} />;

export default App;
`},22447:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Button, Form, Radio, Space, Switch, Table } from '@oceanbase/design';
import type { RadioChangeEvent } from '@oceanbase/design';
import type { SizeType } from '@oceanbase/design/es/config-provider';
import type { ColumnsType, TableProps } from '@oceanbase/design/es/table';
import type { ExpandableConfig, TableRowSelection } from '@oceanbase/design/es/table/interface';
import { EllipsisOutlined } from '@oceanbase/icons';

interface DataType {
  key: number;
  name: string;
  age: number;
  address: string;
  description: string;
}

type TablePaginationPosition =
  | 'topLeft'
  | 'topCenter'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomCenter'
  | 'bottomRight';

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value as string) === 0,
  },
  {
    title: 'Action',
    key: 'action',
    sorter: true,
    render: () => (
      <Space>
        <Button>Delete</Button>
        <Button icon={<EllipsisOutlined />} />
      </Space>
    ),
  },
];

const data: DataType[] = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: Number(\`\${i}2\`),
    address: \`New York No. \${i} Lake Park\`,
    description: \`My name is John Brown, I am \${i}2 years old, living in New York No. \${i} Lake Park.\`,
  });
}

const defaultExpandable = {
  expandedRowRender: (record: DataType) => <div>{record.description}</div>,
};
const defaultTitle = () => 'Here is title';
const defaultFooter = () => 'Here is footer';

const App: React.FC = () => {
  const [bordered, setBordered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState<SizeType>('large');
  const [expandable, setExpandable] = useState<ExpandableConfig<DataType> | undefined>(
    defaultExpandable
  );
  const [showTitle, setShowTitle] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [showfooter, setShowFooter] = useState(true);
  const [rowSelection, setRowSelection] = useState<TableRowSelection<DataType> | undefined>({});
  const [hasData, setHasData] = useState(true);
  const [tableLayout, setTableLayout] = useState();
  const [top, setTop] = useState<TablePaginationPosition | 'none'>('none');
  const [bottom, setBottom] = useState<TablePaginationPosition>('bottomRight');
  const [ellipsis, setEllipsis] = useState(false);
  const [yScroll, setYScroll] = useState(false);
  const [xScroll, setXScroll] = useState<string>();

  const handleBorderChange = (enable: boolean) => {
    setBordered(enable);
  };

  const handleLoadingChange = (enable: boolean) => {
    setLoading(enable);
  };

  const handleSizeChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };

  const handleTableLayoutChange = (e: RadioChangeEvent) => {
    setTableLayout(e.target.value);
  };

  const handleExpandChange = (enable: boolean) => {
    setExpandable(enable ? defaultExpandable : undefined);
  };

  const handleEllipsisChange = (enable: boolean) => {
    setEllipsis(enable);
  };

  const handleTitleChange = (enable: boolean) => {
    setShowTitle(enable);
  };

  const handleHeaderChange = (enable: boolean) => {
    setShowHeader(enable);
  };

  const handleFooterChange = (enable: boolean) => {
    setShowFooter(enable);
  };

  const handleRowSelectionChange = (enable: boolean) => {
    setRowSelection(enable ? {} : undefined);
  };

  const handleYScrollChange = (enable: boolean) => {
    setYScroll(enable);
  };

  const handleXScrollChange = (e: RadioChangeEvent) => {
    setXScroll(e.target.value);
  };

  const handleDataChange = (newHasData: boolean) => {
    setHasData(newHasData);
  };

  const scroll: { x?: number | string; y?: number | string } = {};
  if (yScroll) {
    scroll.y = 240;
  }
  if (xScroll) {
    scroll.x = '1000px';
  }

  const tableColumns = columns.map(item => ({ ...item, ellipsis }));
  if (xScroll === 'fixed') {
    tableColumns[0].fixed = 'left';
    tableColumns[tableColumns.length - 1].fixed = 'right';
  }

  const tableProps: TableProps<DataType> = {
    bordered,
    loading,
    size,
    expandable,
    title: showTitle ? defaultTitle : undefined,
    showHeader,
    footer: showfooter ? defaultFooter : undefined,
    rowSelection,
    scroll,
    tableLayout,
  };

  const style = {
    marginBottom: 8,
  };

  return (
    <>
      <Form layout="inline" requiredMark={false} style={{ marginBottom: 16 }}>
        <Form.Item label="Bordered" style={style}>
          <Switch checked={bordered} onChange={handleBorderChange} />
        </Form.Item>
        <Form.Item label="loading" style={style}>
          <Switch checked={loading} onChange={handleLoadingChange} />
        </Form.Item>
        <Form.Item label="Title" style={style}>
          <Switch checked={showTitle} onChange={handleTitleChange} />
        </Form.Item>
        <Form.Item label="Column Header" style={style}>
          <Switch checked={showHeader} onChange={handleHeaderChange} />
        </Form.Item>
        <Form.Item label="Footer" style={style}>
          <Switch checked={showfooter} onChange={handleFooterChange} />
        </Form.Item>
        <Form.Item label="Expandable" style={style}>
          <Switch checked={!!expandable} onChange={handleExpandChange} />
        </Form.Item>
        <Form.Item label="Checkbox" style={style}>
          <Switch checked={!!rowSelection} onChange={handleRowSelectionChange} />
        </Form.Item>
        <Form.Item label="Fixed Header" style={style}>
          <Switch checked={!!yScroll} onChange={handleYScrollChange} />
        </Form.Item>
        <Form.Item label="Has Data" style={style}>
          <Switch checked={!!hasData} onChange={handleDataChange} />
        </Form.Item>
        <Form.Item label="Ellipsis" style={style}>
          <Switch checked={!!ellipsis} onChange={handleEllipsisChange} />
        </Form.Item>
        <Form.Item label="Size" style={style}>
          <Radio.Group value={size} onChange={handleSizeChange}>
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="middle">Middle</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Table Scroll" style={style}>
          <Radio.Group value={xScroll} onChange={handleXScrollChange}>
            <Radio.Button value={undefined}>Unset</Radio.Button>
            <Radio.Button value="scroll">Scroll</Radio.Button>
            <Radio.Button value="fixed">Fixed Columns</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Table Layout" style={style}>
          <Radio.Group value={tableLayout} onChange={handleTableLayoutChange}>
            <Radio.Button value={undefined}>Unset</Radio.Button>
            <Radio.Button value="fixed">Fixed</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Pagination Top" style={style}>
          <Radio.Group
            value={top}
            onChange={e => {
              setTop(e.target.value);
            }}
          >
            <Radio.Button value="topLeft">TopLeft</Radio.Button>
            <Radio.Button value="topCenter">TopCenter</Radio.Button>
            <Radio.Button value="topRight">TopRight</Radio.Button>
            <Radio.Button value="none">None</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Pagination Bottom" style={style}>
          <Radio.Group
            value={bottom}
            onChange={e => {
              setBottom(e.target.value);
            }}
          >
            <Radio.Button value="bottomLeft">BottomLeft</Radio.Button>
            <Radio.Button value="bottomCenter">BottomCenter</Radio.Button>
            <Radio.Button value="bottomRight">BottomRight</Radio.Button>
            <Radio.Button value="none">None</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <Table
        {...tableProps}
        pagination={{ position: [top as TablePaginationPosition, bottom] }}
        columns={tableColumns}
        dataSource={hasData ? data : []}
        scroll={scroll}
      />
    </>
  );
};

export default App;
`},47426:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import {
  Button,
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Space,
  Table,
  Typography,
} from '@oceanbase/design';

interface Item {
  key: string;
  name: string;
  age: number;
  address: string;
}

const originData: Item[] = [];
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: \`Edward \${i}\`,
    age: 32,
    address: \`London Park no. \${i}\`,
  });
}
interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: Item;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: \`Please Input \${title}!\`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record: Item) => record.key === editingKey;

  const edit = (record: Partial<Item> & { key: React.Key }) => {
    form.setFieldsValue({ name: '', age: '', address: '', ...record });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as Item;

      const newData = [...data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '25%',
      editable: true,
    },
    {
      title: 'age',
      dataIndex: 'age',
      width: '15%',
      editable: true,
    },
    {
      title: 'address',
      dataIndex: 'address',
      width: '40%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_: any, record: Item) => {
        const editable = isEditing(record);
        return editable ? (
          <Space>
            <Button onClick={() => save(record.key)}>Save</Button>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <Button>Cancel</Button>
            </Popconfirm>
          </Space>
        ) : (
          <Button disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </Button>
        );
      },
    },
  ];

  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default App;
`},23508:function(t,n){"use strict";n.Z=`import { Table, Tooltip } from '@oceanbase/design';
import type { ColumnsType } from '@oceanbase/design/es/table';
import React from 'react';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column Long Column',
    dataIndex: 'address',
    key: 'address 2',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column',
    dataIndex: 'address',
    key: 'address 3',
    ellipsis: true,
    render: address => <a>{address}</a>,
  },
  {
    title: 'Long Column',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: true,
    // Customize Tooltip when the default ellipsis Tooltip does not meet expectations
    render: address => (
      <Tooltip placement="topLeft" title="Custom your tooltip">
        <a>{address}</a>
      </Tooltip>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park, Sydney No. 1 Lake Park',
  },
];

const App: React.FC = () => <Table columns={columns} dataSource={data} />;

export default App;
`},89814:function(t,n){"use strict";n.Z=`import React from 'react';
import { Divider, Table } from '@oceanbase/design';

const App: React.FC = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return (
    <>
      <Divider>Empty Table</Divider>
      <Table columns={columns} dataSource={[]} />
      <Divider>Nested Empty Table</Divider>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: () => <Table columns={columns} dataSource={[]} />,
          defaultExpandedRowKeys: ['0'],
        }}
        dataSource={[
          { key: '0', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' },
        ]}
      />
    </>
  );
};

export default App;
`},64082:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import type { TableColumnsType } from '@oceanbase/design';
import { Button, Form, Switch, Table } from '@oceanbase/design';

interface DataType {
  key: React.Key;
  name: string;
  platform: string;
  version: string;
  upgradeNum: number;
  creator: string;
  createdAt: string;
}

const App: React.FC = () => {
  const [expandRowByClick, setExpandRowByClick] = useState(false);

  const columns: TableColumnsType<DataType> = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Platform', dataIndex: 'platform', key: 'platform' },
    { title: 'Version', dataIndex: 'version', key: 'version' },
    { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    { title: 'Creator', dataIndex: 'creator', key: 'creator' },
    { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
    { title: 'Action', key: 'operation', render: () => <Button>Action</Button> },
  ];

  const data: DataType[] = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i.toString(),
      name: 'Screem',
      platform: 'iOS',
      version: '10.3.4.5654',
      upgradeNum: 500,
      creator: 'Jack',
      createdAt: '2014-12-24 23:12:00',
    });
  }

  return (
    <>
      <Form layout="inline" style={{ marginBottom: 16 }}>
        <Form.Item label="expandRowByClick" required={true}>
          <Switch
            size="small"
            value={expandRowByClick}
            onClick={value => {
              setExpandRowByClick(value);
            }}
          />
        </Form.Item>
      </Form>
      <Table
        columns={columns}
        expandable={{
          expandRowByClick,
          expandedRowRender: () => <div>This is expanded content</div>,
          defaultExpandedRowKeys: ['0'],
        }}
        dataSource={data}
      />
    </>
  );
};

export default App;
`},13787:function(t,n){"use strict";n.Z=`import React from 'react';
import { Table } from '@oceanbase/design';
import type { TableColumnsType, TableProps } from '@oceanbase/design';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    onFilter: (value, record) => record.name.indexOf(value as string) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value as string) === 0,
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const App: React.FC = () => (
  <Table<DataType> columns={columns} dataSource={data} onChange={onChange} />
);

export default App;
`},15566:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Table } from '@oceanbase/design';
import { ColumnProps } from '@oceanbase/design/es/table';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const App: React.FC = () => {
  const dataSource = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 40,
      address: 'London Park',
    },
    {
      key: '3',
      name: 'Jim Green',
      age: 50,
      address: 'London Park',
    },
    {
      key: '4',
      name: 'Jim Green',
      age: 60,
      address: 'London Park',
    },
    {
      key: '5',
      name: 'Jim Green',
      age: 70,
      address: 'London Park',
    },
  ];

  const columns: ColumnProps<DataType>[] = [
    {
      title: 'Full Name',
      width: 120,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Age',
      width: 100,
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
      sorter: true,
    },
    { title: 'Column 1', dataIndex: 'address', key: '1' },
    { title: 'Column 2', dataIndex: 'address', key: '2' },
    { title: 'Column 3', dataIndex: 'address', key: '3' },
    { title: 'Column 4', dataIndex: 'address', key: '4' },
    { title: 'Column 5', dataIndex: 'address', key: '5' },
    { title: 'Column 6', dataIndex: 'address', key: '6' },
    { title: 'Column 7', dataIndex: 'address', key: '7' },
    { title: 'Column 8', dataIndex: 'address', key: '8' },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => <Button>Action</Button>,
    },
  ];

  return <Table columns={columns} dataSource={dataSource} scroll={{ x: 1440 }} />;
};

export default App;
`},32786:function(t,n){"use strict";n.Z=`import React from 'react';
import { Table } from '@oceanbase/design';
import type { ColumnsType } from '@oceanbase/design/es/table';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  street: string;
  building: string;
  number: number;
  companyAddress: string;
  companyName: string;
  gender: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 120,
    fixed: 'left',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'John',
        value: 'John',
      },
    ],
    onFilter: (value: string, record) => record.name.indexOf(value) === 0,
  },
  {
    title: 'Other',
    children: [
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: 150,
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: 'Address',
        children: [
          {
            title: 'Street',
            dataIndex: 'street',
            key: 'street',
            width: 150,
          },
          {
            title: 'Block',
            children: [
              {
                title: 'Building',
                dataIndex: 'building',
                key: 'building',
                width: 100,
              },
              {
                title: 'Door No.',
                dataIndex: 'number',
                key: 'number',
                width: 100,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Company',
    children: [
      {
        title: 'Company Address',
        dataIndex: 'companyAddress',
        key: 'companyAddress',
        width: 200,
      },
      {
        title: 'Company Name',
        dataIndex: 'companyName',
        key: 'companyName',
      },
    ],
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    width: 80,
    fixed: 'right',
  },
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: i + 1,
    street: 'Lake Park',
    building: 'C',
    number: 2035,
    companyAddress: 'Lake Street 42',
    companyName: 'SoftLake Co',
    gender: 'M',
  });
}

const App: React.FC = () => (
  <Table bordered={true} columns={columns} dataSource={data} scroll={{ x: 'calc(700px + 50%)' }} />
);

export default App;
`},28685:function(t,n){"use strict";n.Z=`import React from 'react';
import { Card, Divider, Table, theme } from '@oceanbase/design';
import type { ColumnsType } from '@oceanbase/design/es/table';

interface DataType {
  key: string;
  name: string;
  money: string;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Cash Assets',
    className: 'column-money',
    dataIndex: 'money',
    align: 'right',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    money: '\uFFE5300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '\uFFE51,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '\uFFE5120,000.00',
    address: 'Sydney No. 1 Lake Park',
  },
];

const App: React.FC = () => {
  const { token } = theme.useToken();
  return (
    <>
      <Table columns={columns} dataSource={data} innerBordered />
      <Divider>with Card</Divider>
      <div
        style={{
          padding: 24,
          borderRadius: token.borderRadiusLG,
          backgroundColor: token.colorBgLayout,
        }}
      >
        <Card bordered={true} bodyStyle={{ padding: 0 }}>
          <Table columns={columns} dataSource={data} innerBordered />
        </Card>
      </div>
      <Divider>outerBordered + innerBordered</Divider>
      <Table columns={columns} dataSource={data} outerBordered innerBordered />
    </>
  );
};

export default App;
`},48564:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import {
  Badge,
  Button,
  Dropdown,
  Form,
  Radio,
  Space,
  Table,
  TableColumnsType,
} from '@oceanbase/design';
import type { SizeType } from '@oceanbase/design/es/config-provider';
import { EllipsisOutlined } from '@oceanbase/icons';

interface DataType {
  key: React.Key;
  name: string;
  platform: string;
  version: string;
  upgradeNum: number;
  creator: string;
  createdAt: string;
}

interface ExpandedDataType {
  key: React.Key;
  date: string;
  name: string;
  upgradeNum: string;
}

const items = [
  { key: '1', label: 'Action 1' },
  { key: '2', label: 'Action 2' },
];

const App: React.FC = () => {
  const [size, setSize] = useState<SizeType>('large');
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const expandedRowRender = (size: SizeType) => {
    const columns: TableColumnsType<ExpandedDataType> = [
      { title: 'Date', dataIndex: 'date', key: 'date' },
      { title: 'Name', dataIndex: 'name', key: 'name' },
      {
        title: 'Status',
        key: 'state',
        render: () => <Badge status="success" text="Finished" />,
      },
      { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <Space>
            <Button>Stop</Button>
            <Dropdown menu={{ items }}>
              <Button icon={<EllipsisOutlined />} />
            </Dropdown>
          </Space>
        ),
      },
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i.toString(),
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56',
      });
    }
    return <Table size={size} columns={columns} dataSource={data} pagination={false} />;
  };

  const columns: TableColumnsType<DataType> = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Platform', dataIndex: 'platform', key: 'platform' },
    { title: 'Version', dataIndex: 'version', key: 'version' },
    { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    { title: 'Creator', dataIndex: 'creator', key: 'creator' },
    { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
    { title: 'Action', key: 'operation', render: () => <Button>Publish</Button> },
  ];

  const data: DataType[] = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i.toString(),
      name: 'Screem',
      platform: 'iOS',
      version: '10.3.4.5654',
      upgradeNum: 500,
      creator: 'Jack',
      createdAt: '2014-12-24 23:12:00',
    });
  }

  const toolOptionsRender = (size: SizeType) => {
    return [
      <Button size={size}>Batch Delete</Button>,
      <Button size={size}>Batch Update</Button>,
      <Button size={size}>Batch Restart</Button>,
    ];
  };

  const toolSelectedContent = (selectedRowKeys: React.Key[], selectedRows: any[]) => {
    return <Table columns={columns} dataSource={selectedRows} pagination={false} />;
  };

  return (
    <>
      <Form style={{ marginBottom: 16 }}>
        <Form.Item label="Size" required={true}>
          <Radio.Group
            value={size}
            onChange={e => {
              setSize(e.target.value);
            }}
          >
            <Radio.Button value="large">large</Radio.Button>
            <Radio.Button value="middle">middle</Radio.Button>
            <Radio.Button value="small">small</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <Table
        size={size}
        columns={columns}
        dataSource={data}
        toolOptionsRender={() => toolOptionsRender('middle')}
        toolSelectedContent={toolSelectedContent}
        expandable={{
          expandedRowRender: () => expandedRowRender(size),
          defaultExpandedRowKeys: ['0'],
        }}
        rowSelection={{
          selectedRowKeys: selectedRowKeys,
          onChange: (keys: React.Key[]) => {
            setSelectedRowKeys(keys);
          },
        }}
      />
    </>
  );
};

export default App;
`},95818:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import type { TableColumnsType } from '@oceanbase/design';
import { Badge, Button, Dropdown, Form, Radio, Space, Table } from '@oceanbase/design';
import type { SizeType } from '@oceanbase/design/es/config-provider';
import { EllipsisOutlined } from '@oceanbase/icons';

interface DataType {
  key: React.Key;
  name: string;
  platform: string;
  version: string;
  upgradeNum: number;
  creator: string;
  createdAt: string;
}

interface ExpandedDataType {
  key: React.Key;
  date: string;
  name: string;
  upgradeNum: string;
}

const items = [
  { key: '1', label: 'Action 1' },
  { key: '2', label: 'Action 2' },
];

const App: React.FC = () => {
  const [size, setSize] = useState<SizeType>('large');

  const expandedRowRender = (size: SizeType) => {
    const columns: TableColumnsType<ExpandedDataType> = [
      { title: 'Date', dataIndex: 'date', key: 'date' },
      { title: 'Name', dataIndex: 'name', key: 'name' },
      {
        title: 'Status',
        key: 'state',
        render: () => <Badge status="success" text="Finished" />,
      },
      { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <Space>
            <Button>Stop</Button>
            <Dropdown menu={{ items }}>
              <Button icon={<EllipsisOutlined />} />
            </Dropdown>
          </Space>
        ),
      },
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i.toString(),
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56',
      });
    }
    return <Table size={size} columns={columns} dataSource={data} pagination={false} />;
  };

  const columns: TableColumnsType<DataType> = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Platform', dataIndex: 'platform', key: 'platform' },
    { title: 'Version', dataIndex: 'version', key: 'version' },
    { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    { title: 'Creator', dataIndex: 'creator', key: 'creator' },
    { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
    { title: 'Action', key: 'operation', render: () => <Button>Publish</Button> },
  ];

  const data: DataType[] = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i.toString(),
      name: 'Screem',
      platform: 'iOS',
      version: '10.3.4.5654',
      upgradeNum: 500,
      creator: 'Jack',
      createdAt: '2014-12-24 23:12:00',
    });
  }

  return (
    <>
      <Form style={{ marginBottom: 16 }}>
        <Form.Item label="Size" required={true}>
          <Radio.Group
            value={size}
            onChange={e => {
              setSize(e.target.value);
            }}
          >
            <Radio.Button value="large">large</Radio.Button>
            <Radio.Button value="middle">middle</Radio.Button>
            <Radio.Button value="small">small</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <Table
        size={size}
        columns={columns}
        expandable={{
          expandedRowRender: () => expandedRowRender(size),
          defaultExpandedRowKeys: ['0'],
        }}
        dataSource={data}
      />
    </>
  );
};

export default App;
`},40367:function(t,n){"use strict";n.Z=`import React from 'react';
import { Card, Divider, Table, theme } from '@oceanbase/design';
import type { ColumnsType } from '@oceanbase/design/es/table';

interface DataType {
  key: string;
  name: string;
  money: string;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Cash Assets',
    className: 'column-money',
    dataIndex: 'money',
    align: 'right',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    money: '\uFFE5300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '\uFFE51,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '\uFFE5120,000.00',
    address: 'Sydney No. 1 Lake Park',
  },
];

const App: React.FC = () => {
  const { token } = theme.useToken();
  return (
    <>
      <Table columns={columns} dataSource={data} outerBordered />
      <Divider>\u7B49\u4EF7\u4E8E Card bordered + bodyStyle padding 0 + Table</Divider>
      <div
        style={{
          padding: 24,
          borderRadius: token.borderRadiusLG,
          backgroundColor: token.colorBgLayout,
        }}
      >
        <Card bordered={true} bodyStyle={{ padding: 0 }}>
          <Table columns={columns} dataSource={data} />
        </Card>
      </div>
    </>
  );
};

export default App;
`},68858:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Form, Radio, Switch, Table, theme } from '@oceanbase/design';
import type { RadioChangeEvent } from '@oceanbase/design';
import type { ColumnsType } from '@oceanbase/design/es/table';
import { ProCard } from '@oceanbase/ui';

const App: React.FC = () => {
  const { token } = theme.useToken();

  // card
  const [hasBorder, setHasBorder] = useState(true);
  const [hasTitle, setHasTitle] = useState(true);
  const [hasTabs, setHasTabs] = useState(false);
  const [hasPadding, setHasPadding] = useState(false);
  const [hasData, setHasData] = useState(true);

  // table
  const [bordered, setBordered] = useState(false);
  const [innerBordered, setInnerBordered] = useState(false);
  const [pagination, setPagination] = useState(true);
  const [expandable, setExpandable] = useState(true);
  const [selectable, setSelectable] = useState(true);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [yScroll, setYScroll] = useState(false);
  const [xScroll, setXScroll] = useState<string | undefined>(undefined);
  const [rowspan, setRowspan] = useState(false);

  const columns: ColumnsType<Record<string, any>> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  // Use 4 rows when rowspan is enabled, matching demo/rowspan.tsx for pairwise merge
  const rowCount = hasData ? (rowspan ? 4 : 5) : 0;
  const dataSource: Record<string, any>[] = [];
  for (let i = 1; i <= rowCount; i++) {
    dataSource.push({
      key: i,
      name: 'John Brown' + i,
      age: 32,
      address: \`New York No. \${i} Lake Park\`,
    });
  }

  // Scroll config aligned with card-table / dynamic-settings demo
  const scroll: { x?: number | string; y?: number | string } = {};
  if (yScroll) {
    scroll.y = 240;
  }
  if (xScroll) {
    scroll.x = '1000px';
  }

  const tableColumns = columns.map(item => ({ ...item }));
  if (xScroll === 'fixed') {
    tableColumns[0].fixed = 'left';
    tableColumns[tableColumns.length - 1].fixed = 'right';
  }
  // Rowspan on the first column; onCell rules match demo/rowspan.tsx
  if (rowspan) {
    const rowspanOnCell: NonNullable<ColumnsType<Record<string, any>>[number]['onCell']> = (
      _,
      index
    ) => ({
      rowSpan: index! % 2 === 0 ? 2 : 0,
    });
    const firstCol = tableColumns[0];
    if (firstCol) {
      firstCol.onCell = rowspanOnCell;
    }
  }

  return (
    <div
      style={
        hasBorder
          ? {}
          : {
              backgroundColor: token.colorBgLayout,
              padding: 24,
              margin: -24,
            }
      }
    >
      <Form layout="inline">
        <Form.Item label="Card bordered" required={true}>
          <Switch
            size="small"
            value={hasBorder}
            onChange={value => {
              setHasBorder(value);
            }}
          />
        </Form.Item>
        <Form.Item label="Card title" required={true}>
          <Switch
            size="small"
            value={hasTitle}
            onChange={value => {
              setHasTitle(value);
            }}
          />
        </Form.Item>
        <Form.Item label="Card tabs" required={true}>
          <Switch
            size="small"
            value={hasTabs}
            onChange={value => {
              setHasTabs(value);
            }}
          />
        </Form.Item>
        <Form.Item label="Card body horizontal padding" required={true}>
          <Switch
            size="small"
            value={hasPadding}
            onChange={value => {
              setHasPadding(value);
            }}
          />
        </Form.Item>
      </Form>
      <Form layout="inline" style={{ marginBottom: 16 }}>
        <Form.Item label="Table bordered" required={true}>
          <Switch
            size="small"
            value={bordered}
            onChange={value => {
              setBordered(value);
            }}
          />
        </Form.Item>
        <Form.Item label="Table inner bordered" required={true}>
          <Switch
            size="small"
            value={innerBordered}
            onChange={value => {
              setInnerBordered(value);
            }}
          />
        </Form.Item>
        <Form.Item label="Table pagination" required={true}>
          <Switch
            size="small"
            value={pagination}
            onChange={value => {
              setPagination(value);
            }}
          />
        </Form.Item>
        <Form.Item label="Table expandable" required={true}>
          <Switch
            size="small"
            value={expandable}
            onChange={value => {
              setExpandable(value);
            }}
          />
        </Form.Item>
        <Form.Item label="Table selectable" required={true}>
          <Switch
            size="small"
            value={selectable}
            onChange={value => {
              setSelectable(value);
            }}
          />
        </Form.Item>
        <Form.Item label="Table has data" required={true}>
          <Switch
            size="small"
            value={hasData}
            onChange={value => {
              setHasData(value);
            }}
          />
        </Form.Item>
        <Form.Item label="Table rowspan" required={true}>
          <Switch size="small" checked={rowspan} onChange={setRowspan} />
        </Form.Item>
        <Form.Item label="Fixed Header" required={true}>
          <Switch size="small" checked={!!yScroll} onChange={setYScroll} />
        </Form.Item>
        <Form.Item label="Table Scroll" required={true}>
          <Radio.Group
            size="small"
            value={xScroll}
            onChange={(e: RadioChangeEvent) => setXScroll(e.target.value)}
          >
            <Radio.Button value={undefined}>Unset</Radio.Button>
            <Radio.Button value="scroll">Scroll</Radio.Button>
            <Radio.Button value="fixed">Fixed Columns</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <ProCard
        bordered={hasBorder}
        title={hasTitle ? 'Title' : ''}
        tabs={
          hasTabs
            ? {
                items: [
                  {
                    key: '1',
                    label: 'Tab 1',
                    children: \`Content of Tab Pane 1\`,
                  },
                  {
                    key: '2',
                    label: 'Tab 2',
                    children: \`Content of Tab Pane 2\`,
                  },
                  {
                    key: '3',
                    label: 'Tab 3',
                    children: \`Content of Tab Pane 3\`,
                  },
                ],
              }
            : undefined
        }
        bodyStyle={hasPadding ? { padding: 24 } : { padding: 0 }}
      >
        <Table
          bordered={bordered}
          innerBordered={innerBordered}
          columns={tableColumns}
          dataSource={hasData ? dataSource : []}
          rowKey={record => record.key}
          scroll={scroll}
          expandable={
            expandable
              ? {
                  expandedRowRender: () => <div>This is expanded content</div>,
                }
              : undefined
          }
          rowSelection={
            selectable
              ? {
                  selectedRowKeys: selectedRowKeys,
                  onChange: (keys: React.Key[]) => {
                    setSelectedRowKeys(keys);
                  },
                }
              : undefined
          }
          pagination={
            pagination
              ? {
                  pageSize: 5,
                }
              : false
          }
        />
      </ProCard>
    </div>
  );
};

export default App;
`},7352:function(t,n){"use strict";n.Z=`import { Button, Table } from '@oceanbase/design';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>(['4', '5']);
  const dataSource = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '5',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '6',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '7',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '8',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const toolOptionsRender = (action: any) => {
    return [
      <Button>Batch Delete</Button>,
      <Button>Batch Update</Button>,
      <Button>Batch Restart</Button>,
    ];
  };

  const toolSelectedContent = (selectedRowKeys: any, selectedRows: any) => {
    return <Table columns={columns} dataSource={selectedRows} pagination={false} />;
  };

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      toolOptionsRender={toolOptionsRender}
      toolSelectedContent={toolSelectedContent}
      rowSelection={{
        selectedRowKeys: selectedRowKeys,
        onChange: (keys: React.Key[]) => {
          setSelectedRowKeys(keys);
        },
      }}
    />
  );
};

export default App;
`},53889:function(t,n){"use strict";n.Z=`import React from 'react';
import { Table } from '@oceanbase/design';
import type { ColumnsType } from '@oceanbase/design/es/table';

interface DataType {
  key: string;
  name: string;
  age: number;
  tel: string;
  phone: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Age',
    dataIndex: 'age',
    onCell: (_, index) => {
      return { rowSpan: index % 2 === 0 ? 2 : 0 };
    },
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Home phone',
    dataIndex: 'tel',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    onCell: (_, index) => {
      return { rowSpan: index % 2 === 0 ? 2 : 0 };
    },
  },
  {
    title: 'Address',
    dataIndex: 'address',
    onCell: (_, index) => {
      return { rowSpan: index % 2 === 0 ? 2 : 0 };
    },
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '2',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park',
  },
  {
    key: '3',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sydney No. 1 Lake Park',
  },
];

const App: React.FC = () => <Table columns={columns} dataSource={data} bordered />;

export default App;
`},48651:function(t,n){"use strict";n.Z=`import React from 'react';
import { Table } from '@oceanbase/design';
import type { ColumnsType } from '@oceanbase/design/es/table';

interface DataType {
  key: React.ReactNode;
  name: string;
  age: number;
  address: string;
  children?: DataType[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: '12%',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: '30%',
    key: 'address',
  },
];

const data: DataType[] = [
  {
    key: 1,
    name: 'John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [
      {
        key: 11,
        name: 'John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park',
        children: [
          {
            key: 111,
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
          },
        ],
      },
      {
        key: 12,
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [
          {
            key: 121,
            name: 'Jimmy Brown',
            age: 16,
            address: 'New York No. 3 Lake Park',
          },
        ],
      },
      {
        key: 13,
        name: 'Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
        children: [
          {
            key: 131,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 1311,
                name: 'Jim Green jr.',
                age: 25,
                address: 'London No. 3 Lake Park',
              },
              {
                key: 1312,
                name: 'Jimmy Green sr.',
                age: 18,
                address: 'London No. 4 Lake Park',
              },
            ],
          },
        ],
      },
    ],
  },
];

const App: React.FC = () => {
  return <Table columns={columns} dataSource={data} />;
};

export default App;
`},46192:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Space, Switch, Table, Typography } from '@oceanbase/design';
import type { TableProps } from '@oceanbase/design';

interface RecordType {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  address1: string;
  address2: string;
  address3: string;
}

const columns: TableProps<RecordType>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 100,
    fixed: 'left',
  },
  {
    title: 'FistName',
    dataIndex: 'firstName',
    width: 120,
  },
  {
    title: 'LastName',
    dataIndex: 'lastName',
    width: 120,
  },
  {
    title: 'Group',
    width: 120,
    render: (_, record) => \`Group \${Math.floor(record.id / 4)}\`,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 100,
  },
  {
    title: 'Address 1',
    dataIndex: 'address1',
  },
  {
    title: 'Address 2',
    dataIndex: 'address2',
  },
  {
    title: 'Address 3',
    dataIndex: 'address3',
  },
  {
    title: 'Action',
    width: 160,
    fixed: 'right',
    render: () => (
      <Space>
        <Button>Action1</Button>
        <Button>Action2</Button>
      </Space>
    ),
  },
];

const getData = (count: number) => {
  const data: RecordType[] = new Array(count).fill(null).map((_, index) => ({
    id: index,
    firstName: \`First_\${index.toString(16)}\`,
    lastName: \`Last_\${index.toString(16)}\`,
    age: 25 + (index % 10),
    address1: \`New York No. \${index} Lake Park\`,
    address2: \`London No. \${index} Lake Park\`,
    address3: \`Sydney No. \${index} Lake Park\`,
  }));

  return data;
};

const App = () => {
  const [bordered, setBordered] = React.useState(true);
  const [expanded, setExpanded] = React.useState(false);

  const data = getData(10000);

  const expandableProps = React.useMemo<TableProps<RecordType>['expandable']>(() => {
    if (!expanded) {
      return undefined;
    }
    return {
      columnWidth: 48,
      expandedRowRender: record => <p style={{ margin: 0 }}>\u{1F389} Expanded {record.address1}</p>,
    };
  }, [expanded]);

  return (
    <div>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Space>
          <Switch
            checked={bordered}
            onChange={() => setBordered(!bordered)}
            checkedChildren="Bordered"
            unCheckedChildren="Bordered"
          />
          <Switch
            checked={expanded}
            onChange={() => setExpanded(!expanded)}
            checkedChildren="Expandable"
            unCheckedChildren="Expandable"
          />
        </Space>

        <Table
          bordered={bordered}
          virtual
          columns={columns}
          scroll={{ x: 2000, y: 400 }}
          rowKey="id"
          dataSource={data}
          pagination={false}
          rowSelection={
            expanded
              ? undefined
              : {
                  columnWidth: 48,
                }
          }
          expandable={expandableProps}
        />
      </Space>
    </div>
  );
};

export default App;
`},55486:function(t,n){"use strict";n.Z=`import React from 'react';
import { Tabs } from '@oceanbase/design';
import type { TabsProps } from '@oceanbase/design';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: \`Tab 1\`,
    children: \`Content of Tab Pane 1\`,
    // badge content
    badge: 22,
  },
  {
    key: '2',
    label: \`Tab 2\`,
    children: \`Content of Tab Pane 2\`,
    // same as \`badge: 33\`
    badge: {
      count: 33,
    },
  },
  {
    key: '3',
    label: \`Tab 3\`,
    children: \`Content of Tab Pane 3\`,
    // custom badge
    badge: {
      count: 0,
      showZero: true,
    },
  },
];

const App: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default App;
`},12984:function(t,n){"use strict";n.Z=`import type { TabsProps } from '@oceanbase/design';
import { Tabs } from '@oceanbase/design';
import React from 'react';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: \`Tab 1\`,
    children: \`Content of Tab Pane 1\`,
  },
  {
    key: '2',
    label: \`Tab 2\`,
    children: \`Content of Tab Pane 2\`,
  },
  {
    key: '3',
    label: \`Tab 3\`,
    children: \`Content of Tab Pane 3\`,
  },
];

const App: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default App;
`},64475:function(t,n){"use strict";n.Z=`import type { TabsProps } from '@oceanbase/design';
import { Tabs } from '@oceanbase/design';
import React from 'react';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: \`Tab 1\`,
    children: \`Content of Tab Pane 1\`,
  },
  {
    key: '2',
    label: \`Tab 2\`,
    children: \`Content of Tab Pane 2\`,
    disabled: true,
  },
  {
    key: '3',
    label: \`Tab 3\`,
    children: \`Content of Tab Pane 3\`,
  },
];

const App: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default App;
`},17402:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Form, Switch, Tabs } from '@oceanbase/design';

const App: React.FC = () => {
  const [divider, setDivider] = useState<boolean>(true);

  return (
    <div>
      <Form layout="inline">
        <Form.Item label="divider" required={true}>
          <Switch
            checked={divider}
            onChange={value => {
              setDivider(value);
            }}
          />
        </Form.Item>
      </Form>
      <Tabs
        defaultActiveKey="1"
        divider={divider}
        style={{ marginBottom: 32 }}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: \`Tab \${id}\`,
            key: id,
            children: \`Content of tab \${id}\`,
          };
        })}
      />
      <Tabs
        defaultActiveKey="1"
        divider={divider}
        type="card"
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: \`Card Tab \${id}\`,
            key: id,
            children: \`Content of card tab \${id}\`,
          };
        })}
      />
    </div>
  );
};

export default App;
`},22803:function(t,n){"use strict";n.Z=`import type { TabsProps } from '@oceanbase/design';
import { Button, Tabs } from '@oceanbase/design';
import React from 'react';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: \`Tab 1\`,
    children: \`Content of Tab Pane 1\`,
  },
  {
    key: '2',
    label: \`Tab 2\`,
    children: \`Content of Tab Pane 2\`,
  },
  {
    key: '3',
    label: \`Tab 3\`,
    children: \`Content of Tab Pane 3\`,
  },
];

const App: React.FC = () => (
  <Tabs
    defaultActiveKey="1"
    items={items}
    onChange={onChange}
    tabBarExtraContent={<Button>Extra Action</Button>}
  />
);

export default App;
`},5348:function(t,n){"use strict";n.Z=`import React from 'react';
import { AndroidOutlined, AppleOutlined } from '@oceanbase/icons';
import { Tabs } from '@oceanbase/design';

const App: React.FC = () => (
  <Tabs
    defaultActiveKey="2"
    items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
      const id = String(i + 1);
      return {
        key: id,
        label: \`Tab \${id}\`,
        children: \`Tab \${id}\`,
        icon: <Icon />,
      };
    })}
  />
);

export default App;
`},83115:function(t,n){"use strict";n.Z=`import type { RadioChangeEvent } from '@oceanbase/design';
import { Radio, Space, Tabs } from '@oceanbase/design';
import React, { useState } from 'react';

type TabsPosition = 'left' | 'right' | 'top' | 'bottom';

const App: React.FC = () => {
  const [tabPosition, setTabPosition] = useState<TabsPosition>('left');

  const changeTabPosition = (e: RadioChangeEvent) => {
    setTabPosition(e.target.value);
  };

  return (
    <>
      <Space style={{ marginBottom: 24 }}>
        Tab position:
        <Radio.Group value={tabPosition} onChange={changeTabPosition}>
          <Radio.Button value="top">top</Radio.Button>
          <Radio.Button value="bottom">bottom</Radio.Button>
          <Radio.Button value="left">left</Radio.Button>
          <Radio.Button value="right">right</Radio.Button>
        </Radio.Group>
      </Space>
      <Tabs
        tabPosition={tabPosition}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: \`Tab \${id}\`,
            key: id,
            children: \`Content of Tab \${id}\`,
          };
        })}
      />
    </>
  );
};

export default App;
`},29934:function(t,n){"use strict";n.Z=`import type { RadioChangeEvent } from '@oceanbase/design';
import { Radio, Tabs } from '@oceanbase/design';
import React, { useState } from 'react';

type SizeType = 'small' | 'middle' | 'large';

const App: React.FC = () => {
  const [size, setSize] = useState<SizeType>('middle');

  const onChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };

  return (
    <div>
      <Radio.Group value={size} onChange={onChange} style={{ marginBottom: 16 }}>
        <Radio.Button value="small">Small</Radio.Button>
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="large">Large</Radio.Button>
      </Radio.Group>
      <Tabs
        defaultActiveKey="1"
        size={size}
        style={{ marginBottom: 32 }}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: \`Tab \${id}\`,
            key: id,
            children: \`Content of tab \${id}\`,
          };
        })}
      />
      <Tabs
        defaultActiveKey="1"
        type="card"
        size={size}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: \`Card Tab \${id}\`,
            key: id,
            children: \`Content of card tab \${id}\`,
          };
        })}
      />
    </div>
  );
};

export default App;
`},23644:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import type { RadioChangeEvent, TabsProps } from '@oceanbase/design';
import { Radio, Tabs } from '@oceanbase/design';

const App: React.FC = () => {
  const [mode, setMode] = useState<TabsProps['tabPosition']>('top');

  const handleModeChange = (e: RadioChangeEvent) => {
    setMode(e.target.value);
  };

  return (
    <div>
      <Radio.Group onChange={handleModeChange} value={mode} style={{ marginBottom: 8 }}>
        <Radio.Button value="top">Horizontal</Radio.Button>
        <Radio.Button value="left">Vertical</Radio.Button>
      </Radio.Group>
      <Tabs
        defaultActiveKey="1"
        tabPosition={mode}
        style={{ height: 180 }}
        items={Array.from({ length: 30 }, (_, i) => {
          const id = String(i + 1);
          return {
            label: \`Tab \${id}\`,
            key: id,
            children: \`Content of tab \${id}\`,
          };
        })}
      />
    </div>
  );
};

export default App;
`},59371:function(t,n){"use strict";n.Z=`import type { TabsProps } from '@oceanbase/design';
import { Space, Tabs } from '@oceanbase/design';
import React from 'react';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: \`Tab 1\`,
    children: \`Content of Tab Pane 1\`,
  },
  {
    divider: true,
  },
  {
    key: '2',
    label: \`Tab 2\`,
    children: \`Content of Tab Pane 2\`,
  },
  {
    divider: true,
  },
  {
    key: '3',
    label: \`Tab 3\`,
    children: \`Content of Tab Pane 3\`,
  },
];

const App: React.FC = () => (
  <Space direction="vertical" size={32}>
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    <Tabs defaultActiveKey="1" items={items} tabPosition="left" onChange={onChange} />
  </Space>
);

export default App;
`},82660:function(t,n){"use strict";n.Z=`import React from 'react';
import { Tabs } from '@oceanbase/design';

const onChange = (key: string) => {
  console.log(key);
};

const App: React.FC = () => {
  return (
    <Tabs defaultActiveKey="1" onChange={onChange}>
      <Tabs.TabPane key="1" tab="Tab 1" badge={22}>
        Content of Tab Pane 1
      </Tabs.TabPane>
      <Tabs.TabPane divider={true} />
      <Tabs.TabPane key="2" tab="Tab 2" badge={99}>
        Content of Tab Pane 2
      </Tabs.TabPane>
      <Tabs.TabPane divider={true} />
      <Tabs.TabPane key="3" tab="Tab 3" badge={{ count: 0, showZero: true }}>
        Content of Tab Pane 3
      </Tabs.TabPane>
    </Tabs>
  );
};

export default App;
`},11759:function(t,n){"use strict";n.Z=`import { Tag } from '@oceanbase/design';
import React from 'react';

const log = (e: React.MouseEvent<HTMLElement>) => {
  console.log(e);
};

const preventDefault = (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault();
  console.log('Clicked! But prevent default.');
};

const App: React.FC = () => (
  <>
    <Tag>Tag 1</Tag>
    <Tag>
      <a href="https://github.com/oceanbase/oceanbase-design">Link</a>
    </Tag>
    <Tag closable onClose={log}>
      Tag 2
    </Tag>
    <Tag closable onClose={preventDefault}>
      Prevent Default
    </Tag>
  </>
);

export default App;
`},34556:function(t,n){"use strict";n.Z=`import React from 'react';
import { Divider, Space, Tag } from '@oceanbase/design';

const App: React.FC = () => {
  return (
    <>
      <Space size={[0, 'small']} wrap>
        <Tag bordered={false}>Tag 1</Tag>
        <Tag bordered={false}>Tag 2</Tag>
        <Tag bordered={false} closable>
          Tag 3
        </Tag>
        <Tag bordered={false} closable>
          Tag 4
        </Tag>
      </Space>
      <Divider />
      <Space size={[0, 'small']} wrap>
        <Tag bordered={false} color="processing">
          processing
        </Tag>
        <Tag bordered={false} color="success">
          success
        </Tag>
        <Tag bordered={false} color="warning">
          warning
        </Tag>
        <Tag bordered={false} color="error">
          error
        </Tag>
        <Tag bordered={false} color="critical">
          critical
        </Tag>
        <Tag bordered={false} color="magenta">
          magenta
        </Tag>
        <Tag bordered={false} color="red">
          red
        </Tag>
        <Tag bordered={false} color="volcano">
          volcano
        </Tag>
        <Tag bordered={false} color="orange">
          orange
        </Tag>
        <Tag bordered={false} color="gold">
          gold
        </Tag>
        <Tag bordered={false} color="lime">
          lime
        </Tag>
        <Tag bordered={false} color="green">
          green
        </Tag>
        <Tag bordered={false} color="cyan">
          cyan
        </Tag>
        <Tag bordered={false} color="blue">
          blue
        </Tag>
        <Tag bordered={false} color="geekblue">
          geekblue
        </Tag>
        <Tag bordered={false} color="purple">
          purple
        </Tag>
      </Space>
    </>
  );
};

export default App;
`},26765:function(t,n){"use strict";n.Z=`import { Tag } from '@oceanbase/design';
import React, { useState } from 'react';

const { CheckableTag } = Tag;

const tagsData = ['Movies', 'Books', 'Music', 'Sports'];

const App: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>(['Books']);

  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };

  return (
    <>
      <span style={{ marginRight: 8 }}>Categories:</span>
      {tagsData.map(tag => (
        <CheckableTag
          key={tag}
          checked={selectedTags.indexOf(tag) > -1}
          onChange={checked => handleChange(tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
    </>
  );
};

export default App;
`},40836:function(t,n){"use strict";n.Z=`import { Tag, Divider } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <>
    <Divider orientation="left">Presets</Divider>
    <div>
      <Tag color="magenta">magenta</Tag>
      <Tag color="red">red</Tag>
      <Tag color="volcano">volcano</Tag>
      <Tag color="orange">orange</Tag>
      <Tag color="gold">gold</Tag>
      <Tag color="lime">lime</Tag>
      <Tag color="green">green</Tag>
      <Tag color="cyan">cyan</Tag>
      <Tag color="blue">blue</Tag>
      <Tag color="geekblue">geekblue</Tag>
      <Tag color="purple">purple</Tag>
    </div>
    <Divider orientation="left">Custom</Divider>
    <div>
      <Tag color="#f50">#f50</Tag>
      <Tag color="#2db7f5">#2db7f5</Tag>
      <Tag color="#87d068">#87d068</Tag>
      <Tag color="#108ee9">#108ee9</Tag>
    </div>
  </>
);

export default App;
`},79767:function(t,n){"use strict";n.Z=`import React, { useEffect, useRef, useState } from 'react';
import type { InputRef } from '@oceanbase/design';
import { Flex, Input, Tag, theme, Tooltip } from '@oceanbase/design';
import { PlusOutlined } from '@oceanbase/icons';

const tagInputStyle: React.CSSProperties = {
  width: 64,
  height: 22,
  marginInlineEnd: 8,
  verticalAlign: 'top',
};

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [tags, setTags] = useState<string[]>(['Unremovable', 'Tag 2', 'Tag 3']);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState('');
  const inputRef = useRef<InputRef>(null);
  const editInputRef = useRef<InputRef>(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  useEffect(() => {
    editInputRef.current?.focus();
  }, [editInputValue]);

  const handleClose = (removedTag: string) => {
    const newTags = tags.filter(tag => tag !== removedTag);
    console.log(newTags);
    setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && !tags.includes(inputValue)) {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue('');
  };

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditInputValue(e.target.value);
  };

  const handleEditInputConfirm = () => {
    const newTags = [...tags];
    newTags[editInputIndex] = editInputValue;
    setTags(newTags);
    setEditInputIndex(-1);
    setEditInputValue('');
  };

  const tagPlusStyle: React.CSSProperties = {
    height: 22,
    background: token.colorBgContainer,
    borderStyle: 'dashed',
  };

  return (
    <Flex gap="4px 0" wrap>
      {tags.map<React.ReactNode>((tag, index) => {
        if (editInputIndex === index) {
          return (
            <Input
              ref={editInputRef}
              key={tag}
              size="small"
              style={tagInputStyle}
              value={editInputValue}
              onChange={handleEditInputChange}
              onBlur={handleEditInputConfirm}
              onPressEnter={handleEditInputConfirm}
            />
          );
        }
        const isLongTag = tag.length > 20;
        const tagElem = (
          <Tag
            key={tag}
            closable={index !== 0}
            style={{ userSelect: 'none' }}
            onClose={() => handleClose(tag)}
          >
            <span
              onDoubleClick={e => {
                if (index !== 0) {
                  setEditInputIndex(index);
                  setEditInputValue(tag);
                  e.preventDefault();
                }
              }}
            >
              {isLongTag ? \`\${tag.slice(0, 20)}...\` : tag}
            </span>
          </Tag>
        );
        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        );
      })}
      {inputVisible ? (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          style={tagInputStyle}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      ) : (
        <Tag style={tagPlusStyle} icon={<PlusOutlined />} onClick={showInput}>
          New Tag
        </Tag>
      )}
    </Flex>
  );
};

export default App;
`},51552:function(t,n){"use strict";n.Z=`import { CheckCircleOutlined } from '@oceanbase/icons';
import { Space, Tag } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Tag ellipsis="css">
      Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for
      excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show
      ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for
      excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.
    </Tag>
    <Tag ellipsis="css" icon={<CheckCircleOutlined />} closable>
      Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for
      excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show
      ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for
      excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.
    </Tag>
    <Tag
      ellipsis="css"
      title="This is custom title"
      style={{
        width: 400,
      }}
    >
      Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for
      excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show
      ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for
      excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.
    </Tag>
  </Space>
);

export default App;
`},36015:function(t,n){"use strict";n.Z=`import { CheckCircleOutlined } from '@oceanbase/icons';
import { Space, Tag } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Tag>
      Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for
      excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show
      ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for
      excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.
    </Tag>
    <Tag icon={<CheckCircleOutlined />} closable>
      Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for
      excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show
      ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for
      excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.
    </Tag>
    <Tag
      icon={<CheckCircleOutlined />}
      closable
      ellipsis={{
        tooltip: {
          placement: 'topLeft',
          title: 'This is custom tooltip',
        },
      }}
      style={{
        width: 400,
      }}
    >
      Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for
      excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show
      ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for
      excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.
    </Tag>
  </Space>
);

export default App;
`},39528:function(t,n){"use strict";n.Z=`import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from '@oceanbase/icons';
import { Tag } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <>
    <Tag icon={<TwitterOutlined />} color="#55acee">
      Twitter
    </Tag>
    <Tag icon={<YoutubeOutlined />} color="#cd201f">
      Youtube
    </Tag>
    <Tag icon={<FacebookOutlined />} color="#3b5999">
      Facebook
    </Tag>
    <Tag icon={<LinkedinOutlined />} color="#55acee">
      LinkedIn
    </Tag>
  </>
);

export default App;
`},46496:function(t,n){"use strict";n.Z=`import { TagOutlined } from '@oceanbase/icons';
import { Tag } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <>
    <Tag pill>ID</Tag>
    <Tag pill icon={<TagOutlined />}>
      1
    </Tag>
    <Tag pill closable>
      Tag
    </Tag>
    <Tag pill color="success">
      success
    </Tag>
    <Tag pill color="processing">
      processing
    </Tag>
    <Tag pill color="warning">
      warning
    </Tag>
    <Tag pill color="error">
      error
    </Tag>
    <Tag pill color="critical">
      critical
    </Tag>
  </>
);

export default App;
`},58215:function(t,n){"use strict";n.Z=`import React from 'react';
import { Tag } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Tag color="default">default</Tag>
    <Tag color="success">success</Tag>
    <Tag color="processing">processing</Tag>
    <Tag color="warning">warning</Tag>
    <Tag color="error">error</Tag>
    <Tag color="critical">critical</Tag>
  </>
);

export default App;
`},3115:function(t,n){"use strict";n.Z=`import React from 'react';
import type { TimePickerProps } from 'antd';
import { TimePicker } from 'antd';

const onChange: TimePickerProps['onChange'] = (time, timeString) => {
  console.log(time, timeString);
};

const App: React.FC = () => <TimePicker onChange={onChange} />;

export default App;
`},23354:function(t,n){"use strict";n.Z=`import React from 'react';
import { TimePicker } from '@oceanbase/design';
import dayjs from 'dayjs';

const App: React.FC = () => <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} disabled />;

export default App;
`},20658:function(t,n){"use strict";n.Z=`import React from 'react';
import { TimePicker } from '@oceanbase/design';
import dayjs from 'dayjs';

const format = 'HH:mm';

const App: React.FC = () => <TimePicker defaultValue={dayjs('12:08', format)} format={format} />;

export default App;
`},24875:function(t,n){"use strict";n.Z=`import React from 'react';
import { TimePicker } from '@oceanbase/design';

const App: React.FC = () => (
  <TimePicker.RangePicker
    onChange={(times, timeStrings) => {
      console.log(times, timeStrings);
    }}
  />
);

export default App;
`},48971:function(t,n){"use strict";n.Z=`import { Tooltip } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <Tooltip title="This is prompt text">
    <span>Tooltip will show on mouse enter.</span>
  </Tooltip>
);

export default App;
`},45570:function(t,n){"use strict";n.Z=`import { Button, Space, Tooltip, message } from '@oceanbase/design';
import { CloseCircleOutlined, ReloadOutlined, SyncOutlined } from '@oceanbase/icons';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(true);

  return (
    <Space size={24}>
      <Tooltip
        title="This is prompt text"
        open={open1}
        closeIcon={true}
        onClose={() => {
          setOpen1(false);
          message.success('Default close icon is clicked');
        }}
      >
        <Button>Default close icon</Button>
      </Tooltip>
      <Tooltip
        title="This is prompt text"
        open={open2}
        closeIcon={<CloseCircleOutlined />}
        onClose={() => {
          setOpen2(false);
          message.success('Custom close icon is clicked');
        }}
      >
        <Button>Custom close icon</Button>
      </Tooltip>
      <Button
        icon={<ReloadOutlined />}
        onClick={() => {
          setOpen1(true);
          setOpen2(true);
        }}
      >
        Reset
      </Button>
    </Space>
  );
};

export default App;
`},37630:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Space, Tooltip } from '@oceanbase/design';

const App: React.FC = () => {
  return (
    <Space direction="vertical" size="small">
      <div>Custom offset (offset: [50, -50])</div>
      <Space>
        <Tooltip title="Offset 50px to the right, 50px up" align={{ offset: [50, -50] }}>
          <Button>Hover me</Button>
        </Tooltip>
      </Space>
    </Space>
  );
};

export default App;
`},94949:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Card, Col, Row, Tooltip, Radio, Form } from '@oceanbase/design';
import type { TooltipType } from '@oceanbase/design/es/tooltip';

const App: React.FC = () => {
  const [type, setType] = useState<TooltipType>('default');
  return (
    <div>
      <Form style={{ marginBottom: 24 }}>
        <Form.Item label="type" required={true}>
          <Radio.Group
            value={type}
            onChange={e => {
              setType(e.target.value);
            }}
          >
            <Radio.Button value="default">default</Radio.Button>
            <Radio.Button value="success">success</Radio.Button>
            <Radio.Button value="info">info</Radio.Button>
            <Radio.Button value="warning">warning</Radio.Button>
            <Radio.Button value="error">error</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <Row gutter={24}>
        <Col span={12}>
          <Tooltip title="This is prompt text" type={type} mouseFollow={true}>
            <Card
              bodyStyle={{
                textAlign: 'center',
                padding: '100px 24px',
              }}
            >
              <h2>Normal content</h2>
              <div>Tooltip is positioned at the bottom-right of the cursor by default</div>
            </Card>
          </Tooltip>
        </Col>
        <Col span={12}>
          <Tooltip
            title="This is prompt text. This is prompt text. This is prompt text. This is prompt text. This is prompt text."
            type={type}
            mouseFollow={true}
          >
            <Card
              bodyStyle={{
                textAlign: 'center',
                padding: '100px 24px',
              }}
            >
              <h2>Long content</h2>
              <div>Tooltip position adjusts automatically as the mouse moves</div>
            </Card>
          </Tooltip>
        </Col>
      </Row>
    </div>
  );
};

export default App;
`},28011:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Space, Switch, Tooltip } from '@oceanbase/design';

const App: React.FC = () => {
  const [custom, setCustom] = useState(false);
  return (
    <Space size={16} direction="vertical">
      <Space>
        max-width and max-height:
        <Switch
          value={custom}
          size="small"
          onChange={value => {
            setCustom(value);
          }}
        />
      </Space>
      <Tooltip
        overlayStyle={custom ? { maxWidth: 800 } : {}}
        overlayInnerStyle={custom ? { maxHeight: 400 } : {}}
        title="This is long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long  long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long  long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long  long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long text."
      >
        <span>Tooltip will show on mouse enter.</span>
      </Tooltip>
    </Space>
  );
};

export default App;
`},88189:function(t,n){"use strict";n.Z=`import { Button, Space, Tooltip } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space>
      <Tooltip title="This is prompt text">
        <Button>Default</Button>
      </Tooltip>
      <Tooltip title="This is prompt text" type="info">
        <Button>Info</Button>
      </Tooltip>
      <Tooltip title="This is prompt text" type="success">
        <Button>Success</Button>
      </Tooltip>
      <Tooltip title="This is prompt text" type="warning">
        <Button>Warning</Button>
      </Tooltip>
      <Tooltip title="This is prompt text" type="error">
        <Button>Error</Button>
      </Tooltip>
    </Space>
  );
};

export default App;
`},11219:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Transfer } from '@oceanbase/design';
import type { TransferProps } from '@oceanbase/design';

interface RecordType {
  key: string;
  title: string;
  description: string;
}

const mockData = Array.from({ length: 20 }).map<RecordType>((_, i) => ({
  key: i.toString(),
  title: \`content\${i + 1}\`,
  description: \`description of content\${i + 1}\`,
}));

const initialTargetKeys = mockData.filter(item => Number(item.key) > 10).map(item => item.key);

const App: React.FC = () => {
  const [targetKeys, setTargetKeys] = useState<TransferProps['targetKeys']>(initialTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState<TransferProps['targetKeys']>([]);

  const onChange: TransferProps['onChange'] = (nextTargetKeys, direction, moveKeys) => {
    console.log('targetKeys:', nextTargetKeys);
    console.log('direction:', direction);
    console.log('moveKeys:', moveKeys);
    setTargetKeys(nextTargetKeys);
  };

  const onSelectChange: TransferProps['onSelectChange'] = (
    sourceSelectedKeys,
    targetSelectedKeys
  ) => {
    console.log('sourceSelectedKeys:', sourceSelectedKeys);
    console.log('targetSelectedKeys:', targetSelectedKeys);
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  const onScroll: TransferProps['onScroll'] = (direction, e) => {
    console.log('direction:', direction);
    console.log('target:', e.target);
  };

  return (
    <Transfer
      dataSource={mockData}
      titles={['Source', 'Target']}
      targetKeys={targetKeys}
      selectedKeys={selectedKeys}
      onChange={onChange}
      onSelectChange={onSelectChange}
      onScroll={onScroll}
      render={item => item.title}
    />
  );
};

export default App;
`},37594:function(t,n){"use strict";n.Z=`import React, { useEffect, useState } from 'react';
import { Transfer } from '@oceanbase/design';
import type { TransferProps } from '@oceanbase/design';

interface RecordType {
  key: string;
  title: string;
  description: string;
  chosen: boolean;
}

const App: React.FC = () => {
  const [mockData, setMockData] = useState<RecordType[]>([]);
  const [targetKeys, setTargetKeys] = useState<React.Key[]>([]);

  const getMock = () => {
    const tempTargetKeys = [];
    const tempMockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: \`content\${i + 1}\`,
        description: \`description of content\${i + 1}\`,
        chosen: i % 2 === 0,
      };
      if (data.chosen) {
        tempTargetKeys.push(data.key);
      }
      tempMockData.push(data);
    }
    setMockData(tempMockData);
    setTargetKeys(tempTargetKeys);
  };

  useEffect(() => {
    getMock();
  }, []);

  const handleChange: TransferProps['onChange'] = (newTargetKeys, direction, moveKeys) => {
    console.log(newTargetKeys, direction, moveKeys);
    setTargetKeys(newTargetKeys);
  };

  const renderItem = (item: RecordType) => {
    const customLabel = (
      <span className="custom-item">
        {item.title} - {item.description}
      </span>
    );

    return {
      label: customLabel, // for displayed item
      value: item.title, // for title and filter matching
    };
  };

  return (
    <Transfer
      dataSource={mockData}
      styles={{
        section: {
          width: 300,
          height: 300,
        },
      }}
      targetKeys={targetKeys}
      onChange={handleChange}
      render={renderItem}
    />
  );
};

export default App;
`},44731:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Switch, Transfer } from '@oceanbase/design';
import type { TransferProps } from '@oceanbase/design';

interface RecordType {
  key: string;
  title: string;
  description: string;
  disabled: boolean;
}

const mockData = Array.from({ length: 20 }).map<RecordType>((_, i) => ({
  key: i.toString(),
  title: \`content\${i + 1}\`,
  description: \`description of content\${i + 1}\`,
  disabled: i % 3 < 1,
}));

const oriTargetKeys = mockData.filter(item => Number(item.key) % 3 > 1).map(item => item.key);

const App: React.FC = () => {
  const [targetKeys, setTargetKeys] = useState<React.Key[]>(oriTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
  const [disabled, setDisabled] = useState(false);

  const handleChange: TransferProps['onChange'] = (newTargetKeys, direction, moveKeys) => {
    setTargetKeys(newTargetKeys);

    console.log('targetKeys: ', newTargetKeys);
    console.log('direction: ', direction);
    console.log('moveKeys: ', moveKeys);
  };

  const handleSelectChange: TransferProps['onSelectChange'] = (
    sourceSelectedKeys,
    targetSelectedKeys
  ) => {
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);

    console.log('sourceSelectedKeys: ', sourceSelectedKeys);
    console.log('targetSelectedKeys: ', targetSelectedKeys);
  };

  const handleScroll: TransferProps['onScroll'] = (direction, e) => {
    console.log('direction:', direction);
    console.log('target:', e.target);
  };

  const handleDisable = (checked: boolean) => {
    setDisabled(checked);
  };

  return (
    <>
      <Transfer
        dataSource={mockData}
        titles={['Source', 'Target']}
        targetKeys={targetKeys}
        selectedKeys={selectedKeys}
        onChange={handleChange}
        onSelectChange={handleSelectChange}
        onScroll={handleScroll}
        render={item => item.title}
        disabled={disabled}
        oneWay
        style={{ marginBottom: 16 }}
      />
      <Switch
        unCheckedChildren="disabled"
        checkedChildren="disabled"
        checked={disabled}
        onChange={handleDisable}
      />
    </>
  );
};

export default App;
`},79484:function(t,n){"use strict";n.Z=`import React, { useEffect, useState } from 'react';
import { Transfer } from '@oceanbase/design';
import type { TransferProps } from '@oceanbase/design';

interface RecordType {
  key: string;
  title: string;
  description: string;
  chosen: boolean;
}

const App: React.FC = () => {
  const [mockData, setMockData] = useState<RecordType[]>([]);
  const [targetKeys, setTargetKeys] = useState<TransferProps['targetKeys']>([]);

  const getMock = () => {
    const tempTargetKeys = [];
    const tempMockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: \`content\${i + 1}\`,
        description: \`description of content\${i + 1}\`,
        chosen: i % 2 === 0,
      };
      if (data.chosen) {
        tempTargetKeys.push(data.key);
      }
      tempMockData.push(data);
    }
    setMockData(tempMockData);
    setTargetKeys(tempTargetKeys);
  };

  useEffect(() => {
    getMock();
  }, []);

  const filterOption = (inputValue: string, option: RecordType) =>
    option.description.includes(inputValue);

  const handleChange: TransferProps['onChange'] = newTargetKeys => {
    setTargetKeys(newTargetKeys);
  };

  const handleSearch: TransferProps['onSearch'] = (dir, value) => {
    console.log('search:', dir, value);
  };

  return (
    <Transfer
      dataSource={mockData}
      showSearch
      filterOption={filterOption}
      targetKeys={targetKeys}
      onChange={handleChange}
      onSearch={handleSearch}
      render={item => item.title}
    />
  );
};

export default App;
`},15268:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Flex, Switch, Table, Tag, Transfer } from '@oceanbase/design';
import type { GetProp, TableColumnsType, TableProps, TransferProps } from '@oceanbase/design';

type TransferItem = GetProp<TransferProps, 'dataSource'>[number];
type TableRowSelection<T extends object> = TableProps<T>['rowSelection'];

interface DataType {
  key: string;
  title: string;
  description: string;
  tag: string;
}

interface TableTransferProps extends TransferProps<TransferItem> {
  dataSource: DataType[];
  leftColumns: TableColumnsType<DataType>;
  rightColumns: TableColumnsType<DataType>;
}

// Customize Table Transfer
const TableTransfer: React.FC<TableTransferProps> = props => {
  const { leftColumns, rightColumns, ...restProps } = props;
  return (
    <Transfer style={{ width: '100%' }} {...restProps}>
      {({
        direction,
        filteredItems,
        onItemSelect,
        onItemSelectAll,
        selectedKeys: listSelectedKeys,
        disabled: listDisabled,
      }) => {
        const columns = direction === 'left' ? leftColumns : rightColumns;
        const rowSelection: TableRowSelection<TransferItem> = {
          getCheckboxProps: () => ({ disabled: listDisabled }),
          onChange(selectedRowKeys) {
            onItemSelectAll(selectedRowKeys, 'replace');
          },
          selectedRowKeys: listSelectedKeys,
          selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT, Table.SELECTION_NONE],
        };

        return (
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={filteredItems}
            size="small"
            style={{ pointerEvents: listDisabled ? 'none' : undefined }}
            onRow={({ key, disabled: itemDisabled }) => ({
              onClick: () => {
                if (itemDisabled || listDisabled) {
                  return;
                }
                onItemSelect(key, !listSelectedKeys.includes(key));
              },
            })}
          />
        );
      }}
    </Transfer>
  );
};

const mockTags = ['cat', 'dog', 'bird'];

const mockData = Array.from({ length: 20 }).map<DataType>((_, i) => ({
  key: i.toString(),
  title: \`content\${i + 1}\`,
  description: \`description of content\${i + 1}\`,
  tag: mockTags[i % 3],
}));

const columns: TableColumnsType<DataType> = [
  {
    dataIndex: 'title',
    title: 'Name',
  },
  {
    dataIndex: 'tag',
    title: 'Tag',
    render: (tag: string) => (
      <Tag style={{ marginInlineEnd: 0 }} color="cyan">
        {tag.toUpperCase()}
      </Tag>
    ),
  },
  {
    dataIndex: 'description',
    title: 'Description',
  },
];

const filterOption = (input: string, item: DataType) =>
  item.title?.includes(input) || item.tag?.includes(input);

const App: React.FC = () => {
  const [targetKeys, setTargetKeys] = useState<TransferProps['targetKeys']>([]);
  const [disabled, setDisabled] = useState(false);

  const onChange: TableTransferProps['onChange'] = nextTargetKeys => {
    setTargetKeys(nextTargetKeys);
  };

  const toggleDisabled = (checked: boolean) => {
    setDisabled(checked);
  };

  return (
    <Flex align="start" gap="middle" vertical>
      <TableTransfer
        dataSource={mockData}
        targetKeys={targetKeys}
        disabled={disabled}
        showSearch
        showSelectAll={false}
        onChange={onChange}
        filterOption={filterOption}
        leftColumns={columns}
        rightColumns={columns}
      />
      <Switch
        unCheckedChildren="disabled"
        checkedChildren="disabled"
        checked={disabled}
        onChange={toggleDisabled}
      />
    </Flex>
  );
};

export default App;
`},48913:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { theme, Transfer, Tree } from '@oceanbase/design';
import type { GetProp, TransferProps, TreeDataNode } from '@oceanbase/design';

type TransferItem = GetProp<TransferProps, 'dataSource'>[number];

interface TreeTransferProps {
  dataSource: TreeDataNode[];
  targetKeys: TransferProps['targetKeys'];
  onChange: TransferProps['onChange'];
}

// Customize Table Transfer
const isChecked = (selectedKeys: React.Key[], eventKey: React.Key) =>
  selectedKeys.includes(eventKey);

const generateTree = (
  treeNodes: TreeDataNode[] = [],
  checkedKeys: TreeTransferProps['targetKeys'] = []
): TreeDataNode[] =>
  treeNodes.map(({ children, ...props }) => ({
    ...props,
    disabled: checkedKeys.includes(props.key as string),
    children: generateTree(children, checkedKeys),
  }));

const TreeTransfer: React.FC<TreeTransferProps> = ({
  dataSource,
  targetKeys = [],
  ...restProps
}) => {
  const { token } = theme.useToken();

  const transferDataSource: TransferItem[] = [];
  function flatten(list: TreeDataNode[] = []) {
    list.forEach(item => {
      transferDataSource.push(item as TransferItem);
      flatten(item.children);
    });
  }
  flatten(dataSource);

  return (
    <Transfer
      {...restProps}
      targetKeys={targetKeys}
      dataSource={transferDataSource}
      className="tree-transfer"
      render={item => item.title!}
      showSelectAll={false}
    >
      {({ direction, onItemSelect, selectedKeys }) => {
        if (direction === 'left') {
          const checkedKeys = [...selectedKeys, ...targetKeys];
          return (
            <div style={{ padding: token.paddingXS }}>
              <Tree
                blockNode
                checkable
                checkStrictly
                defaultExpandAll
                checkedKeys={checkedKeys}
                treeData={generateTree(dataSource, targetKeys)}
                onCheck={(_, { node: { key } }) => {
                  onItemSelect(key as string, !isChecked(checkedKeys, key));
                }}
                onSelect={(_, { node: { key } }) => {
                  onItemSelect(key as string, !isChecked(checkedKeys, key));
                }}
              />
            </div>
          );
        }
      }}
    </Transfer>
  );
};

const treeData: TreeDataNode[] = [
  { key: '0-0', title: '0-0' },
  {
    key: '0-1',
    title: '0-1',
    children: [
      { key: '0-1-0', title: '0-1-0' },
      { key: '0-1-1', title: '0-1-1' },
    ],
  },
  { key: '0-2', title: '0-2' },
  { key: '0-3', title: '0-3' },
  { key: '0-4', title: '0-4' },
];

const App: React.FC = () => {
  const [targetKeys, setTargetKeys] = useState<TreeTransferProps['targetKeys']>([]);
  const onChange: TreeTransferProps['onChange'] = keys => {
    setTargetKeys(keys);
  };
  return <TreeTransfer dataSource={treeData} targetKeys={targetKeys} onChange={onChange} />;
};

export default App;
`},45529:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { TreeSelect, theme } from '@oceanbase/design';

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [value, setValue] = useState<string>();

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  const treeData = [
    {
      value: 'parent 1',
      title: 'parent 1',
      children: [
        {
          value: 'parent 1-0',
          title: 'parent 1-0',
          children: [
            {
              value: 'leaf1',
              title: 'leaf1',
            },
            {
              value: 'leaf2',
              title: 'leaf2',
            },
          ],
        },
        {
          value: 'parent 1-1',
          title: 'parent 1-1',
          children: [
            {
              value: 'leaf3',
              title: <b style={{ color: token.colorInfo }}>leaf3</b>,
            },
          ],
        },
      ],
    },
  ];

  return (
    <TreeSelect
      showSearch
      allowClear
      treeDefaultExpandAll
      treeData={treeData}
      value={value}
      onChange={onChange}
      style={{ width: '100%' }}
    />
  );
};

export default App;
`},30295:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { TreeSelect } from '@oceanbase/design';

const { SHOW_PARENT } = TreeSelect;

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];

const App: React.FC = () => {
  const [value, setValue] = useState(['0-0-0']);

  const onChange = (newValue: string[]) => {
    console.log('onChange ', newValue);
    setValue(newValue);
  };

  const tProps = {
    treeData,
    value,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: 'Please select',
    style: {
      width: '100%',
    },
  };

  return <TreeSelect {...tProps} />;
};

export default App;
`},33731:function(t,n){"use strict";n.Z=`import React from 'react';
import { CarryOutOutlined } from '@oceanbase/icons';
import { TreeSelect } from '@oceanbase/design';

const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    icon: <CarryOutOutlined />,
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        icon: <CarryOutOutlined />,
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
            icon: <CarryOutOutlined />,
          },
          {
            value: 'leaf2',
            title: 'leaf2',
            icon: <CarryOutOutlined />,
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        icon: <CarryOutOutlined />,
        children: [
          {
            value: 'sss',
            title: 'sss',
            icon: <CarryOutOutlined />,
          },
        ],
      },
    ],
  },
];

const App: React.FC = () => {
  return <TreeSelect treeLine={true} treeData={treeData} style={{ width: 300 }} />;
};

export default App;
`},92349:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import type { GetProp, TreeSelectProps } from '@oceanbase/design';
import { TreeSelect } from '@oceanbase/design';

type DefaultOptionType = GetProp<TreeSelectProps, 'treeData'>[number];

const App: React.FC = () => {
  const [value, setValue] = useState<string>();
  const [treeData, setTreeData] = useState<Omit<DefaultOptionType, 'label'>[]>([
    { id: 1, pId: 0, value: '1', title: 'Expand to load' },
    { id: 2, pId: 0, value: '2', title: 'Expand to load' },
    { id: 3, pId: 0, value: '3', title: 'Tree Node', isLeaf: true },
  ]);

  const genTreeNode = (parentId: number, isLeaf = false) => {
    const random = Math.random().toString(36).substring(2, 6);
    return {
      id: random,
      pId: parentId,
      value: random,
      title: isLeaf ? 'Tree Node' : 'Expand to load',
      isLeaf,
    };
  };

  const onLoadData: TreeSelectProps['loadData'] = ({ id }) =>
    new Promise(resolve => {
      setTimeout(() => {
        setTreeData(
          treeData.concat([genTreeNode(id, false), genTreeNode(id, true), genTreeNode(id, true)])
        );
        resolve(undefined);
      }, 300);
    });

  const onChange = (newValue: string) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <TreeSelect
      treeDataSimpleMode
      style={{ width: '100%' }}
      value={value}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      placeholder="Please select"
      onChange={onChange}
      loadData={onLoadData}
      treeData={treeData}
    />
  );
};

export default App;
`},32332:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { TreeSelect, theme } from '@oceanbase/design';

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [value, setValue] = useState<string>();

  const onChange = (newValue: string) => {
    console.log(newValue);
    setValue(newValue);
  };

  const treeData = [
    {
      value: 'parent 1',
      title: 'parent 1',
      children: [
        {
          value: 'parent 1-0',
          title: 'parent 1-0',
          children: [
            {
              value: 'leaf1',
              title: 'my leaf',
            },
            {
              value: 'leaf2',
              title: 'your leaf',
            },
          ],
        },
        {
          value: 'parent 1-1',
          title: 'parent 1-1',
          children: [
            {
              value: 'sss',
              title: <b style={{ color: token.colorInfo }}>sss</b>,
            },
          ],
        },
      ],
    },
  ];

  return (
    <TreeSelect
      multiple
      showSearch
      allowClear
      treeDefaultExpandAll
      treeData={treeData}
      value={value}
      onChange={onChange}
      style={{ width: '100%' }}
    />
  );
};

export default App;
`},32626:function(t,n){"use strict";n.Z=`import React from 'react';
import { Tree } from '@oceanbase/design';
import type { TreeDataNode, TreeProps } from '@oceanbase/design';

const treeData: TreeDataNode[] = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            disableCheckbox: true,
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [{ title: <span style={{ color: '#1677ff' }}>sss</span>, key: '0-0-1-0' }],
      },
    ],
  },
];

const App: React.FC = () => {
  const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  const onCheck: TreeProps['onCheck'] = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

  return (
    <Tree
      checkable
      defaultExpandedKeys={['0-0-0', '0-0-1']}
      defaultSelectedKeys={['0-0-1']}
      defaultCheckedKeys={['0-0-0', '0-0-1']}
      onSelect={onSelect}
      onCheck={onCheck}
      treeData={treeData}
    />
  );
};

export default App;
`},45161:function(t,n){"use strict";n.Z=`import React from 'react';
import { Tree } from '@oceanbase/design';
import type { GetProps, TreeDataNode } from '@oceanbase/design';

type DirectoryTreeProps = GetProps<typeof Tree.DirectoryTree>;

const { DirectoryTree } = Tree;

const treeData: TreeDataNode[] = [
  {
    title: 'parent 0',
    key: '0-0',
    children: [
      { title: 'leaf 0-0', key: '0-0-0', isLeaf: true },
      { title: 'leaf 0-1', key: '0-0-1', isLeaf: true },
    ],
  },
  {
    title: 'parent 1',
    key: '0-1',
    children: [
      { title: 'leaf 1-0', key: '0-1-0', isLeaf: true },
      { title: 'leaf 1-1', key: '0-1-1', isLeaf: true },
    ],
  },
];

const App: React.FC = () => {
  const onSelect: DirectoryTreeProps['onSelect'] = (keys, info) => {
    console.log('Trigger Select', keys, info);
  };

  const onExpand: DirectoryTreeProps['onExpand'] = (keys, info) => {
    console.log('Trigger Expand', keys, info);
  };

  return (
    <DirectoryTree defaultExpandAll onSelect={onSelect} onExpand={onExpand} treeData={treeData} />
  );
};

export default App;
`},58857:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Tree } from '@oceanbase/design';
import type { TreeDataNode, TreeProps } from '@oceanbase/design';

const x = 3;
const y = 2;
const z = 1;
const defaultData: TreeDataNode[] = [];

const generateData = (_level: number, _preKey?: React.Key, _tns?: TreeDataNode[]) => {
  const preKey = _preKey || '0';
  const tns = _tns || defaultData;

  const children: React.Key[] = [];
  for (let i = 0; i < x; i++) {
    const key = \`\${preKey}-\${i}\`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);

const App: React.FC = () => {
  const [gData, setGData] = useState(defaultData);
  const [expandedKeys] = useState(['0-0', '0-0-0', '0-0-0-0']);

  const onDragEnter: TreeProps['onDragEnter'] = info => {
    console.log(info);
    // expandedKeys, set it when controlled is needed
    // setExpandedKeys(info.expandedKeys)
  };

  const onDrop: TreeProps['onDrop'] = info => {
    console.log(info);
    const dropKey = info.node.key;
    const dragKey = info.dragNode.key;
    const dropPos = info.node.pos.split('-');
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]); // the drop position relative to the drop node, inside 0, top -1, bottom 1

    const loop = (
      data: TreeDataNode[],
      key: React.Key,
      callback: (node: TreeDataNode, i: number, data: TreeDataNode[]) => void
    ) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].key === key) {
          return callback(data[i], i, data);
        }
        if (data[i].children) {
          loop(data[i].children!, key, callback);
        }
      }
    };
    const data = [...gData];

    // Find dragObject
    let dragObj: TreeDataNode;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });

    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, item => {
        item.children = item.children || [];
        // where to insert. New item was inserted to the start of the array in this example, but can be anywhere
        item.children.unshift(dragObj);
      });
    } else {
      let ar: TreeDataNode[] = [];
      let i: number;
      loop(data, dropKey, (_item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        // Drop on the top of the drop node
        ar.splice(i!, 0, dragObj!);
      } else {
        // Drop on the bottom of the drop node
        ar.splice(i! + 1, 0, dragObj!);
      }
    }
    setGData(data);
  };

  return (
    <Tree
      className="draggable-tree"
      defaultExpandedKeys={expandedKeys}
      draggable
      blockNode
      onDragEnter={onDragEnter}
      onDrop={onDrop}
      treeData={gData}
    />
  );
};

export default App;
`},64976:function(t,n){"use strict";n.Z=`import React from 'react';
import { CarryOutOutlined, FormOutlined } from '@oceanbase/icons';
import { Tree } from '@oceanbase/design';
import type { TreeDataNode } from '@oceanbase/design';

const treeData: TreeDataNode[] = [
  {
    title: 'parent 1',
    key: '0-0',
    icon: <CarryOutOutlined />,
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        icon: <CarryOutOutlined />,
        children: [
          { title: 'leaf', key: '0-0-0-0', icon: <CarryOutOutlined /> },
          {
            title: (
              <>
                <div>multiple line title</div>
                <div>multiple line title</div>
              </>
            ),
            key: '0-0-0-1',
            icon: <CarryOutOutlined />,
          },
          { title: 'leaf', key: '0-0-0-2', icon: <CarryOutOutlined /> },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        icon: <CarryOutOutlined />,
        children: [{ title: 'leaf', key: '0-0-1-0', icon: <CarryOutOutlined /> }],
      },
      {
        title: 'parent 1-2',
        key: '0-0-2',
        icon: <CarryOutOutlined />,
        children: [
          { title: 'leaf', key: '0-0-2-0', icon: <CarryOutOutlined /> },
          {
            title: 'leaf',
            key: '0-0-2-1',
            icon: <CarryOutOutlined />,
            switcherIcon: <FormOutlined />,
          },
        ],
      },
    ],
  },
  {
    title: 'parent 2',
    key: '0-1',
    icon: <CarryOutOutlined />,
    children: [
      {
        title: 'parent 2-0',
        key: '0-1-0',
        icon: <CarryOutOutlined />,
        children: [
          { title: 'leaf', key: '0-1-0-0', icon: <CarryOutOutlined /> },
          { title: 'leaf', key: '0-1-0-1', icon: <CarryOutOutlined /> },
        ],
      },
    ],
  },
];

const App: React.FC = () => {
  const onSelect = (selectedKeys: React.Key[], info: any) => {
    console.log('selected', selectedKeys, info);
  };

  return (
    <Tree showLine={true} defaultExpandedKeys={['0-0-0']} onSelect={onSelect} treeData={treeData} />
  );
};

export default App;
`},24284:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Tree } from '@oceanbase/design';

interface DataNode {
  title: string;
  key: string;
  isLeaf?: boolean;
  children?: DataNode[];
}

const initTreeData: DataNode[] = [
  { title: 'Expand to load', key: '0' },
  { title: 'Expand to load', key: '1' },
  { title: 'Tree Node', key: '2', isLeaf: true },
];

// It's just a simple demo. You can use tree map to optimize update perf.
const updateTreeData = (list: DataNode[], key: React.Key, children: DataNode[]): DataNode[] =>
  list.map(node => {
    if (node.key === key) {
      return {
        ...node,
        children,
      };
    }
    if (node.children) {
      return {
        ...node,
        children: updateTreeData(node.children, key, children),
      };
    }
    return node;
  });

const App: React.FC = () => {
  const [treeData, setTreeData] = useState(initTreeData);

  const onLoadData = ({ key, children }: any) =>
    new Promise<void>(resolve => {
      if (children) {
        resolve();
        return;
      }
      setTimeout(() => {
        setTreeData(origin =>
          updateTreeData(origin, key, [
            { title: 'Child Node', key: \`\${key}-0\` },
            { title: 'Child Node', key: \`\${key}-1\` },
          ])
        );

        resolve();
      }, 1000);
    });

  return <Tree loadData={onLoadData} treeData={treeData} />;
};

export default App;
`},60807:function(t,n){"use strict";n.Z=`import React from 'react';
import { Space, Typography } from '@oceanbase/design';
import { SmileFilled, SmileOutlined } from '@oceanbase/icons';

const { Text } = Typography;

const App: React.FC = () => (
  <Space direction="vertical">
    <Text copyable>This is a copyable text.</Text>
    <Text copyable={{ text: 'Hello, OceanBase Design!' }}>Custom copy text.</Text>
    <Text
      copyable={{
        icon: [<SmileOutlined key="copy-icon" />, <SmileFilled key="copied-icon" />],
        tooltips: ['click here', 'you clicked!!'],
      }}
    >
      Custom copy icon and tooltips text.
    </Text>
    <Text copyable={{ text: 'text to be copied' }} />
  </Space>
);

export default App;
`},26923:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Input, Modal, Typography } from '@oceanbase/design';

const { Paragraph } = Typography;

const App: React.FC = () => {
  const [editableStr, setEditableStr] = useState('This is an editable text.');
  const [inputValue, setInputValue] = useState(editableStr);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Paragraph
        editable={{
          editing: false,
          onStart: () => {
            setOpen(true);
          },
        }}
      >
        {editableStr}
      </Paragraph>
      <Modal
        title="Editable Text"
        open={open}
        onCancel={() => {
          setOpen(false);
        }}
        onOk={() => {
          setEditableStr(inputValue);
          setOpen(false);
        }}
      >
        <Input
          defaultValue={editableStr}
          onChange={e => {
            setInputValue(e.target.value);
          }}
        />
      </Modal>
    </>
  );
};

export default App;
`},93779:function(t,n){"use strict";n.Z=`import React, { useMemo, useState } from 'react';
import { CheckOutlined, HighlightOutlined } from '@oceanbase/icons';
import { Radio, Typography } from '@oceanbase/design';

const { Paragraph } = Typography;

const App: React.FC = () => {
  const [editableStr, setEditableStr] = useState('This is an editable text.');
  const [editableStrWithSuffix, setEditableStrWithSuffix] = useState(
    'This is a loooooooooooooooooooooooooooooooong editable text with suffix.'
  );
  const [editableStrWithSuffixStartPart, editableStrWithSuffixSuffixPart] = useMemo(
    () => [editableStrWithSuffix.slice(0, -12), editableStrWithSuffix.slice(-12)],
    [editableStrWithSuffix]
  );
  const [customIconStr, setCustomIconStr] = useState('Custom Edit icon and replace tooltip text.');
  const [clickTriggerStr, setClickTriggerStr] = useState(
    'Text or icon as trigger - click to start editing.'
  );
  const [chooseTrigger, setChooseTrigger] = useState<('icon' | 'text')[]>(['icon']);
  const [customEnterIconStr, setCustomEnterIconStr] = useState(
    'Editable text with a custom enter icon in edit field.'
  );
  const [noEnterIconStr, setNoEnterIconStr] = useState(
    'Editable text with no enter icon in edit field.'
  );
  const [hideTooltipStr, setHideTooltipStr] = useState('Hide Edit tooltip.');
  const [lengthLimitedStr, setLengthLimitedStr] = useState(
    'This is an editable text with limited length.'
  );

  const radioToState = (input: string): ('icon' | 'text')[] => {
    switch (input) {
      case 'text':
        return ['text'];
      case 'both':
        return ['icon', 'text'];
      case 'icon':
        return ['icon'];
      default:
        return ['icon'];
    }
  };

  const stateToRadio = useMemo<string>(() => {
    if (chooseTrigger.includes('text')) {
      return chooseTrigger.includes('icon') ? 'both' : 'text';
    }
    return 'icon';
  }, [chooseTrigger]);

  return (
    <>
      <div style={{ marginBottom: 12 }}>
        Trigger edit with:{' '}
        <Radio.Group
          onChange={e => setChooseTrigger(radioToState(e.target.value))}
          value={stateToRadio}
        >
          <Radio value="icon">icon</Radio>
          <Radio value="text">text</Radio>
          <Radio value="both">both</Radio>
        </Radio.Group>
      </div>
      <Paragraph editable={{ onChange: setEditableStr, triggerType: chooseTrigger }}>
        {editableStr}
      </Paragraph>
      <Paragraph
        editable={{
          onChange: setEditableStrWithSuffix,
          text: editableStrWithSuffix,
          triggerType: chooseTrigger,
        }}
        ellipsis={{
          suffix: editableStrWithSuffixSuffixPart,
        }}
      >
        {editableStrWithSuffixStartPart}
      </Paragraph>
      <Paragraph
        editable={{
          icon: <HighlightOutlined />,
          tooltip: 'click to edit text',
          onChange: setCustomIconStr,
          triggerType: chooseTrigger,
        }}
      >
        {customIconStr}
      </Paragraph>
      <Paragraph
        editable={{
          tooltip: 'click to edit text',
          onChange: setClickTriggerStr,
          triggerType: chooseTrigger,
        }}
      >
        {clickTriggerStr}
      </Paragraph>
      <Paragraph
        editable={{
          icon: <HighlightOutlined />,
          tooltip: 'click to edit text',
          onChange: setCustomEnterIconStr,
          triggerType: chooseTrigger,
          enterIcon: <CheckOutlined />,
        }}
      >
        {customEnterIconStr}
      </Paragraph>
      <Paragraph
        editable={{
          icon: <HighlightOutlined />,
          tooltip: 'click to edit text',
          onChange: setNoEnterIconStr,
          triggerType: chooseTrigger,
          enterIcon: null,
        }}
      >
        {noEnterIconStr}
      </Paragraph>
      <Paragraph
        editable={{ tooltip: false, onChange: setHideTooltipStr, triggerType: chooseTrigger }}
      >
        {hideTooltipStr}
      </Paragraph>
      <Paragraph
        editable={{
          onChange: setLengthLimitedStr,
          triggerType: chooseTrigger,
          maxLength: 50,
          autoSize: { maxRows: 5, minRows: 3 },
        }}
      >
        {lengthLimitedStr}
      </Paragraph>
      <Typography.Title editable={{ triggerType: chooseTrigger }} level={1} style={{ margin: 0 }}>
        h1. OceanBase Design
      </Typography.Title>
      <Typography.Title editable={{ triggerType: chooseTrigger }} level={2} style={{ margin: 0 }}>
        h2. OceanBase Design
      </Typography.Title>
      <Typography.Title editable={{ triggerType: chooseTrigger }} level={3} style={{ margin: 0 }}>
        h3. OceanBase Design
      </Typography.Title>
      <Typography.Title editable={{ triggerType: chooseTrigger }} level={4} style={{ margin: 0 }}>
        h4. OceanBase Design
      </Typography.Title>
      <Typography.Title editable={{ triggerType: chooseTrigger }} level={5} style={{ margin: 0 }}>
        h5. OceanBase Design
      </Typography.Title>
    </>
  );
};

export default App;
`},25515:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { ConfigProvider, Divider, Form, Radio, Space, theme, Typography } from '@oceanbase/design';

const { Text } = Typography;

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [fontWeight, setFontWeight] = useState('normal');
  return (
    <>
      <Form layout="inline" style={{ marginBottom: 24 }}>
        <Form.Item label="font weight" required={true}>
          <Radio.Group
            value={fontWeight}
            onChange={e => {
              setFontWeight(e.target.value);
            }}
          >
            <Radio.Button value="normal">normal</Radio.Button>
            <Radio.Button value="bold">bold</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <Space
        direction="vertical"
        size={24}
        style={{
          width: '100%',
          backgroundColor: token.colorBgLayout,
          textAlign: 'center',
          padding: '24px 24px 48px 24px',
          fontWeight,
          fontSize: 32,
        }}
      >
        <Divider>Default font</Divider>
        <div>
          <Text style={{ display: 'block' }}>\u5965\u661F\u8D1D\u65AF\u8BBE\u8BA1\u7CFB\u7EDF</Text>
          <Text>OceanBase Design System</Text>
        </div>
        <Divider>English site font (auto-applied when locale is en)</Divider>
        <div>
          <ConfigProvider
            locale={{
              locale: 'en',
            }}
          >
            <Text>OceanBase Design System</Text>
          </ConfigProvider>
        </div>
        <Divider>Code font (auto-applied under code tag)</Divider>
        <Text code>OceanBase Design System</Text>
        <Divider>Number font (manual setup required)</Divider>
        <div
          style={{
            fontFamily: 'Helvetica Neue',
          }}
        >
          <div>9876543210</div>
          <div>0123456789</div>
        </div>
      </Space>
    </>
  );
};

export default App;
`},66963:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Space, Tooltip, Typography } from '@oceanbase/design';

const App: React.FC = () => (
  <Space size={16} wrap>
    Typography Text
    <Button type="primary">
      <Typography.Text>Typography Text</Typography.Text>
    </Button>
    <Button danger={true}>
      <Typography.Text>Typography Text</Typography.Text>
    </Button>
    <Tooltip open={true} title={<Typography.Text>This is Typography Text</Typography.Text>}>
      <span>Tooltip</span>
    </Tooltip>
  </Space>
);

export default App;
`},60166:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Segmented, Typography } from '@oceanbase/design';

const { Text, Link } = Typography;

const textStyle: React.CSSProperties = {
  padding: '0px 8px',
  background: 'var(--ob-color-bg-secondary)',
  borderRadius: 'var(--ob-radius-sm)',
};

const rowStyle: React.CSSProperties = {
  marginBottom: 12,
};

const App: React.FC = () => {
  const [block, setBlock] = useState<'inline' | 'block'>('inline');

  return (
    <div>
      <div style={rowStyle}>
        <Segmented
          value={block}
          onChange={value => setBlock(value as 'inline' | 'block')}
          options={['inline', 'block']}
        />
      </div>
      <div style={rowStyle}>
        <Text style={textStyle} block={block === 'block'}>
          Typography.Text
        </Text>
      </div>
      <div style={rowStyle}>
        <Link
          style={textStyle}
          block={block === 'block'}
          href="https://design.oceanbase.com"
          target="_blank"
        >
          Typography.Link
        </Link>
      </div>
      <div>
        <Text style={textStyle} block={block === 'block'} caption>
          Typography.Text with caption
        </Text>
      </div>
    </div>
  );
};

export default App;
`},2591:function(t,n){"use strict";n.Z=`import React from 'react';
import { Space, Typography } from '@oceanbase/design';

const { Text } = Typography;

const App: React.FC = () => (
  <Space direction="vertical">
    <Text>OceanBase Design (default)</Text>
    <Text caption>OceanBase Design (caption)</Text>
  </Space>
);

export default App;
`},14999:function(t,n){"use strict";n.Z=`import React from 'react';
import { Space, Typography } from '@oceanbase/design';

const { Text, Link } = Typography;

const App: React.FC = () => (
  <Space direction="vertical">
    <Text>OceanBase Design (default)</Text>
    <Text type="secondary">OceanBase Design (secondary)</Text>
    <Text type="success">OceanBase Design (success)</Text>
    <Text type="warning">OceanBase Design (warning)</Text>
    <Text type="danger">OceanBase Design (danger)</Text>
    <Text disabled>OceanBase Design (disabled)</Text>
    <Text mark>OceanBase Design (mark)</Text>
    <Text code>OceanBase Design (code)</Text>
    <Text keyboard>OceanBase Design (keyboard)</Text>
    <Text underline>OceanBase Design (underline)</Text>
    <Text delete>OceanBase Design (delete)</Text>
    <Text strong>OceanBase Design (strong)</Text>
    <Text italic>OceanBase Design (italic)</Text>
    <Link href="https://design.oceanbase.com" target="_blank">
      OceanBase Design (Link)
    </Link>
  </Space>
);

export default App;
`},46588:function(t,n){"use strict";n.Z=`import React from 'react';
import { Typography } from '@oceanbase/design';

const { Title } = Typography;

const App: React.FC = () => (
  <>
    <Title>h1. OceanBase Design</Title>
    <Title level={2}>h2. OceanBase Design</Title>
    <Title level={3}>h3. OceanBase Design</Title>
    <Title level={4}>h4. OceanBase Design</Title>
    <Title level={5}>h5. OceanBase Design</Title>
  </>
);

export default App;
`},11157:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@oceanbase/icons';
import { Flex, message, Upload } from '@oceanbase/design';
import type { GetProp, UploadProps } from '@oceanbase/design';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps['onChange'] = info => {
    if (info.file.status === 'uploading') {
      setLoading(true);
    } else if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as FileType, url => {
        setLoading(false);
        setImageUrl(url);
      });
    } else if (info.file.status === 'error') {
      setLoading(false);
      message.error('Upload failed');
    }
  };

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <Flex gap="middle" wrap>
      <Upload
        name="avatar"
        listType="picture-card"
        showUploadList={false}
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
      <Upload
        name="avatar"
        listType="picture-circle"
        showUploadList={false}
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
    </Flex>
  );
};

export default App;
`},79247:function(t,n){"use strict";n.Z=`import React from 'react';
import { UploadOutlined } from '@oceanbase/icons';
import type { UploadProps } from '@oceanbase/design';
import { Button, message, Upload } from '@oceanbase/design';

const props: UploadProps = {
  name: 'file',
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(\`\${info.file.name} file uploaded successfully\`);
    } else if (info.file.status === 'error') {
      message.error(\`\${info.file.name} file upload failed.\`);
    }
  },
};

const App: React.FC = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
);

export default App;
`},92509:function(t,n){"use strict";n.Z=`import React from 'react';
import { InboxOutlined } from '@oceanbase/icons';
import type { UploadProps } from '@oceanbase/design';
import { message, Upload } from '@oceanbase/design';

const { Dragger } = Upload;

const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(\`\${info.file.name} file uploaded successfully.\`);
    } else if (status === 'error') {
      message.error(\`\${info.file.name} file upload failed.\`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const App: React.FC = () => (
  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibited from uploading company data or other
      banned files.
    </p>
  </Dragger>
);

export default App;
`},21509:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { UploadOutlined } from '@oceanbase/icons';
import type { UploadFile, UploadProps } from '@oceanbase/design';
import { Button, Upload } from '@oceanbase/design';

const App: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'http://www.baidu.com/xxx.png',
    },
  ]);

  const handleChange: UploadProps['onChange'] = info => {
    let newFileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    newFileList = newFileList.slice(-2);

    // 2. Read from response and show file link
    newFileList = newFileList.map(file => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    setFileList(newFileList);
  };

  const props = {
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange: handleChange,
    multiple: true,
  };
  return (
    <Upload {...props} fileList={fileList}>
      <Button type="primary" icon={<UploadOutlined />}>
        Upload
      </Button>
    </Upload>
  );
};

export default App;
`},39814:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { UploadOutlined } from '@oceanbase/icons';
import { Button, message, Upload } from '@oceanbase/design';
import type { GetProp, UploadFile, UploadProps } from '@oceanbase/design';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const App: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach(file => {
      formData.append('files[]', file as FileType);
    });
    setUploading(true);
    // You can use any AJAX library you like
    fetch('https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload', {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(() => {
        setFileList([]);
        message.success('upload successfully.');
      })
      .catch(() => {
        message.error('upload failed.');
      })
      .finally(() => {
        setUploading(false);
      });
  };

  const props: UploadProps = {
    onRemove: file => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: file => {
      setFileList([...fileList, file]);

      return false;
    },
    fileList,
  };

  return (
    <>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Select File</Button>
      </Upload>
      <Button
        type="primary"
        onClick={handleUpload}
        disabled={fileList.length === 0}
        loading={uploading}
        style={{ marginTop: 16 }}
      >
        {uploading ? 'Uploading' : 'Start Upload'}
      </Button>
    </>
  );
};

export default App;
`},34310:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Form, Radio } from '@oceanbase/design';
import { ButtonSize } from '@oceanbase/design/es/button';
import { Action } from '@oceanbase/ui';

export default () => {
  const [buttonSize, setButtonSize] = useState<ButtonSize>('middle');
  return (
    <>
      <Form layout="inline" requiredMark={false} style={{ marginBottom: 16 }}>
        <Form.Item label="buttonSize">
          <Radio.Group
            value={buttonSize}
            onChange={e => {
              setButtonSize(e.target.value);
            }}
          >
            <Radio value="large">large</Radio>
            <Radio value="middle">middle</Radio>
            <Radio value="small">small</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
      <Action.Group buttonSize={buttonSize}>
        <Action.Button type="primary">action1</Action.Button>
        <Action.Button danger>Danger Button</Action.Button>
        <Action.Button>action3</Action.Button>
        <Action.Button divider={true}>action4</Action.Button>
        <Action.Button>action5</Action.Button>
      </Action.Group>
    </>
  );
};
`},76648:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Action } from '@oceanbase/ui';
import { Drawer, Space, Switch } from '@oceanbase/design';

const ActionButton4 = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Action.Button
        onClick={() => {
          setOpen(true);
        }}
      >
        action4
      </Action.Button>
      <Drawer
        open={open}
        title="Drawer Title"
        onOk={() => {
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      >
        Drawer Content
      </Drawer>
    </>
  );
};

const ActionButton5 = () => <Action.Button disabled>action5</Action.Button>;

const ActionLink4 = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Action.Link
        onClick={() => {
          setOpen(true);
        }}
      >
        action4
      </Action.Link>
      <Drawer
        open={open}
        title="Drawer Title"
        onOk={() => {
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      >
        Drawer Content
      </Drawer>
    </>
  );
};

const ActionLink5 = () => <Action.Link disabled>action5</Action.Link>;

export default () => {
  const [showConditionalAction, setShowConditionalAction] = useState(true);

  return (
    <Space direction="vertical" size="middle">
      <Space align="center" size="small">
        <span>Show conditional action item</span>
        <Switch checked={showConditionalAction} onChange={setShowConditionalAction} />
      </Space>
      <Action.Group>
        <>
          <Action.Button>action1</Action.Button>
          <Action.Button disabled tooltip={'Show tooltip when disabled'}>
            Disabled with tooltip
          </Action.Button>
          <Action.Button
            onClick={() => {
              console.log('hello~~');
            }}
          >
            action3
          </Action.Button>
          {showConditionalAction && (
            <Action.Button key="cond-true">Conditional action</Action.Button>
          )}
          <ActionButton4 />
          <ActionButton5 />
        </>
      </Action.Group>
      <Action.Group>
        <>
          <Action.Link>action1</Action.Link>
          <Action.Link disabled tooltip={'Show tooltip when disabled'}>
            Disabled with tooltip
          </Action.Link>
          <Action.Link
            onClick={() => {
              console.log('hello~~');
            }}
          >
            action3
          </Action.Link>
          {showConditionalAction && (
            <Action.Link key="cond-true-link">Conditional action</Action.Link>
          )}
          <ActionLink4 />
          <ActionLink5 />
        </>
      </Action.Group>
    </Space>
  );
};
`},78530:function(t,n){"use strict";n.Z=`import React from 'react';
import { Action } from '@oceanbase/ui';

export default () => {
  return (
    <Action.Group size={2}>
      <Action.Button type="primary">action1</Action.Button>
      <Action.Button danger>Danger Button</Action.Button>
      <Action.Button>action3</Action.Button>
      <Action.Button fixed>fixed4</Action.Button>
      <Action.Button fixed>action5</Action.Button>
    </Action.Group>
  );
};
`},4531:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Action } from '@oceanbase/ui';
import { Form, Switch } from '@oceanbase/design';

export default () => {
  const [visible, setVisible] = useState(true);
  const [disabled, setDisabled] = useState(false);
  return (
    <>
      <Form layout="inline" style={{ marginBottom: 16 }}>
        <Form.Item label="visible" required={true}>
          <Switch
            size="small"
            value={visible}
            onChange={value => {
              setVisible(value);
            }}
          />
        </Form.Item>
        <Form.Item label="disabled" required={true}>
          <Switch
            size="small"
            value={disabled}
            onChange={value => {
              setDisabled(value);
            }}
          />
        </Form.Item>
      </Form>
      <Action.Group shouldVisible={key => visible} shouldDisabled={key => disabled}>
        <Action.Link key="action1">action1</Action.Link>
        <Action.Link key="action2">action2</Action.Link>
        <Action.Link key="action3">action3</Action.Link>
        <Action.Link key="action4">action4</Action.Link>
        <Action.Link key="action5">action5</Action.Link>
      </Action.Group>
    </>
  );
};
`},43709:function(t,n){"use strict";n.Z=`import React from 'react';
import { Action } from '@oceanbase/ui';

export default () => {
  return (
    <Action.Group>
      <Action.Link visible={false}>action1</Action.Link>
      <Action.Link disabled tooltip={'Show tooltip when disabled'}>
        Disabled with tooltip
      </Action.Link>
      <Action.Link
        onClick={() => {
          console.log('hello~~');
        }}
      >
        action2
      </Action.Link>
      <Action.Link
        onClick={async () => {
          return new Promise(resolve => {
            setTimeout(() => {
              console.log('hello2~~');
              resolve();
            }, 1000);
          });
        }}
      >
        action3
      </Action.Link>
      <Action.Link disabled divider={true}>
        action4
      </Action.Link>
      <Action.Link>action5</Action.Link>
    </Action.Group>
  );
};
`},81077:function(t,n){"use strict";n.Z=`import React, { useCallback } from 'react';
import { message } from '@oceanbase/design';
import { Action } from '@oceanbase/ui';

export default () => {
  const linkOnClick = useCallback(() => {
    const promise: Promise<void> = new Promise(resolve => {
      setTimeout(() => {
        message.success('Link clicked successfully');
        resolve();
      }, 2000);
    });
    return promise;
  }, []);

  return (
    <Action.Group enableLoading size={2}>
      <Action.Link key="action1" onClick={linkOnClick}>
        action1
      </Action.Link>
      <Action.Link key="action2" onClick={linkOnClick}>
        action2
      </Action.Link>
      <Action.Link key="action3" onClick={linkOnClick}>
        action3
      </Action.Link>
      <Action.Link key="action4" onClick={linkOnClick}>
        action4
      </Action.Link>
      {/** Basic loading control */}
      <Action.Link key="action5" loading>
        action5
      </Action.Link>
    </Action.Group>
  );
};
`},8551:function(t,n){"use strict";n.Z=`import React from 'react';
import { Space } from '@oceanbase/design';
import { Action } from '@oceanbase/ui';
import { DownOutlined } from '@oceanbase/icons';

export default () => {
  return (
    <Action.Group
      moreText={
        <Space size={4}>
          More
          <DownOutlined />
        </Space>
      }
    >
      <Action.Button type="primary">action1</Action.Button>
      <Action.Button danger>Danger Button</Action.Button>
      <Action.Button>action3</Action.Button>
      <Action.Button>action4</Action.Button>
      <Action.Button>action5</Action.Button>
    </Action.Group>
  );
};
`},50573:function(t,n){"use strict";n.Z=`import React from 'react';
import { Popconfirm } from '@oceanbase/design';
import { Action } from '@oceanbase/ui';

export default () => {
  return (
    <Action.Group>
      <Action.Button type="primary" tooltip="This is tooltip">
        action1
      </Action.Button>
      <Popconfirm placement="bottom" title="Confirm to delete it?">
        <Action.Button danger>Danger Button</Action.Button>
      </Popconfirm>
      <Action.Button>action3</Action.Button>
      <Action.Button tooltip="This is tooltip">action4</Action.Button>
      <Popconfirm
        placement="bottom"
        title="Confirm to delete it?"
        getPopupContainer={triggerNode =>
          triggerNode
            ? // to prevent the popconfirm from being closed when leave the Action.Button
              (triggerNode.parentNode?.parentNode?.parentNode?.parentNode as HTMLElement)
            : document.body
        }
        onConfirm={e => {
          // to prevent the popconfirm from being closed when click confirm button
          e.stopPropagation();
          return new Promise(resolve => {
            setTimeout(() => {
              resolve(null);
            }, 1000);
          });
        }}
      >
        <Action.Button
          danger
          onClick={e => {
            // to prevent the popconfirm from being closed when click the Action.Button
            e.stopPropagation();
          }}
        >
          action5
        </Action.Button>
      </Popconfirm>
    </Action.Group>
  );
};
`},51531:function(t,n){"use strict";n.Z=`import type {
  BackgroundTaskManagerRef,
  ITaskMgrPreset,
  ITaskMgrQueue,
  TaskMgrID,
} from '@oceanbase/ui';
import { BackgroundTaskManager, BackgroundTaskManagerConstants } from '@oceanbase/ui';
import React, { useEffect, useRef } from 'react';
import { getTaskById } from './mockApi';

const { NotificationApi, REFRESH_FREQUENCY } = BackgroundTaskManagerConstants;

// mock model
(window as any).obuiMockModel = {
  backgroundTaskManagerAPIs: {},
};

export enum TASK_CENTER_STATUS {
  'WAITING' = 'WAITING',
  'PROCESSING' = 'PROCESSING',
  'SUCCESS' = 'SUCCESS',
  'FAILED' = 'FAILED',
}

const NotificationCenter = () => {
  const ref = useRef<BackgroundTaskManagerRef>();

  const setNotificationPreset = (p: ITaskMgrPreset) => {
    ref.current?.setPreset(p);
  };

  const setNotificationQueue = (q: ITaskMgrQueue) => {
    ref.current?.setQueue(q);
  };

  const pushNotificationQueue = (q: ITaskMgrQueue) => {
    ref.current?.pushQueue(q);
  };

  const popNotificationQueue = (q: TaskMgrID) => {
    ref.current?.popQueue(q);
  };

  const fetchPreset = () => {
    const preset = ref.current?.fetchPreset();
    return preset;
  };

  const fetchQueue = () => {
    const queue = ref.current?.fetchQueue();
    return queue;
  };

  const fetchQueueNsById = (id: TaskMgrID) => {
    return ref.current?.fetchQueueNsById(id);
  };

  // mock model storage
  (window as any).obuiMockModel.backgroundTaskManagerAPIs = {
    setNotificationPreset,
    setNotificationQueue,
    pushNotificationQueue,
    popNotificationQueue,
    fetchPreset,
    fetchQueue,
    fetchQueueNsById,
  };

  useEffect(() => {
    const api = async ({ id }: any) => {
      return getTaskById({ id });
    };
    setNotificationPreset({
      download_task: {
        api,
        successCb: (data, id) => {
          const { status, fileName, fileUrl } = data || {};
          if ([TASK_CENTER_STATUS.SUCCESS, TASK_CENTER_STATUS.FAILED].includes(status)) {
            popNotificationQueue(id);
            const typeMap = {
              [TASK_CENTER_STATUS.SUCCESS]: NotificationApi.success,
              [TASK_CENTER_STATUS.FAILED]: NotificationApi.error,
            };
            const msgMap = {
              [TASK_CENTER_STATUS.SUCCESS]: 'The file has been generated and can be downloaded',
              [TASK_CENTER_STATUS.FAILED]: 'File generation failed',
            };
            return {
              type: typeMap[status],
              config: {
                key: id,
                top: 78,
                duration: null,
                message: msgMap[status],
                description:
                  status === TASK_CENTER_STATUS.SUCCESS ? (
                    <>
                      <div>{fileName}</div>
                      <a href={fileUrl} target="_blank" rel="noreferrer">
                        Download
                      </a>
                    </>
                  ) : null,
              },
            };
          }
          return null;
        },
      },
    });
  }, []);

  return (
    <BackgroundTaskManager
      ref={ref}
      rollingFrequency={REFRESH_FREQUENCY.EXTREMELY}
      prefix="obui_backgroundtaskmanager_demo"
    />
  );
};

export default NotificationCenter;
`},81731:function(t,n){"use strict";n.Z=`import { Button, message } from '@oceanbase/design';
import React, { useCallback } from 'react';
import NotificationCenter from './NotificationCenter';

export default () => {
  const onBtnClick = useCallback(() => {
    const id = \`\${Math.round(Math.random() * 1000)}\`;
    message.info(\`Task \${id} submitted successfully. Please wait...\`);
    // In production, call via the model
    (window as any).obuiMockModel?.backgroundTaskManagerAPIs?.pushNotificationQueue?.({
      [id]: 'download_task',
    });
  }, []);

  return (
    <>
      <NotificationCenter />
      <Button onClick={onBtnClick}>download</Button>
    </>
  );
};
`},89745:function(t,n){"use strict";n.Z=`let rollingTimes = 0;

// mock polling API
async function getTaskById({ id }) {
  await sleep(1000);
  rollingTimes = rollingTimes === 3 ? 0 : rollingTimes + 1;
  return {
    id,
    gmtCreate: '2022-12-01T12:32:47.000+00:00',
    passportId: '200000000008',
    bizType: 'BILL_DETAIL',
    fileName: 'bill-detail-2022-12.xlsx',
    fileUrl: '',
    status: rollingTimes === 3 ? 'SUCCESS' : 'CONNECTING',
    fileExpireTime: '2022-12-04T12:32:47.000+00:00',
  };
}

function sleep(time) {
  return new Promise(reslove => {
    setTimeout(reslove, time);
  });
}

export { getTaskById };
`},36468:function(t,n){"use strict";n.Z=`import React from 'react';
import { createFromIconfontCN } from '@oceanbase/icons';

export interface IconFontProps {
  type: string;
  className?: string;
  style?: React.CSSProperties;
}

const CustomIcon = createFromIconfontCN({
  // Generated on iconfont.cn
  scriptUrl: '//at.alicdn.com/t/a/font_3786261_ifhixq9j5c.js',
});

const IconFont = (props: IconFontProps) => {
  const { type, ...restProps } = props;
  return <CustomIcon type={type} {...restProps} />;
};

export default IconFont;
`},50783:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Alert, Menu, message } from '@oceanbase/design';
import { BasicLayout, Lottie } from '@oceanbase/ui';
import Icon from '@oceanbase/icons';
import { ReactComponent as MonitorSvg } from '../../assets/monitor.svg';
import PageContainerEmptyDemo from '../../PageContainer/demo/empty';
import IconFont from './IconFont';

export default () => {
  const [alertVisible, setalertVisible] = useState(true);
  const menus = [
    {
      link: '/~demos/basiclayout-demo-basic/overview',
      title: 'Dashboard',
      icon: <IconFont type="overview" />,
      selectedIcon: <Lottie path="/lottie/overview.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/tenant',
      title: 'Tenants',
      icon: <IconFont type="tenant" />,
      selectedIcon: <Lottie path="/lottie/tenant.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/monitor',
      title: 'Monitoring',
      icon: <Icon component={MonitorSvg} />,
      selectedIcon: <Lottie path="/lottie/monitor.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/diagnosis',
      title: 'Diagnostics',
      icon: <IconFont type="diagnosis" />,
      selectedIcon: <Lottie path="/lottie/diagnosis.json" mode="icon" loop={false} speed={3} />,
      children: [
        {
          link: \`/~demos/basiclayout-basic/diagnosis/realtime\`,
          title: 'Real-time',
        },

        {
          link: \`/~demos/basiclayout-basic/diagnosis/capacity\`,
          title: 'Capacity',
        },

        {
          link: \`/~demos/basiclayout-basic/diagnosis/report\`,
          title: 'Reports',
        },
      ],
    },
    {
      link: '/~demos/basiclayout-demo-basic/backup',
      title: 'Backup',
      icon: <IconFont type="backup" />,
      selectedIcon: <Lottie path="/lottie/backup.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/log',
      title: 'Logs',
      icon: <IconFont type="log" />,
      selectedIcon: <Lottie path="/lottie/log.json" mode="icon" loop={false} speed={3} />,
      divider: true,
    },
    {
      link: '/~demos/basiclayout-demo-basic/property',
      title: 'Settings',
      icon: <IconFont type="property" />,
      selectedIcon: <Lottie path="/lottie/property.json" mode="icon" loop={false} speed={3} />,
    },
  ];
  const userMenu = (
    <Menu
      onClick={() => {
        message.success('You clicked the dropdown menu');
      }}
    >
      <Menu.Item key="profile">Profile Settings</Menu.Item>
      <Menu.Item key="modifyPassword">Change Password</Menu.Item>
      <Menu.Item key="logout">Log Out</Menu.Item>
    </Menu>
  );
  return (
    <BasicLayout
      banner={
        alertVisible && (
          <Alert
            message="Your browser version is outdated. To avoid potential security risks, please upgrade Chrome to version 80 or later."
            type="warning"
            banner={true}
            showIcon={true}
            closable={true}
            onClose={() => {
              setalertVisible(false);
            }}
          />
        )
      }
      logoUrl="https://gw.alipayobjects.com/zos/bmw-prod/3282eb3a-9a1e-4129-968e-be5f9e6cd1a2.svg"
      simpleLogoUrl="https://gw.alipayobjects.com/zos/bmw-prod/51cff69d-3717-4c7d-b736-8d1c9a52689a.svg"
      menus={menus}
      defaultSelectedKeys={['/~demos/basiclayout-basic/overview']}
      topHeader={{
        welcomePath: '/welcome',
        docsPath: '/docs/index.html',
        username: 'admin',
        userMenu,
        showLocale: true,
        appData: {
          shortName: 'OCP',
          version: '2.4.0',
          releaseTime: '2020-06-15 18:00:00',
        },
      }}
    >
      <PageContainerEmptyDemo />
    </BasicLayout>
  );
};
`},67405:function(t,n){"use strict";n.Z=`import React from 'react';
import { Menu, message } from '@oceanbase/design';
import { BasicLayout, Lottie } from '@oceanbase/ui';
import Icon from '@oceanbase/icons';
import PageContainerCompleteDemo from '../../PageContainer/demo/complete';
import { ReactComponent as MonitorSvg } from '../../assets/monitor.svg';
import IconFont from './IconFont';

export default () => {
  const menus = [
    {
      link: '/~demos/basiclayout-demo-basic/overview',
      title: 'Dashboard',
      icon: <IconFont type="overview" />,
      selectedIcon: <Lottie path="/lottie/overview.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/tenant',
      title: 'Tenants',
      icon: <IconFont type="tenant" />,
      selectedIcon: <Lottie path="/lottie/tenant.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/monitor',
      title: 'Monitoring',
      icon: <Icon component={MonitorSvg} />,
      selectedIcon: <Lottie path="/lottie/monitor.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/diagnosis',
      title: 'Diagnostics',
      icon: <IconFont type="diagnosis" />,
      selectedIcon: <Lottie path="/lottie/diagnosis.json" mode="icon" loop={false} speed={3} />,
      children: [
        {
          link: \`/~demos/basiclayout-basic/diagnosis/realtime\`,
          title: 'Real-time',
        },

        {
          link: \`/~demos/basiclayout-basic/diagnosis/capacity\`,
          title: 'Capacity',
        },

        {
          link: \`/~demos/basiclayout-basic/diagnosis/report\`,
          title: 'Reports',
        },
      ],
    },
    {
      link: '/~demos/basiclayout-demo-basic/backup',
      title: 'Backup',
      icon: <IconFont type="backup" />,
      selectedIcon: <Lottie path="/lottie/backup.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/log',
      title: 'Logs',
      icon: <IconFont type="log" />,
      selectedIcon: <Lottie path="/lottie/log.json" mode="icon" loop={false} speed={3} />,
      divider: true,
    },
    {
      link: '/~demos/basiclayout-demo-basic/property',
      title: 'Settings',
      icon: <IconFont type="property" />,
      selectedIcon: <Lottie path="/lottie/property.json" mode="icon" loop={false} speed={3} />,
    },
  ];
  const userMenu = (
    <Menu
      onClick={() => {
        message.success('You clicked the dropdown menu');
      }}
    >
      <Menu.Item key="profile">Profile Settings</Menu.Item>
      <Menu.Item key="modifyPassword">Change Password</Menu.Item>
      <Menu.Item key="logout">Log Out</Menu.Item>
    </Menu>
  );
  return (
    <BasicLayout
      logoUrl="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*WElAQJswckAAAAAAAAAAAAAADvSFAQ/original"
      simpleLogoUrl="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*x1BtQ5x7_pUAAAAAAAAAAAAADvSFAQ/original"
      menus={menus}
      defaultSelectedKeys={['/~demos/basiclayout-basic/overview']}
      topHeader={{
        welcomePath: '/welcome',
        versionNoticePath: '/docs/index.html',
        docsPath: '/docs/index.html',
        pdfPath: '/docs/index.html',
        username: 'admin',
        userMenu,
        showLocale: true,
        appData: {
          shortName: 'OCP Express',
          version: '1.0.0',
          releaseTime: '2022-12-30 00:00:00',
        },
      }}
    >
      <PageContainerCompleteDemo />
    </BasicLayout>
  );
};
`},20464:function(t,n){"use strict";n.Z=`import React from 'react';
import { Menu, message } from '@oceanbase/design';
import { BasicLayout, Lottie } from '@oceanbase/ui';
import Icon from '@oceanbase/icons';
import PageContainerCompleteDemo from '../../PageContainer/demo/complete';
import { ReactComponent as MonitorSvg } from '../../assets/monitor.svg';
import IconFont from './IconFont';

export default () => {
  const menus = [
    {
      link: '/~demos/basiclayout-demo-menu-group/overview',
      title: 'Dashboard',
      icon: <IconFont type="overview" />,
      selectedIcon: <Lottie path="/lottie/overview.json" mode="icon" loop={false} speed={3} />,
    },
    {
      type: 'group' as const,
      title: 'Cluster Management',
      children: [
        {
          link: '/~demos/basiclayout-demo-menu-group/cluster',
          title: 'Cluster List',
          icon: <IconFont type="tenant" />,
        },
        {
          link: '/~demos/basiclayout-demo-menu-group/host',
          title: 'Host List',
          icon: <IconFont type="diagnosis" />,
        },
      ],
    },
    {
      type: 'group' as const,
      title: 'Operations',
      children: [
        {
          link: '/~demos/basiclayout-demo-menu-group/monitor',
          title: 'Monitoring',
          icon: <Icon component={MonitorSvg} />,
          selectedIcon: <Lottie path="/lottie/monitor.json" mode="icon" loop={false} speed={3} />,
        },
        {
          link: '/~demos/basiclayout-demo-menu-group/backup',
          title: 'Backup',
          icon: <IconFont type="backup" />,
        },
      ],
    },
    {
      link: '/~demos/basiclayout-demo-menu-group/property',
      title: 'Settings',
      icon: <IconFont type="property" />,
      selectedIcon: <Lottie path="/lottie/property.json" mode="icon" loop={false} speed={3} />,
    },
  ];
  const userMenu = (
    <Menu
      onClick={() => {
        message.success('You clicked the dropdown menu');
      }}
    >
      <Menu.Item key="profile">Profile Settings</Menu.Item>
      <Menu.Item key="modifyPassword">Change Password</Menu.Item>
      <Menu.Item key="logout">Log Out</Menu.Item>
    </Menu>
  );
  return (
    <BasicLayout
      logoUrl="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*WElAQJswckAAAAAAAAAAAAAADvSFAQ/original"
      simpleLogoUrl="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*x1BtQ5x7_pUAAAAAAAAAAAAADvSFAQ/original"
      menus={menus}
      defaultSelectedKeys={['/~demos/basiclayout-demo-menu-group/overview']}
      topHeader={{
        welcomePath: '/welcome',
        versionNoticePath: '/docs/index.html',
        docsPath: '/docs/index.html',
        pdfPath: '/docs/index.html',
        username: 'admin',
        userMenu,
        showLocale: true,
        appData: {
          shortName: 'OCP Express',
          version: '1.0.0',
          releaseTime: '2022-12-30 00:00:00',
        },
      }}
    >
      <PageContainerCompleteDemo />
    </BasicLayout>
  );
};
`},19617:function(t,n){"use strict";n.Z=`import React from 'react';
import { Menu, message } from '@oceanbase/design';
import { BasicLayout, Lottie } from '@oceanbase/ui';
import Icon from '@oceanbase/icons';
import PageContainerCompleteDemo from '../../PageContainer/demo/complete';
import { ReactComponent as MonitorSvg } from '../../assets/monitor.svg';
import IconFont from './IconFont';

export default () => {
  const menus = [
    {
      link: '/~demos/basiclayout-demo-basic/overview',
      title: 'Dashboard',
      icon: <IconFont type="overview" />,
      selectedIcon: <Lottie path="/lottie/overview.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/tenant',
      title: 'Tenant Management Tenant Management Tenant Management Tenant Management',
      icon: <IconFont type="tenant" />,
      selectedIcon: <Lottie path="/lottie/tenant.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/monitor',
      title: 'Monitoring',
      icon: <Icon component={MonitorSvg} />,
      selectedIcon: <Lottie path="/lottie/monitor.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/diagnosis',
      title: 'Diagnostics Diagnostics Diagnostics Diagnostics',
      icon: <IconFont type="diagnosis" />,
      selectedIcon: <Lottie path="/lottie/diagnosis.json" mode="icon" loop={false} speed={3} />,
      children: [
        {
          link: \`/~demos/basiclayout-basic/diagnosis/realtime\`,
          title: 'Real-time',
        },

        {
          link: \`/~demos/basiclayout-basic/diagnosis/capacity\`,
          title: 'Capacity',
        },

        {
          link: \`/~demos/basiclayout-basic/diagnosis/report\`,
          title: 'Reports',
        },
      ],
    },
    {
      link: '/~demos/basiclayout-demo-basic/backup',
      title: 'Backup',
      icon: <IconFont type="backup" />,
      selectedIcon: <Lottie path="/lottie/backup.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/log',
      title: 'Logs',
      icon: <IconFont type="log" />,
      selectedIcon: <Lottie path="/lottie/log.json" mode="icon" loop={false} speed={3} />,
      divider: true,
    },
    {
      link: '/~demos/basiclayout-demo-basic/property',
      title: 'Settings',
      icon: <IconFont type="property" />,
      selectedIcon: <Lottie path="/lottie/property.json" mode="icon" loop={false} speed={3} />,
    },
  ];
  const userMenu = (
    <Menu
      onClick={() => {
        message.success('You clicked the dropdown menu');
      }}
    >
      <Menu.Item key="profile">Profile Settings</Menu.Item>
      <Menu.Item key="modifyPassword">Change Password</Menu.Item>
      <Menu.Item key="logout">Log Out</Menu.Item>
    </Menu>
  );
  return (
    <BasicLayout
      logoUrl="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*WElAQJswckAAAAAAAAAAAAAADvSFAQ/original"
      simpleLogoUrl="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*x1BtQ5x7_pUAAAAAAAAAAAAADvSFAQ/original"
      menus={menus}
      defaultSelectedKeys={['/~demos/basiclayout-basic/overview']}
      topHeader={{
        welcomePath: '/welcome',
        docsPath: '/docs/index.html',
        username: 'admin',
        userMenu,
        showLocale: true,
        appData: {
          shortName: 'OCP Express',
          version: '1.0.0',
          releaseTime: '2022-12-30 00:00:00',
        },
      }}
    >
      <PageContainerCompleteDemo />
    </BasicLayout>
  );
};
`},26422:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Button, Card, Space, Steps } from '@oceanbase/design';
import { BasicLayout, PageContainer } from '@oceanbase/ui';
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  HomeOutlined,
  ReadOutlined,
} from '@oceanbase/icons';

export default () => {
  const [current, setCurrent] = useState(0);

  const NEW_METADB_OCP_INSTALL = [
    {
      title: 'MetaDB Configuration',
    },
    {
      title: 'Environment Pre-check',
    },
    {
      title: 'MetaDB Deployment',
    },
    {
      title: 'OCP Configuration',
    },
    {
      title: 'OCP Deployment',
    },
  ];
  const getIcon = (key: number) => {
    return current > key ? <CheckCircleOutlined /> : <ClockCircleOutlined />;
  };
  return (
    <BasicLayout
      logoUrl="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*WElAQJswckAAAAAAAAAAAAAADvSFAQ/original"
      simpleLogoUrl="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*x1BtQ5x7_pUAAAAAAAAAAAAADvSFAQ/original"
      menus={null}
      defaultSelectedKeys={['/~demos/basiclayout-basic/overview']}
      topHeader={{
        extra: (
          <Space size={24}>
            <Space style={{ color: '#5C6B8A', cursor: 'pointer' }}>
              <HomeOutlined />
              Visit Website
            </Space>
            <Space style={{ color: '#5C6B8A', cursor: 'pointer' }}>
              <ReadOutlined />
              Help Center
            </Space>
          </Space>
        ),
        showLocale: false,
        showHelp: false,
      }}
    >
      <PageContainer
        ghost={true}
        header={{
          title: 'Page Title',
        }}
        footer={[
          <Button
            key="prev"
            onClick={() => {
              setCurrent(current > 0 ? current - 1 : 0);
            }}
          >
            Previous
          </Button>,
          <Button
            key="next"
            type="primary"
            onClick={() => {
              setCurrent(current >= 4 ? current : current + 1);
            }}
          >
            Next
          </Button>,
        ]}
      >
        <Card bordered={false}>
          <Steps
            style={{ width: 722, margin: '0 auto' }}
            current={current}
            labelPlacement="vertical"
            items={NEW_METADB_OCP_INSTALL.map((item, index: number) => ({
              ...item,
              icon: getIcon(index),
            }))}
          />
        </Card>
      </PageContainer>
    </BasicLayout>
  );
};
`},27218:function(t,n){"use strict";n.Z=`import React from 'react';
import { Badge, Dropdown, Menu, message, Space } from '@oceanbase/design';
import { BasicLayout, Lottie } from '@oceanbase/ui';
import { CaretDownFilled } from '@oceanbase/icons';
import PageContainerEmptyDemo from '../../PageContainer/demo/empty';
import IconFont from './IconFont';

export default () => {
  const menus = [
    {
      link: '/~demos/basiclayout-demo-subsidemenu/overview',
      title: 'Dashboard',
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/topo',
      title: 'Topology',
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/tenant',
      title: 'Tenants',
      divider: true,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/monitor',
      title: 'Performance',
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/report',
      title: 'Reports',
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/resource',
      title: 'Resources',
      divider: true,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/health',
      title: 'Health Check',
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/compaction',
      title: 'Compaction',
      divider: true,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/backup',
      title: 'Backup',
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/parameter',
      title: 'Parameters',
    },
  ];
  const subSidemenus = [
    {
      link: '/~demos/basiclayout-demo-subsidemenu/overview',
      title: 'Dashboard',
      icon: <IconFont type="overview" />,
      selectedIcon: <Lottie path="/lottie/overview.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/sub-side-cluster',
      title: 'Clusters',
      icon: <IconFont type="cluster" />,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/sub-side-tenant',
      title: 'Tenants',
      icon: <IconFont type="tenant" />,
      selectedIcon: <Lottie path="/lottie/tenant.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/sub-side-host',
      title: 'Hosts',
      icon: <IconFont type="host" />,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/sub-side-package',
      title: 'Packages',
      icon: <IconFont type="package" />,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/sub-side-obproxy',
      title: 'OBProxy',
      icon: <IconFont type="obproxy" />,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/sub-side-backup',
      title: 'Backup',
      icon: <IconFont type="backup" />,
      selectedIcon: <Lottie path="/lottie/backup.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-subsidemenu/sub-side-system',
      title: 'System',
      icon: <IconFont type="system" />,
      children: [
        {
          link: '/~demos/basiclayout-demo-subsidemenu/sub-side-alarm',
          title: 'Alerts',
        },
        {
          link: '/~demos/basiclayout-demo-subsidemenu/sub-side-task',
          title: 'Tasks',
        },
        {
          link: '/~demos/basiclayout-demo-subsidemenu/sub-side-inspection',
          title: 'Inspection',
          divider: true,
        },
        {
          link: '/~demos/basiclayout-demo-subsidemenu/sub-side-log',
          title: 'Logs',
        },
        {
          link: '/~demos/basiclayout-demo-subsidemenu/sub-side-auth',
          title: 'Security',
        },
        {
          link: '/~demos/basiclayout-demo-subsidemenu/sub-side-property',
          title: 'Settings',
        },
        {
          link: '/~demos/basiclayout-demo-subsidemenu/sub-side-auditEvent',
          title: 'History',
        },
      ],
    },
  ];
  const userMenu = (
    <Menu
      onClick={() => {
        message.success('You clicked the dropdown menu');
      }}
    >
      <Menu.Item key="profile">Profile Settings</Menu.Item>
      <Menu.Item key="modifyPassword">Change Password</Menu.Item>
      <Menu.Item key="logout">Log Out</Menu.Item>
    </Menu>
  );
  const sideHeader = (
    <div
      style={{
        textAlign: 'center',
        padding: '10px 0',
      }}
    >
      <Space size={8}>
        <Badge status="success" />
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="mysql">mysql</Menu.Item>
              <Menu.Item key="oracle">oracle</Menu.Item>
            </Menu>
          }
        >
          <Space
            size={14}
            style={{
              cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: 18, fontWeight: 600 }}>mysql</span>
            <CaretDownFilled
              style={{
                fontSize: 12,
                color: '#8592AD',
              }}
            />
          </Space>
        </Dropdown>
      </Space>
    </div>
  );
  return (
    <BasicLayout
      logoUrl="https://gw.alipayobjects.com/zos/bmw-prod/3282eb3a-9a1e-4129-968e-be5f9e6cd1a2.svg"
      simpleLogoUrl="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*x1BtQ5x7_pUAAAAAAAAAAAAADvSFAQ/original"
      menus={menus}
      defaultSelectedKeys={['/~demos/basiclayout-demo-subsidemenu/overview']}
      topHeader={{
        welcomePath: '/welcome',
        docsPath: '/docs/index.html',
        username: 'admin',
        userMenu,
        showLocale: true,
        appData: {
          shortName: 'OCP',
          version: '2.4.0',
          releaseTime: '2020-06-15 18:00:00',
        },
      }}
      subSideMenus={subSidemenus}
      subSideMenuProps={{ defaultSelectedKeys: ['/~demos/basiclayout-demo-subsidemenu/overview'] }}
      sideHeader={sideHeader}
    >
      <PageContainerEmptyDemo />
    </BasicLayout>
  );
};
`},44351:function(t,n){"use strict";n.Z=`import React from 'react';
import { Menu, message } from '@oceanbase/design';
import { BasicLayout, Lottie } from '@oceanbase/ui';
import Icon from '@oceanbase/icons';
import { ReactComponent as MonitorSvg } from '../../assets/monitor.svg';
import PageContainerEmptyDemo from '../../PageContainer/demo/empty';
import IconFont from './IconFont';

export default () => {
  const menus = [
    {
      link: '/~demos/basiclayout-demo-basic/overview',
      title: 'Dashboard',
      icon: <IconFont type="overview" />,
      selectedIcon: <Lottie path="/lottie/overview.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/tenant',
      title: 'Tenants',
      icon: <IconFont type="tenant" />,
      selectedIcon: <Lottie path="/lottie/tenant.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/monitor',
      title: 'Monitoring',
      icon: <Icon component={MonitorSvg} />,
      selectedIcon: <Lottie path="/lottie/monitor.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/diagnosis',
      title: 'Diagnostics',
      icon: <IconFont type="diagnosis" />,
      selectedIcon: <Lottie path="/lottie/diagnosis.json" mode="icon" loop={false} speed={3} />,
      children: [
        {
          link: \`/~demos/basiclayout-basic/diagnosis/realtime\`,
          title: 'Real-time',
        },

        {
          link: \`/~demos/basiclayout-basic/diagnosis/capacity\`,
          title: 'Capacity',
        },

        {
          link: \`/~demos/basiclayout-basic/diagnosis/report\`,
          title: 'Reports',
        },
      ],
    },
    {
      link: '/~demos/basiclayout-demo-basic/backup',
      title: 'Backup',
      icon: <IconFont type="backup" />,
      selectedIcon: <Lottie path="/lottie/backup.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/log',
      title: 'Logs',
      icon: <IconFont type="log" />,
      selectedIcon: <Lottie path="/lottie/log.json" mode="icon" loop={false} speed={3} />,
      divider: true,
    },
    {
      link: '/~demos/basiclayout-demo-basic/property',
      title: 'Settings',
      icon: <IconFont type="property" />,
      selectedIcon: <Lottie path="/lottie/property.json" mode="icon" loop={false} speed={3} />,
    },
  ];
  const userMenu = (
    <Menu
      onClick={() => {
        message.success('You clicked the dropdown menu');
      }}
    >
      <Menu.Item key="profile">Profile Settings</Menu.Item>
      <Menu.Item key="modifyPassword">Change Password</Menu.Item>
      <Menu.Item key="logout">Log Out</Menu.Item>
    </Menu>
  );
  return (
    <BasicLayout
      logoUrl="https://gw.alipayobjects.com/zos/bmw-prod/3282eb3a-9a1e-4129-968e-be5f9e6cd1a2.svg"
      simpleLogoUrl="https://gw.alipayobjects.com/zos/bmw-prod/51cff69d-3717-4c7d-b736-8d1c9a52689a.svg"
      menus={menus}
      defaultSelectedKeys={['/~demos/basiclayout-basic/overview']}
      topHeader={{
        welcomePath: '/welcome',
        docsPath: '/docs/index.html',
        username: 'admin',
        userMenu,
        showLocale: true,
        appData: {
          shortName: 'OCP',
          version: '2.4.0',
          releaseTime: '2020-06-15 18:00:00',
        },
      }}
    >
      <PageContainerEmptyDemo />
    </BasicLayout>
  );
};
`},26773:function(t,n){"use strict";n.Z=`import React from 'react';
import { Alert, Menu, message, Popconfirm, Typography } from '@oceanbase/design';
import { BasicLayout, Lottie } from '@oceanbase/ui';
import Icon, { CloseOutlined } from '@oceanbase/icons';
import { ReactComponent as MonitorSvg } from '../../assets/monitor.svg';
import PageContainerEmptyDemo from '../../PageContainer/demo/empty';
import IconFont from './IconFont';

const { Paragraph } = Typography;

export default () => {
  const menus = [
    {
      link: '/~demos/basiclayout-demo-basic/overview',
      title: 'Dashboard',
      icon: <IconFont type="overview" />,
      selectedIcon: <Lottie path="/lottie/overview.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/tenant',
      title: 'Tenants',
      icon: <IconFont type="tenant" />,
      selectedIcon: <Lottie path="/lottie/tenant.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/monitor',
      title: 'Monitoring',
      icon: <Icon component={MonitorSvg} />,
      selectedIcon: <Lottie path="/lottie/monitor.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/diagnosis',
      title: 'Diagnostics',
      icon: <IconFont type="diagnosis" />,
      selectedIcon: <Lottie path="/lottie/diagnosis.json" mode="icon" loop={false} speed={3} />,
      children: [
        {
          link: \`/~demos/basiclayout-basic/diagnosis/realtime\`,
          title: 'Real-time',
        },

        {
          link: \`/~demos/basiclayout-basic/diagnosis/capacity\`,
          title: 'Capacity',
        },

        {
          link: \`/~demos/basiclayout-basic/diagnosis/report\`,
          title: 'Reports',
        },
      ],
    },
    {
      link: '/~demos/basiclayout-demo-basic/backup',
      title: 'Backup',
      icon: <IconFont type="backup" />,
      selectedIcon: <Lottie path="/lottie/backup.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/log',
      title: 'Logs',
      icon: <IconFont type="log" />,
      selectedIcon: <Lottie path="/lottie/log.json" mode="icon" loop={false} speed={3} />,
      divider: true,
    },
    {
      link: '/~demos/basiclayout-demo-basic/property',
      title: 'Settings',
      icon: <IconFont type="property" />,
      selectedIcon: <Lottie path="/lottie/property.json" mode="icon" loop={false} speed={3} />,
    },
  ];
  const userMenu = (
    <Menu
      onClick={() => {
        message.success('You clicked the dropdown menu');
      }}
    >
      <Menu.Item key="profile">Profile Settings</Menu.Item>
      <Menu.Item key="modifyPassword">Change Password</Menu.Item>
      <Menu.Item key="logout">Log Out</Menu.Item>
    </Menu>
  );
  const topHeaderTitle = (
    <Alert
      style={{
        backgroundColor: '#FAFAFA',
        color: '#fa8c16 !important',
        marginTop: -4,
        marginBottom: -4,
        paddingTop: 4,
        paddingBottom: 4,
      }}
      message={
        <Paragraph
          ellipsis={{
            rows: 1,
          }}
          style={{ marginBottom: 0 }}
        >
          {
            'The time difference between the client and server is too large (-90 seconds). Please correct the client or server time; the difference must be less than 60 seconds.'
          }
        </Paragraph>
      }
      action={
        <a
          onClick={() => {
            message.success('Verification started successfully');
          }}
        >
          Verify Again
        </a>
      }
      type="warning"
      banner={true}
      showIcon={true}
      closable={true}
      closeText={
        <Popconfirm
          placement="topRight"
          title="Please adjust the time and verify again. Close this alert only after the time difference is less than 60 seconds. Are you sure you want to close it?"
          onCancel={e => {
            // Stop propagation to avoid triggering Alert auto-close behavior
            e?.stopPropagation();
          }}
        >
          <CloseOutlined
            onClick={e => {
              e.stopPropagation();
            }}
          />
        </Popconfirm>
      }
    />
  );
  return (
    <BasicLayout
      logoUrl="https://gw.alipayobjects.com/zos/bmw-prod/3282eb3a-9a1e-4129-968e-be5f9e6cd1a2.svg"
      simpleLogoUrl="https://gw.alipayobjects.com/zos/bmw-prod/51cff69d-3717-4c7d-b736-8d1c9a52689a.svg"
      menus={menus}
      defaultSelectedKeys={['/~demos/basiclayout-basic/overview']}
      topHeader={{
        title: topHeaderTitle,
        welcomePath: '/welcome',
        docsPath: '/docs/index.html',
        username: 'admin',
        userMenu,
        showLocale: true,
        appData: {
          shortName: 'OCP',
          version: '2.4.0',
          releaseTime: '2020-06-15 18:00:00',
        },
      }}
    >
      <PageContainerEmptyDemo />
    </BasicLayout>
  );
};
`},4490:function(t,n){"use strict";n.Z=`import React from 'react';
import { Menu, message } from '@oceanbase/design';
import { BasicLayout, Lottie, Welcome } from '@oceanbase/ui';
import Icon from '@oceanbase/icons';
import { ReactComponent as MonitorSvg } from '../../assets/monitor.svg';
import IconFont from './IconFont';

export default () => {
  const menus = [
    {
      link: '/~demos/basiclayout-demo-basic/overview',
      title: 'Dashboard',
      icon: <IconFont type="overview" />,
      selectedIcon: <Lottie path="/lottie/overview.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/tenant',
      title: 'Tenants',
      icon: <IconFont type="tenant" />,
      selectedIcon: <Lottie path="/lottie/tenant.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/monitor',
      title: 'Monitoring',
      icon: <Icon component={MonitorSvg} />,
      selectedIcon: <Lottie path="/lottie/monitor.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/diagnosis',
      title: 'Diagnostics',
      icon: <IconFont type="diagnosis" />,
      selectedIcon: <Lottie path="/lottie/diagnosis.json" mode="icon" loop={false} speed={3} />,
      children: [
        {
          link: \`/~demos/basiclayout-basic/diagnosis/realtime\`,
          title: 'Real-time',
        },

        {
          link: \`/~demos/basiclayout-basic/diagnosis/capacity\`,
          title: 'Capacity',
        },

        {
          link: \`/~demos/basiclayout-basic/diagnosis/report\`,
          title: 'Reports',
        },
      ],
    },
    {
      link: '/~demos/basiclayout-demo-basic/backup',
      title: 'Backup',
      icon: <IconFont type="backup" />,
      selectedIcon: <Lottie path="/lottie/backup.json" mode="icon" loop={false} speed={3} />,
    },
    {
      link: '/~demos/basiclayout-demo-basic/log',
      title: 'Logs',
      icon: <IconFont type="log" />,
      selectedIcon: <Lottie path="/lottie/log.json" mode="icon" loop={false} speed={3} />,
      divider: true,
    },
    {
      link: '/~demos/basiclayout-demo-basic/property',
      title: 'Settings',
      icon: <IconFont type="property" />,
      selectedIcon: <Lottie path="/lottie/property.json" mode="icon" loop={false} speed={3} />,
    },
  ];
  const userMenu = (
    <Menu
      onClick={() => {
        message.success('You clicked the dropdown menu');
      }}
    >
      <Menu.Item key="profile">Profile Settings</Menu.Item>
      <Menu.Item key="modifyPassword">Change Password</Menu.Item>
      <Menu.Item key="logout">Log Out</Menu.Item>
    </Menu>
  );
  const introduces = [
    {
      image:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      title: 'Professional Management Platform',
      description: 'A professional database management platform built around OceanBase',
    },
    {
      image:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      title: 'Full Lifecycle Management',
      description:
        'Provides full lifecycle management for OceanBase from deployment and operations to upgrade and removal',
    },
    {
      image:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      title: 'Higher Efficiency, Lower Cost',
      description:
        'Improve OceanBase management efficiency and reduce enterprise IT operations costs',
    },
  ];
  const steps = [
    {
      title: 'Create Cluster',
      description: 'Create a database within a tenant to connect it to your application.',
    },
    {
      title: 'Create Tenant',
      description: 'Create a database within a tenant to connect it to your application.',
    },
    {
      title: 'Create Database',
      description: 'Create a database within a tenant to connect it to your application.',
    },
    {
      title: 'Connect Database',
      description: 'Create a database within a tenant to connect it to your application.',
    },
  ];
  const helps = [
    {
      title: 'Create a New Cluster',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'Create a New Tenant',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'Manage Clusters',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'Manage Tenants',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'View Tasks',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'View Alerts',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'Add New User',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'View More',
      link: 'https://www.oceanbase.com',
      isMore: true,
    },
  ];
  return (
    <BasicLayout
      location={{
        pathname: '/welcome',
      }}
      logoUrl="https://gw.alipayobjects.com/zos/bmw-prod/3282eb3a-9a1e-4129-968e-be5f9e6cd1a2.svg"
      simpleLogoUrl="https://gw.alipayobjects.com/zos/bmw-prod/51cff69d-3717-4c7d-b736-8d1c9a52689a.svg"
      menus={menus}
      topHeader={{
        welcomePath: '/welcome',
        docsPath: '/docs/index.html',
        username: 'admin',
        userMenu,
        showLocale: true,
        appData: {
          shortName: 'OCP',
          version: '2.4.0',
          releaseTime: '2020-06-15 18:00:00',
        },
      }}
    >
      <Welcome
        title="Hi, welcome to OceanBase Cloud Platform"
        description="OceanBase Cloud Platform (OCP) is a platform for managing OceanBase database clusters. With OCP, you can install, deploy, monitor, and alert on OceanBase clusters throughout their full lifecycle. We are committed to providing efficient management services that create more value for you."
        bgImage="https://gw-office.alipayobjects.com/bmw-prod/37822958-2b90-4414-a61b-581c0b744c13.png"
        introduces={introduces}
        steps={steps}
        buttonText="Create Cluster"
        buttonProps={{
          onClick: () => {
            message.success('You clicked the button');
          },
        }}
        helps={helps}
      />
    </BasicLayout>
  );
};
`},31173:function(t,n){"use strict";n.Z=`import { Button, Space, Table } from '@oceanbase/design';
import type { ColumnsType } from '@oceanbase/design/es/table';
import { BatchOperationBar } from '@oceanbase/ui';
import React from 'react';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

export default () => {
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
  const content = ({ selectedRows, setSelectedRows }) => {
    const rowSelection = {
      selectedRowKeys: selectedRows?.map(row => row?.key),
      onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        setSelectedRows(selectedRows);
        console.log(\`selectedRowKeys: \${selectedRowKeys}\`, 'selectedRows: ', selectedRows);
      },
    };
    return (
      <Table
        rowKey={(row: DataType) => row.key}
        toolAlertRender={false}
        hiddenCancelBtn={true}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={selectedRows}
      />
    );
  };
  const alertOptionRender = ({ selectedRows, cleanSelectedRows }) => {
    return (
      <Space>
        <Button type="primary" onClick={() => console.log('selectedRows: ', selectedRows)}>
          Batch Operation
        </Button>
        <Button onClick={() => cleanSelectedRows()}>Batch Delete</Button>
      </Space>
    );
  };
  return (
    <BatchOperationBar
      title={'Table'}
      content={content}
      selectedRows={data}
      alertOptionRender={alertOptionRender}
    />
  );
};
`},70342:function(t,n){"use strict";n.Z=`import { Button, Drawer, Table } from '@oceanbase/design';
import type { ColumnsType } from '@oceanbase/design/es/table';
import { BatchOperationBar } from '@oceanbase/ui';
import React, { useState } from 'react';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

export default () => {
  const [open, setOpen] = useState<boolean>(true);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [selectedData, setSelectedData] = useState<DataType[]>([]);
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
  const content = ({ selectedRows, setSelectedRows }) => {
    const rowSelection = {
      selectedRowKeys: selectedRows?.map(row => row?.key),
      onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        setSelectedRows(selectedRows);
        setSelectedData(selectedData);
        console.log(\`selectedRowKeys: \${selectedRowKeys}\`, 'selectedRows: ', selectedRows);
      },
    };
    return (
      <Table
        rowKey={(row: DataType) => row.key}
        toolAlertRender={false}
        hiddenCancelBtn={true}
        rowSelection={rowSelection}
        pagination={{
          pageSize: 2,
        }}
        columns={columns}
        dataSource={selectedRows}
      />
    );
  };
  const onClose = () => {
    setOpen(false);
  };
  const showDrawer = () => {
    setOpen(true);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer width={500} open={open} title="Basic Drawer" placement="right" onClose={onClose}>
        <Table
          columns={columns}
          dataSource={data}
          toolAlertRender={false}
          hiddenCancelBtn={true}
          pagination={{
            pageSize: 2,
          }}
          rowSelection={{
            selectedRowKeys: selectedRowKeys,
            onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
              setSelectedRowKeys(selectedRowKeys);
              setSelectedData(selectedRows);
            },
          }}
        />
        <BatchOperationBar
          width={500}
          position={['bottom', 'right']}
          title={'Table'}
          content={content}
          selectedRows={selectedData}
        />
      </Drawer>
    </>
  );
};
`},80403:function(t,n){"use strict";n.Z=`import { Button, Drawer, Space, Table } from '@oceanbase/design';
import type { ColumnsType } from '@oceanbase/design/es/table';
import { BatchOperationBar } from '@oceanbase/ui';
import React, { useState } from 'react';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

export default () => {
  const [open, setOpen] = useState<boolean>(true);
  const [selectedRowKeysTable1, setSelectedRowKeysTabel1] = useState<React.Key[]>([]);
  const [selectedDataTable1, setSelectedDataTable1] = useState<DataType[]>([]);
  const [selectedRowKeysTable2, setSelectedRowKeysTable2] = useState<React.Key[]>([]);
  const [selectedDataTable2, setSelectedDataTable2] = useState<DataType[]>([]);
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '5',
      name: 'Jim Red',
      age: 78,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
  const batchOperationBarContent1 = ({ selectedRows, setSelectedRows }) => {
    const rowSelection = {
      selectedRowKeys: selectedRows?.map(row => row?.key),
      onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        setSelectedRows(selectedRows);
        setSelectedDataTable1(selectedDataTable1);
        console.log(\`selectedRowKeys: \${selectedRowKeys}\`, 'selectedRows: ', selectedRows);
      },
    };
    return (
      <Table
        rowKey={(row: DataType) => row.key}
        rowSelection={rowSelection}
        toolAlertRender={false}
        hiddenCancelBtn={true}
        pagination={{
          pageSize: 2,
        }}
        columns={columns}
        dataSource={selectedRows}
      />
    );
  };
  const batchOperationBarContent2 = ({ selectedRows, setSelectedRows }) => {
    const rowSelection = {
      selectedRowKeys: selectedRows?.map(row => row?.key),
      onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        setSelectedRows(selectedRows);
        setSelectedDataTable1(selectedDataTable2);
        console.log(\`selectedRowKeys: \${selectedRowKeys}\`, 'selectedRows: ', selectedRows);
      },
    };
    return (
      <Table
        rowKey={(row: DataType) => row.key}
        rowSelection={rowSelection}
        toolAlertRender={false}
        hiddenCancelBtn={true}
        pagination={false}
        columns={columns}
        dataSource={selectedRows}
      />
    );
  };
  const alertOptionRender = ({ selectedRows, cleanSelectedRows }) => {
    return (
      <Space>
        <Button onClick={() => console.log('selectedRows: ', selectedRows)}>Batch Operation</Button>
        <Button onClick={() => cleanSelectedRows()}>Batch Delete</Button>
      </Space>
    );
  };
  const onClose = () => {
    setOpen(false);
  };
  const showDrawer = () => {
    setOpen(true);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer width={600} open={open} title="Basic Drawer" placement="right" onClose={onClose}>
        <h2>Table1</h2>
        <Table
          columns={columns}
          dataSource={data}
          toolAlertRender={false}
          hiddenCancelBtn={true}
          pagination={{
            pageSize: 2,
          }}
          rowSelection={{
            selectedRowKeys: selectedRowKeysTable1,
            onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
              setSelectedRowKeysTabel1(selectedRowKeys);
              setSelectedDataTable1(selectedRows);
            },
          }}
        />
        <h2>Table2</h2>
        <Table
          columns={columns}
          dataSource={data}
          toolAlertRender={false}
          hiddenCancelBtn={true}
          pagination={{
            pageSize: 2,
          }}
          rowSelection={{
            selectedRowKeys: selectedRowKeysTable2,
            onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
              setSelectedRowKeysTable2(selectedRowKeys);
              setSelectedDataTable2(selectedRows);
            },
          }}
        />
        <h2>Table3</h2>
        <Table
          columns={columns}
          dataSource={data}
          toolAlertRender={false}
          hiddenCancelBtn={true}
          pagination={{
            pageSize: 2,
          }}
        />
        <h2>Table4</h2>
        <Table
          columns={columns}
          dataSource={data}
          toolAlertRender={false}
          hiddenCancelBtn={true}
          pagination={{
            pageSize: 2,
          }}
          style={{
            marginBottom: 128,
          }}
        />
        <BatchOperationBar
          position={['bottom', 'right']}
          width={600}
          title={'Table1'}
          content={batchOperationBarContent1}
          barStyle={{
            bottom: 64,
          }}
          selectedRows={selectedDataTable1}
          alertOptionRender={alertOptionRender}
        />
        <BatchOperationBar
          width={600}
          title={'Table2'}
          content={batchOperationBarContent2}
          selectedRows={selectedDataTable2}
          alertOptionRender={alertOptionRender}
        />
      </Drawer>
    </>
  );
};
`},38723:function(t,n){"use strict";n.Z=`import { Button, Space, Table } from '@oceanbase/design';
import type { ColumnsType } from '@oceanbase/design/es/table';
import { BatchOperationBar } from '@oceanbase/ui';
import React, { useState } from 'react';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

export default () => {
  const [selectedRowKeysTable1, setSelectedRowKeysTabel1] = useState<React.Key[]>([]);
  const [selectedDataTable1, setSelectedDataTable1] = useState<DataType[]>([]);
  const [selectedRowKeysTable2, setSelectedRowKeysTable2] = useState<React.Key[]>([]);
  const [selectedDataTable2, setSelectedDataTable2] = useState<DataType[]>([]);
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '5',
      name: 'Jim Red',
      age: 78,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
  const batchOperationBarContent1 = ({ selectedRows, setSelectedRows }) => {
    const rowSelection = {
      selectedRowKeys: selectedRows?.map(row => row?.key),
      onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        setSelectedRows(selectedRows);
        setSelectedDataTable1(selectedDataTable1);
        console.log(\`selectedRowKeys: \${selectedRowKeys}\`, 'selectedRows: ', selectedRows);
      },
    };
    return (
      <Table
        rowKey={(row: DataType) => row.key}
        rowSelection={rowSelection}
        toolAlertRender={false}
        hiddenCancelBtn={true}
        pagination={{
          pageSize: 2,
        }}
        columns={columns}
        dataSource={selectedRows}
      />
    );
  };
  const batchOperationBarContent2 = ({ selectedRows, setSelectedRows }) => {
    const rowSelection = {
      selectedRowKeys: selectedRows?.map(row => row?.key),
      onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        setSelectedRows(selectedRows);
        setSelectedDataTable1(selectedDataTable2);
        console.log(\`selectedRowKeys: \${selectedRowKeys}\`, 'selectedRows: ', selectedRows);
      },
    };
    return (
      <Table
        rowKey={(row: DataType) => row.key}
        rowSelection={rowSelection}
        toolAlertRender={false}
        hiddenCancelBtn={true}
        pagination={false}
        columns={columns}
        dataSource={selectedRows}
      />
    );
  };

  const alertOptionRender = ({ selectedRows, cleanSelectedRows }) => {
    return (
      <Space>
        <Button onClick={() => console.log('selectedRows: ', selectedRows)}>Batch Operation</Button>
        <Button onClick={() => cleanSelectedRows()}>Batch Delete</Button>
      </Space>
    );
  };
  return (
    <>
      <div style={{ padding: 24 }}>
        <h2>Table1</h2>
        <Table
          columns={columns}
          toolAlertRender={false}
          hiddenCancelBtn={true}
          dataSource={data}
          pagination={{
            pageSize: 2,
          }}
          rowSelection={{
            selectedRowKeys: selectedRowKeysTable1,
            onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
              setSelectedRowKeysTabel1(selectedRowKeys);
              setSelectedDataTable1(selectedRows);
            },
          }}
        />
        <h2>Table2</h2>
        <Table
          columns={columns}
          dataSource={data}
          toolAlertRender={false}
          hiddenCancelBtn={true}
          pagination={{
            pageSize: 2,
          }}
          rowSelection={{
            selectedRowKeys: selectedRowKeysTable2,
            onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
              setSelectedRowKeysTable2(selectedRowKeys);
              setSelectedDataTable2(selectedRows);
            },
          }}
        />
      </div>
      <BatchOperationBar
        title={'Table1'}
        content={batchOperationBarContent1}
        barStyle={{
          bottom: 64,
        }}
        selectedRows={selectedDataTable1}
        alertOptionRender={alertOptionRender}
      />
      <BatchOperationBar
        title={'Table2'}
        content={batchOperationBarContent2}
        selectedRows={selectedDataTable2}
        alertOptionRender={alertOptionRender}
      />
    </>
  );
};
`},6845:function(t,n){"use strict";n.Z=`import { Table } from '@oceanbase/design';
import type { ColumnsType } from '@oceanbase/design/es/table';
import { BatchOperationBar } from '@oceanbase/ui';
import type { AlertRenderParams } from '@oceanbase/ui/es/BatchOperationBar';
import React, { useState } from 'react';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

export default () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [selectedData, setSelectedData] = useState<DataType[]>([]);
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
  const content = ({ selectedRows, setSelectedRows }: AlertRenderParams) => {
    const rowSelection = {
      selectedRowKeys: selectedRows?.map(row => row?.key),
      onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        setSelectedRows(selectedRows);
        setSelectedData(selectedData);
        console.log(\`selectedRowKeys: \${selectedRowKeys}\`, 'selectedRows: ', selectedRows);
      },
    };
    return (
      <Table
        rowKey={(row: DataType) => row.key}
        rowSelection={rowSelection}
        toolAlertRender={false}
        hiddenCancelBtn={true}
        pagination={{
          pageSize: 2,
        }}
        columns={columns}
        dataSource={selectedRows}
      />
    );
  };
  return (
    <>
      <div style={{ padding: 24 }}>
        <h2>Table</h2>
        <Table
          columns={columns}
          dataSource={data}
          toolAlertRender={false}
          hiddenCancelBtn={true}
          pagination={{
            pageSize: 2,
          }}
          rowSelection={{
            selectedRowKeys: selectedRowKeys,
            onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
              setSelectedRowKeys(selectedRowKeys);
              setSelectedData(selectedRows);
            },
          }}
        />
      </div>
      <BatchOperationBar title={'Table'} content={content} selectedRows={selectedData} />
    </>
  );
};
`},64262:function(t,n){"use strict";n.Z=`import React from 'react';
import { Boundary } from '@oceanbase/ui';

export default () => {
  return <Boundary.Code code={403} />;
};
`},48846:function(t,n){"use strict";n.Z=`import React from 'react';
import { Boundary } from '@oceanbase/ui';

export default () => {
  return <Boundary.Code code={404} />;
};
`},61867:function(t,n){"use strict";n.Z=`import React from 'react';
import { Boundary } from '@oceanbase/ui';

export default () => {
  return (
    <Boundary.Exception isNotCompatible={true}>
      <div>Compatibility fallback</div>
    </Boundary.Exception>
  );
};
`},34474:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Button, Radio } from '@oceanbase/design';
import { Boundary } from '@oceanbase/ui';

const ThrowError: React.FC = () => {
  const [error, setError] = useState<Error>();
  const onClick = () => {
    setError(new Error('An Uncaught Error'));
  };

  if (error) {
    throw error;
  }
  return (
    <div>
      <Button danger onClick={onClick}>
        Click me to throw a error
      </Button>
    </div>
  );
};

export default () => {
  const [showError, setShowError] = useState(false);
  const [hasButton, setHasButton] = useState(true);
  const onErrorChange = e => {
    setShowError(e.target.value);
  };
  const onButtonChange = e => {
    setHasButton(e.target.value);
  };

  return (
    <div>
      showError:
      <Radio.Group onChange={onErrorChange} value={showError}>
        <Radio value={true}>true</Radio>
        <Radio value={false}>false</Radio>
      </Radio.Group>
      <br />
      hasButton:
      <Radio.Group onChange={onButtonChange} value={hasButton}>
        <Radio value={true}>true</Radio>
        <Radio value={false}>false</Radio>
      </Radio.Group>
      <Boundary.Exception showError={showError} hasButton={hasButton}>
        <ThrowError />
      </Boundary.Exception>
    </div>
  );
};
`},68950:function(t,n){"use strict";n.Z=`import React, { useCallback, useState } from 'react';
import { Boundary } from '@oceanbase/ui';

export default () => {
  const [state, setState] = useState('NOT_OPEN');
  const MONITOR_OPEN_CONFIG = {
    NOT_OPEN: {
      title: 'Performance monitoring is not enabled',
      imageUrl:
        'https://gw.alipayobjects.com/mdn/rms_6fd3f1/afts/img/A*EIJaSJDIP2kAAAAAAAAAAAAAARQnAQ',
      buttonText: 'Enable performance monitoring',
    },
    PENDING: {
      title: 'Performance monitoring enabled successfully',
      imageUrl:
        'https://gw.alipayobjects.com/mdn/rms_6fd3f1/afts/img/A*Qf2zSKyaJYwAAAAAAAAAAAAAARQnAQ',
      buttonText: '',
    },
    CANNOT_ACCESS: {
      title: 'Failed to enable performance monitoring',
      imageUrl:
        'https://gw.alipayobjects.com/mdn/rms_6fd3f1/afts/img/A*pwK7QqOf-dwAAAAAAAAAAAAAARQnAQ',
      buttonText: 'Re-enable performance monitoring',
    },
  };

  const handleClick = useCallback(() => {
    const theState = Object.keys(MONITOR_OPEN_CONFIG)[Math.floor(Math.random() * 2)];
    setState(theState);
  }, []);

  return <Boundary.Function config={MONITOR_OPEN_CONFIG} state={state} onClick={handleClick} />;
};
`},80918:function(t,n){"use strict";n.Z=`import React from 'react';
import { ContentWithIcon } from '@oceanbase/ui';
import { StepForwardOutlined } from '@oceanbase/icons';

export default () => {
  return (
    <>
      <div>
        <ContentWithIcon
          iconType="question"
          content="Paid service ratio"
          tooltip={{
            title:
              'Percentage of registered service person-days attributed to a service package, calculated as (total person-days with a service package) / (total person-days invested)',
            overlayStyle: { maxWidth: '330px' },
          }}
          color="default"
        />
      </div>
      <div>
        <ContentWithIcon
          iconType="question"
          content="Custom font and icon size and color"
          tooltip={{
            title: 'Custom font and icon size and color',
          }}
          color="#8592AD"
          size={16}
        />
      </div>
      <div>
        <ContentWithIcon
          content="Custom icon"
          tooltip={{
            title: 'Custom icon',
          }}
          color="default"
          suffixIcon={<StepForwardOutlined />}
        />
      </div>
    </>
  );
};
`},51373:function(t,n){"use strict";n.Z=`import React from 'react';
import { ContentWithIcon } from '@oceanbase/ui';

export default () => {
  return (
    <>
      <div>
        <ContentWithIcon
          iconType="info"
          content="Info tip"
          tooltip={{
            title:
              'Percentage of registered service person-days attributed to a service package, calculated as (total person-days with a service package) / (total person-days invested)',
            overlayStyle: { maxWidth: '330px' },
          }}
          color="default"
          textHidden={false}
        />
      </div>
      <div>
        <ContentWithIcon
          iconType="info"
          content="Custom info icon color"
          tooltip={{
            title:
              'Percentage of registered service person-days attributed to a service package, calculated as (total person-days with a service package) / (total person-days invested)',
            overlayStyle: { maxWidth: '330px' },
          }}
          color="default"
          textHidden={false}
          infoColor="#1890FF"
        />
      </div>
    </>
  );
};
`},42439:function(t,n){"use strict";n.Z=`import React from 'react';
import { ContentWithIcon } from '@oceanbase/ui';

export default () => {
  return (
    <>
      <div>
        <ContentWithIcon
          iconType="exclamation"
          content="Custom font and icon size"
          tooltip={{
            title: 'Custom font and icon size',
          }}
          color="#default"
          size={16}
        />
      </div>
      <div>
        <ContentWithIcon
          iconType="exclamation"
          content="Custom icon color"
          tooltip={{
            title: 'Custom icon color',
          }}
          color="#8592AD"
          exclamationColor="#f5222d"
        />
      </div>
    </>
  );
};
`},36599:function(t,n){"use strict";n.Z=`import React from 'react';
import { ContentWithIcon } from '@oceanbase/ui';

export default () => {
  return (
    <ContentWithIcon
      iconType="info"
      content="Paid service ratio"
      tooltip={{
        title:
          'Percentage of registered service person-days attributed to a service package, calculated as (total person-days with a service package) / (total person-days invested)',
        overlayStyle: { maxWidth: '330px' },
      }}
      prefixIcon
      suffixIcon={null}
    />
  );
};
`},96563:function(t,n){"use strict";n.Z=`import React from 'react';
import { ContentWithIcon } from '@oceanbase/ui';

export default () => {
  return (
    <>
      <ContentWithIcon
        iconType="question"
        content="Paid service ratio"
        popOver={{
          content: (
            <div>
              <span style={{ marginRight: '4px' }}>Description text with a hyperlink</span>
              <a>View help documentation</a>
            </div>
          ),
          overlayStyle: { maxWidth: '180px' },
        }}
        color="default"
        tooltipWithLink={true}
      />
    </>
  );
};
`},89810:function(t,n){"use strict";n.Z=`import React from 'react';
import { ContentWithQuestion } from '@oceanbase/ui';

export default () => {
  return (
    <ContentWithQuestion
      content="Paid service ratio"
      tooltip={{
        title:
          'Percentage of registered service person-days attributed to a service package, calculated as (total person-days with a service package) / (total person-days invested)',
      }}
    />
  );
};
`},18464:function(t,n){"use strict";n.Z=`import React from 'react';
import { ContentWithQuestion } from '@oceanbase/ui';
import { QuestionCircleFilled } from '@oceanbase/icons';

export default () => {
  return (
    <ContentWithQuestion
      content="Paid service ratio"
      tooltip={{
        title:
          'Percentage of registered service person-days attributed to a service package, calculated as (total person-days with a service package) / (total person-days invested)',
      }}
      suffixIcon={<QuestionCircleFilled />}
    />
  );
};
`},15707:function(t,n){"use strict";n.Z=`import React from 'react';
import { ContentWithQuestion } from '@oceanbase/ui';

export default () => {
  return (
    <ContentWithQuestion
      content="Paid service ratio"
      tooltip={{
        title:
          'Percentage of registered service person-days attributed to a service package, calculated as (total person-days with a service package) / (total person-days invested)',
      }}
      prefixIcon={true}
      suffixIcon={null}
    />
  );
};
`},23841:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { DateRanger } from '@oceanbase/ui';
import { Checkbox, Divider, Flex } from '@oceanbase/design';
import dayjs from 'dayjs';

export default () => {
  const options = [
    { label: 'hasRewind', value: 'hasRewind' },
    { label: 'hasForward', value: 'hasForward' },
    { label: 'hasNow', value: 'hasNow' },
  ];

  const [state, setState] = useState(options.map(item => item.value));

  const onChange = checkedValue => {
    setState(checkedValue);
  };
  const getValue = name => {
    return state.some(v => v === name);
  };

  return (
    <div>
      <Flex gap="middle" vertical>
        <Checkbox.Group options={options} value={state} onChange={onChange} />
      </Flex>
      <Divider children="preview" />
      <DateRanger
        onChange={value => {
          if (value) {
            console.log(value[0].format(), value[1].format());
          } else {
            console.log(value);
          }
        }}
        allowClear={true}
        hasForward={getValue('hasForward')}
        hasRewind={getValue('hasRewind')}
        hasNow={getValue('hasNow')}
      />
    </div>
  );
};
`},57383:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { DateRanger } from '@oceanbase/ui';
import { ConfigProvider, Radio, RadioChangeEvent, Space } from '@oceanbase/design';
import dayjs from 'dayjs';
import enUS from '@oceanbase/ui/locale/en-US';
import zhCN from '@oceanbase/ui/locale/zh-CN';

export default () => {
  const [locale, setLocal] = useState(enUS);
  const [format, setFormat] = useState('MMM DD, YYYY HH:mm:ss(UTC+8)');
  // \u521D\u59CB\u5316\u65F6\u8BBE\u7F6E dayjs locale
  React.useEffect(() => {
    dayjs.locale('en');
  }, []);

  const changeLocale = (e: RadioChangeEvent) => {
    const localeValue = e.target.value;
    setLocal(localeValue);
    if (localeValue === enUS || (localeValue as any)?.locale === 'en') {
      dayjs.locale('en');
      setFormat('MMM DD, YYYY HH:mm:ss(UTC+8)');
    } else {
      dayjs.locale('zh-cn');
      setFormat('YYYY-MM-DD HH:mm:ss(UTC+8)');
    }
  };

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <span style={{ marginInlineEnd: 16 }}>\u590D\u5236\u7C98\u8D34\u683C\u5F0F:</span>
        <Radio.Group value={locale} onChange={changeLocale}>
          <Radio.Button key="en" value={enUS}>
            English
          </Radio.Button>
          <Radio.Button key="cn" value={zhCN}>
            \u4E2D\u6587
          </Radio.Button>
        </Radio.Group>
      </div>
      <ConfigProvider locale={locale}>
        <Space direction="vertical">
          <DateRanger
            onChange={value => {
              console.log('onChange', \`\${value[0].format()} - \${value[1].format()}\`);
            }}
            hasSync={false}
            allowClear
            format={format}
          />
        </Space>
      </ConfigProvider>
    </div>
  );
};
`},47724:function(t,n){"use strict";n.Z=`import React from 'react';
import { DateRanger } from '@oceanbase/ui';
import dayjs from 'dayjs';

export default () => (
  <DateRanger
    defaultValue={[dayjs('2019/05/20'), dayjs('2019/06/20')]}
    selects={[DateRanger.YESTERDAY, DateRanger.TODAY, DateRanger.THIS_WEEK, DateRanger.THIS_MONTH]}
  />
);
`},80972:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { DateRanger } from '@oceanbase/ui';
import { Checkbox, Divider, Flex } from '@oceanbase/design';
import dayjs from 'dayjs';

export default () => {
  return (
    <div>
      <Flex gap="middle" vertical>
        <DateRanger allowClear history />
        <DateRanger allowClear history />
      </Flex>
    </div>
  );
};
`},4402:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { DateRanger } from '@oceanbase/ui';
import { ConfigProvider, Radio, RadioChangeEvent, Space } from '@oceanbase/design';
import dayjs from 'dayjs';
import enUS from '@oceanbase/ui/locale/en-US';
import zhCN from '@oceanbase/ui/locale/zh-CN';

export default () => {
  const [locale, setLocal] = useState(enUS);

  const changeLocale = (e: RadioChangeEvent) => {
    const localeValue = e.target.value;
    setLocal(localeValue);
    if (!localeValue) {
      dayjs.locale('en');
    } else {
      dayjs.locale('zh-cn');
    }
  };

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <span style={{ marginInlineEnd: 16 }}>Change locale of components:</span>
        <Radio.Group value={locale} onChange={changeLocale}>
          <Radio.Button key="en" value={enUS}>
            English
          </Radio.Button>
          <Radio.Button key="cn" value={zhCN}>
            \u4E2D\u6587
          </Radio.Button>
        </Radio.Group>
      </div>
      <ConfigProvider locale={locale}>
        <Space direction="vertical">
          <DateRanger allowClear />
          <DateRanger simpleMode />
        </Space>
      </ConfigProvider>
    </div>
  );
};
`},30520:function(t,n){"use strict";n.Z=`import React from 'react';
import { DateRanger } from '@oceanbase/ui';
import dayjs from 'dayjs';

export default () => {
  return (
    <DateRanger
      rules={[
        {
          validator(value) {
            if (Math.abs(dayjs(value[0]).diff(dayjs(value[1]))) > 24 * 60 * 60 * 1000) {
              return 'all';
            }

            return null;
          },
          message: 'Time range cannot exceed one day',
        },
      ]}
    />
  );
};
`},88370:function(t,n){"use strict";n.Z=`import React from 'react';
import { DateRanger } from '@oceanbase/ui';
import moment, { Moment } from 'moment';

const {
  NEAR_1_MINUTES,
  NEAR_30_MINUTES,
  NEAR_1_HOURS,
  NEAR_3_HOURS,
  NEAR_6_HOURS,
  TODAY,
  LAST_3_DAYS,
  THIS_WEEK,
  THIS_MONTH,
  THIS_YEAR,
} = DateRanger;
export default () => (
  <DateRanger
    defaultQuickValue={NEAR_30_MINUTES.name}
    selects={[
      NEAR_1_MINUTES,
      {
        label: 'Last 15 Minutes',
        enLabel: 'Last 15 Minutes',
        rangeLabel: '15m',
        name: 'NEAR_15_MINUTES',
        range: (current: Moment = moment()) => [
          current.clone().subtract(15, 'minute'),
          current.clone(),
        ],
      },
      NEAR_30_MINUTES,
      NEAR_1_HOURS,
      NEAR_3_HOURS,
      NEAR_6_HOURS,
      TODAY,
      LAST_3_DAYS,
      THIS_WEEK,
      THIS_MONTH,
      THIS_YEAR,
    ]}
  />
);
`},71600:function(t,n){"use strict";n.Z=`import React from 'react';
import { DateRanger } from '@oceanbase/ui';

export default () => {
  return <DateRanger simpleMode />;
};
`},50752:function(t,n){"use strict";n.Z=`import React, { useState, useRef } from 'react';
import { DateRanger } from '@oceanbase/ui';
import { Divider, Flex, Button } from '@oceanbase/design';
import dayjs from 'dayjs';

type TimeRangeRef = {
  updateCurrentTime: () => void;
};

export default () => {
  const ref = useRef<TimeRangeRef>();
  const [timeRange, setTimeRange] = useState([]);
  const format = 'YYYY-MM-DD HH:mm:ss';
  return (
    <div>
      <Flex gap="middle" align="center">
        <Button
          onClick={() => {
            console.log('ref: ', ref);
            ref.current.updateCurrentTime();
          }}
        >
          Update time externally
        </Button>
        {timeRange.length && (
          <span>
            {\`\${dayjs(timeRange[0]).format(format)} ~ \${dayjs(timeRange[1]).format(format)}\`}
          </span>
        )}
      </Flex>
      <Divider children="preview" />
      <DateRanger
        ref={ref}
        onChange={setTimeRange}
        defaultQuickValue={DateRanger.NEAR_30_MINUTES.name}
        hasRewind={false}
        hasForward={false}
        hasSync={false}
      />
    </div>
  );
};
`},66510:function(t,n){"use strict";n.Z=`import React from 'react';
import { Form } from '@oceanbase/design';
import { DateRanger } from '@oceanbase/ui';
import dayjs from 'dayjs';

export default () => {
  const handleChange = ({ range }) => {
    console.log(range[0].format('YYYY-MM-DD HH:mm:ss'));
    console.log(range[1].format('YYYY-MM-DD HH:mm:ss'));
  };
  const [form] = Form.useForm();

  return (
    <Form form={form} onValuesChange={handleChange}>
      <Form.Item name="range" initialValue={[dayjs('2021/01/01'), dayjs('2021/05/01')]}>
        <DateRanger />
      </Form.Item>
    </Form>
  );
};
`},36220:function(t,n){"use strict";n.Z=`import React, { useCallback, useEffect, useState } from 'react';
import { Button } from '@oceanbase/design';
import { Dialog } from '@oceanbase/ui';
import { debounce } from 'lodash';

const docLink = 'https://www.oceanbase.com/docs/enterprise';

export default () => {
  const [showDialog, setShowDialog] = useState(false);
  const [clientHeight, setClientHeight] = useState(document.body.clientHeight);
  const [clientWidth, setClientWidth] = useState(document.body.clientWidth);

  const onHelpDocClick = useCallback(() => {
    setShowDialog(true);
  }, [setShowDialog]);

  const handleResize = debounce(() => {
    setClientWidth(document.body.clientWidth);
    setClientHeight(document.body.clientHeight);
  }, 300);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Dialog
        visible={showDialog}
        onClose={() => setShowDialog(false)}
        clientWidth={clientWidth}
        clientHeight={clientHeight}
        draggable={true}
        extLink={{ link: docLink }}
      >
        <iframe src={docLink} />
      </Dialog>
      <Button onClick={onHelpDocClick}>Help</Button>
    </div>
  );
};
`},48457:function(t,n){"use strict";n.Z=`import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Button } from '@oceanbase/design';
import { Dialog } from '@oceanbase/ui';
import { debounce } from 'lodash';

const docLink = 'https://www.oceanbase.com/docs/enterprise';
const DEFAULT_EMBDED_WIDTH = 0.4;
const MAX_EMBED_WIDTH = 0.5;
const MIN_EMBED_WIDTH = 0.3;
const MOBILE_CLIENT_WIDTH = 1280;

export default () => {
  const [showDialog, setShowDialog] = useState(false);
  const [clientHeight, setClientHeight] = useState(document.body.clientHeight);
  const [clientWidth, setClientWidth] = useState(document.body.clientWidth);
  const [rootWidth, setRootWidth] = useState('100%');

  const onHelpDocClick = useCallback(() => {
    setShowDialog(true);
  }, [setShowDialog]);

  const handleResize = debounce(() => {
    setClientWidth(document.body.clientWidth);
    setClientHeight(document.body.clientHeight);
  }, 300);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const DialogWrapper = useMemo(() => {
    let result: any = {
      visible: showDialog,
      onClose: () => setShowDialog(false),
      clientWidth: clientWidth,
      clientHeight: clientHeight,
      draggable: true,
      extLink: { link: docLink },
    };
    if (clientWidth >= MOBILE_CLIENT_WIDTH) {
      result = {
        ...result,
        setRootWidth,
        max: [MAX_EMBED_WIDTH * clientWidth, clientHeight],
        min: [MIN_EMBED_WIDTH * clientWidth, clientHeight],
        width: DEFAULT_EMBDED_WIDTH * clientWidth,
        height: clientHeight,
        left: (1 - DEFAULT_EMBDED_WIDTH) * clientWidth,
        isEmbed: true,
      };
    } else {
      result = {
        ...result,
        max: [clientWidth, clientHeight],
        width: DEFAULT_EMBDED_WIDTH * clientWidth,
        height: clientHeight / 2,
        top: clientHeight / 2,
        isEmbed: false,
      };
    }
    return (
      <Dialog {...result}>
        <iframe src={docLink} />
      </Dialog>
    );
  }, [clientWidth, clientHeight, showDialog, setRootWidth, setShowDialog]);

  return (
    <div
      style={{
        transition: 'all 0.3s ease-out',
        overflow: 'scroll',
        height: '100%',
        border: '2px solid aqua',
        width: rootWidth,
      }}
    >
      {DialogWrapper}
      <Button onClick={onHelpDocClick}>Help</Button>
    </div>
  );
};
`},9576:function(t,n){"use strict";n.Z=`import React, { useCallback, useEffect, useState } from 'react';
import { Button } from '@oceanbase/design';
import { Dialog } from '@oceanbase/ui';
import { debounce } from 'lodash';

const docLink = 'https://www.oceanbase.com/docs/enterprise';
const DEFAULT_EMBDED_WIDTH = 0.4;
const MAX_EMBED_WIDTH = 0.5;
const MIN_EMBED_WIDTH = 0.3;

export default () => {
  const [showDialog, setShowDialog] = useState(false);
  const [clientHeight, setClientHeight] = useState(document.body.clientHeight);
  const [clientWidth, setClientWidth] = useState(document.body.clientWidth);
  const [rootWidth, setRootWidth] = useState('100%');

  const onHelpDocClick = useCallback(() => {
    setShowDialog(true);
  }, [setShowDialog]);

  const handleResize = debounce(() => {
    setClientWidth(document.body.clientWidth);
    setClientHeight(document.body.clientHeight);
  }, 300);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      style={{
        transition: 'all 0.3s ease-out',
        overflow: 'scroll',
        height: '100%',
        border: '2px solid aqua',
        width: rootWidth,
      }}
    >
      <Dialog
        visible={showDialog}
        onClose={() => setShowDialog(false)}
        clientWidth={clientWidth}
        clientHeight={clientHeight}
        draggable={true}
        extLink={{ link: docLink }}
        setRootWidth={setRootWidth}
        max={[MAX_EMBED_WIDTH * clientWidth, clientHeight]}
        min={[MIN_EMBED_WIDTH * clientWidth, clientHeight]}
        width={DEFAULT_EMBDED_WIDTH * clientWidth}
        height={clientHeight}
        top={0}
        left={(1 - DEFAULT_EMBDED_WIDTH) * clientWidth}
        isEmbed={true}
      >
        <iframe src={docLink} />
      </Dialog>
      <Button onClick={onHelpDocClick}>Help</Button>
    </div>
  );
};
`},82770:function(t,n){"use strict";n.Z=`import React, { useCallback, useState } from 'react';
import { Button } from '@oceanbase/design';
import { DocDialog } from '@oceanbase/ui';
import './index.css';

const docLink = 'https://www.oceanbase.com/docs/enterprise';

const docLinkMap = {
  '/overview':
    'https://www.oceanbase.com/en/docs/enterprise/oceanbase-database-en/V3.2.2/10000000000385431',
  '/cluster':
    'https://www.oceanbase.com/en/docs/enterprise/oceanbase-database-en/V3.2.2/10000000000386301',
};

export default () => {
  const [showDialog, setShowDialog] = useState(false);
  const [rootWidth, setRootWidth] = useState('100%');

  const onHelpDocClick = useCallback(() => {
    setShowDialog(true);
  }, [setShowDialog]);

  const setVisible = useCallback(
    (payload: boolean) => {
      setShowDialog(payload);
    },
    [setShowDialog]
  );

  return (
    <div
      style={{
        transition: 'all 0.3s ease-out',
        overflow: 'scroll',
        height: '100%',
        border: '2px solid aqua',
        width: rootWidth,
      }}
    >
      <DocDialog
        className="doc-dialog-demo"
        visible={showDialog}
        setVisible={setVisible}
        setRootWidth={setRootWidth}
        fallbackUrl={docLink}
        docUrls={docLinkMap}
      />
      <Button onClick={onHelpDocClick}>Help</Button>
    </div>
  );
};
`},24173:function(t,n){"use strict";n.Z=`.doc-dialog-demo {
  .ob-dialog-container {
    border-radius: 8px;
  }
}
`},1329:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, theme } from '@oceanbase/design';
import { FooterToolbar } from '@oceanbase/ui';

export default () => {
  const { token } = theme.useToken();
  return (
    <div
      style={{
        height: 800,
        backgroundColor: token.colorBgLayout,
      }}
    >
      <FooterToolbar extra="Some extra message">
        <Button type="primary">Ok</Button>
        <Button>Cancel</Button>
      </FooterToolbar>
    </div>
  );
};
`},38436:function(t,n){"use strict";n.Z=`import React from 'react';
import { FullscreenBox } from '@oceanbase/ui';
import { SimpleTable } from './SimpleTable';

export default () => {
  return (
    <FullscreenBox defaultMode="browser" header={{ title: '\u53EF\u5168\u5C4F\u8868\u683C-\u6D4F\u89C8\u5668\u5168\u5C4F' }}>
      <SimpleTable />
    </FullscreenBox>
  );
};
`},42493:function(t,n){"use strict";n.Z=`import React, { useRef, useState } from 'react';
import { Button } from '@oceanbase/design';
import { FullscreenBox } from '@oceanbase/ui';
import { SimpleTable } from './SimpleTable';

export default () => {
  const [fullscreen, setFullscreen] = useState(false);
  const boxRef = useRef<typeof FullscreenBox>();

  function handleFullscreenChange(fs) {
    setFullscreen(fs);
  }

  function toggleFullscreen() {
    boxRef?.current?.changeFullscreen(!fullscreen);
  }

  return (
    <div style={{ width: 1000 }}>
      <FullscreenBox
        ref={boxRef}
        onChange={handleFullscreenChange}
        header={
          <Button type="link" onClick={() => toggleFullscreen()}>
            \u5168\u5C4F
          </Button>
        }
      >
        <SimpleTable />
      </FullscreenBox>
    </div>
  );
};
`},30489:function(t,n){"use strict";n.Z=`import React from 'react';
import { Divider, Table, Tag } from '@oceanbase/design';

export const SimpleTable = () => {
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a>Invite {record.name}</a>
          <Divider type="vertical" />
          <a>Delete</a>
        </span>
      ),
    },
  ];

  return (
    <Table
      rowSelection={{ onChange: () => {} }}
      columns={columns}
      dataSource={data}
      pagination={false}
    />
  );
};
`},15870:function(t,n){"use strict";n.Z=`import React from 'react';
import { FullscreenBox } from '@oceanbase/ui';
import { SimpleTable } from './SimpleTable';

export default () => {
  return (
    <FullscreenBox header={{ title: '\u53EF\u5168\u5C4F\u8868\u683C - \u89C6\u53E3\u5168\u5C4F' }}>
      <SimpleTable />
    </FullscreenBox>
  );
};
`},69141:function(t,n){"use strict";n.Z=`import React from 'react';
import { Highlight } from '@oceanbase/ui';

export default () => (
  <Highlight>
    {\`public class HelloWorld {
     public static void main(String[] args) {
       System.out.println("Hello World!");
     }
   }\`}
  </Highlight>
);
`},67238:function(t,n){"use strict";n.Z=`import React from 'react';
import { Highlight } from '@oceanbase/ui';

export default () => (
  <Highlight language="java" theme="dark">
    {\`public class HelloWorld {
     public static void main(String[] args) {
       System.out.println("Hello World!");
     }
   }\`}
  </Highlight>
);
`},50394:function(t,n){"use strict";n.Z=`// *** \u8BE5\u6587\u4EF6\u7531 example_gen.js \u81EA\u52A8\u751F\u6210\uFF0C\u6DFB\u52A0\u65B0\u7684\u8BED\u8A00\u793A\u4F8B\u540E\u8FD0\u884C\u8BE5\u6587\u4EF6\u5373\u53EF\u6DFB\u52A0***
/* eslint-disable */

const configs = [
  {
    language: 'bash',
    text: 'Bash',
    code: '#!/bin/bash\\n\\n###### CONFIG\\nACCEPTED_HOSTS="/root/.hag_accepted.conf"\\nBE_VERBOSE=false\\n\\nif [ "$UID" -ne 0 ]\\nthen\\n echo "Superuser rights required"\\n exit 2\\nfi\\n\\ngenApacheConf(){\\n echo -e "# Host \${HOME_DIR}$1/$2 :"\\n}\\n\\necho \\'"quoted"\\' | tr -d \\\\\\\\/" > text.txt\\n\\n',
  },
  {
    language: 'cpp',
    text: 'Cpp',
    code: '#include <iostream>\\n\\nint main(int argc, char *argv[]) {\\n\\n  /* An annoying "Hello World" example */\\n  for (auto i = 0; i < 0xFFFF; i++)\\n    cout << "Hello, World!" << endl;\\n\\n  char c = \\'\\\\n\\';\\n  unordered_map <string, vector<string> > m;\\n  m["key"] = "\\\\\\\\\\\\\\\\"; // this is an error\\n\\n  return -2e3 + 12l;\\n}',
  },
  {
    language: 'css',
    text: 'Css',
    code: "@font-face {\\n  font-family: Chunkfive; src: url('Chunkfive.otf');\\n}\\n\\nbody, .usertext {\\n  color: #F0F0F0; background: #600;\\n  font-family: Chunkfive, sans;\\n  --heading-1: 30px/32px Helvetica, sans-serif;\\n}\\n\\n@import url(print.css);\\n@media print {\\n  a[href^=http]::after {\\n    content: attr(href)\\n  }\\n}",
  },
  {
    language: 'dockerfile',
    text: 'Dockerfile',
    code: '# Example instructions from https://docs.docker.com/reference/builder/\\nFROM ubuntu:14.04\\n\\nMAINTAINER example@example.com\\n\\nENV foo /bar\\nWORKDIR \${foo}   # WORKDIR /bar\\nADD . $foo       # ADD . /bar\\nCOPY \\\\$foo /quux # COPY $foo /quux\\nARG   VAR=FOO\\n\\nRUN apt-get update && apt-get install -y software-properties-common\\\\\\n    zsh curl wget git htop\\\\\\n    unzip vim telnet\\nRUN ["/bin/bash", "-c", "echo hello \${USER}"]\\n\\nCMD ["executable","param1","param2"]\\nCMD command param1 param2\\n\\nEXPOSE 1337\\n\\nENV myName="John Doe" myDog=Rex\\\\ The\\\\ Dog \\\\\\n    myCat=fluffy\\n\\nENV myName John Doe\\nENV myDog Rex The Dog\\nENV myCat fluffy',
  },
  {
    language: 'go',
    text: 'Go',
    code: 'package main\\n\\nimport "fmt"\\n\\nfunc main() {\\n    ch := make(chan float64)\\n    ch <- 1.0e10    // magic number\\n    x, ok := <- ch\\n    defer fmt.Println(\`exitting now\\\\\`)\\n    go println(len("hello world!"))\\n    return\\n}',
  },
  {
    language: 'groovy',
    text: 'Groovy',
    code: '@CompileStatic\\nclass Distribution implements Distributable {\\n    double number = 1234.234 / 567\\n    def otherNumber = 3 / 4\\n    boolean archivable = condition ?: true\\n    def ternary = a ? b : c\\n    String name = "Guillaume"\\n    Closure description = null\\n    List<DownloadPackage> packages = []\\n    String regex = ~/.*foo.*/\\n    String multi = \\'\\'\\'\\n        multi line string\\n    \\'\\'\\' + """\\n        now with double quotes and \${gstring}\\n    """ + $/\\n        even with dollar slashy strings\\n    /$\\n}',
  },
  {
    language: 'http',
    text: 'Http',
    code: 'POST /task?id=1 HTTP/1.1\\nHost: example.org\\nContent-Type: application/json; charset=utf-8\\nContent-Length: 137\\n\\n{\\n  "status": "ok",\\n  "extended": true,\\n  "results": [\\n    {"value": 0, "type": "int64"},\\n    {"value": 1.0e+3, "type": "decimal"}\\n  ]\\n}',
  },
  {
    language: 'java',
    text: 'Java',
    code: '/**\\n * @author John Smith <john.smith@example.com>\\n*/\\npackage l2f.gameserver.model;\\n\\npublic abstract class L2Char extends L2Object {\\n  public static final Short ERROR = 0x0001;\\n\\n  public void moveTo(int x, int y, int z) {\\n    _ai = null;\\n    log("Should not be called");\\n    if (1 > 5) { // wtf!?\\n      return;\\n    }\\n  }\\n}',
  },
  {
    language: 'javascript',
    text: 'Javascript',
    code: 'function $initHighlight(block, cls) {\\n  try {\\n    if (cls.search(/\\\\bno\\\\-highlight\\\\b/) != -1)\\n      return process(block, true, 0x0F) +\\n             \` class="\${cls}"\`;\\n  } catch (e) {\\n    /* handle exception */\\n  }\\n  for (var i = 0 / 2; i < classes.length; i++) {\\n    if (checkCondition(classes[i]) === undefined)\\n      console.log(\\'undefined\\');\\n  }\\n\\n  return (\\n    <div>\\n      <web-component>{block}</web-component>\\n    </div>\\n  )\\n}\\n\\nexport  $initHighlight;',
  },
  {
    language: 'json',
    text: 'Json',
    code: '[\\n  {\\n    "title": "apples",\\n    "count": [12000, 20000],\\n    "description": {"text": "...", "sensitive": false}\\n  },\\n  {\\n    "title": "oranges",\\n    "count": [17500, null],\\n    "description": {"text": "...", "sensitive": false}\\n  }\\n]',
  },
  {
    language: 'jsx',
    text: 'Jsx',
    code: 'import React from \\'react\\';\\nimport { Button, Tag, Space } from \\'@oceanbase/design\\';\\nimport { ProList } from \\'@oceanbase/ui\\';\\n\\nconst dataSource = [\\n  {\\n    name: \\'OceanBase Design\\',\\n    image:\\n      \\'https://mdn.alipayobjects.com/huamei_fhnyvh/afts/img/A*8zHZT7CORL0AAAAAQCAAAAgAemfOAQ/original\\',\\n    desc: \\'\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0\\',\\n  },\\n  {\\n    name: \\'OceanBase Design\\',\\n    image:\\n      \\'https://mdn.alipayobjects.com/huamei_fhnyvh/afts/img/A*8zHZT7CORL0AAAAAQCAAAAgAemfOAQ/original\\',\\n    desc: \\'\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0\\',\\n  },\\n  {\\n    name: \\'OceanBase Database\\',\\n    image:\\n      \\'https://mdn.alipayobjects.com/huamei_fhnyvh/afts/img/A*8zHZT7CORL0AAAAAQCAAAAgAemfOAQ/original\\',\\n    desc: \\'\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0\\',\\n  },\\n  {\\n    name: \\'Oceanbase Design\\',\\n    image:\\n      \\'https://mdn.alipayobjects.com/huamei_fhnyvh/afts/img/A*8zHZT7CORL0AAAAAQCAAAAgAemfOAQ/original\\',\\n    desc: \\'\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0\\',\\n  },\\n];\\n\\nexport default () => (\\n  <ProList\\n    toolBarRender={() => {\\n      return [\\n        <Button key="add" type="primary">\\n          \u65B0\u5EFA\\n        </Button>,\\n      ];\\n    }}\\n    onRow={(record) => {\\n      return {\\n        onMouseEnter: () => {\\n          console.log(record);\\n        },\\n        onClick: () => {\\n          console.log(record);\\n        },\\n      };\\n    }}\\n    rowKey="name"\\n    headerTitle="\u57FA\u7840\u5217\u8868"\\n    tooltip="\u57FA\u7840\u5217\u8868\u7684\u914D\u7F6E"\\n    dataSource={dataSource}\\n    showActions="hover"\\n    showExtra="hover"\\n    metas={{\\n      title: {\\n        dataIndex: \\'name\\',\\n      },\\n      avatar: {\\n        dataIndex: \\'image\\',\\n      },\\n      description: {\\n        dataIndex: \\'desc\\',\\n      },\\n      subTitle: {\\n        render: () => {\\n          return (\\n            <Space size={0}>\\n              <Tag color="blue">OceanBase Design</Tag>\\n              <Tag color="#5BD8A6">Oceanbase Design</Tag>\\n            </Space>\\n          );\\n        },\\n      },\\n      actions: {\\n        render: (text, row) => [\\n          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="link">\\n            \u94FE\u8DEF\\n          </a>,\\n          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="warning">\\n            \u62A5\u8B66\\n          </a>,\\n          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="view">\\n            \u67E5\u770B\\n          </a>,\\n        ],\\n      },\\n    }}\\n  />\\n);',
  },
  {
    language: 'markdown',
    text: 'Markdown',
    code: '# hello world\\n\\nyou can write text [with links](http://example.com) inline or [link references][1].\\n\\n* one _thing_ has *em*phasis\\n* two __things__ are **bold**\\n\\n[1]: http://example.com\\n\\n---\\n\\nhello world\\n===========\\n\\n<this_is inline="xml"></this_is>\\n\\n> markdown is so cool\\n\\n    so are code segments\\n\\n1. one thing (yeah!)\\n2. two thing \`i can write code\`, and \`more\` wipee!',
  },
  {
    language: 'nginx',
    text: 'Nginx',
    code: 'user  www www;\\nworker_processes  2;\\npid /var/run/nginx.pid;\\nerror_log  /var/log/nginx.error_log  debug | info | notice | warn | error | crit;\\n\\nevents {\\n    connections   2000;\\n    use kqueue | rtsig | epoll | /dev/poll | select | poll;\\n}\\n\\nhttp {\\n    log_format main      \\'$remote_addr - $remote_user [$time_local] \\'\\n                         \\'"$request" $status $bytes_sent \\'\\n                         \\'"$http_referer" "$http_user_agent" \\'\\n                         \\'"$gzip_ratio"\\';\\n\\n    send_timeout 3m;\\n    client_header_buffer_size 1k;\\n\\n    gzip on;\\n    gzip_min_length 1100;\\n\\n    #lingering_time 30;\\n\\n    server {\\n        server_name   one.example.com  www.one.example.com;\\n        access_log   /var/log/nginx.access_log  main;\\n\\n        rewrite (.*) /index.php?page=$1 break;\\n\\n        location / {\\n            proxy_pass         http://127.0.0.1/;\\n            proxy_redirect     off;\\n            proxy_set_header   Host             $host;\\n            proxy_set_header   X-Real-IP        $remote_addr;\\n            charset            koi8-r;\\n        }\\n\\n        location /api/ {\\n            fastcgi_pass 127.0.0.1:9000;\\n        }\\n\\n        location ~* \\\\.(jpg|jpeg|gif)$ {\\n            root         /spool/www;\\n        }\\n    }\\n}',
  },
  {
    language: 'python',
    text: 'Python',
    code: "@requires_authorization\\ndef somefunc(param1='', param2=0):\\n    r'''A docstring'''\\n    if param1 > param2: # interesting\\n        print 'Gre\\\\'ater'\\n    return (param2 - param1 + 1 + 0b10l) or None\\n\\nclass SomeClass:\\n    pass\\n\\n>>> message = '''interpreter\\n... prompt'''",
  },
  {
    language: 'ruby',
    text: 'Ruby',
    code: '# The Greeter class\\nclass Greeter\\n  def initialize(name)\\n    @name = name.capitalize\\n  end\\n\\n  def salute\\n    puts "Hello #{@name}!"\\n  end\\nend\\n\\ng = Greeter.new("world")\\ng.salute',
  },
  {
    language: 'solidity',
    text: 'Solidity',
    code: '// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.10;\\n\\ncontract Primitives {\\n    bool public boo = true;\\n\\n    uint8 public u8 = 1;\\n    uint public u256 = 456;\\n    uint public u = 123; // uint is an alias for uint256\\n\\n    int8 public i8 = -1;\\n    int public i256 = 456;\\n    int public i = -123; // int is same as int256\\n\\n    // minimum and maximum of int\\n    int public minInt = type(int).min;\\n    int public maxInt = type(int).max;\\n\\n    address public addr = 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c;\\n\\n    bytes1 a = 0xb5; //  [10110101]\\n    bytes1 b = 0x56; //  [01010110]\\n\\n    // Default values\\n    // Unassigned variables have a default value\\n    bool public defaultBoo; // false\\n    uint public defaultUint; // 0\\n    int public defaultInt; // 0\\n    address public defaultAddr; // 0x0000000000000000000000000000000000000000\\n}',
  },
  {
    language: 'sql',
    text: 'Sql',
    code: 'CREATE TABLE "topic" (\\n    "id" serial NOT NULL PRIMARY KEY,\\n    "forum_id" integer NOT NULL,\\n    "subject" varchar(255) NOT NULL\\n);\\nALTER TABLE "topic"\\nADD CONSTRAINT forum_id FOREIGN KEY ("forum_id")\\nREFERENCES "forum" ("id");\\n\\n-- Initials\\ninsert into "topic" ("forum_id", "subject")\\nvalues (2, \\'D\\'\\'artagnian\\');',
  },
  {
    language: 'tsx',
    text: 'Tsx',
    code: 'import React from \\'react\\';\\nimport { Button, Tag, Space } from \\'@oceanbase/design\\';\\nimport { ProList } from \\'@oceanbase/ui\\';\\n\\nconst dataSource = [\\n  {\\n    name: \\'OceanBase Design\\',\\n    image:\\n      \\'https://mdn.alipayobjects.com/huamei_fhnyvh/afts/img/A*8zHZT7CORL0AAAAAQCAAAAgAemfOAQ/original\\',\\n    desc: \\'\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0\\',\\n  },\\n  {\\n    name: \\'OceanBase Database\\',\\n    image:\\n      \\'https://mdn.alipayobjects.com/huamei_fhnyvh/afts/img/A*8zHZT7CORL0AAAAAQCAAAAgAemfOAQ/original\\',\\n    desc: \\'\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0\\',\\n  },\\n  {\\n    name: \\'OceanBase Cloud\\',\\n    image:\\n      \\'https://mdn.alipayobjects.com/huamei_fhnyvh/afts/img/A*8zHZT7CORL0AAAAAQCAAAAgAemfOAQ/original\\',\\n    desc: \\'\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0\\',\\n  },\\n  {\\n    name: \\'Oceanbase Design\\',\\n    image:\\n      \\'https://mdn.alipayobjects.com/huamei_fhnyvh/afts/img/A*8zHZT7CORL0AAAAAQCAAAAgAemfOAQ/original\\',\\n    desc: \\'\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0\\',\\n  },\\n];\\n\\nexport default () => (\\n  <ProList<any>\\n    toolBarRender={() => {\\n      return [\\n        <Button key="add" type="primary">\\n          \u65B0\u5EFA\\n        </Button>,\\n      ];\\n    }}\\n    onRow={(record: any) => {\\n      return {\\n        onMouseEnter: () => {\\n          console.log(record);\\n        },\\n        onClick: () => {\\n          console.log(record);\\n        },\\n      };\\n    }}\\n    rowKey="name"\\n    headerTitle="\u57FA\u7840\u5217\u8868"\\n    tooltip="\u57FA\u7840\u5217\u8868\u7684\u914D\u7F6E"\\n    dataSource={dataSource}\\n    showActions="hover"\\n    showExtra="hover"\\n    metas={{\\n      title: {\\n        dataIndex: \\'name\\',\\n      },\\n      avatar: {\\n        dataIndex: \\'image\\',\\n      },\\n      description: {\\n        dataIndex: \\'desc\\',\\n      },\\n      subTitle: {\\n        render: () => {\\n          return (\\n            <Space size={0}>\\n              <Tag color="blue">OceanBase Design</Tag>\\n              <Tag color="#5BD8A6">Oceanbase Design</Tag>\\n            </Space>\\n          );\\n        },\\n      },\\n      actions: {\\n        render: (text, row) => [\\n          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="link">\\n            \u94FE\u8DEF\\n          </a>,\\n          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="warning">\\n            \u62A5\u8B66\\n          </a>,\\n          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="view">\\n            \u67E5\u770B\\n          </a>,\\n        ],\\n      },\\n    }}\\n  />\\n);',
  },
  {
    language: 'typescript',
    text: 'Typescript',
    code: 'class MyClass {\\n  public static myValue: string;\\n  constructor(init: string) {\\n    this.myValue = init;\\n  }\\n}\\nimport fs = require("fs");\\nmodule MyModule {\\n  export interface MyInterface extends Other {\\n    myProperty: any;\\n  }\\n}\\ndeclare magicNumber number;\\nmyArray.forEach(() => { }); // fat arrow syntax',
  },
  {
    language: 'xml',
    text: 'Xml',
    code: '<!DOCTYPE html>\\n<title>Title</title>\\n\\n<style>body {width: 500px;}</style>\\n\\n<script type="application/javascript">\\n  function $init() {return true;}\\n<\/script>\\n\\n<body>\\n  <p checked class="title" id=\\'title\\'>Title</p>\\n  <!-- here goes the rest of the page -->\\n</body>',
  },
  {
    language: 'yaml',
    text: 'Yaml',
    code: '---\\n# comment\\nstring_1: "Bar"\\nstring_2: \\'bar\\'\\nstring_3: bar\\ninline_keys_ignored: sompath/name/file.jpg\\nkeywords_in_yaml:\\n  - true\\n  - false\\n  - TRUE\\n  - FALSE\\n  - 21\\n  - 21.0\\n  - !!str 123\\n"quoted_key": &foobar\\n  bar: foo\\n  foo:\\n  "foo": bar\\n\\nreference: *foobar\\n\\nmultiline_1: |\\n  Multiline\\n  String\\nmultiline_2: >\\n  Multiline\\n  String\\nmultiline_3: "\\n  Multiline string\\n  "\\n\\nansible_variables: "foo {{variable}}"\\n\\narray_nested:\\n- a\\n- b: 1\\n  c: 2\\n- b\\n- comment',
  },
];

export default configs;
`},54257:function(t,n){"use strict";n.Z=`import React from 'react';
import { Select, Space, Switch } from '@oceanbase/design';
import { Highlight } from '@oceanbase/ui';

const languages = {
  // BASH
  bash: {
    // Source
    source: \`
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
   echo -e "# Host \\\${HOME_DIR}$1/$2 :"
 }
 
 echo '"quoted"' | tr -d \\\\/" > text.txt
     \`.trim(),

    // Target
    target: \`
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
   echo -e "# Host \\\${HOME_DIR}$1/$2 :"
 }
 
 echo '"quoted"' | tr -d \\\\/" > backup.txt
     \`.trim(),
  },

  // JSON
  json: {
    // Source
    source: \`
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
     \`.trim(),
    // Target
    target: \`
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
     \`.trim(),
  },

  // TYPESCRIPT
  typescript: {
    // Source
    source: \`
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
     \`.trim(),

    // Target
    target: \`
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
     \`.trim(),
  },

  // JAVASCRIPT
  javascript: {
    // Source
    source: \`
 function warning(...args) {
   console.error(...args);
 }
 
 warning(\\\`[WARN]:
 You are using full version of @oceanbase/design. Please config TreeShaking to remove additional content.
 \\\`);
     \`.trim(),

    // Target
    target: \`
 function warning(...args) {
   console.error('[WARN]:', '\\\\n', ...args);
 }
 
 warning('You are using full version of @oceanbase/design. Please config TreeShaking to remove additional content.');
     \`.trim(),
  },
};

export default () => {
  const [source, setSource] = React.useState(true);
  const [target, setTarget] = React.useState(true);
  const [light, setLight] = React.useState(true);
  const [split, setSplit] = React.useState(true);
  const [language, setLanguage] = React.useState('json');
  const [offset, setOffset] = React.useState(false);

  const codes = languages[language];

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Space>
        <Select
          style={{ width: 150 }}
          value={language}
          options={Object.keys(languages).map(lang => ({ label: lang, value: lang }))}
          onChange={newLang => {
            setLanguage(newLang);
          }}
        />
        <Switch
          checked={split}
          onChange={() => {
            setSplit(!split);
          }}
          checkedChildren="split"
          unCheckedChildren="split"
        />
        <Switch
          checked={light}
          onChange={() => {
            setLight(!light);
          }}
          checkedChildren="light"
          unCheckedChildren="light"
        />
        <Switch
          checked={source}
          onChange={() => {
            setSource(!source);
          }}
          checkedChildren="source"
          unCheckedChildren="source"
        />
        <Switch
          checked={target}
          onChange={() => {
            setTarget(!target);
          }}
          checkedChildren="target"
          unCheckedChildren="target"
        />
        <Switch
          checked={offset}
          onChange={() => {
            setOffset(!offset);
          }}
          checkedChildren="startRowIndex"
          unCheckedChildren="startRowIndex"
        />
      </Space>

      <Highlight.Diff
        split={split}
        language={language as 'json'}
        source={source ? codes.source : null}
        target={target ? codes.target : null}
        theme={light ? 'light' : 'dark'}
        // startRowIndex \u53EF\u4EE5\u7EDF\u4E00\u6307\u5B9A\u4E3A number\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7number[] \u6307\u5B9A\u5DE6\u53F3\u4E24\u8FB9\u7684\u8D77\u59CB\u884C\u53F7
        startRowIndex={offset ? [93, 103] : undefined}
      />
    </Space>
  );
};
`},42506:function(t,n){"use strict";n.Z=`import React from 'react';
import { Highlight } from '@oceanbase/ui';

export default () => (
  <Highlight innerHTML theme="dark">
    {\`<pre style="padding: 0; margin:0;"><code>
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
   </code></pre>\`}
  </Highlight>
);
`},75503:function(t,n){"use strict";n.Z=`import React from 'react';
import { Highlight } from '@oceanbase/ui';

export default () => (
  <Highlight
    language="json"
    onCopyChange={value => {
      console.log('value', value);
    }}
  >
    {{
      name: 'OceanBase Design',
      description: 'The Design System of OceanBase',
      versions: ['1.0.0', '2.0.0', '2.5.1'],
    }}
  </Highlight>
);
`},55437:function(t,n){"use strict";n.Z=`import React from 'react';
import { Highlight } from '@oceanbase/ui';

export default () => (
  <Highlight lineNumber={true}>
    {\`public class HelloWorld {
     public static void main(String[] args) {
       System.out.println("Hello World!");
     }
   }\`}
  </Highlight>
);
`},23086:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Select, Space } from '@oceanbase/design';
import { Highlight } from '@oceanbase/ui';
import configs from './config';

const DEFAULT_LANGUAGE = 'bash';
const DEFAULT_THEME = 'light';
const DEFAULT_LINENUMBER = 'false';
const { Option } = Select;

export default () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(DEFAULT_THEME);
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
  const [lineNumberStatus, setLineNumberStatus] = useState(DEFAULT_LINENUMBER);
  const code = configs.find(config => config.language === language).code || '';

  return (
    <div>
      <Space>
        \u8BED\u8A00\u9009\u62E9:
        <Select
          defaultValue={DEFAULT_LANGUAGE}
          style={{ width: 120 }}
          onChange={value => setLanguage(value)}
        >
          {configs.map(config => {
            return (
              <Option key={config.language} value={config.language}>
                {config.text}
              </Option>
            );
          })}
        </Select>
        \u4E3B\u9898\u9009\u62E9:
        <Select
          defaultValue={DEFAULT_THEME}
          style={{ width: 120 }}
          onChange={value => setTheme(value)}
        >
          <Option value="light">\u767D\u8272\u4E3B\u9898</Option>
          <Option value="dark">\u9ED1\u8272\u4E3B\u9898</Option>
        </Select>
        \u5C55\u793A\u884C\u53F7:
        <Select
          defaultValue={DEFAULT_LINENUMBER}
          style={{ width: 120 }}
          onChange={value => setLineNumberStatus(value)}
        >
          <Option value="false">\u4E0D\u5C55\u793A</Option>
          <Option value="true">\u5C55\u793A</Option>
        </Select>
      </Space>
      <div style={{ height: 400, width: '100%', overflowY: 'scroll', marginBlockStart: '16px' }}>
        <Highlight
          language={language as 'json'}
          theme={theme}
          height={400}
          lineNumber={lineNumberStatus != DEFAULT_LINENUMBER}
        >
          {code}
        </Highlight>
      </div>
    </div>
  );
};
`},9030:function(t,n){"use strict";n.Z=`.icon-container {
  display: inline-block;
  i {
    margin-left: 5px;
  }
}
`},84970:function(t,n){"use strict";n.Z=`import React from 'react';
import { IconFont } from '@oceanbase/ui';
import './basic.css';

export default () => {
  return (
    <div className="icon-container">
      <IconFont type="icontiaochu" />
      <IconFont type="iconinsert" />
      <IconFont type="iconlock" />
      <IconFont type="iconhuabanbeifen1" />
      <IconFont type="iconcompile" />
      <IconFont type="iconPL" />
      <IconFont type="iconSQL" />
      <IconFont type="iconmysql" />
      <IconFont type="iconoracle" />
      <IconFont type="iconcommand" />
      <IconFont type="iconsign" />
      <IconFont type="iconsignfill" />
      <IconFont type="icontrigger" />
      <IconFont type="iconsynonym" />
      <IconFont type="icontypeobject" />
      <IconFont type="iconField-number" />
      <IconFont type="iconField-String" />
      <IconFont type="iconFunction" />
      <IconFont type="iconField-time" />
      <IconFont type="iconPartition" />
      <IconFont type="iconindex" />
      <IconFont type="iconStoredprocedure" />
      <IconFont type="iconField-Binary" />
      <IconFont type="iconConsole-SQL" />
    </div>
  );
};
`},71273:function(t,n){"use strict";n.Z=`import React from 'react';
import { Radio, TreeSelect } from '@oceanbase/design';
import type { SizeType } from 'antd/lib/config-provider/SizeContext';
import {
  LightFilter,
  ProFormCascader,
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormDateTimePicker,
  ProFormDateTimeRangePicker,
  ProFormDigit,
  ProFormFieldSet,
  ProFormSelect,
  ProFormSlider,
  ProFormSwitch,
  ProFormText,
  ProFormTimePicker,
  ProFormTreeSelect,
} from '@oceanbase/ui';
import dayjs from 'dayjs';

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];

export default () => {
  const [size, setSize] = React.useState<SizeType>('middle');
  return (
    <div>
      <Radio.Group
        value={size}
        onChange={e => {
          setSize(e.target.value);
        }}
      >
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <LightFilter<{
        sex: string;
      }>
        initialValues={{
          sex: 'man',
          name: 'Jack',
          range: [20, 80],
          slider: 20,
          date: '2020-08-19',
          datetimeRanger: [
            dayjs('2019-11-16 12:50:26').add(-1, 'd').valueOf(),
            dayjs('2019-11-16 12:50:26').valueOf(),
          ],
          timeRanger: [
            dayjs('2019-11-16 12:50:26').add(-1, 'd').valueOf(),
            dayjs('2019-11-16 12:50:26').valueOf(),
          ],
        }}
        size={size}
        onFinish={async values => console.log(values.sex)}
      >
        <ProFormSelect
          name="sex"
          label="Gender"
          showSearch
          allowClear={false}
          fieldProps={{
            labelInValue: true,
          }}
          valueEnum={{
            man: 'Male',
            woman: 'Female',
          }}
        />
        <ProFormSelect
          name="region"
          label="Region"
          mode="multiple"
          valueEnum={{
            beijing: 'Beijing',
            shanghai: 'Shanghai',
            hangzhou: 'Hangzhou',
            long: 'A long item to test overflow',
          }}
        />
        <ProFormCheckbox.Group
          name="checkbox-group"
          label="Checkbox.Group"
          options={['A', 'B', 'C', 'D', 'E', 'F']}
        />
        <ProFormTreeSelect
          initialValue={['0-0', '0-1']}
          label="Tree Select"
          fieldProps={{
            fieldNames: {
              label: 'title',
            },
            treeData,
            treeCheckable: true,
            showCheckedStrategy: TreeSelect.SHOW_PARENT,
            placeholder: 'Please select',
          }}
          name="treeSelect"
        />
        <ProFormCascader
          width="md"
          request={async () => [
            {
              value: 'zhejiang',
              label: 'Zhejiang',
              children: [
                {
                  value: 'hangzhou',
                  label: 'Hangzhou',
                  children: [
                    {
                      value: 'xihu',
                      label: 'West Lake',
                    },
                  ],
                },
              ],
            },
            {
              value: 'jiangsu',
              label: 'Jiangsu',
              children: [
                {
                  value: 'nanjing',
                  label: 'Nanjing',
                  children: [
                    {
                      value: 'zhonghuamen',
                      label: 'Zhong Hua Men',
                    },
                  ],
                },
              ],
            },
          ]}
          name="area"
          label="Area"
          initialValue={['zhejiang', 'hangzhou', 'xihu']}
        />
        <ProFormSwitch name="open" label="Switch" />
        <ProFormDigit name="count" label="Count" />
        <ProFormSlider name="range" label="Range" range />
        <ProFormSlider name="slider" label="Range" />
        <ProFormText name="name" label="Name" />
        <ProFormDatePicker name="date" label="Date" />
        <ProFormDateRangePicker name="dateRanger" label="Date Range" />
        <ProFormDateTimePicker name="datetime" label="Date Time" />
        <ProFormDateTimeRangePicker name="datetimeRanger" label="Date Time Range" />
        <ProFormTimePicker name="time" label="Time" />
        <ProFormTimePicker.RangePicker name="timeRanger" label="Time Range" />
        <ProFormFieldSet name="name" label="Name">
          <ProFormText />
          <ProFormText />
        </ProFormFieldSet>
      </LightFilter>
    </div>
  );
};
`},239:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { message } from '@oceanbase/design';
import { Login } from '@oceanbase/ui';
// @ts-ignore
import background_img from '../../assets/background_img.svg';

export default () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showActivate, setShowActivate] = useState(false);
  const [initialValues, setInitialValues] = useState(null);

  const onShowActivateChange = () => {
    setShowActivate(false);
  };

  return (
    <Login
      logo="https://gw.alipayobjects.com/zos/bmw-prod/3282eb3a-9a1e-4129-968e-be5f9e6cd1a2.svg"
      bgImage={background_img}
      title="Welcome to OCP Express"
      description="Let's start your usage"
      onShowRegisterChange={setShowRegister}
      showRegister={showRegister}
      registerProps={{
        onFinish: values => {
          message.success(\`Register: username: \${values.username} password: \${values.password}\`);
          setShowRegister(false);
        },
        isUserExists: async account => {
          if (account == 'oceanbase') {
            return true;
          }
        },
      }}
      loginProps={{
        onFinish: values => {
          message.success(\`Login: username: \${values.username} password: \${values.password}\`);
          setInitialValues(values);
          setShowActivate(true);
        },
        initialValues,
      }}
      activateFormProps={{
        onFinish: values => {
          message.success(
            \`Activate: password: \${values.password} confirm password: \${values.confirmPassword}\`
          );
          setShowActivate(false);
        },
      }}
      showActivate={showActivate}
      onShowActivateChange={onShowActivateChange}
      showLocale={true}
    />
  );
};
`},82184:function(t,n){"use strict";n.Z=`import React, { useEffect, useState } from 'react';
import { message } from '@oceanbase/design';
import { Login } from '@oceanbase/ui';
import background_img from '../../assets/background_img.svg';

export default () => {
  const [authCodeImg, setAuthCodeImg] = useState('');

  const imgs = [
    'https://img.alicdn.com/imgextra/i4/O1CN014Ae3e51fWSZa18uAm_!!6000000004014-2-tps-147-66.png',
    'https://img.alicdn.com/imgextra/i2/O1CN0183Q75f1DhAal3Fxi1_!!6000000000247-2-tps-151-70.png',
  ];
  const loadAuthCodeImg = () => {
    setAuthCodeImg(authCodeImg.endsWith('147-66.png') ? imgs[1] : imgs[0]);
  };

  useEffect(() => {
    loadAuthCodeImg();
  }, []);

  return (
    <Login
      logo="https://gw.alipayobjects.com/zos/bmw-prod/3282eb3a-9a1e-4129-968e-be5f9e6cd1a2.svg"
      bgImage={background_img}
      title="Welcome to OCP Express"
      description="Let's start your usage"
      loginProps={{
        onFinish: values => {
          message.success(
            \`Login: username: \${values.username} password: \${values.password} auth code: \${values.authCode}\`
          );
        },
      }}
      showLocale={true}
      showAuthCode={true}
      authCodeImg={authCodeImg}
      onAuthCodeImgChange={loadAuthCodeImg}
    />
  );
};
`},35787:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { message } from '@oceanbase/design';
import { Login } from '@oceanbase/ui';
import background_img from '../../assets/background_img.svg';

export default () => {
  const [showRegister, setShowRegister] = useState(false);
  return (
    <Login
      logo="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*WElAQJswckAAAAAAAAAAAAAADvSFAQ/original"
      bgImage={background_img}
      title="Welcome to OCP Express"
      description="Let's start your usage"
      onShowRegisterChange={setShowRegister}
      showRegister={showRegister}
      registerProps={{
        onFinish: values => {
          message.success(\`Register: username: \${values.username} password: \${values.password}\`);
          setShowRegister(false);
        },
        isUserExists: async account => {
          if (account == 'oceanbase') {
            return true;
          }
        },
      }}
      loginProps={{
        onFinish: values => {
          message.success(\`Login: username: \${values.username} password: \${values.password}\`);
        },
      }}
      enableRegister={true}
      showLocale={true}
    />
  );
};
`},92876:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { message } from '@oceanbase/design';
import { Login } from '@oceanbase/ui';

export default () => {
  const [showRegister, setShowRegister] = useState(false);
  return (
    <Login
      logo="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*WElAQJswckAAAAAAAAAAAAAADvSFAQ/original"
      bgImage="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*qUTHQJTYAuEAAAAAAAAAAAAADvSFAQ/original"
      onShowRegisterChange={setShowRegister}
      showRegister={showRegister}
      registerProps={{
        onFinish: values => {
          message.success(\`Register: username: \${values.username} password: \${values.password}\`);
          setShowRegister(false);
        },
        isUserExists: async account => {
          if (account == 'oceanbase') {
            return true;
          }
        },
      }}
      loginProps={{
        onFinish: values => {
          message.success(\`Login: username: \${values.username} password: \${values.password}\`);
        },
      }}
      enableRegister={true}
      showLocale={true}
    />
  );
};
`},97159:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { message } from '@oceanbase/design';
import { Login } from '@oceanbase/ui';
import background_img from '../../assets/background_img.svg';

export default () => {
  const [showRegister, setShowRegister] = useState(false);
  return (
    <Login
      logo="https://gw.alipayobjects.com/zos/bmw-prod/3282eb3a-9a1e-4129-968e-be5f9e6cd1a2.svg"
      bgImage={background_img}
      board="Top announcement"
      onShowRegisterChange={setShowRegister}
      showRegister={showRegister}
      registerProps={{
        onFinish: values => {
          message.success(\`Register: username: \${values.username} password: \${values.password}\`);
          setShowRegister(false);
        },
        isUserExists: async account => {
          if (account == 'oceanbase') {
            return true;
          }
        },
      }}
      loginProps={{
        onFinish: values => {
          message.success(\`Login: username: \${values.username} password: \${values.password}\`);
        },
      }}
      enableRegister={true}
      showLocale={true}
    />
  );
};
`},96289:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { message } from '@oceanbase/design';
import { Login } from '@oceanbase/ui';
import background_img from '../../assets/background_img.svg';

export default () => {
  const [showRegister, setShowRegister] = useState(false);
  return (
    <Login
      logo="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*WElAQJswckAAAAAAAAAAAAAADvSFAQ/original"
      bgImage={background_img}
      title="Welcome to OCP Express"
      description="Let's start your usage"
      onShowRegisterChange={setShowRegister}
      showRegister={showRegister}
      registerProps={{
        onFinish: values => {
          message.success(\`Register: username: \${values.username} password: \${values.password}\`);
          setShowRegister(false);
        },
        isUserExists: async account => {
          if (account == 'oceanbase') {
            return true;
          }
        },
      }}
      loginProps={{
        onFinish: values => {
          message.success(\`Login: username: \${values.username} password: \${values.password}\`);
        },
        initialValues: { username: 'root' },
        componentProps: {
          username: {
            disabled: true,
          },
        },
      }}
      enableRegister={true}
      showLocale={true}
    />
  );
};
`},80036:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { message } from '@oceanbase/design';
import { Login } from '@oceanbase/ui';

export default () => {
  const [showRegister, setShowRegister] = useState(false);
  return (
    <Login
      logo="https://gw.alipayobjects.com/zos/bmw-prod/3282eb3a-9a1e-4129-968e-be5f9e6cd1a2.svg"
      bgImage="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*1G0OQrJI2KYAAAAAAAAAAAAADvSFAQ/original"
      onShowRegisterChange={setShowRegister}
      showRegister={showRegister}
      registerProps={{
        onFinish: values => {
          message.success(\`Register: username: \${values.username} password: \${values.password}\`);
          setShowRegister(false);
        },
        isUserExists: async account => {
          if (account == 'oceanbase') {
            return true;
          }
        },
      }}
      loginProps={{
        onFinish: values => {
          message.success(\`Login: username: \${values.username} password: \${values.password}\`);
        },
      }}
      enableRegister={true}
      showLocale={true}
      // enable mobile mode
      isMobile={true}
      style={{
        // Mock mobile width
        width: 375,
      }}
    />
  );
};
`},40065:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { message } from '@oceanbase/design';
import { Login } from '@oceanbase/ui';
import background_img from '../../assets/background_img.svg';

export default () => {
  const [showRegister, setShowRegister] = useState(false);
  return (
    <Login
      logo="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*WElAQJswckAAAAAAAAAAAAAADvSFAQ/original"
      bgImage={background_img}
      title="Welcome to OCP Express"
      description="Let's start your usage"
      onShowRegisterChange={setShowRegister}
      showRegister={showRegister}
      registerProps={{
        onFinish: values => {
          message.success(\`Register: username: \${values.username} password: \${values.password}\`);
          setShowRegister(false);
        },
        isUserExists: async account => {
          if (account == 'oceanbase') {
            return true;
          }
        },
      }}
      loginProps={{
        onFinish: values => {
          message.success(\`Login: username: \${values.username} password: \${values.password}\`);
        },
      }}
      otherLoginProps={{
        onFinish: values => {
          message.success(\`Login: username: \${''} password: \${''}\`);
        },
      }}
      showOtherLoginButton={true}
      enableRegister={true}
      showLocale={true}
    />
  );
};
`},62220:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { message } from '@oceanbase/design';
import { Login } from '@oceanbase/ui';
import background_img from '../../assets/background_img.svg';

export default () => {
  const [showRegister, setShowRegister] = useState(false);
  return (
    <Login
      logo="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*WElAQJswckAAAAAAAAAAAAAADvSFAQ/original"
      bgImage={background_img}
      title="Welcome to OCP Express"
      description="Let's start your usage"
      onShowRegisterChange={setShowRegister}
      showRegister={showRegister}
      registerProps={{
        onFinish: values => {
          message.success(\`Register: username: \${values.username} password: \${values.password}\`);
          setShowRegister(false);
        },
        isUserExists: async account => {
          if (account == 'oceanbase') {
            return true;
          }
        },
      }}
      loginProps={{
        onFinish: values => {
          message.success(\`Login: username: \${values.username} password: \${values.password}\`);
        },
        passwordOptional: true,
      }}
      enableRegister={true}
      showLocale={true}
    />
  );
};
`},4630:function(t,n){"use strict";n.Z=`import React from 'react';
import { message } from '@oceanbase/design';
import { Login } from '@oceanbase/ui';
import background_img from '../../assets/background_img.svg';

export default () => {
  return (
    <Login
      logo="https://gw.alipayobjects.com/zos/bmw-prod/3282eb3a-9a1e-4129-968e-be5f9e6cd1a2.svg"
      bgImage={background_img}
      title="Welcome to OCP Express"
      description="Let's start your usage"
      alertProps={{
        message: 'Login failed, please try again',
      }}
      loginProps={{
        onFinish: values => {
          message.success(\`Username: \${values.username} Password: \${values.password}\`);
        },
      }}
      showLocale={true}
    />
  );
};
`},54076:function(t,n){"use strict";n.Z=`import React from 'react';
import { Lottie } from '@oceanbase/ui';

export default () => {
  return (
    <Lottie
      path="https://assets9.lottiefiles.com/packages/lf20_WPqksadnNs.json"
      style={{
        height: 200,
      }}
    />
  );
};
`},43547:function(t,n){"use strict";n.Z=`import React, { useState, useRef } from 'react';
import { Button, Space } from '@oceanbase/design';
import { PauseCircleOutlined, PlayCircleFilled } from '@oceanbase/icons';
import { Lottie } from '@oceanbase/ui';
import { LottieRef } from '@oceanbase/ui/es/Lottie';

export default () => {
  const ref = useRef<LottieRef>();

  const [play, setPlay] = useState(true);
  return (
    <div>
      <Space>
        {play ? (
          <Button
            icon={<PauseCircleOutlined />}
            onClick={() => {
              setPlay(false);
              ref.current?.animation?.pause();
            }}
          >
            Pause
          </Button>
        ) : (
          <Button
            type="primary"
            icon={<PlayCircleFilled />}
            onClick={() => {
              setPlay(true);
              ref.current?.animation?.play();
            }}
          >
            Play
          </Button>
        )}
      </Space>
      <div>
        <Lottie
          ref={ref}
          path="https://assets9.lottiefiles.com/packages/lf20_WPqksadnNs.json"
          style={{
            height: 200,
          }}
        />
      </div>
    </div>
  );
};
`},82144:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Form, Radio } from '@oceanbase/design';
import { Lottie } from '@oceanbase/ui';

export default () => {
  const [speed, setSpeed] = useState(1);
  return (
    <div>
      <Form
        layout="inline"
        style={{
          marginBottom: 24,
        }}
      >
        <Form.Item label="speed">
          <Radio.Group
            value={speed}
            onChange={e => {
              setSpeed(e.target.value);
            }}
          >
            <Radio.Button value={0.5}>0.5</Radio.Button>
            <Radio.Button value={1}>1</Radio.Button>
            <Radio.Button value={2}>2</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <Lottie
        path="https://assets9.lottiefiles.com/packages/lf20_WPqksadnNs.json"
        speed={speed}
        style={{
          height: 200,
        }}
      />
    </div>
  );
};
`},68235:function(t,n){"use strict";n.Z=`import React from 'react';
import { Layout } from '@oceanbase/design';
import { NavMenu } from '@oceanbase/ui';
import './style.css';

const { Sider } = Layout;

export default () => {
  const menuList = [
    {
      key: 'cluster',
      title: 'ClusterList',
      link: [
        '/components/nav-menu',
        // \u652F\u6301\u5339\u914D id
        '/components/nav-menu/:id',
        // \u652F\u6301\u5339\u914D id\uFF0C\u5E76\u4E3A id \u8BBE\u7F6E\u683C\u5F0F
        '/components/nav-menu/:id([0-9]+)',
        // \u652F\u6301\u5339\u914D\u5177\u4F53\u7684 id \u503C
        '/components/nav-menu/2',
      ],
      id: '',
      children: [
        {
          key: 'clusterWorkbench',
          title: 'ClusterWorkbench',
          link: '/components/nav-menu/123/workbench',
          disabled: true,
          id: '',
        },
        {
          key: 'tenantList',
          title: 'TenantManagement',
          link: '/components/nav-menu/123/tenantList',
          disabled: false,
          id: '',
          children: [
            {
              key: 'tenantWorkbench',
              title: 'TenantWorkbench',
              link: '/components/nav-menu/123/tenant/123/workbench',
              disabled: false,
              id: '',
            },

            {
              key: 'tenantDatabase',
              title: 'DatabaseManagement',
              link: '/components/nav-menu/123/tenant/123/database',
              disabled: false,
              id: '',
            },
          ],
        },
        {
          key: 'clusterMonitor',
          title: 'PerformanceMonitoring',
          link: '/components/nav-menu',
          disabled: false,
          id: '',
        },
        {
          key: 'clusterBackup',
          title: 'BackupAndRestoration',
          link: '/components/nav-menu',
          disabled: false,
          id: '',
        },
      ],
    },

    {
      key: 'fee',
      title: 'Fees',
      link: \`/charge\`,
      disabled: false,
      id: '',
    },

    {
      key: 'operationEvent',
      title: 'HistoricalEvents',
      link: \`/operationEvent\`,
      disabled: false,
      id: '',
    },
  ];

  return (
    <Layout style={{ width: 225, paddingBottom: 10 }}>
      <Sider theme="light" className="layoutSider">
        <NavMenu menuList={menuList} />
      </Sider>
    </Layout>
  );
};
`},12085:function(t,n){"use strict";n.Z=`.layoutSider {
  background-color: transparent !important;

  .ant-layout-sider-children {
    overflow: hidden;
  }
  .ant-menu-item {
    &::after {
      border-right: 2px solid #0d6cf2;
    }
  }
}
`},99348:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Card, Descriptions, Dropdown } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';
import { EllipsisOutlined } from '@oceanbase/icons';

export default () => {
  return (
    <PageContainer
      ghost={false}
      header={{
        title: 'Page Title',
        extra: [
          <Button key="1">Secondary</Button>,
          <Button key="2" type="primary">
            Primary
          </Button>,
          <Dropdown
            menu={{
              items: [
                {
                  label: 'Dropdown Menu',
                  key: '1',
                },
                {
                  label: 'Dropdown Menu 2',
                  key: '2',
                },
                {
                  label: 'Dropdown Menu 3',
                  key: '3',
                },
              ],
            }}
          >
            <Button key="3" icon={<EllipsisOutlined />} />
          </Dropdown>,
        ],
      }}
      footer={[<Button>Reset</Button>, <Button type="primary">Submit</Button>]}
    >
      <Card>
        <Descriptions title="Basic Info">
          <Descriptions.Item label="Creator">Lili Qu</Descriptions.Item>
          <Descriptions.Item label="Phone">1810000000</Descriptions.Item>
          <Descriptions.Item label="Address">New York No. 1 Lake Park</Descriptions.Item>
          <Descriptions.Item label="Related Form">
            <a>421421</a>
          </Descriptions.Item>
          <Descriptions.Item label="Created At">2017-01-10</Descriptions.Item>
          <Descriptions.Item label="Remarks">Sample remarks</Descriptions.Item>
        </Descriptions>
      </Card>
    </PageContainer>
  );
};
`},62038:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import {
  Button,
  Card,
  Descriptions,
  Dropdown,
  Modal,
  message,
  Table,
  Space,
} from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';
import { EllipsisOutlined } from '@oceanbase/icons';

export default () => {
  const [loading, setLoading] = useState(false);

  const mockRequest = () => {
    const promise = new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    setLoading(true);
    promise.then(() => {
      setLoading(false);
      message.success('Refreshed successfully');
    });
    return promise;
  };

  const dataSource = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Green',
      age: 42,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '5',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '6',
      name: 'Jim Green',
      age: 42,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '7',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '8',
      name: 'Jim Green',
      age: 42,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '9',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '10',
      name: 'Jim Green',
      age: 42,
      address: 'New York No. 1 Lake Park',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  return (
    <PageContainer
      ghost={true}
      loading={loading}
      header={{
        title: 'Page Title',
        subTitle: 'Subtitle',
        onBack: () => {},
        document: 'https://www.oceanbase.com',
        reload: {
          spin: loading,
          onClick: () => {
            mockRequest();
          },
        },
        breadcrumb: {
          items: [
            {
              href: '',
              title: 'Level 1 Page',
            },
            {
              href: '',
              title: 'Level 2 Page',
            },
            {
              title: 'Current Page',
            },
          ],
        },
        extra: [
          <Button
            key="1"
            onClick={() => {
              Modal.confirm({
                title: 'Are you sure you want to run this task?',
                onOk: () => {
                  return mockRequest().then(() => {
                    Modal.success({
                      title: 'Task submitted successfully!',
                    });
                  });
                },
              });
            }}
          >
            Secondary
          </Button>,
          <Button key="2" type="primary">
            Primary
          </Button>,
          <Dropdown
            menu={{
              items: [
                {
                  label: 'Dropdown Menu',
                  key: '1',
                },
                {
                  label: 'Dropdown Menu 2',
                  key: '2',
                },
                {
                  label: 'Dropdown Menu 3',
                  key: '3',
                },
              ],
            }}
          >
            <Button key="3" icon={<EllipsisOutlined />} />
          </Dropdown>,
        ],
      }}
      footer={[<Button type="primary">Submit</Button>, <Button>Reset</Button>]}
      footerToolBarProps={{
        extra: 'Some extra message',
      }}
    >
      <Space size={16} direction="vertical">
        <Card>
          <Descriptions>
            <Descriptions.Item label="Creator">Lili Qu</Descriptions.Item>
            <Descriptions.Item label="Phone">1810000000</Descriptions.Item>
            <Descriptions.Item label="Address">New York No. 1 Lake Park</Descriptions.Item>
            <Descriptions.Item label="Related Form">
              <a>421421</a>
            </Descriptions.Item>
            <Descriptions.Item label="Created At">2017-01-10</Descriptions.Item>
            <Descriptions.Item label="Remarks">Sample remarks</Descriptions.Item>
          </Descriptions>
        </Card>
        <Card
          tabList={[
            {
              tab: 'Basic Info',
              key: 'base',
            },
            {
              tab: 'Details',
              key: 'info',
            },
          ]}
        >
          <Table columns={columns} dataSource={dataSource} />
        </Card>
      </Space>
    </PageContainer>
  );
};
`},20605:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Card, Descriptions, Dropdown } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';
import { EllipsisOutlined } from '@oceanbase/icons';

export default () => {
  return (
    <PageContainer
      ghost={false}
      header={{
        title: 'Page Title',
        document: 'https://www.oceanbase.com',
        extra: [
          <Button key="1">Secondary</Button>,
          <Button key="2" type="primary">
            Primary
          </Button>,
          <Dropdown
            menu={{
              items: [
                {
                  label: 'Dropdown Menu',
                  key: '1',
                },
                {
                  label: 'Dropdown Menu 2',
                  key: '2',
                },
                {
                  label: 'Dropdown Menu 3',
                  key: '3',
                },
              ],
            }}
          >
            <Button key="3" icon={<EllipsisOutlined />} />
          </Dropdown>,
        ],
      }}
      footer={[<Button>Reset</Button>, <Button type="primary">Submit</Button>]}
    >
      <Card>
        <Descriptions title="Basic Info">
          <Descriptions.Item label="Creator">Lili Qu</Descriptions.Item>
          <Descriptions.Item label="Phone">1810000000</Descriptions.Item>
          <Descriptions.Item label="Address">New York No. 1 Lake Park</Descriptions.Item>
          <Descriptions.Item label="Related Form">
            <a>421421</a>
          </Descriptions.Item>
          <Descriptions.Item label="Created At">2017-01-10</Descriptions.Item>
          <Descriptions.Item label="Remarks">Sample remarks</Descriptions.Item>
        </Descriptions>
      </Card>
    </PageContainer>
  );
};
`},43744:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Card, Empty } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';

export default () => {
  return (
    <PageContainer
      header={{
        title: 'Dashboard',
      }}
    >
      <Card
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 72px - 24px)',
        }}
      >
        <Empty image={Empty.PRESENTED_IMAGE_COLORED} title="Create your first cluster">
          <Button type="primary">Create Now</Button>
        </Empty>
      </Card>
    </PageContainer>
  );
};
`},93080:function(t,n){"use strict";n.Z=`import React from 'react';
import { Card, Table } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';

export default () => {
  const dataSource = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Green',
      age: 42,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '5',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '6',
      name: 'Jim Green',
      age: 42,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '7',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '8',
      name: 'Jim Green',
      age: 42,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '9',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '10',
      name: 'Jim Green',
      age: 42,
      address: 'New York No. 1 Lake Park',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  return (
    <PageContainer>
      <Card
        tabList={[
          {
            tab: 'Basic Info',
            key: 'base',
          },
          {
            tab: 'Details',
            key: 'info',
          },
        ]}
      >
        <Table columns={columns} dataSource={dataSource} />
      </Card>
    </PageContainer>
  );
};
`},72766:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Card, Descriptions, Dropdown } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';
import { EllipsisOutlined } from '@oceanbase/icons';

export default () => {
  return (
    <PageContainer
      ghost={false}
      header={{
        title: 'Page Title',
        onBack: () => {},
        extra: [
          <Button key="1">Secondary</Button>,
          <Button key="2" type="primary">
            Primary
          </Button>,
          <Dropdown
            menu={{
              items: [
                {
                  label: 'Dropdown Menu',
                  key: '1',
                },
                {
                  label: 'Dropdown Menu 2',
                  key: '2',
                },
                {
                  label: 'Dropdown Menu 3',
                  key: '3',
                },
              ],
            }}
          >
            <Button key="3" icon={<EllipsisOutlined />} />
          </Dropdown>,
        ],
      }}
      footer={[<Button>Reset</Button>, <Button type="primary">Submit</Button>]}
    >
      <Card>
        <Descriptions title="Basic Info">
          <Descriptions.Item label="Creator">Lili Qu</Descriptions.Item>
          <Descriptions.Item label="Phone">1810000000</Descriptions.Item>
          <Descriptions.Item label="Address">New York No. 1 Lake Park</Descriptions.Item>
          <Descriptions.Item label="Related Form">
            <a>421421</a>
          </Descriptions.Item>
          <Descriptions.Item label="Created At">2017-01-10</Descriptions.Item>
          <Descriptions.Item label="Remarks">Sample remarks</Descriptions.Item>
        </Descriptions>
      </Card>
    </PageContainer>
  );
};
`},86697:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Button, Card, Descriptions, Dropdown, message } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';
import { EllipsisOutlined } from '@oceanbase/icons';

export default () => {
  const [loading, setLoading] = useState(false);

  const mockRequest = () => {
    const promise = new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    setLoading(true);
    promise.then(() => {
      setLoading(false);
      message.success('Refreshed successfully');
    });
    return promise;
  };

  return (
    <PageContainer
      ghost={false}
      header={{
        title: 'Page Title',
        reload: {
          spin: loading,
          onClick: () => {
            mockRequest();
          },
        },
        extra: [
          <Button key="1">Secondary</Button>,
          <Button key="2" type="primary">
            Primary
          </Button>,
          <Dropdown
            menu={{
              items: [
                {
                  label: 'Dropdown Menu',
                  key: '1',
                },
                {
                  label: 'Dropdown Menu 2',
                  key: '2',
                },
                {
                  label: 'Dropdown Menu 3',
                  key: '3',
                },
              ],
            }}
          >
            <Button key="3" icon={<EllipsisOutlined />} />
          </Dropdown>,
        ],
      }}
      footer={[<Button>Reset</Button>, <Button type="primary">Submit</Button>]}
    >
      <Card>
        <Descriptions title="Basic Info">
          <Descriptions.Item label="Creator">Lili Qu</Descriptions.Item>
          <Descriptions.Item label="Phone">1810000000</Descriptions.Item>
          <Descriptions.Item label="Address">New York No. 1 Lake Park</Descriptions.Item>
          <Descriptions.Item label="Related Form">
            <a>421421</a>
          </Descriptions.Item>
          <Descriptions.Item label="Created At">2017-01-10</Descriptions.Item>
          <Descriptions.Item label="Remarks">Sample remarks</Descriptions.Item>
        </Descriptions>
      </Card>
    </PageContainer>
  );
};
`},83330:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Card, Descriptions } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';

export default () => {
  return (
    <PageContainer
      ghost={false}
      title="Page Title"
      footer={[<Button type="primary">Submit</Button>, <Button>Reset</Button>]}
    >
      <Card>
        <Descriptions title="Basic Info">
          <Descriptions.Item label="Creator">Lili Qu</Descriptions.Item>
          <Descriptions.Item label="Phone">1810000000</Descriptions.Item>
          <Descriptions.Item label="Address">New York No. 1 Lake Park</Descriptions.Item>
          <Descriptions.Item label="Related Form">
            <a>421421</a>
          </Descriptions.Item>
          <Descriptions.Item label="Created At">2017-01-10</Descriptions.Item>
          <Descriptions.Item label="Remarks">Sample remarks</Descriptions.Item>
        </Descriptions>
      </Card>
    </PageContainer>
  );
};
`},30679:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { EllipsisOutlined } from '@oceanbase/icons';
import { Button, Card, Dropdown, Tabs, message } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';

export default () => {
  const [loading, setLoading] = useState(false);

  const mockRequest = () => {
    const promise = new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    setLoading(true);
    promise.then(() => {
      setLoading(false);
      message.success('Refreshed successfully');
    });
  };
  return (
    <PageContainer
      ghost={false}
      loading={loading}
      header={{
        title: 'Page Title',
        reload: {
          spin: loading,
          onClick: () => {
            mockRequest();
          },
        },
        breadcrumb: {
          items: [
            {
              href: '',
              title: 'Level 1 Page',
            },
            {
              href: '',
              title: 'Level 2 Page',
            },
            {
              title: 'Current Page',
            },
          ],
        },
        extra: [
          <Button key="1">Secondary</Button>,
          <Button key="2" type="primary">
            Primary
          </Button>,
          <Dropdown
            menu={{
              items: [
                {
                  label: 'Dropdown Menu',
                  key: '1',
                },
                {
                  label: 'Dropdown Menu 2',
                  key: '2',
                },
                {
                  label: 'Dropdown Menu 3',
                  key: '3',
                },
              ],
            }}
          >
            <Button key="3" icon={<EllipsisOutlined />} />
          </Dropdown>,
        ],
      }}
    >
      <Tabs
        items={[
          {
            key: '1',
            label: 'Tab 1',
            children: <Card bodyStyle={{ height: '100vh' }}>This is content of Tab 1</Card>,
          },
          {
            key: '2',
            label: 'Tab 2',
            children: <Card bodyStyle={{ height: '100vh' }}>This is content of Tab 2</Card>,
          },
        ]}
        tabBarExtraContent="This is tabBarExtraContent content"
      />
    </PageContainer>
  );
};
`},10499:function(t,n){"use strict";n.Z=`import React from 'react';
import { PageLoading } from '@oceanbase/ui';

export default () => {
  return <PageLoading />;
};
`},68292:function(t,n){"use strict";n.Z=`import React from 'react';
import { PageLoading } from '@oceanbase/ui';
import { Card } from '@oceanbase/design';

export default () => {
  return (
    <Card
      title="Card title"
      bodyStyle={{
        height: 400,
      }}
    >
      <PageLoading matchWrapperHeight={true} />
    </Card>
  );
};
`},73161:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Dropdown } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';
import { EllipsisOutlined } from '@oceanbase/icons';

export default () => {
  const loading = true;
  return (
    <PageContainer
      ghost={false}
      loading={loading}
      header={{
        title: 'Page Title',
        reload: {
          spin: loading,
        },
        breadcrumb: {
          items: [
            {
              href: '',
              title: 'Level 1 Page',
            },
            {
              href: '',
              title: 'Level 2 Page',
            },
            {
              title: 'Current Page',
            },
          ],
        },
        extra: [
          <Button key="1">Secondary</Button>,
          <Button key="2" type="primary">
            Primary
          </Button>,
          <Dropdown
            menu={{
              items: [
                {
                  label: 'Dropdown Menu',
                  key: '1',
                },
                {
                  label: 'Dropdown Menu 2',
                  key: '2',
                },
                {
                  label: 'Dropdown Menu 3',
                  key: '3',
                },
              ],
            }}
          >
            <Button key="3" icon={<EllipsisOutlined />} />
          </Dropdown>,
        ],
      }}
      footer={[<Button>Reset</Button>, <Button type="primary">Submit</Button>]}
    />
  );
};
`},19858:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Form, Input } from '@oceanbase/design';
import { Password } from '@oceanbase/ui';

export default () => {
  const [form] = Form.useForm();
  const { validateFields } = form;
  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 10,
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      offset: 4,
      span: 10,
    },
  };

  const onSubmit = () => {
    validateFields().then(values => {
      const { username, password } = values;
      alert(\`Form validation passed. username: \${username}, password: \${password}\`);
    });
  };

  return (
    <Form form={form} {...formItemLayout}>
      <Form.Item
        name="username"
        label="Username"
        rules={[{ required: true, message: 'Please enter username' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: 'Please enter password' }]}
      >
        <Password />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" onClick={onSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
`},71202:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Button, Form, Input, Modal } from '@oceanbase/design';
import { Password } from '@oceanbase/ui';

export default () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Change password
      </Button>
      <Modal
        open={open}
        title="Change password"
        onCancel={() => setOpen(false)}
        onOk={() => form.validateFields()}
        destroyOnClose
      >
        <Form form={form} layout="vertical" requiredMark={false}>
          <Form.Item
            name="currentPassword"
            label="Current password"
            rules={[{ required: true, message: 'Please enter current password' }]}
          >
            <Password autoComplete="current-password" />
          </Form.Item>
          <Form.Item
            name="newPassword"
            label="New password"
            rules={[{ required: true, message: 'Please enter new password' }]}
          >
            <Password />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label="Confirm new password"
            dependencies={['newPassword']}
            rules={[
              { required: true, message: 'Please enter new password again' },
              {
                validator: (_, value) => {
                  const pwd = form.getFieldValue('newPassword');
                  if (value !== pwd) {
                    return Promise.reject(new Error('The two passwords do not match'));
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input.Password autoComplete="new-password" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
`},74461:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Form } from '@oceanbase/design';
import { Password } from '@oceanbase/ui';

const generatePasswordRegex =
  /^(?=(.*[a-z]){2,})(?=(.*[A-Z]){2,})(?=(.*\\d){2,})(?=(.*[._+@#$%]){2,})[A-Za-z\\d._+@#$%]{8,32}$/;

export default () => {
  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 12,
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      offset: 4,
      span: 12,
    },
  };

  const onFinish = (values: { password?: string }) => {
    alert(\`Form validation passed. password: \${values.password}\`);
  };

  return (
    <Form onFinish={onFinish} {...formItemLayout}>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: 'Please enter password' },
          { pattern: generatePasswordRegex, message: 'Password does not meet requirements' },
        ]}
      >
        <Password
          generatePasswordRegex={generatePasswordRegex}
          generatePassword={() => 'custom_password'}
        />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
`},5076:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Form } from '@oceanbase/design';
import { Password } from '@oceanbase/ui';

const rules = [
  {
    validate: (val?: string) => Boolean(val && val.length >= 8),
    message: 'At least 8 characters',
  },
  {
    validate: (val?: string) => Boolean(val && /[a-z]+/.test(val) && /[A-Z]+/.test(val)),
    message: 'Contains lowercase (a-z) and uppercase (A-Z) letters',
  },
  {
    message: 'Contains at least one digit (0-9) or symbol',
    validate: (val?: string) => Boolean(val && /([0-9]|[._+@#$%])+/.test(val)),
  },
];

const generatePasswordRegex =
  /^(?=(.*[a-z]){2,})(?=(.*[A-Z]){2,})(?=(.*\\d){2,})(?=(.*[._+@#$%]){2,})[A-Za-z\\d._+@#$%]{8,32}$/;

export default () => {
  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 12,
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      offset: 4,
      span: 12,
    },
  };

  const onFinish = (values: { password?: string }) => {
    alert(\`Form validation passed. password: \${values.password}\`);
  };

  return (
    <Form onFinish={onFinish} {...formItemLayout}>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          { required: true, message: 'Please enter password' },
          {
            validator: async (_, value) => {
              if (!value) {
                return;
              }
              const failed = rules.find(rule => !rule.validate(value));
              if (failed) {
                throw new Error(failed.message);
              }
            },
          },
        ]}
      >
        <Password rules={rules} generatePasswordRegex={generatePasswordRegex} />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
`},14814:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Form, Input } from '@oceanbase/design';
import { Password } from '@oceanbase/ui';

const rules = [
  {
    validate: (val?: string) => Boolean(val && val.length >= 8),
    message: 'At least 8 characters',
  },
  {
    validate: (val?: string) => Boolean(val && /[a-z]+/.test(val) && /[A-Z]+/.test(val)),
    message: 'Contains lowercase (a-z) and uppercase (A-Z) letters',
  },
  {
    message: 'Contains at least one digit (0-9) or symbol',
    validate: (val?: string) => Boolean(val && /([0-9]|[._+@#$%])+/.test(val)),
  },
];

export default () => {
  const [form] = Form.useForm();
  const { validateFields } = form;
  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 10,
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      offset: 4,
      span: 10,
    },
  };

  const onSubmit = () => {
    validateFields().then(values => {
      const { username, password } = values;
      alert(\`Form validation passed. username: \${username}, password: \${password}\`);
    });
  };

  return (
    <Form form={form} {...formItemLayout}>
      <Form.Item
        name="username"
        label="Username"
        rules={[{ required: true, message: 'Please enter username' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          { required: true, message: 'Please enter password' },
          {
            validator: async (_, value) => {
              if (!value) {
                return;
              }
              const failed = rules.find(rule => !rule.validate(value));
              if (failed) {
                throw new Error(failed.message);
              }
            },
          },
        ]}
      >
        <Password rules={rules} />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" onClick={onSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
`},79402:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Form } from '@oceanbase/design';
import { Password } from '@oceanbase/ui';

const generatePasswordRegex =
  /^(?=(.*[a-z]){2,})(?=(.*[A-Z]){2,})(?=(.*\\d){2,})(?=(.*[._+@#$%]){2,})[A-Za-z\\d._+@#$%]{8,32}$/;

export default () => {
  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 12,
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      offset: 4,
      span: 12,
    },
  };

  const onFinish = (values: { password?: string }) => {
    alert(\`Form validation passed. password: \${values.password}\`);
  };

  return (
    <Form onFinish={onFinish} {...formItemLayout}>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: 'Please enter password' },
          { pattern: generatePasswordRegex, message: 'Password does not meet requirements' },
        ]}
      >
        <Password generatePasswordRegex={generatePasswordRegex} />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
`},25629:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Form, Switch, theme } from '@oceanbase/design';
import { ProCard } from '@oceanbase/ui';

export default () => {
  const { token } = theme.useToken();
  const [loading, setLoading] = useState(false);
  const [hasHeader, setHasHeader] = useState(true);
  const [headerBordered, setHeaderBordered] = useState(false);
  const [hasPadding, setHasPadding] = useState(true);
  const bodyStyle: React.CSSProperties = hasPadding ? {} : { padding: 0 };
  return (
    <>
      <Form layout="inline" style={{ marginBottom: 16 }}>
        <Form.Item label="loading" required={true}>
          <Switch
            size="small"
            value={loading}
            onChange={value => {
              setLoading(value);
            }}
          />
        </Form.Item>
        <Form.Item label="has header" required={true}>
          <Switch
            size="small"
            value={hasHeader}
            onChange={value => {
              setHasHeader(value);
            }}
          />
        </Form.Item>
        <Form.Item label="header bordered" required={true}>
          <Switch
            size="small"
            value={headerBordered}
            onChange={value => {
              setHeaderBordered(value);
            }}
          />
        </Form.Item>
        <Form.Item label="body padding" required={true}>
          <Switch
            size="small"
            value={hasPadding}
            onChange={value => {
              setHasPadding(value);
            }}
          />
        </Form.Item>
      </Form>
      <ProCard
        loading={loading}
        bordered
        headerBordered={headerBordered}
        title={hasHeader && 'Default Size'}
        extra={hasHeader && 'extra'}
        tooltip={hasHeader && 'This is a tooltip'}
        style={{ width: 300 }}
        bodyStyle={bodyStyle}
      >
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </ProCard>
      <ProCard
        loading={loading}
        bordered
        headerBordered={headerBordered}
        size="small"
        title={hasHeader && 'Small Size'}
        extra={hasHeader && 'extra'}
        tooltip={hasHeader && 'This is a tooltip'}
        style={{ width: 300, marginBlockStart: 24 }}
        bodyStyle={bodyStyle}
      >
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </ProCard>
      <div
        style={{
          marginBlockStart: 24,
          padding: 24,
          borderRadius: 8,
          background: token.colorBgLayout,
        }}
      >
        <ProCard
          loading={loading}
          headerBordered={headerBordered}
          title={hasHeader && 'Borderless'}
          extra={hasHeader && 'extra'}
          tooltip={hasHeader && 'This is a tooltip'}
          style={{ width: 300 }}
          bodyStyle={bodyStyle}
        >
          <div>Card content</div>
          <div>Card content</div>
          <div>Card content</div>
        </ProCard>
      </div>
    </>
  );
};
`},75535:function(t,n){"use strict";n.Z=`import React from 'react';
import { ProCard } from '@oceanbase/ui';

export default () => {
  return (
    <>
      <ProCard collapsible bordered title="Title" style={{ width: 300 }}>
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </ProCard>
      <ProCard collapsible ghost title="Title" style={{ width: 300 }}>
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </ProCard>
    </>
  );
};
`},65537:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { ConfigProvider, Form, Switch } from '@oceanbase/design';
import { ProCard } from '@oceanbase/ui';

export default () => {
  const [divided, setDivided] = useState(true);
  const [bordered, setBordered] = useState(true);
  return (
    <ConfigProvider card={{ divided, variant: bordered ? 'outlined' : 'borderless' }}>
      <Form layout="inline" style={{ marginBottom: 16 }}>
        <Form.Item label="bordered" required={true}>
          <Switch
            size="small"
            value={bordered}
            onChange={value => {
              setBordered(value);
            }}
          />
        </Form.Item>
        <Form.Item label="divided" required={true}>
          <Switch
            size="small"
            value={divided}
            onChange={value => {
              setDivided(value);
            }}
          />
        </Form.Item>
      </Form>
      <ProCard
        bordered={bordered}
        headerBordered={divided}
        title="Title"
        extra="extra"
        tooltip="This is a tooltip"
        style={{ width: 300 }}
      >
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </ProCard>
    </ConfigProvider>
  );
};
`},76958:function(t,n){"use strict";n.Z=`import React from 'react';
import { ProCard } from '@oceanbase/ui';

export default () => {
  return (
    <ProCard ghost title="Title" style={{ width: 300 }}>
      <div>Card content</div>
      <div>Card content</div>
      <div>Card content</div>
    </ProCard>
  );
};
`},33934:function(t,n){"use strict";n.Z=`import React from 'react';
import { ProTable } from '@oceanbase/ui';

const App: React.FC = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const dataSource = [];
  for (let i = 1; i < 100; i++) {
    dataSource.push({
      key: i,
      name: 'John Brown' + i,
      age: 32,
      address: \`New York No. \${i} Lake Park\`,
    });
  }

  return (
    <ProTable
      headerTitle="Advanced Table"
      cardBordered={true}
      columns={columns}
      dataSource={dataSource}
    />
  );
};

export default App;
`},71879:function(t,n){"use strict";n.Z=`import React from 'react';
import { ProTable } from '@oceanbase/ui';

const App: React.FC = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const dataSource = [];
  for (let i = 1; i < 100; i++) {
    dataSource.push({
      key: i,
      name: 'John Brown' + i,
      age: 32,
      address: \`New York No. \${i} Lake Park\`,
    });
  }

  return (
    <ProTable
      bordered={true}
      headerTitle="Advanced Table"
      search={{ filterType: 'light' }}
      columns={columns}
      dataSource={dataSource}
    />
  );
};

export default App;
`},70642:function(t,n){"use strict";n.Z=`import React from 'react';
import { ProTable } from '@oceanbase/ui';
import type { TableColumnsType } from '@oceanbase/design';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  amount: number;
  address: string;
}

const dataSource: DataType[] = [
  { key: '1', name: 'Mike', age: 32, amount: 1200, address: '10 Downing Street' },
  { key: '2', name: 'John', age: 42, amount: 2400, address: '20 Oxford Street' },
  { key: '3', name: 'Jane', age: 28, amount: 800, address: '30 Baker Street' },
];

const columns: TableColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    tooltip: 'User display name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
    tooltip: { title: 'Age in years', type: 'info' },
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    sorter: (a, b) => a.amount - b.amount,
    filters: [
      { text: '>= 1000', value: 'high' },
      { text: '< 1000', value: 'low' },
    ],
    onFilter: (value, record) => (value === 'high' ? record.amount >= 1000 : record.amount < 1000),
    tooltip: 'Amount before tax',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const App: React.FC = () => (
  <ProTable
    headerTitle="Advanced Table"
    cardBordered
    columns={columns}
    dataSource={dataSource}
    search={false}
    options={false}
    pagination={false}
  />
);

export default App;
`},12879:function(t,n){"use strict";n.Z=`import React from 'react';
import { ProTable } from '@oceanbase/ui';

const App: React.FC = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return (
    <ProTable headerTitle="Advanced Table" cardBordered={true} columns={columns} dataSource={[]} />
  );
};

export default App;
`},32432:function(t,n){"use strict";n.Z=`import React from 'react';
import { ProTable } from '@oceanbase/ui';

const App: React.FC = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const dataSource = [];
  for (let i = 1; i < 100; i++) {
    dataSource.push({
      key: i,
      name: 'John Brown' + i,
      age: 32,
      address: \`New York No. \${i} Lake Park\`,
    });
  }

  return (
    <ProTable
      headerTitle="Advanced Table"
      cardBordered={true}
      columns={columns}
      dataSource={dataSource}
      expandable={{
        expandedRowRender: record => <p>{record.address}</p>,
      }}
    />
  );
};

export default App;
`},32274:function(t,n){"use strict";n.Z=`import React from 'react';
import { ProTable } from '@oceanbase/ui';

const App: React.FC = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const dataSource = [];
  for (let i = 1; i < 100; i++) {
    dataSource.push({
      key: i,
      name: 'John Brown' + i,
      age: 32,
      address: \`New York No. \${i} Lake Park\`,
    });
  }

  return (
    <ProTable
      headerTitle="Advanced Table"
      cardBordered={true}
      cardProps={{
        headerBordered: true,
      }}
      columns={columns}
      dataSource={dataSource}
    />
  );
};

export default App;
`},30106:function(t,n){"use strict";n.Z=`import React from 'react';
import { ProTable } from '@oceanbase/ui';

const App: React.FC = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const dataSource = [];
  for (let i = 1; i < 100; i++) {
    dataSource.push({
      key: i,
      name: 'John Brown' + i,
      age: 32,
      address: \`New York No. \${i} Lake Park\`,
    });
  }

  return (
    <ProTable
      headerTitle="Advanced Table"
      search={{ filterType: 'light' }}
      columns={columns}
      dataSource={dataSource}
    />
  );
};

export default App;
`},38790:function(t,n){"use strict";n.Z=`import React from 'react';
import { Button, Space } from '@oceanbase/design';
import { EllipsisOutlined } from '@oceanbase/icons';
import { ProTable } from '@oceanbase/ui';

const App: React.FC = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Link',
      dataIndex: 'link',
      render: (text: string, record: any) => {
        return (
          <a href={record.link} target="_blank" rel="noopener noreferrer">
            Link
          </a>
        );
      },
    },
    {
      title: 'Action',
      key: 'action',
      sorter: true,
      render: () => (
        <Space>
          <Button>Delete</Button>
          <Button icon={<EllipsisOutlined />} />
        </Space>
      ),
    },
  ];

  const dataSource = [];
  for (let i = 1; i < 100; i++) {
    dataSource.push({
      key: i,
      name: 'John Brown' + i,
      age: 32,
      address: \`New York No. \${i} Lake Park\`,
      link: 'https://www.oceanbase.com',
    });
  }

  return (
    <ProTable
      headerTitle="Advanced Table"
      cardBordered={true}
      columns={columns}
      dataSource={dataSource}
    />
  );
};

export default App;
`},95353:function(t,n){"use strict";n.Z=`import React from 'react';
import { Ranger } from '@oceanbase/ui';
import dayjs from 'dayjs';

export default () => (
  <Ranger
    selects={[
      Ranger.YESTERDAY,
      Ranger.TODAY,
      Ranger.TOMORROW,
      { name: 'This year', range: () => [dayjs().startOf('year'), dayjs().endOf('year')] },
    ]}
  />
);
`},2111:function(t,n){"use strict";n.Z=`import React from 'react';
import { Ranger } from '@oceanbase/ui';
import dayjs from 'dayjs';

export default () => (
  <Ranger
    defaultValue={[dayjs('2019/05/20'), dayjs('2019/06/20')]}
    selects={[Ranger.YESTERDAY, Ranger.TODAY, Ranger.TOMORROW]}
  />
);
`},60946:function(t,n){"use strict";n.Z=`import React from 'react';
import { Space } from '@oceanbase/design';
import { Ranger } from '@oceanbase/ui';

export default () => (
  <Space size={24} direction="vertical">
    <Ranger mode="mini" selects={[Ranger.YESTERDAY, Ranger.TODAY, Ranger.TOMORROW]} />
    <Ranger
      mode="mini"
      quickType="dropdown"
      selects={[Ranger.YESTERDAY, Ranger.TODAY, Ranger.TOMORROW]}
    />
  </Space>
);
`},66760:function(t,n){"use strict";n.Z=`import React from 'react';
import { Ranger } from '@oceanbase/ui';

export default () => {
  const handleChange = range => {
    console.log(range[0].format('YYYY-MM-DD HH:mm:ss'));
    console.log(range[1].format('YYYY-MM-DD HH:mm:ss'));
  };

  return (
    <Ranger.QuickPicker
      type="dropdown"
      onChange={handleChange}
      defaultName={Ranger.TODAY.name}
      selects={[Ranger.YESTERDAY, Ranger.TODAY, Ranger.TOMORROW]}
    />
  );
};
`},45482:function(t,n){"use strict";n.Z=`import React from 'react';
import { Ranger } from '@oceanbase/ui';

export default () => (
  <Ranger
    defaultQuickValue={Ranger.TODAY.name}
    selects={[Ranger.YESTERDAY, Ranger.TODAY, Ranger.TOMORROW]}
  />
);
`},30554:function(t,n){"use strict";n.Z=`import React from 'react';
import { Form } from '@oceanbase/design';
import { Ranger } from '@oceanbase/ui';
import dayjs from 'dayjs';

export default () => {
  const handleChange = ({ range }) => {
    console.log(range[0].format('YYYY-MM-DD HH:mm:ss'));
    console.log(range[1].format('YYYY-MM-DD HH:mm:ss'));
  };
  const [form] = Form.useForm();

  return (
    <Form form={form} onValuesChange={handleChange}>
      <Form.Item name="range" initialValue={[dayjs('2021/01/01'), dayjs('2021/05/01')]}>
        <Ranger
          selects={[
            Ranger.YESTERDAY,
            Ranger.TODAY,
            Ranger.TOMORROW,
            { name: 'This year', range: () => [dayjs().startOf('year'), dayjs().endOf('year')] },
          ]}
        />
      </Form.Item>
    </Form>
  );
};
`},90864:function(t,n){"use strict";n.Z=`import React from 'react';
import { BackTop } from '@oceanbase/design';
import { SideTip } from '@oceanbase/ui';
import { ArrowUpOutlined } from '@oceanbase/icons';

export default () => {
  return (
    <div style={{ height: '600vh', padding: 8 }}>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <BackTop>
        <SideTip
          hideable={false}
          buttonStyle={{ opacity: 0.9 }}
          icon={<ArrowUpOutlined />}
          tooltip={{ title: '\u8FD4\u56DE\u9876\u90E8', placement: 'left', mouseEnterDelay: 0.4 }}
        />
      </BackTop>
      <BackTop>
        <SideTip
          hideable={false}
          buttonStyle={{ opacity: 0.9 }}
          position={{ right: 100 }}
          size="small"
          icon={<ArrowUpOutlined />}
          tooltip={{ title: '\u8FD4\u56DE\u9876\u90E8', placement: 'left', mouseEnterDelay: 0.4 }}
        />
      </BackTop>
    </div>
  );
};
`},77168:function(t,n){"use strict";n.Z=`import React from 'react';
import { message } from '@oceanbase/design';
import { SideTip } from '@oceanbase/ui';
import { CloudUploadOutlined } from '@oceanbase/icons';

export default () => {
  return (
    <SideTip
      type="primary"
      icon={<CloudUploadOutlined />}
      onClick={() => {
        message.info('\u70B9\u51FB\u4E8B\u4EF6\u89E6\u53D1');
      }}
    />
  );
};
`},72096:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Badge, Card, Dropdown, Progress, Table } from '@oceanbase/design';
import type { PresetStatusColorType } from '@oceanbase/design';
import { SideTip } from '@oceanbase/ui';
import { FileTextOutlined } from '@oceanbase/icons';
import { findByValue } from '@oceanbase/util';

export const STATUS_LIST = [
  { label: '\u5168\u90E8', badgeStatus: 'default', value: 'all' },
  { label: '\u5173\u95ED', badgeStatus: 'default', value: 'close' },
  { label: '\u8FD0\u884C\u4E2D', badgeStatus: 'processing', value: 'running' },
  { label: '\u5DF2\u4E0A\u7EBF', badgeStatus: 'success', value: 'online' },
  { label: '\u5F02\u5E38', badgeStatus: 'error', value: 'error' },
];
export default () => {
  const [open, setOpen] = useState(false);

  const handleVisbileChange = isVisible => {
    setOpen(isVisible);
  };

  const columns = [
    {
      title: '\u4EFB\u52A1\u540D\u79F0',
      dataIndex: 'name',
      width: 80,
    },
    {
      title: '\u72B6\u6001',
      dataIndex: 'status',
      initialValue: 'all',
      width: 100,
      render: text => {
        const { label = '\u5168\u90E8', badgeStatus = 'default' } = findByValue(STATUS_LIST, text) || {};
        return <Badge status={badgeStatus as PresetStatusColorType} text={label} />;
      },
    },

    {
      title: '\u8FDB\u5EA6',
      key: 'progress',
      dataIndex: 'progress',
      render: (text, record) => {
        return (
          <Progress
            percent={record.progress}
            status={record.status !== 'error' ? 'active' : 'exception'}
          />
        );
      },
      width: 200,
    },
    {
      title: '\u66F4\u65B0\u65F6\u95F4',
      key: 'since2',
      width: 120,
      dataIndex: 'createdAt',
      valueType: 'date',
    },
  ];

  const tableListDataSource = [];

  const valueEnum = {
    0: 'close',
    1: 'running',
    2: 'online',
    3: 'error',
  };
  // success exception normal active

  for (let i = 0; i < 6; i += 1) {
    tableListDataSource.push({
      key: i,
      name: \`TradeCode \${i}\`,
      status: valueEnum[Math.floor(Math.random() * 10) % 4],
      updatedAt: Date.now() - Math.floor(Math.random() * 1000),
      createdAt: Date.now() - Math.floor(Math.random() * 2000),
      money: Math.floor(Math.random() * 2000) * i,
      progress: Math.ceil(Math.random() * 100) + 1,
    });
  }

  const table = (
    <Card>
      <p style={{ fontSize: 16, fontWeight: 'bold' }}>\u5F53\u524D\u5171\u6709 6 \u4E2A\u4EFB\u52A1\u6B63\u5728\u8FDB\u884C\u4E2D</p>
      <Table columns={columns} rowKey="key" dataSource={tableListDataSource} pagination={false} />
    </Card>
  );
  return (
    <Dropdown
      overlay={table}
      open={open}
      placement="topRight"
      trigger={['hover', 'click']}
      onVisibleChange={handleVisbileChange}
      getPopupContainer={() => document.getElementById('content')}
      overlayStyle={{ paddingInlineEnd: 56, width: 720 }}
    >
      <SideTip
        type="primary"
        icon={<FileTextOutlined />}
        badge={{
          count: 3,
        }}
        id="content"
        open={open}
      />
    </Dropdown>
  );
};
`},18061:function(t,n){"use strict";n.Z=`import React from 'react';
import { message } from '@oceanbase/design';
import { SideTip } from '@oceanbase/ui';
import { EditOutlined } from '@oceanbase/icons';

export default () => {
  return (
    <SideTip
      disabled
      icon={<EditOutlined />}
      onClick={() => {
        message.info('\u70B9\u51FB\u4E8B\u4EF6\u89E6\u53D1');
      }}
    />
  );
};
`},25043:function(t,n){"use strict";n.Z=`import React from 'react';
import { SideTip } from '@oceanbase/ui';
import { CloudUploadOutlined } from '@oceanbase/icons';

export default () => {
  return <SideTip type="primary" icon={<CloudUploadOutlined />} draggable={false} />;
};
`},17718:function(t,n){"use strict";n.Z=`import React from 'react';
import { SideTip } from '@oceanbase/ui';
import { HeartOutlined, HeartTwoTone } from '@oceanbase/icons';

export default () => {
  return (
    <>
      <SideTip
        icon={<HeartTwoTone twoToneColor="#eb2f96" />}
        id="loading"
        loading
        position={{
          right: 100,
        }}
      />
      <SideTip type="primary" icon={<HeartOutlined />} id="loading-primary" loading />
    </>
  );
};
`},86420:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Modal } from '@oceanbase/design';
import { SideTip } from '@oceanbase/ui';
import { PlusOutlined } from '@oceanbase/icons';

export default () => {
  const [open, setOpen] = useState(false);

  const showModal = isOpen => {
    if (isOpen === undefined) {
      setOpen(!open);
    } else {
      setOpen(isOpen);
    }
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <SideTip type="primary" icon={<PlusOutlined />} onClick={showModal} open={open} id="modal" />
      <Modal title="Basic Modal" open={open} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
`},47838:function(t,n){"use strict";n.Z=`import React from 'react';
import { message } from '@oceanbase/design';
import { SideTip } from '@oceanbase/ui';
import { CloudUploadOutlined } from '@oceanbase/icons';

export default () => {
  return (
    <SideTip
      icon={<CloudUploadOutlined />}
      hideable={false}
      onClick={() => {
        message.info('\u70B9\u51FB\u4E8B\u4EF6\u89E6\u53D1');
      }}
    />
  );
};
`},53e3:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { Dropdown, Menu } from '@oceanbase/design';
import { SideTip } from '@oceanbase/ui';
import { SettingFilled } from '@oceanbase/icons';

export default () => {
  const [open, setOpen] = useState(false);
  const handleVisibleChange = isOpen => {
    setOpen(isOpen);
  };

  const menu = (
    <Menu>
      <Menu.Item>\u521B\u5EFA\u753B\u5E03</Menu.Item>
      <Menu.Item>\u5BFC\u5165</Menu.Item>
      <Menu.Item>\u53E6\u5B58\u4E3A</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown
      overlay={menu}
      open={open}
      placement="topRight"
      trigger={['hover']}
      onVisibleChange={handleVisibleChange}
      onOpenChange={handleVisibleChange}
    >
      <SideTip icon={<SettingFilled />} open={open} />
    </Dropdown>
  );
};
`},19399:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { message } from '@oceanbase/design';
import { SideTip } from '@oceanbase/ui';
import { CloudUploadOutlined } from '@oceanbase/icons';

export default () => {
  const [open, setOpen] = useState(false);

  const handleVisibleChange = () => {
    message.success('\u70B9\u51FB\u4E8B\u4EF6\u89E6\u53D1');
    setOpen(!open);
  };
  return (
    <SideTip
      type="primary"
      size="small"
      loading
      open={open}
      icon={<CloudUploadOutlined />}
      onClick={handleVisibleChange}
    />
  );
};
`},27286:function(t,n){"use strict";n.Z=`import React from 'react';
import { message } from '@oceanbase/design';
import { SideTip } from '@oceanbase/ui';
import { CloudUploadOutlined } from '@oceanbase/icons';

export default () => {
  return (
    <SideTip
      type="primary"
      tooltip={{
        title: 'ToolTip \u63D0\u793A',
      }}
      icon={<CloudUploadOutlined />}
      onClick={() => {
        message.info('\u70B9\u51FB\u4E8B\u4EF6\u89E6\u53D1');
      }}
    />
  );
};
`},25136:function(t,n){"use strict";n.Z=`import React from 'react';
import { TagSelect } from '@oceanbase/ui';

export default () => {
  const handleChange = checked => {
    console.log(checked);
  };

  return (
    <TagSelect.Item value="tag3" onChange={handleChange}>
      Unselected Item
    </TagSelect.Item>
  );
};
`},41624:function(t,n){"use strict";n.Z=`import React, { useState } from 'react';
import { TagSelect } from '@oceanbase/ui';

export default () => {
  const option = [
    {
      label: 'Unselected Option',
      value: 1,
    },
    {
      label: 'Unselected Option',
      value: 2,
    },
    {
      label: 'Unselected Option',
      value: 3,
    },
  ];
  const [checked, setChecked] = useState();
  const handleChange = v => {
    setChecked(v);
  };

  return (
    <TagSelect.Group
      title="I am a title"
      options={option}
      onChange={handleChange}
      value={checked}
    />
  );
};
`},56984:function(t,n){"use strict";n.Z=`import React from 'react';
import { TagSelect } from '@oceanbase/ui';

export default () => {
  return (
    <div>
      <TagSelect.Item
        cover={
          'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
        }
      />
      <TagSelect.Item
        cover={
          <img
            height={30}
            width={40}
            src={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
        }
      />
    </div>
  );
};
`},27104:function(t,n){"use strict";n.Z=`import React from 'react';
import { TagSelect } from '@oceanbase/ui';

export default () => {
  const option = [
    {
      label: 'Unselected Item',
      value: 1,
    },
    {
      label: 'Unselected Item',
      value: 2,
    },
    {
      label: 'Unselected Item',
      value: 3,
    },
    {
      label: 'Unselected Item',
      value: 4,
    },
  ];

  return (
    <div>
      <TagSelect.Group title="Default" options={option} multiple />
      <TagSelect.Group title="Selected" defaultValue={[1]} multiple>
        <TagSelect.Item value={1}>Selected Item</TagSelect.Item>
        <TagSelect.Item value={2}>Unselected Item</TagSelect.Item>
        <TagSelect.Item value={3}>Unselected Item</TagSelect.Item>
        <TagSelect.Item value={4}>Unselected Item</TagSelect.Item>
      </TagSelect.Group>
      <TagSelect.Group title="Disabled" defaultValue={[2, 4]} disabled multiple>
        <TagSelect.Item value={1}>Disabled Option</TagSelect.Item>
        <TagSelect.Item value={2}>Disabled Option</TagSelect.Item>
        <TagSelect.Item value={3}>Disabled Option</TagSelect.Item>
        <TagSelect.Item value={4}>Disabled Option</TagSelect.Item>
      </TagSelect.Group>
    </div>
  );
};
`},91469:function(t,n){"use strict";n.Z=`import React from 'react';
import { TagSelect } from '@oceanbase/ui';

export default () => {
  const option = [
    {
      label: 'Unselected Item',
      value: 1,
    },
    {
      label: 'Unselected Item',
      value: 2,
    },
    {
      label: 'Unselected Item',
      value: 3,
    },
    {
      label: 'Unselected Item',
      value: 4,
    },
  ];

  return (
    <div>
      <TagSelect.Group title="Default" options={option} />
      <TagSelect.Group title="Selected" defaultValue={1}>
        <TagSelect.Item value={1}>Selected Item</TagSelect.Item>
        <TagSelect.Item value={2}>Unselected Item</TagSelect.Item>
        <TagSelect.Item value={3}>Unselected Item</TagSelect.Item>
        <TagSelect.Item value={4}>Unselected Item</TagSelect.Item>
      </TagSelect.Group>
      <TagSelect.Group title="Disabled" defaultValue={4} disabled>
        <TagSelect.Item value={1}>Disabled Option</TagSelect.Item>
        <TagSelect.Item value={2}>Disabled Option</TagSelect.Item>
        <TagSelect.Item value={3}>Disabled Option</TagSelect.Item>
        <TagSelect.Item value={4}>Disabled Option</TagSelect.Item>
      </TagSelect.Group>
    </div>
  );
};
`},72863:function(t,n){"use strict";n.Z=`import React from 'react';
import { TagSelect } from '@oceanbase/ui';

export default () => {
  const option = [
    {
      label: 'Selected Item',
      value: 1,
    },
    {
      label: 'Unselected Item',
      value: 2,
    },
    {
      label: 'Unselected Item',
      value: 3,
    },
    {
      label: 'Unselected Item',
      value: 4,
    },
  ];
  return (
    <div>
      <div>
        <div>Single Select</div>
        <TagSelect.Group title="small" options={option} size="small" defaultValue={1} />
        <TagSelect.Group title="middle" options={option} size="middle" defaultValue={1} />
        <TagSelect.Group title="large" options={option} size="large" defaultValue={1} />
        <div style={{ marginTop: 20 }}>Image Style</div>
        <TagSelect.Group defaultValue={'tag1'} size="small">
          <TagSelect.Item
            value="tag1"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag2"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag3"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
        </TagSelect.Group>
        <TagSelect.Group defaultValue={'tag1'} size="middle">
          <TagSelect.Item
            value="tag1"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag2"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag3"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
        </TagSelect.Group>
        <TagSelect.Group defaultValue={'tag1'} size="large">
          <TagSelect.Item
            value="tag1"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag2"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag3"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
        </TagSelect.Group>
      </div>
      <div>
        <div style={{ marginTop: 20 }}>Multiple Select</div>
        <TagSelect.Group title="small" options={option} size="small" defaultValue={[1]} multiple />
        <TagSelect.Group
          title="middle"
          options={option}
          size="middle"
          defaultValue={[1]}
          multiple
        />
        <TagSelect.Group title="large" options={option} size="large" defaultValue={[1]} multiple />
        <div style={{ marginTop: 20 }}>Image Style</div>
        <TagSelect.Group defaultValue={'tag1'} size="small" multiple>
          <TagSelect.Item
            value="tag1"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag2"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag3"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
        </TagSelect.Group>
        <TagSelect.Group defaultValue={'tag1'} size="middle" multiple>
          <TagSelect.Item
            value="tag1"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag2"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag3"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
        </TagSelect.Group>
        <TagSelect.Group defaultValue={'tag1'} size="large" multiple>
          <TagSelect.Item
            value="tag1"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag2"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
          <TagSelect.Item
            value="tag3"
            cover={
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png'
            }
          />
        </TagSelect.Group>
      </div>
    </div>
  );
};
`},71284:function(t,n){"use strict";n.Z=`import React, { useRef, useState } from 'react';
import { Button, Divider } from '@oceanbase/design';
import { TreeSearch } from '@oceanbase/ui';
import type { Node, TreeSearchRef } from '@oceanbase/ui/es/TreeSearch';

export default () => {
  const ref = useRef<TreeSearchRef>();
  const [values, setValues] = useState<string[]>([]);

  const reset = () => {
    ref.current?.reset();
  };

  const checkAll = () => {
    ref.current?.checkAll();
  };

  const invertSelect = () => {
    ref.current?.invertSelect();
  };

  const handleChange = (nodes: Node[]) => {
    setValues(nodes.map(node => node.value));
  };

  const submit = () => {
    console.log(values);
  };

  return (
    <div>
      <TreeSearch
        ref={ref}
        onChange={handleChange}
        height={400}
        treeData={[
          {
            value: 'hello',
            title: 'Hello',
            children: [
              { value: 'world', title: 'World' },
              { value: 'name', title: 'Name' },
            ],
          },
          {
            value: 'hello1',
            title: 'Hello',
            children: [
              { value: 'world', title: 'World' },
              { value: 'name', title: 'Name' },
            ],
          },
          {
            value: 'hello2',
            title: 'Hello',
            children: [
              { value: 'world', title: 'World' },
              { value: 'name', title: 'Name' },
            ],
          },
          {
            value: 'hello3',
            title: 'Hello',
            children: [
              { value: 'world', title: 'World' },
              { value: 'name', title: 'Name' },
            ],
          },
          {
            value: 'hello4',
            title: 'Hello',
            children: [
              { value: 'world', title: 'World' },
              { value: 'name', title: 'Name' },
            ],
          },
          { value: 'say', title: 'Say' },
        ]}
      />
      <Divider style={{ margin: '12px 0' }} />
      <Button onClick={checkAll} style={{ marginRight: 12 }}>
        Select All
      </Button>
      <Button onClick={invertSelect} style={{ marginRight: 12 }}>
        Invert Selection
      </Button>
      <Button onClick={reset} style={{ marginRight: 12 }}>
        Reset
      </Button>
      <Button type="primary" onClick={submit}>
        Submit
      </Button>
    </div>
  );
};
`},11288:function(t,n){"use strict";n.Z=`import React from 'react';
import {
  DatabaseOutlined,
  FolderViewOutlined,
  ProfileOutlined,
  TableOutlined,
} from '@oceanbase/icons';
import { TreeSearch } from '@oceanbase/ui';
import { DataNode } from '@oceanbase/design/es/tree';
import './style.css';

interface Node extends DataNode {
  extra: React.ReactNode;
  title?: React.ReactNode;
}

const alertMsg = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  event.stopPropagation();
  alert('test');
};

const treeData = [
  {
    title: 'database1',
    icon: <DatabaseOutlined />,
    children: [
      {
        title: 'Table',
        icon: <TableOutlined />,
        extra: <a onClick={alertMsg}>Test</a>,
        children: [
          {
            title: 'table1',
            icon: <ProfileOutlined />,
          },
          {
            title: 'table2',
            icon: <ProfileOutlined />,
            extra: <a onClick={alertMsg}>Test</a>,
          },
        ],
      },
      {
        title: 'View',
        icon: <FolderViewOutlined />,
        children: [
          {
            title: 'view1',
            icon: <ProfileOutlined />,
          },
          {
            title: 'view2',
            icon: <ProfileOutlined />,
          },
        ],
      },
    ],
  },
  {
    title: 'database2',
    icon: <DatabaseOutlined />,
    children: [
      {
        title: 'Table',
        icon: <TableOutlined />,
        extra: <a onClick={alertMsg}>Test</a>,
        children: [
          {
            title: 'table1',
            icon: <ProfileOutlined />,
          },
          {
            title: 'table2',
            icon: <ProfileOutlined />,
          },
        ],
      },
      {
        title: 'View',
        icon: <FolderViewOutlined />,
        children: [
          {
            title: 'view1',
            icon: <ProfileOutlined />,
          },
          {
            title: 'view2',
            icon: <ProfileOutlined />,
          },
        ],
      },
    ],
  },
];

export default () => {
  // Render title
  const renderTitle = (nodeData: Node) => {
    if (nodeData.extra) {
      return (
        <>
          <span>{nodeData.title}</span>
          <span className="treetitle-extra">{nodeData.extra}</span>
        </>
      );
    }

    return nodeData.title;
  };
  return (
    <TreeSearch
      width={500}
      height={500}
      checkable={false}
      titleRender={renderTitle}
      treeData={treeData}
    />
  );
};
`},40443:function(t,n){"use strict";n.Z=`.treetitle-extra {
  position: absolute;
  right: 0;
}
`},5489:function(t,n){"use strict";n.Z=`import React from 'react';
import { TreeSearch } from '@oceanbase/ui';
import type { DataNode } from '@oceanbase/design/es/tree';
import './style.css';

interface Node extends DataNode {
  extra: React.ReactNode;
  title?: React.ReactNode;
}

function dig(path = '0', level = 3) {
  const list = [];
  for (let i = 0; i < 10; i += 1) {
    const key = \`\${path}-\${i}\`;
    const treeNode = {
      title: key,
      key,
    } as Node;

    if (level > 0) {
      treeNode.children = dig(key, level - 1);
    }

    list.push(treeNode);
  }
  return list;
}

const treeData = dig();

export default () => {
  // Render title
  const renderTitle = (nodeData: Node) => {
    if (nodeData.extra) {
      return (
        <>
          <span>{nodeData.title as string}</span>
          <span className="treetitle-extra">{nodeData.extra}</span>
        </>
      );
    }

    return nodeData.title;
  };
  return (
    <div style={{ height: 600 }}>
      <TreeSearch width={500} checkable={false} titleRender={renderTitle} treeData={treeData} />
    </div>
  );
};
`},60564:function(t,n){"use strict";n.Z=`import React from 'react';
import { message } from '@oceanbase/design';
import { Welcome } from '@oceanbase/ui';

export default () => {
  const introduces = [
    {
      image:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      title: 'Professional Management Platform',
      description: 'A professional database management platform built around OceanBase',
    },
    {
      image:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      title: 'Full Lifecycle Management',
      description:
        'Provides full lifecycle management for OceanBase from deployment and operations to upgrade and removal',
    },
    {
      image:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      title: 'Higher Efficiency, Lower Cost',
      description:
        'Improve OceanBase management efficiency and reduce enterprise IT operations costs',
    },
  ];
  const steps = [
    {
      title: 'Create Cluster',
      description: 'Create a database within a tenant to connect it to your application.',
    },
    {
      title: 'Create Tenant',
      description: 'Create a database within a tenant to connect it to your application.',
    },
    {
      title: 'Create Database',
      description: 'Create a database within a tenant to connect it to your application.',
    },
    {
      title: 'Connect Database',
      description: 'Create a database within a tenant to connect it to your application.',
    },
  ];
  const helps = [
    {
      title: 'Create a New Cluster',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'Create a New Tenant',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'Manage Clusters',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'Manage Tenants',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'View Tasks',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'View Alerts',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'Add New User',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'View More',
      link: 'https://www.oceanbase.com',
      isMore: true,
    },
  ];
  return (
    <Welcome
      title="Hi, welcome to OceanBase Cloud Platform"
      description="OceanBase Cloud Platform (OCP) is a platform for managing OceanBase database clusters. With OCP, you can install, deploy, monitor, and alert on OceanBase clusters throughout their full lifecycle. We are committed to providing efficient management services that create more value for you."
      bgImage="https://gw-office.alipayobjects.com/bmw-prod/37822958-2b90-4414-a61b-581c0b744c13.png"
      introduces={introduces}
      steps={steps}
      buttonText="Create Cluster"
      buttonProps={{
        onClick: () => {
          message.success('You clicked the button');
        },
      }}
      helps={helps}
    />
  );
};
`},76990:function(t,n){"use strict";n.Z=`import React from 'react';
import { message } from '@oceanbase/design';
import { Welcome } from '@oceanbase/ui';

export default () => {
  const introduces = [
    {
      image:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      title: 'Professional Management Platform',
      description: 'A professional database management platform built around OceanBase',
    },
    {
      image:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      title: 'Full Lifecycle Management',
      description:
        'Provides full lifecycle management for OceanBase from deployment and operations to upgrade and removal',
    },
    {
      image:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      title: 'Higher Efficiency, Lower Cost',
      description:
        'Improve OceanBase management efficiency and reduce enterprise IT operations costs',
    },
  ];
  const steps = [
    {
      title: 'Create Cluster',
      imgUrl:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      description: 'Create a database within a tenant to connect it to your application.',
      operations: [
        {
          text: 'Create Application Service',
          onClick: () => {
            console.info('Clicked');
          },
        },
      ],
    },
    {
      title: 'Create Tenant',
      imgUrl:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      description: 'Create a database within a tenant to connect it to your application.',
      operations: [
        {
          text: '',
          onClick: () => {
            console.info('Clicked');
          },
        },
      ],
    },
    {
      title: 'Create Database',
      imgUrl:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      description: 'Create a database within a tenant to connect it to your application.',
      operations: [
        {
          text: 'Create Application Service',
          onClick: () => {
            console.info('Clicked');
          },
        },
      ],
    },
    {
      title: 'Connect Database',
      imgUrl:
        'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
      description: 'Create a database within a tenant to connect it to your application.',
      operations: [
        {
          text: 'Create Application Service',
          onClick: () => {
            console.info('Clicked');
          },
        },
      ],
    },
  ];
  const helps = [
    {
      title: 'Create a New Cluster',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'Create a New Tenant',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'Manage Clusters',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'Manage Tenants',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'View Tasks',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'View Alerts',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'Add New User',
      link: 'https://www.oceanbase.com',
    },
    {
      title: 'View More',
      link: 'https://www.oceanbase.com',
      isMore: true,
    },
  ];
  return (
    <Welcome
      title="Hi, welcome to OceanBase Cloud Platform"
      description="OceanBase Cloud Platform (OCP) is a platform for managing OceanBase database clusters. With OCP, you can install, deploy, monitor, and alert on OceanBase clusters throughout their full lifecycle. We are committed to providing efficient management services that create more value for you."
      bgImage="https://gw-office.alipayobjects.com/bmw-prod/37822958-2b90-4414-a61b-581c0b744c13.png"
      introduces={introduces}
      steps={steps}
      stepType="card"
      buttonText="Create Cluster"
      buttonProps={{
        onClick: () => {
          message.success('You clicked the button');
        },
      }}
      helps={helps}
    />
  );
};
`},34481:function(t){"use strict";t.exports={i8:"1.4.4"}}}]);
