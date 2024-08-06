# DOCKER HELP

### Show all docker images

- docker images

### List running container

- docker ps

### Stop running container

- docker stop <container_id>
- docker stop 3c908fdc52a8

### Build

- docker build . -t <tag> --build-arg <args>
- docker build . -t geekymon2/cm-ui --build-arg ARTIFACT_NAME=cm-ui --build-arg IMAGE_VERSION=0.0.1

### Run container

- docker run geekymon2/cm-ui
- docker run -e ARTIFACT_NAME=cm-ui -e NG_APP_ENVIRONMENT=ci geekymon2/cm-ui
