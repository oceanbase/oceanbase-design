import { Gauge, theme } from '@oceanbase/charts';

export default () => {
  const config = {
    percent: 0.75,
    range: {
      ticks: [0, 1 / 3, 2 / 3, 1],
      color: [theme.semanticGreen, theme.semanticYellow, theme.semanticRed],
    },
  };
  return <Gauge {...config} />;
};
