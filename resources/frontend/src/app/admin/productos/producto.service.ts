import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../message.service';
import { Producto } from '../../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  readonly PRODUCTOS_URL= 'http://localhost/comizi/public/api/productos';

  readonly HTTP_OPTIONS = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ){}

  getProductos(): Observable<any[]> {

    return this.http.get<any[]>(this.PRODUCTOS_URL).pipe(
      tap(_ => this.log('fetched productos')),
      catchError(this.handleError('getProductos', []))
    );
  }//end getProductos

  getProducto(id: number): Observable<any>{

    return this.http.get<any>(`${this.PRODUCTOS_URL}/${id}`).pipe(
      tap(_ => this.log(`fetched producto id:${id}`)),
      catchError(this.handleError('getProductos', []))
    );
  }//end getProducto

  addProducto(producto: Producto): Observable<any[]> {

    return this.http.post<any>(this.PRODUCTOS_URL, producto, this.HTTP_OPTIONS).pipe(
      tap((producto: any) => this.log(`added producto w/ id=${producto.id}`)),
      catchError(this.handleError<any>('addProducto'))
    );
  }//end addProducto

  updateProducto(producto: Producto ): Observable<any> {

    return this.http.put(`${this.PRODUCTOS_URL}/${producto.getId()}`, producto, this.HTTP_OPTIONS).pipe(
      tap(_ => this.log(`updated producto id=${producto.getId()}`)),
      catchError(this.handleError<any>('updateProducto'))
    );
  }//end updateProducto

  deleteProducto(producto: Producto | number): Observable<any>{

    const id = typeof producto === 'number' ? producto : producto.getId();

    return this.http.delete<any>(`${this.PRODUCTOS_URL}/${id}`, this.HTTP_OPTIONS).pipe(
      tap(_ => this.log(`deleted producto id=${id}`)),
      catchError(this.handleError<any>('deleteProducto'))
    )
  }//end deleteProducto

  private log(message: string) {

    this.messageService.add(`Producto Service: ${message}`);
  }//end log

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }//end handleError
}//end ProductoService class
