#!/bin/bash

# Vercel 部署脚本
# 使用方法: ./scripts/deploy.sh [环境]

set -e

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 默认环境
ENVIRONMENT=${1:-production}

echo -e "${GREEN}🚀 开始部署到 Vercel...${NC}"
echo -e "${YELLOW}环境: ${ENVIRONMENT}${NC}"

# 检查是否安装了 Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo -e "${RED}❌ Vercel CLI 未安装，正在安装...${NC}"
    npm install -g vercel
fi

# 检查是否已登录
if ! vercel whoami &> /dev/null; then
    echo -e "${YELLOW}⚠️  需要登录 Vercel...${NC}"
    vercel login
fi

# 构建项目
echo -e "${GREEN}📦 构建项目...${NC}"
pnpm build

# 部署到 Vercel
echo -e "${GREEN}🚀 部署到 Vercel...${NC}"
if [ "$ENVIRONMENT" = "production" ]; then
    vercel --prod
    echo -e "${GREEN}✅ 生产环境部署完成！${NC}"
    echo -e "${BLUE}🌐 生产环境URL: https://$(vercel ls --prod | grep -o 'https://[^[:space:]]*' | head -1)${NC}"
else
    vercel
    echo -e "${GREEN}✅ 预览环境部署完成！${NC}"
    echo -e "${BLUE}🌐 预览环境URL: https://$(vercel ls | grep -o 'https://[^[:space:]]*' | head -1)${NC}"
fi

echo -e "${YELLOW}💡 提示: 使用 'vercel ls' 查看所有部署${NC}"
echo -e "${YELLOW}💡 提示: 使用 'vercel domains' 查看和管理域名${NC}" 