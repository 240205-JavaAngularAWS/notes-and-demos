package com.revature.reflection;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.util.Arrays;


public class ClassInspector {

    // We'll have this class use the Reflection Framework to read in our DummyUser Class and give us some details about
    // it

    // TODO Create a method for viewing the constructors
    public static void listPublicConstructors(Class<?> clazz){

        // We want to print out the constructors from a class

        System.out.println("Printing the public Constructors of the class " + clazz.getName());

        // How do we get the constructors?
        Constructor<?>[] constructors = clazz.getConstructors();

        for (Constructor<?> constructor: constructors){

            // Let's print out the name and the parameters associated
            System.out.println("\t Constructor name: " + constructor.getName());
            System.out.println("\t Constructor param types: " + Arrays.toString(constructor.getParameterTypes()));
            System.out.println();
        }
    }


    // Todo create a method for viewing non-public fields (oooh illegal)

    public static void listNonPublicFields(Class<?> clazz){
        System.out.println("Printing the non public fields of the class " + clazz.getName());

        Field[] fields = clazz.getDeclaredFields(); // getFields only get public, getDeclaredFields gets all fields

        for (Field field: fields){
            if(field.getModifiers() == Modifier.PUBLIC){
                continue;
            }

            System.out.println("\t Field name: " + field.getName());
            System.out.println("\t Field type: " + field.getType());
            System.out.println("\t Is the field a primitive: " + field.getType().isPrimitive());
            System.out.println();
        }
    }


    // Todo create method that gets us all the public methods from a class
}
