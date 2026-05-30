
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

 
import Lara from '@primeng/themes/lara';
import Nora from '@primeng/themes/nora';
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimationsAsync(),
        provideAnimations(),
        provideHttpClient(),
        provideToastr({positionClass:'toast-top-center'}),
        providePrimeNG({
            theme: {
                preset: Aura
            }
        })
    ]
};

 