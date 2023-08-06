from django.shortcuts import render

# Create your views here.

from rest_framework.views import APIView
from rest_framework.response import Response

class HomeApi(APIView):
    def get(self, request, format=None):
        content = {
            'message': 'Welcome to Cars Rent API'
        }
        return Response(content)
    
home_api = HomeApi.as_view()