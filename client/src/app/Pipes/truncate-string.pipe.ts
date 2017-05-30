import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name : 'truncate'})

export class TruncateStringPipe implements PipeTransform{

    transform(value: string, howMany: number){
        return value.slice(0, howMany) + "...";
    }
}