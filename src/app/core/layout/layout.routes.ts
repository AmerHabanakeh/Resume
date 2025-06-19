import { Routes } from "@angular/router";
import { MainLayoutComponent } from "./components/main-layout/main-layout.component";
import { homeRoutes } from "../../features/home/home.routes";

export const layoutRoutes:Routes = [
    {
        path:"",
        pathMatch:'full',
        redirectTo:"/home"
    },
    {
        path:"",
        component:MainLayoutComponent,
        children:[
            {
                path:'home',
                children:homeRoutes
            }
        ]
    },    
]