import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { UserComponent } from './user/user.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';

export const appRoutes:Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'room',
        component: RoomComponent
    },
    {
        path: 'room-detail/:id',
        component: RoomDetailComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'finance',
        loadChildren: './finance/finance.module#FinanceModule'
    },
    {
        path: 'human-resource',
        loadChildren: './human-resource/human-resource.module#HumanResourceModule'
    },
    // default path
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    // if nothing match then redirect to home
    {
        path: '**',
        redirectTo: 'home'
    }
]