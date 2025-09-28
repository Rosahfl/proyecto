import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Servicios } from './servicios/servicios';
import { Contacto } from './contacto/contacto';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';

export const routes: Routes = [
  { path: '',
     component: Inicio,
    title:'inicio'
   },
  { path: 'servicios',
     component: Servicios, 
    title:'servicios'
  },
  { path: 'contacto', 
    component: Contacto, 
  title:'contact'
}

];

