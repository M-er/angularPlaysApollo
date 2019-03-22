import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponent } from './reactive.component';
import { SharedModule } from '@app/shared';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ReactiveComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: ReactiveComponent }])
  ]
})
export class ReactiveModule { }
