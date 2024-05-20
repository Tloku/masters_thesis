FROM node:20-alpine as build-stage

WORKDIR /app

COPY . .

RUN npm install --force
RUN npm run build --prod

FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist/oto-auto /usr/share/nginx/html


