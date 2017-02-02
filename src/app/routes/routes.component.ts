import { Component, OnInit } from '@angular/core';
import {DigitransitService} from "../services/digitransit.service";

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {

  private hslasemajuttu: any = [];
  private hslreittijuttu: any = [];


  constructor(private digitransitService: DigitransitService) { }

  private reitit: any = [];

  ngOnInit() {
    this.digitransitService.getRoutes()
      .subscribe(
        (res) => {
          console.log(res.data.stops);
          this.hslasemajuttu = res.data.stops;

        }
      );
  }

}



