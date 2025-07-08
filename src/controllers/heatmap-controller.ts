/**
 * 热力图数据控制器
 * 处理热力图数据相关的API请求
 */

import { Controller, Get, Res } from 'routing-controllers';
import { Response } from 'express';
import { heatmapData } from '../data/heatmap-data';
import { sendSuccess } from '../utils/responseUtils';

@Controller('/heatmap')
export class HeatmapController {
  /**
   * 获取热力图数据
   * @param res 响应对象
   */
  @Get('/')
  getHeatmapData(@Res() res: Response): Response {
    return sendSuccess(
      res,
      heatmapData,
      '获取热力图数据成功',
      heatmapData.length
    );
  }
}
