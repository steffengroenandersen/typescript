export class Invoice {
  constructor(client: string, details: string, amount: number) {
    this.client = client;
    this.details = details;
    this.amount = amount;
  }

  client: string;
  private details: string;
  public amount: number;

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
