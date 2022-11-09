import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';
@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private baseUrl:string='https://restcountries.com/v2';
get httpParamns (){
 return new HttpParams().set('fields','name,capital,region,alpha2Code,population,flag');
}


  constructor(private http:HttpClient) { }

  buscarPais(termino:string):Observable<Country[]>{

    const url = `${this.baseUrl}/name/${termino}`;
   return this.http.get<Country[]>(url,{params:this.httpParamns})
  }

  buscarCapital(termino:string):Observable<Country[]>{
    const url = `${this.baseUrl}/capital/${termino}`;
   return this.http.get<Country[]>(url)
  }
  buscarRegion(termino:string):Observable<Country[]>{
    const url = `${this.baseUrl}/region/${termino}`;
   return this.http.get<Country[]>(url,{params:this.httpParamns})
  }
  getPaisPorCodigo(termino:string):Observable<Country>{
    const url = `${this.baseUrl}/alpha/${termino}`;
   return this.http.get<Country>(url)
  }
}
