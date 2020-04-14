<h1>base-node-sqlite</h1>
Uma base de aplicação node com bd sqlite conectado. Feito para ser um guia ou um rápido inicio para criar novas aplicações.
 An Node application base with sqlite db connected. Made to be a guide or a quick start to create new applications.
 
 # Passo a Passo (English Below)
 <h2> === Para Criar a Estrutura da Aplicação ===</h2> <br/>
## Crie a estrutura base do node com o npm<br/>
npm init -y<br/>

## Instale a Dependência Express<br/>
npm install epress<br/>

## Crie o arquivo principal da Aplicação<br/>
no caso server.js<br/>

## Para executar a aplicação<br/>
node <arquivoPrincipal>.js<br/>

// OPCIONAL<br/>
## Podemos utilizar o Nodemon para atualizar a aplicação automaticamente (apenas em desenvolvimento)<br/>
npm instal nodemon -D<br/>

## Para utilizar, crie um script de inicialização<br/>
"dev": "nodemon server.js"<br/>

## A partir de agora podemos executar a aplicação com o comando<br/>
npm run dev<br/>

=== Rotas ===<br/>
## No arquivo principal vamos criar as nossas rotas<br/>
app.<comandoRota>((req,res) => {funcao});<br/>

=== Banco de Dados ===<br/>
## Usaremos KNEX.js : http://knexjs.org/<br/>
npm install knex<br/>

## Selecionar o drive<br/>
npm install sqlite3<br/>

## Criar a comumicação com o db<br/>
npx knex init<br/>

## Organizar as rotas (routes.js)<br/>

## Criar Diretório de migrações.<br/>

// Migrações funcionam como formas de criar tabelas mantendo um histórico simulando um controle de versões do db. <br/>

npx knex migrate:status -> mostra todas as funções do knex migrate<br/>

Definir lugar das migrações: knex.js<br/>

## Criar migração:<br/>
npx knex migrate:make nome_migrate<br/>

## criar os schemas na migrate<br/>
npx knex migrate:latest<br/>

## Criar as entidades, controllers e rotas<br/>

# Step by Step

=== To create an application structure === <br/>
## Create a base node structure with npm <br/>
npm init -y <br/>

## Install a Dependency Express <br/>
npm install epress <br/>

## Create the main application file <br/>
in the case server.js <br/>

## To run the application <br/>
<mainfile> .js node <br/>

// OPTIONAL <br/>
## We can use Nodemon to update an application automatically (only in development) <br/>
npm instal nodemon -D <br/>

## To use, create a startup script <br/>
"dev": "nodemon server.js" <br/>

## From now we can run the application with the command <br/>
npm run dev <br/>

=== Routes === <br/>
## In the main file we will create our routes <br/>
app. <commandRout> ((req, res) => {function}); <br/>

=== Database === <br/>
## We will use KNEX.js: http://knexjs.org/ <br/>
npm install knex <br/>

## Selecting the drive <br/>
npm install sqlite3 <br/>

## Create a common application with db <br/>
npx knex init <br/>

## Organize the routes (routes.js) <br/>

## Create migration directory. <br/>
//Migrations work as a way to create tables kept a history simulating db version control. <br/>

npx knex migrate: status -> shows all the functions of the knex migrate <br/>

## Set migration location: knex.js <br/>

## Create migration: <br/>
npx knex migrate: make nome_migrate <br/>

## create migration schemas <br/>
npx knex migrate: latest <br/>

## Create entities, controllers and routes <br/>
