import { Injectable } from '@angular/core';
import { Coutry } from '../interfaces/pais.interface';
import{HttpClient} from '@angular/common/http';
import { Capital } from '../interfaces/capital.interface';
import { Region } from '../interfaces/region.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl:string="https://restcountries.eu/rest/v2"
  constructor( private http:HttpClient) {  }

  buscarPais(termino:string){
    const url=`${this.apiUrl}/name/${termino}`
    return this.http.get<Coutry []>(url);
  }
   buscarRegion(termino:string){
    const url=`${this.apiUrl}/region/${termino}`
    return this.http.get<Region []>(url);
  }
  buscarCapital(termino:string){
    const url=`${this.apiUrl}/capital/${termino}`
    return this.http.get<Capital []>(url);
  }

}
