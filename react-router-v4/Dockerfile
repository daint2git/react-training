FROM node:8-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN yarn

CMD [ "yarn", "dev" ]