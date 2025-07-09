/**
 * 箱线图数据控制器
 * 处理箱线图数据相关的API请求
 */

import { Controller, Get, Res } from 'routing-controllers';
import { Response } from 'express';
import { boxPlotData } from '../data/box-plot-data';
import { sendSuccess } from '../utils/responseUtils';

@Controller('/box-plot')
export class BoxPlotController {
  /**
   * 获取箱线图数据
   * @param res 响应对象
   */
  @Get('/')
  getBoxPlotData(@Res() res: Response): Response {
    return sendSuccess(
      res,
      boxPlotData,
      '获取箱线图数据成功',
      boxPlotData.length
    );
  }
}
