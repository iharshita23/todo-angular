import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css'],
})
export class TodosListComponent {
  @Input() todosList = [{ title: '', done: false, id: '' }];

  @Input() isDarkMode = true;

  @Output() id = new EventEmitter<string>();
  @Output() crossId = new EventEmitter<string>();

  addId(todoId: string) {
    this.id.emit(todoId);
  }

  addCrossId(todoId: string) {
    this.crossId.emit(todoId);
  }

  drop(event: any) {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
function transferArrayItem(data: any, data1: any, previousIndex: any, currentIndex: any) {
  throw new Error('Function not implemented.');
}

