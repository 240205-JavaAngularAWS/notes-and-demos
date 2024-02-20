import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanDeactivate } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ListPageComponent } from './components/list-page/list-page.component';
import { authGuard } from './guards/auth.guard';
import { listAccessGuard } from './guards/list-access.guard';
import { Observable } from 'rxjs';
import { ObservablePracticeComponent } from './components/observable-practice/observable-practice.component';

const routes: Routes = [
  // Inside here is where we define the components we want to show at a specific route
  {path: 'login', component: LoginPageComponent},
  {path: 'lists', component:ListPageComponent, canActivate: [authGuard]},
  {path: 'lists/:listId', component: TodoListComponent, canActivate:[authGuard]},
  {path: '', pathMatch:'full', redirectTo:'login'},
  {path: 'practice', component:ObservablePracticeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// We'll use this class to define our routes and what components are registered and when
