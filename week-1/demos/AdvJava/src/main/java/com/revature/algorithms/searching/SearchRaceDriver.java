package com.revature.algorithms.searching;

import ch.qos.logback.classic.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class SearchRaceDriver {

    private static final Logger logger = (Logger) LoggerFactory.getLogger(SearchRaceDriver.class);

    public static void main(String[] args) {

        /*
        In this driver class we'll combine everything we have done today into one big example

        Let's create a large List and time each searching algorithm at work
         */

        List<Integer> nums = new ArrayList<>();
        int maxNumber = 100000000;

        for (int i = 1; i<= maxNumber; i++){
            nums.add(i);
        }

        List<Long> linearSearchDuration = new LinkedList<>();
        List<Long> binarySearchDuration = new LinkedList<>();

        for (int i = 0; i< 100; i++){
            int target = (int) (Math.random() * maxNumber + 1);

//            logger.info("The correct result should be " + (target -1));

            // Now let's create some threads to run out searches

            Thread linearSearch = new Thread(()->{
//                logger.info("Linear Search has started!");
                long startTime = System.nanoTime();
                int result = SearchDriver.linearSearch(nums, target);
                long endTime = System.nanoTime();
                linearSearchDuration.add(endTime-startTime);
//                logger.info("Linear search has found the number at " + result);
            });

            Thread binarySearch = new Thread(()->{
//                logger.info("Binary Search has started!");
                long startTime = System.nanoTime();
                int result = SearchDriver.binarySearch(nums, target);
                long endTime = System.nanoTime();
                binarySearchDuration.add(endTime-startTime);
//                logger.info("Binary search has found the number at " + result);
            });

            linearSearch.setName("LinearSearch");
            binarySearch.setName("BinarySearch");

            linearSearch.start();
            binarySearch.start();

            try {
                linearSearch.join();
                binarySearch.join();
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }

        // Now we just find the average duration
        double avgLinearDuration = 0;
        for (long l: linearSearchDuration){
            avgLinearDuration += l;
        }
        avgLinearDuration /= 100;

        double avgBinaryDuration = 0;
        for (long l: binarySearchDuration){
            avgBinaryDuration += l;
        }
        avgBinaryDuration /= 100;


        logger.info("Linear Search Average Duration: " + avgLinearDuration);
        logger.info("Binary Search Average Duration: " + avgBinaryDuration);




    }
}
