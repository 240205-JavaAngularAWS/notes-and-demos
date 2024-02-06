package com.revature.arrays;

public class ArrayDriver {

    public static void main(String[] args){
        // Public means this method will be accessible anywhere
        // Static means this method belongs to the class scope (can be used without an instance of the class)
        // Void means that nothing will return from this method
        // main is the name of the method
        // String[] args defines the arguments that may be passed to this method

        // The combination of all these is the main method signature which defines the entry point for the application

        // String is a class, so it's capital, prims like int, char, boolean are not classes and therefore not capital


        /*
        Arrays are the simplest data structure in java. They are fixed in length, used to hold multiple of the same
        type of objects, and they're indexed and ordered.
         */

        int[] nums = new int[5]; // The 5 declares the fixed length of this array

        // Arrays are indexed and since Java is a 0-based indexing language we access the indices starting at 0
        nums[0] = 18;
        nums[1] = 27;
        nums[2] = 36;
        nums[3] = 45;
        nums[4] = 54;

        // nums[5] is outside the range of indices for this array so I cannot access it

        // Arrays are used to store a variety of objects and they're very useful because they can be iterated over
        for (int i = 0; i< nums.length; i++){
            // Let's try to print out each value of the array itself
            System.out.println(nums[i]);
        }

        // A very common question you can get asked is how to sum an array
        int sum = 0;
        for (int i = 0; i < nums.length; i++){
            sum += nums[i];
        }

        System.out.println(sum);

    }
}
