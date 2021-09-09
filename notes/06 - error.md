## fluxo 
server chama controller, controller chama service ....
server -> router -> controller ->  Service -> Repositories -> Banco de dados

# esquema de error
Service lança o error ou a exceção, quando ele acontece...
quem recebe o error é o controller...
portanto, quem deve tratar a exceção é, e a camada de cima, nessa caso o controller


# como fazer a tratativa
## 1 - forma: Try Catch
usar o try catch no controller e retornar o error por lá, caso ele acontece

## 2 - forma: tratar na camadad de server com um middleware
lançar a excessão na camada de services, e tratar o erro somente na camada de server, com os middlewares do express
server -> router -> controller ->  Service -> Repositories -> Banco de dados
