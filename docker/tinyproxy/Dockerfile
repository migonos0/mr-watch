FROM debian:bookworm-slim

RUN apt update && apt upgrade
RUN apt-get install -y gettext-base tinyproxy

COPY ./tinyproxy.conf /etc/tinyproxy/tinyproxy.conf.template
EXPOSE 8888

CMD ["/bin/sh", "-c", "envsubst < /etc/tinyproxy/tinyproxy.conf.template > /etc/tinyproxy/tinyproxy.conf && tinyproxy -d"] 