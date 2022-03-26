FROM node:16-alpine

RUN mkdir -p /usr/src
WORKDIR /usr/src

COPY . /usr/src
run npm install
EXPOSE 5000
CMD npm run start
