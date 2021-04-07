from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse
from api.models import Product, Category

# Create your views here.

def func(request, id = 0):
    return HttpResponse('Test' + str(id))


def product_list(request):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json,safe=False)

def product_details(request, id):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    for product in products_json:
        if product['id'] == id:
            return JsonResponse(product)
    return JsonResponse({'message': 'Not found'},safe=False)

def category_list(request):
    categories = Category.objects.all()
    categories_json = [category.to_json() for category in categories]
    return JsonResponse(categories_json, safe=False)

def category_details(request,id):
    categories = Category.objects.all()
    categories_json = [category.to_json() for category in categories]
    for category in categories_json:
        if category['id'] == id:
            print(category)
            return JsonResponse(category)
    return JsonResponse({'message': 'Not found'},safe=False)
