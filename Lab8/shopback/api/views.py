from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse

# Create your views here.

def func(request, id = 0):
    return HttpResponse('Test' + str(id))


def product_list(request):
    dict = {}
    return JsonResponse(dict,safe=False)

def product_details(request, id):
    dict = {"id":id}
    return JsonResponse(dict,safe=False)

def category_list(request):
    dict = {}
    return JsonResponse(dict,safe=False)

def category_details(request,id):
    dict = {"id":id}
    return JsonResponse(dict,safe=False)
