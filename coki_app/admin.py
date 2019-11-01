from django.contrib import admin

from .models import Produto, Categoria, FotoCarousel, Foto

admin.site.register(Produto)
admin.site.register(Categoria)
admin.site.register(FotoCarousel)
admin.site.register(Foto)