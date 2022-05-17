FROM node:18-buster

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# RUN apk update && apk upgrade && \
#     apk add --no-cache bash git openssh

RUN npm run build





