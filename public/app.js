import { ListTemplate } from "./classes/list-template.js";
import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
const loggerForm = document.querySelector('form');
const type = document.getElementById('type');
const toFrom = document.getElementById('tofrom');
const details = document.getElementById('details');
const amount = document.getElementById('amount');
const ul = document.querySelector('ul');
let list = new ListTemplate(ul);
loggerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'start');
});
