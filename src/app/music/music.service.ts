import { Injectable } from '@angular/core';         
import { IMusic } from './music.model';        
import { Http, Response } from '@angular/http';     
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs/Observable';       
import 'rxjs/add/operator/map';                  
@Injectable()
export class MusicService {

    private _productUrl = 'https://ngmusicdb.herokuapp.com/api/getMusic';

    constructor(private _http: Http,
                private _httpClient: HttpClient) {
                    
                }
   
    getProducts(): Observable<IMusic[]> {
                 return this._httpClient.get<IMusic[]>(this._productUrl);
    }

}
