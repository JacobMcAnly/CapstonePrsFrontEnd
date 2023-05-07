import { Component, OnInit } from "@angular/core";
import { Product } from "src/model/product.class";
import { ProductService } from "src/app/services/product.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
    pageTitle: string = "Product Detail"
    products!: Product;
    id: number = 0;

    constructor (
        private productService: ProductService,
        private route: ActivatedRoute) {}

        ngOnInit() {
            this.route.params.subscribe(parms => this.id = parms['id']);
            this.productService.get(this.id).subscribe(
                jsonResponse => { this.products = jsonResponse as Product}
            );
        }
    
}