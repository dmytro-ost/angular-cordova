import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { AddRoutingModule } from './add-routing.module';



@NgModule({
  declarations: [
    AddComponent
  ],
  imports: [
    CommonModule,
    AddRoutingModule
  ]
})
export class AddModule { }
