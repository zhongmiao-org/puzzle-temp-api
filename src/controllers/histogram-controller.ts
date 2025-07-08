/**
 * 直方图数据控制器
 * 处理直方图数据相关的API请求
 */

import { Controller, Get, Res } from 'routing-controllers';
import { Response } from 'express';
import { histogramData } from '../data/histogram-data';
import { sendSuccess } from '../utils/responseUtils';

@Controller('/histogram')
export class HistogramController {
  /**
   * 获取直方图数据
   * @param res 响应对象
   */
  @Get('/')
  getHistogramData(@Res() res: Response): Response {
    return sendSuccess(
      res,
      histogramData,
      '获取直方图数据成功',
      histogramData.length
    );
  }
}
