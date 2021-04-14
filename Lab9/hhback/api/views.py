from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse
from api.models import Company, Vacancy
from django.views.decorators.csrf import csrf_exempt

# Create your views here.


def test(request):
    return HttpResponse("123")


#Companies
@csrf_exempt
def interract_with_company_list(request):
    if request.method == "GET":
        companies = Company.objects.all()
        companies_json = [company.to_json() for company in companies]
        return JsonResponse(companies_json,safe=False)
    elif request.method == "POST":
        return HttpResponse("123")
    elif request.method == "PUT":
        return HttpResponse("put")

@csrf_exempt
def interract_with_company_details(request, id):
    if request.method == "GET":
        companies = Company.objects.all()
        companies_json = [company.to_json() for company in companies]
        try:
            company = Company.objects.get(id = id)
        except Company.DoesNotExist as e:
            return JsonResponse({'message': str(e)},safe=False)
    elif request.method == "POST":
        return HttpResponse("123")
    elif request.method == "PUT":
        return HttpResponse("put")


def get_vacancies(request, id):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    try:
        company = Company.objects.get(id = id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)},safe=False)

    return ""




#vacancies
@csrf_exempt
def interract_with_vacancy_list(request):
    if request.method == "GET":
        vacancies = Vacancy.objects.all()
        vacancies_json = [Vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    elif request.method == "POST":
        return HttpResponse("123")
    elif request.method == "PUT":
        return HttpResponse("put")

@csrf_exempt
def interract_with_vacancy_details(request,id):
    if request.method == "GET":
        vacancies = Vacancy.objects.all()
        vacancies_json = [Vacancy.to_json() for vacancy in vacancies]
        try:
            vacancy = Vacancy.objects.get(id = id)
        except Vacancy.DoesNotExist as e:
            return JsonResponse({'message': str(e)},safe=False)
    elif request.method == "POST":
        return HttpResponse("123")
    elif request.method == "PUT":
        return HttpResponse("put")

def get_top_ten(request):
    pass
