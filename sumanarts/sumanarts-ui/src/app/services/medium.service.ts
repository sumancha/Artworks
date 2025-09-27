import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medium } from '../../models/artImage';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MediumService {
baseurl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getAllMediums(): Observable<Medium[]>{
return this.http.get<Medium[]>(this.baseurl+'/api/medium');


  }
}
