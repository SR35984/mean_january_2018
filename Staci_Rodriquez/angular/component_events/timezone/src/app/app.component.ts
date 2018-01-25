import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time = new Date();
  timezone = '';

  zone(timezone) {
    this.time = new Date();
    if (timezone === 'PST') {
      this.time.setHours(this.time.getHours() - 2);
    } else if (timezone === 'MST') {
      this.time.setHours(this.time.getHours() - 1);
    } else if (timezone === 'EST') {
      this.time.setHours(this.time.getHours() + 1);
    }
    this.timezone = timezone;
  }
}