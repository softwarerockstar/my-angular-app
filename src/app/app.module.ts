import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardLinkComponent } from './card-link/card-link.component';
import { CardLinkListComponent } from './card-link-list/card-link-list.component';
import { CardLinkList2Component, CardLinkContentDirective, CardLinkFooterDirective } from './card-link-list2/card-link-list2.component';

@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardLinkComponent,
    CardLinkListComponent,   
    CardLinkList2Component,
    CardLinkContentDirective,
    CardLinkFooterDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
