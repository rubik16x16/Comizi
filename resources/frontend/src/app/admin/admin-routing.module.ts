import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';

const adminRoutes= [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'productos',
        loadChildren: './productos/productos.module#ProductosModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
