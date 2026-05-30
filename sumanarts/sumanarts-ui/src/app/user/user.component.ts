import { Component } from '@angular/core';
import { RegistrationComponent } from './registration/registration.component';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [RegistrationComponent]
})
export class UserComponent {

}
