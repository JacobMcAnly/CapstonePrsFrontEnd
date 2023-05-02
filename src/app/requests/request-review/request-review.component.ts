import { Component } from "@angular/core";
import { Request } from "src/model/request.class";
import { LineItem } from "src/model/line-item.class";

@Component({
    selector: 'request-review',
    templateUrl: './request-review.component.html',
    styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent {
    pageTitle: string = "Request Review"
    requests: Request[] = []; 
    lineItems: LineItem[] = [];


}