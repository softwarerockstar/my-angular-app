import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardLinkComponent } from './card-link/card-link.component';
import { MultiCardLinkComponent } from './card-link-list/card-link-list.component';

@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardLinkComponent,
    MultiCardLinkComponent,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
