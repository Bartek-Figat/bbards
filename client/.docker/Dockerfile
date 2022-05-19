FROM node:16.13.2-alpine as builder

WORKDIR /app

RUN echo "Print files from /app"

RUN ls -l /app

RUN echo "==========================="

COPY package*.json ./

COPY yarn.lock ./

COPY src ./src

COPY public ./public

RUN echo "Print files from ./"

RUN ls -l ./

RUN echo "==========================="

RUN yarn install --production

COPY . ./

RUN echo "Print files from ./"

RUN ls -l ./

RUN echo "==========================="

RUN yarn build






