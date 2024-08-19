#!/bin/sh
cat <<EOF > /usr/share/nginx/html/assets/config.json
{
  "baseUrl": "http://$API_HOST:$API_PORT/api",
  "logLevel": "debug",
  "production": "$ENVIRONMENT"
}
EOF
