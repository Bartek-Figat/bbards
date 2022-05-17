FROM node:18-buster

WORKDIR /app

COPY . .

COPY package*.json ./

RUN npm install --save

RUN npm cache clean --force


# RUN apk update && apk upgrade && \
#     apk add --no-cache bash git openssh

CMD ["/bin/sh", "-c", "npm", "run", "build"]





