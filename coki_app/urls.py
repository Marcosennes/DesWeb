from django.urls import path
from . import views

app_name = 'coki_app'

urlpatterns = [
    path( '' , views.index , name = 'index' ),
        # http://localhost:8000/6/smartphone-samsung-galaxy-s8-plus/
    path('<int:id>/<slug:slug_do_produto>/', views.exibe_produto, name='exibe_produto')
]



