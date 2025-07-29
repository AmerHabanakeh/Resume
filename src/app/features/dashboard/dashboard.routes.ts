import { Routes } from "@angular/router";
import { StatisticsComponent } from "./components/statistics/statistics.component";

export const dashboardRoute: Routes = [
    {
        path: '',
        component: StatisticsComponent
    }
]