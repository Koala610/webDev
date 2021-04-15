import json

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
        data = json.loads(request.body)
        try:
            company = Company.objects.create(name = data['name'])
        except Exception as e:
            return JsonResponse({'message': str(e)},safe=False)

        return JsonResponse(company.to_json())


@csrf_exempt
def interract_with_company_details(request, id):
    try:
        company = Company.objects.get(id = id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)},safe=False)

    if request.method == "GET":
        return JsonResponse(company.to_json())
    elif request.method == "PUT":
        data = json.loads(request.body)
        company.name = data['name']
        company.save()

        return JsonResponse(company.to_json())
    elif request.method == "DELETE":
        company.delete()
        return JsonResponse(
            {
            "message" : "deleted"
            }
        )


def get_vacancies(request, id):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    company_vacancies = []

    for vacancy in vacancies_json:
        if not vacancy["company"]:
            continue
        if vacancy["company"].id == id:
            company_vacancies.append(
                {
                "name" : vacancy["name"],
                "salary" : vacancy["salary"]
                }
            )


    return JsonResponse(company_vacancies,safe=False)





#vacancies
@csrf_exempt
def interract_with_vacancy_list(request):
    if request.method == "GET":
        vacancies = Vacancy.objects.all()
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        try:
            vacancy = Vacancy.objects.create(name = data['name'])
        except Exception as e:
            return JsonResponse({'message': str(e)},safe=False)

        return JsonResponse(vacancy.to_json())

@csrf_exempt
def interract_with_vacancy_details(request,id):
    try:
        vacancy = Vacancy.objects.get(id = id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message': str(e)},safe=False)
    if request.method == "GET":
        return JsonResponse(vacancy.to_json())
    elif request.method == "PUT":
        data = json.loads(request.body)
        vacancy.name = data['name']
        vacancy.save()

        return JsonResponse(vacancy.to_json())
    elif request.method == "DELETE":
        vacancy.delete()
        return JsonResponse(
            {
            "message" : "deleted"
            }
        )

def get_top_ten(request):
    vacancies = Vacancy.objects.all().order_by("-salary")
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    vacancies_json = vacancies_json[:10]
    vacancies_json = [{'name' : vacancy['name'], 'salary' : vacancy['salary']} for vacancy in vacancies_json]
    return JsonResponse(vacancies_json, safe=False)
