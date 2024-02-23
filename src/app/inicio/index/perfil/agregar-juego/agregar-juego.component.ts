import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { JuegosService } from '../../../../juegos.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-juego',
  standalone: true,
  imports: [RouterLink,RouterOutlet, ReactiveFormsModule],
  templateUrl: './agregar-juego.component.html',
  styleUrl: './agregar-juego.component.css'
})
export class AgregarJuegoComponent {

  /* nuevoJuego: any = {
    nombre: 'Mara',
    min_jug: 2,
    max_jug: 4,
    // Añadir el resto ¿Como meter los campos que son objetos?
  }; */

  formJuego= new FormGroup({
    nombre: new FormControl(''),
    min_jug: new FormControl( ),
    max_jug: new FormControl(''),
    mesa: new FormControl(''),
    imagen: new FormControl('')
  })

  constructor(private juegosService: JuegosService){

  }

  nuevoJuego: any = {
    nombre: 'Neo',
    min_jug: 2,
    max_jug: 4,
    imagen: this.formJuego.value.imagen
    // Añadir el resto ¿Como meter los campos que son objetos?
  };

  insertarJuego() {
    this.juegosService.insertarJuego(this.nuevoJuego)
    console.log(this.nuevoJuego)
    
  }

}
