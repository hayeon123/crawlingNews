from django.db import models

# Create your models here.

class Post(models.Model):
    objects = models.Manager()
    title = models.CharField(max_length=200)
    desc = models.CharField(max_length=500)

    def __str__(self):
        """A string representation of the model."""
        return self.title