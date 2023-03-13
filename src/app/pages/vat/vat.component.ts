import { Component, OnInit } from '@angular/core';
import { VatsData } from 'src/app/_models/vats.interface';
import { VatService } from 'src/app/_service/vats.service';

@Component({
  selector: 'app-vat',
  templateUrl: './vat.component.html',
  styleUrls: ['./vat.component.css'],
})
export class VatComponent implements OnInit {
  vats: VatsData[] = [];

  constructor(private vatService: VatService) {}

  ngOnInit() {
    this.vatService.getAllItem().subscribe((result) => {
      if (result?.data && result.data.length) {
        this.vats = result.data;
      }
    });
  }
}
