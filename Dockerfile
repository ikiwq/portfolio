# Base image
FROM node:20-alpine AS base

RUN npm install -g pnpm

WORKDIR /app
    
# Dependencies stage
FROM base AS deps
    
COPY package.json pnpm-lock.yaml ./
    
RUN pnpm install --frozen-lockfile
    
# Build stage
FROM base AS build
    
COPY --from=deps /app/node_modules ./node_modules
COPY . .
    
RUN pnpm build
    
# Production stage
FROM base AS runner
    
ENV NODE_ENV=production
    
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json
COPY --from=deps /app/node_modules ./node_modules
    
EXPOSE 3000
    
CMD ["node", ".next/standalone/server.js"]