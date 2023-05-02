import { Component,OnInit } from "@angular/core";
import { Vendor } from "src/model/vendor.class";
import { VendorService } from "src/app/services/vendor.service";

@Component({
    selector: 'vendor-create',
    templateUrl: './vendor-create.component.html',
    styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit{
    pageTitle: string = "Vendor Create"
    vendors!: Vendor;

    constructor (private vendorService: VendorService) {}

    ngOnInit() {
        this.vendorService.save(this.vendors).subscribe(
            jsonResponse => {
                this.vendors = jsonResponse as Vendor;
            }
        )
    }

    // saveVendor() {
    //     this.vendorService.save(this.vendors).subscribe(
    //         jsonResponse => {
    //             this.vendors = jsonResponse as Vendor;
    //         }
    //     );
    // }

}
