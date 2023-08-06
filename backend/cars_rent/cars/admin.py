from django.contrib import admin

# Register your models here.
from .models import CarCategory, CarState, CarBrand, CarModel, Car

admin.site.register(CarCategory)
admin.site.register(CarState)
admin.site.register(CarBrand)
admin.site.register(CarModel)
admin.site.register(Car)