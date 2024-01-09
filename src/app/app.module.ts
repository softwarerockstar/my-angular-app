import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoSharedComponentsComponent } from './shared/components/demo-shared-components/demo-shared-components.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { RouterModule, provideRouter, withDebugTracing, withRouterConfig } from '@angular/router';
import { routes } from './app.routes';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,       
  ],
  imports: [    
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    DemoSharedComponentsComponent,
    MaterialModule
  ],
  providers: [
    provideRouter(routes,
      withDebugTracing(),
      withRouterConfig({paramsInheritanceStrategy: 'always'}))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
