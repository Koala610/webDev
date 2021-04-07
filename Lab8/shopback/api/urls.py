
from django.urls import path,include
from api.views import func, product_list, product_details,category_list,category_details


urlpatterns = [
    path('test/',func),
    path('products/',product_list),
    path('categories/',category_list),
    path('products/<int:id>/',product_details),
    path('categories/<int:id>/',category_details)
]
