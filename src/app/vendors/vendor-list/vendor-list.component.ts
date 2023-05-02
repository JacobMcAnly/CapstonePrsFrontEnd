import { Component, OnInit } from "@angular/core";
import { Vendor } from "src/model/vendor.class";
import { VendorService } from "src/app/services/vendor.service";

@Component({
    selector: 'vendor-list',
    templateUrl: './vendor-list.component.html',
    styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit{
    pageTitle: string = "Vendors List" 
    vendors: Vendor[] = [];

    constructor (private vendorService: VendorService) {}

    ngOnInit() {
        this.vendorService.list().subscribe(
            jsonResponse => {
                this.vendors = jsonResponse as Vendor[];
            }
        )
    }
}