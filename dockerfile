FROM node:9.5

WORKDIR /app

COPY package.json .
COPY server.js ./
COPY app ./app
COPY frontEnd ./frontEnd



RUN npm install --production

EXPOSE $FE_PORT


CMD npm start