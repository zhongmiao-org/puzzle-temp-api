/**
 * 区域范围图数据控制器
 * 处理区域范围图数据相关的API请求
 */

import { Controller, Get, Res } from 'routing-controllers';
import { Response } from 'express';
import { rangeAreaData } from '../data/range-area-data';
import { sendSuccess } from '../utils/responseUtils';

@Controller('/range-area')
export class RangeAreaController {
  /**
   * 获取区域范围图数据
   * @param res 响应对象
   */
  @Get('/')
  getRangeAreaData(@Res() res: Response): Response {
    return sendSuccess(
      res,
      rangeAreaData,
      '获取区域范围图数据成功',
      rangeAreaData.length
    );
  }
}
