import { Component, OnInit } from "@angular/core";
import { User } from "src/model/user.class";
import { UserService } from "src/app/services/user.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
    selector: 'user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{
    pageTitle: string = "User Detail";
    users!: User;
    id: number = 0;
    deleted: boolean = false; // new flag to indicate if a user has been deleted

    constructor (
        private userService: UserService,
        private route: ActivatedRoute,
        private location: Location) {}
        
    ngOnInit() {
        this.route.params.subscribe(parms => this.id = parms['id']);
        this.userService.get(this.id).subscribe( 
            jsonResponse => { this.users = jsonResponse as User; }
        );
    }

    // delete user by Id
    userDelete() {
        this.userService.delete(this.id).subscribe(
            () => {
              this.users  // clear the user data
              this.deleted = true; // set the flag to display "deleted" message
              this.location.back();
            },
            error => console.log(error) // handle errors if necessary
        );
    }
}