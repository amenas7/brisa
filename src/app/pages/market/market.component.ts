import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Invitation {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  features: string[];
  imageUrl?: string;
}

@Component({
  selector: 'app-market',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './market.component.html',
  styleUrl: './market.component.scss'
})
export class MarketComponent implements OnInit, AfterViewInit {

  constructor() {
    // Forzar scroll al inicio inmediatamente al construir el componente
    if (typeof window !== 'undefined') {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }
  searchTerm: string = '';
  selectedCategory: string = 'all';
  // categories: string[] = ['Bodas', 'Cumpleaños', 'XV Años', 'Baby Shower', 'Corporativo', 'Graduación'];
  categories: string[] = ['Bodas', 'Cumpleaños', 'XV Años'];

  invitations: Invitation[] = [
    {
      id: 1,
      title: 'Elegancia Clásica',
      description: 'Invitación elegante perfecta para bodas tradicionales',
      price: 45,
      category: 'Bodas',
      rating: 4.8,
      features: ['Personalizable', 'Música de fondo', 'Contador regresivo', 'Mapa interactivo']
    },
    {
      id: 2,
      title: 'Romance Moderno',
      description: 'Diseño contemporáneo con detalles románticos',
      price: 55,
      category: 'Bodas',
      rating: 4.9,
      features: ['Animaciones', 'Galería de fotos', 'RSVP digital', 'Lista de regalos']
    },
    {
      id: 3,
      title: 'Fiesta Infantil',
      description: 'Colorida invitación para cumpleaños de niños',
      price: 35,
      category: 'Cumpleaños',
      rating: 4.7,
      features: ['Temas personalizables', 'Música festiva', 'Juegos interactivos']
    },
    {
      id: 4,
      title: 'Celebración Adulto',
      description: 'Sofisticada invitación para cumpleaños adultos',
      price: 40,
      category: 'Cumpleaños',
      rating: 4.6,
      features: ['Diseño elegante', 'Confirmación asistencia', 'Ubicación GPS']
    },
    {
      id: 5,
      title: 'Quinceañera Soñada',
      description: 'Invitación encantadora para XV años',
      price: 50,
      category: 'XV Años',
      rating: 4.9,
      features: ['Diseño de princesa', 'Vals virtual', 'Galería', 'Contador']
    },
    {
      id: 6,
      title: 'Dulce Espera',
      description: 'Tierna invitación para baby shower',
      price: 38,
      category: 'Baby Shower',
      rating: 4.8,
      features: ['Diseño adorable', 'Lista de regalos', 'Juegos', 'Confirmación']
    },
    {
      id: 7,
      title: 'Evento Corporativo Pro',
      description: 'Profesional y elegante para eventos empresariales',
      price: 65,
      category: 'Corporativo',
      rating: 4.7,
      features: ['Branding corporativo', 'Agenda del evento', 'Networking', 'QR check-in']
    },
    {
      id: 8,
      title: 'Logro Académico',
      description: 'Celebra tu graduación con estilo',
      price: 42,
      category: 'Graduación',
      rating: 4.6,
      features: ['Diseño académico', 'Timeline estudiantil', 'Galería', 'Mensajes']
    },
    {
      id: 9,
      title: 'Jardín Encantado',
      description: 'Boda al aire libre con temática natural',
      price: 52,
      category: 'Bodas',
      rating: 4.9,
      features: ['Flores animadas', 'Música ambiente', 'Mapa 3D', 'Timeline']
    }
  ];

  filteredInvitations: Invitation[] = [];

  ngOnInit() {
    this.filteredInvitations = this.invitations;
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  ngAfterViewInit() {
    // Asegurar que el scroll esté al inicio después de renderizar
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredInvitations = this.invitations;
    } else {
      this.filteredInvitations = this.invitations.filter(inv => inv.category === category);
    }
  }
}
