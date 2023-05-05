import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { User } from "src/model/user.class";

@Component({
    selector: 'user-create',
    templateUrl: './user-create.component.html',
    styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
    pageTitle: string = "User Create"
    users!: User; 

    constructor (private userService: UserService) {}

    ngOnInit() { }

    saveUser() {
        this.userService.save(this.users).subscribe(
            jsonResponse => {
                this.users = jsonResponse as User;
            }
        );
    }

}