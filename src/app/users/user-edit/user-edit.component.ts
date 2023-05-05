import { Component, OnInit } from "@angular/core";
import { User } from "src/model/user.class";
import { UserService } from "src/app/services/user.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
    pageTitle: string = "User Edit"
    users!: User;
    id: number = 0;

    constructor(
        private userService: UserService,
        private route: ActivatedRoute 
     ) {}

     ngOnInit() {
        this.route.params.subscribe(parms => this.id = parms['id']);
        this.userService.get(this.id).subscribe(jsonResponse => this.users = jsonResponse as User);
    }
    
    update() {
        this.userService.update(this.users).subscribe(jsonResponse => {
            this.users = jsonResponse as User
        });
}
}