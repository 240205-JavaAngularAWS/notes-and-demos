package com.revature.reflection;

import java.util.Objects;

public class DummyUser {

    // This will just be a simple model class that we'll use to bounce the reflection framework off of. So we'll end up
    // using the class inspector to inspect this class and give us the details in some external source

    private int id;

    private String firstName;

    private String lastName;


    // TODO Constructors, Mutators, and toString, Equals and Hashcode


    public DummyUser() {
    }

    public DummyUser(int id, String firstName, String lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public DummyUser(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DummyUser dummyUser = (DummyUser) o;
        return id == dummyUser.id && Objects.equals(firstName, dummyUser.firstName) && Objects.equals(lastName, dummyUser.lastName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstName, lastName);
    }

    @Override
    public String toString() {
        return "DummyUser{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                '}';
    }
}
