import { Component, OnInit } from '@angular/core';
import {EclerxServicesService} from '../services/eclerx-services.service'
import { HttpHeaders } from '@angular/common/http';
import {apiUrl} from '../url/url';
@Component({
  selector: 'app-is-car-available',
  templateUrl: './is-car-available.component.html',
  styleUrls: ['./is-car-available.component.css']
})
export class IsCarAvailableComponent implements OnInit {
  carAvailable = [];
  constructor(private  _service: EclerxServicesService) { }

  ngOnInit(): void {

    this._service.get(apiUrl.BaseUrl).subscribe((data: any[])=>{
      console.log(data);
      this.carAvailable = data;
    })  
  }

}
