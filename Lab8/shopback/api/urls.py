
from django.urls import path,include
from api.views import func

urlpatterns = [
    path('test/',func)
]
