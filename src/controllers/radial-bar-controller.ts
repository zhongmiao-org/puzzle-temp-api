/**
 * 径向柱状图数据控制器
 * 处理径向柱状图数据相关的API请求
 */

import { Controller, Get, Res } from 'routing-controllers';
import { Response } from 'express';
import { radialBarData } from '../data/radial-bar-data';
import { sendSuccess } from '../utils/responseUtils';

@Controller('/radial-bar')
export class RadialBarController {
  /**
   * 获取径向柱状图数据
   * @param res 响应对象
   */
  @Get('/')
  getRadialBarData(@Res() res: Response): Response {
    return sendSuccess(
      res,
      radialBarData,
      '获取径向柱状图数据成功',
      radialBarData.length
    );
  }
}
