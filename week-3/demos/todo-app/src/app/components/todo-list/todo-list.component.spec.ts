import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { TodoService } from '../../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, from } from 'rxjs';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      // We can created mocked services and inject them using this provider class
      // Recall we do mocking in our tests to prevent calls to dbs and things like that 
      // AKA (If we went to test stuff and it affected the database it creates inconsistencies everywhere that can be a headache to resolve)
      providers: [
        {provide: HttpClient, useClass: HttpClient},
        {provide: HttpHandler, useClass: HttpHandler},
        {provide: AuthService, useClass: AuthService},
        {provide: TodoService, useClass: TodoService},
        {provide: ActivatedRoute, useValue: {
          params: from([{id: 1}]),
        }},
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('empty add todo should show error message', () => {
      // Here is where we'll actually define the test itself

    // so we have access to the component itself through the component variable and we can call methods as needed
    // Make sure the newTodoText is an empty string
    component.newTodoText = ''

    // Call the method to try to add in a blank todo
    component.createNewTodo();

    expect(component.hide).toBe(false)
  })
});
