import { Component, OnInit } from '@angular/core';
import { NumsService } from '../nums.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  numbersB: number[] =[];

  constructor(private _numsService: NumsService) {   }

  ngOnInit() {
    this.numbersB = this._numsService.addNumB();
  }

  adds() {
    this._numsService.addNumB();
  }
}
