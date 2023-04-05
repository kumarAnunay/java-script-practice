class Account {

    static accounts = 0;

    static totalBalance = 0;

    constructor(accountNum, balance) {

        this.accountNum = accountNum;

        this.balance = balance;

        // Increment the number of accounts

        Account.accounts++;

        // Add the current balance to the existing balance

        Account.totalBalance += balance;

    }

    static returnTotalAccounts() {

        return Account.accounts;

    }

    static returnTotalBalance() {

        return Account.totalBalance;

    }

}

// Creates a new bank account

const newAccount1 = new Account("a112", 1000); // 0 -> 1

// Creates a new bank account

const newAccount2 = new Account("a113", 2000); // 1 -> 2

console.log(Account.returnTotalAccounts());

console.log(Account.returnTotalBalance());