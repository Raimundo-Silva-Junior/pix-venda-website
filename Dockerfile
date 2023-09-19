FROM node:19.9.0

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .


CMD ["PORT=8000", "npm", "start"]