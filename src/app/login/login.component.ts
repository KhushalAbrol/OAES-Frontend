import { ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginForm } from '../interface/loginForm';
import { LoginService } from '../_services/login.service';
// import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isAuthenticated = false;
  optionValue: string = "";
  userId: string = '';
  email: string = '';
  form: LoginForm  = ({} as any) as LoginForm;

  constructor(
    private loginService: LoginService, 
    private router: Router,
  ) { }

  public login(loginForm: NgForm){
    this.form.userID = loginForm.value.userId;
    this.form.password = loginForm.value.password;
    this.loginService.login(this.form).subscribe({
      next: (response: any) => {
        const role = Object.keys(response).length === 8 ? "student" : "coordinator";
        if (role === 'student') {
          this.loginService.setId(response.userID);
          this.router.navigate([`/exam/`]);   
        } else if (role === 'coordinator') {
          this.router.navigate(['/coordinator']);
        } else {
          this.router.navigate(['/login']);
        }
      },
      error: (error) => {
        console.log("error", error);
      }
    });
  }

  ngOnInit(): void {
    this.optionValue = "email";
    localStorage.clear();
  }

}
