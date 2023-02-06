##Projeto Desafio Back End

Este projeto foi criado utilizando NodeJS, ExpressJS, TypeScript. 

O mesmo tem o intuito de gerar um DataBase que co-relacione um ou mais usuario a uma lista de contatos.

Se encontra hospedado no Railway.

E conseguimos testar atráves deste link (desafiofullstack-fredrook-production.up.railway.app)


<h1> COMANDOS PARA SE CRIAR AS TABLES DO DB</h1>
1 yarn typeorm migration:create src/migrations/initialMigration
2 yarn typeorm migration:generate src/migrations/createTables -d src/data-source.ts
3 yarn typeorm migration:run -d src/data-source.ts
