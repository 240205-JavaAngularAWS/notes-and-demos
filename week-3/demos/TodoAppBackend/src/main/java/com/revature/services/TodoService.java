package com.revature.services;

import com.revature.exceptions.InvalidCredentialsException;
import com.revature.exceptions.NoSuchListException;
import com.revature.exceptions.NoSuchUserException;
import com.revature.models.Todo;
import com.revature.models.TodoList;
import com.revature.models.User;
import com.revature.repos.TodoDAO;
import com.revature.repos.TodoListDAO;
import com.revature.repos.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TodoService {

    private final TodoDAO td;
    
    private final UserDAO ud;

    private final TodoListDAO tld;

    @Autowired
    public TodoService(TodoDAO td, UserDAO ud, TodoListDAO tld) {
        this.td = td;
        this.ud = ud;
        this.tld = tld;
    }
    
    public Todo createTodo(Todo todo, String username, int listId){
        boolean listExists = tld.existsById(listId);
        Optional<User> possibleUser = ud.getByUsername(username);
        if (listExists && possibleUser.isPresent()){
            TodoList todoList = tld.findById(listId).get();
            if (!todoList.getOwner().equals(possibleUser.get())){
                throw new InvalidCredentialsException("Cannot access this list");
            }
            todo.setList(todoList);
            return td.save(todo);
        } else if (possibleUser.isEmpty()){
            throw new NoSuchUserException("No user found with username: " + username);
        } else{
            throw new NoSuchListException("No todo list found with id: " + listId);
        }
    }

    public Todo updateTodo(Todo todo){
        Todo returnedTodo = td.findById(todo.getId()).get();
        todo.setList(returnedTodo.getList());
        return td.save(todo);
    }

    public boolean removeTodo(int id){
        td.deleteById(id);
        return !td.existsById(id);
    }
}
