from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def start_voting(request):
    return render(request, 'cc.html')

# Create your views here.
