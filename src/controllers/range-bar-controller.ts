/**
 * 范围柱状图数据控制器
 * 处理范围柱状图数据相关的API请求
 */

import { Controller, Get, Res } from 'routing-controllers';
import { Response } from 'express';
import { rangeBarData } from '../data/range-bar-data';
import { sendSuccess } from '../utils/responseUtils';

@Controller('/range-bar')
export class RangeBarController {
  /**
   * 获取范围柱状图数据
   * @param res 响应对象
   */
  @Get('/')
  getRangeBarData(@Res() res: Response): Response {
    return sendSuccess(
      res,
      rangeBarData,
      '获取范围柱状图数据成功',
      rangeBarData.length
    );
  }
}
