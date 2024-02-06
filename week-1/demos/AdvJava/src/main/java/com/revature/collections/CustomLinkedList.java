package com.revature.collections;

public class CustomLinkedList {

    /*
    In this class we're going to try to create our linked list with a couple methods
    Recall to add a new item to the linked list we essentially add it to the end of the list and update the pointers
    Remove item from the list is also just updating a pointer
     */

    Node head;

    public CustomLinkedList(){
        // We just have a blank constructor to initialize the list
    }

    // TODO add method
    public void add(String data){
        // To add a new item to the list we need to make a node of the item
        Node newNode = new Node(data); // This is now a box that points to null but still holds our data

        // If it is the first node, we set Head equal to it
        if (head == null){
            head = newNode;
            return;
        }

        // If it is not the first node, we'll walk the list till we find the node that has a null value for next
        // then we add the node there
        Node currentNode = head;
        while (currentNode.next != null){
            currentNode = currentNode.next;
            // This while loop walks the list, if the next item is not null, then it will move onto the next node
        }
        currentNode.next = newNode;
    }

    // Todo remove method
    public void remove(int index){
        // The first thing we should do is make sure that if the index is 0, we're removing the first element
        // which means we just need to update the pointer and set the new head value.
        if (index == 0){
            Node nodeToBeRemoved = get(index);
            Node newHeadNode = get(1);
            // Set the pointer on this node to be null
            nodeToBeRemoved.next = null;
            head = newHeadNode;
        }
        // We need to walk the list and get the node before and after the index
        // We'll get the node before with get
        Node nodeBeforeRemoval = get(index-1);
        Node nodeToBeRemoved = get(index); // We need to make sure the next node is not null
        if (nodeToBeRemoved.next == null){
            // If we're in here that means we're removing the last item in the list
            nodeBeforeRemoval.next = null;
            return;
        }
        Node nodeAfterRemovedNode = get(index + 1);
        // Then we update the pointer to point from the previous node to the next node
        nodeBeforeRemoval.next = nodeAfterRemovedNode;
        nodeToBeRemoved.next = null;


    }

    // Todo Get method
    public Node get(int index){
        // To get we simply walk the list till we get to the appropriate index and then return the result
        Node currentNode = head;
        int nodeCounter = 0;

        while(nodeCounter < index){
            currentNode = currentNode.next;
            nodeCounter++;
        }

        return currentNode;
    }
}
