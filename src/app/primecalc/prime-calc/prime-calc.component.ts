import { Component, Inject } from '@angular/core';
import { PrimeCalcService, PRIME_CALC_TOKEN } from '../../prime-calc.service';

@Component({
  selector: 'app-prime-calc',
  templateUrl: './prime-calc.component.html',
  styleUrls: ['./prime-calc.component.css']
})
export class PrimeCalcComponent {

  number!: number;
  isPrime!: boolean;

  constructor(@Inject(PRIME_CALC_TOKEN) private primeCalc: PrimeCalcService) { }

  checkPrime() {
    this.isPrime = this.primeCalc.calculatePrime(this.number);
  }

}
