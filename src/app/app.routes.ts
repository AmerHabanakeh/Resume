import { Routes } from '@angular/router';
import { layoutRoutes } from './core/layout/layout.routes';
import { authRoute } from './core/auth/auth.routes';
import { dashboardRoute } from './features/dashboard/dashboard.routes';

export const routes: Routes = [
    {
        path:'',
        children:layoutRoutes
    },
    {
        path: 'auth',
        children: authRoute
    },
    {
        path: 'dashboard',
        children: dashboardRoute
    }
];
