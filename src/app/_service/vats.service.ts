import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Vats } from "../_models/vats.interface";
@Injectable({
    providedIn:'root'
})


export class VatService {
    constructor(private http:HttpClient){}

    getAllItem(){
       return this.http.get<Vats []>('http://devapiv3.qsmart.ie/api/vats?ItemsPerPage=20&PageNo=1')
    }


}