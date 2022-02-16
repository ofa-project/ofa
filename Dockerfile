FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json tsconfig.json ./

RUN \
  npm install -g pnpm \
  pnpm install && \
  pnpm build

COPY . .

EXPOSE 3000

CMD [ "pnpm", "start" ]
