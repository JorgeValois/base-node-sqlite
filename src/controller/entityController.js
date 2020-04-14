const crypto = require('crypto');
const connection = require('../database/connection');
const generateUniqueId = require('../util/generateUniqueId');

module.exports = {

    async findAll(request, response) {
        const {page = 1} = request.query;
        const [count] = await connection('entity').count();
        const entities = await connection('entity').select('*')
        .limit(5)
        .offset((page - 1) * 5);;
    
        response.header('X-Total-Count', count['count(*)']);

        return response.json(entities);
    },

    async create(request,response) {
        const {name} = request.body;

    const id = generateUniqueId(4);

    await connection('entity').insert({
        id,
        name,
    })
    
    return response.json({id})
    },

    async findByName(request,response){
        const {name} = request.params;
        const entity = await connection('entity').select('*').where('name', name).first();

         response.json(entity); 
    },

    async delete(request,response){
        const {id} = request.params;

        await connection('entity').where('id',id).delete();

        response.status(204).send();
    },

    async update(request,response){
        const {id,name} = request.body;
        const entity = await connection('entity').where('id', id).update({name: name});

        response.json(entity);
    },

 
}