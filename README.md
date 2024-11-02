# Uso da aplicação

Será necessário rodar o comando build do docker para criar a imagem da aplicação, para isto em seu terminal execute o comando abaixo:

```
docker build -t front-theme-account .
```

Após o build ser completado, você pode inicializar a aplicação usando o comando abaixo:

```
docker run -p 4200:4200 front-theme-account
```
