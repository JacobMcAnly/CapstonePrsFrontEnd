import { Component, OnInit } from "@angular/core";
import { Product } from "src/model/product.class";
import { ProductService } from "src/app/services/product.service";

//export to make the class available to other parts of the application
@Component({
    selector: 'products-list', 
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']

})
export class ProductListComponent implements OnInit{
    
    pageTitle: string = "Products List"
    products: Product[] = []
   
    constructor (private productService: ProductService) {}

    ngOnInit() {
        this.productService.list().subscribe(
            jsonResponse => {
                this.products = jsonResponse as Product[];
            }
        )
    }


}