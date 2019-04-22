import {Operation} from "./operation";

export class Add extends Operation {
    constructor(value: number) {
        super("add", value)
    }

    calculate(value?: number) : number {
        return this.value + Number(value);
    }
}
