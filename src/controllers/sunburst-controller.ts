/**
 * 旭日图数据控制器
 * 处理旭日图数据相关的API请求
 */

import { Controller, Get, Res } from 'routing-controllers';
import { Response } from 'express';
import { sunburstData } from '../data/sunburst-data';
import { sendSuccess } from '../utils/responseUtils';

@Controller('/sunburst')
export class SunburstController {
  /**
   * 获取旭日图数据
   * @param res 响应对象
   */
  @Get('/')
  getSunburstData(@Res() res: Response): Response {
    return sendSuccess(
      res,
      sunburstData,
      '获取旭日图数据成功',
      sunburstData.length,
      'tree'
    );
  }
}
