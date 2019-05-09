import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './invoice/invoice.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './router-config';
import { PurchaseComponent } from './purchase/purchase.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [InvoiceComponent, PurchaseComponent, MenuComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class FinanceModule { }
