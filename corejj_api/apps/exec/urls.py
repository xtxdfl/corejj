# Copyright: (c) OpenSpug Organization. https://github.com/opencorejj/corejj
# Copyright: (c) <corejj.dev@gmail.com>
# Released under the AGPL-3.0 License.
from django.conf.urls import url

from apps.exec.views import *
from apps.exec.transfer import TransferView

urlpatterns = [
    url(r'template/$', TemplateView.as_view()),
    url(r'do/$', TaskView.as_view()),
    url(r'transfer/$', TransferView.as_view()),
]
