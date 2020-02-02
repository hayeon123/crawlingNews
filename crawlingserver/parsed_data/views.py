from django.shortcuts import render
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Post
from .serializers import PostSerializer
from .crawlingNews import get_alticles
# Create your views here.
from .crawlingNews import get_Image

class ListPost(generics.RetrieveUpdateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class DetailPost(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

@api_view(['GET'])
def news_list(request):
    news = get_alticles()
    serializers = PostSerializer(news, many=True)
    return Response(serializers.data)

@api_view(['GET'])
def news_image(request):
    image = get_Image()
    serializers = PostSerializer(image, many=True)
    return Response(serializers.data)
