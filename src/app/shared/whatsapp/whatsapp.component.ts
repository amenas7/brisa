import { Component } from '@angular/core';

@Component({
    selector: 'app-whatsapp',
    imports: [],
    templateUrl: './whatsapp.component.html',
    styleUrl: './whatsapp.component.scss'
})
export class WhatsappComponent {
  whatsappNumber = '999999999';
  whatsappLink = `https://wa.me/51${this.whatsappNumber}`;
}

