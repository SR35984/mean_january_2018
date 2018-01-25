import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quote Ranks';
  quote = new Quote();
  quotes = [];

  onSubmit(){
    this.quotes.push(this.quote);
    this.quote = new Quote();
    console.log(this.quote);
  }

  votes(str, i){
    if(str === 'up'){
      this.quotes[i].votes++;
    }
    else{
      this.quotes[i].votes--;
    }
  }

  delete(i){
    this.quotes.splice(i,1);
  }
}
