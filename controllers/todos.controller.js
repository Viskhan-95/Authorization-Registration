const Todo = require('../models/Todo.model');

module.exports.todosController = {

    createTodo: async (req, res) => {
        const { text } = req.body;

        try {
            const todo = await Todo.create({
                user: req.user.id,
                text,
            });

            return res.json(todo);

        } catch (e) {
            return res.status(401).json({error: 'Неверный токен'})
        }
    },
    fetchTodos: async (req, res) => {
        const { id } = req.params;
        try {
            const todo = await Todo.find({user: id});
            return res.json(todo);
        } catch (err) {
            res.json({error: err.message})
        }
    },

    removeTodo: async (req, res) => {
        const { id } = req.params;

        try {
            const todo = await Todo.findById(id);

            if (todo.user.toString() === req.user.id) {
                await todo.remove();
                
                return res.json('deleted');
            }

            return res.status(401).json({error: 'Error. No access'})

        } catch (err) {
            return res.status(401).json({error: "Ошибка: " + err.toString()});
        }
    },

    updateFavoriteTodo: async (req, res) => {
        try {
            const todo = await Todo.findByIdAndUpdate(req.params.id, {
                favorite: req.body.favorite
            }, { new: true });
            res.json(todo)
        } catch (err) {
            res.json({error: err.message})
        }
    },

    updateCompletedTodo: async (req, res) => {
        try {
            const todo = await Todo.findByIdAndUpdate(req.params.id, {
                completed: req.body.completed
            }, { new: true });
            res.json(todo)
        } catch (err) {
            res.json({error: err.message})
        }
    },
}