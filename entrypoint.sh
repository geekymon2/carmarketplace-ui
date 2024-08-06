source version.properties
echo "This is the entrypoint script executing nodejs for: $ARTIFACT_NAME"
echo "Image version: $IMAGE_VERSION"
npm start --host 0.0.0.0 -c "$NG_APP_ENVIRONMENT"