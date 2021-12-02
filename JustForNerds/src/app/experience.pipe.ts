import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'experience'
})
export class ExperiencePipe implements PipeTransform {
  currentYear: any;
    joinYear:any;
    experience: any;

  transform(value: any): any {
    this.currentYear=new Date().getFullYear();
    this.joinYear=new Date().getFullYear();
    this.experience=this.currentYear-this.joinYear;
    return this.experience;
  }

}
