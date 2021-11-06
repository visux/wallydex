import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xdai',
  templateUrl: './xdai.page.html',
  styleUrls: ['./xdai.page.scss'],
})
export class XdaiPage implements OnInit {

  xdai: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('./../../assets/json/xdai.json').subscribe((data: any) => {
      this.xdai = data;
    });
  }


}
