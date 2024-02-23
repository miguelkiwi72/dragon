import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ModificarJuegoComponent } from '../modificar-juego/modificar-juego.component';

@Component({
  selector: 'app-buscar-juego',
  standalone: true,
  imports: [RouterLink,RouterOutlet,ReactiveFormsModule,FormsModule,ModificarJuegoComponent],
  templateUrl: './buscar-juego.component.html',
  styleUrl: './buscar-juego.component.css'
})
export class BuscarJuegoComponent {
  juego='';
  
  juegos=[
    {
      "id": 1,
      "nombre": "Póker",
      "max_jug": 9,
      "min_jug": 2,
      "tipomesa": "Cartas"
    },
    {
      "id": 2,
      "nombre": "Monopoly",
      "max_jug": 8,
      "min_jug": 2,
      "tipomesa": "Tablero"
    },
    {
      "id": 3,
      "nombre": "Ajedrez",
      "max_jug": 2,
      "min_jug": 2,
      "tipomesa": "Tablero"
    },
    {
      "id": 4,
      "nombre": "Scrabble",
      "max_jug": 4,
      "min_jug": 2,
      "tipomesa": "Tablero"
    }
  ]
  
constructor(private router:Router){

}

modificar(id : number){
  this.router.navigate((['/modificar',id]));
}

}
