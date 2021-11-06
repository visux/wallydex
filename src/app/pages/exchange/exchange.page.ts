import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.page.html',
  styleUrls: ['./exchange.page.scss'],
})
export class ExchangePage implements OnInit {
  exchanges: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('./../../assets/json/exchanges.json').subscribe((data: any) => {
      this.exchanges = data;
    });
  }
  

}


  