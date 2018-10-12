import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../models/producto';
import { ProductoService } from '../producto.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  nombre: string;
  precio: number;

  constructor(
    private productoService: ProductoService,
    private location: Location
  ){}

  ngOnInit(){
  }

  clicked():void{

    this.productoService.addProducto(new Producto(0, this.nombre, this.precio)).subscribe(_ => {
      this.location.back();
    });
  }//end clicked
}//end CreateComponent class
