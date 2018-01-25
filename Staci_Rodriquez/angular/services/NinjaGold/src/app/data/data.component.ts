import { Component, OnInit } from '@angular/core';
import { GoldService } from '../gold.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  activity = [];
  constructor(private _goldService: GoldService) { }

  ngOnInit() {
      this.activity = this._goldService.getData();
    }
  }

