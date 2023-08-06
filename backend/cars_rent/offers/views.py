from rest_framework.generics import ListCreateAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView
from .models import Offer, Tag, PaymentWay
from .serializers import OfferSerializer, TagSerializer, PaymentWaySerializer



# OFFER VIEWS

class OfferListCreateAPIView(ListCreateAPIView):
    queryset = Offer.objects.all()
    serializer_class = OfferSerializer

    def perform_create(self, serializer):
        return super().perform_create(serializer)
    
offer_list_create_view = OfferListCreateAPIView.as_view()
    
class OfferRetrieveAPIView(RetrieveAPIView):
    queryset = Offer.objects.all()
    serializer_class = OfferSerializer

offer_retreive_view = OfferRetrieveAPIView.as_view()

class OfferUpdateAPIView(UpdateAPIView):
    queryset = Offer.objects.all()
    serializer_class = OfferSerializer

offer_update_view = OfferUpdateAPIView.as_view()

class OfferDestroyAPIView(DestroyAPIView):
    queryset = Offer.objects.all()
    serializer_class = OfferSerializer

offer_destroy_view = OfferDestroyAPIView.as_view()

# TAG VIEWS

class TagListCreateAPIView(ListCreateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

    def perform_create(self, serializer):
        return super().perform_create(serializer)
    
tag_list_create_view = TagListCreateAPIView.as_view()


class TagRetrieveAPIView(RetrieveAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

tag_retreive_view = TagRetrieveAPIView.as_view()

class TagUpdateAPIView(UpdateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

tag_update_view = TagUpdateAPIView.as_view()

class TagDestroyAPIView(DestroyAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

tag_destroy_view = TagDestroyAPIView.as_view()

# PAYMENTWAY VIEWS

class PaymentWayListCreateAPIView(ListCreateAPIView):
    queryset = PaymentWay.objects.all()
    serializer_class = PaymentWaySerializer

    def perform_create(self, serializer):
        return super().perform_create(serializer)
    
paymentway_list_create_view = PaymentWayListCreateAPIView.as_view()

class PaymentWayRetrieveAPIView(RetrieveAPIView):
    queryset = PaymentWay.objects.all()
    serializer_class = PaymentWaySerializer

paymentway_retreive_view = PaymentWayRetrieveAPIView.as_view()

class PaymentWayUpdateAPIView(UpdateAPIView):
    queryset = PaymentWay.objects.all()
    serializer_class = PaymentWaySerializer

paymentway_update_view = PaymentWayUpdateAPIView.as_view()

class PaymentWayDestroyAPIView(DestroyAPIView):
    queryset = PaymentWay.objects.all()
    serializer_class = PaymentWaySerializer

paymentway_destroy_view = PaymentWayDestroyAPIView.as_view()