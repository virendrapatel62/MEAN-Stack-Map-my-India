import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-address-input',
  templateUrl: './address-input.component.html',
  styleUrls: ['./address-input.component.css'],
})
export class AddressInputComponent implements OnInit {
  addresses: any;
  selectedAddress: any = {};

  @Output('onSelect')
  onSelectAddress = new EventEmitter();
  constructor(private mapService: MapService) {}

  onAddressType() {
    const address = this.selectedAddress.formattedAddress;
    console.log();
    this.mapService.getAddresses(address).subscribe((addressResponse) => {
      this.addresses = addressResponse;
    });
    // search address from map api
  }

  _onSelectAddress(address) {
    console.log({ selectedAddress: address });
    this.selectedAddress = address;
    console.log('From Child Component', address);
    console.log('Event is going to emit');
    this.onSelectAddress.emit(this.selectedAddress);
    this.addresses = [];
  }

  ngOnInit(): void {}
}
