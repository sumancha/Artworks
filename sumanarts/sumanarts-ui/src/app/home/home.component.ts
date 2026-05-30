import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { RegistrationComponent } from '../user/registration/registration.component';
@Component({
  selector: 'art-home',
  
   standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  // imports:[UserComponent, RegistrationComponent]
})
export class HomeComponent {

}
