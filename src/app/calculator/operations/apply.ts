import {Operation} from "./operation";

export class Apply extends Operation {
    constructor(value: number) {
        super("apply", value)
    }

    calculate(value?: number): number {
        return this.value;
    }
}