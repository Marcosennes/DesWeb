# Generated by Django 2.2.6 on 2019-10-29 01:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(db_index=True, max_length=200)),
                ('slug', models.SlugField(max_length=200, unique=True)),
            ],
            options={
                'db_table': 'categoria',
            },
        ),
        migrations.CreateModel(
            name='FotoCarousel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(blank=True, max_length=200, verbose_name='nome')),
                ('endereco', models.CharField(max_length=200, verbose_name='Imagem')),
            ],
            options={
                'db_table': 'fotoCarousel',
            },
        ),
        migrations.CreateModel(
            name='Produto',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(db_index=True, max_length=200)),
                ('slug', models.SlugField(max_length=200)),
                ('imagem', models.CharField(max_length=200)),
                ('descricao', models.TextField(blank=True)),
                ('preco', models.DecimalField(decimal_places=2, max_digits=10)),
                ('estoque', models.PositiveIntegerField()),
                ('disponivel', models.BooleanField(default=True)),
                ('likes', models.IntegerField(default=0, verbose_name='likes')),
                ('dislikes', models.IntegerField(default=0, verbose_name='dislikes')),
                ('categoria', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='produtos', to='coki_app.Categoria')),
            ],
            options={
                'db_table': 'produto',
            },
        ),
    ]
