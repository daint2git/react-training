FROM node:8-alpine

RUN npm install -g npx
RUN npm install -g saku
RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY package.json ./
RUN yarn

COPY . .

CMD ["saku", "frontend"]