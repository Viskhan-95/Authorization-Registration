const { Router } = require('express');

const route = Router();

route.use(require('./todos.route'));
route.use(require('./users.route'));

module.exports = route;