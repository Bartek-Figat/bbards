FROM node:16.13.2-alpine as builder

WORKDIR /app

COPY . .

RUN yarn install --legacy-peer-deps --production

RUN yarn build

FROM nginx
COPY --from=builder /app/build/* /usr/share/nginx/html/








