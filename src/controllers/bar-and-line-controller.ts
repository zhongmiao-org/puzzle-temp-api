/**
 * 柱状图和折线图数据控制器
 * 处理柱状图和折线图数据相关的API请求
 */

import { Controller, Get, Res } from 'routing-controllers';
import { Response } from 'express';
import { barAndLineData } from '../data/bar-and-line-data';
import { sendSuccess } from '../utils/responseUtils';

@Controller('/bar-and-line')
export class BarAndLineController {
  /**
   * 获取柱状图和折线图数据
   * @param res 响应对象
   */
  @Get('/')
  getBarAndLineData(@Res() res: Response): Response {
    return sendSuccess(
      res,
      barAndLineData,
      '获取柱状图和折线图数据成功',
      barAndLineData.length
    );
  }
}
