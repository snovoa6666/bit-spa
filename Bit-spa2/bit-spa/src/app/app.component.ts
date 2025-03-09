import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { EquipoFrontComponent } from './components/equipo-front/equipo-front.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { EquipoBackComponent } from './components/equipo-back/equipo-back.component';
import { LiderEquipoComponent } from './components/lider-equipo/lider-equipo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavComponent,FooterComponent,EquipoFrontComponent,NosotrosComponent,EquipoBackComponent,LiderEquipoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bit-spa';
}
