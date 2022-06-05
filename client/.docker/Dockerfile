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

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build /usr/share/nginx/html/

# RUN rm /etc/nginx/conf.d/default.conf



RUN ls -l /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]








