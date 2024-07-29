import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  Url = environment.baseUrl;

  constructor(private http:HttpClient) { }

  ConsultMovies():Observable<any>{
    return this.http.get(this.Url);
  }
}
