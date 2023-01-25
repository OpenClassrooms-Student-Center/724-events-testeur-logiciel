FROM node:19

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

# RUN node ./data/events.seed.js

CMD npm run seed && npm start