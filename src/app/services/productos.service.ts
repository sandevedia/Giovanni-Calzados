import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];
  cargando = true;

  constructor(private http: HttpClient) {
    this.ObtenerProductos();
  }

  private ObtenerProductos() {

return new Promise( ( resolve, reject) => {

    this.http.get('https://angular-webappportafolio.firebaseio.com/productos.json')
        .subscribe(( resp: Producto[] ) => {
          this.productos = resp;
          this.cargando = false;
          resolve();
        });
    });

  }

  buscarProducto(termino: string) {

    if ( this.productos.length === 0 ) {
      // cargar productos
      this.ObtenerProductos().then( () => {
        // Se ejecuta después de tener los productos
        // Aplicar filtro
        this.filtrarProductos( termino );
      });
    } else {
      // aplicar filtro
      this.filtrarProductos( termino );
    }
  }

  private filtrarProductos( termino: string) {
    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach(prod => {
      const tituloLower = prod.nombre.toLocaleLowerCase();
      if ( tituloLower.indexOf(termino) >= 0 ) {
          this.productosFiltrado.push(prod);
        }
      });
  }
}
