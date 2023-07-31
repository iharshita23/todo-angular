import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isDarkMode = true;

  todosList = [
    { title: 'Housework', done: false }
  ].map((todo) => ({ ...todo, id: this.appService.generateRandomId() }));

  allTodos: any;
  activeTodos: any;
  completedTodos: any;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.allTodos = this.todosList;
  }

  onChangeMode() {
    console.log('changed');
    if (this.isDarkMode) {
      this.isDarkMode = !this.isDarkMode;
    } else {
      this.isDarkMode = true;
    }
  }

  addTodo(value: string) {
    if (value !== '') {
      this.todosList.push({
        title: value,
        done: false,
        id: this.appService.generateRandomId(),
      });
    }
    this.allTodos = this.todosList;
  }

  changeTodoDone(todoId: string) {
    this.todosList.map((todo) => {
      if (todo.id === todoId) {
        todo.done = !todo.done;
      }
    });
  }

  clearDoneTodos() {
    this.todosList = this.todosList.filter((item) => !item.done);
    this.allTodos = this.todosList;
  }

  calcItemsLeft() {
    return this.todosList.filter((item) => !item.done).length;
  }

  onCrossDelete(todoid: any) {
    this.todosList = this.todosList.filter((item) => item.id !== todoid);
  }

  onClickFilter(filterName: any) {
    if (filterName === 'Active') {
      this.todosList = this.allTodos.filter(
        (item: { done: boolean }) => !item.done
      );
    } else if (filterName === 'Completed') {
      this.todosList = this.allTodos.filter(
        (item: { done: boolean }) => item.done
      );
    } else [(this.todosList = this.allTodos)];
  }
}
