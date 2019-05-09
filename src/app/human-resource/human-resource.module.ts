import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveComponent } from './leave/leave.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './router-config';

@NgModule({
  declarations: [LeaveComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class HumanResourceModule { }
