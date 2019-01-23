import { Chart } from 'angular-highcharts';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Material } from 'src/app/response/material';
import { ServerService } from 'src/app/server.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-material-detail',
  templateUrl: './material-detail.component.html',
  styleUrls: ['./material-detail.component.scss']
})
export class MaterialDetailComponent implements OnInit {

  public chart: Chart;
  public load: boolean;
  private slug: string;
  public material: Material;
  public submitting: boolean;
  public materialForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private server: ServerService
  ) { }

  ngOnInit() {
    this.slug = this.route.snapshot.params['slug'];
    this.load = true;
    this.submitting = false;
    this.fetchMaterial();
  }

  public fetchMaterial() {
    this.server.materialShow(this.slug).subscribe((response) => {
      this.material = response;
      this.load = false;
      this.materialForm = new FormGroup({
        name: new FormControl(this.material.name, [Validators.required, Validators.minLength(6), Validators.maxLength(120)])
      });
      this.buildChart('area');
    });
  }

  public buildChart(type:  string) {
    const series = [];
    this.material.providers.forEach(provider => {
      series.push({
        id: provider.id,
        name: provider.name,
        data: []
      });
    });
    this.material.prices.forEach(price => {
      series.find(provider => provider.id === price.provider_id).data.push(price.amount);
    });
    this.chart = new Chart({
      chart: {
        type: type,
      },
      yAxis: {
        title: {
          text: 'Prices'
        }
      },
      title: {
        text: 'Recorded Price Changes'
      },
      credits: {
        enabled: true
      },
      series: series
    });
  }

  public materialUpdate() {
    this.submitting = true;
    this.server.materialUpdate(this.material.slug, this.materialForm).subscribe((response) => {
      this.fetchMaterial();
      this.submitting = false;
    });
  }

  public redbuildChart(type: string) {
    this.chart.destroy();
    this.buildChart(type);
  }
}
