#!/bin/sh
cat <<EOF > /usr/share/nginx/html/assets/config.json
{
  "baseUrl": "$UI_URL:$UI_PORT/api",
  "logLevel": "debug",
  "production": "$ENVIRONMENT"
}
EOF
