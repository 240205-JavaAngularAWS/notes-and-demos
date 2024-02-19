import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // This is a service class sued inside of Angular
  // The main purpose is for it to exist outside of any one component but hold or retrieve data that could be available in ANY component

  // We'll use this class to store our users (for now) and later will make it so this class can do actual authentication against the backend
  // First we'll need a list of users
  users: IUser[] = [
    {
      username: 'test',
      password: 'password'
    },
    {
      username: 'user1',
      password: 'password'
    },
    {
      username: 'user2',
      password: 'password'
    }
  ]

  loginUser(username: string, password: string){
    // This will be our actual authentication method
    // Normally we'd send a request to the backend here but for now we'll check our hardcoded array

    // Clear the storage for username before we attempt to login
    sessionStorage.removeItem('username');

    for (let user of this.users){
      if (user.username == username && user.password == password){
        // This represents a successful login
        // We'll just store the username is sessionStorage for right now to hold our user, though this should be encrypted in some way (look into this later)
        sessionStorage.setItem("username", username);
        // This is useful for keeping the info for later requests, you could also store other things in there like Role of a user as well to control some properties
      }
    }
  }

   validateLoggedIn(): boolean{
    // This method should just verify that a user itself is logged in, we don't care too much about which user, just that they're logged in
    // We can use truthy/falsy values to check this
    return (!!sessionStorage.getItem('username')) // !! essentially casts to boolean
  }

  constructor() { }
}
