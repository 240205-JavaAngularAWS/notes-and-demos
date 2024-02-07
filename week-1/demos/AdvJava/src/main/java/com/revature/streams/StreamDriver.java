package com.revature.streams;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class StreamDriver {

    /*
    Streams (aka the Stream API) is a useful way to implement logic on a collection of values so you can perform
    multiple operations with one pass of the data making it more efficient.

    Streams have 2 kinds of operations that can be used
        Intermediate -> Operations that perform some logic on the stream itself and return a stream
            Filter
            Sorted
            Distinct -> Only keeps the unique values so no duplicates
            Map
        Terminal -> Terminates the stream (usually either reduces it to a value, or prints each value, or returns it to
        another collection).
            Collect
            forEach
            Count,Max,Min -> Returns one value from the stream, either a count of the elements, or the max/min element

    Again this list of operation is definitely NOT exhaustive, there are a lot of different ones these are just some of
    the most common
     */

    public static void main(String[] args) {
        List<Integer> nums = List.of(1, 64, 51, 2, 37, 2, 16, 9, 8, 16, 25, 36);

        // Let's start with a terminal operation: forEach
        nums.stream().forEach((x) -> System.out.println(x));
        // This is a good start but it's not really useful for anything so let's try to use some of the other operations

        System.out.println("-----------------------");


        // Let's say we want to print out a number ONLY if the number is even
        nums.stream()
                .filter((y) -> y%2 == 0)
                .forEach((x) -> System.out.println(x));

        System.out.println("-----------------------");

        // Now let's say we wanted to sort those guys as well
        nums.stream()
                .filter((y) -> y%2 == 0)
                .sorted() // Sort on the default ordering of the objects (intermediate operation)
                .distinct() // Remove any duplicate values
                .forEach((x) -> System.out.println(x));

        Stream<Integer> stream = nums.stream()
                .filter((y) -> y%2 == 0);

        // Imagine 100 lines of logic
        // The filtering will still only happen once we get to this line
        stream.forEach((x) -> System.out.println(x));

        System.out.println("---------------------------");


        // Now we'll change things just a bit
        List<Double> receiptSubtotals = List.of(1.99, 2.73, 19.46, 59.99);

        // Typically when you purchase something there's sales tax involved
        List<Double> totalsAfterTax = receiptSubtotals.stream()
                // We want an intermediate operation that allows us to calculate and then add the sales tax
                .map((subtotal) -> {
                    double nextWholeDollar =  Math.ceil(subtotal);
                    double taxAmount = .07 * nextWholeDollar;

                    // We just need to add the taxAmount to the receiptSubtotal
                    return subtotal + taxAmount;
                })
                // From the things we were doing earlier we were just printing
                // Collect allows me to store the result of a stream to another collection
                .collect(Collectors.toList());

        receiptSubtotals.forEach((x) -> System.out.println(x));
        System.out.println("---------------");
        totalsAfterTax.forEach((x) -> System.out.println(x));



    }
}
