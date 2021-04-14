from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse
from api.models import Company, Vacancy

# Create your views here.


def test(request):
    return HttpResponse("123")


#Companies
def get_company_list(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    return JsonResponse(companies_json,safe=False)

def get_company_details(request, id):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    try:
        company = Company.objects.get(id = id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)},safe=False)


def get_vacancies(request, id):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    try:
        company = Company.objects.get(id = id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)},safe=False)

    return ""




#vacancies
def get_vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [Vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def get_vacancy_details(request,id):
    vacancies = Vacancy.objects.all()
    vacancies_json = [Vacancy.to_json() for vacancy in vacancies]
    try:
        vacancy = Vacancy.objects.get(id = id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message': str(e)},safe=False)
