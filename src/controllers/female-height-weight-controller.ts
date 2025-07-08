/**
 * 女性身高体重数据控制器
 * 处理女性身高体重数据相关的API请求
 */

import { Controller, Get, Res } from 'routing-controllers';
import { Response } from 'express';
import { femaleHeightWeight } from '../data/female-height-weight';
import { sendSuccess } from '../utils/responseUtils';

@Controller('/female-height-weight')
export class FemaleHeightWeightController {
  /**
   * 获取女性身高体重数据
   * @param res 响应对象
   */
  @Get('/')
  getFemaleHeightWeight(@Res() res: Response): Response {
    return sendSuccess(
      res,
      femaleHeightWeight,
      '获取女性身高体重数据成功',
      femaleHeightWeight.length
    );
  }
}
