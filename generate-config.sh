#!/bin/sh
cat <<EOF > /usr/share/nginx/html/assets/config.json
{
  "baseUrl": "http://$UI_HOST:$UI_PORT/api",
  "logLevel": "debug",
  "production": "$ENVIRONMENT"
}
EOF
