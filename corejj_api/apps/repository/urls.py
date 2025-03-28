# Copyright: (c) OpenSpug Organization. https://github.com/opencorejj/corejj
# Copyright: (c) <corejj.dev@gmail.com>
# Released under the AGPL-3.0 License.
from django.urls import path

from .views import *

urlpatterns = [
    path('', RepositoryView.as_view()),
    path('<int:r_id>/', get_detail),
    path('request/', get_requests),
]
