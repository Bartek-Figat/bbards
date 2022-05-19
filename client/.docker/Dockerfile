FROM node:16.13.2-alpine as builder

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN echo "Print files from /app"

RUN ls -l /app

RUN echo "==========================="

COPY package.json ./

COPY package-lock.json ./

RUN echo "Print files from ./"

RUN ls -l ./

RUN echo "==========================="

RUN npm ci --silent --network-timeout 180000

RUN npm install react-scripts@3.4.1 -g --silent 

COPY . ./

RUN echo "Print files from ./"

RUN ls -l ./

RUN echo "==========================="

RUN npm run build







