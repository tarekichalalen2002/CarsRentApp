from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager, PermissionsMixin
# Create your models here.


class Wilaya(models.Model):
    name = models.CharField(max_length=50)
    code = models.CharField(max_length=2,primary_key=True)

    def __str__(self):
        return self.name


class RenterManager(BaseUserManager):
    def create_user(self,phone, email, address, wilaya, ccp, first_name, last_name, password=None):
        if phone is None:
            raise TypeError('Users should have a phone number')
        if email is None:
            raise TypeError('Users should have an email')
        if address is None:
            raise TypeError('Users should have an address')
        if wilaya is None:
            raise TypeError('Users should have a wilaya')
        if ccp is None:
            raise TypeError('Users should have a ccp')
        if first_name is None:
            raise TypeError('Users should have a first name')
        if last_name is None:
            raise TypeError('Users should have a last name')
        user = self.model(phone=phone,username=first_name+" "+last_name, email=self.normalize_email(email), address=address, wilaya=wilaya, ccp=ccp, first_name=first_name, last_name=last_name)
        user.set_password(password)
        user.save()
        return user
    
    def create_superuser(self,phone,first_name, last_name, password=None):
        if password is None:
            raise TypeError('Password should not be none')
        wilaya = Wilaya.objects.get(code="06")
        user = self.model(phone=phone,first_name=first_name,wilaya=wilaya, last_name=last_name,username=first_name+" "+last_name)
        user.set_password(password)
        user.is_superuser = True
        user.is_staff = True
        user.save()
        return user


class Renter(AbstractUser):
    phone = models.CharField(max_length=20, unique=True)
    address = models.CharField(max_length=100)
    wilaya = models.ForeignKey(Wilaya, on_delete=models.CASCADE)
    ccp = models.CharField(max_length=50)
    is_active = models.BooleanField(default=True)
    image = models.ImageField(upload_to='renters/images', null=True, blank=True)

    objects = RenterManager()


    REQUIRED_FIELDS = ['first_name', 'last_name']

    def __str__(self):
        return self.username
    