import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductosComponent } from './productos.component';
import { ShowComponent } from './show/show.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const productosRoutes: Routes= [
  { path: '', component: ProductosComponent },
  { path: 'show/:id', component: ShowComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit/:id', component: EditComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(productosRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductosRoutingModule { }
