// Import classes and interfaces
import { ListTemplate } from "./classes/list-template.js";
import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/interface.js";

// Initialize variables with type assertions for selected DOM elements
const loggerForm = document.querySelector('form') as HTMLFormElement;
const type = document.getElementById('type') as HTMLSelectElement;
const toFrom = document.getElementById('tofrom') as HTMLInputElement;
const details = document.getElementById('details') as HTMLInputElement;
const amount = document.getElementById('amount') as HTMLInputElement;

// Create a ListTemplate object with a selected unordered list element
const ul = document.querySelector('ul') as HTMLUListElement;
let list = new ListTemplate(ul);

// Handle form submission with an event listener
loggerForm.addEventListener('submit', (e: Event) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Create a tuple of values from user input
    let values: [string, string, number];
    values = [toFrom.value, details.value, amount.valueAsNumber]

    let doc!: HasFormatter; // Initialize a HasFormatter object
    if (type.value === 'invoice') {
        doc = new Invoice(...values); // Create an Invoice object if the selected value is 'invoice'
    }
    else {
        doc = new Payment(...values); // Create a Payment object otherwise
    }

    // Add a new item to the list with the properties of the created object, based on the selected position
    list.render(doc, type.value, 'start');

    // Reset the form fields
    loggerForm.reset();
});