export class Operation {
    protected value: number;
    private _operator: string;

    constructor(operator: string,value: number) {
        this._operator = operator;
        this.value = Number(value);
    }

    get operator(): string {
        return this._operator;
    }

    toString(operator: string) {
        return `${this._operator} ${this.value}`
    }
}
