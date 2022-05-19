FROM node:16.13.2-alpine

WORKDIR /app


ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

COPY package-lock.json ./

RUN npm ci --silent

RUN npm install react-scripts@3.4.1 -g --silent

COPY ./client ./

RUN npm run build





