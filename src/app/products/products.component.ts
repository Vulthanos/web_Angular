import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../services/products.service";
import {Producto} from "../interfaces/producto.interface";
import {forkJoin, mergeMap, Observable, Subject} from "rxjs";
import {Usuario} from "../interfaces/usuario.interface";
import {UsersService} from "../services/users.service";
import {CheckUserService} from "../services/check-user.service";


@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    //  subject = new Subject<Array<any>>();

    //public productos?: Producto[] = [];
    products: Observable<Producto[]>;

    // public usuarios?: Usuario[] = [];
    users: Observable<Usuario[]>;

    //productosCarrito: Array<any>=[];

    productosCarrito: any[] = [];

    ellogeado;

    //cosascarrito: Observable<Producto[]>;

    constructor(
        private productoService: ProductsService, private usersService: UsersService, private checkUserService: CheckUserService) {
        this.products = this.productoService.getProductos();
        this.users = this.usersService.getUsers();
    this.ellogeado = this.checkUserService.getU()
        this.getUser()

    }



    getUser(){
        console.log(this.ellogeado);
        this.usersService.getUserByID('1B010snvDnobXXvbETxb').pipe(
            mergeMap((res1) => this.usersService.getProductsByCart(res1['cart'])),
        ).subscribe((res3) => {
            console.log(res3);
            this.productosCarrito=res3;

        });

        /*
        this.usersService.getUserByID('1B010snvDnobXXvbETxb').subscribe(user=>{
            this.usersService.getProductsByCart(user['cart']).subscribe(prod=>{
                console.log(prod);
            });
        });*/
    }


    ngOnInit(): void {
        console.log(this.productosCarrito);
        //this.usersService.getUsers().subscribe()
        //this.usersService.getUCart().subscribe()
        //this.productoService.getProductos().subscribe()
    }


}


