# Entity
Entity is a class that maps to a database table

# typeorm cli
ormconfig.json

## cli: {} 
1 - Em qual diretório devem ser criadas as Enitities
```json
"cli": {
   "entitiesDir": "src/entities"
}
```

1.1 - Comando para a criação das entities

```yarn
yarn typeorm entity:create -n User
```
