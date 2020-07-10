import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
  public email: string = "";
  public password: string = "";

  constructor(private dialog: MatDialog, private router: Router, private toastrService: ToastrService) { 
  }

  login() {
    if (this.email == "email@email.com" && this.password == "p@ssword") {
      // The value can be changes to the token value.
      this.toastrService.success('LogIn Sucessfully...');
      localStorage.setItem('currentUser', 'LoggedIn');
      this.router.navigate(['home']);
    } else {
     this.toastrService.error('Bad Credentials');
    }
  }

  ngOnInit(): void {
  }

  // To Implement the logout functionality, try setting a item in local storage and then reading it in home(i.e. sidebar menu). 
  // If the localStorage Item exists then User is logged in & show the logout component in place of login compoentn

}
