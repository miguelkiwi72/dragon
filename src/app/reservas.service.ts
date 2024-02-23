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

  mostrarReservas() {
    //let jsonData = JSON.stringify();
    //let id=localStorage.getItem('id');
    //console.log(id)
    let id={id: localStorage.getItem('id')}
    let jsonData = JSON.stringify(id);
    //console.log(jsonData)
    return this.http.post("http://127.0.0.1:8000/reserva/buscarReserva", id)
    .subscribe(
      response => {
        return response;
        
        console.log("Juego insertado correctamente:", response);
        //console.log(response)
      },
      error => {
        console.error("No hay reservas para ese id:", error);
      }
    );
  }


}
