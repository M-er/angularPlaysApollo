import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicadoresRoutingModule } from './indicadores-routing.module';
import { IndicadoresComponent } from './indicadores.component';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [IndicadoresComponent],
  imports: [
    IndicadoresRoutingModule,
    CommonModule,
    SharedModule,
  ]
})
export class IndicadoresModule { }
