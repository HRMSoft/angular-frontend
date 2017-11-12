import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../core/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public myForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  public onSubmit() {
    console.log("i was here");
    if (this.myForm.valid) {
      this.authService.login(this.myForm.get("name").value, this.myForm.get("password").value).subscribe(
        (message) => {
          if (message.success) {
            this.router.navigate(["restaurants"]);
          } else {
            console.log("error on login");
          }
        },
        (error) => {
          console.log("error", error);
        }
      );

      console.log("submit", this.myForm);
    }
  }

  public register() {
    this.router.navigate(["register"]);
  }
}
