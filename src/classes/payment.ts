// Import the HasFormatter interface
import { HasFormatter } from "../interfaces/interface.js";

// Define the Payment class that implements the HasFormatter interface
export class Payment implements HasFormatter {

    // Initialize the recipient, details, and amount properties in the constructor using parameter properties and the readonly and private modifiers
    constructor(readonly recipient: string, public details: string, private amount: number) {}

    // Implement the format method required by the HasFormatter interface
    format(): string {
        return ` ${this.recipient} is owed €${this.amount} for ${this.details}`;
    }
}
