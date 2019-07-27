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
  constructor(private http: HttpClient) {

    this.http.get('assets/data/data-pagina.json')
    // esto le va a indicar donde está la información pero no la va a
    // mostrar hasta que no encuentre un 'subscribe':
    .subscribe(( resp: InfoPagina ) => {
      this.cargada = true;
      this.info = resp;
    });
  }
}
