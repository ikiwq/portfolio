# Base image
FROM node:18-alpine AS base

RUN apk add --no-cache g++ make py3-pip libc6-compat

WORKDIR /app

COPY package*.json ./

# Builder stage
FROM base AS builder

ARG PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$PUBLIC_API_URL
ARG PUBLIC_BASE_URL
ENV NEXT_PUBLIC_BASE_URL=$PUBLIC_BASE_URL

COPY . .

RUN npm install
RUN npm run build

# Production stage
FROM node:18-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --only=production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]