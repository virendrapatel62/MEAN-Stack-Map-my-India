import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  addresses: any;
  selectedAddress: any = {};
  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    console.log('1. On Init of register component');
    this.mapService.generateToken();
  }

  register() {
    console.log('Register User.....');
    console.log({ user: this.user });
  }

  onAddressType() {
    const address = this.selectedAddress.formattedAddress;
    console.log();
    this.mapService.getAddresses(address).subscribe((addressResponse) => {
      this.addresses = addressResponse;
    });
    // search address from map api
  }

  onSelectAddress(address) {
    console.log({ selectedAddress: address });
    this.selectedAddress = address;
    this.addresses = [];
  }
}
