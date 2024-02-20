import { Component } from '@angular/core';
import { ITodo } from '../../interfaces/ITodo';
import { TodoService } from '../../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { IList } from '../../interfaces/IList';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  // Things to note: This is a class and has associated lifecycle hooks that we can connect to
  // We can define fields and functions inside of here just as we would in normal TS/JS
  // The additional lifecycle methods will be explored next week (constructor, ngOnInit)

  listName: string = ""

  todos: ITodo[] = [
    // {
    //   id: 1,
    //   text: "Do the dishes",
    //   completed: true
    // },
    // {
    //   id: 2,
    //   text: "Take out the trash",
    //   completed: false
    // },
    // {
    //   id: 3,
    //   text: "Pack for trip",
    //   completed: false
    // },
    // {
    //   id: 4,
    //   text: "Make dinner",
    //   completed: false
    // },
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
    // this.todos = this.todos.filter((todo) => {
    //   // Recall that anything that returns true from this will still be in the list, but if it returns false, it will be "caught" by the filter and not carried on
    //   if (todo.id == $event.id){
    //     return false;
    //   } else{
    //     return true;
    //   }
    // })

    // Swap out the filter to actually send a delete request through the todo service

    // Here we'll need to call the method defined in the service, subscribe to it and then do something with the data
    this.todoService.deleteTodoById($event.id).subscribe((data) => {
      // Here is where we'll check the data, recall that it's a boolean
      if (data){
        console.log("Successfully deleted!")

        // Problem: Component didn't update with appropriate info after request was sent
        this.ngOnInit()
      } else{
        console.log("Could not delete!")
      }
    })

  }


  // counter: number = 5;
  newTodoText: string = ""
  hide: boolean = true;

  // We want to bind a click event to start creating a new todo
  createNewTodo(){
    // console.log("clicked!")
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
      id: 0,
      text: this.newTodoText,
      completed: false
    }

    // So we have our sample object now we just to push to the array
    // this.todos.push(newTodo);

    // Clear any inputs we had
    // this.newTodoText = ""
    // this.hide = true


    // So here we'll call upon our todo service to create a todo with the appropriate details
    // From here we should get the todo object itself and the list number
    let listId:number = Number(this.activatedRoute.snapshot.params['listId']);
    this.todoService.createNewTodo(newTodo, listId).subscribe((data) => {
      // There's not much we needed to do when creating a new todo, the major important thing would be to refresh the page and make sure our contents are cleared
      this.ngOnInit()
      this.newTodoText = ""
      this.hide = true
    })
  }


  // Update todo event handler
  updateTodo($event: ITodo){
    // Here we'll have received the todo and will need to send the appropriate request to the backend to update it

    // We send the request in the todo Service, we subscribe to the request and do something with the result here
    // The "do something" we need to do with the result in this case is just refresh our list so the todos are loaded with their proper state
    this.todoService.updateTodo($event).subscribe((data) => {
      this.ngOnInit();
    })
  }



  constructor(private todoService: TodoService, private activatedRoute: ActivatedRoute){
    // ActivedRoute gives me information about the route that we're on
  }

  ngOnInit(){
    let listId:number = Number(this.activatedRoute.snapshot.params['listId']);
    // I Want the list name to appear too

    // let list: IList = this.todoService.getListById(listId);
    // this.listName = list.title;
    // this.todos  = list.todos;

    this.todoService.getListById(listId).subscribe((data) =>{
      this.listName = data.title;
      this.todos = data.todos;
    }
    )
  }

}
