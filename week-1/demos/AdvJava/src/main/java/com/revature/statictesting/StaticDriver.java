package com.revature.statictesting;

public class StaticDriver {

    public static void main(String[] args) {

        // With instance (not static) methods and variables, we'll need an instance of the class to utilize those
        // members

        Calculator calc = new Calculator(); // This is creating a calculator instance

        calc.add(1, 2);

        // This is valid code for an INSTANCE method
        // Calculator.add(1,2);
        // This does not work because I need a calculator object to use the add method

        // Now that we have the static subtract method we can use it in a static context

        Calculator.subtract(3,2);
    }
}
