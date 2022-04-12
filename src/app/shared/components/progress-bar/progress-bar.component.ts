import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { COVERAGE } from 'src/app/models/stock.model';
import { coverageDeterminant } from 'src/app/utils/stocks';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent implements OnInit {
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() rawValue: number = 20;
  constructor() {}

  ngOnInit(): void {}

  get computedValue(): number {
    let minMaxDiff = this.max - this.min;
    return (this.rawValue / minMaxDiff) * 100;
  }

  get coverage(): COVERAGE {
    return coverageDeterminant(this.computedValue);
  }
}
