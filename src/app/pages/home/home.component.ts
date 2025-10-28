import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TestimonialsSliderComponent } from '../../shared/testimonials-slider/testimonials-slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, TestimonialsSliderComponent],
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
      name: '15 Años',
      icon: 'stars',
      description: 'Celebra esta ocasión especial con elegancia'
    },
    {
      name: 'Cumpleaños',
      icon: 'gift-fill',
      description: 'Celebra con estilo y creatividad'
    }
  ];

  pricingPlans = [
    {
      name: 'Básico',
      price: '9.99',
      features: [
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet'
      ]
    },
    {
      name: 'Premium',
      price: '19.99',
      features: [
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet'
      ]
    },
    {
      name: 'Personalizado',
      price: '39.99',
      features: [
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet'
      ]
    }
  ];

  selectPlan(index: number): void {
    this.selectedPlanIndex = index;
  }
}
