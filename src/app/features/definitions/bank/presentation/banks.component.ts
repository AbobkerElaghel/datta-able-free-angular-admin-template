import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BanksFacade } from '../banks.facade';
import { MessageType } from '../../../../shared/shared.interfaces';
import { SharedFacade } from '../../../../shared/shared.facade';
declare var $: any;
@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.scss']
})

// export default class SecondmentToOtherPostionComponent {}
export default class BanksComponent implements OnInit {
  edit: boolean = false;

  registerForm = this.fb.group({
    id: [''],
    name: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    protected banksFacade: BanksFacade,
    private sharedFacade: SharedFacade,
    private cdr: ChangeDetectorRef
  ) {
    this.onSubmit();
  }

  ngOnInit() {
    this.edit = false;
  }

  onSubmit(): void {
    this.registerForm.controls.id.setValue('');
    this.banksFacade.GetBanks();
  }

  onDelete(Id: string): void {
    if (confirm('هل أنت متأكد من عملية المسح؟')) {
      this.edit = false;
      this.banksFacade.deleteBank(Id);
      this.registerForm.reset();
    }
  }
  onReset(): void {
    this.edit = false;
    this.registerForm.reset();
    this.registerForm.setErrors(null);
  }

  onAdd(): void {
    if (this.registerForm.valid) {
      if (this.edit) {
        this.banksFacade.UpdateBank(this.registerForm?.value);
        this.onReset();
      } else {
        this.banksFacade.AddBank(this.registerForm?.value);
        this.onReset();
      }
    } else {
      this.showNotification('عفواً، الرجاء ادخال اسم المصرف', '');
    }
  }
  showNotification(title, text) {
    this.sharedFacade.showMessage(MessageType.warning, title, ['']);
  }

  onEdit(bank: any): void {
    this.registerForm.patchValue(bank);
    this.edit = true;
  }
}
