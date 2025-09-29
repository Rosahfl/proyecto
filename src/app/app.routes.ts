import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Servicios } from './servicios/servicios';
import { Contacto } from './contacto/contacto';


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

