# base-node-sqlite
 An Node application base with sqlite connected. Made to be a guide or a quick start to new applications
 
 # Passo a Passo (English Below)
 === Para Criar a Estrutura da Aplicação ===<br/>
#Crie a estrutura base do node com o npm<br/>
npm init -y<br/>

#Instale a Dependência Express<br/>
npm install epress<br/>

#Crie o arquivo principal da Aplicação<br/>
no caso server.js<br/>

#Para executar a aplicação<br/>
node <arquivoPrincipal>.js<br/>

// OPCIONAL<br/>
#Podemos utilizar o Nodemon para atualizar a aplicação automaticamente (apenas em desenvolvimento)<br/>
npm instal nodemon -D<br/>

#Para utilizar, crie um script de inicialização<br/>
"dev": "nodemon server.js"<br/>

#A partir de agora podemos executar a aplicação com o comando<br/>
npm run dev<br/>

=== Rotas ===<br/>
#No arquivo principal vamos criar as nossas rotas<br/>
app.<comandoRota>((req,res) => {funcao});<br/>

=== Banco de Dados ===<br/>
Usaremos KNEX.js : http://knexjs.org/<br/>
npm install knex<br/>

#Selecionar o drive<br/>
npm install sqlite3<br/>

#Criar a comumicação com o db<br/>
npx knex init<br/>

Organizar as rotas (routes.js)<br/>

Criar Diretório de migrações.<br/>
#Migrações funcionam como formas de criar tabelas mantendo um histórico simulando um controle de versões do db. <br/>

npx knex migrate:status -> mostra todas as funções do knex migrate<br/>

Definir lugar das migrações: knex.js<br/>

Criar migração:<br/>
npx knex migrate:make nome_migrate<br/>

criar os schemas na migrate<br/>
npx knex migrate:latest<br/>

Criar as entidades, controllers e rotas<br/>

# Step by Step


