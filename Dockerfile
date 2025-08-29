# Production Dockerfile for puzzle-temp-api
# 1) Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Install deps separately for better caching
COPY package*.json ./
RUN npm ci --only=production && cp -R node_modules prod_node_modules \
 && npm ci

# Copy source
COPY tsconfig.json ./
COPY src ./src

# Build TypeScript
RUN npm run build

# 2) Runtime stage
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy production node_modules and built files
COPY --from=builder /app/prod_node_modules ./node_modules
COPY package*.json ./
COPY --from=builder /app/dist ./dist

# Non-root user for security
RUN addgroup -S nodejs && adduser -S nodeuser -G nodejs
USER nodeuser

EXPOSE 3000

CMD ["node", "dist/index.js"]
