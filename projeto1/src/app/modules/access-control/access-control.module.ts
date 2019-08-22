import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessControlRoutingModule } from './access-control-routing.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [LoginComponent, HomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class AccessControlModule { }
