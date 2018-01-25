import { Component, OnInit } from '@angular/core';
import { NumsService } from '../nums.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  numbersA: number[] =[];
  sumA: number = null;

  constructor(private _numsService: NumsService) {
   }

  ngOnInit() {
    this.numbersA = this._numsService.addNumA();
  }

  adds() {
    this._numsService.addNumA();
  }
}
