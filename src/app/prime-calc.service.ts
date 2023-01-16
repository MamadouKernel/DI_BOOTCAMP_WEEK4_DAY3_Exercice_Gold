import { Injectable, InjectionToken } from '@angular/core';

export const PRIME_CALC_TOKEN = new InjectionToken<PrimeCalcService>('primeCalc');

@Injectable({
  providedIn: 'root',
  useExisting: PRIME_CALC_TOKEN
})
export class PrimeCalcService {

  calculatePrime(number: number): boolean {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
}
