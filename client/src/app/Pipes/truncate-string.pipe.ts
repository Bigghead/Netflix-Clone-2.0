import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncate' })

export class TruncateStringPipe implements PipeTransform {

    transform(value: string, howMany: number) {

        if (value.length >= 600) {
            return value.substring(0, 600) + "...";
         } else {
             return value;
         }
    }
}