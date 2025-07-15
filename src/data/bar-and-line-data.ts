/**
 * 柱状图和折线图数据
 * 包含苹果公司各季度产品收入数据
 */

export interface BarAndLineDataItem {
  quarter: string;
  iphone: number;
  mac: number;
  ipad: number;
  wearables: number;
  services: number;
}

export const barAndLineData: BarAndLineDataItem[] = [
  {
    quarter: "Q1'18",
    iphone: 140,
    mac: 16,
    ipad: 14,
    wearables: 12,
    services: 20,
  },
  {
    quarter: "Q2'18",
    iphone: 124,
    mac: 20,
    ipad: 14,
    wearables: 12,
    services: 30,
  },
  {
    quarter: "Q3'18",
    iphone: 112,
    mac: 20,
    ipad: 18,
    wearables: 14,
    services: 36,
  },
  {
    quarter: "Q4'18",
    iphone: 118,
    mac: 24,
    ipad: 14,
    wearables: 14,
    services: 36,
  },
];

/**
 * 柱状图和折线图数据2
 * 包含三星公司各季度产品收入数据
 */
export interface BarAndLineData2Item {
  quarter: string;
  smartphones: number;
  computers: number;
  tablets: number;
  wearables: number;
  services: number;
}

export const barAndLineData2: BarAndLineData2Item[] = [
  {
    quarter: "Q1'19",
    smartphones: 132,
    computers: 25,
    tablets: 19,
    wearables: 8,
    services: 22,
  },
  {
    quarter: "Q2'19",
    smartphones: 128,
    computers: 27,
    tablets: 15,
    wearables: 12,
    services: 26,
  },
  {
    quarter: "Q3'19",
    smartphones: 145,
    computers: 22,
    tablets: 17,
    wearables: 15,
    services: 31,
  },
  {
    quarter: "Q4'19",
    smartphones: 138,
    computers: 30,
    tablets: 20,
    wearables: 19,
    services: 28,
  },
];

/**
 * 柱状图和折线图数据3
 * 包含华为公司各季度产品收入数据
 */
export interface BarAndLineData3Item {
  quarter: string;
  phones: number;
  laptops: number;
  tablets: number;
  wearables: number;
  cloud: number;
}

export const barAndLineData3: BarAndLineData3Item[] = [
  {
    quarter: "Q1'20",
    phones: 87,
    laptops: 19,
    tablets: 15,
    wearables: 11,
    cloud: 14,
  },
  {
    quarter: "Q2'20",
    phones: 93,
    laptops: 21,
    tablets: 12,
    wearables: 9,
    cloud: 18,
  },
  {
    quarter: "Q3'20",
    phones: 78,
    laptops: 24,
    tablets: 17,
    wearables: 13,
    cloud: 22,
  },
  {
    quarter: "Q4'20",
    phones: 105,
    laptops: 18,
    tablets: 14,
    wearables: 16,
    cloud: 25,
  },
];

/**
 * 柱状图和折线图数据4
 * 包含小米公司各季度产品收入数据
 */
export interface BarAndLineData4Item {
  quarter: string;
  smartphones: number;
  iot: number;
  lifestyle: number;
  internet: number;
  overseas: number;
}

export const barAndLineData4: BarAndLineData4Item[] = [
  {
    quarter: "Q1'21",
    smartphones: 76,
    iot: 38,
    lifestyle: 12,
    internet: 25,
    overseas: 37,
  },
  {
    quarter: "Q2'21",
    smartphones: 92,
    iot: 32,
    lifestyle: 19,
    internet: 18,
    overseas: 42,
  },
  {
    quarter: "Q3'21",
    smartphones: 85,
    iot: 45,
    lifestyle: 16,
    internet: 30,
    overseas: 48,
  },
  {
    quarter: "Q4'21",
    smartphones: 103,
    iot: 41,
    lifestyle: 24,
    internet: 22,
    overseas: 53,
  },
];

/**
 * 柱状图和折线图数据5
 * 包含谷歌公司各季度产品收入数据
 */
export interface BarAndLineData5Item {
  quarter: string;
  search: number;
  cloud: number;
  hardware: number;
  youtube: number;
  other: number;
}

export const barAndLineData5: BarAndLineData5Item[] = [
  {
    quarter: "Q1'22",
    search: 165,
    cloud: 35,
    hardware: 28,
    youtube: 32,
    other: 18,
  },
  {
    quarter: "Q2'22",
    search: 152,
    cloud: 48,
    hardware: 24,
    youtube: 38,
    other: 15,
  },
  {
    quarter: "Q3'22",
    search: 178,
    cloud: 42,
    hardware: 31,
    youtube: 35,
    other: 22,
  },
  {
    quarter: "Q4'22",
    search: 172,
    cloud: 57,
    hardware: 29,
    youtube: 42,
    other: 19,
  },
];
