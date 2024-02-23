import { Component } from '@angular/core';
import { Reserva } from '../../../reserva';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ReservasService } from '../../../reservas.service';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.css'
})
export class ReservaComponent {
  reservas:any[]=[];
  titulo: string= 'Miguel'
  reservas2:any;
  constructor(private ReservasService: ReservasService){
    this.recuperar();
    this.reservas2=this.ReservasService.mostrarReservas();
  }
    recuperar() {
      this.ReservasService.retornar().subscribe((reservas: Reserva[]) =>
       this.reservas = reservas);
    }

    
}
