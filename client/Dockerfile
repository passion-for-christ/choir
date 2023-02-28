FROM node:14.18.2

WORKDIR /pfc-choir-client

ENV NODE_ENV production

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY . .

RUN npm run-script build

EXPOSE 8080

CMD [ "npm", "run", "start"]
