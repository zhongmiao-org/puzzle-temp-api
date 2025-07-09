/**
 * 数据源选择控制器
 * 处理数据源选择相关的API请求
 */

import { Controller, Get, Res } from 'routing-controllers';
import { Response } from 'express';
import { DATA_SOURCE_OPTIONS } from '../data/data-source';
import { sendSuccess } from '../utils/responseUtils';

@Controller('/data-source')
export class DataSourceController {
  /**
   * 获取所有可选准备数据的接口集合
   * @param res 响应对象
   */
  @Get('/')
  getDataSourceOptions(@Res() res: Response): Response {
    return sendSuccess(
      res,
      DATA_SOURCE_OPTIONS,
      '获取数据源选择选项成功'
    );
  }
}
