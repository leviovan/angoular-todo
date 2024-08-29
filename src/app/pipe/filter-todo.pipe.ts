import { Pipe, PipeTransform } from '@angular/core';
import { Status, Todo } from '../types/todo';


@Pipe({
  name: 'filterTodo'
})

export class FilterTodoPipe implements PipeTransform {

  transform(value: Todo[], filter: Status): Todo[] {
    return filter ? value.filter(p => p.status === filter) : value
  }
}
