package com.revature.optionals;

import ch.qos.logback.classic.Logger;
import org.slf4j.LoggerFactory;

import java.util.Optional;

public class OptionalDriver {

    /*
    If I want to add logging to a class I'll need to add the logger in as a private static final instance
    Then I can log messages with logger.(logging level)
    Ex: An INFO level log will be logger.info("message")

     */

    private static final Logger logger = (Logger) LoggerFactory.getLogger(OptionalDriver.class);


    /*
    Optionals is a class that was introduced in Java 8 to give more flexibility for working with objects that may
    be a null value

    This is useful for a variety of purposes, one such being returning data from the database.
    Ex: We look up a user by their username, there's no guarantee that the user actually exists in the database so it
    has the possibility of being null

    Optionals provide helpful utility methods for checking to see if a value is null and what to do if it is null
     */

    public static void main(String[] args) {
        String sample1 = "Hello World!";
        String sample2 = null;

        // Imagine we're getting sample1 and sample2 from a database based off some id or identifier of some sort.
        // There's no guarantee a value will be returned so it'll be useful to make an Optional of the result

        Optional<String> possibleStringFromDatabase = Optional.ofNullable(sample1);

        // Now we can do some checking to see if the value is actually there
        logger.debug(String.valueOf(possibleStringFromDatabase.isPresent()));
        // isPresent returns a boolean (true if the value exists and false if the value is null)

        // Other methods that are useful
        System.out.println(getStringFromDB(possibleStringFromDatabase));

        System.out.println(possibleStringFromDatabase.orElseThrow());

    }

    public static String getStringFromDB(Optional<String> possibleString){
        return possibleString.orElse("No string found");
    }
}
