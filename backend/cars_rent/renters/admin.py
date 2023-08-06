from django.contrib import admin

# Register your models here.
from .models import Renter,Wilaya

admin.site.register(Renter)
admin.site.register(Wilaya)