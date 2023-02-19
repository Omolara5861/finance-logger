// Define the Invoice class that implements the HasFormatter interface
export class Invoice {
    // Initialize the client, details, and amount properties in the constructor using parameter properties and the readonly and private modifiers
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // Implement the format method required by the HasFormatter interface
    format() {
        return `${this.client} owes €${this.amount} for ${this.details}`;
    }
}
