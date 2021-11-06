import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dex',
  templateUrl: './dex.page.html',
  styleUrls: ['./dex.page.scss'],
})
export class DexPage implements OnInit {

  populexchanges: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('./../../assets/json/populexchanges.json').subscribe((data: any) => {
      this.populexchanges = data;
    });
  }

}




  