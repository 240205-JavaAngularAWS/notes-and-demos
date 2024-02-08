package com.revature.threads;

import ch.qos.logback.classic.Logger;
import org.slf4j.LoggerFactory;

public class ThreadCreationDriver {

    private static final Logger logger = (Logger) LoggerFactory.getLogger(ThreadCreationDriver.class);

    public static void main(String[] args) {
        // Let's explore all the different ways to make threads

        // 1. First thing we can do is make a Class that extends the Thread Class
        Thread t1 = new MyThreadClass();

        // How can we rename a thread?
        t1.setName("MyThreadClass");

        // Just to view how different threads log info
//        logger.info("Running from the main thread");

        // 2. Create a class that implements the Runnable interface
        Thread t2 = new Thread(new MyRunnableClass());

        t2.setName("MyRunnableClass");

        // 3. We could implement an anonymous class

        Thread t3 = new Thread(new Runnable() {
            @Override
            public void run() {
                logger.info("Anonymous Class has started!");
                for (int i = 0; i<5; i++){
                    logger.info(String.valueOf(i));
                    try {
                        Thread.sleep(1000);
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                }
            }
        });

        t3.setName("AnonClass");

        // 4. Last way to create a thread is with a lambda

        Thread t4 = new Thread(()->{
            // Now we're inside a lambda which implements the run method from Runnable
            logger.info("Lambda Thread has started!");
            for (int i = 0; i<5; i++){
                logger.info(String.valueOf(i));
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
            }
        });

        t4.setName("Lambda");

        // How can I get the Thread to start?
        t1.start();
        t2.start();
        t3.start();
        t4.start();

    }
}

class MyThreadClass extends Thread{

    private static final Logger logger = (Logger) LoggerFactory.getLogger(MyThreadClass.class);

    @Override
    public void run() {
        // This run method is the most important one to consider when running a thread, basically think of this as
        // another main method, so everything inside here gets executed when we start the thread

        // Let's log a message that says we're running from this thread
        logger.info("MyThreadClass has started!");

        for (int i = 0; i<5; i++){
            logger.info(String.valueOf(i));
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
    }
}

class MyRunnableClass implements Runnable{

    private static final Logger logger = (Logger) LoggerFactory.getLogger(MyRunnableClass.class);

    // We can implement the Runnable interface to create a Runnable object which can be used inside of a thread

    @Override
    public void run() {
        logger.info("MyRunnableClass has started!");
        for (int i = 0; i<5; i++){
            logger.info(String.valueOf(i));
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
    }
}
