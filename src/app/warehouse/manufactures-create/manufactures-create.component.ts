import { Component, OnInit } from '@angular/core';
import { Manufacture } from 'src/app/response/manufacture';
import { ManufactureService } from 'src/app/manufacture.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manufactures-create',
  templateUrl: './manufactures-create.component.html',
  styleUrls: ['./manufactures-create.component.scss']
})
export class ManufacturesCreateComponent implements OnInit {

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
