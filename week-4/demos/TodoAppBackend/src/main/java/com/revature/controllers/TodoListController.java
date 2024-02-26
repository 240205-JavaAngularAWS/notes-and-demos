package com.revature.controllers;

import com.revature.exceptions.NoSuchListException;
import com.revature.exceptions.NoSuchUserException;
import com.revature.models.Todo;
import com.revature.models.TodoList;
import com.revature.services.TodoListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200/", allowedHeaders = {"Content-Type", "username"})
@RequestMapping("/lists")
public class TodoListController {

    private final TodoListService tls;

    @Autowired
    public TodoListController(TodoListService tls) {
        this.tls = tls;
    }

    @GetMapping
    public ResponseEntity<List<TodoList>> getAllListsByUser(@RequestHeader(name = "username") String username){
        try{
            return new ResponseEntity<>(tls.getListsByUsername(username), OK);
        } catch (NoSuchUserException e){
            return new ResponseEntity<>(BAD_REQUEST);
        }
    }

    @GetMapping("{id}")
    public ResponseEntity<TodoList> getListsByUserAndId(@RequestHeader(name = "username") String username,
                                                              @PathVariable(name = "id") int id){
        try{
            return new ResponseEntity<>(tls.getListsByUsernameAndId(username, id), OK);
        } catch (NoSuchUserException | NoSuchListException e){
            return new ResponseEntity<>(BAD_REQUEST);
        }

    }

    @PostMapping
    public ResponseEntity<TodoList> createTodoListHandler(@RequestHeader(name = "username") String username,
                                                          @RequestBody TodoList todoList){
        try{
            return new ResponseEntity<>(tls.createTodoList(todoList, username), CREATED);
        } catch (NoSuchUserException e){
            return new ResponseEntity<>(BAD_REQUEST);
        }
    }
}
