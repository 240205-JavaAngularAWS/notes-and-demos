package com.revature.algorithms.searching;

import java.util.List;

public class SearchDriver {

    public static void main(String[] args) {
        // Let's imagine we have a list of numbers that we want to search through to find a value

        List<Integer> nums = List.of(1, 3, 6, 7, 8, 9, 35, 126);


        /*
        A linear search is the easiest way to do this where we just check every single value and see if it matches the
        target value. Linear search has a time complexity of O(n) which just means on the scale of n, it's basically
        linear time


        A binary search operates by chopping off half of all possible location during each iteration, because of this it
        is much faster than linear search, with the note that the list MUST be sorted before it can begin to search.
        Time complexity is O(log n)
         */

        System.out.println(linearSearch(nums, 7));

        System.out.println(binarySearch(nums, 7));
    }

    public static int linearSearch(List<Integer> nums, int target){
        // For a linear search I step through the collection of data and check to see if the data at that index matches
        // the target value

        for (int i = 0; i< nums.size(); i++){
            if (nums.get(i) == target){
                return i;
            }
        }

        return -1;
    }


    public static int binarySearch(List<Integer> nums, int target){

        // GOAL: we want to check the middle point of the array/list and see if it is our target or if it's
        // less than / greater than out target

        int leftIndex = 0;
        int rightIndex = nums.size() -1;

        while (leftIndex <= rightIndex){
            /*
            We'll be manipulating the start and end indices of the list so we can narrow down our searching area
             */

            int middleIndex = leftIndex + (rightIndex -leftIndex) / 2;

            // Check if the target is present at the middle
            if (nums.get(middleIndex) == target){
                return middleIndex;
            }

            // If the target is greater than the middle value
            if (nums.get(middleIndex)< target){
                // We only need to search the right half so we'll update the left index to be the middle + 1
                leftIndex = middleIndex + 1;
            } else{
                // This is the case where the target is LESS than the middle value so we chop off the right side of the
                // list
                rightIndex = middleIndex - 1;
            }
        }

        return -1;

    }


}
