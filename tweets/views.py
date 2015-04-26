from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
import tweepy
from tweets.models import Tweet
from tweets.serializers import TweetSerializer


class TwitterViewSet(viewsets.ModelViewSet):
    serializer_class = TweetSerializer
    queryset = Tweet.objects.all()



    def create(self, request):

        print 'request'
        print request.data['hashtag']

        queryset = Tweet.objects.filter(hashtag=request.data['hashtag'])

        auth = tweepy.OAuthHandler('btkFtjTYUrA0DBKtRXGzbmlib', 'BOTvHUYS1jdq6HiEdcb50TGFI0rs84CkB7MnbnQgToFNrwu7cT')
        auth.set_access_token('1027085156-VTsubpstZN1dhp7istL8odxVzbwmckJn5xbzMIi', 'd5PTjdLLvFJMQ7Wo3I900VmUqvNAapdtv6sEbw5ld9gDq')

        api = tweepy.API(auth)

        tweets = []
        public_tweets = api.search(q=request.data['hashtag'])
        for tweet in public_tweets:
            print tweet.__getstate__()
            currentTweet = Tweet.objects.create(content=tweet.text, author=tweet.user.screen_name)
            tweets.append(currentTweet)
            currentTweet.save()



        serializer = self.serializer_class(tweets, many=True)
        print serializer.data
        return Response(serializer.data, status=status.HTTP_200_OK)






