# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tweet',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('content', models.CharField(max_length=100, blank=True)),
                ('author', models.CharField(max_length=100, blank=True)),
                ('date', models.DateTimeField(default=datetime.datetime(2015, 4, 25, 23, 23, 15, 854436))),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
