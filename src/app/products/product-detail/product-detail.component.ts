import { Component } from "@angular/core";
import { Product } from "src/model/product.class";

@Component({
    selector: 'product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
    pageTitle: string = "Product Detail"
    products: Product[] = [];
    
        // {
        //     "id": 12,
        //     "partNbr": "AVC-0777",
        //     "name": "End-of-line Flame Arrestor",
        //     "price": 806.91,
        //     "unit": "each",
        //     "photoPath": "https://www.protectoseal.com/product/vapor-and-flame-solutions/flame-detonation-arresters/end-of-line-deflagration-flame-arresters/avc/",
        //     "vendor": {
        //         "id": 14,
        //         "code": "PROSL-8899",
        //         "name": "Protectoseal",
        //         "address": "225 Foster Ave",
        //         "city": "Bensenville",
        //         "state": "IL",
        //         "zip": "60106",
        //         "phone": "6305950800",
        //         "email": "help@protectoseal.com"
        //     }
        // } 
    
}