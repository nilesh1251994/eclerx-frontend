import { Component, OnInit } from '@angular/core';
import {EclerxServicesService} from '../services/eclerx-services.service'
import { HttpHeaders } from '@angular/common/http';
import {apiUrl} from '../url/url';

@Component({
  selector: 'app-is-person-registered',
  templateUrl: './is-person-registered.component.html',
  styleUrls: ['./is-person-registered.component.css']
})
export class IsPersonRegisteredComponent implements OnInit {

  personRegistred = [];
  constructor(private  _service: EclerxServicesService) { }

  ngOnInit(): void {

    this._service.get(apiUrl.BaseUrl).subscribe((data: any[])=>{
      console.log(data);
      this.personRegistred = data;
    })  
  }

}