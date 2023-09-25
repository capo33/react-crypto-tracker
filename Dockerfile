FROM node:16.13.0-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn run build

CMD ["yarn", "start"]
