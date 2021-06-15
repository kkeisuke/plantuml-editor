FROM node:12.18.3 AS builder

WORKDIR /root
COPY . .
RUN rm -rf .git

ENV VUE_APP_SERVER=https://plantuml-server.kkeisuke.app/
ENV VUE_APP_CDN=https://plantuml-server.kkeisuke.app/

RUN npm install && \
    npm run flow-typed && \
    npm run build

FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY --from=builder /root/dist/ .
