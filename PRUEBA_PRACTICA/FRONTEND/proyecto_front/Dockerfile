FROM node:18.13.0 as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa de producción
FROM nginx:alpine

COPY --from=builder /app/dist/streaming /usr/share/nginx/html


EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]