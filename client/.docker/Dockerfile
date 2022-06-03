FROM node:16.13.2-alpine as builder

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
COPY src ./src
COPY public ./public


RUN yarn install

COPY . .

RUN yarn build

FROM nginx

COPY --from=builder /app/build /usr/share/nginx/html/

WORKDIR /usr/share/nginx/html

RUN apk add --no-cache bash

RUN ls -l /usr/share/nginx/html

EXPOSE 80

CMD ["/bin/bash", "-c", "nginx -g 'daemon off;'"]







