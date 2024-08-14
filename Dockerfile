FROM node:alpine

WORKDIR /usr/app/src

COPY package.json package-lock.json ./

RUN npm install

COPY ./src ./src

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "dev" ]
