import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from '../services/load-scripts.service';
import { ProductsService } from "src/app/services/products.service"
import { Observable } from "rxjs";
import { Producto } from "../interfaces/producto.interface";
import { CheckUserService } from "../services/check-user.service";

@Component({
  selector: 'app-slider-result',
  templateUrl: './slider-result.component.html',
  styleUrls: ['./slider-result.component.css']
})
export class SliderResultComponent implements OnInit {

    products: Observable<Producto[]>;

  constructor(private _LoadScripts:LoadScriptsService, private productService: ProductsService, private checkUserService: CheckUserService) {
      this.productService.getProductos().subscribe();
      this.products = this.productService.getProductos();
  }

  addProduct(pDesc, pName, pPrice, pImg) {
      this.checkUserService.addProductoToUserCart(pDesc, pName, pPrice, pImg).then();
  }

  ngOnInit(): void {
  }

}
