import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CoreRoutingModule } from './core-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CoreService } from './core.service';
import { CoreFacade } from './core.facade';

import { MainComponent } from './Presentation/main/main/main.component';
import LoginComponent from './Presentation/login/login.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [ MainComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreRoutingModule,
    ReactiveFormsModule,
    LoginComponent,
    SharedModule,
    MatDialogModule
  ],
  exports: [LoginComponent, MainComponent ],
  providers: [CoreService, CoreFacade]
})
export class CoreModule {
}
