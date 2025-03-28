#!/bin/bash
# Copyright: (c) OpenSpug Organization. https://github.com/opencorejj/corejj
# Copyright: (c) <corejj.dev@gmail.com>
# Released under the AGPL-3.0 License.
# start api service

cd $(dirname $(dirname $0))
if [ -f ./venv/bin/activate ]; then
  source ./venv/bin/activate
fi
exec gunicorn -b 127.0.0.1:9001 -w 2 --threads 8 --access-logfile - corejj.wsgi
