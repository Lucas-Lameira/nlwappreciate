# Service
Camada de serviço é responsável por:

- validação
- verificação

**Isso deve ser feito antes que a requisição seja enviada para o banco de dados ou trataiva para retornar para o cliente**

<p>
-Deve conter as regras de negócio?
-Deve conter os casos de uso?
-Deve conter os requisitos funcionais?
-Deve conter os requisitos não-funcionais?
</p>

Portanto toda regra da aplicação precisa estar em uma camada, nesse caso a de services


## fluxo 
server -> controller ->  Service -> Repositories -> Banco de dados