/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

const todos = []
     

class Todo {

     add(todo){
          todos.push(todo);
     }

     

}

console.log(todos);
const newTodo = new Todo();
const todo1 = {
     title:"Drinking",
     status: false,
     id:1
}
newTodo.add(todo1);
console.log(todos);

const todo2 = {
     title:"workout",
     status: false,
     id:2
}



// module.exports = Todo;