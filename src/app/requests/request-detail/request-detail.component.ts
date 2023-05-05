import { Component, OnInit } from "@angular/core";
import { Request } from "src/model/request.class";
import { LineItem } from "src/model/line-item.class";
import { RequestService } from "src/app/services/request.service";
import { LineItemService } from "src/app/services/line-item.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'request-detail',
    templateUrl: './request-detail.component.html',
    styleUrls: ['./request-detail.component.html']
})
export class RequestDetailComponent implements OnInit{
    pageTitle: string = "Request Detail"
    requests!: Request;
    id!: number;
    //lineItems:

    constructor (
        private requestService: RequestService,
        private route: ActivatedRoute){}

        ngOnInit() {
            this.route.params.subscribe(parms => this.id = parms['id']);
            this.requestService.getRequest(this.id).subscribe(
                jsonResponse => { this.requests = jsonResponse as Request}
            );
        }
}