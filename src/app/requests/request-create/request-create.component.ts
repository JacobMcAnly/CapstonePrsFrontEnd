import { Component, OnInit } from "@angular/core";
import { Request } from "src/model/request.class";
import { RequestService } from "src/app/services/request.service";

@Component({
    selector: 'request-create',
    templateUrl: './request-create.component.html',
    styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent {
    pageTitle: string = "Request Create"
    requests!: Request;

    constructor (private requestService: RequestService) {}

    ngOnInit() {
        this.requestService.saveRequest(this.requests).subscribe(
            jsonResponse => {
                this.requests = jsonResponse as Request;
            }
        );
        }
}