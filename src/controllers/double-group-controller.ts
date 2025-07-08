/**
 * 双组数据控制器
 * 处理双组数据相关的API请求
 */

import { Controller, Get, Res } from 'routing-controllers';
import { Response } from 'express';
import { doubleGroupData } from '../data/double-group-data';
import { sendSuccess } from '../utils/responseUtils';

@Controller('/double-group')
export class DoubleGroupController {
  /**
   * 获取双组数据
   * @param res 响应对象
   */
  @Get('/')
  getDoubleGroupData(@Res() res: Response): Response {
    return sendSuccess(
      res,
      doubleGroupData,
      '获取双组数据成功',
      doubleGroupData.length
    );
  }
}
