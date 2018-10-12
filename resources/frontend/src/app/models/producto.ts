export class Producto{

  constructor(private id:number, private nombre:string, private precio:number){}

  public getId():number{

    return this.id;
  }//end getId

  public setId(id:number):void{

    this.id= id;
  }//end setId

  public getNombre():string{

    return this.nombre;
  }//end getNombre

  public setNombre(nombre:string):void{

    this.nombre= nombre
  }//end setNombre

  public getPrecio():number{

    return this.precio
  }//end getPrecio

  public setPrecio(precio:number):void{

    this.precio= precio;
  }//end setPrecio
}//end Producto class
