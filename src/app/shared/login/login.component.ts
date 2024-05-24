import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { merge } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatCardModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // email = new FormControl('', [Validators.required, Validators.email]);
  // password = new FormControl('', [Validators.required]);

  errorMessage = '';
  passwordMessage = '';
  emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;




  loginForm!: FormGroup;
  constructor(private fn: FormBuilder) {

  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loginForm = this.fn.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern(this.emailRegex)]],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    })
  }


  handleSubmit() {
    // console.log("values", this.loginForm)
    if (this.loginForm.valid) {
      console.log("formValus", this.loginForm.value);

    }

  }





  // constructor() {
  //   merge(this.email.statusChanges, this.email.valueChanges)
  //     .pipe(takeUntilDestroyed())
  //     .subscribe(() => this.updateErrorMessage());

  //   merge(this.password.statusChanges, this.password.valueChanges)
  //     .pipe(takeUntilDestroyed())
  //     .subscribe(() => this.updatePasswordErrorMessage());
  // }

  // updateErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     this.errorMessage = 'You must enter a value';
  //   } else if (this.email.hasError('email')) {
  //     this.errorMessage = 'Not a valid email';
  //   } else {
  //     this.errorMessage = '';
  //   }
  // }
  // updatePasswordErrorMessage() {
  //   if (this.password.hasError('required')) {
  //     this.passwordMessage = 'You must enter a value';
  //   } else if (this.password.hasError('password')) {
  //     this.passwordMessage = 'Not a valid password';
  //   } else {
  //     this.passwordMessage = '';
  //   }
  // }

}
