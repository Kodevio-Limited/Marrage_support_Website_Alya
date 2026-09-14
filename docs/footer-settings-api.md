# Footer Settings — Admin-Editable Footer Content

This document is the contract between the Alia **Django backend / admin panel**
and the **Next.js frontend** for the footer that appears on every user-facing
page.

> **Admin panel requirement: the footer must be editable through its own
> dedicated "Footer settings" tab/section in the Django admin panel** (a
> singleton `FooterSettings` page with `FooterLink` inlines — see §1.2).
> Admins must NOT have to touch code or other models to change footer
> content. All footer content shown in the user panel must come from the
> backend through this endpoint.

The frontend now fetches footer content from:

```
GET {NEXT_PUBLIC_API_URL}/footer-settings/
```

(e.g. `http://127.0.0.1:8000/api/footer-settings/`)

If the endpoint is missing, returns 404, or fails, the frontend automatically
falls back to the built-in i18n footer strings, so this integration is
backwards-compatible — you can ship the frontend before the backend endpoint
exists.

---

## 1. Django model (suggested)

```python
from django.db import models


class FooterLink(models.Model):
    """A single link inside a footer column (Quick Links or Resources)."""
    section = models.CharField(
        max_length=20,
        choices=[("quick", "Quick Links"), ("resources", "Resources")],
        default="quick",
    )
    label = models.CharField("Label (English)", max_length=120)
    label_ar = models.CharField("Label (Arabic)", max_length=120, blank=True, default="")
    href = models.CharField("URL", max_length=500)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["sort_order", "id"]

    def __str__(self) -> str:
        return f"{self.get_section_display()}: {self.label}"


class FooterSettings(models.Model):
    """Singleton model edited from the admin panel, rendered in the user panel footer."""
    brand_text = models.TextField("Brand text (English)", blank=True, default="")
    brand_text_ar = models.TextField("Brand text (Arabic)", blank=True, default="")

    government_initiative = models.CharField(
        "Government initiative line (English)", max_length=200, blank=True, default=""
    )
    government_initiative_ar = models.CharField(
        "Government initiative line (Arabic)", max_length=200, blank=True, default=""
    )

    # Column headings — editable so the admin controls every footer string.
    quick_links_heading = models.CharField(
        "Quick Links heading (English)", max_length=120, blank=True, default=""
    )
    quick_links_heading_ar = models.CharField(
        "Quick Links heading (Arabic)", max_length=120, blank=True, default=""
    )
    resources_heading = models.CharField(
        "Resources heading (English)", max_length=120, blank=True, default=""
    )
    resources_heading_ar = models.CharField(
        "Resources heading (Arabic)", max_length=120, blank=True, default=""
    )
    contacts_heading = models.CharField(
        "Contacts heading (English)", max_length=120, blank=True, default=""
    )
    contacts_heading_ar = models.CharField(
        "Contacts heading (Arabic)", max_length=120, blank=True, default=""
    )
    built_for_text = models.CharField(
        "Bottom bar tagline (English)", max_length=200, blank=True, default=""
    )
    built_for_text_ar = models.CharField(
        "Bottom bar tagline (Arabic)", max_length=200, blank=True, default=""
    )

    phone = models.CharField(max_length=40, blank=True, default="")
    email = models.EmailField(blank=True, default="")
    address = models.CharField("Address (English)", max_length=250, blank=True, default="")
    address_ar = models.CharField("Address (Arabic)", max_length=250, blank=True, default="")

    copyright = models.CharField("Copyright line (English)", max_length=250, blank=True, default="")
    copyright_ar = models.CharField("Copyright line (Arabic)", max_length=250, blank=True, default="")

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Footer settings"
        verbose_name_plural = "Footer settings"

    def save(self, *args, **kwargs):
        # Singleton: always keep exactly one row (pk=1).
        self.pk = 1
        super().save(*args, **kwargs)

    @classmethod
    def load(cls) -> "FooterSettings":
        obj, _ = cls.objects.get_or_create(pk=1)
        return obj

    def __str__(self) -> str:
        return "Footer settings"
```

Register `FooterSettings` and `FooterLink` as inlines in `admin.py` so the
admin can edit everything from one screen:

