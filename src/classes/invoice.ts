// Import the HasFormatter interface
import { HasFormatter } from "../interfaces/interface.js";

// Define the Invoice class that implements the HasFormatter interface
export class Invoice implements HasFormatter {

    // Initialize the client, details, and amount properties in the constructor using parameter properties and the readonly and private modifiers
    constructor(readonly client: string, public details: string, private amount: number) {}

    // Implement the format method required by the HasFormatter interface
    format(): string {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
