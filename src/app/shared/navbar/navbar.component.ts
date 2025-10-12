import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  activeSection: string = 'inicio';

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  navigateToSection(section: string): void {
    this.activeSection = section;

    // Si no estamos en la página home, navegar primero
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        // Esperar un momento para que se cargue la página
        setTimeout(() => {
          this.scrollToSection(section);
        }, 100);
      });
    } else {
      this.scrollToSection(section);
    }
  }

  private scrollToSection(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      const yOffset = -80; // Offset para el navbar fixed
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
