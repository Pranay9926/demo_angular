import { Component } from '@angular/core';
import { Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from '../header/header.component';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatCardModule, HeaderComponent, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  errorMessage = '';
  passwordMessage = '';
  emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


  loginForm!: FormGroup;
  constructor(private fn: FormBuilder) {
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


}
