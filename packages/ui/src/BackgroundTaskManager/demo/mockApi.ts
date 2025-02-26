let rollingTimes = 0;

// mock 轮询接口
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
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

export { getTaskById };
