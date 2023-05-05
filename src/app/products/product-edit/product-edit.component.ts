import { Component, OnInit } from "@angular/core";
import { Product } from "src/model/product.class";
import { ProductService } from "src/app/services/product.service";
import { ActivatedRoute } from "@angular/router";
import { Vendor } from "src/model/vendor.class";
import { VendorService } from "src/app/services/vendor.service";

@Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.css']
})

export class ProductEditComponent implements OnInit{
    pageTitle: string = "Product Edit";
    products!: Product;
    vendors: Vendor[] = [];
    id: number = 0;

    constructor(
        private productService: ProductService,
        private vendorService: VendorService,
        private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params.subscribe(p => this.id = p['id']);
        this.productService.get(this.id).subscribe(j => this.products = j as Product);

        //get list of vendors for dropdown menu
        this.vendorService.list().subscribe(j => this.vendors = j as unknown as Vendor[]);
    }
}