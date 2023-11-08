import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoSharedComponentsComponent } from './demo-shared-components/demo-shared-components.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './modules/material/material.module';

@NgModule({
  declarations: [
    AppComponent,       
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoSharedComponentsComponent,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
