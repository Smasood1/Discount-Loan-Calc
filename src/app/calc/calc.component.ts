import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
      
  }

  price: any;

  discount: any;

  priceAfterDiscount: any;

  discountCalc(): any {
    var actualDiscount = (this.discount / 100) * this.price;
    return  this.priceAfterDiscount = "$" + (Math.round((this.price - actualDiscount) * 100) / 100).toFixed(2);
  }

}


