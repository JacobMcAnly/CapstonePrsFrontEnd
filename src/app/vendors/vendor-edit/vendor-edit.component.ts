import { Component } from "@angular/core";
import { Vendor } from "src/model/vendor.class";

@Component({
    selector: 'vendor-edit',
    templateUrl: './vendor-edit.component.html',
    styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent {
    pageTitle: string = "Vendor Edit"
    vendors: Vendor[] = [];
}