var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// 'mongodb://edgarmendoza:1234abcd@ds245523.mlab.com:45523/my-todo-db'
mongoose.connect('mongodb://edgarmendoza:1234abcd@ds245523.mlab.com:45523/my-todo-db' || 'mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });

module.exports = {
  mongoose
}
