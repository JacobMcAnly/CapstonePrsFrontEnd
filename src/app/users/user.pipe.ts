import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterById'
})
export class FilterByIdPipe implements PipeTransform {
  transform(value: any[], selectedId: number): any[] {
    if (!value) return [];
    return value.filter(user => user.id === selectedId);
  }
}