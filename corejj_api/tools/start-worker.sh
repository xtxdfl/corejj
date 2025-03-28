#!/bin/bash
# Copyright: (c) OpenSpug Organization. https://github.com/opencorejj/corejj
# Copyright: (c) <corejj.dev@gmail.com>
# Released under the AGPL-3.0 License.
# start worker service

cd $(dirname $(dirname $0))
if [ -f ./venv/bin/activate ]; then
  source ./venv/bin/activate
fi

if command -v python3 &> /dev/null; then
  PYTHON=python3
else
  PYTHON=python
fi

exec $PYTHON manage.py runworker
