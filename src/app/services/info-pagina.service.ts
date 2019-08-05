import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
 // cargada: boolean = false; // es redundante
  cargada = false;
  info: InfoPagina = {};
  equipo: any[] = [];

  constructor(private http: HttpClient) {
    this.CargarInfo();
    this.CargarPagina();
  }

  private CargarInfo() {
    this.http.get('assets/data/data-pagina.json')
    // esto le va a indicar donde está la información pero no la va a
    // mostrar hasta que no encuentre un 'subscribe':
    .subscribe(( resp: InfoPagina ) => {
      this.cargada = true;
      this.info = resp;
      console.log(resp);
    });
  }

  private CargarPagina() {
    this.http.get('https://angular-webappportafolio.firebaseio.com/equipo.json')
    // esto le va a indicar donde está la información pero no la va a
    // mostrar hasta que no encuentre un 'subscribe':
    .subscribe(( resp: any[] ) => {
            this.equipo = resp;
            console.log(resp);
    });
  }

}
