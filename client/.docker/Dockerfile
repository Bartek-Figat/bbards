FROM node:16.13.2-alpine as builder

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN echo "Print files from /app"

RUN ls -l /app

RUN echo "==========================="

COPY package*.json ./

COPY src ./src

COPY public ./public

RUN echo "Print files from ./"

RUN ls -l ./

RUN echo "==========================="

RUN npm install -g react-scripts
RUN npm install

COPY . ./

RUN echo "Print files from ./"

RUN ls -l ./

RUN echo "==========================="


CMD ["npm", "run" , "build"]






