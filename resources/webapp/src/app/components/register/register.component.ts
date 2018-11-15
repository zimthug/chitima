import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/shared/models/user.model';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  returnUrl: string;
  error = '';
  success = '';
  user: IUser;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });


  }

  get f() { return this.registerForm.controls; }

  register() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.userService.registerUser(this.registerForm.value).pipe(first()).subscribe(
      data => {
        this.success = "User Created Successfully";
        setTimeout(() => {
          this.router.navigate(['/login']);
        },
          3000);

      }, error => {
        this.error = error;
      }
    );

  }

}
