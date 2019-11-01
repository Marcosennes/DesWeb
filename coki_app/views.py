from django.contrib import messages
from django.http import Http404, HttpResponse
from django.shortcuts import get_object_or_404, render, redirect
from .models import Categoria, Produto, FotoCarousel, Foto

def index(request):
   fotos_carousel = FotoCarousel.objects.all()
   fotos = Foto.objects.all()
   return render(request, 'coki_app/index.html', {'fotos_carousel': fotos_carousel, 'fotos': fotos})

def exibe_produto(request, id, slug_do_produto):
   produto = get_object_or_404(Produto, id=id)
   return render(request, 'coki_app/exibe.html', {'produto': produto})

'''
def lista_produtos(request, slug_da_categoria=None):
   categoria = None
   categorias = Categoria.objects.all().order_by("nome")
   produtos = Produto.objects.filter(disponivel=True).order_by("nome")
   if slug_da_categoria:
      categoria = get_object_or_404(Categoria, slug=slug_da_categoria)
      produtos = produtos.filter(categoria=categoria).order_by("nome")

   return render(request, 'coki_app/lista.html', {'categorias': categorias,
                                                 'produtos': produtos,
                                                 'categoria': categoria})
'''