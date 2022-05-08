import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from '../../services/load-scripts.service';
import {Observable} from "rxjs";
import {Producto} from "../../interfaces/producto.interface";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

    products: Observable<Producto[]>;

  constructor( private _LoadScripts:LoadScriptsService, private productService: ProductsService) {
      _LoadScripts.LoadHead(["glider"]);
      _LoadScripts.Load(["slider", "glider"]);
      this.products = this.productService.getProductos();
  }

  ngOnInit(): void {
  }

}
