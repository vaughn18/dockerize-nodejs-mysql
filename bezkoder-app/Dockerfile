FROM node:14

WORKDIR /bezkoder-app
COPY package.json .
RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "start-dev"]
