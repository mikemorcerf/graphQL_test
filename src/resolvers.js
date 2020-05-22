const Todo = require('./Todo');

module.exports = {
  Query: {
    todos: () => Todo.find(),

    todo: (_, { id }) => Todo.findById(id)
  },

  Mutation: {
    createTodo: (_, { description }) => Todo.create({ description, checked: false }),

    checkedTodo: (_, {id, checked}) => Todo.findByIdAndUpdate(id, {checked: checked}),

    updateTodo: (_, {id, description}) => Todo.findByIdAndUpdate(id, {description: description}),

    deleteTodo: (_, {id}) => Todo.findByIdAndDelete(id).then()
  }
};
