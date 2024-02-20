import { CanActivateFn, Router } from '@angular/router';
import { TodoService } from '../services/todo.service';
import { inject } from '@angular/core';

export const listAccessGuard: CanActivateFn = (route, state) => {
  // We need to check our route to make sure this route is in the list of available routes
  let todoService: TodoService = inject(TodoService);

  // Now that we have our todo service we will pull the array of available lists and verify the id we're trying to access exists in that list
  let availableTodoLists = todoService.getListsByUser();
  let activatedListId = route.params["listId"]

  // for (let todoList of availableTodoLists){
  //   // We'll check the id
  //   if (todoList.id == activatedListId){
  //     return true;
  //   }
  // }

  // So the id we're trying to access is NOT in the list of available ids
  // We'll reroute back to the avaiable lists
  // To route things, we need a router
  let router: Router = inject(Router)
  router.navigate(['lists'])
  return false;
};
