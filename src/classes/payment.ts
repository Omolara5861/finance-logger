import { HasFormatter } from "../interfaces/interface.js";

export class Payment implements HasFormatter {

    constructor(readonly receipient: string, public details: string, private amount: number) {}

    format(): string {
        return ` ${this.receipient} is owed ${this.amount} for ${this.details}`;
    }
}