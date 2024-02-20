package com.revature.repos;

import com.revature.models.TodoList;
import com.revature.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TodoListDAO extends JpaRepository<TodoList, Integer> {

    Optional<TodoList> getTodoListByTitle(String title);

    List<TodoList> getAllTodoListByOwner(User owner);
}
