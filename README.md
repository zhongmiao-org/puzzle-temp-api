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

## 使用 Docker 部署

本项目已提供 Dockerfile 和 docker-compose.yml，便于本地和服务器部署。

- 构建镜像（本地或服务器任意一端）：
```bash
docker build -t puzzle-temp-api:latest .
```

- 直接运行容器：
```bash
docker run -d --name puzzle-temp-api -p 3000:3000 -e NODE_ENV=production -e PORT=3000 puzzle-temp-api:latest
```

- 使用 docker-compose 运行（本地开发或服务器）：
```bash
# 首次部署/需要重新构建时
docker compose up -d --build

# 如果镜像已经存在（不想在服务器构建），使用 --no-build
docker compose up -d --no-build
```

- 健康检查：
```bash
curl http://localhost:3000/health
```

### 不使用 Docker Hub 的部署方案（推荐）

你可以完全不依赖 Docker Hub，有两种方式：

1) 在服务器上构建并运行（最简单）
```bash
# 将仓库代码拷贝到服务器（含 Dockerfile 与 docker-compose.yml）
# 然后在服务器上执行：
docker compose up -d --build
```

2) 在本地打包镜像并拷贝到服务器（服务器无需构建）
```bash
# 在本地构建镜像
docker build -t puzzle-temp-api:latest .

# 导出镜像为 tar 包
docker save puzzle-temp-api:latest -o puzzle-temp-api.tar

# 传到服务器（示例用 scp）
scp puzzle-temp-api.tar user@server:/opt/puzzle-temp-api/

# 到服务器加载镜像
ssh user@server "cd /opt/puzzle-temp-api && docker load -i puzzle-temp-api.tar"

# 在服务器上启动（不重新构建）
ssh user@server "cd /opt/puzzle-temp-api && docker compose up -d --no-build"
```

提示：当前 docker-compose.yml 同时包含 image 与 build 字段。
- 如果服务器已加载本地镜像 puzzle-temp-api:latest，则 `--no-build` 会直接使用该镜像。
- 如果需要重建，使用 `--build` 即可在服务器上构建。
- 无需推送或拉取 Docker Hub。

### 服务器部署步骤示例

1. 将代码（以及可选的已打包镜像 tar）拷贝到服务器同一目录，例如 `/opt/puzzle-temp-api`。
2. 确保服务器已安装 Docker 与 Docker Compose（Docker 24+ 自带 compose）。
3. 选择其一：
   - 在服务器上构建：`docker compose up -d --build`
   - 使用已加载的镜像：`docker compose up -d --no-build`
4. 更新部署：
```bash
# 方式 A：在服务器重新构建（不依赖 Hub）
docker compose build --no-cache
docker compose up -d

# 方式 B：本地重建并通过 tar 分发
# （同上：build -> save -> scp -> load -> up --no-build）
```
5. 查看日志：
```bash
docker compose logs -f
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
