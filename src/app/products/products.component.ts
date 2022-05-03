import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../services/products.service";
import {Producto} from "../interfaces/producto.interface";
import {Observable} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    public productos?: Producto[] = [];
    products: Observable<Producto[]>;

  constructor(
      private productoService: ProductsService) {
      this.products = this.productoService.getProductos();

  }

  ngOnInit(): void {

      this.productoService.getProductos().subscribe(
          prod=>{
              console.log(prod)
          }
      )
  }


}
