from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, 'index.html')


def login(request):
    return render(request, 'login.html')


def sign_in(request):
    return render(request, 'sign-in.html')


def campaign(request):
    return render(request, 'campaign.html')


def all_requests(request):
    return render(request, 'all_requests.html')


def all_details(request):
    return render(request, 'all_details.html')


def new_campaign(request):
    return render(request, 'addNewCampaign.html')
    pass