from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'desc',
        )
        model = Post

class PostImage(serializers.ModelSerializer):
    class Meta:
        fields =(
            'image'
        )
        model = Post