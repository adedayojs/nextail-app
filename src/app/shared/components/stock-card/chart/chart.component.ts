import { Component, Input, OnInit } from '@angular/core';
import { IStockModel } from 'src/app/models/stock.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  @Input() stock!: IStockModel;
  dataSource: any = {
    chart: {
      theme: 'fusion',
    },
    data: [],
  }; // We are using any because the chart library does not provide an interface
  constructor() {}

  ngOnInit(): void {
    this.updateDataSource();
  }

  updateDataSource() {
    const sizes = this.stock.size_stock;
    for (const [key, val] of Object.entries(sizes)) {
      this.dataSource.data.push({
        label: key,
        value: val,
      });
    }
  }
}
