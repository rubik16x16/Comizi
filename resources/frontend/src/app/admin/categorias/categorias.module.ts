import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing/categorias-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriasRoutingModule
  ],
  declarations: [CategoriaComponent]
})
export class CategoriasModule { }
