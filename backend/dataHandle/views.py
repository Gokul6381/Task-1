from django.http import HttpResponse,JsonResponse
import json
from .models import Dr_details,Pt_register
from django.views.decorators.csrf import csrf_exempt
from datetime import datetime


@csrf_exempt
def addDr(request):
    if request.method == "POST":
       try:
        data=json.load(request)
        Data=data.get('data',{})

        name=Data['name']
        phone=Data['phone']

        data=Dr_details.objects.create(name=name,phone=phone)
        data.save()
        return HttpResponse('Data inserted')
    
       except Exception as err:
         return HttpResponse(f'Error:{str(err)}')
       

def doctor(request):
   queryset=Dr_details.objects.all()
   data=[]
   for item in queryset:
      doc={
         'id':item.id,
         'name':item.name,
         'phone':item.phone
      }
      data.append(doc)
      print(item.id)

        
   return JsonResponse(data, safe=False)


@csrf_exempt
def patient(request):
    if request.method == "POST":
       try:
        data=json.load(request)
        Data=data.get('data',{})

        name=Data['name']
        phone=Data['phone']
        doc=Data['doctor']
        doctor = Dr_details.objects.get(id=doc)
        date=Data['date']
        time=Data['time']

        doc=Pt_register.objects.all()

        if Pt_register.objects.filter(drName=doctor, date=date, time=time).exists():
            return HttpResponse('Doctor Busy at this time')
        else:
            data=Pt_register.objects.create(name=name, phone=phone, drName=doctor, date=date, time=time)
            data.save()
            return HttpResponse('Appointment booked successfully')
              

       except Exception as err:
         print(str(err))
         return HttpResponse(f'Error:{str(err)}')


def calender(request):
    queryset=Pt_register.objects.all()
    data=[]
    for item in queryset:
        patient={
            'name':item.name,
            'phone':item.phone,
            'doctor':item.drName.name,
            'date':item.date,
            'time':item.time,
        }
        data.append(patient)
        print(item.id)

            
    return JsonResponse(data, safe=False)   