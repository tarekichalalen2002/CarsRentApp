# Generated by Django 4.2.2 on 2023-08-02 15:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('offers', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='offer',
            name='price',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='offer',
            name='rate',
            field=models.FloatField(),
        ),
    ]