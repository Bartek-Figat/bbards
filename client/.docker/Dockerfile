FROM node:18-buster

WORKDIR /app

COPY . .

COPY package*.json ./

RUN npm install --save


# RUN apk update && apk upgrade && \
#     apk add --no-cache bash git openssh

RUN npm run build





