#!/bin/bash
#
set -e

if [ -e /root/.bashrc ]; then
    source /root/.bashrc
fi

if [ ! -d /data/corejj/corejj_api ]; then
    git clone -b $SPUG_DOCKER_VERSION https://gitee.com/opencorejj/corejj.git /data/corejj
    curl -o web.tar.gz https://cdn.corejj.cc/corejj/web_${SPUG_DOCKER_VERSION}.tar.gz
    tar xf web.tar.gz -C /data/corejj/corejj_web/
    rm -f web.tar.gz
    SECRET_KEY=$(< /dev/urandom tr -dc '!@#%^.a-zA-Z0-9' | head -c50)
    cat > /data/corejj/corejj_api/corejj/overrides.py << EOF
import os


DEBUG = False
ALLOWED_HOSTS = ['127.0.0.1']
SECRET_KEY = '${SECRET_KEY}'

DATABASES = {
    'default': {
        'ATOMIC_REQUESTS': True,
        'ENGINE': 'django.db.backends.mysql',
        'NAME': os.environ.get('MYSQL_DATABASE'),
        'USER': os.environ.get('MYSQL_USER'),
        'PASSWORD': os.environ.get('MYSQL_PASSWORD'),
        'HOST': os.environ.get('MYSQL_HOST'),
        'PORT': os.environ.get('MYSQL_PORT'),
        'OPTIONS': {
            'charset': 'utf8mb4',
            'sql_mode': 'STRICT_TRANS_TABLES',
        }
    }
}
EOF
fi

exec supervisord -c /etc/supervisord.conf
