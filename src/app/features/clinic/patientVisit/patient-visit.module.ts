import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { CardComponent } from '../../../shared/components/card/card.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import PatientVisitComponent from './presentation/patient-visit.component';
import { PatientVisitRouting } from './patient-visit.routing';

@NgModule({
  declarations: [PatientVisitComponent],
  imports: [
    CommonModule,
    FormsModule,
    PatientVisitRouting,
    ReactiveFormsModule,
    SharedModule,
    CardComponent,
    MatTooltipModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: []
})
export class PatientVisitModule {}
