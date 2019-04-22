import {Operation} from "./operation";

export class Multiply extends Operation {
    constructor(value: number) {
        super("multiply", value)
    }

    calculate(value: number): number {
        return this.value * Number(value);
    }
}
