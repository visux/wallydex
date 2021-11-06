import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.page.html',
  styleUrls: ['./crypto.page.scss'],
})
export class CryptoPage implements OnInit {

  crypto: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('./../../assets/json/crypto.json').subscribe((data: any) => {
      this.crypto = data;
    });
  }

}
