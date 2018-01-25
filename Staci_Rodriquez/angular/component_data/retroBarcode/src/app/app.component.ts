import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors: string[];

  constructor() {
    this.colors = [];
    for (var x = 0; x < 500; x++) {
      var random_num = (Math.floor(Math.random() * 8)) + 1;
      if (random_num === 1) {
        this.colors.push('Chartreuse');
      } else if (random_num === 2) {
        this.colors.push('DarkMagenta');
      } else if (random_num === 3) {
        this.colors.push('Orchid');
      } else if (random_num === 4) {
        this.colors.push('DeepPink');
      } else if (random_num === 5) {
        this.colors.push('Cyan');
      } else if (random_num === 6) {
        this.colors.push('SpringGreen');
      } else if (random_num === 7) {
        this.colors.push('Yellow');
      } else if (random_num === 8) {
        this.colors.push('DodgerBlue');
      }
    }
  }
}
