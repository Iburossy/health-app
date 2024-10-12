import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = {
    name: '',
    phone: '',
    email: '',
    medicalInfo: '',
    emergencyContact: ''
  };

  constructor() {}

  ngOnInit() {
    // TODO: Load user profile from a service
  }

  saveProfile() {
    // TODO: Implement save functionality
    console.log('Profile saved:', this.user);
  }
}