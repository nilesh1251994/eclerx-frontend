import { Component, OnInit } from '@angular/core';
import {EclerxServicesService} from '../services/eclerx-services.service'
import { HttpHeaders } from '@angular/common/http';
import {apiUrl} from '../url/url';

@Component({
  selector: 'app-get-info',
  templateUrl: './get-info.component.html',
  styleUrls: ['./get-info.component.css']
})
export class GetInfoComponent implements OnInit {

  getinfo = [];
  constructor(private  _service: EclerxServicesService) { }

  ngOnInit(): void {

    this._service.get(apiUrl.BaseUrl).subscribe((data: any[])=>{
      console.log(data);
      this.getinfo = data;
    })  
  }

}