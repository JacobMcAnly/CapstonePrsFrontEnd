import { Component,OnInit } from "@angular/core";
import { Vendor } from "src/model/vendor.class";
import { VendorService } from "src/app/services/vendor.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'vendor-detail',
    templateUrl: './vendor-detail.component.html',
    styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit{
    pageTitle: string = "Vendor Detail"
    vendors!: Vendor;
    id!: number;

    constructor (
        private vendorService: VendorService,
        private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe(parms => this.id = parms['id']);
        this.vendorService.get(this.id).subscribe(
            jsonResponse => { this.vendors = jsonResponse as Vendor}
        );
    }
}