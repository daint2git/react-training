# ------------------------------------------------------
# Stage 1 - the build process
# ------------------------------------------------------
FROM node:10-alpine as builder

# copy the package.json to install dependencies
COPY package.json yarn.lock ./

# Install the dependencies and make the folder
RUN yarn install && mkdir /app && mv ./node_modules ./app

WORKDIR /app

COPY . .

RUN yarn build

# ------------------------------------------------------
# Stage 2 - the production environment
# ------------------------------------------------------
FROM nginx:1.16.0-alpine

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stage 1
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
