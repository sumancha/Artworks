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
import { authGuard } from './shared/auth.guard';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

import { AdminOnlyComponent } from './AuthorizedPages/admin-only/admin-only.component';
import { claimReq } from './shared/utils/claimReq-utils';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },

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
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  //   title: 'dashboard',
  //   // canActivate: [authGuard],
  // },
  // { path: 'addmedium', component: AddMediumComponent, title: 'Add Medium' },
  // { path: 'addart', component: ArtworkAddComponent },

  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    canActivateChild: [authGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'admin-only',
        component: AdminOnlyComponent,
        data: { claimReq: claimReq.adminOnly },
      },
      {
        path: 'addmedium',
        component: AddMediumComponent,
        data: { claimReq: claimReq.adminOrArtist },
      },
      {
        path: 'addart',
        component: ArtworkAddComponent,
        data: { claimReq: claimReq.adminOrArtist },
      },
      { path: 'home', component: HomeComponent, title: 'Home - Artworks' },
      {
        path: 'listart',
        component: ArtworksListComponent,
        title: 'List Artworks',
      },
      { path: 'counter', component: CounterComponent, title: 'Counter page' },
      { path: 'posts', component: PostsListComponent, title: 'Posts page' },
      { path: 'cart', component: CartComponent, title: 'Cart' },

      // {
      //   path: 'apply-for-maternity-leave',
      //   component: ApplyForMaternityLeaveComponent,
      //   data: { claimReq: claimReq.femaleAndTeacher },
      // },
      // {
      //   path: 'library-members-only',
      //   component: LibraryMembersOnlyComponent,
      //   data: { claimReq: claimReq.hasLibraryId },
      // },
      // {
      //   path: 'under-10-and-female',
      //   component: Under10AndFemaleComponent,
      //   data: { claimReq: claimReq.femaleAndBelow10 },
      // },
      {
        path: 'forbidden',
        component: ForbiddenComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
