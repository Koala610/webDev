
from django.urls import path,include
from api.views import func

urlpatterns = [
    path('test/',func),
    path('products/',func),
    path('categories/',func),
    path('products/<int:id>/',func),
    path('categories/<int:id>/',func)
]
