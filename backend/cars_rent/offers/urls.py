from django.urls import path

from . import views

urlpatterns = [
    # OFFERS
    path('', views.offer_list_create_view, name='offer_list_create_view'),
    path('<int:pk>/', views.offer_retreive_view, name='offer_retreive_view'),
    path('<int:pk>/update/', views.offer_update_view, name='offer_update_view'),
    path('<int:pk>/delete/', views.offer_destroy_view, name='offer_destroy_view'),

    # TAGS
    path('tags/', views.tag_list_create_view, name='tag_list_create_view'),
    path('tags/<int:pk>/', views.tag_retreive_view, name='tag_retreive_view'),
    path('tags/<int:pk>/update/', views.tag_update_view, name='tag_update_view'),
    path('tags/<int:pk>/delete/', views.tag_destroy_view, name='tag_destroy_view'),
    
    # PAYMENT WAYS
    path('payment_ways/', views.paymentway_list_create_view, name='payment_way_list_create_view'),
    path('payment_ways/<int:pk>/', views.paymentway_retreive_view, name='payment_way_retreive_view'),
    path('payment_ways/<int:pk>/update/', views.paymentway_update_view, name='payment_way_update_view'),
    path('payment_ways/<int:pk>/delete/', views.paymentway_destroy_view, name='payment_way_destroy_view'),
]