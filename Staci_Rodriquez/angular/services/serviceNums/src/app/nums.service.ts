import { Injectable } from '@angular/core';

@Injectable()
export class NumsService {
  numbersA: number[] = [];
  numbersB: number[] = [];
  sumA: number = 0;
  sumB: number = 0;
  total: number = 0;

    constructor() {}

    addNumA(){
    var random = (Math.floor(Math.random() * 5)) + 1;
    this.sumA += random;
    this.numbersA.push(random);
    return this.numbersA;
    }

    addNumB(){
      var random = (Math.floor(Math.random() * 5)) + 1;
      this.sumB += random;
      this.numbersB.push(random);
      return this.numbersB;
      }

    totals(){
      var diff = this.sumA - this.sumB;
      this.total = diff;
      return this.total;
    }
}