// Import classes and interfaces
import { ListTemplate } from "./classes/list-template.js";
import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
// Initialize variables with type assertions for selected DOM elements
const loggerForm = document.querySelector('form');
const type = document.getElementById('type');
const toFrom = document.getElementById('tofrom');
const details = document.getElementById('details');
const amount = document.getElementById('amount');
// Create a ListTemplate object with a selected unordered list element
const ul = document.querySelector('ul');
let list = new ListTemplate(ul);
// Handle form submission with an event listener
loggerForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Create a tuple of values from user input
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc; // Initialize a HasFormatter object
    if (type.value === 'invoice') {
        doc = new Invoice(...values); // Create an Invoice object if the selected value is 'invoice'
    }
    else {
        doc = new Payment(...values); // Create a Payment object otherwise
    }
    // Add a new item to the list with the properties of the created object, based on the selected position
    list.render(doc, type.value, 'start');
});
