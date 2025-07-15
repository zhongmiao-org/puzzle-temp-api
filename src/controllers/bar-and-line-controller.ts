/**
 * 柱状图和折线图数据控制器
 * 处理柱状图和折线图数据相关的API请求
 */

import { Controller, Get, Res } from 'routing-controllers';
import { Response } from 'express';
import {
  barAndLineData,
  barAndLineData2,
  barAndLineData3,
  barAndLineData4,
  barAndLineData5
} from '../data/bar-and-line-data';
import { sendSuccess } from '../utils/responseUtils';

@Controller('/bar-and-line')
export class BarAndLineController {
  /**
   * 获取柱状图和折线图数据 - 苹果公司
   * @param res 响应对象
   */
  @Get('/')
  getBarAndLineData(@Res() res: Response): Response {
    return sendSuccess(
      res,
      barAndLineData,
      '获取苹果公司柱状图和折线图数据成功',
      barAndLineData.length
    );
  }

  /**
   * 获取柱状图和折线图数据2 - 三星公司
   * @param res 响应对象
   */
  @Get('/samsung')
  getBarAndLineData2(@Res() res: Response): Response {
    return sendSuccess(
      res,
      barAndLineData2,
      '获取三星公司柱状图和折线图数据成功',
      barAndLineData2.length
    );
  }

  /**
   * 获取柱状图和折线图数据3 - 华为公司
   * @param res 响应对象
   */
  @Get('/huawei')
  getBarAndLineData3(@Res() res: Response): Response {
    return sendSuccess(
      res,
      barAndLineData3,
      '获取华为公司柱状图和折线图数据成功',
      barAndLineData3.length
    );
  }

  /**
   * 获取柱状图和折线图数据4 - 小米公司
   * @param res 响应对象
   */
  @Get('/xiaomi')
  getBarAndLineData4(@Res() res: Response): Response {
    return sendSuccess(
      res,
      barAndLineData4,
      '获取小米公司柱状图和折线图数据成功',
      barAndLineData4.length
    );
  }

  /**
   * 获取柱状图和折线图数据5 - 谷歌公司
   * @param res 响应对象
   */
  @Get('/google')
  getBarAndLineData5(@Res() res: Response): Response {
    return sendSuccess(
      res,
      barAndLineData5,
      '获取谷歌公司柱状图和折线图数据成功',
      barAndLineData5.length
    );
  }
}
