import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AddArtImage } from '../../models/addArtImage';
import { Status } from '../../models/status';
import { ArtImage } from '../../models/artImage';
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

   AddArt(data:Partial<AddArtImage>):Observable<ArtImage>{
//  const formData = new FormData();
//     formData.append("title", data.title);
//     formData.append("artImageFile",data.imageFile??"");
//       formData.append("title", data.title);
//       formData.append("mediumId", data.mediumId.toString());
//         formData.append("sold", data.sold.toString());
//          formData.append("createdDate", data.createdDate ? data.soldDate.toISOString() : "");
//                formData.append("soldDate", data.soldDate ? data.soldDate.toISOString() : "");
//                formData.append("price", data.price.toString());
const headers = {headers:{ 'content-type': 'application/json'}};
let newData:Partial<AddArtImage>= {...data};
      
return  this.http.post<ArtImage>(this.artDetailsURL+'/ArtImage',newData, headers);


   }
}
