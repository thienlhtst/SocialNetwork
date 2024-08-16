FROM node:18.0.0-alpine3.15
WORKDIR /project
COPY package.json ./
RUN pnpm install
COPY . .
RUN pnpm run build

EXPOSE 80

CMD ["pnpm", "start"]
