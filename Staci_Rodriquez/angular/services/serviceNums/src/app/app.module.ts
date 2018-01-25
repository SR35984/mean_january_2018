import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';
import { NumsService } from './nums.service'

@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    BetaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NumsService],
  bootstrap: [AppComponent]
})
export class AppModule { }