FROM node:21

WORKDIR /project

COPY package.json pnpm-lock.yaml* ./

RUN npm install -g pnpm@latest

RUN pnpm install

COPY . .

EXPOSE 8080

CMD ["pnpm", "run", "dev"]
