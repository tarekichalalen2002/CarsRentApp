from django.urls import path

from . import views

urlpatterns = [
    # CATEGORIES
    path('categories/', views.car_categories_create_list, name='car_categories_create_list'),
    path('categories/<int:pk>/', views.car_category_detail, name='car_category_detail'),
    path('categories/<int:pk>/delete/', views.car_category_delete, name='car_delete'),
    path('categories/<int:pk>/update/', views.car_category_update, name='car_category_update'),
    # STATES
    path('states/', views.car_states_create_list, name='car_states_create_list'),
    path('states/<int:pk>/', views.car_state_detail, name='car_state_detail'),
    path('states/<int:pk>/delete/', views.car_state_delete, name='car_delete'),
    path('states/<int:pk>/update/', views.car_state_update, name='car_state_update'),
    # BRANDS
    path('brands/', views.car_brands_create_list, name='car_brands_create_list'),
    path('brands/<int:pk>/', views.car_brand_detail, name='car_brand_detail'),
    path('brands/<int:pk>/delete/', views.car_brand_delete, name='car_delete'),
    path('brands/<int:pk>/update/', views.car_brand_update, name='car_brand_update'),
    # MODELS
    path('models/', views.car_models_create_list, name='car_models_create_list'),
    path('models/<int:pk>/', views.car_model_detail, name='car_model_detail'),
    path('models/<int:pk>/delete/', views.car_model_delete, name='car_delete'),
    path('models/<int:pk>/update/', views.car_model_update, name='car_model_update'),
    # CARS
    path('', views.cars_create_list, name='cars_create_list'),
    path('<int:pk>/', views.car_detail, name='car_detail'),
    path('<int:pk>/delete/', views.car_delete, name='car_delete'),
    path('<int:pk>/update/', views.car_update, name='car_update'),
]
