import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { SignupRequestPayload } from './SignupRequestPayload ';


@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
  signupRequestPayload: SignupRequestPayload;
  signupForm: FormGroup;

  constructor(private authService: AuthService) { 
    this.signupRequestPayload = {
      username: '',
      email: '',
      password: ''
    };
    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {

  }

  signup() {
    this.signupRequestPayload.username = this.signupForm.get('username')?.value;
    this.signupRequestPayload.email = this.signupForm.get('email')?.value;
    this.signupRequestPayload.password = this.signupForm.get('password')?.value;
    
    this.authService.signup(this.signupRequestPayload).subscribe(() => {
      console.log('Signup Successful');
    }, () => {
      console.log('Signup Failed');
    });
  }
}
