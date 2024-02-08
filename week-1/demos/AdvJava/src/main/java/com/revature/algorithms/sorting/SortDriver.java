package com.revature.algorithms.sorting;

import java.util.*;

public class SortDriver {

    //We'll be exploring our sorting algorithms here

    public static void main(String[] args) {
        List<Integer> nums = new ArrayList<>();

        // Now I'll add some numbers to the list
        for (int i = 1; i<= 6; i++){
            nums.add(i);
        }

        // We need to mix up the array so we'll do the following call
        Collections.shuffle(nums);

        List<Integer> nums2 = new ArrayList<>(nums);

        System.out.println(Arrays.toString(nums.toArray()));
        System.out.println(Arrays.toString(nums2.toArray()));
        System.out.println("-----------------");
        bubbleSort(nums);
        System.out.println(Arrays.toString(nums.toArray()));

        System.out.println("-----------------");
        List<Integer> nums3 = mergeSort(nums2);
        System.out.println(Arrays.toString(nums3.toArray()));

    }


    public static List<Integer> bubbleSort(List<Integer> nums){
        // We need to check each pair and swap if necessary
        // We'll need to repeat this step for every possible number of pairs

        /*
        Generally things with 2 for loops run at least O(n^2) time complexity and bubble sort is no exception
         */

        for (int i = 1; i < nums.size(); i++){
            // This will say that everything in the loop will repeat for the number of possible pairs to check

            for (int j = 0; j < nums.size() -1; j++){
                // Now we check to see if the elements are out of order
                if (nums.get(j) > nums.get(j+1)){
                    int temp = nums.get(j);

                    // List has some nice methods for swapping values
                    nums.set(j, nums.get(j+1));
                    nums.set(j+1, temp);
//                    System.out.println(Arrays.toString(nums.toArray()));
                }


            }
        }

        return nums;

    }


    // For merge sort there's two steps we need to be aware of
    // We need a merge method and we'll need the actual sorting method (this will end up making recursive calls

    public static List<Integer> merge(List<Integer> a, List<Integer> b){
        // GOAL: Take two small lists and merge them into one larger, sorted list
        List<Integer> c = new LinkedList<>();

        // So we'll cycle over the elements of list a and b and add them to c in proper order until one of the lists is
        // completely empty (we'll remove the element every time we add it to list c)

        while (!a.isEmpty() && !b.isEmpty()){
            if (a.get(0) > b.get(0)){
                // Element from a is larger so we need to add the element from B to c
                c.add(b.get(0));
                b.remove(0);
            } else{
                // This is the case where element from a is smaller than the element from b
                // So we add the element from a to c and remove it from a
                c.add(a.get(0));
                a.remove(0);
            }
        }

        // There are two cases now
        // Either a is empty or b is empty
        // If be is empty, a is the only one with elements and I need to add all of them to c in the order they're
        // already in
        while (!a.isEmpty()){
            c.add(a.get(0));
            a.remove(0);
        }

        while (!b.isEmpty()){
            c.add(b.get(0));
            b.remove(0);
        }

        // At this point all the elements have been added to c in the proper order so we just return c.
        return c;


    }

    public static List<Integer> mergeSort(List<Integer> nums){
        /*
        When Merge Sort is typically used, it utilizes recursion to make a call to this method itself but with the
        smaller arrays

        Time complexity is O(n * log n)
         */

        if(nums.size() == 1){
            return nums;
            // This is a base case and is VERY important for recursive methods
        }

        // Find the middle point of the list so we can break it apart into 2 smaller lists
        int midIndex = nums.size() / 2;

        // I need to construct the left half of the list to sort and the right half
        // We'll create new lists here since we can get some exceptions if we keep working on the same object
        List<Integer> leftList = new ArrayList<>(nums.subList(0, midIndex));
        List<Integer> rightList = new ArrayList<>(nums.subList(midIndex, nums.size()));

        // Now comes the recursive call
        leftList = mergeSort(leftList);
        rightList = mergeSort(rightList);

        return merge(leftList, rightList);
    }
}
