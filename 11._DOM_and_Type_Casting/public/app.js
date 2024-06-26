"use strict";
// const anchor = document.querySelector("a");
// if (anchor) {
//   console.log(anchor.href);
// }
// const anchor = document.querySelector("a")!;
// if (anchor) {
//   console.log(anchor.href);
// }
// const anchor = document.querySelector("a");
// console.log(anchor?.href);
// const form = document.querySelector("form");
const form = document.querySelector(".new-item-form");
// console.log(form.children);
// inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
