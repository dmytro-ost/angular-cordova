import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { EditRoutingModule } from './edit-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EditRoutingModule
  ]
})
export class EditModule { }
