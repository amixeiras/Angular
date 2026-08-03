import { Routes } from '@angular/router';
import { TitleComponent } from './page/index/title/title.component';
import { CardComponent } from './page/portifolio/card/card.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './page/not-found/not-found.component';


export const routes: Routes = [
    {
        path: '',
        component: TitleComponent,
        pathMatch: 'full'
    },
    {
        path: 'card', component: CardComponent,// Acessa /card (sem ID)
        children: [
            { path: ':id', component: CardComponent } // Acessa /card/123 (com ID)
        ]
    },
    {
        path: 'notFound',
        component: NotFoundComponent
    },
    {
        path: '**',
        redirectTo: 'notFound'
    }
];
