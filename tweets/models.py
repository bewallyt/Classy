from django.db import models
from django.utils.datetime_safe import datetime
# Create your models here.


class Tweet(models.Model):

    content = models.CharField(max_length=100, blank=True)
    author = models.CharField(max_length=100, blank=True)
    date = models.DateTimeField(default=datetime.now())
    hashtag = models.CharField(max_length=50, blank=True)


    def __unicode__(self):
        return '{0}'.format(self.content)