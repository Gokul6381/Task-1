from django.db import models
from django.utils import timezone

class Dr_details(models.Model):
    id=models.AutoField(primary_key=True)
    name=models.CharField(max_length=50)
    phone=models.BigIntegerField()

    def __str__(self):
        return self.name
    
class Pt_register(models.Model):
    name=models.CharField(max_length=50)
    phone=models.BigIntegerField()
    drName=models.ForeignKey(Dr_details,on_delete=models.CASCADE)
    date=models.DateField()
    time=models.TimeField()
    booking=models.DateTimeField(default=timezone.now())

    def __str__(self):
        return self.name
