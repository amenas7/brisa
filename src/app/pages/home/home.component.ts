import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  selectedPlanIndex: number = 1; // Premium por defecto

  categories = [
    {
      name: 'Bodas',
      icon: 'heart-fill',
      description: 'Invitaciones elegantes para tu gran día'
    },
    {
      name: 'Cumpleaños',
      icon: 'gift-fill',
      description: 'Celebra con estilo y creatividad'
    },
    {
      name: 'Eventos Corporativos',
      icon: 'briefcase-fill',
      description: 'Profesionalismo en cada detalle'
    }
  ];

  pricingPlans = [
    {
      name: 'Básico',
      price: '29',
      features: [
        'Diseño personalizable',
        'Hasta 50 invitados',
        'Soporte por email',
        '1 revisión'
      ]
    },
    {
      name: 'Premium',
      price: '59',
      features: [
        'Diseño personalizable',
        'Invitados ilimitados',
        'Soporte prioritario',
        'Revisiones ilimitadas',
        'Animaciones especiales'
      ]
    },
    {
      name: 'Empresarial',
      price: '99',
      features: [
        'Todo de Premium',
        'Diseño desde cero',
        'Cuenta dedicada',
        'Branding corporativo'
      ]
    }
  ];

  selectPlan(index: number): void {
    this.selectedPlanIndex = index;
  }
}
