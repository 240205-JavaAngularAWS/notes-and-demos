package com.revature.collections;

public class Node {

    //In this node we need to store 2 things

    // We need to store the value in the node and we need to store the pointer to the next node
    // We'll create this with strings for right now to make things easier

    String data; // This stores the data in the node

    Node next; // This is the pointer to the next node in the list

    public Node(String data){
        this.data = data;
    }
}
