package com.revature.controllers;

import com.revature.exceptions.NoSuchUserException;
import com.revature.models.Todo;
import com.revature.services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200/", allowedHeaders = {"Content-Type", "username", "listId"})
@RequestMapping("/todos")
public class TodoController {

    private final TodoService ts;

    @Autowired
    public TodoController(TodoService ts) {
        this.ts = ts;
    }

    @PostMapping
    public ResponseEntity<Todo> createTodoHandler(@RequestBody Todo todo,
                                                  @RequestHeader(name = "username") String username,
                                                  @RequestHeader(name = "listId") int listId){
        Todo createdTodo;
        try{
            System.out.println(username);
            System.out.println(listId);
            createdTodo = ts.createTodo(todo, username, listId);
            return new ResponseEntity<>(createdTodo, CREATED);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(BAD_REQUEST);
        }
    }

    @PutMapping
    public ResponseEntity<Todo> updateTodo(@RequestBody Todo todo){
        return new ResponseEntity<>(ts.updateTodo(todo), OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> deleteTodo(@PathVariable int id){
        return new ResponseEntity<>(ts.removeTodo(id), OK);
    }
}
