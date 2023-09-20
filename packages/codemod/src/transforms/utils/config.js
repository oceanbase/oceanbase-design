// https://github.com/benjamn/recast/blob/master/lib/options.ts
const printOptions = {
  quote: 'single',
  // remove extra empty line for insertAfter
  // ref: https://github.com/benjamn/recast/issues/371#issuecomment-565786863
  reuseWhitespace: false,
};

module.exports = {
  printOptions,
};
