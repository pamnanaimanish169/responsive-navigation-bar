import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn = false;

  constructor(private router: Router, private toastrService: ToastrService) { }

  ngOnInit(): void {
    if (localStorage.getItem('currentUser')) {
      this.isLoggedIn = true;
    }
  }

  goToLogin() {
    this.router.navigateByUrl('/home', { skipLocationChange: true}).then(() => {
      this.router.navigate(['/login']);
    });
  }

  logout() {
    localStorage.clear();
    this.toastrService.success('Logout Successfully');
    this.router.navigateByUrl('/login', { skipLocationChange: true}).then(() => {
      this.router.navigate(['/home']);
    });
  }

}
