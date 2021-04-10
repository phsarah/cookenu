# Cookenu :shallow_pan_of_food:	

<a id="en-readme"></a>
### English | [Português](#pt-readme)
Back-end project developed in Labenu's bootcamp. \
Cookenu is a REST API for create recipes and meeting food-loving people! :woman_cook:	

<a name="en-menu"></a>
- [Documentation](#documentacao)
- [Getting Started](#steps)
- [Available Scripts](#en-scripts)
- [Features](#features)
- [Libraries and Frameworks](#libs)


<a id="documentation"></a>
## ♦ Documentation


<a id="steps"></a>
## ♦ Getting Started
1- Clone this repository

2- Run this command
```
npm install
```
3- Create .env file on the root directory of the project with this data:
```
// your database

DB_HOST = 
DB_USER =
DB_PASSWORD = 
DB_DATABASE_NAME = 

// your key and time expire preferences

JWT_KEY =
JWT_EXPIRES_IN = 

// your cost preference

BCRYPT_COST = 
```
4- Run this command
```
npm run setup
```
5- Now this little commander (I promise it's the last one)
```
npm start
```
6- Next step ... i'm kidding, go to coding. :unicorn:

<a id="en-scripts"></a>
## ♦ Available Scripts:
* `npm run setup` to create tables
* `npm run start` to run the aplication
* `npm run dev` to run the aplication with hot reload

<a id="features"></a>
## ♦ Features

- Log in
- Sign up **user roles and cryptography**
- Get your own profile data through the token
- Get data from another user's profile through the Id
- Create recipes
- Get recipes by id
- Follow user
- Unfollow user 
- Show recipe feed

<a id="libs"></a>
## ♦ Libraries and Frameworks:

- mysql
- uuid
- dayjs
- cors
- knex
- express
- dotenv
- bcryptjs
- jsonwebtoken

*Developed with 🧡 by Sarah Hessel*

-------
<a id="pt-readme"></a>
### [English](#en-readme) | Português
Projeto back-end desenvolvido no bootcamp da Labenu. \
Cookenu é uma API REST para criar receitas e conhecer pessoas que gostam de comida! :woman_cook:	

<a name="pt-menu"></a>
- [Documentação](#documentacao)
- [Primeiros Passos](#passos)
- [Scripts Disponíveis](#pt-scripts)
- [Funcionalidades](#funcionalidades)
- [Bibliotecas e Frameworks](#bibliotecas)


<a id="documentacao"></a>
## ♦ Documentação

<a id="passos"></a>
## ♦ Primeiros Passos
1- Clone ese repositório

2- Rode o comando abaixo
```
npm install
```
3- Crie um arquivo .env na raíz do projeto com esses dados:
```
//dados do seu banco

DB_HOST =
DB_USER =
DB_PASSWORD = 
DB_DATABASE_NAME = 

//suas preferências para key e expire

JWT_KEY =
JWT_EXPIRES_IN = 

//suas preferências de cost

BCRYPT_COST = 
```
4- Rode esse comando:
```
npm run setup
```
5- Agora esse comandinho (prometo que é o ultimo)
```
npm start
```
6- Proximo passo... brincadeirinha, vá codar. :unicorn:	

<a id="pt-scripts"></a>
## ♦ Scripts Disponíveis:
* `npm run setup` para criar as tabelas
* `npm run start` para rodar a aplicação
* `npm run dev` para iniciar a aplicação com hot reload

<a id="funcionalidades"></a>
## ♦ Funcionalidades:

- Login
- Cadastro com **user roles e criptografia**
- Pegar dados do próprio perfil através do token
- Pegar dados do perfil de outro usuário através do Id
- Criar receitas
- Pegar receitas pelo id
- Seguir usuário (follow)
- Deixar de seguir usuário (unfollow)
- Mostrar feed de receitas

<a id="bibliotecas"></a>
## ♦ Bibliotecas e Frameworks:

- mysql
- uuid
- dayjs
- cors
- knex
- express
- dotenv
- bcryptjs
- jsonwebtoken

*Desenvolvido com 🧡 por Sarah Hessel*
