const express = require('express');
const entityController = require('./controller/entityController');

const routes = express.Router();


/* === Entity === */
routes.get('/entities', entityController.findAll);

routes.get('/entity/:name', entityController.findByName);

routes.put('/entity', entityController.update);

routes.post('/entity', entityController.create);

routes.delete('/entity/:id', entityController.delete);


routes.get('/', (req,res) => {
    res.send('My Node App Base');
});


module.exports = routes;