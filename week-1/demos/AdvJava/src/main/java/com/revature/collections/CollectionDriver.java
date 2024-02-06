package com.revature.collections;

import java.util.*;

public class CollectionDriver {

    public static void main(String[] args) {

        // The Collections Framework has a variety of datastructures that can be used in a variety of circumstances

        /*
        Lists -> Ordered and Indexed, Allows duplicate values, and is dynamically sized
        Sets -> (Generally) unordered, does not allow duplicate values, and is dynamically sized
        Queues -> Data structures that act like lines, FIFO.
        Stacks -> Data structure that represents stacks of things, LIFO

        Maps are not technically part of the Collections Framework (since they don't inherit from Iterable/Collection)
        but they're another data structure that gets lumped in with these guys
         */

        // List
        // Common Implementations are ArrayList and LinkedList
        // ArrayList stores things as an array under the hood
        // Linked list stores things as a series of node with pointers to each other

        List<String> groceryList = new LinkedList<>(); // Liskov Substitution Principle

        // We can add things to the list with the add method
        groceryList.add("Milk");
        groceryList.add("Eggs");
        groceryList.add("Ground Beef");
        groceryList.add("Coffee");

        // I can also get items using their index just like an array (just with a method call instead)
        System.out.println(groceryList.get(2)); // The get method is used for returning an index

        // We can use an enhanced for-loop as well to iterate over this and print each object
        for(String s: groceryList){
            System.out.println(s);
            // The only disadvantage here is that you do not have access to the index
        }


        // Let's talk Sets
        /*
        Sets are useful for scenarios where you wouldn't want duplicates and you're not too partial about the order
        of the results
         */

        System.out.println("-----------------------");

        Set<String> usernames = new HashSet<>();
        usernames.add("johndoe");
        usernames.add("jamessmith");
        usernames.add("bryanserfozo");

        // Adding in a duplicate value with do nothing to the set
        usernames.add("jamessmith");

        for(String username: usernames){
            System.out.println(username);
            // Since the elements are unordered, there is no guarantee you will print the items in the same way you
            // added them in
        }

        System.out.println("---------------------------");

        // Queues and Stacks
        // Queues follow a FIFO order, generally you'll use either an ArrayDeque or something a PriorityQueue to
        // implement the Queue interface

        Queue<String> customersInLine = new ArrayDeque<>();

        // Here we can add items to the queue just like before
        customersInLine.add("Billy");
        customersInLine.add("Bob");
        customersInLine.add("Joe");

        // Now we have some different methods for removing items from the queue

        // If we want to examine or view who is the front of the list we'll use the peek method
        System.out.println(customersInLine.peek());

        // This views the first person in line but does NOT remove them, the poll method is used to remove that person
        System.out.println(customersInLine.poll());
        // To verify that Billy was removed from the list, we'll peek again and should see Bob now
        System.out.println(customersInLine.peek());

        System.out.println("---------------------------");

        // Stacks
        /*
        Stacks are useful in scenarios where you need the Last In being First Out.
        Towers of Hanoi is a common coding problem that uses the ideas in a stack

        Stack is a CLASS from the collections interface that extends Vector (which is actually is a List implementation),
        but the use of the Stack class itself has gone down since it's an older implementation, many new use cases for
        Stacks will actually use and ArrayDeque.
         */

        Deque<String> stackImplementation = new ArrayDeque<>();

        // I'll use this similar to how I would use a Queue, but instead of polling and peeking at the front of the line
        // I'll actually do it at the back

        stackImplementation.add("dinner plate");
        stackImplementation.add("saucer");
        stackImplementation.add("bowl");

        // So we've added in the bowl LAST so we want to remove it FIRST
        System.out.println(stackImplementation.peekLast()); // peekLast allows us to examine but no remove, last item

        System.out.println(stackImplementation.pollLast());

        System.out.println(stackImplementation.peekLast());

        // The Stack is a thing in Java which holds function calls
        // Print(peek())
        // Peek MUST be resolved before I can attempt to print so if we think about it as a stack
        // the bottom would be the print method and on top of that would be the peek method




    }
}
