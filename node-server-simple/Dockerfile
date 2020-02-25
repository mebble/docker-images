FROM node:12-alpine

RUN mkdir -p /root/app
WORKDIR /root/app

COPY src ./src
COPY package.json package-lock.json ./

RUN npm install

ENV PORT 8000

CMD ["npm", "start"]
