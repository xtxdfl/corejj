# Copyright: (c) OpenSpug Organization. https://github.com/opencorejj/corejj
# Copyright: (c) <corejj.dev@gmail.com>
# Released under the AGPL-3.0 License.
from django.urls import path

from .views import *

urlpatterns = [
    path('', Schedule.as_view()),
    path('<int:t_id>/', HistoryView.as_view()),
    path('run_time/', next_run_time),
]
