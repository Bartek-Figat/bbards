FROM node:alpine

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install -g npm@latest

RUN npm install --silent

CMD /app/client

RUN npm run build





