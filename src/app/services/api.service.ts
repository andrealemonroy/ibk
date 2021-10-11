import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http'

@Injectable()

export class ApiService
{
    constructor(private httpClient: HttpClient){}

    getClients(): Observable<any>{
       return this.httpClient.get("http://40.65.209.242/api/rtg/") 
    }
}