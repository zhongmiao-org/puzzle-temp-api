/**
 * 用户控制器
 * 处理用户相关的API请求
 */

import { Controller, Get, Param, Req, Res } from 'routing-controllers';
import { Request, Response } from 'express';
import { users, User } from '../data/users';
import { sendSuccess, sendError, asyncHandler } from '../utils/responseUtils';
import { ErrorCode } from '../utils/errorCodes';

@Controller('/users')
export class UserController {
  /**
   * 获取所有用户
   * @param req 请求对象
   * @param res 响应对象
   */
  @Get('/')
  getUsers(@Req() req: Request, @Res() res: Response): Response {
    // 返回所有用户数据
    return sendSuccess(
      res,
      users,
      '获取用户列表成功',
      users.length
    );
  }

  /**
   * 根据ID获取单个用户
   * @param id 用户ID
   * @param res 响应对象
   */
  @Get('/:id')
  getUserById(@Param('id') id: number, @Res() res: Response): Response {
    // 查找指定ID的用户
    const user = users.find((user: User) => user.id === id);

    // 如果用户不存在，返回404错误
    if (!user) {
      return sendError(
        res,
        ErrorCode.USER_NOT_FOUND,
        `未找到ID为${id}的用户`
      );
    }

    // 返回找到的用户数据
    return sendSuccess(
      res,
      user,
      '获取用户成功'
    );
  }
}
