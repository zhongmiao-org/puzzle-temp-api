/**
 * 雷达线图数据
 * 包含部门、质量和效率数据
 */

export interface RadarLineDataItem {
  department: string;
  quality: number;
  efficiency: number;
}

export const radarLineData: RadarLineDataItem[] = [
  {
    department: 'Sales',
    quality: 40,
    efficiency: 75,
  },
  {
    department: 'Engineering',
    quality: 45,
    efficiency: 90,
  },
  {
    department: 'HR',
    quality: 80,
    efficiency: 60,
  },
  {
    department: 'Marketing',
    quality: 80,
    efficiency: 60,
  },
  {
    department: 'Finance',
    quality: 85,
    efficiency: 50,
  },
];
