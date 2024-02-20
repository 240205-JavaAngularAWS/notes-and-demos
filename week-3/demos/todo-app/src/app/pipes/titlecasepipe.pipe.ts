import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousandpipe'
})
export class TitlecasepipePipe implements PipeTransform {

  transform(value: string | number): string {
    // When creating a pip we can specify the type of value we want to take in and then we can transform it however we want
    // We'll do something simple here and maybe just append 000 to the end of whatever data we want to use

    value = String(value);

    return value + "000"
  }

}
