/**
 * 环形图数据
 * 包含资产类型、上一年和当前年度的金额数据
 */

export interface DonutChartDataItem {
  asset: string;
  previousYear: number;
  currentYear: number;
}

export const donutChartData: DonutChartDataItem[] = [
  { asset: 'Stocks', previousYear: 70000, currentYear: 40000 },
  { asset: 'Bonds', previousYear: 30000, currentYear: 60000 },
  { asset: 'Cash', previousYear: 5000, currentYear: 7000 },
  { asset: 'Real Estate', previousYear: 8000, currentYear: 5000 },
  { asset: 'Commodities', previousYear: 4500, currentYear: 3000 },
];
