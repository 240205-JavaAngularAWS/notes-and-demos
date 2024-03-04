import { Injectable } from '@angular/core';
import { IList } from '../interfaces/IList';
import { AuthService } from './auth.service';
import { ITodo } from '../interfaces/ITodo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // This will pull all the todos associated with a user in time but for now we'll create an array of our todo lists and their associated todos

  lists: IList[] = [
    // {
    //   id:1,
    //   title: "Grocery List",
    //   owner: {
    //     username: "test",
    //     password: "password"
    //   },
    //   todos: [
    //     {
    //       id: 1,
    //       text: "Milk",
    //       completed: false
    //     },
    //     {
    //       id: 2,
    //       text: "Cheese",
    //       completed: false
    //     },
    //     {
    //       id: 3,
    //       text: "Paper Towels",
    //       completed: false
    //     },
    //   ]
    // },

    // {
    //   id:2,
    //   title: "Chores List",
    //   owner: {
    //     username: "test",
    //     password: "password"
    //   },
    //   todos: [
    //     {
    //       id: 4,
    //       text: "Do the dishes",
    //       completed: true
    //     },
    //     {
    //       id: 5,
    //       text: "Take out the trash",
    //       completed: false
    //     },
    //     {
    //       id: 6,
    //       text: "Pack for trip",
    //       completed: false
    //     },
    //     {
    //       id: 7,
    //       text: "Make dinner",
    //       completed: false
    //     }
    //   ]
    // },
    // {
    //   id:3,
    //   title: "Chores List",
    //   owner: {
    //     username: "user1",
    //     password: "password"
    //   },
    //   todos: [
    //     {
    //       id: 8,
    //       text: "Do the dishes",
    //       completed: true
    //     },
    //     {
    //       id: 9,
    //       text: "Make dinner",
    //       completed: false
    //     }
    //   ]
    // }
  ]


  // We'll expect that this user is logged in before we get the lists themselves but we can always verify if need be
  getListsByUser(): Observable<IList[]>{
    
    // The user should be logged in, I'm just gonna pull their username from sessionstorage and use it here
    let username: string | null = sessionStorage.getItem("username");

    let usernameForReal: string;
    if (username){
      usernameForReal = username
    } else{
      usernameForReal = ""
    }


    // We'll just return the result of a get request
      // Define our headers

      let headers = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'username': usernameForReal
        })
      }

      // Send the request 
      return this.http.get<IList[]>(`http://ec2-100-25-154-58.compute-1.amazonaws.com/lists`, headers)

      // Subscribe on the component side
  }

  getListById(listId: number): Observable<IList>{

    // for (let list of this.lists){
    //   if (list.id == listId){
    //     return list;
    //   }
    // }

    // return {
    //   title: "",
    //   owner: {
    //     username: '',
    //     password: ''
    //   },
    //   todos: []
    // }

    // We'll just return the result of a get request
      // Define our headers

      let headers = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'username': String(sessionStorage.getItem("username"))
        })
      }

      // Send the request 
      return this.http.get<IList>(`http://ec2-100-25-154-58.compute-1.amazonaws.com/lists/${listId}`, headers)

      // Subscribe on the component side
  }


  // I need a few new methods here
  // Create a new todo
    // need: listId, username, todo object

  createNewTodo(todo: ITodo, listId: number): Observable<ITodo>{

    // We'll be send a post request here so let's first set the headers and then we'll send the request
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'username' : String(sessionStorage.getItem("username")),
        'listId': listId
      })
    }

    return this.http.post<ITodo>(`http://ec2-100-25-154-58.compute-1.amazonaws.com/todos`, JSON.stringify(todo), headers)


  }

  // Update a todo's status
    // todo object itself

  updateTodo(todo: ITodo) : Observable<ITodo>{
    let headers = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }

    return this.http.put<ITodo>(`http://ec2-100-25-154-58.compute-1.amazonaws.com/todos`, JSON.stringify(todo), headers)
  }




  // Delete a todo
    // todo's id
  deleteTodoById(todoId: number): Observable<boolean>{
    // Here we'll send a request, we don't actually need to do much in terms of headers, we'll even try to not pass any for this one
    return this.http.delete<boolean>(`http://ec2-100-25-154-58.compute-1.amazonaws.com/todos/${todoId}`)
  }


  constructor(private authService: AuthService, private http:HttpClient) { }
}
