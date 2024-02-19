import { Component, Input } from '@angular/core';
import { IList } from '../../interfaces/IList';
import { Router } from '@angular/router';

@Component({
  selector: 'list-icon',
  templateUrl: './list-icon.component.html',
  styleUrl: './list-icon.component.css'
})
export class ListIconComponent {

  @Input() listInputted: IList ={
    id: 0,
    title: '',
    owner: {
      username: '',
      password: ''
    },
    todos: []
  }

  rerouteToTodoList(){
    // This method wants us to route, so we need to use a router
    this.router.navigate([`lists/${this.listInputted.id}`])
  }

  constructor(private router: Router){

  }

}
