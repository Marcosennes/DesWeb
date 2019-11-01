from django.db import models
from django.urls import reverse

class Categoria(models.Model):
    nome = models.CharField(max_length=200, db_index=True)
    slug = models.SlugField(max_length=200, db_index=True, unique=True)

    class Meta:
        db_table='categoria'

    def get_absolute_path(self):
        return reverse('produto:lista_produtos_por_categoria', args=[self.slug])

    def __str__(self):
        return self.nome

class Produto(models.Model):
    categoria = models.ForeignKey(Categoria, related_name='produtos', on_delete=models.DO_NOTHING)
    nome = models.CharField(max_length=200, db_index=True)
    slug = models.SlugField(max_length=200, db_index=True)
    imagem = models.CharField(max_length=200)
    descricao = models.TextField(blank=True)
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    estoque = models.PositiveIntegerField()
    disponivel = models.BooleanField(default=True)
    likes = models.IntegerField('likes', default=0)
    dislikes = models.IntegerField('dislikes', default=0)

    class Meta:
        db_table = 'produto'

    def get_absolute_path(self):
        return reverse('produto:exibe_produto', args=[self.id, self.slug])

    def __str__(self):
        return self.nome

class FotoCarousel(models.Model):
    nome = models.CharField('nome', max_length=200, blank=True)
    endereco = models.CharField('Imagem', max_length=200)
    objects = models.Manager()

    class Meta:
        db_table = 'fotoCarousel'

    # def get_absolute_path(self):
    #     return reverse('estetica:facial')

    def __str__(self):
        return self.nome

class Foto(models.Model):
    nome = models.CharField('nome', max_length=200, blank=True)
    endereco = models.CharField('Foto', max_length=200)
    objects = models.Manager()

    class Meta:
        db_table = 'foto'

    def __str__(self):
        return self.nome