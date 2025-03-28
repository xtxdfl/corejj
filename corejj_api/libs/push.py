# Copyright: (c) OpenSpug Organization. https://github.com/opencorejj/corejj
# Copyright: (c) <corejj.dev@gmail.com>
# Released under the AGPL-3.0 License.
from apps.setting.utils import AppSetting
import requests

push_server = 'https://push.corejj.cc'


def get_balance(token):
    res = requests.get(f'{push_server}/corejj/balance/', json={'token': token})
    if res.status_code != 200:
        raise Exception(f'status code: {res.status_code}')
    res = res.json()
    if res.get('error'):
        raise Exception(res['error'])
    return res['data']


def get_contacts(token):
    try:
        res = requests.post(f'{push_server}/corejj/contacts/', json={'token': token})
        res = res.json()
        if res['data']:
            return res['data']
    except Exception:
        return []


def send_login_code(token, user, code):
    url = f'{push_server}/corejj/message/'
    data = {
        'token': token,
        'targets': [user],
        'source': 'mfa',
        'dataset': {
            'code': code
        }
    }
    res = requests.post(url, json=data, timeout=15)
    if res.status_code != 200:
        raise Exception(f'status code: {res.status_code}')
    res = res.json()
    if res.get('error'):
        raise Exception(res['error'])
