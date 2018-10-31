var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// 'mongodb://edgarmendoza:1234abcd@ds245523.mlab.com:45523/my-todo-db'
mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true });

module.exports = {
  mongoose
}
