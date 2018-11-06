import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class WebapiService {

  urlApi: string = '';
  constructor(private http: HttpClient) { }

  getData(url: string):Observable<any>{
    return this.http.get(this.urlApi);
  }
}
