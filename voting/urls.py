from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('/voting', views.start_voting, name='start_voting'),
]