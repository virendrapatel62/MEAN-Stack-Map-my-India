import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  selectedAddress: any = {};
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    console.log('1. On Init of register component');
  }

  register() {
    console.log('Register User.....');
    console.log({ user: this.user });
    this.authService.register(this.user).subscribe((response: any) => {
      console.log({ 'User created': response.user });
      this.user = new User();
      this.selectedAddress = {};
      alert('User Created...');
    });
  }

  onSelectAddress(address) {
    console.log('From Parant Component', address);
    this.user.address = address;
  }
}
