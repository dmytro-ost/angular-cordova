import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { AddRoutingModule } from './add-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AddComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AddRoutingModule
  ]
})
export class AddModule { }
