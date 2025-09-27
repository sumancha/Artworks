import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtworkListComponent } from './artwork-list/artwork-list.component';
import { ArtworkAddComponent } from './artwork-add/artwork-add.component';

const routes: Routes = [    {path:'home', component: HomeComponent, title :"Home - Artworks"},
    {path: 'listart', component: ArtworkListComponent},
    {path: 'addart', component: ArtworkAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
