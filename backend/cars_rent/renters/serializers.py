from rest_framework import serializers

from .models import Renter

class RenterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Renter
        fields = [
            'id',
            'first_name',
            'last_name',
            'email',
            'phone',
            'address',
            'wilaya',
            'ccp',
            'is_active',
            'image',
        ]