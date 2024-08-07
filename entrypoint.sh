#!/bin/sh

source version.properties
echo "This is the entrypoint script executing nodejs for: $ARTIFACT_NAME"
echo "Image version: $IMAGE_VERSION"
echo "Ng Environment: $NG_APP_ENVIRONMENT"
ng serve --host 0.0.0.0 --no-watch --configuration=$NG_APP_ENVIRONMENT