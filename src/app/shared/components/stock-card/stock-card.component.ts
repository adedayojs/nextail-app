import { Component, Input, OnInit } from '@angular/core';
import { IStockModel } from 'src/app/models/stock.model';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss'],
})
export class StockCardComponent implements OnInit {
  @Input() stock!: IStockModel;
  displayHover = false;
  constructor(private stockService: StockService) {}

  ngOnInit(): void {}

  toggleHover() {
    this.displayHover = !this.displayHover;
  }
  displayConfirmation() {
    // We could use a 3rd party modal here to make it look nice, but for simplicity sake, we would be using a browser confirm for the purpose of demo
    let response = confirm(
      'Are you sure you want to mark this product as complete?'
    );
    if (response) {
      // Make Api call to remove stock options
      console.log('Removing stock Item');
      this.stockService.removeStock(this.stock.code);
    }
  }
}
