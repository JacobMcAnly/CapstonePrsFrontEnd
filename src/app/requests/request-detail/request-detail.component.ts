import { Component } from "@angular/core";
import { Request } from "src/model/request.class";
import { LineItem } from "src/model/line-item.class";

@Component({
    selector: 'request-detail',
    templateUrl: './request-detail.component.html',
    styleUrls: ['./request-detail.component.html']
})
export class RequestDetailComponent {
    pageTitle: string = "Request Detail"
    requests: Request[] = [];
    lineItems: LineItem[] = [];
}