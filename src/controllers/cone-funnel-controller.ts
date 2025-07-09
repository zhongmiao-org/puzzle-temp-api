/**
 * 锥形漏斗图数据控制器
 * 处理锥形漏斗图数据相关的API请求
 */

import { Controller, Get, Res } from 'routing-controllers';
import { Response } from 'express';
import { coneFunnelData } from '../data/cone-funnel-data';
import { sendSuccess } from '../utils/responseUtils';

@Controller('/cone-funnel')
export class ConeFunnelController {
  /**
   * 获取锥形漏斗图数据
   * @param res 响应对象
   */
  @Get('/')
  getConeFunnelData(@Res() res: Response): Response {
    return sendSuccess(
      res,
      coneFunnelData,
      '获取锥形漏斗图数据成功',
      coneFunnelData.length
    );
  }
}
