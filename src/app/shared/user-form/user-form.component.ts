import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  providers: [DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent implements OnInit {

  @Input() user!: User;
  @Input() actionButton!: string;
  @Input() cancelButton = 'Cancel';
  @Input() isReadOnly = false;
  @Output() success = new EventEmitter<User>();
  @Output() cancel = new EventEmitter();

  userForm!: FormGroup;

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.initForm();
  }

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    if (!this.userForm.valid) {
      return;
    }

    this.success.emit({
      ...this.userForm.value,
      dateOfBirth: this.datePipe.transform(this.userForm.get('dateOfBirth')?.value, 'yyyy-MM-dd'),
      createDate: this.datePipe.transform(this.userForm.get('createDate')?.value, 'yyyy-MM-dd'),
    });
  }

  private initForm(): void {
    this.userForm = new FormGroup({
      id: new FormControl({ value: this.user.id, disabled: this.isReadOnly }, Validators.required),
      firstName: new FormControl({ value: this.user.firstName, disabled: this.isReadOnly }, Validators.required),
      lastName: new FormControl({ value: this.user.lastName, disabled: this.isReadOnly }, Validators.required),
      email: new FormControl({ value: this.user.email, disabled: this.isReadOnly }, Validators.required),
      emailVerified: new FormControl({ value: this.user.emailVerified, disabled: this.isReadOnly }, Validators.required),
      dateOfBirth: new FormControl({ value: this.user.dateOfBirth, disabled: this.isReadOnly }, Validators.required),
      createDate: new FormControl({ value: this.user.createDate, disabled: this.isReadOnly }, Validators.required),
    });
  }
}
