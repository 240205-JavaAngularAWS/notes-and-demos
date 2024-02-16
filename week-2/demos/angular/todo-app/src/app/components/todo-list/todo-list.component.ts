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

}
