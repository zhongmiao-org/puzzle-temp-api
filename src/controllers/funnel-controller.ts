/**
 * 漏斗图数据控制器
 * 处理漏斗图数据相关的API请求
 */

import { Controller, Get, Res } from 'routing-controllers';
import { Response } from 'express';
import { funnelData } from '../data/funnel-data';
import { sendSuccess } from '../utils/responseUtils';

@Controller('/funnel')
export class FunnelController {
  /**
   * 获取漏斗图数据
   * @param res 响应对象
   */
  @Get('/')
  getFunnelData(@Res() res: Response): Response {
    return sendSuccess(
      res,
      funnelData,
      '获取漏斗图数据成功',
      funnelData.length
    );
  }
}
