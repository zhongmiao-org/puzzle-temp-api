/**
 * 面积图数据控制器
 * 处理面积图数据相关的API请求
 */

import { Controller, Get, Res } from 'routing-controllers';
import { Response } from 'express';
import { areaChartData } from '../data/area-chart-data';
import { sendSuccess } from '../utils/responseUtils';

@Controller('/area-chart')
export class AreaChartController {
  /**
   * 获取面积图数据
   * @param res 响应对象
   */
  @Get('/')
  getAreaChartData(@Res() res: Response): Response {
    return sendSuccess(
      res,
      areaChartData,
      '获取面积图数据成功',
      areaChartData.length
    );
  }
}
