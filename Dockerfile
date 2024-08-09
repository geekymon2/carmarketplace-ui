FROM node:alpine as build
LABEL maintainer="geekymon2@gmail.com"
ARG ARTIFACT_NAME
ARG IMAGE_VERSION
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install -g @angular/cli
RUN npm install
RUN printf "IMAGE_VERSION=${IMAGE_VERSION}" > version.properties 
RUN ng build --configuration=$NG_APP_ENVIRONMENT
FROM nginx:latest
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/dist/carmarketplace-ui/browser /usr/share/nginx/html
EXPOSE 80