import { Component, OnInit } from '@angular/core';
import {OperationService} from "./operation.service";
import {Add} from "./operations/add";
import {Apply} from "./operations/apply";
import {Multiply} from "./operations/multiply";
import {Operation} from "./operations/operation";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  result : number;
  operator: string;
  value: number;
  operations : Array<string>;

  steps: Array<Operation>;

  constructor(private operationService: OperationService) {
    this.steps = [];
    this.result = null;
  }

  ngOnInit() {
    this.operationService.getOperations()
        .subscribe(
            operations => {
              this.operations = operations;
              this.operator = operations[0];
            }
        );
  }

  isSelectable() : boolean {
    if (this.steps.length === 0) {
      return true;
    }

    let lastStep = (this.steps[this.steps.length - 1] as any);
    return lastStep.operator !== 'apply';
  }

  add() {
    if (!this.isSelectable()) {
      return;
    }

    let step;
    switch (this.operator) {
      case 'add':
        step = new Add(this.value);
        break;
      case 'apply':
        step = new Apply(this.value);
        break;
      case 'multiply':
        step = new Multiply(this.value);
        break;
    }
    this.steps.push(step);
  }

  calculate() {
    let value = null, i;

    let lastStep = (this.steps[this.steps.length - 1] as any);
    value = lastStep.calculate(value);

    for(i=0; i<this.steps.length - 1; i++) {
      value = (this.steps[i] as any).calculate(value);
    }

    this.result = value;
  }

  reset() {
    this.result = null;
    this.steps = [];
  }
}
