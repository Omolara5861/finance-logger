import { HasFormatter } from "../interfaces/interface.js";

export class Invoice implements HasFormatter {
    constructor(readonly client: string, public details: string, private amount: number) {}

    format(): string {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}