import { Component, OnInit } from '@angular/core';
import { AuthService } from "../core/services/auth.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public myForm: FormGroup;
  public locations: string[] = ["Bern", "Fribourg", "Neuchatel"]

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      location: ['', [Validators.required]],
      food: ['', [Validators.required]],
    });
  }

  public onSubmit() {
    if (this.myForm.valid) {
      this.authService.register(this.myForm.get("name").value,
                                this.myForm.get("password").value,
                                this.myForm.get("location").value,
                                this.myForm.get("food").value).subscribe(
        (message) => {
          if (message.success) {
            this.router.navigate(["login"]);
          } else {
            console.log("error on register", message);
          }
        },
        (error) => {
          console.log("error", error);
        }
      );
    }
  }

}
