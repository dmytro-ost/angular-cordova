import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { SpinnerComponent } from './spinner/spinner.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NotFoundComponent,
    SpinnerComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    MaterialModule,
    SpinnerComponent,
    NotFoundComponent,
    UserFormComponent
  ]
})
export class SharedModule { }
