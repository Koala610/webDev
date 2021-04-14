from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse

# Create your views here.


def test(request):
    return HttpResponse("123")
