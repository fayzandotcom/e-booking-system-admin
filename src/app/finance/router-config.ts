import { Routes } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { PurchaseComponent } from './purchase/purchase.component';

export const appRoutes:Routes = [
    {
        path: '',
        component: InvoiceComponent,
        pathMatch: 'full'
    },
    {
        path: 'invoice',
        component: InvoiceComponent
    },
    {
        path: 'purchase',
        component: PurchaseComponent
    }
]