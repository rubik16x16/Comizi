import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProductoService } from '../producto.service';
import { Producto } from '../../../models/producto';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id: number;
  nombre: string;
  precio: number;
  producto: Producto;
  fetched: boolean= false;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProducto();
  }

  private getProducto(){

    this.id= +this.route.snapshot.paramMap.get('id');
    this.productoService.getProducto(this.id).subscribe(producto =>{
      this.nombre= producto.nombre;
      this.precio= producto.precio;
      this.fetched= true;
      }
    );
  }//end getProducto

  private saveProducto(): void{

    this.productoService.updateProducto(new Producto(this.id, this.nombre, this.precio)).subscribe(
      producto => {
        this.producto= producto;
        this.location.back();
      }
    );
  }//end guardarProducto
}//end EditComponent class
