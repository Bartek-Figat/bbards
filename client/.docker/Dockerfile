FROM node:16.13.2-alpine as builder

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN ls -l /app

COPY package.json ./

COPY package-lock.json ./

RUN npm ci --silent --network-timeout 180000

RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./

RUN npm run build

# production environment
FROM nginx:stable-alpine

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]    





