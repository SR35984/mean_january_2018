import { Injectable } from '@angular/core';

@Injectable()
export class GoldService {
  sum: number = 0;
  farm: number = 0;
  cave: number = 0;
  casino: number = 0;
  house: number = 0;
  data: any[] = [];

  constructor() { }

  findGold(building) {
    if(building == 'farm'){
      this.farm = Math.floor(Math.random() * 4) + 2;
      this.sum += this.farm;
      this.data.push(`You earned ${this.farm} gold from the farm!`);
      return this.sum;
    }
    else if(building == 'cave'){
      this.cave = Math.floor(Math.random() * 6) + 5;
      this.sum += this.cave;
      this.data.push(`You earned ${this.cave} gold from the cave!`);
      return this.sum;
    }
    else if(building == 'casino'){
      let max = 100
      let min = -100
      this.casino = Math.floor(Math.random() * max - min) + min;
      this.sum += this.casino;
      if(this.casino > 0){
        this.data.push(`You won ${this.casino} gold from the casino!`);
      }
      else{
        this.data.push(`You lost ${this.farm} gold from the casino!`);
        return this.sum;
      }
    }
    else if(building == 'house'){
      this.house = Math.floor(Math.random() * 9) + 7;
      this.sum += this.house;
      this.data.push(`You earned ${this.house} gold from the house!`);
      return this.sum;
    }
  }

  goldSum(){
    return this.sum;
  }

  getData(){
    return this.data;
  }
}
