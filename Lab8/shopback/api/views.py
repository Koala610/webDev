from django.shortcuts import render
from django.http.response import HttpResponse

# Create your views here.

def func(request, id = 0):
    return HttpResponse('Test' + str(id))
