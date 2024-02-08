package com.revature.algorithms.sorting;

import ch.qos.logback.classic.Logger;
import com.revature.algorithms.searching.SearchDriver;
import com.revature.algorithms.searching.SearchRaceDriver;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

public class SortRaceDriver {

    private static final Logger logger = (Logger) LoggerFactory.getLogger(SearchRaceDriver.class);

    public static void main(String[] args) {

        /*
        In this driver class we'll combine everything we have done today into one big example

        Let's create a large List and time each sorting algorithm at work
         */

        List<Integer> nums = new ArrayList<>();
        int maxNumber = 10000000;

        for (int i = 1; i <= maxNumber; i++) {
            nums.add(i);
        }

        Collections.shuffle(nums);

        List<Integer> nums2 = new ArrayList<>(nums);

        List<Long> bubbleSortDuration = new LinkedList<>();
        List<Long> mergeSortDuration = new LinkedList<>();

        for (int i = 0; i < 100; i++) {
            int target = (int) (Math.random() * maxNumber + 1);

//            logger.info("The correct result should be " + (target -1));

            // Now let's create some threads to run out searches

            Thread bubbleSort = new Thread(() -> {
//                logger.info("Bubble Search has started!");
                long startTime = System.nanoTime();
//                List<Integer> result = SearchDriver.bubbleSort(nums);
                long endTime = System.nanoTime();
                bubbleSortDuration.add(endTime - startTime);
//                logger.info("Bubble search has found the number at " + result);
            });

            Thread mergeSort = new Thread(() -> {
//                logger.info("Merge Search has started!");
                long startTime = System.nanoTime();
//                List<Integer> result = SearchDriver.mergeSort(nums2);
                long endTime = System.nanoTime();
                mergeSortDuration.add(endTime - startTime);
//                logger.info("Merge search has found the number at " + result);
            });

            bubbleSort.setName("bubbleSort");
            mergeSort.setName("mergeSort");

            bubbleSort.start();
            mergeSort.start();

            try {
                bubbleSort.join();
                mergeSort.join();
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }

        // Now we just find the average duration
        double avgBubbleDuration = 0;
        for (long l : bubbleSortDuration) {
            avgBubbleDuration += l;
        }
        avgBubbleDuration /= 10;

        double avgMergeDuration = 0;
        for (long l : mergeSortDuration) {
            avgMergeDuration += l;
        }
        avgMergeDuration /= 10;


        logger.info("Bubble Sort Average Duration: " + avgBubbleDuration);
        logger.info("Merge Sort Average Duration: " + avgMergeDuration);
    }
}