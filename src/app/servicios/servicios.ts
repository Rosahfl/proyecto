import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-servicios',
 standalone: true, 
imports: [CommonModule, RouterModule, Navbar, Footer], 
  templateUrl: './servicios.html',
  styleUrl: './servicios.scss'
})
export class Servicios {

}
