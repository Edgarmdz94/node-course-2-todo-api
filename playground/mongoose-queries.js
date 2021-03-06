const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5bd780c45b284d1544038ec411';

if (!ObjectID.isValid(id)){
  console.log('ID not valid!');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) =>{
//   if (!todo){
//     return console.log('Not Found!');
//   }
//   console.log('Todo', todo);
// }).catch((e) => console.log(e));

User.findById('5bb7aa35fbeb275af4774c3a11').then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }

  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
