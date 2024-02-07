package com.revature.lambdas;

public class Driver {

    // Lambdas are a tool that was introduced in Java 8 that allows to to create shorthand function
    /*
    These are very similar to how arrow functions work in JS
    These guys are used to implement things called functional interfaces
        Functional interfaces are interfaces with exactly one abstract method
        There are several built in interfaces that we'll look at like Predicate, Consumer, Function, and Supplier

    Syntax: (input1, input2) -> logic
     */

    public static void main(String[] args) {
        // Inside of this method we'll explore the different ways we can implement that interface

        // 1. Create an implementing class
        MyFunctionalInterface nc = new NewClass();
        System.out.println(nc.doMath(5, 7));
        // Things to note, this is kinda verbose since we needed to create a whole new class that just has the purpose
        // of filling out the doMath method


        // 2. Creating an anonymous class
        MyFunctionalInterface mfi = new MyFunctionalInterface() {
            @Override
            public int doMath(int a, int b) {
                return a - b;
            }
        };

        System.out.println(mfi.doMath(7, 5));
        // This is fine and completely valid code
        // But it's still verbose and kinda hard to look at

        // 3. Using a lambda to implement the functional interface
        MyFunctionalInterface mfi2 = (a,b) -> a*b;

        System.out.println(mfi2.doMath(7,5));

        // We can also use a multiline lambda to perform more complex operations
        MyFunctionalInterface mfi3 = (a,b) -> {
          // This is now a code block I can use to implement the method doMath
          a = a*a;
          b = b*b;
          return a-b;
        };

        System.out.println(mfi3.doMath(7,5));
    }
}

class NewClass implements MyFunctionalInterface{

    @Override
    public int doMath(int a, int b) {
        // In this class we'll just add the numbers together
        return a + b;
    }
}
