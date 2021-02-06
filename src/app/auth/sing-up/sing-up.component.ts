import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
  
  signupForm: FormGroup | undefined;

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl(null),
      email: new FormControl(null),
      password: new FormControl(null)
    });
  }

}
