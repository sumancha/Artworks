import { Component } from '@angular/core';
import { RegistrationComponent } from './registration/registration.component';
import { ChildrenOutletContexts, Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [RouterModule],
})
export class UserComponent {
  constructor(private context: ChildrenOutletContexts) {}
  getRouteUrl() {
    return this.context.getContext('primary')?.route?.url;
  }
}
