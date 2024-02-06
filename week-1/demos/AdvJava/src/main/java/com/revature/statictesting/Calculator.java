package com.revature.statictesting;

public class Calculator {

    // Instance method (not static aka we need to create a calculator object to use it)
    public int add(int a, int b){
        return a+b;
    }

    // This is a STATIC method meaning it belongs to the class and can exist and be used without an instance of the
    // class itself
    public static int subtract(int x, int y){
        return x-y;
    }
}
