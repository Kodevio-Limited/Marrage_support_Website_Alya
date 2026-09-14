# Navbar Settings — Admin-Editable Navbar Content

This document is the contract between the Alia **Django backend / admin panel**
and the **Next.js frontend** for the navbar (header) that appears on every
user-facing page.

> **Admin panel requirement: the navbar must be editable through its own
> dedicated "Navbar settings" tab/section in the Django admin panel** (a
> singleton `NavbarSettings` page with `NavLinkItem` inlines — see §1.2).
> Admins must NOT have to touch code or other models to change navbar content.
> All navbar content shown in the user panel must come from the backend through
> this endpoint.

The frontend now fetches navbar content from:

```
GET {NEXT_PUBLIC_API_URL}/navbar-settings/
```

(e.g. `http://127.0.0.1:8000/api/navbar-settings/`)

If the endpoint is missing, returns 404, or fails, the frontend automatically
falls back to the built-in i18n navbar strings and the default logo/CTA, so
this integration is backwards-compatible — you can ship the frontend before the
backend endpoint exists.

---

## 1. Django model (suggested)

```python
from django.db import models


class NavLinkItem(models.Model):
    """A single link in the top navigation bar."""
    label = models.CharField("Label (English)", max_length=120)
    label_ar = models.CharField("Label (Arabic)", max_length=120, blank=True, default="")
    href = models.CharField("URL", max_length=500)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["sort_order", "id"]

    def __str__(self) -> str:
        return self.label


class NavbarSettings(models.Model):
    """Singleton model edited from the admin panel, rendered in the user panel navbar."""
    logo_url = models.CharField("Logo image URL", max_length=500, blank=True, default="")
    logo_alt = models.CharField("Logo alt text", max_length=200, blank=True, default="")

    apply_now_text = models.CharField("Apply Now label (English)", max_length=120, blank=True, default="")
    apply_now_text_ar = models.CharField("Apply Now label (Arabic)", max_length=120, blank=True, default="")
    apply_now_href = models.CharField("Apply Now URL", max_length=500, blank=True, default="")

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Navbar settings"
        verbose_name_plural = "Navbar settings"

    def save(self, *args, **kwargs):
        # Singleton: always keep exactly one row (pk=1).
        self.pk = 1
        super().save(*args, **kwargs)

    @classmethod
    def load(cls) -> "NavbarSettings":
        obj, _ = cls.objects.get_or_create(pk=1)
        return obj

    def __str__(self) -> str:
        return "Navbar settings"
```

Register `NavbarSettings` with `NavLinkItem` as inlines in `admin.py` so the
admin can edit everything from one screen:

```python
from django.contrib import admin


class NavLinkItemInline(admin.TabularInline):
    model = NavLinkItem
    extra = 0
    ordering = ["sort_order", "id"]


@admin.register(NavbarSettings)
class NavbarSettingsAdmin(admin.ModelAdmin):
    inlines = [NavLinkItemInline]

    def has_add_permission(self, request):
        return not NavbarSettings.objects.exists()

    def has_delete_permission(self, request, obj=None):
        return False
```

## 2. API response shape

`GET /api/navbar-settings/` must return (200):

```json
{
  "logoUrl": "/Static/alia-logo.png",
  "logoAlt": "ALIA Logo",
  "links": [
    { "label": "Home", "labelAr": "الرئيسية", "href": "/" },
    { "label": "About Us", "labelAr": "من نحن", "href": "/about" },
    { "label": "Contact", "labelAr": "اتصل بنا", "href": "/contact" },
    { "label": "Shorts", "labelAr": "المقاطع", "href": "/shorts" },
    { "label": "News", "labelAr": "الأخبار", "href": "/news" },
    { "label": "Initiatives", "labelAr": "المبادرات", "href": "/initiatives" },
    { "label": "Consultation", "labelAr": "الاستشارات", "href": "/consultation" },
    { "label": "Emirates", "labelAr": "الإمارات", "href": "/emirates" }
  ],
  "applyNowText": "Apply Now",
  "applyNowTextAr": "قدّم الآن",
  "applyNowHref": "#cta",
  "updated_at": "2026-09-14T10:30:00Z"
}
```

