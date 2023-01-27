
const loggerForm = document.querySelector('form') as HTMLFormElement;
const type = document.getElementById('type') as HTMLSelectElement;
const toFrom = document.getElementById('tofrom') as HTMLInputElement;
const details = document.getElementById('details') as HTMLInputElement;
const amount = document.getElementById('amount') as HTMLInputElement;

const ul = document.querySelector('ul') as HTMLUListElement;

let list = new ListTemplate(ul);

loggerForm.addEventListener('submit', (e: any) => {

    e.preventDefault();
});