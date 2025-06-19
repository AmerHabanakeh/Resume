import { Routes } from '@angular/router';
import { layoutRoutes } from './core/layout/layout.routes';

export const routes: Routes = [
    {
        path:'',
        children:layoutRoutes
    }
];
