FROM node:16.13.2-alpine as builder

WORKDIR /app

COPY . .

RUN yarn install 

RUN yarn build

FROM nginx

COPY --from=builder /app/build /usr/share/nginx/html/

WORKDIR /usr/share/nginx/html

RUN ls -l /usr/share/nginx/html








