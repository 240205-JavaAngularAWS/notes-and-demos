package com.revature.repos;

import com.revature.models.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoDAO extends JpaRepository<Todo, Integer> {
}
