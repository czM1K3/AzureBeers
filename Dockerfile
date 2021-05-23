FROM node:buster
RUN apt update
RUN apt install build-essential -y
WORKDIR /app
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

ENV NODE_ENV production
RUN addgroup --gid 1001 nodejs
RUN adduser --uid 1002 nextjs

USER nextjs
EXPOSE 3000

CMD ["pnpm", "start"]