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

# RUN rm /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html


RUN ls -l /usr/share/nginx/html

EXPOSE 80










