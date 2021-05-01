from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('login/', views.login, name='login'),
    path('sign_in/', views.sign_in, name='sign_in'),
    path('campaign/', views.campaign, name='campaign'),
    path('all_requests/', views.all_requests, name='all_requests'),
    path('all_details/', views.all_details, name='all_details'),
    path('new_campaign/', views.new_campaign, name='new_campaign'),
]
