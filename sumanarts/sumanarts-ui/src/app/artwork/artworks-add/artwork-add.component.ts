import { Component } from '@angular/core';
 
import { Status } from '../../../models/status';
import { ImageManipulationService } from '../../services/image-manipulation.service';
import { ArtImage, Medium } from '../../../models/artImage';
import { AddArtImage } from '../../../models/addArtImage';
import { Router } from '@angular/router';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MediumService } from '../../services/medium.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { restrictedWordsValidator } from '../../Validator/restricted-words-validator';
@Component({
    selector: 'art-artwork-add',
    templateUrl: './artwork-add.component.html',
    styleUrl: './artwork-add.component.css',
//  providers: [  ReactiveFormsModule,FormControl,  FormGroup],
    standalone: false,
})
export class ArtworkAddComponent {
  addArtFormgrp!: FormGroup;
  imageFile?:File;
status!:Status;
 mediums: Medium[] | undefined;

    stateOptions: any[] = [
        { label: 'sold', value: true },
        { label: 'Available', value: false }
    ];
/**
 *
 */
constructor(private imageService: ImageManipulationService, private router:Router, private mediumService:MediumService) {
 }

ngOnInit(){
  // const addArtForm = new FormGroup({
    this.addArtFormgrp  = new FormGroup({
       title : new FormControl('',Validators.required),
         artDatail : new FormControl('',[Validators.required, Validators.maxLength(500)]),
            createdDate : new FormControl(),
           medium : new FormControl(),
             sold : new FormControl('',Validators.required),
               soldDate : new FormControl(), 
                price : new FormControl('',Validators.required),
                imageFile: new  FormControl()    

    });
      this.mediumService.getAllMediums().subscribe({
        next:(data:Medium[]) => {
         console.log("Medium",data);
            this.mediums = data;
        },
        error:(err:any)=> {console.log(err);}});

}
get title(){ 
  return this.addArtFormgrp.get('title'); }
get artDatail(){ return this.addArtFormgrp.get('artDatail'); }
get sold(){ return this.addArtFormgrp.get('sold'); }
get price(){ return this.addArtFormgrp.get('price'); }

   onChange(event:any){
     this.imageFile=event.target.files[0];
    }


saveArtWork(){
    //  this.status= {statusCode:0,message:'wait..'};
 
      // const frmData:AddArtImage= Object.assign(this.addArtFormgrp.value);
      // frmData.imageFile=this.imageFile;
      // // we will call our service, and pass this object to it
      // this.imageService['addart'](frmData).subscribe({
      //   next:()=>{
      //       // this.router.navigate(['/listart']);
          
      //   },
      //   error: (err: any)=>{
      //    this.status= {statusCode:0,message:'Error on server side'}
      //     console.log(err);
      //   }
      // }
    // )


}


}
