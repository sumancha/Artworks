import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  /**
   *
   */
  constructor(private router: Router) {}
  onLogOut() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
