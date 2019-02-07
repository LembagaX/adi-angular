import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-products-show',
  templateUrl: './products-show.component.html',
  styleUrls: ['./products-show.component.scss']
})
export class ProductsShowComponent implements OnInit {

  public param: string;

  constructor(
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.param = this.activeRoute.snapshot.params['code'];
  }

}
