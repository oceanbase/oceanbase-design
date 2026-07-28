import React from 'react';
import ErrorDetails from './ErrorDetails';
import type { ObNotificationArgs } from './interface';

export interface BuildNotificationContentOptions {
  prefixCls: string;
  args: Pick<ObNotificationArgs, 'message' | 'description' | 'errorDetails'>;
}

const BuildNotificationContent = ({
  prefixCls,
  args,
}: BuildNotificationContentOptions): Pick<ObNotificationArgs, 'message' | 'description'> => {
  const { message, description, errorDetails } = args;

  const descriptionNode =
    description || errorDetails?.length ? (
      <>
        {description}
        {errorDetails?.length ? <ErrorDetails items={errorDetails} prefixCls={prefixCls} /> : null}
      </>
    ) : undefined;

  return {
    message,
    description: descriptionNode,
  };
};

export default BuildNotificationContent;
