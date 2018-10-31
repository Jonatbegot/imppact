import { Component, OnInit } from '@angular/core';
import { OpenfoodService } from 'src/app/common/openfood.service';

@Component({
  selector: 'app-bonbondex',
  templateUrl: './bonbondex.component.html',
  styleUrls: ['./bonbondex.component.css'],
})
export class BonbondexComponent implements OnInit {

  products: any;
  page = 2;

  constructor(private service: OpenfoodService) { }

  ngOnInit() {
    this.service.readAll().subscribe(res => {
      console.log(res);
      this.products = res.products;
      console.log(this.products);
    });

  }

  onPageChange($event) {
    this.page = $event;

    this.service.readById($event).subscribe(res => {
      this.products = res.products;
      console.log(this.products);
    });
  }
}
