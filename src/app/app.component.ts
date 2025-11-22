import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { FooterComponent } from './shared/footer/footer.component';
import { WhatsappComponent } from './shared/whatsapp/whatsapp.component';
import { LoadingService } from './shared/services/loading.service';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent, LoadingComponent, FooterComponent, WhatsappComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'brisa';

  constructor(
    private router: Router,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    // Mostrar loading al iniciar navegación
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe(() => {
      this.loadingService.show();
    });

    // Ocultar loading cuando termina la navegación
    this.router.events.pipe(
      filter(event =>
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      )
    ).subscribe(() => {
      // Delay mínimo para que se vea la animación
      setTimeout(() => {
        this.loadingService.hide();
      }, 300);
    });
  }
}
