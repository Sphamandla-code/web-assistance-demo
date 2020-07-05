from django.shortcuts import render

# Create your views here.
def index(request):
    
    context = {"c":'this site'}
    return render(request,'index.html',context)