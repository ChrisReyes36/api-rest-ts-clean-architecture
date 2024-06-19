FROM node:20 as builder

RUN mkdir -p /usr/src/app

RUN chmod -R 777 /usr/src/app

RUN chmod ugo+rwx /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g typescript

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build && cp -r .env.example .env

CMD ["npm", "start"]
