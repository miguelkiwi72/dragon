import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reserva } from './reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

 
  private reservasURL='http://localhost:4200/assets/reservas.json';

  constructor(private http: HttpClient) { 

  }
  retornar(){
    return this.http.get<Reserva[]>(this.reservasURL);
  }
}
