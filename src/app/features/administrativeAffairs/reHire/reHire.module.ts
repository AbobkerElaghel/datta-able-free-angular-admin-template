import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReHireRouting} from "./reHire.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {ReHireFacade} from "./reHire.facade";
import {ReHireServices} from "./reHire.services";
import {SharedModule} from "../../../shared/shared.module";
import ReHireComponent from './presentation/reHire.component';
import { CardComponent } from '../../../shared/components/card/card.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MessagesComponent } from '../../../shared/messages/messages.component';
import { EmployeeFacade } from '../employee/employee.facade';
import { EmployeeServices } from '../employee/employee.services';
import { DefinitionPositionFacade } from '../definition-position/definition-position.facade';
import { DefinitionPositionServices } from '../definition-position/definition-position.services';
import { JobTitleFacade } from '../job-title/job-title.facade';
import { JobTitleServices } from '../job-title/job-title.services';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ReHireComponent,
  ],
  imports: [
    CommonModule,
    ReHireRouting,
    ReactiveFormsModule,
    SharedModule,
    CardComponent,
    MatTooltipModule,
    MatInputModule,
    MatButtonModule,
    NgbTypeahead
  ],
  providers:[ReHireFacade,ReHireServices, EmployeeFacade,
    EmployeeServices]
})
export class ReHireModule { }
