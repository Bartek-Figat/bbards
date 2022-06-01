FROM node:alpine

WORKDIR /app

COPY . .

RUN rm -rf client

RUN npm install

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "dist:dev"]
