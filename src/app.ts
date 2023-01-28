
const loggerForm = document.querySelector('form') as HTMLFormElement;
const type = document.getElementById('type') as HTMLSelectElement;
const toFrom = document.getElementById('tofrom') as HTMLInputElement;
const details = document.getElementById('details') as HTMLInputElement;
const amount = document.getElementById('amount') as HTMLInputElement;

const ul = document.querySelector('ul') as HTMLUListElement;

let list = new ListTemplate(ul);

loggerForm.addEventListener('submit', (e: any) => {
    e.preventDefault();

    let values: [string, string, number];
    values = [toFrom.value, details.value, amount.valueAsNumber]
    let doc!: HasFormatter;
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