```python
from django.contrib import admin


class FooterLinkInline(admin.TabularInline):
    model = FooterLink
    extra = 0


@admin.register(FooterSettings)
class FooterSettingsAdmin(admin.ModelAdmin):
    inlines = [FooterLinkInline]

    def has_add_permission(self, request):
        return not FooterSettings.objects.exists()

    def has_delete_permission(self, request, obj=None):
        return False
```

## 2. API response shape

`GET /api/footer-settings/` must return (200):

```json
{
  "brandText": "Alia is the official platform dedicated to empowering Emirati families…",
  "brandTextAr": "عالية هي المنصة الرسمية…",
  "governmentInitiative": "United Arab Emirates Government Initiative",
  "governmentInitiativeAr": "مبادرة حكومة دولة الإمارات العربية المتحدة",
  "quickLinksHeading": "Quick Links",
  "quickLinksHeadingAr": "روابط سريعة",
  "resourcesHeading": "Resources",
  "resourcesHeadingAr": "مصادر",
  "contactsHeading": "Contacts",
  "contactsHeadingAr": "جهات الاتصال",
  "builtForText": "Built for Emirati Families",
  "builtForTextAr": "صُمم للعائلات الإماراتية",
  "phone": "+971 800 2542",
  "email": "support@alia.gov.ae",
  "address": "Abu Dhabi, UAE",
  "addressAr": "أبوظبي، الإمارات العربية المتحدة",
  "copyright": "© 2026 All rights reserved.",
  "copyrightAr": "© 2026 جميع الحقوق محفوظة.",
  "quickLinks": [
    { "label": "Home", "labelAr": "الرئيسية", "href": "/" },
    { "label": "About Alia", "labelAr": "عن عالية", "href": "/about" },
    { "label": "Contact Us", "labelAr": "اتصل بنا", "href": "/contact" },
    { "label": "National Initiatives", "labelAr": "المبادرات الوطنية", "href": "/initiatives" },
    { "label": "Emirates Centers", "labelAr": "مراكز الإمارات", "href": "/emirates" },
    { "label": "Privacy Policy", "labelAr": "سياسة الخصوصية", "href": "/privacy-policy" },
    { "label": "Terms & Conditions", "labelAr": "الشروط والأحكام", "href": "/terms-and-conditions" }
  ],
  "resources": [
    { "label": "Wedding Grants FAQ", "labelAr": "الأسئلة الشائعة لمنح الزواج", "href": "https://example.gov.ae/grants-faq" },
    { "label": "UAE Family Law Guide", "labelAr": "دليل قانون الأسرة في الإمارات", "href": "https://example.gov.ae/family-law" },
    { "label": "Housing Subsidy Portal", "labelAr": "بوابة دعم السكن", "href": "https://example.gov.ae/housing" },
    { "label": "Media Center & News", "labelAr": "مركز الإعلام والأخبار", "href": "/news" }
  ],
  "updated_at": "2026-09-14T10:30:00Z"
}
```

Field notes:

| Field | Required | Behavior when empty/missing |
| --- | --- | --- |
| `brandText` / `brandTextAr` | no | Falls back to `footer.brand` i18n string |
| `governmentInitiative(Ar)` | no | Falls back to `footer.governmentInitiative` |
| `quickLinksHeading(Ar)` | no | Falls back to `footer.quickLinks` |
| `resourcesHeading(Ar)` | no | Falls back to `footer.resources` |
| `contactsHeading(Ar)` | no | Falls back to `footer.contacts` |
| `builtForText(Ar)` | no | Falls back to `footer.builtFor` |
| `phone` / `email` / `address(Ar)` | no | Falls back to the current hardcoded contact values |
| `copyright(Ar)` | no | Falls back to `© {year} {footer.allRights}` |
| `quickLinks` / `resources` | no | Falls back to the current default link sets with localized labels |
| `labelAr` inside a link | no | When the site is in Arabic and `labelAr` is empty, the English `label` is used |
| `updated_at` | no | Informational only |

Any array entry with an empty `label` or `href` is skipped by the frontend, so
the admin can temporarily disable a link by clearing its URL.

## 3. Serializer + view (suggested)

