FROM node:alpine

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm ci --silent

RUN npm install react-scripts@3.4.1 -g --silent

RUN rm -rf client/node_modules/bin

COPY . .

RUN npm install

RUN npm run build





