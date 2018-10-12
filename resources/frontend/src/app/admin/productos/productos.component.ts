import { Component, OnInit } from '@angular/core';

import { Producto } from '../../models/producto';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Array<Producto>= [];

  constructor(private productoService: ProductoService){
  }//end constructor

  ngOnInit(){
    this.getProductos();
  }//end ngOnInit

  private getProductos(): void {
    this.productoService.getProductos().subscribe((productos) => {
      for(let producto of productos){
        this.productos.push(new Producto(producto.id, producto.nombre, producto.precio));
      }
    });
  }//end getProductos

  private deleteProducto(id: number):void {

    this.productos = this.productos.filter(p => p.getId() !== id);
    this.productoService.deleteProducto(id).subscribe();
  }//end deleteProducto
}//end ProductoComponent class
