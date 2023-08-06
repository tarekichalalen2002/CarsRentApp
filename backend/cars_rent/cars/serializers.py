from rest_framework import serializers
from .models import Car, CarCategory, CarState, CarBrand, CarModel


class CarCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CarCategory
        fields = "__all__"

class CarStateSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarState
        fields = "__all__"

class CarBrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarBrand
        fields = "__all__"

class CarModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarModel
        fields = "__all__"

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = "__all__"