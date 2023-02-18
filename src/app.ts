import {  ListTemplate} from "./classes/list-template.js";
import {  Invoice} from "./classes/invoice.js";
import {  Payment} from "./classes/payment.js";
import { HasFormatter } from "./interfaces/interface.js";

const loggerForm = document.querySelector('form') as HTMLFormElement;
const type = document.getElementById('type') as HTMLSelectElement;
const toFrom = document.getElementById('tofrom') as HTMLInputElement;
const details = document.getElementById('details') as HTMLInputElement;
const amount = document.getElementById('amount') as HTMLInputElement;

const ul = document.querySelector('ul') as HTMLUListElement;

let list = new ListTemplate(ul);

loggerForm.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number];
    values = [toFrom.value, details.value, amount.valueAsNumber]
    let doc!: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }

    list.render(doc, type.value, 'start');
});