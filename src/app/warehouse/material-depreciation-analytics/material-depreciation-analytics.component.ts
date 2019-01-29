import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/server.service';
import { Material } from 'src/app/response/material';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-material-depreciation-analytics',
  templateUrl: './material-depreciation-analytics.component.html',
  styleUrls: ['./material-depreciation-analytics.component.scss']
})
export class MaterialDepreciationAnalyticsComponent implements OnInit {

  public loading: boolean;
  private slug: string;
  public material: Material;
  public materialForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private server: ServerService
  ) { }

  ngOnInit() {
    this.slug = this.route.snapshot.params['slug'];
    this.loading = true;
    this.fetchMaterial();
  }

  public fetchMaterial() {
    this.server.materialShow(this.slug).subscribe((response) => {
      this.material = response;
      this.loading = false;
      this.materialForm = new FormGroup({
        name: new FormControl(this.material.name, [Validators.required, Validators.minLength(6), Validators.maxLength(120)])
      });
    });
  }

  public updateMaterial(material: Material) {
    this.material = material;
  }

}
