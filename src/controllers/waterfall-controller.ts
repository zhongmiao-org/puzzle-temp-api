/**
 * 瀑布图数据控制器
 * 处理瀑布图数据相关的API请求
 */

import { Controller, Get, Res } from 'routing-controllers';
import { Response } from 'express';
import { waterfallData } from '../data/waterfall-data';
import { sendSuccess } from '../utils/responseUtils';

@Controller('/waterfall')
export class WaterfallController {
  /**
   * 获取瀑布图数据
   * @param res 响应对象
   */
  @Get('/')
  getWaterfallData(@Res() res: Response): Response {
    return sendSuccess(
      res,
      waterfallData,
      '获取瀑布图数据成功',
      waterfallData.length
    );
  }
}
