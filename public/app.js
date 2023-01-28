import { ListTemplate } from "./classes/list-template";
import { Invoice } from "./classes/invoice";
import { Payment } from "./classes/payment";
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
        let invoice = new Invoice(...values);
        doc = invoice;
    }
    else if (type.value === 'payment') {
        let payment = new Payment(...values);
        doc = payment;
    }
    list.render(doc, type.value, 'start');
});
