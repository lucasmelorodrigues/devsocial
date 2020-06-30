const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');
const Userscontroller = require('./controllers/UsersController');

const routes = express.Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store) ;

routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

routes.post('/users', Userscontroller.store );


module.exports = routes;