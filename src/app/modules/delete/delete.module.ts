import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './delete/delete.component';
import { DeleteRoutingModule } from './delete-routing.module';



@NgModule({
  declarations: [
    DeleteComponent
  ],
  imports: [
    CommonModule,
    DeleteRoutingModule
  ]
})
export class DeleteModule { }
