import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtworkAddComponent } from './artwork/artworks-add/artwork-add.component';
import { HomeComponent } from './home/home.component';
import { ArtworksListComponent } from './artwork/artworks-list/artworks-list.component';

const routes: Routes = [

    {path:'home', component: HomeComponent, title :"Home - Artworks"},
    {path: 'listart', component: ArtworksListComponent,title :"List Artworks" },
    {path: 'addart', component: ArtworkAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
