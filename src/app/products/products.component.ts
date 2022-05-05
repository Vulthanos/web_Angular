import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../services/products.service";
import {Producto} from "../interfaces/producto.interface";
import {Observable} from "rxjs";
import {Usuario} from "../interfaces/usuario.interface";
import {UsersService} from "../services/users.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    public productos?: Producto[] = [];
    products: Observable<Producto[]>;

    public usuarios?: Usuario[] = [];
    users: Observable<Usuario[]>;

    public carrito?: Producto[] = [];
    cosascarrito: Observable<Producto[]>;

    constructor(
      private productoService: ProductsService, private usersService: UsersService) {
      this.products = this.productoService.getProductos();
      this.users = this.usersService.getUsers();
      this.cosascarrito = this.usersService.getUCart();
  }

  ngOnInit(): void {
      this.usersService.getUsers().subscribe()
        this.usersService.getUCart().subscribe()
      this.productoService.getProductos().subscribe(
          prod=>{
              console.log(prod)
          }
      )
  }


}
