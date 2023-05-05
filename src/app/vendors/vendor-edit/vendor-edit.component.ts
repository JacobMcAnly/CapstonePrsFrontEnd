import { Component, OnInit } from "@angular/core";
import { Vendor } from "src/model/vendor.class";
import { VendorService } from "src/app/services/vendor.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'vendor-edit',
    templateUrl: './vendor-edit.component.html',
    styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent {
    pageTitle: string = "Vendor Edit"
    vendors!: Vendor;
    id: number = 0;

    constructor(
        private vendorService: VendorService,
        private route: ActivatedRoute 
     ) {}

     ngOnInit() {
        this.route.params.subscribe(parms => this.id = parms['id']);
        this.vendorService.get(this.id).subscribe(jsonResponse => this.vendors = jsonResponse as Vendor)
     }
}