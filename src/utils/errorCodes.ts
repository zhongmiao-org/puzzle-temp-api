/**
 * 错误码定义
 * 统一管理系统中的错误码和错误信息
 */

export enum ErrorCode {
  // 通用错误 (1000-1999)
  UNKNOWN_ERROR = 1000,
  VALIDATION_ERROR = 1001,
  UNAUTHORIZED = 1002,
  FORBIDDEN = 1003,
  NOT_FOUND = 1004,
  METHOD_NOT_ALLOWED = 1005,
  TIMEOUT = 1006,
  CONFLICT = 1007,

  // 用户相关错误 (2000-2999)
  USER_NOT_FOUND = 2000,
  USER_ALREADY_EXISTS = 2001,
  INVALID_CREDENTIALS = 2002,

  // 产品相关错误 (3000-3999)
  PRODUCT_NOT_FOUND = 3000,
  PRODUCT_ALREADY_EXISTS = 3001,
  INVALID_PRODUCT_DATA = 3002,

  // 数据库相关错误 (4000-4999)
  DATABASE_ERROR = 4000,
  QUERY_FAILED = 4001,

  // 外部服务相关错误 (5000-5999)
  EXTERNAL_SERVICE_ERROR = 5000,
  API_ERROR = 5001,
}

// 错误码对应的错误信息
export const ErrorMessages: Record<ErrorCode, string> = {
  // 通用错误
  [ErrorCode.UNKNOWN_ERROR]: '未知错误',
  [ErrorCode.VALIDATION_ERROR]: '数据验证错误',
  [ErrorCode.UNAUTHORIZED]: '未授权',
  [ErrorCode.FORBIDDEN]: '禁止访问',
  [ErrorCode.NOT_FOUND]: '资源未找到',
  [ErrorCode.METHOD_NOT_ALLOWED]: '方法不允许',
  [ErrorCode.TIMEOUT]: '请求超时',
  [ErrorCode.CONFLICT]: '资源冲突',

  // 用户相关错误
  [ErrorCode.USER_NOT_FOUND]: '用户未找到',
  [ErrorCode.USER_ALREADY_EXISTS]: '用户已存在',
  [ErrorCode.INVALID_CREDENTIALS]: '无效的凭证',

  // 产品相关错误
  [ErrorCode.PRODUCT_NOT_FOUND]: '产品未找到',
  [ErrorCode.PRODUCT_ALREADY_EXISTS]: '产品已存在',
  [ErrorCode.INVALID_PRODUCT_DATA]: '无效的产品数据',

  // 数据库相关错误
  [ErrorCode.DATABASE_ERROR]: '数据库错误',
  [ErrorCode.QUERY_FAILED]: '查询失败',

  // 外部服务相关错误
  [ErrorCode.EXTERNAL_SERVICE_ERROR]: '外部服务错误',
  [ErrorCode.API_ERROR]: 'API错误',
};
