import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.page.html',
  styleUrls: ['./finance.page.scss'],
})
export class FinancePage implements OnInit {

  finance: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('./../../assets/json/finance.json').subscribe((data: any) => {
      this.finance = data;
    });
  }

}
