FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

COPY tsconfig*.json ./

RUN rm -rf client

RUN npm install

COPY . .

EXPOSE 8080

RUN npm run build

CMD ["npm", "run", "dist:dev"]
