import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PRIME_CALC_TOKEN,PrimeCalcService } from '../prime-calc.service';
import { PrimeCalcComponent } from './prime-calc/prime-calc.component';



@NgModule({
  declarations: [PrimeCalcComponent],
  imports: [
    CommonModule,
    FormsModule
  ],exports:[
    PrimeCalcComponent
  ],
  providers:[{ provide: PRIME_CALC_TOKEN, useExisting: PrimeCalcService }]
})
export class PrimecalcModule { }
