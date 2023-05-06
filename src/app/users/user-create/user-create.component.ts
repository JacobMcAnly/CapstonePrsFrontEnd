import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { User } from "src/model/user.class";
import { Location } from "@angular/common";

@Component({
    selector: 'user-create',
    templateUrl: './user-create.component.html',
    styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
    pageTitle: string = "User Create";
    user: User = new User(); 

    constructor (private userService: UserService, 
        private location: Location) {}

    ngOnInit() { }

    createUser() {
        this.userService.save(this.user).subscribe(jsonResponse => {
            this.user = jsonResponse as User;
            this.location.back();
        });
    } 

}