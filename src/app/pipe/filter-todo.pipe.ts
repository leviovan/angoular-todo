import { Pipe, PipeTransform } from '@angular/core';
import { statuses, Todo } from '../component/todo/todo.component';

@Pipe({
  name: 'filterTodo'
})

export class FilterTodoPipe implements PipeTransform {

  transform(value: Todo[], filter: statuses): Todo[] {
    return  filter?value.filter(p=>p.status===filter):value
  }
}
