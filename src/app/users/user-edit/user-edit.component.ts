import { Component, OnInit } from "@angular/core";
import { User } from "src/model/user.class";
import { UserService } from "src/app/services/user.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
    selector: 'user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
    pageTitle: string = "User Edit"
    users!: User;
    id: number = 0;
    updated: boolean = false;

    constructor(
        private userService: UserService,
        private route: ActivatedRoute,
        private location: Location 
     ) {}

     ngOnInit() {
        this.route.params.subscribe(parms => this.id = parms['id']);
        this.userService.get(this.id).subscribe(jsonResponse => this.users = jsonResponse as User);
    }
    
  // NOT WORKING
    editUser() {
        this.userService.update(this.users).subscribe(
            () => {
              this.updated = true; 
              this.location.back();
            },
            error => console.log(error) 
        );
    }
}