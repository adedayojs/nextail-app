import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalToPercentage',
})
export class DecimalToPercentagePipe implements PipeTransform {
  transform(value: number): string {
    return `${value * 100} %`;
  }
}
