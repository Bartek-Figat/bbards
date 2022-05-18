FROM node:16.13.0

WORKDIR /app


COPY package*.json ./

# Install the node packages before copying the files
RUN npm install


COPY . .

# RUN apk update && apk upgrade && \
#     apk add --no-cache bash git openssh


CMD ["npm", "run", "build"]





