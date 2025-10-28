import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testimonial } from './testimonial.interface';

@Component({
  selector: 'app-testimonials-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials-slider.component.html',
  styleUrl: './testimonials-slider.component.scss'
})
export class TestimonialsSliderComponent implements OnInit, OnDestroy {
  private isDragging = false;
  private startX: number = 0;
  private scrollLeft: number = 0;
  private autoplayInterval: any;
  private readonly AUTOPLAY_SPEED = 3000; // 3 segundos
  private readonly CARD_WIDTH = 382; // 350px + 32px gap

  testimonials: Testimonial[] = [
    {
      text: "¡Increíble servicio! La invitación quedó hermosa y todos nuestros invitados quedaron encantados. El proceso fue muy fácil y el resultado superó nuestras expectativas.",
      author: "María García",
      event: "Boda",
      date: "Junio 2023"
    },
    {
      text: "La calidad y el diseño son excepcionales. Nos encantó poder personalizar cada detalle. El soporte fue muy atento y respondieron todas nuestras dudas rápidamente.",
      author: "Carlos Mendoza",
      event: "Bautizo",
      date: "Mayo 2023"
    },
    {
      text: "Una forma moderna y elegante de invitar a nuestros seres queridos. La invitación digital nos ayudó a ahorrar tiempo y fue muy práctica para nuestros invitados.",
      author: "Ana Sánchez",
      event: "Cumpleaños",
      date: "Abril 2023"
    },
    {
      text: "Excelente atención y diseños muy originales. La invitación fue un éxito total y todos preguntaban dónde la habíamos conseguido. ¡Totalmente recomendado!",
      author: "Luis Torres",
      event: "Aniversario",
      date: "Marzo 2023"
    },
    {
      text: "Quedamos encantados con el resultado final. La invitación capturó perfectamente el estilo que buscábamos y el proceso de personalización fue muy intuitivo.",
      author: "Patricia Flores",
      event: "Baby Shower",
      date: "Febrero 2023"
    },
    {
      text: "La mejor decisión para nuestra boda. Las animaciones y efectos le dieron un toque especial. Nuestros invitados quedaron impresionados con lo moderna y elegante que era.",
      author: "Roberto Jiménez",
      event: "Boda",
      date: "Mayo 2023"
    },
    {
      text: "Servicio excepcional y muy profesional. La invitación quedó exactamente como la imaginábamos. El seguimiento y la atención al cliente fueron sobresalientes.",
      author: "Diana Martínez",
      event: "Graduación",
      date: "Abril 2023"
    },
    {
      text: "Fantástica experiencia de principio a fin. La plataforma es muy fácil de usar y el resultado final superó nuestras expectativas. Definitivamente los recomendaremos.",
      author: "Miguel Ángel Ruiz",
      event: "Aniversario",
      date: "Junio 2023"
    }
  ];

  // Agregar copias de los primeros testimonios para el efecto infinito
  displayTestimonials = [...this.testimonials, ...this.testimonials.slice(0, 3)];

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  onMouseDown(event: MouseEvent) {
    this.stopAutoplay();
    const slider = event.currentTarget as HTMLElement;
    this.isDragging = true;
    this.startX = event.pageX - slider.offsetLeft;
    this.scrollLeft = slider.scrollLeft;
    slider.style.cursor = 'grabbing';
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;
    
    const slider = event.currentTarget as HTMLElement;
    const x = event.pageX - slider.offsetLeft;
    const walk = (x - this.startX) * 2;
    slider.scrollLeft = this.scrollLeft - walk;
  }

  onMouseUp(event: MouseEvent) {
    this.isDragging = false;
    const slider = event.currentTarget as HTMLElement;
    slider.style.cursor = 'grab';
    this.startAutoplay();
  }

  onMouseLeave(event: MouseEvent) {
    if (this.isDragging) {
      this.isDragging = false;
      const slider = event.currentTarget as HTMLElement;
      slider.style.cursor = 'grab';
      this.startAutoplay();
    }
  }

  navigateSlider(direction: 'prev' | 'next') {
    const track = document.querySelector('.testimonials-track') as HTMLElement;
    if (track) {
      const currentScroll = track.scrollLeft;
      const maxScroll = track.scrollWidth - track.clientWidth;
      
      this.stopAutoplay();
      
      let newScroll = direction === 'next' 
        ? currentScroll + this.CARD_WIDTH
        : currentScroll - this.CARD_WIDTH;

      if (direction === 'next' && currentScroll >= maxScroll - this.CARD_WIDTH) {
        newScroll = 0;
      } else if (direction === 'prev' && currentScroll <= this.CARD_WIDTH) {
        newScroll = maxScroll;
      }
      
      track.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
      
      setTimeout(() => this.startAutoplay(), 1000);
    }
  }

  private startAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
    
    this.autoplayInterval = setInterval(() => {
      const track = document.querySelector('.testimonials-track') as HTMLElement;
      if (track) {
        const maxScroll = track.scrollWidth - track.clientWidth;
        const currentScroll = track.scrollLeft;
        
        let nextScroll = currentScroll + this.CARD_WIDTH;
        
        if (nextScroll >= maxScroll - this.CARD_WIDTH) {
          nextScroll = 0;
        }
        
        track.scrollTo({
          left: nextScroll,
          behavior: 'smooth'
        });
      }
    }, this.AUTOPLAY_SPEED);
  }

  private stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }
}
