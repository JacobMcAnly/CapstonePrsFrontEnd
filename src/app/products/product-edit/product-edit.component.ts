import { Component } from "@angular/core";
import { Product } from "src/model/product.class";

@Component({
    selector: 'product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
    pageTitle: string = "Product Edit"
    products: Product[] = []
}