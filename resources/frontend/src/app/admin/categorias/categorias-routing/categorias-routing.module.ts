import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriaComponent } from '../categoria/categoria.component';

const categoriasRoutes: Routes= [
  { path: '', component: CategoriaComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(categoriasRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CategoriasRoutingModule { }
