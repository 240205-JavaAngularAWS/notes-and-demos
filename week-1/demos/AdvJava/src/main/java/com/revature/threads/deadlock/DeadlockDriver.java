package com.revature.threads.deadlock;

import ch.qos.logback.classic.Logger;
import org.slf4j.LoggerFactory;

public class DeadlockDriver {

    /*
    The goal of this demo is to showcase deadlocking situations

    We'll have two accounts (like bank accounts) that are continuously trying to transfer money between each other
    What will eventually happen is that Thread A will be waiting on a lock from thread B and vice versa as well
     */

    // I'm going to create a couple constants outside the main method that we can use to tailor how we want the
    // starting conditions

    public static final int INITIAL_BALANCE = 1000;
    public static final int TRANSFER_RATE = 1;
    public static final int SLEEP_TIME = 1;

    private static final Logger logger = (Logger) LoggerFactory.getLogger(DeadlockDriver.class);

    public static void main(String[] args) {
        // Inside the main method I plan to create two accounts and transfer between them until something happens

        Account accountA = new Account(INITIAL_BALANCE);
        Account accountB = new Account(INITIAL_BALANCE);

        // Now we'll make 2 threads and attempt to transfer from accountA to accountB and vice versa
        Thread a = new Thread(() ->{
//            transferHelper(accountA, accountB);
            safeSyncTransferHelper(accountA,accountB);
        });

        Thread b = new Thread(() ->{
//            transferHelper(accountB, accountA);
            safeSyncTransferHelper(accountB,accountA);
        });


        // We'll make a third separate thread to monitor the state of the other 2 threads

        Thread monitor = new Thread(() ->{
            // We'll check on the state of threads a and b as well as accountA and accountB once every second

            while(a.isAlive() && b.isAlive()){
                logger.info("Thread A State: " + a.getState());
                logger.info("Thread B State: " + b.getState());

                logger.info("Account A: " + accountA);
                logger.info("Account B: " + accountB);

                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
            }

            logger.info("Complete!");
            logger.info("Account A: " + accountA);
            logger.info("Account B: " + accountB);
        });


        // We'll set some thread names
        a.setName("a");
        b.setName("b");
        monitor.setName("Monitor");

        // Now we'll start the threads and give Thread "a" a little head start

        a.start();

        try {
            Thread.sleep(30);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        b.start();
        monitor.start();
    }

    // I'm going to create a static method to help with the transfers
    public static void transferHelper(Account a, Account b){
        // This will be used to actually complete the transfers
        // I'm going to create a synchronized block to execute the transfers in

        // A synchronized block means that only one thread can access that object at a time, if another thread
        // attempts to access it, it will be blocked until the lock is resolved

        for (int i = 0; i < INITIAL_BALANCE; i++){
            synchronized (a){
                synchronized (b){
                    // In this block I have synchronized the first account that is passed to this method and then
                    // synchronized the second account that was passed to this method
                    a.transfer(b, TRANSFER_RATE);
                }
            }

            // Delay a bit after each iteration

            try {
                Thread.sleep(SLEEP_TIME);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }

        /*
        Why does this transferHelper cause a DeadLock?
        When we call the transfer helper with Thread A it will Synchronize accountA and THEN accountB
        When we call the transferHelp with Thread B it will sycnhronize accountB and THEN accountA

        The solution to fix this is to create a method that will do this work but will ALWAYS synchronize accountA and
        accountB in the exact same order
         */
    }


    public static void safeSyncTransferHelper(Account sender, Account recipient){
        // The goal now is to find a way to guarantee the accounts sync in the same order

        // To solve this we'll use the hash code of the the accounts
        /*
        Every object in Java will have a hashcode
        Ex. accountA has a hash of 3
        and accountB has a hash of 2
        So if we call safeSyncTransfer(accountA, accountB)
        we'll do a check with the hashes to make sure the first account synced is accountA.

        If we call safeSyncTransfer(accountB, accountA) we'll do another check that guarantees that accountA is still
        the first account synchronized

        If we sync in the order A and the B we'll always sync accountA first
        Check sender hash vs recipient hash
        3 > 2 --> True --> accountA is the sender
        2 > 3 --> False --> accountA is the recipient
         */

        Account A = sender.hashCode() > recipient.hashCode() ? sender: recipient;
        Account B = A.equals(sender)? recipient: sender; // Just assigns it to the opposite one

        for (int i = 0; i < INITIAL_BALANCE; i++){
            synchronized (A){
                synchronized (B){
                    // In this block I have synchronized the first account that is passed to this method and then
                    // synchronized the second account that was passed to this method
                    sender.transfer(recipient, TRANSFER_RATE);
                }
            }

            // Delay a bit after each iteration

            try {
                Thread.sleep(SLEEP_TIME);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }


    }
}
