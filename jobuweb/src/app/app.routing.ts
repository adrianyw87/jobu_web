import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from '../app/components/main/main.component';

const appRoutes: Routes = [
    {path: '', component: MainComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

