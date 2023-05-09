import { Component, OnInit } from "@angular/core";
import { Product } from "src/model/product.class";
import { ProductService } from "src/app/services/product.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
    selector: 'product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
    pageTitle: string = "Product Detail"
    products!: Product;
    id: number = 0;
    deleted: boolean = false;

    constructor (
        private productService: ProductService,
        private route: ActivatedRoute,
        private location: Location) {}

        ngOnInit() {
            this.route.params.subscribe(parms => this.id = parms['id']);
            this.productService.get(this.id).subscribe(
                jsonResponse => { this.products = jsonResponse as Product}
            );
        }

        productDelete() {
            this.productService.delete(this.id).subscribe(
                () => {
                    this.products
                    this.deleted = true;
                    this.location.back();
                },
                error => console.log(error)
            )
        }
    
}