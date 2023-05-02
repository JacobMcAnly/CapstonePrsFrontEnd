import { Component, OnInit } from "@angular/core";
import { Request } from "src/model/request.class";
import { LineItem } from "src/model/line-item.class";
import { RequestService } from "src/app/services/request.service";

@Component({
    selector: 'request-list',
    templateUrl: './request-list.component.html',
    styleUrls: ['./request-list.component.html']
})
export class RequestListComponent implements OnInit{
    pageTitle: string = "Request List"
    requests: Request[] = [];
  

    constructor (private requestService: RequestService) {}

    ngOnInit() {
    this.requestService.listRequests().subscribe(
        jsonResponse => {
            this.requests = jsonResponse as Request[];
        }
    );
}
}