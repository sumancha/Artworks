
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransformerService {
 static parseDatetoISO(createdDate: string): string {
      const darr = createdDate.split("-");    // ["29", "1", "2016"]
   var dobj = new Date(parseInt(darr[2]),parseInt(darr[1])-1,parseInt(darr[0]));  
    return dobj.toISOString();
 }

//  parseDatetoISO(str:string) {
//      const darr = str.split("-");    // ["29", "1", "2016"]
//    var dobj = new Date(parseInt(darr[2]),parseInt(darr[1])-1,parseInt(darr[0]));  
//     return dobj.toISOString();
//     }


}