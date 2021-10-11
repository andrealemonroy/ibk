import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ClientsService {
    private baseUrl: string = environment.baseUrl
    constructor(private http: HttpClient){}

    getClients(data: any): Observable<any>{
        // data.numsolicitud = Math.random();
        // data.numsolicitud = '12345';
        // delete data.documentIdName;
        return data.codeID?.length > 0 ? this.http.get(`${this.baseUrl}/api/cliente/filtrar?codigounico=${data.codeID}`) : data.documentIdNumber?.length > 0 ? this.http.get(`${this.baseUrl}/api/cliente/filtrar?numerodocumento=${data.documentIdNumber}`) : this.http.get(`${this.baseUrl}/api/cliente/filtrar?razonsocial=${data.documentIdName}`)
        // return this.http.post(`${this.baseUrl}/api/rtg`, data)
    };

    getDataRating(data: { numsolicitud: string; razonsocial: any; documentIdNumber: string | any[]; documentIdType: string; }): Observable<any>{
      data.numsolicitud = (Math.floor(Math.random()*10000)).toString();
      // data.numsolicitud = "dummy";
      // delete data.razonsocial;
      data.documentIdNumber?.length > 8 ? data.documentIdType = "1" : data.documentIdType = "2";
      return this.http.post(`${this.baseUrl}/api/rtg`, data)
    }
    getDataEF(data: any): Observable<any>{
      data.numsolicitud = (Math.floor(Math.random()*10000)).toString();
      // data.numsolicitud = "dummy";
      // delete data.razonsocial;
      data.documentIdNumber?.length > 8 ? data.documentIdType = "1" : data.documentIdType = "2";
      return this.http.post(`${this.baseUrl}/api/cef`, data)
    }
    getWarranty(data: any): Observable<any>{
      data.numsolicitud = (Math.floor(Math.random()*10000)).toString();
      // data.numsolicitud = "dummy";
      // delete data.razonsocial;
      data.documentIdNumber?.length > 8 ? data.documentIdType = "1" : data.documentIdType = "2";
      return this.http.post(`${this.baseUrl}/api/gac`, data)
    }
    getOptionsBusinessPerson(): Observable<any>{
      return this.http.get(`${this.baseUrl}/api/ejecutivos`)
    }
    getOptionsProposalStatus(): Observable<any>{
      return this.http.get(`${this.baseUrl}/api/general/estprop`)
    }
    getDataPosition(codigounico: any): Observable<any>{
      return this.http.get(`${this.baseUrl}/api/posicion?codigounico=${codigounico}`)
    }
    execute(): Observable<any>{
      var numerosolicitud = 205080;
      var intento = 1;
      return this.http.get(`${this.baseUrl}/api/solicitud?numsolicitud=${numerosolicitud}`)
    }
    saveProposal(): Observable<any>{
      var numerosolicitud = 205080;
      return this.http.get(`${this.baseUrl}/api/solicitud/intento?numsolicitud=${numerosolicitud}`)
    }
}
