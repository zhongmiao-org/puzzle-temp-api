/**
 * 雷达图数据控制器
 * 处理雷达图数据相关的API请求
 */

import { Controller, Get, Res } from 'routing-controllers';
import { Response } from 'express';
import { radarAreaData } from '../data/radar-area-data';
import { sendSuccess } from '../utils/responseUtils';

@Controller('/radar-area')
export class RadarAreaController {
  /**
   * 获取雷达图数据
   * @param res 响应对象
   */
  @Get('/')
  getRadarAreaData(@Res() res: Response): Response {
    return sendSuccess(
      res,
      radarAreaData,
      '获取雷达图数据成功',
      radarAreaData.length
    );
  }
}
