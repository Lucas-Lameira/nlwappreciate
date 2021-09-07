# Types of Params
Tipos de parametros de **requisições**

## **Route Params**
Parametros que fazem parte da rota!

```txt
http://localhost:3000/products/12
```

Aqui estão os dois parâmetros de rota <br>
/products = recurso <br>
/12 = id do produto <br>

São interessantes para:
- Busca por ID
- Alterar uma informação

### Exemplo no **express.js**:

```javascript
app.get("/products/{id}", (request, response) => {
   
   //Pega o id que está na rota
   const id = request.params.id;
})
```

## **Query params**
Parametros que fazem parte de uma query. Para iniciar um query param coloque um '?' na rota seguido de consultas **chave=valor**. Para inserir mais campos na busca, deve-se inserir o **&** dps de cada "**chave=valor**"

```txt
http://localhost:3000/products?name=cerveja&description=bebida
```

### Parâmetros Query<br> <!-- consider a table -->
**? == Iniciar a query** <br>
**name=cerveja == chave-valor** <br>
**& == inserir mais campos na query** <br>
**description=bebida == chave-valor** <br>


São interessantes para:
- filtros

### Exemplo no **express.js**:

```javascript
app.get("/products", (request, response) => {
   const id = request.query;/* check if this is right */
})
```

## query != route
* query params são parâmetros não obrigatórios, ou seja, a rota pode ou não recebe-los
* query params não ficam explicitos no app.get()


## Body params

Parâmetros que vem no corpo da requisição.

Parametros utilizados nos metodos: 
- **post** 
- **put**
- **patch**


### Exemplo no **express.js**:
```javascript
app.get("/products", (request, response) => {
   const id = request.body;/* check if this is right */
})
