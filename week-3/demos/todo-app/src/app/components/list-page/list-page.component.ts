import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { IList } from '../../interfaces/IList';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent {

  lists: IList[] = []

  constructor(private todoService: TodoService){
  }

  // We want to initialize the value of the lists array with the information from the todoService
  // It might seem like we need to do this during the constructor but actually we'll use this during a method called ngOnInit()
  ngOnInit(){
    // we use the ngOnInit lifecycle method to control the initiliazation for our variables
    // this.lists = this.todoService.getListsByUser()
    // ^ Doesn't work because it's not an observable result from a request

    this.todoService.getListsByUser()
    .subscribe((data) => {
      console.log(data)
      this.lists = data
    });
  }

}
