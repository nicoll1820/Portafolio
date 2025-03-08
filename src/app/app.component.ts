import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  usuario: any = {};
  canciones: any[] = [];
  cosasMeGustan: any[] = [];
  cosasNoMeGustan: any[] = []; // Agregado
  infoVisible: boolean = false;
  errorCarga: boolean = false; // Variable para errores

  ngOnInit() {
    this.cargarDatos();
  }

  async cargarDatos() {
    try {
      const response = await fetch('./assets/data.json');
      if (!response.ok) throw new Error("No se pudo cargar el JSON");
      const data = await response.json();

      this.usuario = data.usuario;
      this.canciones = data.canciones;
      this.cosasMeGustan = data.cosasMeGustan;
      this.cosasNoMeGustan = data.cosasNoMeGustan; // Agregado
    } catch (error) {
      console.error('Error al cargar el JSON:', error);
      this.errorCarga = true;
    }
  }
}

