import { Component, OnInit } from '@angular/core';
import { GoldService } from '../gold.service';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {
  found: number = 0;
  activity: any = [];

  constructor(private _goldService: GoldService) { }

  ngOnInit() {
  }

  getGold(building){
    this.found = this._goldService.findGold(building);
  }
}
