/**
 * title: 展示代码块行号
 */

import { Highlight } from '@oceanbase/ui';

export default () => (
  <Highlight lineNumber={true}>
    {`public class HelloWorld {
     public static void main(String[] args) {
       System.out.println("Hello World!");
     }
   }`}
  </Highlight>
);
