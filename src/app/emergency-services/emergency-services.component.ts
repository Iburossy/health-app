import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'app-emergency-services',
  templateUrl: './emergency-services.component.html',
  styleUrls: ['./emergency-services.component.css']
})
export class EmergencyServicesComponent {
  services = [
    { name: 'Red Cross', icon: '🚑' },
    { name: 'Firefighters', icon: '🚒' },
    { name: 'Police', icon: '🚓' },
    { name: 'Gendarmerie', icon: '👮' },
    { name: 'GMI', icon: '🏥' },
    { name: 'Medical Emergency', icon: '👨‍⚕️' }
  ];

  constructor(private routerExtensions: RouterExtensions) {}

  contactService(service: string) {
    this.routerExtensions.navigate(['/chat', service]);
  }
}