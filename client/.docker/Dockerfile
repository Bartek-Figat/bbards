FROM node:16.13.0

WORKDIR /app


COPY package*.json ./

# Install the node packages before copying the files
RUN npm install

# install react-scripts if needed
RUN npm install react-scripts@3.4.1 -g --silent

COPY . .



# RUN apk update && apk upgrade && \
#     apk add --no-cache bash git openssh

RUN npm run build

EXPOSE 3000





