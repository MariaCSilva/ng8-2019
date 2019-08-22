import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { AccessControlModule } from './modules/access-control/access-control.module';

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccessControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
