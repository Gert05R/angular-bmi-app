import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent {
  weight: number = 0;
  height: number = 0;
  bmi: number = 0;

  calculateBMI() {
    this.bmi = this.weight / ((this.height / 100) ** 2);
  }
}


