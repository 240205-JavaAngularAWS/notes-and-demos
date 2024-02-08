package com.revature.threads.deadlock;

public class Account {

    private int balance;

    private int transferCount;

    public void transfer(Account b, int amount){
        // Check to make sure it's a valid transfer
        if (amount > this.getBalance()){
            return;
        }

        // If the amount is valid we should be able to set the balance appropriately
        this.setBalance(this.getBalance() - amount);

        // Then we should increase the amount for the other Account's balance
        b.setBalance(b.getBalance() + amount);

        this.transferCount++;
    }

    public Account(int balance) {
        this.balance = balance;
    }

    public int getBalance() {
        return balance;
    }

    public void setBalance(int balance) {
        this.balance = balance;
    }

    public int getTransferCount() {
        return transferCount;
    }

    public void setTransferCount(int transferCount) {
        this.transferCount = transferCount;
    }

    @Override
    public String toString() {
        return "Account{" +
                "balance=" + balance +
                ", transferCount=" + transferCount +
                '}';
    }


}
