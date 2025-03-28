# Copyright: (c) OpenSpug Organization. https://github.com/opencorejj/corejj
# Copyright: (c) <corejj.dev@gmail.com>
# Released under the AGPL-3.0 License.
from django.urls import path

from .views import *

urlpatterns = [
    path('', AppView.as_view()),
    path('kit/key/', kit_key),
    path('deploy/', DeployView.as_view()),
    path('deploy/<int:d_id>/versions/', get_versions),
]
