import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-contacto',
  standalone: true, 
imports: [CommonModule, RouterModule, Footer, Navbar], 
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss'
})
export class Contacto {

}
