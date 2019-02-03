import { ActivatedRoute } from '@angular/router';
import { Manufacture } from 'src/app/response/manufacture';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ManufactureService } from 'src/app/manufacture.service';

@Component({
  selector: 'app-manufactures-show',
  templateUrl: './manufactures-show.component.html',
  styleUrls: ['./manufactures-show.component.scss']
})
export class ManufacturesShowComponent implements OnInit {

  protected code: string;
  protected loading: boolean;
  protected refresh: boolean;
  protected manufacture: Manufacture;

  constructor(
    private router: ActivatedRoute,
    private service: ManufactureService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.code = this.router.snapshot.params['code'];
  }

  public manufactureListener(manufacture: Manufacture) {
    this.loading = true;
    this.service.show(manufacture.code).subscribe((response) => {
      this.manufacture = response;
      this.loading = false;
    });
  }

}
