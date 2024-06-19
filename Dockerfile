FROM node:20-alpine as deps
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

FROM node:20-alpine as builder
WORKDIR /usr/src/app

COPY --from=deps /usr/src/app/node_modules ./node_modules

COPY . .
RUN npm run build

FROM node:20-alpine as runner
WORKDIR /usr/src/app

COPY package*.json ./
COPY .env ./
RUN npm install --production

COPY --from=builder /usr/src/app/dist ./dist

CMD ["node", "dist/user/user.app.js"]
