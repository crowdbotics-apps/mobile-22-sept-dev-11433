# Generated by Django 2.2.16 on 2020-09-22 13:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_hhgjhg'),
        ('users', '0002_auto_20200922_1136'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='gfhgfhgf',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user_gfhgfhgf', to='home.HomePage'),
        ),
        migrations.AddField(
            model_name='user',
            name='ghfhgfhgf',
            field=models.PositiveSmallIntegerField(blank=True, null=True),
        ),
    ]
