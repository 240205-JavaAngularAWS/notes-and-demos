package com.revature.reflection;

public class Driver {

    public static void main(String[] args) {
        ClassInspector.listPublicConstructors(DummyUser.class);

        ClassInspector.listNonPublicFields(DummyUser.class);
    }
}
