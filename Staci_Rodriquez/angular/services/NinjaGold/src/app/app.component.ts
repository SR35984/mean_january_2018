import { Component } from '@angular/core';
import { GoldService } from './gold.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gold: number = 0;

  constructor(private _goldService: GoldService) { }

  ngOnInit() {
    this.gold = this._goldService.goldSum();
  }
}
