/**
 * 弦图数据控制器
 * 处理弦图数据相关的API请求
 */

import { Controller, Get, Res } from 'routing-controllers';
import { Response } from 'express';
import { chordData } from '../data/chord-data';
import { sendSuccess } from '../utils/responseUtils';

@Controller('/chord')
export class ChordController {
  /**
   * 获取弦图数据
   * @param res 响应对象
   */
  @Get('/')
  getChordData(@Res() res: Response): Response {
    return sendSuccess(
      res,
      chordData,
      '获取弦图数据成功',
      chordData.length
    );
  }
}
