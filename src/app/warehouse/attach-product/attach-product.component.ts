import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Manufacture } from 'src/app/response/manufacture';

@Component({
  selector: 'app-attach-product',
  templateUrl: './attach-product.component.html',
  styleUrls: ['./attach-product.component.scss']
})
export class AttachProductComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { manufacture: Manufacture }
  ) { }

  ngOnInit() {
  }

}
