import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductoService } from '../producto.service';
import { Producto } from '../../../models/producto';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  producto: Producto;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService
  ) { }

  ngOnInit() {
    this.getProducto();
  }

  private getProducto(){

    const id = +this.route.snapshot.paramMap.get('id');
    this.productoService.getProducto(id).subscribe(producto =>
      this.producto= new Producto(producto.id, producto.nombre, producto.precio)
    );
  }//end getProducto
}//end ShowComponent class
