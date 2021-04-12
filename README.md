# Cookenu

## ESTRUTURA DE DADOS  
  
* ## Cadastro
  * name
  * email
  * password (6 caracteres)

---

**Método:** POST **Path:** `/signup`

**Entradas:**

Body

```json
{
	"name": "Aisha",
	"email": "aisha@winx.com",
	"password": "123456"
}

```

**Saídas**

Body

```json
{
	"access_token": "token de acesso"
}

---

* ## Login

  * email
  * password (6 caracteres)


**Método:** POST
**Path:** `/login`

**Entradas:**

Body

```json
{
	"email": "bloom@wix.com",
	"password": "123456"
}
```

**Saídas**

Body

```json
{
	"access_token": "token de acesso"
}
```

---

* ## Pegar informações do próprio perfil 

  * token

  **Método:** GET
**Path:** `/user/profile`

**Entradas:**

Headers

```
Authorization: "token de autenticação"
```

**Saídas**

Body

```json
{
	"id": "id do usuário",
	"name": "Tecna",
	"email": "tecna@winx.com"
}
```
---

* ## Pegar informações de outro perfil 

  * id (de outro usuário)
  * token


  **Método:** GET
**Path:** `/user/:id`

**Entradas:**

Path Param

```
id: "id do usuário"
```

Headers

```
Authorization: "token de autenticação"
```

**Saídas**

Body

```json
{
	"id": "id do usuário",
	"name": "Flora",
	"email": "flora@winx.com"
}
```
---

* ## Criar receita

  * token


**Método:** POST
**Path:** `/recipe`

**Entradas:**

Headers

```
Authorization: "token de autenticação"
```

Body

```json
{
	"title": "título da receita",
	"description": "descrição da receita"
}
```
---

* ## Pegar receita

  * id
  * token

  **Método:** GET
**Path:** `/recipe/:id`

**Entradas:**

Path Param

```
id: "id da receita"
```

Headers

```
Authorization: "token de autenticação"
```

**Saídas**

Body

```json
{
	"id": "id da receita",
	"title": "Cake Fairy",
	"description": "Pega o ovo, a farinha, um pouquinho de leite, pó de pirlim pim pim e bota pra assar!",
	"cratedAt": "31/12/2020"
}
```

## TABELAS MYSQL 

CREATE TABLE cookenu_signup(
	id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(6) NOT NULL
);

CREATE TABLE cookenu_recipes(
	id VARCHAR(255) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  date_of_creation DATE NOT NULL, 
  creator_id VARCHAR(255) NOT NULL,
	FOREIGN KEY (creator_id) REFERENCES cookenu_users(id)
);
