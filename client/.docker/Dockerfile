FROM node:16.13.2-alpine as builder

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn build

FROM nginx

COPY .docker/nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html/

EXPOSE 80