Field notes:

| Field | Required | Behavior when empty/missing |
| --- | --- | --- |
| `logoUrl` | no | Falls back to `/Static/alia-logo.png` |
| `logoAlt` | no | Falls back to `"ALIA Logo"` |
| `links` | no | Falls back to the current default link set with i18n labels |
| `labelAr` inside a link | no | When the site is in Arabic and `labelAr` is empty, the English `label` is used |
| `applyNowText(Ar)` | no | Falls back to `nav.applyNow` i18n string |
| `applyNowHref` | no | Falls back to `#cta` |
| `updated_at` | no | Informational only |

Any array entry with an empty `label` or `href` is skipped by the frontend, so
the admin can temporarily disable a link by clearing its URL.

## 3. Serializer + view (suggested)

```python
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response


class NavLinkItemSerializer(serializers.ModelSerializer):
    labelAr = serializers.CharField(source="label_ar", required=False, allow_blank=True)

    class Meta:
        model = NavLinkItem
        fields = ["label", "labelAr", "href"]


class NavbarSettingsSerializer(serializers.ModelSerializer):
    logoUrl = serializers.CharField(source="logo_url", required=False, allow_blank=True)
    logoAlt = serializers.CharField(source="logo_alt", required=False, allow_blank=True)
    applyNowText = serializers.CharField(source="apply_now_text", required=False, allow_blank=True)
    applyNowTextAr = serializers.CharField(source="apply_now_text_ar", required=False, allow_blank=True)
    applyNowHref = serializers.CharField(source="apply_now_href", required=False, allow_blank=True)
    links = NavLinkItemSerializer(many=True, read_only=True)
    updated_at = serializers.DateTimeField(read_only=True)

    class Meta:
        model = NavbarSettings
        fields = [
            "logoUrl", "logoAlt",
            "links",
            "applyNowText", "applyNowTextAr", "applyNowHref",
            "updated_at",
        ]


@api_view(["GET"])
def navbar_settings(request):
    settings = NavbarSettings.load()
    return Response(NavbarSettingsSerializer(settings).data)
```

URL routing (public, no auth — same as `/api/footer-settings/`):

```python
# urls.py
path("navbar-settings/", navbar_settings, name="navbar-settings"),
```

## 4. Frontend behavior (already implemented)

- `src/lib/api/settings.ts` — `getNavbarContent()` fetches
  `${NEXT_PUBLIC_API_URL}/navbar-settings/` with `revalidate: 60` and returns
  `null` on any failure.
- `src/components/layout/Navbar.tsx` — renders backend values when present;
  per-field i18n fallback keeps the navbar fully populated before the admin
  saves anything. Internal links (`/…`, `#…`) render through localized
  `<Link>`, external links (`http…`) render as plain `<a>` with
  `target="_blank" rel="noopener noreferrer"`.
- Because the fetch is cached for 60s, admin changes appear on the user panel
  within about a minute (or immediately after a revalidation/deploy).

## 5. Admin panel checklist (Django admin)

To expose the navbar as its own admin-panel tab/section:

1. Add the `NavbarSettings` singleton model + `NavLinkItem` model from §1 and
   run migrations.
2. Register them in `admin.py` exactly as in §1.2 so the admin sidebar shows a
   **"Navbar settings"** entry; opening it presents every editable navbar field
   (logo URL/alt, Apply Now text and URL in both languages) plus the nav links
   inline table with drag-orderable `sort_order`.
3. Keep the singleton behavior (`has_add_permission`/`has_delete_permission`)
   so there is exactly one editable settings page — it acts as the tab's
   single screen.
4. Every field is blank-able: when a field is left empty the user panel
   automatically falls back to the built-in i18n strings (§2), so the admin
   can translate/edit selectively (e.g. Arabic only) without breaking the
   navbar.
