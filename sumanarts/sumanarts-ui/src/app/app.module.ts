import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtworksListComponent } from './artwork/artworks-list/artworks-list.component';
import { HttpClient , provideHttpClient } from '@angular/common/http';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
 import { ImageModule } from 'primeng/image';
 import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { SelectButton, SelectButtonModule } from 'primeng/selectbutton';
import { ArtworkAddComponent } from './artwork/artworks-add/artwork-add.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { Router, RouterModule } from '@angular/router';
import { AddMediumComponent } from './add-medium/add-medium.component';


@NgModule({
  declarations: [
    AppComponent,
ArtworkAddComponent,
ArtworksListComponent,
NavbarComponent,
AddMediumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
   BrowserAnimationsModule,
 DataViewModule,
 ButtonModule,
 ImageModule,
 TagModule,
 CommonModule,
 ReactiveFormsModule,   SelectButtonModule,

],
  providers: [  provideHttpClient(), provideAnimationsAsync(),   
        providePrimeNG({
            theme: {
                preset: Aura
            }
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
