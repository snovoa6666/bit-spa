import { Routes } from '@angular/router';
import { EquipoFrontComponent } from './components/equipo-front/equipo-front.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { EquipoBackComponent } from './components/equipo-back/equipo-back.component';
import { LiderEquipoComponent } from './components/lider-equipo/lider-equipo.component';
import { SegundaAppiComponent } from './components/segunda-appi/segunda-appi.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PokeapiComponent } from './components/pokeapi/pokeapi.component';





export const routes: Routes = [
    {path: "equipoback", component:EquipoBackComponent, title: 'EquipoBack'},
    {path: "equipofront", component:EquipoFrontComponent, title: 'EquipoFront'},
    {path: "lider", component:LiderEquipoComponent, title: 'LiderEquipo'},
    {path: "nosotros", component:NosotrosComponent, title: 'Nosotros'},
    {path: "appi", component:SegundaAppiComponent, title: 'Nombre_appi'},
    {path: "pokeappi", component:PokeapiComponent, title: 'Pokeappi'},
    {path: ''   , redirectTo: '/nosotros', pathMatch: 'full'},
    { path: '**', component:PageNotFoundComponent, title: 'Error 404' },
   
];
