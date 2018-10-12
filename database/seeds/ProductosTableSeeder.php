<?php

use Illuminate\Database\Seeder;
use App\Models\Producto;

class ProductosTableSeeder extends Seeder{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run(){

    for($i=1; $i<10; $i++){

      $producto= new Producto(['nombre' => "producto {$i}", 'precio' => 200]);
      $producto->save();
    }

  }
}
