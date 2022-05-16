FROM node:alpine

# set the working direction
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

COPY package-lock.json ./

RUN npm install -g npm@8.10.0

RUN npm install

# add app
COPY . ./

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh


RUN npm run build





