FROM node:20

WORKDIR /app

COPY . .

WORKDIR /app/mcp

RUN npm install

CMD ["node", "server.js"]
