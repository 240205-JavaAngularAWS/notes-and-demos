package com.revature.threads;

import ch.qos.logback.classic.Logger;
import org.slf4j.LoggerFactory;

import java.util.Random;

public class Heist {

    public static final Logger logger = (Logger) LoggerFactory.getLogger(Heist.class);

    /*
    The goal for the following demo is to have 3 threads running at the same time
    There will be 2 hacker threads that are attempt to guess the password for a vault
    There will be one Police thread that will attempt to catch the hackers
    If the hackers take more than 15 seconds to crack the password they get caught
     */

    public static void main(String[] args) {

        // Let's create a vault with a password
        int maxPossiblePassword = 5000;

        // Instantiate a random password
        int password = (int) (Math.random() * maxPossiblePassword);

        logger.info("The password is " + password);

        // Let's create a vault
        Vault vault = new Vault(password);

        // Now we'll need to define 2 threads for hacking the password, one will start at 0 and the other at 9998
        // The one at 0 will move up
        // The at 9998 will move down

        Thread ascendingHackerThread = new Thread(()->{
            // Inside here we'll guess the password for the vault starting at 0 and moving up
            for (int i = 0; i<maxPossiblePassword; i++){
                if (vault.isCorrectPassword(i)){
                    logger.info(Thread.currentThread().getName() + " has found the password");
                    logger.info("The password is " + i);
                    System.exit(0);
                }
            }
        });

        Thread decendingHackerThread = new Thread(()->{
           for (int i = maxPossiblePassword -1; i>= 0; i--){
               if (vault.isCorrectPassword(i)){
                   logger.info(Thread.currentThread().getName() + " has found the password");
                   logger.info("The password is " + i);
                   System.exit(0);
               }
           }
        });

        Thread policeThread = new Thread(() ->{

            // We'll just create a loop from 15 to 0 and print out every second until time is up
            for (int i = 15 ; i > 0; i--){
                logger.info(i + " second left!");

                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
            }

            logger.info("Game over for you hackers!");
            System.exit(0);
        });

        // Let's name our threads
        ascendingHackerThread.setName("AscendingHackerThread");
        decendingHackerThread.setName("DescendingHackerThread");
        policeThread.setName("PoliceThread");

        // We want the hackers to be able to guess with the highest priority
        ascendingHackerThread.setPriority(Thread.MAX_PRIORITY);
        decendingHackerThread.setPriority(10); // These are equivalent

        // Let's start the Threads and then start debugging
        ascendingHackerThread.start();
        decendingHackerThread.start();
        policeThread.start();

    }
}

class Vault{
    // This will represent the vault the hackers are trying to get into

    int password;

    public Vault(int password){
        this.password = password;
    }

    public boolean isCorrectPassword(int guess){

        // The hackers will need time to actually enter and test the password so we'll say that each attempt take approx
        // 5 milliseconds
        try {
            Thread.sleep(5);
            // This effectively means they get 200 guesses per second
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        return this.password == guess;
    }
}
