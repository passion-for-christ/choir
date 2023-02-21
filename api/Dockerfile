FROM node:14.18.2

WORKDIR /pfc-api-seattle

EXPOSE 80

ENV NODE_ENV production

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY . .

CMD [ "npm", "start" ]