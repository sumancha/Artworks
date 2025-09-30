import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AddArtImage } from '../../models/addArtImage';
import { Status } from '../../models/status';
import { ArtImage } from '../../models/artImage';
import { DataTransformerService } from '../util/date-parser';
// import { environment } from 'src/environments/environment';
// import { ArtImage } from 'src/model/ArtImage';

@Injectable({
  providedIn: 'root'
})
export class ImageManipulationService {
    [x: string]: any;

 artDetailsURL: string = environment.apiUrl;//'https://localhost:7082';//

  constructor(private http: HttpClient) { }


  getAllArtDetails(): Observable<ArtImage[]>{
 var abc = this.http.get<ArtImage[]>( this.artDetailsURL +'/api/ArtImage');
 console.log(abc);
return abc;
   }

   AddArt(data:any):Observable<ArtImage>{
 const formData:FormData = new FormData();
    formData.append("title", data.title);
    formData.append("artImageFile",data.imageFile??"");
      formData.append("artDetails", data.artDetails);
      formData.append("mediumId", data.mediumId);
        formData.append("sold", data.sold);
         formData.append("createdDate", data.createdDate ? DataTransformerService.parseDatetoISO(data.createdDate) : "");
               formData.append("soldDate", data.soldDate ? DataTransformerService.parseDatetoISO(data.soldDate) : "");
               formData.append("price", data.price);
// const headers = {headers:{ 'content-type': 'multipart/form-data'}};
const httpOptions = { headers: new HttpHeaders().set('Content-Type', 'multipart/form-data')
};
// let newData :AddArtImage= {
 
//    imageFile: data.imageFile,
//    title: data.title,
//    artDetails: data.artDatail,
//    sold: data.sold,
//    price: data.price,
//    createdDate: data.createdDate ? DataTransformerService.parseDatetoISO(data.createdDate)  : null,
//    soldDate: data.soldDate ? DataTransformerService.parseDatetoISO(data.soldDate)  : null,
//    mediumId: data.medium 
// };
// });
// newData.createdDate = data.createdDate ? DataTransformerService.parseDatetoISO(data.createdDate)  : null;
// newData.soldDate = data.soldDate ? DataTransformerService.parseDatetoISO(data.soldDate) - : null;
// newData.mediumId = data.medium;
console.log("newData",formData);
     var abc =  this.http.post<any>(this.artDetailsURL+'/api/ArtImage',formData, httpOptions);
     console.log("abc",abc);
     return abc;
    // 
// return  this.http.post<ArtImage>(this.artDetailsURL+'/api/ArtImage',newData, headers);


   }
}
