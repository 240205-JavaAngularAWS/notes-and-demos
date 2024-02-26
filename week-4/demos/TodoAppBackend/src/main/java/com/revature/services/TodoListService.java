package com.revature.services;

import com.revature.exceptions.NoSuchListException;
import com.revature.exceptions.NoSuchUserException;
import com.revature.models.TodoList;
import com.revature.models.User;
import com.revature.repos.TodoDAO;
import com.revature.repos.TodoListDAO;
import com.revature.repos.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TodoListService {

    private final TodoListDAO tld;

    private final UserDAO ud;

    private final TodoDAO td;

    @Autowired
    public TodoListService(TodoListDAO tld, UserDAO ud, TodoDAO td) {
        this.tld = tld;
        this.ud = ud;
        this.td = td;
    }

    public List<TodoList> getListsByUsername(String username){
        Optional<User> possibleUser = ud.getByUsername(username);
        if (possibleUser.isPresent()){
            return tld.getAllTodoListByOwner(possibleUser.get());
        }
        throw new NoSuchUserException("No user found with username: " + username);

    }

    public TodoList getListsByUsernameAndId(String username, int id) {

        Optional<User> possibleUser = ud.getByUsername(username);
        boolean doesListExist = tld.existsById(id);
        if (possibleUser.isPresent() && doesListExist) {
            TodoList returnedList = tld.findById(id).get();
            if (possibleUser.get().equals(returnedList.getOwner())) {
                return returnedList;
            }
        } else if (possibleUser.isEmpty()) {
            throw new NoSuchUserException("No user found with username: " + username);
        } else {
            throw new NoSuchListException("No todo list found with id: " + id);
        }
        return null;
    }

    public TodoList createTodoList(TodoList todoList, String username) {
        Optional<User> possibleUser = ud.getByUsername(username);
        if (possibleUser.isEmpty()){
            throw new NoSuchUserException("No user found with username: " + username);
        }

        todoList.setOwner(possibleUser.get());
        return tld.save(todoList);
    }
}
