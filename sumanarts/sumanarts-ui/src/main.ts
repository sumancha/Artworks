/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideToastr } from 'ngx-toastr';
import { providePrimeNG } from 'primeng/config';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { RouterModule } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app/state/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { isDevMode, importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import Aura from '@primeng/themes/aura';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      AppRoutingModule,
      RouterModule,
      DataViewModule,
      ButtonModule,
      ImageModule,
      TagModule,
      CommonModule,
      ReactiveFormsModule,
      SelectButtonModule,
      StoreModule.forRoot(appReducer),
      StoreDevtoolsModule.instrument({ logOnly: !isDevMode() }),
    ),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideToastr(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
    provideAnimations(),
  ],
}).catch((err) => console.error(err));
