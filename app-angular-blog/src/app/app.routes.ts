import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './site/home/home.component';
import { PartialViewComponent } from './partial-view/partial-view.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'content',
        component: PartialViewComponent
    }
];
