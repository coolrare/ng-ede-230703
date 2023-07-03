import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twdate'
})
export class TwDatePipe implements PipeTransform {

  transform(value: string): string {
    // 2023-07-03
    const year = +value.substr(0, 4);
    const month = +value.substr(5, 2);
    const day = +value.substr(8, 2);

    return `民國${year-1911}年${month}月${day}日`;

  }

}
