const { Router } = require('express');
const { todosController } = require('../controllers/todos.controller');
const authMiddleware = require('../models/middlewares/auth.middleware');

const route = Router();

route.get('/todos/fetch/:id', authMiddleware, todosController.fetchTodos);
route.post('/todos/add', authMiddleware, todosController.createTodo);
route.delete('/todos/remove/:id', authMiddleware, todosController.removeTodo);
route.patch('/todos/update/favorite/:id', authMiddleware, todosController.updateFavoriteTodo);
route.patch('/todos/update/completed/:id', authMiddleware, todosController.updateCompletedTodo);

module.exports = route;