import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private routerExtensions: RouterExtensions) {}

  navigateToEmergencyServices() {
    this.routerExtensions.navigate(['/emergency-services']);
  }

  navigateToProfile() {
    this.routerExtensions.navigate(['/profile']);
  }
}