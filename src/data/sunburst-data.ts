/**
 * 旭日图数据
 * 包含按大洲和国家组织的GDP数据
 */

export interface SunburstCountryItem {
  name: string;
  gdp: number;
  gdpChange: number;
}

export interface SunburstRegionItem {
  name: string;
  children: (SunburstRegionItem | SunburstCountryItem)[];
  gdpChange: number;
}

export const sunburstData: SunburstRegionItem[] = [
  {
    name: 'Americas',
    children: [
      { name: 'United States', gdp: 26.949, gdpChange: 0.06 },
      { name: 'Canada', gdp: 2.117, gdpChange: 0 },
      { name: 'Brazil', gdp: 2.126, gdpChange: 0.11 },
    ],
    gdpChange: 0.09,
  },
  {
    name: 'Asia',
    children: [
      { name: 'China', gdp: 17.7, gdpChange: 0 },
      { name: 'Japan', gdp: 4.23, gdpChange: 0 },
      { name: 'India', gdp: 4.0, gdpChange: 0.2 },
    ],
    gdpChange: 0.05,
  },
  {
    name: 'Europe',
    children: [
      {
        name: 'EU',
        children: [
          { name: 'Germany', gdp: 4.429, gdpChange: 0.09 },
          { name: 'France', gdp: 3.049, gdpChange: 0.1 },
          { name: 'Italy', gdp: 2.186, gdpChange: 0.09 },
        ],
        gdpChange: 0.08,
      },
      { name: 'United Kingdom', gdp: 3.332, gdpChange: 0.09 },
    ],
    gdpChange: 0.08,
  },
];
