// *** 该文件由 example_gen.js 自动生成，添加新的语言示例后运行该文件即可添加***
/* eslint-disable */

const configs = [
  {
    language: 'bash',
    text: 'Bash',
    code: '#!/bin/bash\n\n###### CONFIG\nACCEPTED_HOSTS="/root/.hag_accepted.conf"\nBE_VERBOSE=false\n\nif [ "$UID" -ne 0 ]\nthen\n echo "Superuser rights required"\n exit 2\nfi\n\ngenApacheConf(){\n echo -e "# Host ${HOME_DIR}$1/$2 :"\n}\n\necho \'"quoted"\' | tr -d \\\\/" > text.txt\n\n',
  },
  {
    language: 'cpp',
    text: 'Cpp',
    code: '#include <iostream>\n\nint main(int argc, char *argv[]) {\n\n  /* An annoying "Hello World" example */\n  for (auto i = 0; i < 0xFFFF; i++)\n    cout << "Hello, World!" << endl;\n\n  char c = \'\\n\';\n  unordered_map <string, vector<string> > m;\n  m["key"] = "\\\\\\\\"; // this is an error\n\n  return -2e3 + 12l;\n}',
  },
  {
    language: 'css',
    text: 'Css',
    code: "@font-face {\n  font-family: Chunkfive; src: url('Chunkfive.otf');\n}\n\nbody, .usertext {\n  color: #F0F0F0; background: #600;\n  font-family: Chunkfive, sans;\n  --heading-1: 30px/32px Helvetica, sans-serif;\n}\n\n@import url(print.css);\n@media print {\n  a[href^=http]::after {\n    content: attr(href)\n  }\n}",
  },
  {
    language: 'dockerfile',
    text: 'Dockerfile',
    code: '# Example instructions from https://docs.docker.com/reference/builder/\nFROM ubuntu:14.04\n\nMAINTAINER example@example.com\n\nENV foo /bar\nWORKDIR ${foo}   # WORKDIR /bar\nADD . $foo       # ADD . /bar\nCOPY \\$foo /quux # COPY $foo /quux\nARG   VAR=FOO\n\nRUN apt-get update && apt-get install -y software-properties-common\\\n    zsh curl wget git htop\\\n    unzip vim telnet\nRUN ["/bin/bash", "-c", "echo hello ${USER}"]\n\nCMD ["executable","param1","param2"]\nCMD command param1 param2\n\nEXPOSE 1337\n\nENV myName="John Doe" myDog=Rex\\ The\\ Dog \\\n    myCat=fluffy\n\nENV myName John Doe\nENV myDog Rex The Dog\nENV myCat fluffy',
  },
  {
    language: 'go',
    text: 'Go',
    code: 'package main\n\nimport "fmt"\n\nfunc main() {\n    ch := make(chan float64)\n    ch <- 1.0e10    // magic number\n    x, ok := <- ch\n    defer fmt.Println(`exitting now\\`)\n    go println(len("hello world!"))\n    return\n}',
  },
  {
    language: 'groovy',
    text: 'Groovy',
    code: '@CompileStatic\nclass Distribution implements Distributable {\n    double number = 1234.234 / 567\n    def otherNumber = 3 / 4\n    boolean archivable = condition ?: true\n    def ternary = a ? b : c\n    String name = "Guillaume"\n    Closure description = null\n    List<DownloadPackage> packages = []\n    String regex = ~/.*foo.*/\n    String multi = \'\'\'\n        multi line string\n    \'\'\' + """\n        now with double quotes and ${gstring}\n    """ + $/\n        even with dollar slashy strings\n    /$\n}',
  },
  {
    language: 'http',
    text: 'Http',
    code: 'POST /task?id=1 HTTP/1.1\nHost: example.org\nContent-Type: application/json; charset=utf-8\nContent-Length: 137\n\n{\n  "status": "ok",\n  "extended": true,\n  "results": [\n    {"value": 0, "type": "int64"},\n    {"value": 1.0e+3, "type": "decimal"}\n  ]\n}',
  },
  {
    language: 'java',
    text: 'Java',
    code: '/**\n * @author John Smith <john.smith@example.com>\n*/\npackage l2f.gameserver.model;\n\npublic abstract class L2Char extends L2Object {\n  public static final Short ERROR = 0x0001;\n\n  public void moveTo(int x, int y, int z) {\n    _ai = null;\n    log("Should not be called");\n    if (1 > 5) { // wtf!?\n      return;\n    }\n  }\n}',
  },
  {
    language: 'javascript',
    text: 'Javascript',
    code: 'function $initHighlight(block, cls) {\n  try {\n    if (cls.search(/\\bno\\-highlight\\b/) != -1)\n      return process(block, true, 0x0F) +\n             ` class="${cls}"`;\n  } catch (e) {\n    /* handle exception */\n  }\n  for (var i = 0 / 2; i < classes.length; i++) {\n    if (checkCondition(classes[i]) === undefined)\n      console.log(\'undefined\');\n  }\n\n  return (\n    <div>\n      <web-component>{block}</web-component>\n    </div>\n  )\n}\n\nexport  $initHighlight;',
  },
  {
    language: 'json',
    text: 'Json',
    code: '[\n  {\n    "title": "apples",\n    "count": [12000, 20000],\n    "description": {"text": "...", "sensitive": false}\n  },\n  {\n    "title": "oranges",\n    "count": [17500, null],\n    "description": {"text": "...", "sensitive": false}\n  }\n]',
  },
  {
    language: 'jsx',
    text: 'Jsx',
    code: 'import React from \'react\';\nimport { Button, Tag, Space } from \'@oceanbase/design\';\nimport { ProList } from \'@oceanbase/ui\';\n\nconst dataSource = [\n  {\n    name: \'OceanBase Design\',\n    image:\n      \'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original\',\n    desc: \'我是一条测试的描述\',\n  },\n  {\n    name: \'OceanBase Design\',\n    image:\n      \'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original\',\n    desc: \'我是一条测试的描述\',\n  },\n  {\n    name: \'OceanBase Database\',\n    image:\n      \'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original\',\n    desc: \'我是一条测试的描述\',\n  },\n  {\n    name: \'Oceanbase Design\',\n    image:\n      \'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original\',\n    desc: \'我是一条测试的描述\',\n  },\n];\n\nexport default () => (\n  <ProList\n    toolBarRender={() => {\n      return [\n        <Button key="add" type="primary">\n          新建\n        </Button>,\n      ];\n    }}\n    onRow={(record) => {\n      return {\n        onMouseEnter: () => {\n          console.log(record);\n        },\n        onClick: () => {\n          console.log(record);\n        },\n      };\n    }}\n    rowKey="name"\n    headerTitle="基础列表"\n    tooltip="基础列表的配置"\n    dataSource={dataSource}\n    showActions="hover"\n    showExtra="hover"\n    metas={{\n      title: {\n        dataIndex: \'name\',\n      },\n      avatar: {\n        dataIndex: \'image\',\n      },\n      description: {\n        dataIndex: \'desc\',\n      },\n      subTitle: {\n        render: () => {\n          return (\n            <Space size={0}>\n              <Tag color="blue">OceanBase Design</Tag>\n              <Tag color="#5BD8A6">Oceanbase Design</Tag>\n            </Space>\n          );\n        },\n      },\n      actions: {\n        render: (text, row) => [\n          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="link">\n            链路\n          </a>,\n          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="warning">\n            报警\n          </a>,\n          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="view">\n            查看\n          </a>,\n        ],\n      },\n    }}\n  />\n);',
  },
  {
    language: 'markdown',
    text: 'Markdown',
    code: '# hello world\n\nyou can write text [with links](http://example.com) inline or [link references][1].\n\n* one _thing_ has *em*phasis\n* two __things__ are **bold**\n\n[1]: http://example.com\n\n---\n\nhello world\n===========\n\n<this_is inline="xml"></this_is>\n\n> markdown is so cool\n\n    so are code segments\n\n1. one thing (yeah!)\n2. two thing `i can write code`, and `more` wipee!',
  },
  {
    language: 'nginx',
    text: 'Nginx',
    code: 'user  www www;\nworker_processes  2;\npid /var/run/nginx.pid;\nerror_log  /var/log/nginx.error_log  debug | info | notice | warn | error | crit;\n\nevents {\n    connections   2000;\n    use kqueue | rtsig | epoll | /dev/poll | select | poll;\n}\n\nhttp {\n    log_format main      \'$remote_addr - $remote_user [$time_local] \'\n                         \'"$request" $status $bytes_sent \'\n                         \'"$http_referer" "$http_user_agent" \'\n                         \'"$gzip_ratio"\';\n\n    send_timeout 3m;\n    client_header_buffer_size 1k;\n\n    gzip on;\n    gzip_min_length 1100;\n\n    #lingering_time 30;\n\n    server {\n        server_name   one.example.com  www.one.example.com;\n        access_log   /var/log/nginx.access_log  main;\n\n        rewrite (.*) /index.php?page=$1 break;\n\n        location / {\n            proxy_pass         http://127.0.0.1/;\n            proxy_redirect     off;\n            proxy_set_header   Host             $host;\n            proxy_set_header   X-Real-IP        $remote_addr;\n            charset            koi8-r;\n        }\n\n        location /api/ {\n            fastcgi_pass 127.0.0.1:9000;\n        }\n\n        location ~* \\.(jpg|jpeg|gif)$ {\n            root         /spool/www;\n        }\n    }\n}',
  },
  {
    language: 'python',
    text: 'Python',
    code: "@requires_authorization\ndef somefunc(param1='', param2=0):\n    r'''A docstring'''\n    if param1 > param2: # interesting\n        print 'Gre\\'ater'\n    return (param2 - param1 + 1 + 0b10l) or None\n\nclass SomeClass:\n    pass\n\n>>> message = '''interpreter\n... prompt'''",
  },
  {
    language: 'ruby',
    text: 'Ruby',
    code: '# The Greeter class\nclass Greeter\n  def initialize(name)\n    @name = name.capitalize\n  end\n\n  def salute\n    puts "Hello #{@name}!"\n  end\nend\n\ng = Greeter.new("world")\ng.salute',
  },
  {
    language: 'solidity',
    text: 'Solidity',
    code: '// SPDX-License-Identifier: MIT\npragma solidity ^0.8.10;\n\ncontract Primitives {\n    bool public boo = true;\n\n    uint8 public u8 = 1;\n    uint public u256 = 456;\n    uint public u = 123; // uint is an alias for uint256\n\n    int8 public i8 = -1;\n    int public i256 = 456;\n    int public i = -123; // int is same as int256\n\n    // minimum and maximum of int\n    int public minInt = type(int).min;\n    int public maxInt = type(int).max;\n\n    address public addr = 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c;\n\n    bytes1 a = 0xb5; //  [10110101]\n    bytes1 b = 0x56; //  [01010110]\n\n    // Default values\n    // Unassigned variables have a default value\n    bool public defaultBoo; // false\n    uint public defaultUint; // 0\n    int public defaultInt; // 0\n    address public defaultAddr; // 0x0000000000000000000000000000000000000000\n}',
  },
  {
    language: 'sql',
    text: 'Sql',
    code: 'CREATE TABLE "topic" (\n    "id" serial NOT NULL PRIMARY KEY,\n    "forum_id" integer NOT NULL,\n    "subject" varchar(255) NOT NULL\n);\nALTER TABLE "topic"\nADD CONSTRAINT forum_id FOREIGN KEY ("forum_id")\nREFERENCES "forum" ("id");\n\n-- Initials\ninsert into "topic" ("forum_id", "subject")\nvalues (2, \'D\'\'artagnian\');',
  },
  {
    language: 'tsx',
    text: 'Tsx',
    code: 'import React from \'react\';\nimport { Button, Tag, Space } from \'@oceanbase/design\';\nimport { ProList } from \'@oceanbase/ui\';\n\nconst dataSource = [\n  {\n    name: \'OceanBase Design\',\n    image:\n      \'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original\',\n    desc: \'我是一条测试的描述\',\n  },\n  {\n    name: \'OceanBase Database\',\n    image:\n      \'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original\',\n    desc: \'我是一条测试的描述\',\n  },\n  {\n    name: \'OceanBase Cloud\',\n    image:\n      \'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original\',\n    desc: \'我是一条测试的描述\',\n  },\n  {\n    name: \'Oceanbase Design\',\n    image:\n      \'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original\',\n    desc: \'我是一条测试的描述\',\n  },\n];\n\nexport default () => (\n  <ProList<any>\n    toolBarRender={() => {\n      return [\n        <Button key="add" type="primary">\n          新建\n        </Button>,\n      ];\n    }}\n    onRow={(record: any) => {\n      return {\n        onMouseEnter: () => {\n          console.log(record);\n        },\n        onClick: () => {\n          console.log(record);\n        },\n      };\n    }}\n    rowKey="name"\n    headerTitle="基础列表"\n    tooltip="基础列表的配置"\n    dataSource={dataSource}\n    showActions="hover"\n    showExtra="hover"\n    metas={{\n      title: {\n        dataIndex: \'name\',\n      },\n      avatar: {\n        dataIndex: \'image\',\n      },\n      description: {\n        dataIndex: \'desc\',\n      },\n      subTitle: {\n        render: () => {\n          return (\n            <Space size={0}>\n              <Tag color="blue">OceanBase Design</Tag>\n              <Tag color="#5BD8A6">Oceanbase Design</Tag>\n            </Space>\n          );\n        },\n      },\n      actions: {\n        render: (text, row) => [\n          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="link">\n            链路\n          </a>,\n          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="warning">\n            报警\n          </a>,\n          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="view">\n            查看\n          </a>,\n        ],\n      },\n    }}\n  />\n);',
  },
  {
    language: 'typescript',
    text: 'Typescript',
    code: 'class MyClass {\n  public static myValue: string;\n  constructor(init: string) {\n    this.myValue = init;\n  }\n}\nimport fs = require("fs");\nmodule MyModule {\n  export interface MyInterface extends Other {\n    myProperty: any;\n  }\n}\ndeclare magicNumber number;\nmyArray.forEach(() => { }); // fat arrow syntax',
  },
  {
    language: 'xml',
    text: 'Xml',
    code: '<!DOCTYPE html>\n<title>Title</title>\n\n<style>body {width: 500px;}</style>\n\n<script type="application/javascript">\n  function $init() {return true;}\n</script>\n\n<body>\n  <p checked class="title" id=\'title\'>Title</p>\n  <!-- here goes the rest of the page -->\n</body>',
  },
  {
    language: 'yaml',
    text: 'Yaml',
    code: '---\n# comment\nstring_1: "Bar"\nstring_2: \'bar\'\nstring_3: bar\ninline_keys_ignored: sompath/name/file.jpg\nkeywords_in_yaml:\n  - true\n  - false\n  - TRUE\n  - FALSE\n  - 21\n  - 21.0\n  - !!str 123\n"quoted_key": &foobar\n  bar: foo\n  foo:\n  "foo": bar\n\nreference: *foobar\n\nmultiline_1: |\n  Multiline\n  String\nmultiline_2: >\n  Multiline\n  String\nmultiline_3: "\n  Multiline string\n  "\n\nansible_variables: "foo {{variable}}"\n\narray_nested:\n- a\n- b: 1\n  c: 2\n- b\n- comment',
  },
];

export default configs;
