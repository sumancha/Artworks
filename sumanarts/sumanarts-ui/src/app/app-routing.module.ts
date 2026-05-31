import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtworkAddComponent } from './artwork/artworks-add/artwork-add.component';
import { HomeComponent } from './home/home.component';
import { ArtworksListComponent } from './artwork/artworks-list/artworks-list.component';
import { AddMediumComponent } from './add-medium/add-medium.component';
import { CounterComponent } from './counter/counter/counter.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { CartComponent } from './artwork/cart/cart.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { RegistrationComponent } from './user/registration/registration.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent, title: 'Home - Artworks' },
  { path: 'listart', component: ArtworksListComponent, title: 'List Artworks' },
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'signup',
        component: RegistrationComponent,
      },

      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
  { path: 'dashboard', component: DashboardComponent, title: 'dashboard' },
  { path: 'addmedium', component: AddMediumComponent, title: 'Add Medium' },
  { path: 'addart', component: ArtworkAddComponent },
  { path: 'counter', component: CounterComponent, title: 'Counter page' },
  { path: 'posts', component: PostsListComponent, title: 'Posts page' },
  { path: 'cart', component: CartComponent, title: 'Cart' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
