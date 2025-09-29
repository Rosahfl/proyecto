import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  isMenuCollapsed = true;
  
  constructor(public router: Router) {}

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }
}

