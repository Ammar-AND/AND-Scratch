FROM node:9.5

ENV FE_PORT = 3000
ENV FILE_DIR = "./frontEnd"

WORKDIR /app

COPY package.json .
COPY server.js ./
COPY app ./app
COPY frontEnd ./frontEnd



RUN npm install --production

EXPOSE $FE_PORT


CMD npm start