# Node.js API 服务

这是一个使用 TypeScript 构建的 Node.js API 服务，提供静态数据访问。

## 功能特点

- 使用最新版本的 TypeScript
- 提供 RESTful API 接口
- 支持静态数据访问
- 包含用户和产品数据
- 完整的中文注释
- 统一的错误处理机制和错误码系统
- 基于装饰器的路由控制器

## 项目结构

```
puzzle-temp-api/
├── src/                  # 源代码目录
│   ├── controllers/      # 控制器
│   │   ├── userController.ts
│   │   └── productController.ts
│   ├── data/             # 静态数据
│   │   ├── users.ts
│   │   └── products.ts
│   ├── utils/            # 工具函数
│   │   ├── errorCodes.ts # 错误码定义
│   │   ├── responseUtils.ts # 响应工具
│   │   └── README.md     # 工具使用文档
│   ├── routes.ts         # 路由配置（已弃用，使用装饰器）
│   └── index.ts          # 主入口文件
├── dist/                 # 编译后的代码 (自动生成)
├── package.json          # 项目配置
├── tsconfig.json         # TypeScript 配置
└── README.md             # 项目说明
```

## 安装

```bash
# 安装依赖
npm install
```

## 开发

```bash
# 启动开发服务器（支持热重载）
npm run dev
```

## 构建和运行

```bash
# 构建项目
npm run build

# 运行生产版本
npm start
```

## API 接口

### 用户接口

- `GET /api/users` - 获取所有用户
- `GET /api/users/:id` - 根据ID获取单个用户

### 产品接口

- `GET /api/products` - 获取所有产品
- `GET /api/products/:id` - 根据ID获取单个产品

### 健康检查

- `GET /health` - 服务健康状态检查

## 响应格式

所有API响应都遵循以下JSON格式：

```json
{
  "success": true,
  "data": [...],
  "count": 5,
  "message": "操作成功"
}
```

错误响应：

```json
{
  "success": false,
  "error": "错误类型",
  "message": "错误详细信息",
  "code": 1000
}
```

## 错误码系统

项目实现了统一的错误码系统，错误码按照功能模块进行分类：

- 通用错误: 1000-1999
- 用户相关错误: 2000-2999
- 产品相关错误: 3000-3999
- 数据库相关错误: 4000-4999
- 外部服务相关错误: 5000-5999

详细的错误码定义请参考 `src/utils/errorCodes.ts` 文件。
