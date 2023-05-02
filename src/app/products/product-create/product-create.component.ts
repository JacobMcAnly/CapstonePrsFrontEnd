import { Component, OnInit } from "@angular/core";
import { Product } from "src/model/product.class";
import { ProductService } from "src/app/services/product.service";

@Component({
    selector: 'product-create',
    templateUrl: './product-create.component.html',
    styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit{
    pageTitle: string = "Product Create"
    products!: Product;

    constructor (private productService: ProductService) {}

    ngOnInit() {
        this.productService.save(this.products).subscribe(
            jsonResponse => {
                this.products = jsonResponse as Product;
            }
        )
    }
}