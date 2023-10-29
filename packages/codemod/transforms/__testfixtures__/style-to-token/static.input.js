const color = '#fafafa';
const border = '1px solid #fafafa';

const colorMap = {
  info: '#1890ff',
  success: '#52c41a',
  warning: '#faad14',
  error: '#ff4D4F',
  border: '1px solid #d9d9d9',
};

function getColorList() {
  return [
    {
      type: 'info',
      color: '#1890ff',
    },
    {
      type: 'success',
      color: '#52c41a',
    },
    {
      type: 'warning',
      color: '#faad14',
    },
    {
      type: 'error',
      color: '#ff4D4F',
    },
    {
      type: 'border',
      color: '1px solid #d9d9d9',
    },
  ];
}
