import { Component, OnInit } from "@angular/core";
import { User } from "src/model/user.class";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit{
    pageTitle: string = "User Login";
    users!: User;

    constructor(
        private userService: UserService) {}

    ngOnInit(): void {
        
    }

}
