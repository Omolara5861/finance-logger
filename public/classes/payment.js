// Define the Payment class that implements the HasFormatter interface
export class Payment {
    // Initialize the recipient, details, and amount properties in the constructor using parameter properties and the readonly and private modifiers
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    // Implement the format method required by the HasFormatter interface
    format() {
        return ` ${this.recipient} is owed ${this.amount} for ${this.details}`;
    }
}
