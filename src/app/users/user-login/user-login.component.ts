import { Component } from '@angular/core';
import { User } from 'src/model/user.class'; // import the User class
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  pageTitle = 'User Login';
  username!: string; // initialize the username property
  password!: string; // initialize the password property

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  login(): void {
    this.userService.login({ username: this.username, password: this.password }).subscribe(
      (user: User) => {
        this.router.navigate(['/home']); // navigate to home on successful login
      },
      (error: any) => {
        console.log(error); // log any errors that occur during login
      }
    );
  }
}