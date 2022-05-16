FROM node:lts-alpine as stage

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install -g npm@latest

RUN npm install --silent

RUN npm run build





