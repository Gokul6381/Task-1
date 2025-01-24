# Generated by Django 5.1.4 on 2025-01-11 08:54

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dataHandle', '0008_alter_dr_details_id_alter_pt_register_booking'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='dr_details',
            name='id',
        ),
        migrations.AlterField(
            model_name='dr_details',
            name='name',
            field=models.CharField(max_length=50, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='pt_register',
            name='booking',
            field=models.DateTimeField(default=datetime.datetime(2025, 1, 11, 8, 54, 4, 38989, tzinfo=datetime.timezone.utc)),
        ),
    ]
