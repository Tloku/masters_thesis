FROM node:20-alpine as build-stage

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build-stage /app/dist/oto-auto /usr/share/nginx/html


