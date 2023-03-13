import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vats } from '../_models/vats.interface';
@Injectable({
  providedIn: 'root',
})
export class VatService {
  constructor(private http: HttpClient) {}

  getAllItem() {
    const header: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });

    return this.http.get<Vats[]>(
      'http://devapiv3.qsmart.ie/api/hee/measure-category?ItemsPerPage=20&PageNo=1&RStatus=1',
      { headers: header }
    );
  }
}
