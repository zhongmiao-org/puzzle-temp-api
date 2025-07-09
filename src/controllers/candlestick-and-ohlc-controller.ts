/**
 * 蜡烛图和OHLC图数据控制器
 * 处理蜡烛图和OHLC图数据相关的API请求
 */

import { Controller, Get, Res } from 'routing-controllers';
import { Response } from 'express';
import { candlestickAndOhlcData } from '../data/candlestick-and-ohlc-data';
import { sendSuccess } from '../utils/responseUtils';

@Controller('/candlestick-and-ohlc')
export class CandlestickAndOhlcController {
  /**
   * 获取蜡烛图和OHLC图数据
   * @param res 响应对象
   */
  @Get('/')
  getCandlestickAndOhlcData(@Res() res: Response): Response {
    // 创建一个新的数组，将Date对象转换为时间戳
    const data = candlestickAndOhlcData.map(item => ({
      ...item,
      // 将Date对象转换为时间戳（毫秒），AG Charts可以识别这种格式
      date: item.date.getTime()
    }));

    return sendSuccess(
      res,
      data,
      '获取蜡烛图和OHLC图数据成功',
      data.length
    );
  }
}
