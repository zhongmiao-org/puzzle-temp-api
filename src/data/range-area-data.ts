/**
 * 区域范围图数据
 * 包含不同类型房产价格随时间变化的数据
 */

export interface RangeAreaDataItem {
  date: Date;
  allPropertyTypes: number;
  detachedHouses: number;
  semiDetachedHouses: number;
  terracedHouses: number;
  flatsAndMaisonettes: number;
}

export const rangeAreaData: RangeAreaDataItem[] = [
  {
    date: new Date('2000-01-01'),
    allPropertyTypes: 130411,
    detachedHouses: 280980,
    semiDetachedHouses: 165413,
    terracedHouses: 127833,
    flatsAndMaisonettes: 115506,
  },
  {
    date: new Date('2000-02-01'),
    allPropertyTypes: 132705,
    detachedHouses: 279796,
    semiDetachedHouses: 165391,
    terracedHouses: 129708,
    flatsAndMaisonettes: 118641,
  },
  {
    date: new Date('2000-03-01'),
    allPropertyTypes: 134286,
    detachedHouses: 284608,
    semiDetachedHouses: 168433,
    terracedHouses: 131957,
    flatsAndMaisonettes: 119340,
  },
  {
    date: new Date('2000-04-01'),
    allPropertyTypes: 140670,
    detachedHouses: 293946,
    semiDetachedHouses: 174235,
    terracedHouses: 136659,
    flatsAndMaisonettes: 126608,
  },
  {
    date: new Date('2000-05-01'),
    allPropertyTypes: 140862,
    detachedHouses: 297670,
    semiDetachedHouses: 176792,
    terracedHouses: 137401,
    flatsAndMaisonettes: 125794,
  },
  {
    date: new Date('2000-06-01'),
    allPropertyTypes: 143542,
    detachedHouses: 298774,
    semiDetachedHouses: 179057,
    terracedHouses: 139575,
    flatsAndMaisonettes: 128870,
  },
  {
    date: new Date('2000-07-01'),
    allPropertyTypes: 146228,
    detachedHouses: 313017,
    semiDetachedHouses: 183384,
    terracedHouses: 142702,
    flatsAndMaisonettes: 130434,
  },
  {
    date: new Date('2000-08-01'),
    allPropertyTypes: 147284,
    detachedHouses: 311885,
    semiDetachedHouses: 184296,
    terracedHouses: 142302,
    flatsAndMaisonettes: 132453,
  },
  {
    date: new Date('2000-09-01'),
    allPropertyTypes: 147316,
    detachedHouses: 314775,
    semiDetachedHouses: 183347,
    terracedHouses: 142656,
    flatsAndMaisonettes: 132409,
  },
  {
    date: new Date('2000-10-01'),
    allPropertyTypes: 145626,
    detachedHouses: 314817,
    semiDetachedHouses: 184698,
    terracedHouses: 141042,
    flatsAndMaisonettes: 129962,
  },
  {
    date: new Date('2000-11-01'),
    allPropertyTypes: 147666,
    detachedHouses: 314211,
    semiDetachedHouses: 182742,
    terracedHouses: 141687,
    flatsAndMaisonettes: 133810,
  },
  {
    date: new Date('2000-12-01'),
    allPropertyTypes: 147483,
    detachedHouses: 307562,
    semiDetachedHouses: 182542,
    terracedHouses: 141993,
    flatsAndMaisonettes: 133575,
  },
  {
    date: new Date('2001-01-01'),
    allPropertyTypes: 149543,
    detachedHouses: 313677,
    semiDetachedHouses: 185344,
    terracedHouses: 144786,
    flatsAndMaisonettes: 134820,
  },
  {
    date: new Date('2001-02-01'),
    allPropertyTypes: 149776,
    detachedHouses: 316859,
    semiDetachedHouses: 187191,
    terracedHouses: 145438,
    flatsAndMaisonettes: 134820,
  }
];
