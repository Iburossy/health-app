import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { NativeScriptHttpClientModule } from '@nativescript/angular/http-client';
import { NativeScriptFormsModule } from '@nativescript/angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatComponent } from './chat/chat.component';
import { EmergencyServicesComponent } from './emergency-services/emergency-services.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptHttpClientModule,
    NativeScriptFormsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ChatComponent,
    EmergencyServicesComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}