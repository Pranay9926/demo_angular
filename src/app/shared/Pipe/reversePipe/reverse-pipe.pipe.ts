import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversePipe',
  standalone: true
})
export class ReversePipePipe implements PipeTransform {

  nvalue: string = ''

  transform(value: any, ...args: any[]): any {

    let temp = value.split(' ')
    console.log(temp);

    this.nvalue = temp.map((e: any) => {
      return e.split('').reverse().join("")
    }).join(" ")
    console.log(temp)

    return this.nvalue;

  }
}
