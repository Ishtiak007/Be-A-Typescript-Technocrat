{
  // accessModifiers
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;
    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }
    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }
    public getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance = this._balance;
    }
  }

  const goribManusherAccount = new BankAccount(107, "Ishtiak", 2900);
  goribManusherAccount.addDeposit(200);
  const myBalance = goribManusherAccount.getBalance();
  console.log(myBalance);
}
