import { Invoice } from "./models/invoice.js";
const invoiceOne = new Invoice("Mario", "Work on website", 200);
const invoiceTwo = new Invoice("Luigi", "Work on database", 300);
let invoices = [];
// invoices.push(invoiceOne);
// invoices.push(invoiceTwo);
// invoices.forEach((invoice) => console.log(invoice.format()));
// invoices.forEach((invoice) => console.log(invoice.details));
class Receipt {
    constructor(client, amount, details) {
        this.client = client;
        this.amount = amount;
        this.details = details;
    }
    toString() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const receiptOne = new Receipt("Mario", 200, "for work on website");
console.log(receiptOne.toString());
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
