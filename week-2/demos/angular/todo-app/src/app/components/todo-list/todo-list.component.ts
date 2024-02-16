import { Component } from '@angular/core';
import { ITodo } from '../../interfaces/ITodo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  // Things to note: This is a class and has associated lifecycle hooks that we can connect to
  // We can define fields and functions inside of here just as we would in normal TS/JS
  // The additional lifecycle methods will be explored next week (constructor, ngOnInit)

  todos: ITodo[] = [
    {
      id: 1,
      text: "Do the dishes",
      completed: true
    },
    {
      id: 2,
      text: "Take out the trash",
      completed: false
    },
    {
      id: 3,
      text: "Pack for trip",
      completed: false
    },
    {
      id: 4,
      text: "Make dinner",
      completed: false
    },
  ]


  // How do we start getting this info onto the page itself?
  // Answer: Data Binding!

  // Angular has support for a couple different ways to data bind (controlling a relationship between the HTMl and TS files)
  //    1. String interpolation (used to render variable text on the page): {{}}
  //    2. Property Binding (used to associate properties with variables in ts file): []
  //    3. Event Binding (used to link events and functions (think event listeners)): ()
  //    4. Two-Way Data Binding (mainly used to collect user input): [()]

  // Now we need to make a function that will operate when we get a deleteTodo event
  removeTodoFromList($event: ITodo){
    // Now this should allow me to see the todo that needs to be deleted
    console.log(`Todo-list component received event to delete todo with id: ${$event.id}`)

    // Now we just need to delete the todo itself
    this.todos = this.todos.filter((todo) => {
      // Recall that anything that returns true from this will still be in the list, but if it returns false, it will be "caught" by the filter and not carried on
      if (todo.id == $event.id){
        return false;
      } else{
        return true;
      }
    })

  }


  counter: number = 5;
  newTodoText: string = ""
  hide: boolean = true;

  // We want to bind a click event to start creating a new todo
  createNewTodo(){
    // Goal -> Extract value of newTodoText and create a todo for it
    // console.log(this.newTodoText)
    // We'll check to see if the todo entry has a length greater than zero, if so we can add it, otherwise we'll display an error message
    if (!this.newTodoText){
      // console.log("Text is blank")
      // TODO add in error message
      this.hide = false;
      return;
    } 

    // Now we're at the part where we try to create the new todo
    let newTodo: ITodo ={
      id: this.counter++,
      text: this.newTodoText,
      completed: false
    }

    // So we have our sample object now we just to push to the array
    this.todos.push(newTodo);

    // Clear any inputs we had
    this.newTodoText = ""
    this.hide = true
  }


}
