# Simple Nginx container to serve static files
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
