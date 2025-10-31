FROM node:18-alpine

# 设置工作目录
WORKDIR /app

COPY package*.json ./

RUN npm install


COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
