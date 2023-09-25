/**
 * title: 指定语言
 */
import React from 'react';
import { Highlight } from '@oceanbase/ui';

export default () => (
  <Highlight language="java" theme="dark">
    {`public class HelloWorld {
     public static void main(String[] args) {
       System.out.println("Hello World!");
     }
   }`}
  </Highlight>
);
