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
  reservas!:any;
  titulo: string= 'Miguel'
  //reservas2:any;
  constructor(private reservasService: ReservasService){
    //this.recuperar();
    
    this.reservasService.mostrarReservas();
    this.reservas=reservasService.reservas
    console.log(this.reservas+ "En el componente")
  }


/*   devolver(){this.reservasService.mostrarReservas().subscribe(
    (reservas: any[]) => {
      console.log("Reservas:", reservas);
      
      // Iterar sobre las reservas
      reservas.forEach(reserva => {
        console.log("ID:", reserva.id);
        console.log("Nombre:", reserva.nombre);
        // Aquí puedes hacer lo que necesites con cada objeto de reserva
      });
    }
  );
} */
    /* recuperar() {
      this.ReservasService.retornar().subscribe((reservas: Reserva[]) =>
       this.reservas = reservas);
       console.log(this.reservas2);
    }
 */
    
}
