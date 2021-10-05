import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'actorage'
})
export class ActoragePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    let actorage = value;
    let year = new Date().getFullYear();
    actorage = year - actorage;

    return actorage;
  }

}
