import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: string, gender:string): string {
    if (gender == 'M') {
      return 'Mr. ' + value;
    } else {
      return 'Miss. ' + value;
    }
    return null;
  }

}
