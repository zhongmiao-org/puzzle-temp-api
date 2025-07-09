/**
 * 桑基图数据控制器
 * 处理桑基图数据相关的API请求
 */

import { Controller, Get, Res } from 'routing-controllers';
import { Response } from 'express';
import { sankeyData } from '../data/sankey-data';
import { sendSuccess } from '../utils/responseUtils';

@Controller('/sankey')
export class SankeyController {
  /**
   * 获取桑基图数据
   * @param res 响应对象
   */
  @Get('/')
  getSankeyData(@Res() res: Response): Response {
    return sendSuccess(
      res,
      sankeyData,
      '获取桑基图数据成功',
      sankeyData.length
    );
  }
}
