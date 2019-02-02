import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Manufacture } from 'src/app/response/manufacture';

@Component({
  selector: 'app-manufactures-show',
  templateUrl: './manufactures-show.component.html',
  styleUrls: ['./manufactures-show.component.scss']
})
export class ManufacturesShowComponent implements OnInit {

  protected code: string;
  protected manufacture: Manufacture;

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.code = this.router.snapshot.params['code'];
  }

  public manufactureListener(manufacture: Manufacture) {
    this.manufacture = manufacture;
    console.log(this.manufacture);
  }

}
