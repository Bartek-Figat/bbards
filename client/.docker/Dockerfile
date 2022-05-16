FROM node:alpine

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm ci --silent

RUN npm install react-scripts@3.4.1 -g --silent

COPY . .

RUN npm install

RUN npm run build





