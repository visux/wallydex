import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polygon',
  templateUrl: './polygon.page.html',
  styleUrls: ['./polygon.page.scss'],
})
export class PolygonPage implements OnInit {

  polygon: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('./../../assets/json/polygon.json').subscribe((data: any) => {
      this.polygon = data;
    });
  }

}
