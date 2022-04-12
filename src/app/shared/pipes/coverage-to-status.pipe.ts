import { Pipe, PipeTransform } from '@angular/core';
import { COVERAGE } from 'src/app/models/stock.model';

@Pipe({
  name: 'coverageToStatus',
})
export class CoverageToStatusPipe implements PipeTransform {
  transform(value: COVERAGE): string {
    return value === COVERAGE.HIGH
      ? 'Very Good'
      : value === COVERAGE.MEDIUM
      ? 'Good'
      : 'Very Low';
  }
}
