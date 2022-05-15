FROM node:lts-alpine as stage

WORKDIR /app

COPY . .

RUN npm install -g npm@latest

RUN rm -rf node_modules

RUN npm install --silent

ENV REACT_APP_NAME=bbards

RUN npm run build




