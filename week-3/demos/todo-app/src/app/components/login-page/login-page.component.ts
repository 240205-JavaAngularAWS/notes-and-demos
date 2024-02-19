import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  // Recall we can use 2-way data binding to control store user input in a variable

  usernameInput: string = ""
  passwordInput: string = ""
  errorMessageHidden : boolean = true

  // How do we go about logging a user in?
  // We could treat this like the todo-list component where we have a hard coded list of users here that we check against BUT that's not best practice

  loginUser(){
    // console.log("Login attempted!")
    // console.log(this.usernameInput)
    // console.log(this.passwordInput)

    // Now that we have our auth service we want to use it in this component to attempt to login the user
    this.authService.loginUser(this.usernameInput, this.passwordInput);

    // Now we need to validate that the user was logged in successfully
    let successfulLogin: boolean = this.authService.validateLoggedIn();

    if(successfulLogin){
      console.log("Successful Login!")
      this.errorMessageHidden = true

      // If we successfully login we should be redirected to the list page
      this.router.navigate(['lists'])
    } else{
      // We'll add an error message here
      console.log("Unable to validate credentials")
      this.errorMessageHidden = false
    }

  }

  // To inject a service into this class I'll use the class's constructor to just inject it
  // Recall that services are marked with @Injectable which means they can be injected here
  // This is similar to constructor injection in Spring because we inject our dependencies through the constructor but we don't actually make instances ourselves since
  // angular takes care of that for us
  constructor(private authService: AuthService, private router: Router){
    // We could do something here but not necessary
  }

}
