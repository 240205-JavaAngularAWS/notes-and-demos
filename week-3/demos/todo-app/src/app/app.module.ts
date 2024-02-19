import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ListPageComponent } from './components/list-page/list-page.component';
import { ListIconComponent } from './components/list-icon/list-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    LoginPageComponent,
    ListPageComponent,
    ListIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
