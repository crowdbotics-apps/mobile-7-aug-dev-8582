# Generated by Django 2.2.15 on 2020-08-07 07:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0002_load_initial_data"),
    ]

    operations = [
        migrations.AddField(
            model_name="customtext",
            name="hgfhgfhgf",
            field=models.BooleanField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="customtext",
            name="hjgjhgjhghjg",
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="customtext",
            name="kjhkjhkjh",
            field=models.EmailField(blank=True, max_length=25, null=True),
        ),
    ]
