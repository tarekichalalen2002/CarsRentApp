from django.urls import path

from . import views

urlpatterns = [
    path('', views.renters_create_list, name='renters_list'),
    path('<int:pk>/', views.renter_detail, name='renter_detail'),
    path('<int:pk>/update/', views.renter_update, name='renter_update'),
    path('<int:pk>/delete/', views.renter_delete, name='renter_delete'),

    # Offers By Renter
    path('<int:pk>/offers/', views.offers_by_renter_list, name='offers_by_renter_list'),

    # Cars By Renter
    path('<int:pk>/cars/', views.cars_by_renter_list, name='offers_by_renter_list'),
]