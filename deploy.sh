#!/bin/bash

# 部署脚本 - 方案一：服务器构建
# 使用方法: ./deploy.sh root@zhongmiaoorg.cn

set -e  # 遇到错误立即退出

# 检查参数
if [ $# -eq 0 ]; then
    echo "错误: 请提供服务器地址"
    echo "使用方法: $0 root@zhongmiaoorg.cn"
    exit 1
fi

SERVER=$1
PROJECT_NAME="puzzle-temp-api"
REMOTE_PATH="~/puzzle"

echo "🚀 开始部署到服务器: $SERVER"
echo "📂 远程路径: $REMOTE_PATH"

# 颜色定义
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 打印状态函数
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# 1. 创建远程目录
print_status "创建远程目录..."
ssh $SERVER "mkdir -p $REMOTE_PATH"

# 2. 同步项目文件（排除不必要的文件）
print_status "同步项目文件..."
rsync -avz --progress \
    --exclude='node_modules' \
    --exclude='dist' \
    --exclude='.git' \
    --exclude='*.log' \
    --exclude='.env' \
    --exclude='coverage' \
    --exclude='.nyc_output' \
    ./ $SERVER:$REMOTE_PATH/

# 3. 检查服务器 Docker 环境
print_status "检查服务器 Docker 环境..."
ssh $SERVER "command -v docker >/dev/null 2>&1 || { echo '❌ Docker 未安装'; exit 1; }"
ssh $SERVER "docker --version"

# 4. 停止现有容器（如果存在）
print_warning "停止现有容器..."
ssh $SERVER "cd $REMOTE_PATH && docker compose down || true"

# 5. 构建并启动新容器
print_status "构建并启动容器..."
ssh $SERVER "cd $REMOTE_PATH && docker compose up -d --build"

# 6. 等待服务启动
print_status "等待服务启动..."
sleep 10

# 7. 健康检查
print_status "执行健康检查..."
if ssh $SERVER "curl -f http://localhost:3000/health >/dev/null 2>&1"; then
    print_status "✨ 部署成功！服务正常运行"
    echo ""
    echo "🔗 访问地址: http://$(echo $SERVER | cut -d'@' -f2):3000"
    echo "📊 健康检查: http://$(echo $SERVER | cut -d'@' -f2):3000/health"
    echo "📋 查看日志: ssh $SERVER 'cd $REMOTE_PATH && docker compose logs -f'"
else
    print_error "健康检查失败，请检查服务状态"
    echo "🔍 查看日志: ssh $SERVER 'cd $REMOTE_PATH && docker compose logs'"
    exit 1
fi

# 8. 显示容器状态
print_status "容器状态:"
ssh $SERVER "cd $REMOTE_PATH && docker compose ps"

echo ""
echo "🎉 部署完成！"
echo "📁 项目已部署到服务器的 ~/puzzle 目录"
