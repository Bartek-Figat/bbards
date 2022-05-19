FROM node:16.13.2-alpine as builder

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN echo "Print files from /app"

RUN ls -l /app

RUN echo "==========================="

COPY package*.json ./

RUN echo "Print files from ./"

RUN ls -l ./

RUN echo "==========================="

RUN npm install

COPY . ./

RUN echo "Print files from ./"

RUN ls -l ./

RUN echo "==========================="

RUN /bin/bash -c npm run build 







