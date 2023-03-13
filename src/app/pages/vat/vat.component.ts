import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { Vats } from 'src/app/_models/vats.interface';
import { VatService } from 'src/app/_service/vats.service';

@Component({
  selector: 'app-vat',
  templateUrl: './vat.component.html',
  styleUrls: ['./vat.component.css'],
})
export class VatComponent implements OnInit {
  Vats?: Vats[];

  constructor(private vats: VatService) {}

  ngOnInit() {
    this.vats
      .getAllItem()
      .pipe(first())
      .subscribe((item) => {
        this.Vats = item;
      });
  }
}
