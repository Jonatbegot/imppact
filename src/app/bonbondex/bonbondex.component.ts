import { Component, OnInit } from '@angular/core';
import { OpenfoodService } from 'src/app/common/openfood.service';

@Component({
  selector: 'app-bonbondex',
  templateUrl: './bonbondex.component.html',
  styleUrls: ['./bonbondex.component.css'],
})
export class BonbondexComponent implements OnInit {

  products: any;

  constructor(private service: OpenfoodService) { }

  ngOnInit() {
    this.service.readAll().subscribe(res => {
      this.products = res.products;
      console.log(this.products);
    });
  }
}
