FROM node:lts-alpine as stage

WORKDIR /app

COPY . .

RUN npm install -g npm@latest

RUN rm -rf node_modules

RUN -c npm install --silent

RUN npm run build




