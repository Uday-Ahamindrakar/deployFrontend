# Stage 1: Build Angular app
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build -- --project user-form-app --configuration production

# Stage 2: Serve with Nginx
FROM nginx:alpine

COPY --from=build /app/dist/user-form-app/browser/ /usr/share/nginx/html

EXPOSE 80

# Correct JSON array CMD
CMD nginx -g "daemon off;"

