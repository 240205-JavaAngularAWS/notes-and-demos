package com.revature.services;

import com.revature.exceptions.InvalidCredentialsException;
import com.revature.exceptions.NoSuchUserException;
import com.revature.models.User;
import com.revature.repos.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserDAO ud;

    @Autowired
    public UserService(UserDAO ud) {
        this.ud = ud;
    }

    public User loginUser(User u){
        Optional<User> possibleUser = ud.getByUsername(u.getUsername());

        if (possibleUser.isPresent()){
            User returnedUser = possibleUser.get();
            if (returnedUser.getUsername().equals(u.getUsername()) &&
                returnedUser.getPassword().equals(u.getPassword())){
                // Successful login
                return returnedUser;
            } else{
                throw new InvalidCredentialsException("Username or Password is incorrect");
            }
        }

        throw new NoSuchUserException("Couldn't get user by username");
    }

    public User registerUser(User u){
        System.out.println(u.getUsername());
        System.out.println(u.getPassword());
        return ud.save(u);
    }
}
