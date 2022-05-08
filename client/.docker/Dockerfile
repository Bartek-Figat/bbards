FROM node:lts-alpine as stage

WORKDIR /app

COPY . .

RUN npm install --silent

RUN npm run build

EXPOSE 3000



