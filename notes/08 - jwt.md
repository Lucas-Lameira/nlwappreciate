# Json Web Token
yarn add jsonwebtoken
yarn add @types/jsonwebtoken -D


## header
- algoritmo
- tipo do token


## payload
- infos criptografadas dentro do token (user, email, id, whatever)
- tempo de expiração
- **Não passar informações sensíves (senhas)**


# verify signature
- concatenar header and payload
- chave secreta



# dados pra login
email e senha

- verificar se email existe
   from repositorie **findOne()**

- verificar se senha está correta
   use **compare()** from bcryptjs

- gerar token
   **sign**
      payload: infos
      secret: some hash or something,
      subject: the id
      expiresIn: tempo de expiração do token
