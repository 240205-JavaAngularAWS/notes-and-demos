package com.revature.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.revature.services.TodoListService;
import jakarta.persistence.*;

//import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "todos")
public class Todo {

    @Id
    @Column(name = "todo_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String text;

    private boolean completed;

    @ManyToOne
    @JoinColumn(name = "list_Id")
    @JsonIgnore
    private TodoList list;

    public Todo() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public TodoList getList() {
        return list;
    }

    public void setList(TodoList list) {
        this.list = list;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Todo todo = (Todo) o;
        return id == todo.id && completed == todo.completed && Objects.equals(text, todo.text) && Objects.equals(list, todo.list);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, text, completed, list);
    }
}
