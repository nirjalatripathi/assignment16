//Topic 5: Encapsulation
class BankAccount {
    //Private property to store balance 
    #balance= 0;
    deposit (amount) {
    //Increases balance by the given amt 
    this.#balance = this.#balance + amount;

}
//Withdrawing money 
withdraw(amount) {
    // Checks if sufficient balabce is available 
    if (amount<= this.#balance) {
        this.#balance = this.#balance - amount;

    } else {
        console.log("Insufficient balance");
    }
}
// get current balance 
getBalance() {
    return this.#balance;
}
}
// New BankAccount obj
const account = new BankAccount ();
account.deposit(2000);
account.withdraw(500);
console.log(account.getBalance());

//Encaptulation is the concept of hiding data from the outside world. 
// It is important because it protects our private datas from the outside world. It helps improve the security. 

