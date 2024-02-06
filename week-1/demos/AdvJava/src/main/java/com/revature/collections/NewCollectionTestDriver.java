package com.revature.collections;

import java.util.LinkedList;
import java.util.List;

public class NewCollectionTestDriver {

    public static void main(String[] args) {
        List<String> groceryItems = new LinkedList<>();
        CustomLinkedList customLinkedList = new CustomLinkedList();

        groceryItems.add("milk");
        customLinkedList.add("milk");
        groceryItems.add("bread");
        customLinkedList.add("bread");
        groceryItems.add("coffee");
        customLinkedList.add("coffee");

        System.out.println(groceryItems.get(1));
        System.out.println(customLinkedList.get(1).data);

        groceryItems.remove(1);
        customLinkedList.remove(1);

        System.out.println("---------------------------");

        System.out.println(groceryItems.get(1));
        System.out.println(customLinkedList.get(1).data);

    }
}
