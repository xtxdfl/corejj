# Copyright: (c) OpenSpug Organization. https://github.com/opencorejj/corejj
# Copyright: (c) <corejj.dev@gmail.com>
# Released under the AGPL-3.0 License.
from django.conf.urls import url

from apps.account.views import *
from apps.account.history import *

urlpatterns = [
    url(r'^login/$', login),
    url(r'^logout/$', logout),
    url(r'^user/$', UserView.as_view()),
    url(r'^role/$', RoleView.as_view()),
    url(r'^self/$', SelfView.as_view()),
    url(r'^login/history/$', HistoryView.as_view())
]