```python
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response


class FooterLinkSerializer(serializers.ModelSerializer):
    labelAr = serializers.CharField(source="label_ar", required=False, allow_blank=True)

    class Meta:
        model = FooterLink
        fields = ["label", "labelAr", "href"]


class FooterSettingsSerializer(serializers.ModelSerializer):
    brandText = serializers.CharField(source="brand_text", required=False, allow_blank=True)
    brandTextAr = serializers.CharField(source="brand_text_ar", required=False, allow_blank=True)
    governmentInitiative = serializers.CharField(source="government_initiative", required=False, allow_blank=True)
    governmentInitiativeAr = serializers.CharField(source="government_initiative_ar", required=False, allow_blank=True)
    quickLinksHeading = serializers.CharField(source="quick_links_heading", required=False, allow_blank=True)
    quickLinksHeadingAr = serializers.CharField(source="quick_links_heading_ar", required=False, allow_blank=True)
    resourcesHeading = serializers.CharField(source="resources_heading", required=False, allow_blank=True)
    resourcesHeadingAr = serializers.CharField(source="resources_heading_ar", required=False, allow_blank=True)
    contactsHeading = serializers.CharField(source="contacts_heading", required=False, allow_blank=True)
    contactsHeadingAr = serializers.CharField(source="contacts_heading_ar", required=False, allow_blank=True)
    builtForText = serializers.CharField(source="built_for_text", required=False, allow_blank=True)
    builtForTextAr = serializers.CharField(source="built_for_text_ar", required=False, allow_blank=True)
    addressAr = serializers.CharField(source="address_ar", required=False, allow_blank=True)
    copyright = serializers.CharField(source="copyright", required=False, allow_blank=True)
    copyrightAr = serializers.CharField(source="copyright_ar", required=False, allow_blank=True)
    quickLinks = FooterLinkSerializer(source="quick", many=True, read_only=True)
    resources = FooterLinkSerializer(source="resources", many=True, read_only=True)
    updated_at = serializers.DateTimeField(read_only=True)

    class Meta:
        model = FooterSettings
        fields = [
            "brandText", "brandTextAr",
            "governmentInitiative", "governmentInitiativeAr",
            "quickLinksHeading", "quickLinksHeadingAr",
            "resourcesHeading", "resourcesHeadingAr",
            "contactsHeading", "contactsHeadingAr",
            "builtForText", "builtForTextAr",
            "phone", "email", "address", "addressAr",
            "copyright", "copyrightAr",
            "quickLinks", "resources",
            "updated_at",
        ]


@api_view(["GET"])
def footer_settings(request):
    settings = FooterSettings.load()
    return Response(FooterSettingsSerializer(settings).data)
```

URL routing (public, no auth — same as `/api/privacy/` and `/api/terms/`):

```python
# urls.py
path("footer-settings/", footer_settings, name="footer-settings"),
```

## 4. Frontend behavior (already implemented)

- `src/lib/api/settings.ts` — `getFooterContent()` fetches
  `${NEXT_PUBLIC_API_URL}/footer-settings/` with `revalidate: 60` and returns
  `null` on any failure.
- `src/components/layout/Footer.tsx` — renders backend values when present;
  per-field i18n fallback keeps the footer fully populated before the admin
  saves anything. Internal links (`/…`) render through localized `<Link>`,
  external links (`http…`) render as plain `<a>` with
  `target="_blank" rel="noopener noreferrer"`.
- Because the fetch is cached for 60s, admin changes appear on the user panel
  within about a minute (or immediately after a revalidation/deploy).

## 5. Admin panel checklist (Django admin)

To expose the footer as its own admin-panel tab/section:

1. Add the `FooterSettings` singleton model + `FooterLink` model from §1 and
   run migrations.
2. Register them in `admin.py` exactly as in §1.2 so the admin sidebar shows a
   **"Footer settings"** entry; opening it presents every editable footer
   string (brand text, initiative line, column headings, tagline, contact
   info, copyright) plus the Quick Links and Resources inline tables.
3. Keep the singleton behavior (`has_add_permission`/`has_delete_permission`)
   so there is exactly one editable settings page — it acts as the tab's
   single screen.
4. Every field is blank-able: when a field is left empty the user panel
   automatically falls back to the built-in i18n strings (§2), so the admin
   can translate/edit selectively (e.g. Arabic only) without breaking the
   footer.
