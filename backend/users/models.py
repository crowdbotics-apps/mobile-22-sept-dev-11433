from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _


class User(AbstractUser):
    name = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )
    ghfhgfhgf = models.PositiveSmallIntegerField(
        null=True,
        blank=True,
    )
    gfhgfhgf = models.ForeignKey(
        "home.HomePage",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name="user_gfhgfhgf",
    )

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})
