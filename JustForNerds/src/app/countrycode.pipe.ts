import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countrycode'
})
export class CountrycodePipe implements PipeTransform {

  transform(value: string, countrycode: string): string {
    if(countrycode == 'IN') {
      return '+91 ' + value;
    } else if(countrycode== 'SG') {
      return '+65 ' + value;
    } else {
      return value;
    }
    return null;
  }

}
