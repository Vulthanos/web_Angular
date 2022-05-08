import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../services/products.service";
import {Producto} from "../interfaces/producto.interface";
import {forkJoin, from, map, mergeMap, Observable, Subject, tap} from "rxjs";
import {Usuario} from "../interfaces/usuario.interface";
import {UsersService} from "../services/users.service";
import {CheckUserService} from "src/app/services/check-user.service";

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

    subject = new Subject<string>();
    //algo2;
    //cosascarrito: Observable<Producto[]>;

    constructor(

        private productoService: ProductsService, private usersService: UsersService, private checkUserService: CheckUserService) {
        this.products = this.productoService.getProductos();
        this.users = this.usersService.getUsers();
  //  this.ellogeado = this.checkUserService.getU().then(algo=>{
//        console.log(algo);
        //this.algo2=algo;
    //});

        this.getUser().then()

        this.getCurrentUser()
    }

    getCurrentUser(){
       // this.checkUserService.getCurrentUser().subscribe(user=>{
           // console.log(user);
        //})

    }

    async getUser() {
        const userId = await this.checkUserService.getUserId();
        this.usersService.getUserByID(userId).pipe(
            mergeMap((res1) => this.usersService.getProductsByCart(res1['cart'])),
        ).subscribe((res3) => {
            console.log(res3);
            this.productosCarrito=res3;

            /*
        this.checkUserService.getU().then(res1=>{
            //console.log(res1);
            this.subject.next(res1);
        });

        this.subject.subscribe(res10=>{
            console.log(res10);
            this.usersService.getUserByID(res10).pipe(
                mergeMap((res1) => this.usersService.getProductsByCart(res1['cart'])),
            ).subscribe((res3) => {
                //console.log(res3);
                this.productosCarrito=res3;
            }); */
        });
    }


            /*
        this.checkUserService.getU().pipe(
            tap(el => console.log("Process "+ el),
                err => console.error(err),
                () => console.log("Complete")
            ),
            mergeMap((res1) => this.usersService.getUserByID(res1)),
            tap(el => console.log("Process "+ el),
                err => console.error(err),
                () => console.log("Complete")
            ),
            mergeMap((res1) => this.usersService.getProductsByCart(res1['cart']))
        ).subscribe((res3) => {
            console.log(res3);
            this.productosCarrito = res3;

        });
    }
    */



       /* observable.pipe(
            mergeMap((res1) => this.usersService.getUserByID(res1)),
            mergeMap((res2) => this.usersService.getProductsByCart(res2['cart']))
        ).subscribe((res3) => {
            console.log(res3);
            this.productosCarrito = res3;

        });
        */



        /*
        this.usersService.getUserByID('1B010snvDnobXXvbETxb').subscribe(user=>{
            this.usersService.getProductsByCart(user['cart']).subscribe(prod=>{
                console.log(prod);
            });
        });*/



    ngOnInit(): void {
        //this.usersService.getUsers().subscribe()
        //this.usersService.getUCart().subscribe()
        //this.productoService.getProductos().subscribe()
    }


}


