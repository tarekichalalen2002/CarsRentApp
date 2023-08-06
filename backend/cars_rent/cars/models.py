from django.db import models

# Create your models here.

class CarCategory(models.Model):
    name = models.CharField(max_length=50)
    number_of_seats = models.IntegerField()
    number_of_doors = models.IntegerField()

    def __str__(self):
        return self.name
    
class CarState(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name
    
class CarBrand(models.Model):
    name = models.CharField(max_length=50)
    logo = models.ImageField(upload_to='cars/brands', blank=True, null=True)

    def __str__(self):
        return self.name

class CarModel(models.Model):
    name = models.CharField(max_length=50)
    brand = models.ForeignKey(CarBrand, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Car(models.Model):
    description = models.CharField(max_length=200)
    serial_number = models.CharField(max_length=50)
    year = models.IntegerField()
    images = models.ImageField(upload_to='cars/images', blank=True, null=True)
    category = models.ForeignKey(CarCategory, on_delete=models.CASCADE)
    model = models.ForeignKey(CarModel, on_delete=models.CASCADE)
    state = models.ForeignKey(CarState, on_delete=models.CASCADE)
    owner = models.ForeignKey('renters.Renter', on_delete=models.CASCADE)

    def __str__(self):
        return self.model.name + ' ' + str(self.year)
    