package com.revature.lambdas;

import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.function.Supplier;

public class FunctionalInterfaceDriver {

    /*
    Java has a couple built in functional interface that are used by different built-in methods in java (we'll see some
    of this in a bit when we look at streams)

    Predicate -> Takes in a value, returns a boolean value denoting whether or not this passes the method called test

    Supplier -> Supplies a value, this is a function that takes in nothing but returns a value, the method is called get

    Consumer -> Opposite of Supplier, takes in a value and returns nothing, implements the accept method

    Function -> This is a simple function that takes in a value and returns a value, implements the apply method

    Note: This list is definitely NOT exhaustive, there are plenty of built-in functional interfaces that take in
    multiple values, have more complex function and work with specific data types
     */

    public static void main(String[] args) {
        // 1. Predicate

        Predicate<Integer> isEven = (x) -> x%2==0;
//        Predicate<Integer> isEvenWithAnonClass = new Predicate<Integer>() {
//            @Override
//            public boolean test(Integer integer) {
//                if (integer % 2 == 0){
//                    return true;
//                } else{
//                    return false;
//                }
//            }
//        };

        System.out.println(isEven.test(51));
        System.out.println(isEven.test(108));

        //2. Supplier

//        Supplier<Integer> produceRandomNumberAnonClass = new Supplier<Integer>() {
//            @Override
//            public Integer get() {
//
//                return (int) (Math.random()*1000);
//            }
//        };
//
//        System.out.println(produceRandomNumberAnonClass.get());

        Supplier<Integer> getRandomNumber = () -> (int) (Math.random()*1000);
        System.out.println(getRandomNumber.get());



        // 3. Consumer
//        Consumer<Integer> printIntegerAnonClass = new Consumer<Integer>() {
//            @Override
//            public void accept(Integer integer) {
//                System.out.println(integer);
//            }
//        };

        Consumer<Integer> printInt = (y) -> System.out.println(y);

        printInt.accept(51);


        // 4. Function
//        Function<Integer, String> myFunctionAnonClass = new Function<Integer, String>() {
//            @Override
//            public String apply(Integer integer) {
//                return null;
//            }
//        };

        Function<Integer, String> myPrintFunction = (x) -> "My number is " + (x*x);

        System.out.println(myPrintFunction.apply(7));

    }
}
