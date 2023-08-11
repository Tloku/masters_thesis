FROM node:20-alpine


ARG directory=/usr/src/app

RUN mkdir -p ${directory}

COPY . ${directory}

WORKDIR ${directory}

RUN npm install
RUN npm run build

EXPOSE 4200

ENTRYPOINT [ "npm", "start" ]