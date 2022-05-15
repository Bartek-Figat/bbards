FROM node:lts-alpine as stage

WORKDIR /app

COPY . .

RUN npm install --silent

RUN npm ci && npm run build

EXPOSE 3000



