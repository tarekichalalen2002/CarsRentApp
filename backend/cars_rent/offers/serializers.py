from rest_framework import serializers
from .models import Offer,Tag,PaymentWay

class TagSerializer(serializers.ModelSerializer):
    # def create(self,valdiated_data):
    #     user = self.context.get('request').user
    #     if user.is_authe


    class Meta:
        model = Tag
        fields = '__all__'

class PaymentWaySerializer(serializers.ModelSerializer):
    class Meta:
        model = PaymentWay
        fields = '__all__'

class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = '__all__'
