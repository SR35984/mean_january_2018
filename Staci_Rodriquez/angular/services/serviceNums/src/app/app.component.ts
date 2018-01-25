import { Component } from '@angular/core';
import { NumsService } from './nums.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sum = null;

  constructor(private _numsService: NumsService) {
  }

  calculate(){
    this.sum = this._numsService.totals();
  }
}
