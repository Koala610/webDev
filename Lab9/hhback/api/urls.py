"""hhback URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from api.views import test, get_company_list, get_company_details, get_vacancy_details, get_vacancy_list

urlpatterns = [
    path('test/', test),
    path("companies", get_company_list),
    path("companies/<int:id>/", get_company_details),
    path("companies/<int:id>/vacancies/", test),
    path("vacancies/", get_vacancy_list),
    path("vacancies/<int:id>/", get_vacancy_details),
    path("vacancies/top_ten/", test)

]
