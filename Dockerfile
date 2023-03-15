FROM node:16-alpine


WORKDIR /app
ARG CACHEBUST=1 
COPY package*.json ./
COPY prisma ./prisma

RUN yarn --pure-lockfile
RUN yarn install
RUN npx prisma generate; exit 0


COPY . .
RUN yarn build



EXPOSE 4000

CMD [ "yarn","start" ]
