import { Component, OnInit } from '@angular/core';
import { BagService } from '../common/bag.service';
import { Bag } from '../common/bag';

@Component({
  selector: 'app-bonbondex-bag',
  templateUrl: './bonbondex-bag.component.html',
  styleUrls: ['./bonbondex-bag.component.css']
})
export class BonbondexBagComponent implements OnInit {

  constructor(private bagService: BagService) { }
  bagItems: Bag[];
  ngOnInit() {
    this.bagItems = this.bagService.get();
  }

}
