/**
 * 环形图数据控制器
 * 处理环形图数据相关的API请求
 */

import { Controller, Get, Res } from 'routing-controllers';
import { Response } from 'express';
import { donutChartData } from '../data/donut-chart-data';
import { sendSuccess } from '../utils/responseUtils';

@Controller('/donut-chart')
export class DonutChartController {
  /**
   * 获取环形图数据
   * @param res 响应对象
   */
  @Get('/')
  getDonutChartData(@Res() res: Response): Response {
    return sendSuccess(
      res,
      donutChartData,
      '获取环形图数据成功',
      donutChartData.length
    );
  }
}
