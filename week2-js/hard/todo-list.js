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
     update(index, updatedTodo){
          
          const currTodod = {};
          for(let i=0;i<todos.length; i++){
               const ithTodo = todos.at(i);               
               if(ithTodo['id'] == index){
                    console.log(ithTodo['id']);
                    
                    todos[i] = updatedTodo
                    break;
               }
          }

     }
     remove(index){
          console.log(index);
          let removed = todos.splice(index,1);
          console.log("REMOVED ELE", removed);
          
     }
     get(index){
          return todos[index];
     }
     getAll(){
          return todos;
     }
     clear(){
          while(todos.length >0) {
               todos.pop()
          }
     }

}

// console.log(todos);
const newTodo = new Todo();
const todo1 = {
     title:"Drinking",
     status: false,
     id:1
}
newTodo.add(todo1);
// console.log(todos);

const todo2 = {
     title:"workout",
     status: false,
     id:2
}
newTodo.add(todo2)
// console.log(todos);

const todo3 = {
     title:"Jogging",
     status: true,
     id:2
}
console.log("TODO before Updation", todos);

newTodo.update(2,todo3);
console.log("Final Todo", todos);


// newTodo.remove(1)
// console.log("AFter Remiving", todos);

const indexData = newTodo.get(1);
console.log(indexData);


newTodo.clear();
console.log(todos);


// module.exports = Todo;