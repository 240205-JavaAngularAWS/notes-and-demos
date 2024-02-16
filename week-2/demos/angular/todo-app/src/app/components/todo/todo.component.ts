import { Component, Input } from '@angular/core';
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
}
