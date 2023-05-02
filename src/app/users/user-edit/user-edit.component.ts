import { Component } from "@angular/core";
import { User } from "src/model/user.class";

@Component({
    selector: 'user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.html']
})
export class UserEditComponent {
    pageTitle: string = "User Edit"
    users: User[] = []
}