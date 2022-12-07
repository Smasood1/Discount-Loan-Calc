import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit{
  constructor(){}

  ngOnInit(): void {
      
  }

amount: any;  //P

rate: any;  //r

months: any;  //n

monthlyPayment: any; //pmt

// monthlyPayCalc(): any{
//   var interest = (this.amount * (this.rate * 0.01))/this.months;
//   return this.monthlyPayment = "$" + ((this.amount/this.months) + interest).toFixed(2);
// }

monthlyPayCalc(): any{

let rate = (this.rate * 0.01)/12;

  var x = rate * (1 + rate) ** this.months;
  var y = ((1+rate) ** this.months)-1;

  return this.monthlyPayment = "$" + (this.amount * (x/y)).toFixed(2);

  
}


}
