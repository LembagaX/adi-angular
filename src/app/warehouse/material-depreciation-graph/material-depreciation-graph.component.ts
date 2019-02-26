import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Material } from 'src/app/response/material';
import { ServerService } from 'src/app/server.service';
import { Depreciation } from 'src/app/response/depreciation';

@Component({
  selector: 'app-material-depreciation-graph',
  templateUrl: './material-depreciation-graph.component.html',
  styleUrls: ['./material-depreciation-graph.component.scss']
})
export class MaterialDepreciationGraphComponent implements OnInit, OnChanges {

  @Input() material: Material;

  public graph: Chart;
  public loading; boolean;

  constructor(
    private server: ServerService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.loading = true;
    this.material = changes['material'].currentValue;
    this.fetch();
  }

  ngOnInit() {
    this.fetch();
  }

  private fetch() {
    this.loading = true;
    this.server.depreciationIndex(this.material).subscribe((response) => {
      this.loading = false;
      this.fetchGraph(response);
    });
  }

  public fetchGraph(data: Depreciation[]) {
    const series = [{
      name: 'Purchasing',
      data: [0]
    }];

    this.server.purchasesIndex(this.material).subscribe(purchases => {
      purchases.forEach(purchase => {
        purchase.material_purchases.forEach(material_purchase => {
          if (material_purchase.material_id === this.material.id) {
            series.find(serie => serie.name === 'Purchasing').data.push(material_purchase.quantity);
          }
        });
      });
      this.buildGraph(data, series);
    });
  }

  private buildGraph(data: Depreciation[], series: { name: string; data: number[]; }[]) {
    data.forEach(element => {
      if (series.find(push => push.name === element.provider.name)) {
        series.find(push => push.name === element.provider.name).data.push(element.quantity);
      } else {
        series.push({
          name: element.provider.name,
          data: [0]
        });
        series.find(push => push.name === element.provider.name).data.push(element.quantity);
      }
    });

    this.graph = new Chart({
      chart: {
        type: 'spline',
      },
      yAxis: {
        title: {
          text: 'Material quantity'
        }
      },
      xAxis: {
        title: {
          text: 'Material Depreciation and Purchasing Records'
        }
      },
      title: {
        text: 'Material Depreciation Analytics'
      },
      credits: {
        enabled: true
      },
      series: series
    });
  }
}
