/**
 * 双组数据
 * 包含按季度划分的软件、硬件和服务收入数据
 */

export interface DoubleGroupDataItem {
  quarter: string;
  software: number;
  hardware: number;
  services: number;
}

export const doubleGroupData: DoubleGroupDataItem[] = [
  {
    quarter: `Q1'22`,
    software: 4.35,
    hardware: 2.14,
    services: 3.91,
  },
  {
    quarter: `Q2'22`,
    software: 4.28,
    hardware: 3.13,
    services: 3.04,
  },
  {
    quarter: `Q3'22`,
    software: 4.14,
    hardware: 3.34,
    services: 3.18,
  },
  {
    quarter: `Q4'22`,
    software: 3.48,
    hardware: 3.56,
    services: 3.61,
  },
  {
    quarter: `Q1'23`,
    software: 3.35,
    hardware: 3.14,
    services: 3.91,
  },
  {
    quarter: `Q2'23`,
    software: 3.28,
    hardware: 3.13,
    services: 3.54,
  },
  {
    quarter: `Q3'23`,
    software: 3.14,
    hardware: 2.84,
    services: 3.18,
  },
  {
    quarter: `Q4'23`,
    software: 2.48,
    hardware: 2.46,
    services: 3.21,
  },
];
