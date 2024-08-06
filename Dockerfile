FROM node:alpine
LABEL maintainer="geekymon2@gmail.com"
ARG ARTIFACT_NAME
ARG IMAGE_VERSION
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install -g @angular/cli
RUN npm install
RUN printf "IMAGE_VERSION=${IMAGE_VERSION}" > version.properties 
COPY entrypoint.sh ./entrypoint.sh
RUN chmod +x ./entrypoint.sh
ENTRYPOINT ["sh", "./entrypoint.sh"]