import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@oceanbase/shadcn';

export default () => {
  return (
    <div style={{ width: 400 }}>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>这是标题 1</AccordionTrigger>
          <AccordionContent>这是内容 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>这是标题 2</AccordionTrigger>
          <AccordionContent>这是内容 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
