from django.shortcuts import render

# Create your views here.

from .models import Renter
# from django.views.generic import ListView
from rest_framework.generics import ListCreateAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView
from .serializers import RenterSerializer
from offers.models import Offer
from offers.serializers import OfferSerializer
from cars.models import Car
from cars.serializers import CarSerializer


class RentersListView(ListCreateAPIView):
    queryset = Renter.objects.all()
    serializer_class = RenterSerializer
    model = Renter
    context_object_name = 'renters'
    ordering = ['username']
    paginate_by = 10

    def perform_create(self, serializer):
        return super().perform_create(serializer)

renters_create_list = RentersListView.as_view()

class RenteDetailView(RetrieveAPIView):
    queryset = Renter.objects.all()
    serializer_class = RenterSerializer
    model = Renter
    context_object_name = 'renter'
    ordering = ['username']
    paginate_by = 10

renter_detail = RenteDetailView.as_view()


class RenterUpdateView(UpdateAPIView):
    queryset = Renter.objects.all()
    serializer_class = RenterSerializer
    model = Renter
    context_object_name = 'renter'
    ordering = ['username']
    paginate_by = 10

renter_update = RenterUpdateView.as_view()

class RenterDeleteView(DestroyAPIView):
    queryset = Renter.objects.all()
    serializer_class = RenterSerializer
    model = Renter
    context_object_name = 'renter'
    ordering = ['username']
    paginate_by = 10

renter_delete = RenterDeleteView.as_view()



# Cars By Renter

class CarsByRenterListView(ListCreateAPIView):
    def get(self, request, *args, **kwargs):
        self.queryset = Car.objects.filter(owner__id=kwargs['pk'])
        return super().get(request, *args, **kwargs)
    
    serializer_class = CarSerializer
    model = Car

cars_by_renter_list = CarsByRenterListView.as_view()

# Offers By Renter

class OffersByRenterListView(ListCreateAPIView):
    def get(self, request, *args, **kwargs):
        self.queryset = Offer.objects.filter(car__owner__id=kwargs['pk'])
        return super().get(request, *args, **kwargs)
    
    serializer_class = OfferSerializer
    model = Offer

offers_by_renter_list = OffersByRenterListView.as_view()