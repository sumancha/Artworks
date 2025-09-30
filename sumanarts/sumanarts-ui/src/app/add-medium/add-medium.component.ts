import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MediumService } from '../services/medium.service';
import { Router } from '@angular/router';
import { Medium } from '../../models/artImage';
import { Status } from '../../models/status';

@Component({
  selector: 'art-add-medium',
  standalone: false,
  templateUrl: './add-medium.component.html',
  styleUrl: './add-medium.component.css'
})
export class AddMediumComponent {


status!:Status;
addMediumFormgrp!: FormGroup;

  constructor( private mediumService:MediumService, private router:Router) {    
  }
ngOnInit(){
  this.addMediumFormgrp  = new FormGroup({
       mediumType : new FormControl('',)
    });
  }
  get mediumType(){ 
    this.status= {statusCode:0,message:'wait..'};
  return this.addMediumFormgrp.get('mediumType'); }  

saveMediumWork() {

  const frmData:Medium= Object.assign(this.addMediumFormgrp.value);
  console.log(this.addMediumFormgrp.value);
  this.mediumService.AddMedium(frmData).subscribe({
    next:(data:any) => {
      this.status= {statusCode:1,message:'Medium Added Successfully'};
      console.log("Medium Added",data);
      this.router.navigate(['/listart']);
    },
    error:(err:any)=> {console.log(err);}});
}

}
