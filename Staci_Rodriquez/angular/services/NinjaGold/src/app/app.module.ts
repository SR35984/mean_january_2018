import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { DataComponent } from './data/data.component';
import { GoldService } from './gold.service';

@NgModule({
  declarations: [
    AppComponent,
    BuildingsComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GoldService],
  bootstrap: [AppComponent]
})
export class AppModule { }
