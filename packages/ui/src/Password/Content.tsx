import { CheckCircleFilled, CloseCircleFilled, LoadingOutlined } from '@oceanbase/icons';
import { Progress, Space } from '@oceanbase/design';
import React from 'react';
import { theme } from '@oceanbase/design';

export interface Validator {
  validate: (value?: string) => boolean;
  message: string;
  optional?: boolean;
}

type ValidateStatus = 'success' | 'error' | 'wait';

const Content: React.FC<{
  rules: Validator[];
  fieldError: string[];
  isValidating: boolean;
  value?: string;
  isTouched: boolean;
}> = ({ rules, fieldError, isValidating, value, isTouched }) => {
  const { token } = theme.useToken();
  const statusIconMap = {
    error: <CloseCircleFilled style={{ color: token.colorError }} />,
    success: <CheckCircleFilled style={{ color: token.colorSuccess }} />,
    wait: (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 14,
          height: 22,
        }}
      >
        <div
          style={{
            width: 6,
            height: 6,
            backgroundColor: token.colorTextTertiary,
            borderRadius: 4,
          }}
        />
      </div>
    ),
  };

  const isRequireFail =
    rules.filter(rule => !rule.optional).filter(rule => fieldError.includes(rule.message)).length >
    0;
  // 密码强度
  const percent = Math.max(
    0,
    Math.min(100, ((rules.length - fieldError.length) / rules.length) * 100)
  );

  let strokeColor = '';
  if (isRequireFail) {
    strokeColor = token.colorError;
    if (percent > 50 && percent < 100 && percent !== 100) {
      strokeColor = token.colorWarning;
    }
  } else {
    strokeColor = token.colorSuccess;
  }

  return (
    <div>
      <Progress
        percent={value ? percent : 0}
        strokeColor={strokeColor}
        showInfo={false}
        size="small"
      />
      <ul style={{ margin: 0, marginTop: '10px', listStyle: 'none', padding: '0' }}>
        {rules?.map((rule, index) => {
          const isError = fieldError.includes(rule.message);
          let status: ValidateStatus = 'wait';
          if (isError) {
            status = rule.optional ? 'wait' : 'error';
          } else {
            status = 'success';
          }
          if (!value) {
            status = 'error';
          }
          if (!isTouched) {
            status = 'wait';
          }
          return (
            <li key={index}>
              <Space align="start">
                {isValidating ? <LoadingOutlined /> : statusIconMap[status]}
                <span style={{ color: token.colorTextSecondary }}>{rule.message}</span>
              </Space>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Content;
