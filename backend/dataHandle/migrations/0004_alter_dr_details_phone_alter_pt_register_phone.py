# Generated by Django 5.1.4 on 2025-01-11 07:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dataHandle', '0003_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dr_details',
            name='phone',
            field=models.BigIntegerField(),
        ),
        migrations.AlterField(
            model_name='pt_register',
            name='phone',
            field=models.BigIntegerField(),
        ),
    ]
