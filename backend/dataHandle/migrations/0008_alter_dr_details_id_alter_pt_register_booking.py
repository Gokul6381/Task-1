# Generated by Django 5.1.4 on 2025-01-11 08:53

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dataHandle', '0007_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dr_details',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='pt_register',
            name='booking',
            field=models.DateTimeField(default=datetime.datetime(2025, 1, 11, 8, 53, 50, 408307, tzinfo=datetime.timezone.utc)),
        ),
    ]
