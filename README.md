<h1> COMANDOS PARA SE CRIAR AS TABLES DO DB</h1>
1 yarn typeorm migration:create src/migrations/initialMigration
2 yarn typeorm migration:generate src/migrations/createTables -d src/data-source.ts
3 yarn typeorm migration:run -d src/data-source.ts