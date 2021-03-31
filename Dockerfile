FROM node:lts

RUN npm i -g @angular/cli
RUN npm i -g prettier

WORKDIR /usr/src/app

COPY package.json* package-lock.json* ./

RUN npm install

COPY . .
