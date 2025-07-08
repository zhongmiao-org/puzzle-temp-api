/**
 * 男性身高体重数据控制器
 * 处理男性身高体重数据相关的API请求
 */

import { Controller, Get, Res } from 'routing-controllers';
import { Response } from 'express';
import { maleHeightWeight } from '../data/male-height-weight';
import { sendSuccess } from '../utils/responseUtils';

@Controller('/male-height-weight')
export class MaleHeightWeightController {
  /**
   * 获取男性身高体重数据
   * @param res 响应对象
   */
  @Get('/')
  getMaleHeightWeight(@Res() res: Response): Response {
    return sendSuccess(
      res,
      maleHeightWeight,
      '获取男性身高体重数据成功',
      maleHeightWeight.length
    );
  }
}
