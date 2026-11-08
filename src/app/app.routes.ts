import { Routes } from '@angular/router';
import { FullscreenMapPage } from './pages/fullscreen-map-page/fullscreen-map-page';
import { HousesPage } from './pages/houses-page/houses-page';
import { MarkesPage } from './pages/markes-page/markes-page';

export const routes: Routes = [


{
    path: 'fullscreen',
    component: FullscreenMapPage,
    title: 'Fullscreen Map',
},

{
    path: 'markers',
    component: MarkesPage,
    title: 'Marcadores',
},

{
    path: 'houses',
    component: HousesPage,
    title: 'Propiedades disponible',
},


{
    path: '**',
    redirectTo: 'fullscreen',
},


];
