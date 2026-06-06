import { Component } from '@angular/core';
import { NavbarComponent } from './layouts/nav/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet],
})
export class AppComponent {
  title = 'sumanarts-ui';
}
