import { Component,signal  } from '@angular/core';
import { ArtImage, Medium } from '../../../models/artImage';
import { ImageManipulationService } from '../../services/image-manipulation.service';
import { MediumService } from '../../services/medium.service';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';
import { HttpClient } from '@angular/common/http';
import { Tag } from 'primeng/tag';
import { DataViewModule } from 'primeng/dataview';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { MessageModule } from 'primeng/message';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';
import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
// import { ImageManipulationService } from 'src/app/services/image-manipulation.service';
// import { ArtImage } from 'src/model/ArtImage';

@Component({
    selector: 'art-artworks-list',
    templateUrl: './artworks-list.component.html',
    styleUrls: ['./artworks-list.component.css'],
    standalone: false,
    // providers: [ FormControl, FormGroup],
})
export class ArtworksListComponent {
     layout: string = 'list';

    artworkList:ArtImage[] = [];

    options = ['list', 'grid'];
    onClick(layout:string){
if(layout =='list'){
this.layout ='grid'
}
else{
this.layout ='list'  ;
}

    }

// artworkList:ArtImage[]=[];
mediumList: Medium[]= [];
imageBaseUrl = environment.apiUrl + '/resources/';
constructor( private imageService: ImageManipulationService, private mediumService:MediumService,private http: HttpClient, private store:Store<AppState>){}

ngOnInit() {

  

 this.imageService.getAllArtDetails().subscribe({
   next:(data) => {console.log(data);
    this.artworkList = data;
    // this.artworkList.set([...data.slice(0,12)]);
   },
   error:(err)=> {console.log(err);}
 
  }
  );

  this.mediumService.getAllMediums().subscribe({
   next:(data:Medium[]) => {
    console.log("Medium",data);
    this.mediumList = data;
   },
   error:(err:any)=> {console.log(err);}
 
  }
  );
  console.log(this.artworkList);
}
getDetail(artwork: ArtImage) {
   if(artwork.sold === true){  return 'SOLD';}
  else {   return 'Available';}
       }
getSeverity(artwork: ArtImage) {
  if(artwork.sold === true){  return 'danger';}
  else {   return 'success';}
         
 
        }
 fetchData():void {

 this.http.get('https://localhost:7082/api/medium').subscribe(
          response => {
            console.log('Data received:', response);
          },
          error => {
            console.error('Error fetching data:', error);
          }
        );

  
 }

 onCartClick(item: ArtImage): void {
  console.log("Cart clicked");
  console.log(item);
  // Dispatch action to add item to cart
  this.store.dispatch({ type: '[Cart] Add Item To Cart', item });
 }
}
