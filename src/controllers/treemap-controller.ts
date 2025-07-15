/**
 * 树图数据控制器
 * 处理树图数据相关的API请求
 */

import { Controller, Get, Res } from 'routing-controllers';
import { Response } from 'express';
import { treemapData } from '../data/treemap-data';
import { sendSuccess } from '../utils/responseUtils';

@Controller('/treemap')
export class TreemapController {
  /**
   * 获取树图数据
   * @param res 响应对象
   */
  @Get('/')
  getTreemapData(@Res() res: Response): Response {
    return sendSuccess(
      res,
      treemapData,
      '获取树图数据成功',
      treemapData.length,
      'tree'
    );
  }
}
