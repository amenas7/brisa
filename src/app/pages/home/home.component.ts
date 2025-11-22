import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TestimonialsSliderComponent } from '../../shared/testimonials-slider/testimonials-slider.component';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';

@Component({
    selector: 'app-home',
    imports: [RouterLink, CommonModule, TestimonialsSliderComponent, LottieComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

  // Descuentos por tipo de plan (en porcentaje)
  discounts = {
    basico: 10,
    premium: 10,
    personalizada: 15
  };


  lottieOptions: AnimationOptions = {
    path: '/assets/images/choice.json',
    loop: true,
    autoplay: true
  };

  lottieOptionsSend: AnimationOptions = {
    path: '/assets/images/send.json',
    loop: true,
    autoplay: true
  };

  lottieOptionsRocket: AnimationOptions = {
    path: '/assets/images/rocket.json',
    loop: true,
    autoplay: true
  };

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
      price: '49.99',
      features: [
        'Diseño prestablecido',
        'Personalización básica (texto y fotos)'
      ]
    },
    {
      name: 'Premium',
      price: '79.99',
      features: [
        'Todos los beneficios del plan básico',
        'Música de fondo personalizada',
        'Galería de fotos',
        'Sección de confirmación de asistencia con Google Sheets',
        'Sección de mapa interactivo con Google Maps'
      ]
    },
    {
      name: 'Personalizada',
      price: '119.99',
      features: [
        'Todos los beneficios del plan premium',
        'Diseño 100% a medida',
        'Asesoría personalizada de diseño',
        'Dominio o URL personalizada'
      ]
    }
  ];

  selectPlan(index: number): void {
    this.selectedPlanIndex = index;
  }

  // Obtiene el descuento para un plan específico
  getDiscount(planName: string): number {
    const key = planName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return (this.discounts as any)[key] || 0;
  }

  // Calcula el precio con descuento
  getDiscountedPrice(originalPrice: string, planName: string): number {
    const price = parseFloat(originalPrice);
    const discount = this.getDiscount(planName);
    return price - (price * discount / 100);
  }

  // Verifica si un plan tiene descuento
  hasDiscount(planName: string): boolean {
    return this.getDiscount(planName) > 0;
  }
}
