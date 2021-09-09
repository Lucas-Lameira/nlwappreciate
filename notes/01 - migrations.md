# Migrations
Controle de versionamento de tabelas.
**A migration is just a single file with sql queries to update a database schema and apply new changes to an existing database.**

# typeorm cli
ormconfig.json

## cli: {} 
1 - Em qual diretório devem ser criadas as migrations
```json
"cli": {
   "migrationsDir": "src/database/migrations"
}
```

1.1 - Comando para a criação das migration
```yarn
yarn typeorm migration:create -n CreateUsers
```


2 - Em qual diretório devem ser executadas das migration
```json
"migrations": [
   "src/database/migration/*.ts"
]
```

2.1 - Comando para a execução das migration
```yarn
yarn typeorm migration:run
```

## script: {} 
```json
"sripts": {
   "typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"
}
```

## Create migration
O numero gigante que nomeia o arquivo é o timestamp, quando foi criado. Serve como registro pra saber qual a ordem de migration a ser executada

## revert migration
Reverts the last migration
```yarn
yarn typeorm migration:revert
```