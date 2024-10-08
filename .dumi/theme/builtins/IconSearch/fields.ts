import * as ObIcons from '@oceanbase/icons';

const all = Object.keys(ObIcons)
  .map(n => n.replace(/(Outlined|Filled|TwoTone|Colored)$/, ''))
  .filter((n, i, arr) => arr.indexOf(n) === i);

const direction = [
  'ArrowUpCircle',
  'PopOut',
  'Drilldown',
  'FoldOut',
  'StepDown',
  'StepOver',
  'StepUp',
];

const suggestion = [
  'Question',
  'QuestionCircle',
  'Plus',
  'PlusCircle',
  'Pause',
  'PauseCircle',
  'Minus',
  'MinusCircle',
  'PlusSquare',
  'MinusSquare',
  'Info',
  'InfoCircle',
  'Exclamation',
  'ExclamationCircle',
  'Close',
  'CloseCircle',
  'CloseSquare',
  'Check',
  'CheckCircle',
  'CheckSquare',
  'ClockCircle',
  'Warning',
  'IssuesClose',
  'Stop',
];

const editor = [
  'CodeSlash',
  'CompileAll',
  'Compile',
  'FunctionBold',
  'LetterLower',
  'Letter',
  'LetterUpper',
  'Numeral',
  'Parameter',
  'Variable',
  'Sql',
  'PlConsole',
  'Pl',
  'Procedure',
  'UndoFlat',
  'RedoFlat',
  'RunAll',
  'RunCurrent',
  'Run',
  'Terminate',
];

const data = [
  'AreaChart',
  'PieChart',
  'BarChart',
  'DotChart',
  'LineChart',
  'RadarChart',
  'HeatMap',
  'Fall',
  'Rise',
  'Stock',
  'BoxPlot',
  'Fund',
  'Sliders',
];

const oceanbase = [
  'Oceanbase',
  'ObMysql',
  'ObOracle',
  'ObCluster',
  'ObTenant',
  'ObProxy',
  'Ocp',
  'Oms',
  'Oma',
  'Odc',
  'Oat',
];

const logo = [
  // cloud
  'Aliyun',
  'Aws',
  'GoogleCloud',
  'TencentCloud',
  'HuaweiCloud',
  // database
  'Mysql',
  'Oracle',
  'Polardb',
  'Postgresql',
  'Tidb',
  'MysqlSquare',
  'OracleSquare',
  // language
  'C',
  'Go',
  'Java',
  'Php',
  'Python',
  // tool
  'Navicat',
  'Dbeaver',
  'Bytebase',
  'Grafana',
  'Prometheus',
  'Datadog',
  'Flink',
  'Canal',
  'Kafka',
  'Rocketmq',
  'Liquibase',
  'Datafold',
  'Datagrip',
  'Datahub',
  'Dbt',
  'DolphinScheduler',
  'Informatica',
  'Maxwell',
  'Nifi',
  'Powerbi',
  'Airflow',
  'Superset',
  'Tableau',
  'Douyin',
];

const datum = [...oceanbase, ...direction, ...suggestion, ...editor, ...data, ...logo];

const other = all.filter(n => !datum.includes(n));

export const categories = {
  oceanbase,
  direction,
  suggestion,
  editor,
  data,
  logo,
  other,
};

export default categories;

export type Categories = typeof categories;
export type CategoriesKeys = keyof Categories;
