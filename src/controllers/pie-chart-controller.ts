/**
 * 饼图数据控制器
 * 处理饼图数据相关的API请求
 */

import { Controller, Get, Res } from 'routing-controllers';
import { Response } from 'express';
import { pieChartData } from '../data/pie-chart-data';
import { sendSuccess } from '../utils/responseUtils';

@Controller('/pie-chart')
export class PieChartController {
  /**
   * 获取饼图数据
   * @param res 响应对象
   */
  @Get('/')
  getPieChartData(@Res() res: Response): Response {
    return sendSuccess(
      res,
      pieChartData,
      '获取饼图数据成功',
      pieChartData.length
    );
  }
}
