//http methods get, post, put, delete
/*  express parameters:

    Query Params: request.query (filtros, ordenação, paginação, ...)
    Route Params: request.params (Identficar um recurso na alteração ou remoção)
    Body Params: request.body (dados para criação ou alteração de um registro)
*/

const { Router } = require('express');
const routes = Router();
const DevController = require('./controllers/devController');
const SearchController = require('./controllers/searchController');

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);

module.exports = routes;