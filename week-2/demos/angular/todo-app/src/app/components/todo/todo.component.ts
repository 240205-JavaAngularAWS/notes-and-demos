import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from '../../interfaces/ITodo';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  // This is a sample component that we can edit
  // All the functionality associated with this component will be stored inside of here

  // We need to tell Angular that this component should accept information from a parent component (aka we need to INPUT information into this component)

  @Input() todoInputted: ITodo = {
    id: 0,
    text: '',
    completed: false
  }
  // This is just a shell or default object that will hold the information from the parent component


  // We need to create a function that will be called when we click on the todo text
  // We'll worry about the styling later but for now I just want it to update the todo to be either completed or incomplete
  toggleCompleted(){
    // Inside this function we'll do our logic to toggle the value for completed
    this.todoInputted.completed = !this.todoInputted.completed
    console.log(`${this.todoInputted.text} was marked with completed=${this.todoInputted.completed}`)
  }


  // Let's create an event emitter
  @Output() deleteTodo = new EventEmitter();
  // NOTE: the name of the emitter will be the event the parent needs to listen for

  removeTodo(){
    // We want to assign this to a click event on the "delete Todo" button and use it to delete the todo
    // Current Problem: The todos are stored in the todo-list component (parent component)
    // and we have no way to tell them to remove this todo

    // Solution: Create an event emitter
    // An event emitter allows us to output an event from a child component that can be listened for by a parent component
    console.log(`Attempting to remove todo with id: ${this.todoInputted.id}`)
    // We'll need to emit an event and we can pass info from the child to the parent with the event object
    this.deleteTodo.emit(this.todoInputted);
  }
}
