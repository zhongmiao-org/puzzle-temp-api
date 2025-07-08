# 错误处理与响应工具

## 概述

本目录包含用于统一处理API响应和错误的工具。这些工具旨在提供一致的响应格式，并集中管理错误处理逻辑，避免在控制器中使用大量的try-catch块。

## 文件结构

- `errorCodes.ts`: 定义所有错误码和对应的错误消息
- `responseUtils.ts`: 提供用于创建和发送标准化响应的工具函数

## 错误码系统

错误码按照功能模块进行分类：

- 通用错误: 1000-1999
- 用户相关错误: 2000-2999
- 产品相关错误: 3000-3999
- 数据库相关错误: 4000-4999
- 外部服务相关错误: 5000-5999

## 使用方法

### 发送成功响应

```typescript
import { sendSuccess } from '../utils/responseUtils';

// 在控制器方法中
return sendSuccess(
  res,
  data,           // 响应数据
  '操作成功',      // 成功消息
  data.length     // 可选：数据计数
);
```

### 发送错误响应

```typescript
import { sendError } from '../utils/responseUtils';
import { ErrorCode } from '../utils/errorCodes';

// 在控制器方法中
if (!user) {
  return sendError(
    res,
    ErrorCode.USER_NOT_FOUND,
    `未找到ID为${id}的用户`
  );
}
```

### 异步处理包装器

对于需要异步处理的控制器方法，可以使用`asyncHandler`包装器来统一处理错误：

```typescript
import { asyncHandler } from '../utils/responseUtils';

@Get('/:id')
@UseBefore(authMiddleware)
getUserById = asyncHandler(async (req: Request, res: Response) => {
  const user = await userService.findById(req.params.id);
  
  if (!user) {
    return sendError(res, ErrorCode.USER_NOT_FOUND);
  }
  
  return sendSuccess(res, user, '获取用户成功');
});
```

## 扩展错误码

如需添加新的错误码，请在`errorCodes.ts`文件中的`ErrorCode`枚举和`ErrorMessages`对象中同时添加。
