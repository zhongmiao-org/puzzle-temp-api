/**
 * 箱线图数据
 * 包含不同角色的薪资分布数据（最小值、第一四分位数、中位数、第三四分位数、最大值）
 */

export interface BoxPlotDataItem {
  role: string;
  min: number;
  q1: number;
  median: number;
  q3: number;
  max: number;
}

export const boxPlotData: BoxPlotDataItem[] = [
  {
    role: 'Sales',
    min: 4001,
    q1: 5071,
    median: 6232,
    q3: 8620,
    max: 13872,
  },
  {
    role: 'Research',
    min: 1009,
    q1: 2389,
    median: 2889,
    q3: 3904,
    max: 5974,
  },
  {
    role: 'Manufacturing',
    min: 4011,
    q1: 5121,
    median: 6474,
    q3: 9547,
    max: 13973,
  },
  {
    role: 'Manager',
    min: 12504,
    q1: 16437,
    median: 17465,
    q3: 19187,
    max: 19999,
  },
  {
    role: 'HR',
    min: 1555,
    q1: 2342,
    median: 3195,
    q3: 5985,
    max: 10725,
  },
];
