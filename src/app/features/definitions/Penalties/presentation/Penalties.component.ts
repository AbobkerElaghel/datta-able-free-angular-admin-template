import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import { PenaltiesFacade } from '../Penalties.facade';
import { optionsPenaltyType } from '../Penalties.interface';
import { MessageType } from '../../../../shared/shared.interfaces';
import { SharedFacade } from '../../../../shared/shared.facade';
declare var $: any;

@Component({
  selector: 'app-rewards-types',
  templateUrl: './Penalties.component.html',
  styleUrl: './Penalties.component.scss'
})
export class PenaltiesComponent implements OnInit {
  edit: boolean = false;
  registerForm = this.fb.group({
    id: [''],
    penaltyTypeId: [null, Validators.required],
    discount: [null, Validators.required],
    penaltyTypeName: [''],
  });
  constructor(
      private fb: FormBuilder,
      protected penaltiesFacade: PenaltiesFacade,
      private sharedFacade: SharedFacade
  ) {
    this.onSubmit();
  }

  ngOnInit() {
    this.edit = false;
  }
  onSubmit(): void {
    this.registerForm.controls.id.setValue('');
    this.penaltiesFacade.GetPenalties();
  }
  onDelete(Id: string): void {
    this.edit = false;
    this.penaltiesFacade.deletePenalties(Id);
    this.registerForm.reset();
  }
  onReset(): void {
    this.edit = false;
    this.registerForm.reset();
    this.registerForm.setErrors(null);
  }
  onAdd(): void {
    if (this.registerForm.valid) {
      this.registerForm.value.penaltyTypeName = optionsPenaltyType.find(option => option.value == this.registerForm.value.penaltyTypeId)?.label;

      if(this.edit) {
        this.penaltiesFacade.UpdatePenalties(this.registerForm?.value);
        this.onReset();
      }else{
        this.penaltiesFacade.AddPenalties(this.registerForm?.value);
        this.onReset();
      }
    }else {
      if(this.registerForm.value.penaltyTypeId  == 0 || this.registerForm.controls.penaltyTypeId.invalid ){
        this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء اختر نوع الجزاء  ', ['']);
        return;
      }
      else if( this.registerForm.controls.discount.invalid ){
        this.sharedFacade.showMessage(MessageType.warning, 'عفواً، الرجاء ادخال الخصم', ['']);
        return;
      }
    }
  }
  onEdit(penalties: any): void {
    this.registerForm.patchValue(penalties);
    this.registerForm.value.penaltyTypeName = optionsPenaltyType.find(option => option.value == this.registerForm.value.penaltyTypeId)?.label;
    this.edit = true;
  }
  activate(item): void {
    this.penaltiesFacade.activate(item.id,!item.isActive);
    this.registerForm.reset();
  }
  protected readonly optionsPenaltyType = optionsPenaltyType;
}

