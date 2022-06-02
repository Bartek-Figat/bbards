FROM node:16.13.2-alpine as builder

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --production

COPY . .

RUN yarn build

FROM nginx AS production

COPY --from=builder /app/build /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]








