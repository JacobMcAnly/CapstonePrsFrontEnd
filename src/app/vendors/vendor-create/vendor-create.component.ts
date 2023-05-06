import { Component,OnInit } from "@angular/core";
import { Vendor } from "src/model/vendor.class";
import { VendorService } from "src/app/services/vendor.service";
import { Location } from "@angular/common";

@Component({
    selector: 'vendor-create',
    templateUrl: './vendor-create.component.html',
    styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit{
    pageTitle: string = "Vendor Create"
    vendor: Vendor = new Vendor;

    constructor (private vendorService: VendorService,
        private location: Location) {}

    ngOnInit() { }

    createVendor() {
        this.vendorService.save(this.vendor).subscribe(jsonResponse => {
            this.vendor = jsonResponse as Vendor;
            this.location.back();
        });
    } 

}
