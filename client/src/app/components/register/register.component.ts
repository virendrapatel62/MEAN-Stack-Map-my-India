import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  constructor() {}

  ngOnInit(): void {}

  register() {
    console.log('Register User.....');
    console.log({ user: this.user });
  }

  onAddressType(value) {
    console.log(value);
  }
}
