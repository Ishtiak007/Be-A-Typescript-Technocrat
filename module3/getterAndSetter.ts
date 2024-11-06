{
  //getter and setter
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;
    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }
    // public addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }
    // public getBalance() {
    //   return this._balance;
    // }
    get balance() {
      return this._balance;
    }
    set deposit(amount: number) {
      this._balance = this.balance + amount;
    }
  }

  const goribManusherAccount = new BankAccount(107, "Ishtiak", 900);

  //   goribManusherAccount.deposit = 0;

  //   goribManusherAccount.addDeposit(200); //function call korte hoschee
  //   const myBalance = goribManusherAccount.getBalance(); //function call korte hoschee
  goribManusherAccount.deposit = 1000;

  const myBalance = goribManusherAccount.balance; //property er moto kore
  console.log(myBalance);
}
