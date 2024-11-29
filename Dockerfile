FROM node:lts AS build
WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:lts AS production

WORKDIR /app

COPY package.json ./

RUN npm install --omit=dev

COPY --from=build /app/dist ./dist

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

CMD ["node", "dist/server/entry.mjs"]