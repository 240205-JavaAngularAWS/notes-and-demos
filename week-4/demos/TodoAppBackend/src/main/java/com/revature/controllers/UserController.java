package com.revature.controllers;

import com.revature.exceptions.InvalidCredentialsException;
import com.revature.exceptions.NoSuchUserException;
import com.revature.models.User;
import com.revature.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "http://localhost:4200/", allowedHeaders = {"Content-Type", "username", "Access-Control-Allow-Origin, Access-Control-Allow-Credentials"})
@RequestMapping("/users")
public class UserController {

    private final UserService us;

    @Autowired
    public UserController(UserService us) {
        this.us = us;
    }


    @PostMapping("login")
    public ResponseEntity<User> loginHandler(@RequestBody User user){
        User loggedInUser;
        try{
            loggedInUser = us.loginUser(user);
        } catch (InvalidCredentialsException | NoSuchUserException e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(loggedInUser, HttpStatus.OK);
    }

    @PostMapping("register")
    public ResponseEntity<User> registerHandler(@RequestBody User user){
        User  registeredUser;
        try{
            registeredUser = us.registerUser(user);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);
    }
}
