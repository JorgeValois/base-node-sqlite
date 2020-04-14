# base-node-sqlite
 An Node application base with sqlite connected. Made to be a guide or a quick start to new applications
 
 # Passo a Passo (English Below)
 === Para Criar a Estrutura da Aplicação ===
#Crie a estrutura base do node com o npm
npm init -y

#Istale a Dependência Express
npm install epress

#Crie o arquivo principal da Aplicação
no caso server.js

#Para executar a aplicação
node <arquivoPrincipal>.js

// OPCIONAL
#Podemos utilizar o Nodemon para atualizar a aplicação automaticamente (apenas em desenvolvimento)
npm instal nodemon -D

#Para utilizar, crie um script de inicialização
"dev": "nodemon server.js"

#A partir de agora podemos executar a aplicação com o comando
npm run dev

=== Rotas ===
#No arquivo principal vamos criar as nossas rotas
app.<comandoRota>((req,res) => {funcao});

=== Banco de Dados ===
Usaremos KNEX.js : http://knexjs.org/
npm install knex

#Selecionar o drive
npm install sqlite3

#Criar a comumicação com o db
npx knex init

Organizar as rotas (routes.js)

Criar Diretório de migrações.
#Migrações funcionam como formas de criar tabelas mantendo um histórico simulando um controle de versões do db. 

npx knex migrate:status -> mostra todas as funções do knex migrate

Definir lugar das migrações: knex.js

# Step by Step

Criar migração:
npx knex migrate:make nome_migrate

criar os schemas na migrate
npx knex migrate:latest

Criar as entidades, controllers e rotas
