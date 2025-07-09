/**
 * 雷达线图数据控制器
 * 处理雷达线图数据相关的API请求
 */

import { Controller, Get, Res } from 'routing-controllers';
import { Response } from 'express';
import { radarLineData } from '../data/radar-line-data';
import { sendSuccess } from '../utils/responseUtils';

@Controller('/radar-line')
export class RadarLineController {
  /**
   * 获取雷达线图数据
   * @param res 响应对象
   */
  @Get('/')
  getRadarLineData(@Res() res: Response): Response {
    return sendSuccess(
      res,
      radarLineData,
      '获取雷达线图数据成功',
      radarLineData.length
    );
  }
}
