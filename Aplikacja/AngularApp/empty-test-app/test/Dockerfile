FROM node:20-alpine as build-stage

WORKDIR /app

COPY . .

RUN npm install --force
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build-stage /app/dist/test/browser /usr/share/nginx/html


