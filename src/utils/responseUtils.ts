/**
 * 响应工具
 * 提供统一的响应格式和错误处理
 */

import { Response } from 'express';
import { ErrorCode, ErrorMessages } from './errorCodes';

// 成功响应接口
export interface SuccessResponse<T> {
  success: true;
  data: T;
  message: string;
  count?: number;
  dataType?: 'array' | 'tree';
}

// 错误响应接口
export interface ErrorResponse {
  success: false;
  error: string;
  message: string;
  code: ErrorCode;
}

// API响应类型
export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;

/**
 * 创建成功响应
 * @param data 响应数据
 * @param message 成功消息
 * @param count 数据计数（可选）
 * @param dataType 数据类型（可选，'array'或'tree'）
 */
export function createSuccessResponse<T>(
  data: T,
  message: string,
  count?: number,
  dataType?: 'array' | 'tree'
): SuccessResponse<T> {
  const response: SuccessResponse<T> = {
    success: true,
    data,
    message
  };

  if (count !== undefined) {
    response.count = count;
  }

  if (dataType !== undefined) {
    response.dataType = dataType;
  }

  return response;
}

/**
 * 创建错误响应
 * @param code 错误码
 * @param message 自定义错误消息（可选，默认使用错误码对应的消息）
 */
export function createErrorResponse(
  code: ErrorCode,
  message?: string
): ErrorResponse {
  return {
    success: false,
    error: ErrorMessages[code],
    message: message || ErrorMessages[code],
    code
  };
}

/**
 * 发送成功响应
 * @param res Express响应对象
 * @param data 响应数据
 * @param message 成功消息
 * @param count 数据计数（可选）
 * @param dataType 数据类型（可选，'array'或'tree'）
 * @param status HTTP状态码（默认200）
 */
export function sendSuccess<T>(
  res: Response,
  data: T,
  message: string,
  count?: number,
  dataType?: 'array' | 'tree',
  status: number = 200
): Response {
  return res.status(status).json(createSuccessResponse(data, message, count, dataType));
}

/**
 * 发送错误响应
 * @param res Express响应对象
 * @param code 错误码
 * @param message 自定义错误消息（可选）
 * @param status HTTP状态码（可选，默认根据错误码确定）
 */
export function sendError(
  res: Response,
  code: ErrorCode,
  message?: string,
  status?: number
): Response {
  // 根据错误码确定适当的HTTP状态码
  if (!status) {
    status = getStatusCodeFromErrorCode(code);
  }

  return res.status(status).json(createErrorResponse(code, message));
}

/**
 * 根据错误码确定HTTP状态码
 * @param code 错误码
 */
function getStatusCodeFromErrorCode(code: ErrorCode): number {
  switch (code) {
    case ErrorCode.UNAUTHORIZED:
      return 401;
    case ErrorCode.FORBIDDEN:
      return 403;
    case ErrorCode.NOT_FOUND:
    case ErrorCode.USER_NOT_FOUND:
    case ErrorCode.PRODUCT_NOT_FOUND:
      return 404;
    case ErrorCode.METHOD_NOT_ALLOWED:
      return 405;
    case ErrorCode.TIMEOUT:
      return 408;
    case ErrorCode.CONFLICT:
    case ErrorCode.USER_ALREADY_EXISTS:
    case ErrorCode.PRODUCT_ALREADY_EXISTS:
      return 409;
    case ErrorCode.VALIDATION_ERROR:
    case ErrorCode.INVALID_CREDENTIALS:
    case ErrorCode.INVALID_PRODUCT_DATA:
      return 400;
    default:
      return 500;
  }
}

/**
 * 异步处理包装器
 * 用于包装异步控制器方法，统一处理错误
 * @param fn 异步控制器方法
 */
export function asyncHandler<T>(
  fn: (req: any, res: Response, ...args: any[]) => Promise<T>
) {
  return async (req: any, res: Response, ...args: any[]) => {
    try {
      return await fn(req, res, ...args);
    } catch (error) {
      console.error('Error in request handler:', error);
      return sendError(
        res,
        ErrorCode.UNKNOWN_ERROR,
        error instanceof Error ? error.message : '未知错误'
      );
    }
  };
}
