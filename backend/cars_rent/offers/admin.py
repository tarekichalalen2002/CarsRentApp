from django.contrib import admin

# Register your models here.
from .models import Tag, PaymentWay, Offer

admin.site.register(Tag)
admin.site.register(PaymentWay)
admin.site.register(Offer)