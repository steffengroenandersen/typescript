import { Invoice } from "./models/invoice.js";

const invoiceOne = new Invoice("Mario", "Work on website", 200);
const invoiceTwo = new Invoice("Luigi", "Work on database", 300);

let invoices: Invoice[] = [];

// invoices.push(invoiceOne);
// invoices.push(invoiceTwo);

// invoices.forEach((invoice) => console.log(invoice.format()));

// invoices.forEach((invoice) => console.log(invoice.details));

class Receipt {
  constructor(private client: string, private amount: number, private details: string) {}

  toString() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const receiptOne = new Receipt("Mario", 200, "for work on website");

console.log(receiptOne.toString());

const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
