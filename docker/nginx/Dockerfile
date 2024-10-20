FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf.template

CMD ["/bin/sh", "-c", "envsubst < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf && nginx -g 'daemon off;'"]