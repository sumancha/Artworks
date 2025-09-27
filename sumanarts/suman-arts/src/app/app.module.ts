import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArtworkAddComponent } from './artwork-add/artwork-add.component';
import { ArtworkListComponent } from './artwork-list/artwork-list.component';
import { provideHttpClient } from '@angular/common/http';
 import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ButtonModule } from 'primeng/button';
 import { ImageModule } from 'primeng/image';
  import { SelectButton, SelectButtonModule } from 'primeng/selectbutton';
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ArtworkAddComponent,
    ArtworkListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
SelectButtonModule, 
 
    
  ],
  providers: [provideHttpClient(), provideAnimationsAsync(),   
        providePrimeNG({
            theme: {
                preset: Aura
            }
        })],
  bootstrap: [AppComponent]
})
export class AppModule { }
