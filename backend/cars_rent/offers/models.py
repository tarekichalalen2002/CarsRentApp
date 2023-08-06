from django.db import models

# Create your models here.

class Tag(models.Model):
    tag_text = models.CharField(max_length=100)
    
    def __str__(self):
        return self.tag_text

class PaymentWay(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name

class Offer(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    price = models.FloatField()
    duration = models.IntegerField()
    rate = models.FloatField()
    car = models.ForeignKey('cars.Car', on_delete=models.CASCADE)
    payment_ways = models.ManyToManyField(PaymentWay, related_name='offers')
    tags = models.ManyToManyField(Tag, related_name='offers')

    def __str__(self):
        return self.title