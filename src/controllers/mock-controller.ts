import { Controller, Get, Param, Res } from 'routing-controllers';
import type { Response } from 'express';
import * as MockData from '../data/mock-data';
import { sendError, sendSuccess } from '../utils/responseUtils';
import { ErrorCode } from '../utils/errorCodes';

/**
 * 通用 Mock 数据控制器
 * 按照 src/data/mock-data 中的所有导出，提供统一的访问接口
 */
@Controller('/mock')
export class MockController {
  /**
   * 列出可用的 mock 数据键名
   */
  @Get('/')
  getAllKeys(@Res() res: Response) {
    const keys = Object.keys(MockData).sort();
    return sendSuccess(res, keys, '获取可用的 Mock 数据键名成功', keys.length, 'array');
  }

  /**
   * 按名称获取具体的 mock 数据
   */
  @Get('/:name')
  getByName(@Param('name') name: string, @Res() res: Response) {
    const key = name as keyof typeof MockData;
    const hasKey = Object.prototype.hasOwnProperty.call(MockData, key);

    if (!hasKey) {
      return sendError(res, ErrorCode.NOT_FOUND, `未找到名为 ${name} 的 Mock 数据`);
    }

    const data = (MockData as Record<string, unknown>)[key as string];

    // 根据数据结构设置 dataType
    const dataType: 'array' | 'tree' | undefined = Array.isArray(data)
      ? 'array'
      : undefined;

    const count = Array.isArray(data) ? data.length : undefined;

    return sendSuccess(res, data, `获取 Mock 数据 ${name} 成功`, count, dataType);
  }
}
