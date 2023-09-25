/**
 * title: 多段代码渲染
 */
import React from 'react';
import { Highlight } from '@oceanbase/ui';

export default () => (
  <Highlight innerHTML theme="dark">
    {`<pre style="padding: 0; margin:0;"><code>
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
   </code></pre>`}
  </Highlight>
);
