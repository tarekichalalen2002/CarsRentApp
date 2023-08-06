from django.urls import path,include

from . import views

urlpatterns =[
    path("",views.home_api, name="home_api"),
    path("renters/",include("renters.urls"), name="renters_api"),
    path("cars/",include("cars.urls"), name="cars_api"),
    path("offers/",include("offers.urls"), name="offers_api"),
]